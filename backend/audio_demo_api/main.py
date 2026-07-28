import base64, csv, os, time, json, re
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any
from fastapi import FastAPI, File, UploadFile, HTTPException, Request
from fastapi.responses import JSONResponse
import httpx

app = FastAPI(title="Axel audio upload demo", version="1.0")
MAX_BYTES = 5 * 1024 * 1024
ALLOWED_EXT = {".mp3", ".wav", ".m4a", ".mp4", ".webm", ".ogg", ".oga"}
ALLOWED_MIME_PREFIX = ("audio/",)
ALLOWED_MIME = {"video/mp4", "application/octet-stream"}
RATE_WINDOW = 3600
RATE_MAX = 4
_hits: Dict[str, List[float]] = {}
BASE_DIR = Path(__file__).resolve().parent
LEADS_CSV = BASE_DIR / "audio_upload_leads.csv"


def load_extra_env(path: Path, override: bool = True) -> None:
    if not path.exists():
        return
    raw = path.read_bytes()
    text = ""
    for enc in ("utf-8-sig", "utf-16"):
        try:
            text = raw.decode(enc)
            break
        except UnicodeDecodeError:
            continue
    for line in text.splitlines():
        line = line.strip().lstrip("\ufeff")
        if not line or line.startswith("#") or "=" not in line:
            continue
        if line.startswith("export "):
            line = line[7:].strip()
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip("'\"")
        if key and (override or key not in os.environ):
            os.environ[key] = value


for env_path in (
    Path(os.getenv("AUDIO_DEMO_RESEND_ENV", "")) if os.getenv("AUDIO_DEMO_RESEND_ENV") else None,
    BASE_DIR / "resend.env",
    BASE_DIR.parent / "AxelBot" / "resend.env",
    Path("/home/ec2-user/AxelBot/resend.env"),
):
    if env_path:
        load_extra_env(env_path, override=True)


def client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for", "").split(",")[0].strip()
    return forwarded or request.headers.get("x-real-ip") or (request.client.host if request.client else "unknown")


def check_rate(ip: str):
    now = time.time()
    hits = [t for t in _hits.get(ip, []) if now - t < RATE_WINDOW]
    if len(hits) >= RATE_MAX:
        raise HTTPException(status_code=429, detail="Límite temporal alcanzado. Prueba de nuevo más tarde.")
    hits.append(now)
    _hits[ip] = hits


def ext_of(name: str) -> str:
    name = (name or "").lower()
    idx = name.rfind(".")
    return name[idx:] if idx >= 0 else ""


def safe_filename(name: str, fallback: str = "audio-upload") -> str:
    name = (name or fallback).strip().replace("\\", "_").replace("/", "_")
    name = re.sub(r"[^A-Za-z0-9._ -]+", "_", name).strip(" ._")
    return name[:120] or fallback


def parse_resend_from(value: str, label: str) -> str:
    value = (value or "").strip()
    if "<" in value and ">" in value:
        address = value.split("<", 1)[1].split(">", 1)[0].strip()
    else:
        address = value
    return f"{label} <{address}>" if address else value


def request_metadata(request: Request, file: UploadFile, size: int) -> dict[str, str | int]:
    return {
        "timestamp": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "ip": client_ip(request),
        "user_agent": request.headers.get("user-agent", ""),
        "accept_language": request.headers.get("accept-language", ""),
        "referer": request.headers.get("referer", ""),
        "origin": request.headers.get("origin", ""),
        "x_forwarded_for": request.headers.get("x-forwarded-for", ""),
        "x_real_ip": request.headers.get("x-real-ip", ""),
        "cf_ipcountry": request.headers.get("cf-ipcountry", ""),
        "filename": safe_filename(file.filename or "audio-upload"),
        "content_type": file.content_type or "application/octet-stream",
        "size_bytes": size,
    }


