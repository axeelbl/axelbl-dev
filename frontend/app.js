const i18n = {
  es: {
    meta: {
      title: 'Axel Berral López — Ingeniero Informático & AI Engineer',
      description: 'Portfolio profesional de Axel Berral López: Ingeniero Informático y AI Engineer especializado en agentes IA, LLMs, backend y despliegue de sistemas end-to-end.',
      ogDescription: 'IA aplicada, agentes LLM, backend, cloud y proyectos full-stack.'
    },
    navAria: 'Principal',
    language: { aria: 'Cambiar idioma' },
    nav: { experience: 'Experiencia', agents: 'Agentes', work: 'Proyectos', contact: 'Contacto' },
    hero: {
      location: 'Barcelona, España', role: 'Ingeniero Informático / AI Engineer',
      title: 'Sistemas de IA, agentes y backend con foco en producción.',
      copy: 'Diseño y despliego sistemas de IA aplicada: agentes LLM, pipelines de audio, APIs, automatización y demos full-stack construidas para ser entendibles, mantenibles y seguras.'
    },
    buttons: { viewAgents: 'Ver agentes', downloadCv: 'Descargar CV' },
    strip: { aria: 'Áreas' },
    sections: { profile: '01 / Perfil', experience: '02 / Experiencia', agents: '03 / Agentes IA', work: '04 / Proyectos destacados', stack: '05 / Stack', contact: '06 / Contacto' },
    profile: { title: 'Ingeniero Informático construyendo productos de IA aplicada.', copy: 'Actualmente estoy centrado en sistemas de IA end-to-end: desde la ingesta de datos y la orquestación de modelos hasta servicios backend, despliegue e interfaces para usuarios.' },
    experience: {
      mst: { date: 'Feb 2026 — Actualidad', title: 'AI Software Engineer — MST Holding', copy: 'Sistemas de análisis de llamadas con IA, pipelines con Whisper, LLMs locales, APIs backend y despliegue orientado a GPU.' },
      stikets: { date: 'Jun 2025 — Ago 2025', title: 'Prácticas IA — Stikets', copy: 'Desarrollo de framework de agentes IA y mejoras de frontend/backend.' },
      udl: { title: 'Ingeniería Informática — Universitat de Lleida', copy: 'Erasmus en NTNU Gjøvik, Noruega. Foco en ingeniería software, IA y sistemas de datos.' }
    },
    agents: { title: 'Proyectos de agentes', copy: 'Cada agente tiene su propia página pública. Los backends se conectan progresivamente con límites seguros, aislamiento de entorno y sin secretos expuestos.' },
    agent: {
      restaurant: { title: 'Agente Restaurante', copy: 'Reservas, menú y recomendaciones' }, tennis: { title: 'Agente Tenista', copy: 'Análisis responsable de partidos y predicciones' }, barber: { title: 'Agente Peluquero', copy: 'Estilos, reservas y flujos de clientes' }, cv: { title: 'Agente CV', copy: 'Chatbot profesional basado en mi perfil' }, gym: { title: 'Asistente Gym', copy: 'Entrenamiento, reservas y captación de leads' }, investor: { title: 'Agente Inversionista', copy: 'Planificación educativa de inversión' }, news: { title: 'Agente Noticiero', copy: 'Presentador IA y resúmenes de noticias' }, christian: { title: 'Agente Cristiano', copy: 'Conversación espiritual y búsqueda local' }, nur: { title: 'Agente Nur', copy: 'Asistente islámico y búsqueda de mezquitas' }
    },
    work: {
      caseStudy: 'Leer caso', call: { kicker: 'IA en producción', title: 'Sistema de análisis de llamadas con IA', copy: 'Ingesta de audio, transcripción con Whisper, análisis con LLMs locales y servicios backend para evaluación operativa. Caso público sin datos confidenciales.' }, framework: { kicker: 'Arquitectura LLM', title: 'Framework de agentes', copy: 'Framework modular para crear agentes LLM locales reutilizables.' }, lovelink: { kicker: 'Grafos / ML', copy: 'Sistema de recomendación basado en conexiones sociales indirectas.' }, dashboard: { kicker: 'Full stack', title: 'Dashboard financiero', copy: 'Dashboard de finanzas personales con Python, Flask y SQLite.' }
    },
    stack: { languages: 'Lenguajes' },
    contact: { title: 'Disponible para ingeniería de IA, desarrollo software y colaboraciones de IA aplicada.' }
  },
  en: {
    meta: { title: 'Axel Berral López — Computer Engineer & AI Engineer', description: 'Professional portfolio of Axel Berral López: Computer Engineer and AI Engineer specialized in AI agents, LLMs, backend and end-to-end system deployment.', ogDescription: 'Applied AI, LLM agents, backend, cloud and full-stack projects.' },
    navAria: 'Main', language: { aria: 'Change language' }, nav: { experience: 'Experience', agents: 'Agents', work: 'Work', contact: 'Contact' },
    hero: { location: 'Barcelona, Spain', role: 'Computer Engineer / AI Engineer', title: 'AI systems, agents and backend software with production focus.', copy: 'I design and deploy applied AI systems: LLM agents, audio pipelines, APIs, automation and full-stack demos built to be understandable, maintainable and safe.' },
    buttons: { viewAgents: 'View agents', downloadCv: 'Download CV' }, strip: { aria: 'Areas' }, sections: { profile: '01 / Profile', experience: '02 / Experience', agents: '03 / AI Agents', work: '04 / Selected work', stack: '05 / Stack', contact: '06 / Contact' },
    profile: { title: 'Computer Engineer building applied AI products.', copy: 'Currently focused on end-to-end AI systems: from data ingestion and model orchestration to backend services, deployment and user-facing interfaces.' },
    experience: { mst: { date: 'Feb 2026 — Present', title: 'AI Software Engineer — MST Holding', copy: 'AI call-analysis systems, Whisper pipelines, local LLMs, backend APIs and GPU-oriented deployment.' }, stikets: { date: 'Jun 2025 — Aug 2025', title: 'AI Internship — Stikets', copy: 'Agent framework development and frontend/backend improvements.' }, udl: { title: 'Computer Engineering — Universitat de Lleida', copy: 'Erasmus at NTNU Gjøvik, Norway. Focus on software engineering, AI and data systems.' } },
    agents: { title: 'Agent projects', copy: 'Each agent has its own public page. Backends are connected progressively with secure limits, environment isolation and no exposed secrets.' },
    agent: { restaurant: { title: 'Restaurant Agent', copy: 'Reservations, menu and recommendations' }, tennis: { title: 'Tennis Agent', copy: 'Responsible match analysis and predictions' }, barber: { title: 'Barber Agent', copy: 'Styles, bookings and customer flows' }, cv: { title: 'CV Agent', copy: 'Professional chatbot based on my profile' }, gym: { title: 'Gym Assistant', copy: 'Training, booking and lead capture' }, investor: { title: 'Investment Agent', copy: 'Educational investment planning' }, news: { title: 'News Anchor Agent', copy: 'AI presenter and news summaries' }, christian: { title: 'Christian Agent', copy: 'Spiritual conversation and local search' }, nur: { title: 'Nur Agent', copy: 'Islamic assistant and mosque search' } },
    work: { caseStudy: 'Read case study', call: { kicker: 'Production AI', title: 'AI call analysis system', copy: 'Audio ingestion, Whisper transcription, local LLM analysis and backend services for operational evaluation. Public case study without confidential data.' }, framework: { kicker: 'LLM Architecture', title: 'Agent framework', copy: 'Modular framework for building reusable local LLM agents.' }, lovelink: { kicker: 'Graphs / ML', copy: 'Recommendation system based on indirect social connections.' }, dashboard: { kicker: 'Full stack', title: 'Financial dashboard', copy: 'Personal finance dashboard with Python, Flask and SQLite.' } },
    stack: { languages: 'Languages' }, contact: { title: 'Available for AI engineering, software development and applied AI collaborations.' }
  },
  ca: {
    meta: { title: 'Axel Berral López — Enginyer Informàtic & AI Engineer', description: 'Portafolis professional d’Axel Berral López: Enginyer Informàtic i AI Engineer especialitzat en agents IA, LLMs, backend i desplegament de sistemes end-to-end.', ogDescription: 'IA aplicada, agents LLM, backend, cloud i projectes full-stack.' },
    navAria: 'Principal', language: { aria: 'Canviar idioma' }, nav: { experience: 'Experiència', agents: 'Agents', work: 'Projectes', contact: 'Contacte' },
    hero: { location: 'Barcelona, Espanya', role: 'Enginyer Informàtic / AI Engineer', title: 'Sistemes d’IA, agents i backend amb focus en producció.', copy: 'Dissenyo i desplego sistemes d’IA aplicada: agents LLM, pipelines d’àudio, APIs, automatització i demos full-stack construïdes perquè siguin entenedores, mantenibles i segures.' },
    buttons: { viewAgents: 'Veure agents', downloadCv: 'Descarregar CV' }, strip: { aria: 'Àrees' }, sections: { profile: '01 / Perfil', experience: '02 / Experiència', agents: '03 / Agents IA', work: '04 / Projectes destacats', stack: '05 / Stack', contact: '06 / Contacte' },
    profile: { title: 'Enginyer Informàtic construint productes d’IA aplicada.', copy: 'Actualment estic centrat en sistemes d’IA end-to-end: des de la ingesta de dades i l’orquestració de models fins a serveis backend, desplegament i interfícies per a usuaris.' },
    experience: { mst: { date: 'Feb 2026 — Actualitat', title: 'AI Software Engineer — MST Holding', copy: 'Sistemes d’anàlisi de trucades amb IA, pipelines amb Whisper, LLMs locals, APIs backend i desplegament orientat a GPU.' }, stikets: { date: 'Jun 2025 — Ago 2025', title: 'Pràctiques IA — Stikets', copy: 'Desenvolupament d’un framework d’agents IA i millores de frontend/backend.' }, udl: { title: 'Enginyeria Informàtica — Universitat de Lleida', copy: 'Erasmus a NTNU Gjøvik, Noruega. Focus en enginyeria del software, IA i sistemes de dades.' } },
    agents: { title: 'Projectes d’agents', copy: 'Cada agent té la seva pròpia pàgina pública. Els backends es connecten progressivament amb límits segurs, aïllament d’entorn i sense secrets exposats.' },
    agent: { restaurant: { title: 'Agent Restaurant', copy: 'Reserves, menú i recomanacions' }, tennis: { title: 'Agent Tennista', copy: 'Anàlisi responsable de partits i prediccions' }, barber: { title: 'Agent Perruquer', copy: 'Estils, reserves i fluxos de clients' }, cv: { title: 'Agent CV', copy: 'Chatbot professional basat en el meu perfil' }, gym: { title: 'Assistent Gym', copy: 'Entrenament, reserves i captació de leads' }, investor: { title: 'Agent Inversor', copy: 'Planificació educativa d’inversió' }, news: { title: 'Agent Noticiari', copy: 'Presentador IA i resums de notícies' }, christian: { title: 'Agent Cristià', copy: 'Conversa espiritual i cerca local' }, nur: { title: 'Agent Nur', copy: 'Assistent islàmic i cerca de mesquites' } },
    work: { caseStudy: 'Llegir cas', call: { kicker: 'IA en producció', title: 'Sistema d’anàlisi de trucades amb IA', copy: 'Ingesta d’àudio, transcripció amb Whisper, anàlisi amb LLMs locals i serveis backend per a avaluació operativa. Cas públic sense dades confidencials.' }, framework: { kicker: 'Arquitectura LLM', title: 'Framework d’agents', copy: 'Framework modular per crear agents LLM locals reutilitzables.' }, lovelink: { kicker: 'Grafs / ML', copy: 'Sistema de recomanació basat en connexions socials indirectes.' }, dashboard: { kicker: 'Full stack', title: 'Dashboard financer', copy: 'Dashboard de finances personals amb Python, Flask i SQLite.' } },
    stack: { languages: 'Llenguatges' }, contact: { title: 'Disponible per a enginyeria d’IA, desenvolupament software i col·laboracions d’IA aplicada.' }
  },
  no: {
    meta: { title: 'Axel Berral López — Dataingeniør & AI Engineer', description: 'Profesjonell portefølje for Axel Berral López: dataingeniør og AI Engineer med fokus på AI-agenter, LLM-er, backend og end-to-end systemutrulling.', ogDescription: 'Anvendt AI, LLM-agenter, backend, cloud og full-stack prosjekter.' },
    navAria: 'Hovedmeny', language: { aria: 'Bytt språk' }, nav: { experience: 'Erfaring', agents: 'Agenter', work: 'Prosjekter', contact: 'Kontakt' },
    hero: { location: 'Barcelona, Spania', role: 'Dataingeniør / AI Engineer', title: 'AI-systemer, agenter og backend med fokus på produksjon.', copy: 'Jeg designer og deployer anvendte AI-systemer: LLM-agenter, lydpipelines, API-er, automatisering og full-stack demoer bygget for å være forståelige, vedlikeholdbare og sikre.' },
    buttons: { viewAgents: 'Se agenter', downloadCv: 'Last ned CV' }, strip: { aria: 'Områder' }, sections: { profile: '01 / Profil', experience: '02 / Erfaring', agents: '03 / AI-agenter', work: '04 / Utvalgte prosjekter', stack: '05 / Stack', contact: '06 / Kontakt' },
    profile: { title: 'Dataingeniør som bygger anvendte AI-produkter.', copy: 'Akkurat nå fokuserer jeg på end-to-end AI-systemer: fra datainntak og modellorkestrering til backend-tjenester, utrulling og brukergrensesnitt.' },
    experience: { mst: { date: 'Feb 2026 — Nå', title: 'AI Software Engineer — MST Holding', copy: 'AI-systemer for samtaleanalyse, Whisper-pipelines, lokale LLM-er, backend-API-er og GPU-orientert deployment.' }, stikets: { date: 'Jun 2025 — Aug 2025', title: 'AI-praksis — Stikets', copy: 'Utvikling av et rammeverk for AI-agenter og forbedringer i frontend/backend.' }, udl: { title: 'Dataingeniør — Universitat de Lleida', copy: 'Erasmus ved NTNU Gjøvik, Norge. Fokus på software engineering, AI og datasystemer.' } },
    agents: { title: 'Agentprosjekter', copy: 'Hver agent har sin egen offentlige side. Backendene kobles gradvis med sikre grenser, miljøisolasjon og uten eksponerte hemmeligheter.' },
    agent: { restaurant: { title: 'Restaurantagent', copy: 'Reservasjoner, meny og anbefalinger' }, tennis: { title: 'Tennisagent', copy: 'Ansvarlig kampanalyse og prediksjoner' }, barber: { title: 'Frisøragent', copy: 'Stiler, booking og kundeflyt' }, cv: { title: 'CV-agent', copy: 'Profesjonell chatbot basert på profilen min' }, gym: { title: 'Gymassistent', copy: 'Trening, booking og lead capture' }, investor: { title: 'Investeringsagent', copy: 'Pedagogisk investeringsplanlegging' }, news: { title: 'Nyhetsanker-agent', copy: 'AI-presentatør og nyhetssammendrag' }, christian: { title: 'Kristen agent', copy: 'Åndelig samtale og lokalt søk' }, nur: { title: 'Nur-agent', copy: 'Islamsk assistent og moskésøk' } },
    work: { caseStudy: 'Les case study', call: { kicker: 'Produksjons-AI', title: 'AI-system for samtaleanalyse', copy: 'Lydinntak, Whisper-transkripsjon, analyse med lokale LLM-er og backend-tjenester for operasjonell evaluering. Offentlig case uten konfidensielle data.' }, framework: { kicker: 'LLM-arkitektur', title: 'Agentrammeverk', copy: 'Modulært rammeverk for å bygge gjenbrukbare lokale LLM-agenter.' }, lovelink: { kicker: 'Grafer / ML', copy: 'Anbefalingssystem basert på indirekte sosiale forbindelser.' }, dashboard: { kicker: 'Full stack', title: 'Finansdashboard', copy: 'Dashboard for personlig økonomi med Python, Flask og SQLite.' } },
    stack: { languages: 'Språk' }, contact: { title: 'Tilgjengelig for AI engineering, softwareutvikling og samarbeid innen anvendt AI.' }
  }
};

