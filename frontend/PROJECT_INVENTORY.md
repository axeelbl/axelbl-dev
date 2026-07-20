# PROJECT_INVENTORY.md

## Fuentes revisadas
- CV PDF: `Axel_Berral_CV_ES.pdf`
- Portfolio PDF: `Portfolio_Axel_Berral.pdf`
- Repos GitHub públicos/privados disponibles en la cuenta `axeelbl`
- Carpeta local del portátil: `C:\Users\Axel\Desktop\AGENTES_IA`
- Servidor AWS actual `axelbl.dev`

## Clasificación
1. Demo pública completamente funcional.
2. Demo pública limitada/protegida.
3. Demo visual o simulada.
4. Caso de estudio, capturas y explicación.
5. Proyecto privado/no publicar.

| Proyecto | Repo | Descripción | Stack | Estado | Clasificación | URL recomendada | Riesgos |
|---|---|---|---|---|---:|---|---|
| Portfolio personal | `axeelbl/Agente_CV` legado en AWS; nuevo despliegue estático | Web profesional con CV, proyectos, agentes y casos de estudio | HTML/CSS/JS estático, Nginx, Let's Encrypt | Desplegado como primera versión | 1 | `https://axelbl.dev` | Mantener CV actualizado |
| Sistema análisis de llamadas IA | Privado/confidencial | Pipeline audio → Whisper → análisis LLM local | Python, Whisper, Ollama, Docker, GPU, APIs | Experiencia profesional; no publicar código/datos | 4 | `/projects/call-analysis.html` | Confidencialidad empresa/clientes/prompts/datos |
| Framework agentes IA | Repo/proyecto académico/profesional | Framework modular para agentes LLM locales | Python, LangChain, Ollama | Caso de estudio | 4 | `/projects/agent-framework.html` | No exponer prompts internos |
| LoveLink | `https://github.com/axeelbl/LoveLink` | Recomendación social friend-of-a-friend | Grafos, ML | Mostrar como proyecto | 4 | Caso de estudio futuro | Revisar datos personales si hay datasets |
| Dashboard financiero | No confirmado público | Finanzas personales | Python, Flask, SQLite | Mostrar como caso de estudio resumido | 4 | Caso de estudio futuro | No publicar finanzas reales |
| Newspeak | `https://github.com/axeelbl/Newspeak` | Noticias personalizadas en audio | Python/IA/audio | Mostrar si se revisa | 3 | Demo visual futura | Copyright/fuentes/noticias |
| Agente_Asistente_Gym | `https://github.com/axeelbl/Agente_Asistente_Gym` | Chat para gimnasio, reservas y leads | FastAPI, Groq, SQLite, Resend, Twilio | Código listo; demo visual segura actual | 2/3 | `gym.axelbl.dev` cuando haya DNS | Salud/fitness, reservas, PII |
| Agente_CV | `https://github.com/axeelbl/Agente_CV` | Chatbot profesional sobre Axel | FastAPI, Groq, Resend | Útil pero requiere prompt público limitado | 2/3 | `chat.axelbl.dev` | Puede hablar en primera persona; PII |
| Agente_Inversionista | `https://github.com/axeelbl/Agente_Inversionista` | Planes orientativos e información financiera | FastAPI, Groq, NewsAPI/RSS, Resend | Demo limitada con disclaimers | 2/3 | `invest.axelbl.dev` | Asesoramiento financiero, exactitud |
| Agente_JesuCristo | `https://github.com/axeelbl/Agente_JesuCristo` | Chat cristiano y búsqueda de iglesias | FastAPI, Groq, OSM/Overpass, Resend | Demo limitada posible | 2/3 | `jesucristo.axelbl.dev` | Religión, ubicación |
| Agente_Mohamed / Allah | `https://github.com/axeelbl/Agente_Allah` | Chat islámico, mezquitas/qibla | FastAPI, Groq, OSM/Overpass, Resend | Demo limitada posible | 2/3 | `nur.axelbl.dev` | Religión, ubicación, sensibilidad cultural |
| Agente_Noticiero | `https://github.com/axeelbl/Agente_Noticiero` | Presentador/noticias IA | FastAPI, Groq, RSS/NewsAPI, Resend | Funciona email; limpiar README/assets | 3 | `noticias.axelbl.dev` | Noticias inventadas/copyright |
| Agente_Peluquero | `https://github.com/axeelbl/Agente_Peluquero` | Barbería/peluquería, recomendaciones y reservas | FastAPI, SQLite, Groq, Resend, Twilio | Buen candidato demo limitada | 2 | `peluquero.axelbl.dev` | Reservas/contactos, datos ficticios |
| Agente_Restaurante | `https://github.com/axeelbl/Agente_Restaurante` | Restaurante con carta, FAQs y reservas | FastAPI, SQLite, Groq, Resend, Twilio, tests | Mejor candidato demo real | 2 | `restaurante.axelbl.dev` | Reservas/contactos; limitar abuso |
| Agente_Tenista | `https://github.com/axeelbl/Agente_Tenista` | Predicción/seguimiento de tenis | FastAPI, ML, Pandas, Resend | Buen candidato demo limitada | 2 | `tenis.axelbl.dev` | Apuestas: disclaimer fuerte |

## Decisión inicial
La primera versión pública usa demos simuladas/visuales integradas en el portfolio. Esto cumple el objetivo de enseñar producto y capacidades sin exponer claves, datos personales, herramientas privadas ni APIs sin protección. Los subdominios quedan preparados documentalmente para una segunda fase con DNS y servicios aislados.