def save_audio_lead(meta: dict[str, Any], transcript: str, analysis: dict[str, Any], processing_ms: int, email_sent: bool) -> None:
    fields = ["timestamp", "ip", "user_agent", "accept_language", "referer", "origin", "x_forwarded_for", "x_real_ip", "cf_ipcountry", "filename", "content_type", "size_bytes", "processing_ms", "email_sent", "transcript", "analysis_json"]
    exists = LEADS_CSV.exists()
    row = {**meta, "processing_ms": processing_ms, "email_sent": str(bool(email_sent)), "transcript": transcript, "analysis_json": json.dumps(analysis, ensure_ascii=False)}
    with LEADS_CSV.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        if not exists:
            writer.writeheader()
        writer.writerow(row)


def format_analysis_email(meta: dict[str, Any], transcript: str, analysis: dict[str, Any], processing_ms: int) -> str:
    insights = analysis.get("insights") or []
    insights_text = "\n".join(f"- {item}" for item in insights) if insights else "- Sin insights"
    return f"""Nuevo audio subido en la demo de análisis de audio de axelbl.dev.

METADATOS
- Fecha UTC: {meta.get('timestamp')}
- IP: {meta.get('ip')}
- X-Forwarded-For: {meta.get('x_forwarded_for')}
- X-Real-IP: {meta.get('x_real_ip')}
- País Cloudflare: {meta.get('cf_ipcountry') or 'n/d'}
- User-Agent: {meta.get('user_agent')}
- Idioma navegador: {meta.get('accept_language')}
- Referer: {meta.get('referer')}
- Origin: {meta.get('origin')}
- Archivo: {meta.get('filename')} ({meta.get('content_type')}, {meta.get('size_bytes')} bytes)
- Tiempo procesamiento: {processing_ms} ms

TRANSCRIPCIÓN
{transcript}

ANÁLISIS IA
- Intención: {analysis.get('intent', '—')}
- Sentimiento: {analysis.get('sentiment', '—')}
- Prioridad: {analysis.get('priority', '—')}
- Confianza: {analysis.get('confidence', '—')}
- Resumen: {analysis.get('summary', '—')}

INSIGHTS
{insights_text}
"""


async def send_audio_lead_email(meta: dict[str, Any], data: bytes, transcript: str, analysis: dict[str, Any], processing_ms: int) -> bool:
    api_key = (os.getenv("RESEND_API_KEY") or "").strip()
    base_from = (os.getenv("RESEND_FROM") or "Audio Demo <leads@mail.axelbl.dev>").strip()
    to_email = (os.getenv("RESEND_TO") or "").strip()
    if not api_key or not base_from or not to_email:
        print("Audio lead email not configured: missing RESEND_API_KEY/from/to", flush=True)
        return False
    filename = safe_filename(str(meta.get("filename") or "audio-upload"))
    payload = {
        "from": parse_resend_from(base_from, "Audio Demo"),
        "to": [email.strip() for email in to_email.split(",") if email.strip()],
        "subject": f"Nuevo lead audio demo – {meta.get('ip')} – {filename}",
        "text": format_analysis_email(meta, transcript, analysis, processing_ms),
        "attachments": [{"filename": filename, "content": base64.b64encode(data).decode()}],
    }
    try:
        async with httpx.AsyncClient(timeout=httpx.Timeout(30.0, connect=10.0)) as client:
            response = await client.post(
                "https://api.resend.com/emails",
                headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
                json=payload,
            )
        if 200 <= response.status_code < 300:
            print("Audio lead sent via Resend:", response.status_code, response.text[:200], flush=True)
            return True
        print("Resend audio lead error:", response.status_code, response.text[:500], flush=True)
    except Exception as exc:
        print("Audio lead email exception:", type(exc).__name__, str(exc), flush=True)
    return False