const getValue = (obj, path) => path.split('.').reduce((acc, part) => acc && acc[part], obj);

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang;
  document.title = dict.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', dict.meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', dict.meta.ogDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getValue(dict, el.dataset.i18n);
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      const value = getValue(dict, key);
      if (attr && value) el.setAttribute(attr, value);
    });
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });

  try { localStorage.setItem('preferredLanguage', lang); } catch (_) {}
}

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang || 'es'));
});

let initialLanguage = 'es';
try {
  const stored = localStorage.getItem('preferredLanguage');
  if (stored && i18n[stored]) initialLanguage = stored;
} catch (_) {}
applyLanguage(initialLanguage);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}


function initAmbientCanvas() {
  if (prefersReduced) return;
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let frame = 0;

  const palette = [
    'rgba(215,255,104,0.34)',
    'rgba(143,179,255,0.28)',
    'rgba(255,255,255,0.16)'
  ];

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(18, Math.min(42, Math.round(width / 42)));
    particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseY: Math.random() * height,
      r: Math.random() * 1.6 + 0.45,
      speed: Math.random() * 0.18 + 0.045,
      drift: Math.random() * 0.28 + 0.08,
      phase: Math.random() * Math.PI * 2,
      color: palette[i % palette.length]
    }));
  };

  const drawWave = (time, yOffset, color, amplitude, speed) => {
    ctx.beginPath();
    const base = height * yOffset;
    ctx.moveTo(0, base);
    for (let x = 0; x <= width; x += 18) {
      const y = base + Math.sin((x * 0.006) + time * speed) * amplitude + Math.sin((x * 0.014) - time * speed * 0.55) * amplitude * 0.35;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  const draw = () => {
    frame += 0.01;
    ctx.clearRect(0, 0, width, height);

    drawWave(frame, 0.28, 'rgba(215,255,104,0.055)', 18, 0.75);
    drawWave(frame, 0.64, 'rgba(143,179,255,0.050)', 22, 0.55);

    for (const p of particles) {
      p.x += p.speed;
      p.y = p.baseY + Math.sin(frame + p.phase) * 18 + Math.cos(frame * 0.7 + p.phase) * p.drift * 24;
      if (p.x > width + 12) p.x = -12;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });
  requestAnimationFrame(draw);
}


function initBackgroundParticles() {
  if (prefersReduced) return;
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let raf = 0;
  let mouseX = 0.5;
  let mouseY = 0.5;

  const colors = [
    'rgba(215,255,104,0.72)',
    'rgba(143,179,255,0.58)',
    'rgba(241,243,245,0.42)'
  ];

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(34, Math.min(76, Math.round(width / 22)));
    particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.45 + 0.75,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.20 - 0.025,
      pulse: Math.random() * Math.PI * 2,
      color: colors[i % colors.length]
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    const driftX = (mouseX - 0.5) * 10;
    const driftY = (mouseY - 0.5) * 8;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.018;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      const radius = p.r + Math.sin(p.pulse) * 0.35;
      ctx.beginPath();
      ctx.arc(p.x + driftX, p.y + driftY, radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    raf = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => {
    mouseX = event.clientX / Math.max(1, width);
    mouseY = event.clientY / Math.max(1, height);
  }, { passive: true });
  raf = requestAnimationFrame(draw);
}

function initReveal() {
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (!revealItems.length) return;
  if (!('IntersectionObserver' in window) || prefersReduced) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  revealItems.forEach((el) => observer.observe(el));
}

function initParallax() {
  if (prefersReduced) return;
  const layers = [...document.querySelectorAll('[data-parallax-layer]')];
  const strip = document.querySelector('[data-marquee]');
  let ticking = false;

  const render = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    document.documentElement.style.setProperty('--scroll-progress', String(clamp(scrollY / maxScroll, 0, 1)));

    if (window.innerWidth > 760) {
      const viewportCenter = scrollY + window.innerHeight / 2;
      layers.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementCenter = scrollY + rect.top + rect.height / 2;
        const depth = Number(el.dataset.parallaxLayer || 0.08);
        const offset = clamp((viewportCenter - elementCenter) * depth, -90, 90);
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    } else {
      layers.forEach((el) => { el.style.transform = ''; });
    }

    if (strip) {
      strip.style.setProperty('--strip-shift', `${Math.round(scrollY * 0.05)}px`);
    }
    ticking = false;
  };

  const requestRender = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  };

  render();
  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', requestRender, { passive: true });
}

function initPointerDepth() {
  if (prefersReduced || isCoarsePointer) return;
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      card.style.setProperty('--mx', mx.toFixed(3));
      card.style.setProperty('--my', my.toFixed(3));
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--mx', '0');
      card.style.setProperty('--my', '0');
    });
  });

  document.querySelectorAll('.work-item').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
    });
  });
}

initReveal();
initParallax();
initPointerDepth();
initBackgroundParticles();
