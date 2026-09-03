# axelbl.dev

Professional portfolio and multi-agent demo site for Axel Berral López.

Live site: <https://axelbl.dev>

## Structure

```text
frontend/   Static website served by Nginx: home, project case studies and agent pages.
backend/    FastAPI backend for chat, agent routing, bookings, live feeds and lead handling.
deploy/     Deployment notes and Nginx example.
docs/       Extra project notes.
```

## Frontend

The frontend is a static site. It includes:

- Main portfolio page with multilingual switcher: Spanish, English, Catalan and Norwegian.
- Project case studies.
- Public pages for each agent.
- Responsive layout, subtle parallax and animated background.

The deployed server currently serves `frontend/` from `/var/www/axel-portfolio`.

## Backend

The backend is a FastAPI app used by the agent pages.

Main endpoints include:

- `POST /chat` — multi-agent chat endpoint, with agent inferred from the page referer.
- Booking endpoints for service agents.
- News, investment and tennis helper endpoints.
- Lead capture and per-agent CSV/email workflow.

Secrets are intentionally not included. Use `backend/.env.example` as a template.

## Local backend setup

```bash
cd backend
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Fill .env values
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Deployment notes

- Nginx serves the static frontend.
- Nginx proxies `/chat` and backend API routes to FastAPI on `127.0.0.1:8000`.
- Runtime files such as `.env`, logs, SQLite databases and lead CSVs must stay on the server and are ignored by git.

## Security

Do not commit API keys, `.env` files, lead CSVs, runtime databases, logs or SSH keys.

## Quality checks

GitHub Actions validates Python compilation, JavaScript syntax and whitespace on every
pull request and every push to `master`. Run the same checks locally before committing:

```bash
python -m compileall -q backend
find frontend -type f -name '*.js' -print0 | xargs -0 -n1 node --check
node --test tests/frontend-security.mjs
git diff --check
```
