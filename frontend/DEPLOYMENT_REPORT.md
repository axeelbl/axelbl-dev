# DEPLOYMENT_REPORT.md

## Resumen

Se despliega una primera versión profesional, responsive y segura del portfolio de Axel Berral López en `https://axelbl.dev`.

## Auditoría AWS

- Host: Amazon Linux 2023 en EC2 `t3.micro`
- IP pública: `13.48.55.179`
- CPU/RAM: 2 vCPU, ~916 MiB RAM
- Disco: 8 GB, ~5.2 GB libres en auditoría
- Proxy: Nginx 1.28
- HTTPS: Certbot/Let's Encrypt para `axelbl.dev` y `www.axelbl.dev`
- Docker: no activo/detectado
- App previa: `/home/ec2-user/AxelBot`, FastAPI/Uvicorn en puerto 8000

## DNS observado

- `axelbl.dev` → `13.48.55.179`
- `www.axelbl.dev` → `13.48.55.179`
- Subdominios de agentes no observados todavía.

## Backup realizado

Backup antes de modificar Nginx/app:

```text
/home/ec2-user/backups/portfolio-20260718-173123
```

Incluye configuración Nginx y copia de código/config relevante del AxelBot legado, excluyendo venv/logs pesados.

## Cambios realizados

- Creado sitio estático en `/var/www/axel-portfolio`.
- Publicado CV PDF en `/assets/Axel_Berral_CV_ES.pdf`.
- Publicado portfolio PDF en `/assets/Portfolio_Axel_Berral.pdf`.
- Añadidos casos de estudio iniciales:
  - `/projects/call-analysis.html`
  - `/projects/agent-framework.html`
- Añadidos `robots.txt`, `sitemap.xml`, favicon y JSON-LD Person.
- Nginx configurado para servir estáticos con HTTPS y cabeceras de seguridad.
- Demos de agentes implementadas como simulación segura, sin backend ni claves públicas.

## Servicios desplegados

| Servicio | URL | Estado | Tecnología | Cómo reiniciarlo |
|---|---|---|---|---|
| Portfolio | `https://axelbl.dev` | Activo | HTML/CSS/JS + Nginx | `sudo systemctl reload nginx` |
| Portfolio www | `https://www.axelbl.dev` | Activo | Nginx + Let's Encrypt | `sudo systemctl reload nginx` |
| Demo agentes visual | `https://axelbl.dev#agent-demo` | Activo | JS frontend simulado | Actualizar estáticos + reload Nginx |
| AxelBot legado | Interno/pendiente | Conservado | FastAPI/Uvicorn | Revisar `ps aux | grep uvicorn` |

## Seguridad

- No se publican `.env`, claves, CSVs, logs ni bases de datos.
- Demos públicas no llaman APIs reales.
- Cabeceras añadidas: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- Nginx sirve estático; si falla una demo futura, la web principal no depende de ella.

## Limitaciones

- No se desplegaron agentes reales porque requieren claves, rate limiting, aislamiento y posiblemente DNS de subdominios.
- La instancia tiene poca RAM y no tiene Docker activo; conviene no levantar muchos servicios simultáneos.
- AxelBot legado sigue requiriendo endurecimiento: systemd, localhost-only, logs/leads fuera del repo.

## Próximos pasos recomendados

1. Crear subdominios DNS para demos reales.
2. Elegir 1-2 demos reales iniciales: `Agente_Restaurante` y `Agente_Tenista`.
3. Crear servicios systemd por demo o instalar Docker Compose si se acepta el coste de recursos.
4. Añadir capturas reales y más casos de estudio.
5. Convertir el chat CV a backend público limitado con rate limiting.
6. Endurecer SSH y proceso legado con cuidado para no perder acceso.

## Ajuste adicional de Nginx

- `axelbl.dev.conf` ahora sirve `/var/www/axel-portfolio` directamente por HTTPS.
- `axelbot.conf` fue movido a archivo `.disabled-*` para evitar que el vhost genérico HTTP sirva la app antigua por hosts no coincidentes.
- El código/proceso AxelBot legado no fue eliminado.
- Se ejecutó `sudo nginx -t` antes de recargar.

## Pruebas realizadas

```text
200 https://axelbl.dev/
200 https://www.axelbl.dev/
200 https://axelbl.dev/projects/call-analysis.html
200 https://axelbl.dev/projects/agent-framework.html
200 https://axelbl.dev/robots.txt
301 http://axelbl.dev/ -> https://axelbl.dev/
```

Certificado actual:

```text
CN=axelbl.dev
notBefore=May 24 22:24:00 2026 GMT
notAfter=Aug 22 22:23:59 2026 GMT
```


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