def analyze_text(text: str) -> dict:
    lower = text.lower()
    risk_words = ["no voy a pagar", "devolver", "denuncia", "reclamación", "urgente", "hoy", "cancelar", "enfad", "duplicado", "cobrado", "problema"]
    commercial = ["pedido", "factura", "cargo", "pagar", "cobro", "recibo", "producto", "servicio"]
    support = ["activar", "no funciona", "error", "bloqueado", "ayuda", "revisar", "incidencia"]
    people = len(re.findall(r"\b(cliente|agente|operador|asesor|persona|usted|le ayudo|entiendo)\b", lower))
    risk_score = sum(1 for w in risk_words if w in lower)
    if any(w in lower for w in ["factura", "cargo", "cobro", "recibo", "pagar"]): intent = "Facturación / cobro"
    elif any(w in lower for w in ["pedido", "producto", "envío", "entrega"]): intent = "Pedido / entrega"
    elif any(w in lower for w in support): intent = "Soporte operativo"
    else: intent = "Consulta general"
    priority = "Alta" if risk_score >= 2 or "urgente" in lower or "hoy" in lower else ("Media" if risk_score == 1 else "Baja")
    sentiment = "Tensión detectada" if risk_score >= 2 else ("Neutral con posible incidencia" if risk_score == 1 else "Neutral")
    summary = "Se detecta una conversación" if people >= 2 else "Se detecta un audio de usuario"
    summary += f" orientado a {intent.lower()}."
    bullets = []
    if any(w in lower for w in commercial): bullets.append("Aparecen señales comerciales: pedido, factura, cargo o pago.")
    if risk_score: bullets.append("Hay palabras de riesgo o urgencia que conviene revisar manualmente.")
    if "no voy a pagar" in lower or "devolver" in lower: bullets.append("Posible riesgo de impago/devolución: priorizar seguimiento.")
    if any(w in lower for w in support): bullets.append("Acción recomendada: abrir incidencia y confirmar resolución al usuario.")
    if not bullets: bullets.append("Audio breve sin señales críticas evidentes.")
    return {"intent": intent, "sentiment": sentiment, "priority": priority, "confidence": "Demo", "summary": summary, "insights": bullets[:5]}


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/analyze")
async def analyze(request: Request, file: UploadFile = File(...)):
    check_rate(client_ip(request))
    key = os.environ.get("GROQ_API_KEY")
    if not key:
        raise HTTPException(status_code=503, detail="Demo no configurada todavía.")
    ext = ext_of(file.filename or "")
    ctype = (file.content_type or "").lower()
    if ext not in ALLOWED_EXT:
        raise HTTPException(status_code=400, detail="Formato no soportado. Usa MP3, WAV, M4A, WEBM u OGG.")
    if not (ctype.startswith(ALLOWED_MIME_PREFIX) or ctype in ALLOWED_MIME):
        raise HTTPException(status_code=400, detail="El archivo no parece audio.")
    data = await file.read(MAX_BYTES + 1)
    if not data:
        raise HTTPException(status_code=400, detail="Archivo vacío.")
    if len(data) > MAX_BYTES:
        raise HTTPException(status_code=413, detail="Archivo demasiado grande. Máximo 5 MB.")
    started = time.perf_counter()
    try:
        async with httpx.AsyncClient(timeout=httpx.Timeout(95.0, connect=10.0)) as client:
            resp = await client.post(
                "https://api.groq.com/openai/v1/audio/transcriptions",
                headers={"Authorization": f"Bearer {key}"},
                data={"model": "whisper-large-v3-turbo", "language": "es", "response_format": "json"},
                files={"file": (file.filename or f"audio{ext}", data, ctype or "application/octet-stream")},
            )
        if resp.status_code >= 400:
            raise HTTPException(status_code=502, detail="El proveedor de transcripción no ha podido procesar el audio.")
        payload = resp.json()
        text = (payload.get("text") or "").strip()
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=502, detail="No se ha podido transcribir el audio en esta demo.")
    if not text:
        raise HTTPException(status_code=422, detail="No se detectó voz clara en el audio.")
    analysis = analyze_text(text)
    processing_ms = round((time.perf_counter() - started) * 1000)
    meta = request_metadata(request, file, len(data))
    email_sent = await send_audio_lead_email(meta, data, text, analysis, processing_ms)
    try:
        save_audio_lead(meta, text, analysis, processing_ms, email_sent)
    except Exception as exc:
        print("audio lead save error", type(exc).__name__, str(exc), flush=True)
    return JSONResponse({
        "ok": True,
        "transcript": text,
        "analysis": analysis,
        "processingMs": processing_ms,
        "notice": "Demo pública no optimizada para producción: audios cortos, máximo 5 MB y procesamiento bajo demanda. Puede tardar más que el sistema real. No subas datos sensibles."
    })
