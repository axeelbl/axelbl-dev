# Axel Portfolio Deployment

## Arquitectura

Primera versión desplegada como sitio estático servido por Nginx:

- Web principal: `/var/www/axel-portfolio`
- Proxy público: Nginx
- HTTPS: Let's Encrypt (`axelbl.dev`, `www.axelbl.dev`)
- Demos de agentes: visuales/simuladas en frontend, sin exponer claves ni backend público
- AxelBot/FastAPI legado: conservado en `/home/ec2-user/AxelBot`, proceso uvicorn en `127.0.0.1/8000` o equivalente interno según configuración actual

Motivo: la instancia es pequeña (`t3.micro`, ~1 GB RAM, 8 GB disco) y no tiene Docker activo. Un sitio estático es más robusto, rápido y seguro para la web principal; las demos reales pueden añadirse después como servicios aislados.

## Estructura

```text
/var/www/axel-portfolio/
  index.html
  styles.css
  app.js
  favicon.svg
  robots.txt
  sitemap.xml
  assets/
    Axel_Berral_CV_ES.pdf
    Portfolio_Axel_Berral.pdf
  projects/
    call-analysis.html
    agent-framework.html
  README.md
  PROJECT_INVENTORY.md
  DEPLOYMENT_REPORT.md
```

## URLs

- Principal: `https://axelbl.dev`
- WWW: `https://www.axelbl.dev`
- CV: `https://axelbl.dev/assets/Axel_Berral_CV_ES.pdf`
- Caso análisis llamadas: `https://axelbl.dev/projects/call-analysis.html`
- Caso framework agentes: `https://axelbl.dev/projects/agent-framework.html`

## Subdominios recomendados para fase 2

Crear DNS A hacia `13.48.55.179`:

| Tipo | Nombre | Valor | TTL | Motivo |
|---|---|---|---:|---|
| A | `chat.axelbl.dev` | `13.48.55.179` | 300 | Demo segura Agente CV |
| A | `agents.axelbl.dev` | `13.48.55.179` | 300 | Hub de agentes |
| A | `restaurante.axelbl.dev` | `13.48.55.179` | 300 | Demo Agente Restaurante |
| A | `tenis.axelbl.dev` | `13.48.55.179` | 300 | Demo Agente Tenista |
| A | `peluquero.axelbl.dev` | `13.48.55.179` | 300 | Demo Agente Peluquero |

## Servicios

- Nginx: `sudo systemctl status nginx`
- Certbot renew timer: `systemctl list-timers | grep certbot`
- App legado AxelBot: revisar proceso `ps aux | grep uvicorn`

## Arrancar / detener / actualizar

### Web estática

Actualizar archivos:

```bash
sudo rsync -a --delete ./portfolio_build/ /var/www/axel-portfolio/
sudo nginx -t
sudo systemctl reload nginx
```

### Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl restart nginx
journalctl -u nginx -n 100 --no-pager
```

### Certificados

```bash
sudo certbot certificates
sudo certbot renew --dry-run
```

## Logs

```bash
sudo tail -f /var/log/nginx/axelbl.dev.access.log
sudo tail -f /var/log/nginx/axelbl.dev.error.log
```

## Variables de entorno

La web estática no necesita secretos.

Las demos reales futuras deberán usar `.env` fuera de Git con, según agente:

- `GROQ_API_KEY`
- `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`
- `TWILIO_SID`, `TWILIO_TOKEN`, `TWILIO_PHONE`
- `NEWSAPI_API_KEY` cuando proceda

## Seguridad

- No hay claves en frontend.
- Las demos actuales son simuladas.
- Nginx incluye cabeceras de seguridad básicas.
- Los PDFs publicados son los enviados para portfolio/CV.
- No se publican `.env`, logs, CSVs de leads ni bases de datos.

## Añadir un proyecto

1. Revisar privacidad y licencias.
2. Crear página en `/projects/nombre.html`.
3. Añadir tarjeta en `index.html`.
4. Actualizar `sitemap.xml` y `PROJECT_INVENTORY.md`.
5. Probar responsive y enlaces.

## Añadir un agente real

1. Crear subdominio DNS.
2. Preparar servicio aislado, idealmente systemd o Docker Compose.
3. Backend solo en `127.0.0.1`.
4. Nginx reverse proxy con HTTPS.
5. Rate limiting, timeouts, CORS restrictivo y límites de input.
6. `.env` fuera de Git.
7. Healthcheck y logs.
8. Botón de desactivación rápida: quitar upstream o devolver `503` en Nginx.

## Pendientes

- Implementar backend real limitado para Agente CV/Restaurante/Tenista.
- Añadir capturas reales de proyectos.
- Crear más casos de estudio.
- Configurar subdominios cuando haya acceso DNS.
- Convertir AxelBot legado a systemd y host `127.0.0.1`.


## URLs públicas de agentes

- Gym: https://axelbl.dev/agents/gym/
- CV: https://axelbl.dev/agents/cv/
- Inversionista: https://axelbl.dev/agents/inversionista/
- Jesucristo: https://axelbl.dev/agents/jesucristo/
- Nur / Mohamed: https://axelbl.dev/agents/nur/
- Noticiero: https://axelbl.dev/agents/noticiero/
- Peluquero: https://axelbl.dev/agents/peluquero/
- Restaurante: https://axelbl.dev/agents/restaurante/
- Tenista: https://axelbl.dev/agents/tenista/

Código saneado de los proyectos copiado en `/opt/axel-agents/projects` sin `.env`, `venv`, `.git`, CSVs, DBs ni logs.
