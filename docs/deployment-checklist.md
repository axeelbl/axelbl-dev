# Deployment checklist

1. Sync `frontend/` to `/var/www/axel-portfolio`.
2. Sync `backend/` to the FastAPI app directory.
3. Keep server-only files in place: `.env`, `resend.env`, logs, lead CSVs and runtime DB files.
4. Run `python -m py_compile backend/app/main.py`.
5. Restart Uvicorn/FastAPI.
6. Verify:
   - `/`
   - `/projects/call-analysis.html`
   - `/projects/agent-framework.html`
   - `/projects/financial-dashboard.html`
   - each `/agents/<slug>/`
   - `POST /chat` for at least CV and one non-CV agent.
