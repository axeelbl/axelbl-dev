import os, time, json, re
from typing import Dict, List
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
    return JSONResponse({
        "ok": True,
        "transcript": text,
        "analysis": analysis,
        "processingMs": round((time.perf_counter() - started) * 1000),
        "notice": "Demo pública no optimizada para producción: audios cortos, máximo 5 MB y procesamiento bajo demanda. Puede tardar más que el sistema real. No subas datos sensibles."
    })
