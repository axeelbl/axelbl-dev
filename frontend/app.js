const i18n = {
  es: {
    meta: {
      title: 'Axel Berral López — Ingeniero Informático & AI Engineer',
      description: 'Diseño y despliego sistemas de IA aplicada: agentes LLM, pipelines de audio, APIs, automatización y demos full-stack seguras y mantenibles.',
      ogDescription: 'Ingeniero Informático y AI Engineer especializado en agentes LLM, pipelines de audio, APIs, automatización y sistemas de IA aplicada.'
    },
    navAria: 'Principal',
    language: { aria: 'Cambiar idioma' },
    nav: { experience: 'Experiencia', agents: 'Agentes', work: 'Proyectos', contact: 'Contacto' },
    hero: {
      location: 'Barcelona, España', role: 'Ingeniero Informático / AI Engineer',
      title: 'Sistemas de IA, agentes y backend con foco en producción.',
      copy: 'Diseño y despliego sistemas de IA aplicada: agentes LLM, pipelines de audio, APIs, automatización y demos full-stack construidas para ser entendibles, mantenibles y seguras.'
    },
    buttons: { viewAgents: 'Ver agentes', downloadCv: 'Descargar CV', openAgent: 'Abrir' }, studioCta: { kicker: 'AI Agent Studio', title: 'Crea tu propio agente en segundos', copy: 'Construye una demo de agente personal con sector, herramientas, instrucciones, conversación, grafo de ejecución y modo técnico.', button: 'Crear mi agente' },
    strip: { aria: 'Áreas' },
    sections: { profile: '01 / Perfil', experience: '02 / Experiencia', agents: '03 / Agentes IA', work: '04 / Proyectos destacados', stack: '05 / Stack', credentials: '06 / Credenciales', contact: '07 / Contacto' },
    profile: { title: 'Ingeniero Informático construyendo productos de IA aplicada.', copy: 'Actualmente estoy centrado en sistemas de IA end-to-end: desde la ingesta de datos y la orquestación de modelos hasta servicios backend, despliegue e interfaces para usuarios.' },
    experience: {
      mst: { date: 'Feb 2026 — Actualidad', title: 'AI Software Engineer — MST Holding', copy: 'Sistemas de análisis de llamadas con IA, pipelines con Whisper, LLMs locales, APIs backend y despliegue orientado a GPU.' },
      stikets: { date: 'Jun 2025 — Ago 2025', title: 'Prácticas IA — Stikets', copy: 'Desarrollo de framework de agentes IA y mejoras de frontend/backend.' },
      udl: { title: 'Ingeniería Informática — Universitat de Lleida', copy: 'Erasmus en NTNU Gjøvik, Noruega. Foco en ingeniería software, IA y sistemas de datos.' }
    },
    agents: { title: 'Proyectos de agentes', copy: 'Cada agente tiene su propia página pública. Los backends se conectan progresivamente con límites seguros, aislamiento de entorno y sin secretos expuestos.' },
    agent: {
      restaurant: { title: 'Agente Restaurante', copy: 'Reservas, menú y recomendaciones' }, tennis: { title: 'Agente Tenista', copy: 'Análisis responsable de partidos y predicciones' }, barber: { title: 'Agente Peluquero', copy: 'Estilos, reservas y flujos de clientes' }, cv: { title: 'Agente CV', copy: 'Chatbot profesional basado en mi perfil' }, gym: { title: 'Agente Gym', copy: 'Entrenamiento, reservas y captación de leads' }, investor: { title: 'Agente Inversor', copy: 'Planificación educativa de inversión' }, news: { title: 'Agente Noticiero', copy: 'Presentador IA y resúmenes de noticias' }, christian: { title: 'Agente Cristiano', copy: 'Conversación espiritual y búsqueda local' }, nur: { title: 'Agente Nur', copy: 'Asistente islámico y búsqueda de mezquitas' }
    },
    work: {
      caseStudy: 'Leer caso', website: 'Ver web', audioDemoCta: 'Probar demo de análisis de audio', call: { kicker: 'IA en producción', title: 'Sistema de análisis de llamadas con IA', copy: 'Proyecto profesional desarrollado en MST Holding en el contexto de servicios para un cliente del sector financiero: pipeline end-to-end para transformar audios reales en transcripciones, rutas y evaluaciones automáticas con Whisper, LLMs locales y backend productivo on-premise.' }, callDisclaimer: 'Información presentada de forma agregada, sin datos sensibles ni detalles internos del cliente.', callMetrics: { aria: 'Métricas del sistema de análisis de llamadas', evaluatedAudio: 'audios evaluados automáticamente', peak: 'Audios x hora', pipeline: 'pipeline completo en producción', privateGpu: 'GPU local y datos privados' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Investigación · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Investigación experimental sobre cuándo las GNN aportan valor real frente a MLPs y modelos ligeros para predicción térmica en grafos.' }, framework: { kicker: 'Arquitectura LLM', title: 'Framework de agentes', copy: 'Framework modular para crear agentes LLM locales reutilizables.' }, lovelink: { kicker: 'Grafos / ML', copy: 'Sistema de recomendación basado en conexiones sociales indirectas.' }, dashboard: { kicker: 'Full stack', title: 'Dashboard financiero', copy: 'Dashboard de finanzas personales con Python, Flask y SQLite.' }
    },
    stack: { languages: 'Lenguajes' },
    credentials: { title: 'Formación, idiomas y resultados académicos.', copy: 'Una base universitaria sólida combinada con certificación cloud, experiencia internacional e idiomas para trabajar en entornos técnicos diversos.', degree: { kicker: 'Formación', title: 'Ingeniería Informática', copy: 'Universitat de Lleida · Erasmus en NTNU Gjøvik, Noruega', average: 'nota media final' }, languages: { kicker: 'Idiomas', es: { name: 'Español', level: 'Nativo' }, ca: { name: 'Catalán', level: 'Nativo' }, en: { name: 'Inglés', level: 'Profesional · Cambridge B2 First' }, no: { name: 'Noruego', level: 'Básico / A1' } }, cert: { kicker: 'Certificación', copy: 'Fundamentos de cloud computing, arquitectura AWS, seguridad, redes, almacenamiento y servicios base.' }, grades: { kicker: 'Asignaturas destacadas', aria: 'Asignaturas destacadas', subjects: { userDesign: 'Diseño centrado en el usuario', appSecurity: 'Seguridad de aplicaciones y comunicaciones', internship: 'Prácticas tuteladas en empresa', programming2: 'Programación II', programming1: 'Programación I', enterpriseArchitecture: 'Arquitecturas de software empresarial', legalSocial: 'Aspectos legales, sociales y profesionales', distributedComputing: 'Computación distribuida y aplicaciones', finalProject: 'Trabajo de fin de grado', algorithms: 'Algorítmica y complejidad' } } },
    contact: { title: 'Disponible para ingeniería de IA, desarrollo software y colaboraciones de IA aplicada.' }
  },
  en: {
    meta: { title: 'Axel Berral López — Computer Engineer & AI Engineer', description: 'I design and deploy applied AI systems: LLM agents, audio pipelines, APIs, automation and secure, maintainable full-stack demos.', ogDescription: 'Computer Engineer and AI Engineer focused on LLM agents, audio pipelines, APIs, automation and applied AI systems.' },
    navAria: 'Main', language: { aria: 'Change language' }, nav: { experience: 'Experience', agents: 'Agents', work: 'Work', contact: 'Contact' },
    hero: { location: 'Barcelona, Spain', role: 'Computer Engineer / AI Engineer', title: 'AI systems, agents and backend software with production focus.', copy: 'I design and deploy applied AI systems: LLM agents, audio pipelines, APIs, automation and full-stack demos built to be understandable, maintainable and safe.' },
    buttons: { viewAgents: 'View agents', downloadCv: 'Download CV', openAgent: 'Open' }, studioCta: { kicker: 'AI Agent Studio', title: 'Create your own agent in seconds', copy: 'Build a personal agent demo with a sector, tools, instructions, conversation, execution graph and technical mode.', button: 'Create my agent' }, strip: { aria: 'Areas' }, sections: { profile: '01 / Profile', experience: '02 / Experience', agents: '03 / AI Agents', work: '04 / Selected work', stack: '05 / Stack', credentials: '06 / Credentials', contact: '07 / Contact' },
    profile: { title: 'Computer Engineer building applied AI products.', copy: 'Currently focused on end-to-end AI systems: from data ingestion and model orchestration to backend services, deployment and user-facing interfaces.' },
    experience: { mst: { date: 'Feb 2026 — Present', title: 'AI Software Engineer — MST Holding', copy: 'AI call-analysis systems, Whisper pipelines, local LLMs, backend APIs and GPU-oriented deployment.' }, stikets: { date: 'Jun 2025 — Aug 2025', title: 'AI Internship — Stikets', copy: 'Agent framework development and frontend/backend improvements.' }, udl: { title: 'Computer Engineering — Universitat de Lleida', copy: 'Erasmus at NTNU Gjøvik, Norway. Focus on software engineering, AI and data systems.' } },
    agents: { title: 'Agent projects', copy: 'Each agent has its own public page. Backends are connected progressively with secure limits, environment isolation and no exposed secrets.' },
    agent: { restaurant: { title: 'Restaurant Agent', copy: 'Reservations, menu and recommendations' }, tennis: { title: 'Tennis Agent', copy: 'Responsible match analysis and predictions' }, barber: { title: 'Barber Agent', copy: 'Styles, bookings and customer flows' }, cv: { title: 'CV Agent', copy: 'Professional chatbot based on my profile' }, gym: { title: 'Gym Agent', copy: 'Training, booking and lead capture' }, investor: { title: 'Investor Agent', copy: 'Educational investment planning' }, news: { title: 'News Anchor Agent', copy: 'AI presenter and news summaries' }, christian: { title: 'Christian Agent', copy: 'Spiritual conversation and local search' }, nur: { title: 'Nur Agent', copy: 'Islamic assistant and mosque search' } },
    work: { caseStudy: 'Read case study', website: 'View website', audioDemoCta: 'Try the audio analysis demo', call: { kicker: 'Production AI', title: 'AI call analysis system', copy: 'Professional work developed at MST Holding in the context of services for a financial-sector client: an end-to-end pipeline that turns real audio into transcriptions, routing decisions and automated evaluations with Whisper, local LLMs and on-premise backend services.' }, callDisclaimer: 'Information is presented in aggregated form, without sensitive data or internal client details.', callMetrics: { aria: 'AI call analysis system metrics', evaluatedAudio: 'audio files evaluated automatically', peak: 'audio files per hour', pipeline: 'complete production pipeline', privateGpu: 'local GPU and private data' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Research · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Experimental research on when GNNs add real value over MLPs and lightweight models for thermal prediction on graphs.' }, framework: { kicker: 'LLM Architecture', title: 'Agent framework', copy: 'Modular framework for building reusable local LLM agents.' }, lovelink: { kicker: 'Graphs / ML', copy: 'Recommendation system based on indirect social connections.' }, dashboard: { kicker: 'Full stack', title: 'Financial dashboard', copy: 'Personal finance dashboard with Python, Flask and SQLite.' } },
    stack: { languages: 'Languages' }, credentials: { title: 'Education, languages and academic results.', copy: 'A strong university foundation combined with cloud certification, international experience and languages for diverse technical environments.', degree: { kicker: 'Education', title: 'Computer Engineering', copy: 'Universitat de Lleida · Erasmus at NTNU Gjøvik, Norway', average: 'final average grade' }, languages: { kicker: 'Languages', es: { name: 'Spanish', level: 'Native' }, ca: { name: 'Catalan', level: 'Native' }, en: { name: 'English', level: 'Professional · Cambridge B2 First' }, no: { name: 'Norwegian', level: 'Basic / A1' } }, cert: { kicker: 'Certification', copy: 'Cloud computing fundamentals, AWS architecture, security, networking, storage and core services.' }, grades: { kicker: 'Selected coursework', aria: 'Selected coursework', subjects: { userDesign: 'User-centered design', appSecurity: 'Application and communication security', internship: 'Supervised company internship', programming2: 'Programming II', programming1: 'Programming I', enterpriseArchitecture: 'Enterprise software architecture', legalSocial: 'Legal, social and professional aspects', distributedComputing: 'Distributed computing and applications', finalProject: 'Final degree project', algorithms: 'Algorithms and complexity' } } }, contact: { title: 'Available for AI engineering, software development and applied AI collaborations.' }
  },
  ca: {
    meta: { title: 'Axel Berral López — Enginyer Informàtic & AI Engineer', description: 'Dissenyo i desplego sistemes d’IA aplicada: agents LLM, pipelines d’àudio, APIs, automatització i demos full-stack segures i mantenibles.', ogDescription: 'Enginyer Informàtic i AI Engineer especialitzat en agents LLM, pipelines d’àudio, APIs, automatització i IA aplicada.' },
    navAria: 'Principal', language: { aria: 'Canviar idioma' }, nav: { experience: 'Experiència', agents: 'Agents', work: 'Projectes', contact: 'Contacte' },
    hero: { location: 'Barcelona, Espanya', role: 'Enginyer Informàtic / AI Engineer', title: 'Sistemes d’IA, agents i backend amb focus en producció.', copy: 'Dissenyo i desplego sistemes d’IA aplicada: agents LLM, pipelines d’àudio, APIs, automatització i demos full-stack construïdes perquè siguin entenedores, mantenibles i segures.' },
    buttons: { viewAgents: 'Veure agents', downloadCv: 'Descarregar CV', openAgent: 'Obrir' }, studioCta: { kicker: 'AI Agent Studio', title: 'Crea el teu propi agent en segons', copy: 'Construeix una demo d’agent personal amb sector, eines, instruccions, conversa, graf d’execució i mode tècnic.', button: 'Crear el meu agent' }, strip: { aria: 'Àrees' }, sections: { profile: '01 / Perfil', experience: '02 / Experiència', agents: '03 / Agents IA', work: '04 / Projectes destacats', stack: '05 / Stack', credentials: '06 / Credencials', contact: '07 / Contacte' },
    profile: { title: 'Enginyer Informàtic construint productes d’IA aplicada.', copy: 'Actualment estic centrat en sistemes d’IA end-to-end: des de la ingesta de dades i l’orquestració de models fins a serveis backend, desplegament i interfícies per a usuaris.' },
    experience: { mst: { date: 'Feb 2026 — Actualitat', title: 'AI Software Engineer — MST Holding', copy: 'Sistemes d’anàlisi de trucades amb IA, pipelines amb Whisper, LLMs locals, APIs backend i desplegament orientat a GPU.' }, stikets: { date: 'Jun 2025 — Ago 2025', title: 'Pràctiques IA — Stikets', copy: 'Desenvolupament d’un framework d’agents IA i millores de frontend/backend.' }, udl: { title: 'Enginyeria Informàtica — Universitat de Lleida', copy: 'Erasmus a NTNU Gjøvik, Noruega. Focus en enginyeria del software, IA i sistemes de dades.' } },
    agents: { title: 'Projectes d’agents', copy: 'Cada agent té la seva pròpia pàgina pública. Els backends es connecten progressivament amb límits segurs, aïllament d’entorn i sense secrets exposats.' },
    agent: { restaurant: { title: 'Agent Restaurant', copy: 'Reserves, menú i recomanacions' }, tennis: { title: 'Agent Tennista', copy: 'Anàlisi responsable de partits i prediccions' }, barber: { title: 'Agent Perruquer', copy: 'Estils, reserves i fluxos de clients' }, cv: { title: 'Agent CV', copy: 'Chatbot professional basat en el meu perfil' }, gym: { title: 'Assistent Gym', copy: 'Entrenament, reserves i captació de leads' }, investor: { title: 'Agent Inversor', copy: 'Planificació educativa d’inversió' }, news: { title: 'Agent Noticiari', copy: 'Presentador IA i resums de notícies' }, christian: { title: 'Agent Cristià', copy: 'Conversa espiritual i cerca local' }, nur: { title: 'Agent Nur', copy: 'Assistent islàmic i cerca de mesquites' } },
    work: { caseStudy: 'Llegir cas', website: 'Veure web', audioDemoCta: 'Provar demo d’anàlisi d’àudio', call: { kicker: 'IA en producció', title: 'Sistema d’anàlisi de trucades amb IA', copy: 'Treball professional desenvolupat a MST Holding en el context de serveis per a un client del sector financer: pipeline end-to-end per transformar àudios reals en transcripcions, rutes i avaluacions automàtiques amb Whisper, LLMs locals i backend productiu on-premise.' }, callDisclaimer: 'Informació presentada de manera agregada, sense dades sensibles ni detalls interns del client.', callMetrics: { aria: 'Mètriques del sistema d’anàlisi de trucades', evaluatedAudio: 'àudios avaluats automàticament', peak: 'àudios per hora', pipeline: 'pipeline complet en producció', privateGpu: 'GPU local i dades privades' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Recerca · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Recerca experimental sobre quan les GNN aporten valor real davant MLPs i models lleugers per a predicció tèrmica en grafs.' }, framework: { kicker: 'Arquitectura LLM', title: 'Framework d’agents', copy: 'Framework modular per crear agents LLM locals reutilitzables.' }, lovelink: { kicker: 'Grafs / ML', copy: 'Sistema de recomanació basat en connexions socials indirectes.' }, dashboard: { kicker: 'Full stack', title: 'Dashboard financer', copy: 'Dashboard de finances personals amb Python, Flask i SQLite.' } },
    stack: { languages: 'Llenguatges' }, credentials: { title: 'Formació, idiomes i resultats acadèmics.', copy: 'Una base universitària sòlida combinada amb certificació cloud, experiència internacional i idiomes per treballar en entorns tècnics diversos.', degree: { kicker: 'Formació', title: 'Enginyeria Informàtica', copy: 'Universitat de Lleida · Erasmus a NTNU Gjøvik, Noruega', average: 'nota mitjana final' }, languages: { kicker: 'Idiomes', es: { name: 'Espanyol', level: 'Natiu' }, ca: { name: 'Català', level: 'Natiu' }, en: { name: 'Anglès', level: 'Professional · Cambridge B2 First' }, no: { name: 'Noruec', level: 'Bàsic / A1' } }, cert: { kicker: 'Certificació', copy: 'Fonaments de cloud computing, arquitectura AWS, seguretat, xarxes, emmagatzematge i serveis base.' }, grades: { kicker: 'Assignatures destacades', aria: 'Assignatures destacades', subjects: { userDesign: "Disseny centrat en l'usuari", appSecurity: "Seguretat d'aplicacions i comunicacions", internship: 'Pràctiques tutelades en empresa', programming2: 'Programació II', programming1: 'Programació I', enterpriseArchitecture: 'Arquitectures de programari empresarial', legalSocial: 'Aspectes legals, socials i professionals', distributedComputing: 'Computació distribuïda i aplicacions', finalProject: 'Treball de fi de grau', algorithms: 'Algorítmica i complexitat' } } }, contact: { title: 'Disponible per a enginyeria d’IA, desenvolupament software i col·laboracions d’IA aplicada.' }
  },
  no: {
    meta: { title: 'Axel Berral López — Dataingeniør & AI Engineer', description: 'Jeg designer og deployer anvendte AI-systemer: LLM-agenter, lydpipelines, API-er, automatisering og sikre full-stack demoer.', ogDescription: 'Dataingeniør og AI Engineer med fokus på LLM-agenter, lydpipelines, API-er, automatisering og anvendt AI.' },
    navAria: 'Hovedmeny', language: { aria: 'Bytt språk' }, nav: { experience: 'Erfaring', agents: 'Agenter', work: 'Prosjekter', contact: 'Kontakt' },
    hero: { location: 'Barcelona, Spania', role: 'Dataingeniør / AI Engineer', title: 'AI-systemer, agenter og backend med fokus på produksjon.', copy: 'Jeg designer og deployer anvendte AI-systemer: LLM-agenter, lydpipelines, API-er, automatisering og full-stack demoer bygget for å være forståelige, vedlikeholdbare og sikre.' },
    buttons: { viewAgents: 'Se agenter', downloadCv: 'Last ned CV', openAgent: 'Åpne' }, studioCta: { kicker: 'AI Agent Studio', title: 'Lag din egen agent på sekunder', copy: 'Bygg en personlig agentdemo med sektor, verktøy, instruksjoner, samtale, kjøringsgraf og teknisk modus.', button: 'Lag min agent' }, strip: { aria: 'Områder' }, sections: { profile: '01 / Profil', experience: '02 / Erfaring', agents: '03 / AI-agenter', work: '04 / Utvalgte prosjekter', stack: '05 / Stack', credentials: '06 / Credentials', contact: '07 / Kontakt' },
    profile: { title: 'Dataingeniør som bygger anvendte AI-produkter.', copy: 'Akkurat nå fokuserer jeg på end-to-end AI-systemer: fra datainntak og modellorkestrering til backend-tjenester, utrulling og brukergrensesnitt.' },
    experience: { mst: { date: 'Feb 2026 — Nå', title: 'AI Software Engineer — MST Holding', copy: 'AI-systemer for samtaleanalyse, Whisper-pipelines, lokale LLM-er, backend-API-er og GPU-orientert deployment.' }, stikets: { date: 'Jun 2025 — Aug 2025', title: 'AI-praksis — Stikets', copy: 'Utvikling av et rammeverk for AI-agenter og forbedringer i frontend/backend.' }, udl: { title: 'Dataingeniør — Universitat de Lleida', copy: 'Erasmus ved NTNU Gjøvik, Norge. Fokus på software engineering, AI og datasystemer.' } },
    agents: { title: 'Agentprosjekter', copy: 'Hver agent har sin egen offentlige side. Backendene kobles gradvis med sikre grenser, miljøisolasjon og uten eksponerte hemmeligheter.' },
    agent: { restaurant: { title: 'Restaurantagent', copy: 'Reservasjoner, meny og anbefalinger' }, tennis: { title: 'Tennisagent', copy: 'Ansvarlig kampanalyse og prediksjoner' }, barber: { title: 'Frisøragent', copy: 'Stiler, booking og kundeflyt' }, cv: { title: 'CV-agent', copy: 'Profesjonell chatbot basert på profilen min' }, gym: { title: 'Gymassistent', copy: 'Trening, booking og lead capture' }, investor: { title: 'Investeringsagent', copy: 'Pedagogisk investeringsplanlegging' }, news: { title: 'Nyhetsanker-agent', copy: 'AI-presentatør og nyhetssammendrag' }, christian: { title: 'Kristen agent', copy: 'Åndelig samtale og lokalt søk' }, nur: { title: 'Nur-agent', copy: 'Islamsk assistent og moskésøk' } },
    work: { caseStudy: 'Les case study', website: 'Se nettside', audioDemoCta: 'Prøv demo for lydanalyse', call: { kicker: 'Produksjons-AI', title: 'AI-system for samtaleanalyse', copy: 'Profesjonelt arbeid utviklet hos MST Holding i forbindelse med tjenester for en kunde i finanssektoren: en end-to-end pipeline som gjør ekte lyd om til transkripsjoner, ruting og automatiserte evalueringer med Whisper, lokale LLM-er og on-premise backend.' }, callDisclaimer: 'Informasjonen presenteres aggregert, uten sensitive data eller interne kundedetaljer.', callMetrics: { aria: 'Metrikk for AI-system for samtaleanalyse', evaluatedAudio: 'lydfiler evaluert automatisk', peak: 'lydfiler per time', pipeline: 'komplett produksjonspipeline', privateGpu: 'lokal GPU og private data' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Forskning · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Eksperimentell forskning på når GNN-er gir reell verdi sammenlignet med MLP-er og lette modeller for termisk prediksjon på grafer.' }, framework: { kicker: 'LLM-arkitektur', title: 'Agentrammeverk', copy: 'Modulært rammeverk for å bygge gjenbrukbare lokale LLM-agenter.' }, lovelink: { kicker: 'Grafer / ML', copy: 'Anbefalingssystem basert på indirekte sosiale forbindelser.' }, dashboard: { kicker: 'Full stack', title: 'Finansdashboard', copy: 'Dashboard for personlig økonomi med Python, Flask og SQLite.' } },
    stack: { languages: 'Språk' }, credentials: { title: 'Utdanning, språk og akademiske resultater.', copy: 'Et solid universitetsgrunnlag kombinert med cloud-sertifisering, internasjonal erfaring og språk for ulike tekniske miljøer.', degree: { kicker: 'Utdanning', title: 'Dataingeniør', copy: 'Universitat de Lleida · Erasmus ved NTNU Gjøvik, Norge', average: 'endelig snittkarakter' }, languages: { kicker: 'Språk', es: { name: 'Spansk', level: 'Morsmål' }, ca: { name: 'Katalansk', level: 'Morsmål' }, en: { name: 'Engelsk', level: 'Profesjonelt · Cambridge B2 First' }, no: { name: 'Norsk', level: 'Grunnleggende / A1' } }, cert: { kicker: 'Sertifisering', copy: 'Grunnleggende cloud computing, AWS-arkitektur, sikkerhet, nettverk, lagring og kjernetjenester.' }, grades: { kicker: 'Utvalgte fag', aria: 'Utvalgte fag', subjects: { userDesign: 'Brukersentrert design', appSecurity: 'Sikkerhet for applikasjoner og kommunikasjon', internship: 'Veiledet praksis i bedrift', programming2: 'Programmering II', programming1: 'Programmering I', enterpriseArchitecture: 'Arkitektur for bedriftsprogramvare', legalSocial: 'Juridiske, sosiale og profesjonelle aspekter', distributedComputing: 'Distribuert databehandling og applikasjoner', finalProject: 'Bacheloroppgave', algorithms: 'Algoritmikk og kompleksitet' } } }, contact: { title: 'Tilgjengelig for AI engineering, softwareutvikling og samarbeid innen anvendt AI.' }
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

  document.querySelectorAll('.agent-row').forEach((row) => {
    row.setAttribute('data-open-label', dict.buttons?.openAgent || i18n.es.buttons.openAgent);
  });

  document.querySelectorAll('a[href^="/projects/"]').forEach((link) => {
    const url = new URL(link.getAttribute('href'), window.location.origin);
    url.searchParams.set('lang', lang);
    link.setAttribute('href', `${url.pathname}${url.search}${url.hash}`);
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
  const lightPalette = [
    'rgba(111,152,0,0.42)',
    'rgba(45,109,246,0.34)',
    'rgba(16,24,32,0.22)'
  ];

  const isLightTheme = () => document.documentElement.dataset.theme === 'light';

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
      color: palette[i % palette.length],
      lightColor: lightPalette[i % lightPalette.length]
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

    const light = isLightTheme();
    drawWave(frame, 0.28, light ? 'rgba(111,152,0,0.11)' : 'rgba(215,255,104,0.055)', 18, 0.75);
    drawWave(frame, 0.64, light ? 'rgba(45,109,246,0.10)' : 'rgba(143,179,255,0.050)', 22, 0.55);

    for (const p of particles) {
      p.x += p.speed;
      p.y = p.baseY + Math.sin(frame + p.phase) * 18 + Math.cos(frame * 0.7 + p.phase) * p.drift * 24;
      if (p.x > width + 12) p.x = -12;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = light ? p.lightColor : p.color;
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
  const lightColors = [
    'rgba(111,152,0,0.78)',
    'rgba(45,109,246,0.58)',
    'rgba(16,24,32,0.34)'
  ];

  const isLightTheme = () => document.documentElement.dataset.theme === 'light';

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
      color: colors[i % colors.length],
      lightColor: lightColors[i % lightColors.length]
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
      const color = isLightTheme() ? p.lightColor : p.color;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = isLightTheme() ? 5 : 8;
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

function initAgentStudio() {
  const studio = document.getElementById('agent-studio');
  if (!studio) return;

  const sectors = {
    restaurante: { label: 'Agente Restaurante', summary: 'Agente de restaurante para reservas, menú y disponibilidad.', user: 'Quiero reservar mesa para 4 mañana por la noche. ¿Tenéis disponibilidad?' },
    clinica: { label: 'Agente Clínica', summary: 'Agente de clínica para citas, recepción y servicios.', user: 'Necesito pedir cita esta semana por la tarde. ¿Puedes buscarme un hueco?' },
    inmobiliaria: { label: 'Agente Inmobiliaria', summary: 'Agente inmobiliario para captar leads, filtrar propiedades y proponer visitas.', user: 'Busco un piso de alquiler de dos habitaciones cerca del centro.' },
    ecommerce: { label: 'Agente E-commerce', summary: 'Agente de soporte y ventas para pedidos, incidencias y recomendaciones.', user: 'Mi pedido tenía que llegar hoy y aún no aparece. ¿Puedes revisar qué pasa?' },
    personalizado: { label: 'Agente Personalizado', summary: 'Agente adaptado al caso de uso que defina el creador.', user: 'Necesito ayuda con una tarea concreta. ¿Puedes guiarme paso a paso?' }
  };
  const templates = {
    reservas: { label: 'Reservas / citas', tools: ['reservas', 'base_datos', 'calendario'], goals: 'Gestionar disponibilidad, resolver dudas y pedir confirmación antes de crear una reserva o cita.', forbidden: 'No confirmar reservas reales ni inventar disponibilidad.', message: 'Quiero reservar para 4 mañana por la noche. ¿Tenéis disponibilidad?' },
    leads: { label: 'Captar leads', tools: ['base_datos', 'email'], goals: 'Entender la necesidad del usuario, cualificarlo y pedir datos de contacto de forma natural.', forbidden: 'No presionar al usuario ni prometer resultados garantizados.', message: 'Estoy interesado pero quiero saber precios y si me podéis contactar.' },
    soporte: { label: 'Soporte cliente', tools: ['busqueda', 'base_datos', 'email'], goals: 'Diagnosticar la incidencia, dar pasos claros y preparar seguimiento si hace falta.', forbidden: 'No inventar estados internos ni decir que se ha enviado un email real.', message: 'Mi pedido tenía que llegar hoy y aún no aparece. ¿Puedes revisarlo?' },
    recomendador: { label: 'Recomendador', tools: ['busqueda', 'base_datos'], goals: 'Hacer preguntas útiles y recomendar opciones ajustadas a preferencias.', forbidden: 'No recomendar sin contexto suficiente.', message: 'Quiero una recomendación, pero no sé cuál elegir.' },
    personal: { label: 'Asistente personal', tools: ['calendario', 'email', 'busqueda'], goals: 'Organizar tareas, resumir opciones y proponer próximos pasos.', forbidden: 'No crear eventos ni enviar mensajes reales sin confirmación.', message: 'Ayúdame a organizar esta semana y priorizar tareas.' }
  };
  const toolLabels = { reservas: 'reservas.lookup', busqueda: 'search.query', base_datos: 'db.lookup', email: 'email.draft', calendario: 'calendar.propose' };
  const quickMessages = { reserva: templates.reservas.message, cita: 'Necesito cita para una revisión esta semana por la tarde.', pedido: templates.soporte.message, lead: templates.leads.message };
  let activeSector = 'restaurante';
  let activeTemplate = 'reservas';
  let activeStep = 0;
  let runTimer = [];

  const stepButtons = Array.from(studio.querySelectorAll('.wizard-progress button'));
  const panels = Array.from(studio.querySelectorAll('.wizard-step-panel'));
  const sectorButtons = Array.from(studio.querySelectorAll('.studio-sector'));
  const templateButtons = Array.from(studio.querySelectorAll('.studio-template'));
  const toolInputs = Array.from(studio.querySelectorAll('.studio-tools input'));
  const agentNameInput = document.getElementById('studioAgentCustomName');
  const toneInput = document.getElementById('studioTone');
  const goalsInput = document.getElementById('studioGoals');
  const forbiddenInput = document.getElementById('studioForbidden');
  const instructions = document.getElementById('studioInstructions');
  const userMessage = document.getElementById('studioUserMessage');
  const runButton = document.getElementById('studioRun');
  const prevButton = document.getElementById('studioPrev');
  const nextButton = document.getElementById('studioNext');
  const techToggle = document.getElementById('studioTechToggle');
  const techPanel = document.getElementById('studioTechPanel');
  const chat = document.getElementById('studioChat');
  const agentName = document.getElementById('studioAgentName');
  const agentSummary = document.getElementById('studioAgentSummary');
  const previewTags = document.getElementById('studioPreviewTags');
  const nodes = Array.from(studio.querySelectorAll('.graph-node'));
  const promptOut = document.getElementById('studioPrompt');
  const toolsOut = document.getElementById('studioToolsOut');
  const callsOut = document.getElementById('studioCallsOut');
  const stateOut = document.getElementById('studioStateOut');
  const jsonOut = document.getElementById('studioJsonOut');

  const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  const pretty = (value) => JSON.stringify(value, null, 2);
  const selectedTools = () => toolInputs.filter((input) => input.checked).map((input) => input.value);
  const clearTimers = () => { runTimer.forEach(clearTimeout); runTimer = []; };

  function renderAssistantMessage(text) {
    let value = String(text || '').trim();
    if (!value) return 'Agente ejecutado correctamente.';
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === 'object') {
        value = [parsed.summary || parsed.resumen, parsed.answer || parsed.respuesta, ...(parsed.steps || parsed.pasos || parsed.tasks || parsed.tareas || [])].filter(Boolean).join('\n');
      }
    } catch (_) {}
    const lines = value.replace(/\r\n/g, '\n').split('\n').map((line) => line.trim()).filter(Boolean);
    if (lines.length <= 1) return esc(value);
    let html = '';
    let listOpen = false;
    const closeList = () => { if (listOpen) { html += '</ul>'; listOpen = false; } };
    lines.forEach((line) => {
      const clean = line.replace(/^#{1,4}\s*/, '').replace(/\*\*/g, '');
      const tableCells = clean.startsWith('|') && clean.endsWith('|') ? clean.split('|').slice(1, -1).map((cell) => cell.trim()).filter(Boolean) : null;
      if (tableCells) {
        const joined = tableCells.join(' ').toLowerCase();
        if (!tableCells.length || tableCells.every((cell) => /^-+$/.test(cell.replace(/\s/g, ''))) || joined.includes('hora actividad') || joined.includes('time activity')) return;
        if (!listOpen) { html += '<ul class="schedule-list">'; listOpen = true; }
        const [time, task, note] = tableCells;
        html += `<li><span>${esc(time || '')}</span>${esc(task || '')}${note ? ` <em>— ${esc(note)}</em>` : ''}</li>`;
        return;
      }
      const bullet = clean.match(/^[-*•]\s+(.+)/) || clean.match(/^\d+[.)]\s+(.+)/);
      const isHeading = /^(resumen|plan|calendario|agenda|siguiente paso|prioridad|tareas?)\b/i.test(clean.replace(':', '')) || clean.endsWith(':');
      if (bullet) {
        if (!listOpen) { html += '<ul>'; listOpen = true; }
        html += `<li>${esc(bullet[1])}</li>`;
      } else if (isHeading) {
        closeList();
        html += `<strong>${esc(clean.replace(/:$/, ''))}</strong>`;
      } else {
        closeList();
        html += `<p>${esc(clean)}</p>`;
      }
    });
    closeList();
    return html;
  }

  function setStep(step) {
    activeStep = Math.max(0, Math.min(4, Number(step) || 0));
    stepButtons.forEach((button, index) => {
      button.classList.toggle('active', index === activeStep);
      button.classList.toggle('done', index < activeStep);
    });
    panels.forEach((panel, index) => panel.classList.toggle('active', index === activeStep));
    prevButton.disabled = activeStep === 0;
    nextButton.textContent = activeStep === 4 ? 'Listo para probar' : 'Siguiente';
    updatePreview();
  }

  function applyTemplate(key) {
    const tpl = templates[key] || templates.reservas;
    activeTemplate = key in templates ? key : 'reservas';
    templateButtons.forEach((button) => button.classList.toggle('active', button.dataset.template === activeTemplate));
    toolInputs.forEach((input) => { input.checked = tpl.tools.includes(input.value); });
    if (goalsInput) goalsInput.value = tpl.goals;
    if (forbiddenInput) forbiddenInput.value = tpl.forbidden;
    if (userMessage) userMessage.value = tpl.message;
    updatePreview();
    renderIdle();
  }

  function updatePreview() {
    const sector = sectors[activeSector] || sectors.restaurante;
    const tpl = templates[activeTemplate] || templates.reservas;
    if (agentNameInput && (!agentNameInput.value || Object.values(sectors).some((item) => item.label === agentNameInput.value))) agentNameInput.value = sector.label;
    const displayName = (agentNameInput && agentNameInput.value.trim()) || sector.label;
    const tone = toneInput ? toneInput.value : 'profesional';
    agentName.textContent = displayName;
    agentSummary.textContent = `${sector.summary} Plantilla: ${tpl.label}. Tono: ${tone}.`;
    previewTags.innerHTML = selectedTools().map((tool) => `<span>${esc(toolLabels[tool] || tool)}</span>`).join('') || '<span>sin herramientas</span>';
    const techDraft = {
      agent: displayName,
      sector: activeSector,
      template: activeTemplate,
      tone,
      tools: selectedTools().map((tool) => toolLabels[tool] || tool),
      goals: goalsInput ? goalsInput.value : '',
      forbidden: forbiddenInput ? forbiddenInput.value : ''
    };
    toolsOut.textContent = pretty(techDraft.tools);
    jsonOut.textContent = pretty({ draft: techDraft });
  }

  function renderIdle() {
    const sector = sectors[activeSector] || sectors.restaurante;
    chat.innerHTML = `<p class="user">${esc((userMessage && userMessage.value) || sector.user)}</p><p class="assistant">Completa los pasos y pulsa “Probar agente real”.</p>`;
    nodes.forEach((node) => { node.classList.remove('active', 'done'); node.classList.add('idle'); });
  }

  function setNodes(activeName) {
    const order = ['input', 'router', 'tools', 'memory', 'response'];
    nodes.forEach((node) => {
      const done = order.indexOf(node.dataset.node) < order.indexOf(activeName);
      node.classList.toggle('active', node.dataset.node === activeName);
      node.classList.toggle('done', done || (node.dataset.node === 'response' && activeName === 'response'));
      node.classList.toggle('idle', !node.classList.contains('active') && !node.classList.contains('done'));
    });
  }

  async function runStudio() {
    clearTimers();
    setStep(4);
    const started = performance.now();
    const message = ((userMessage && userMessage.value) || '').trim();
    if (!message) {
      chat.innerHTML = '<p class="error">Escribe un mensaje de prueba para ejecutar el agente.</p>';
      return;
    }
    studio.classList.add('running');
    runButton.disabled = true;
    runButton.textContent = 'Ejecutando LLM…';
    chat.innerHTML = `<p class="user">${esc(message)}</p><p class="system">Creando agente, compilando prompt y preparando herramientas…</p>`;
    nodes.forEach((node) => { node.classList.remove('active', 'done'); node.classList.add('idle'); });
    ['input', 'router', 'tools', 'memory'].forEach((nodeName, index) => {
      runTimer.push(setTimeout(() => {
        setNodes(nodeName);
        if (nodeName === 'router') chat.insertAdjacentHTML('beforeend', '<p class="system">Router: sector, plantilla e intención detectados.</p>');
        if (nodeName === 'tools') chat.insertAdjacentHTML('beforeend', `<p class="system">Herramientas activas: ${selectedTools().map((tool) => toolLabels[tool]).join(' · ') || 'ninguna'}</p>`);
        if (nodeName === 'memory') chat.insertAdjacentHTML('beforeend', '<p class="system">Memoria base cargada y límites aplicados.</p>');
        stateOut.textContent = pretty({ phase: nodeName, elapsedMs: Math.round(performance.now() - started) });
        chat.scrollTop = chat.scrollHeight;
      }, 220 + index * 360));
    });
    try {
      const res = await fetch('/agent-studio/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sector: activeSector,
          template: activeTemplate,
          tools: selectedTools(),
          agent_name: agentNameInput ? agentNameInput.value : '',
          tone: toneInput ? toneInput.value : 'profesional',
          goals: goalsInput ? goalsInput.value : '',
          forbidden: forbiddenInput ? forbiddenInput.value : '',
          instructions: instructions ? instructions.value : '',
          user_message: message
        })
      });
      const payload = await res.json().catch(() => ({ detail: 'No se pudo leer la respuesta del servidor.' }));
      if (!res.ok) throw new Error(payload.detail || 'No se pudo ejecutar el agente.');
      clearTimers();
      setNodes('response');
      const tech = payload.technical || {};
      promptOut.textContent = tech.systemPrompt || 'Prompt no disponible';
      toolsOut.textContent = pretty(tech.availableTools || []);
      callsOut.textContent = pretty(tech.toolCalls || []);
      stateOut.textContent = pretty({ memory: tech.memory || [], nodes: tech.nodes || {}, latencyMs: tech.latencyMs || 0 });
      jsonOut.textContent = pretty(tech.structuredResponse || payload);
      chat.insertAdjacentHTML('beforeend', `<div class="assistant assistant-render">${renderAssistantMessage(payload.bot_message)}</div>`);
    } catch (err) {
      clearTimers();
      nodes.forEach((node) => node.classList.remove('active'));
      chat.insertAdjacentHTML('beforeend', `<p class="error">${esc(err.message || 'Error ejecutando el agente.')}</p>`);
    } finally {
      runButton.disabled = false;
      runButton.textContent = 'Probar agente real';
      studio.classList.remove('running');
      chat.scrollTop = chat.scrollHeight;
    }
  }

  stepButtons.forEach((button) => button.addEventListener('click', () => setStep(button.dataset.step)));
  prevButton.addEventListener('click', () => setStep(activeStep - 1));
  nextButton.addEventListener('click', () => setStep(activeStep + 1));
  sectorButtons.forEach((button) => button.addEventListener('click', () => {
    activeSector = button.dataset.sector || 'restaurante';
    sectorButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    if (agentNameInput) agentNameInput.value = (sectors[activeSector] || sectors.restaurante).label;
    if (userMessage) userMessage.value = (sectors[activeSector] || sectors.restaurante).user;
    updatePreview();
    renderIdle();
  }));
  templateButtons.forEach((button) => button.addEventListener('click', () => applyTemplate(button.dataset.template || 'reservas')));
  toolInputs.forEach((input) => input.addEventListener('change', updatePreview));
  [agentNameInput, toneInput, goalsInput, forbiddenInput, instructions].forEach((input) => { if (input) input.addEventListener('input', updatePreview); if (input && input.tagName === 'SELECT') input.addEventListener('change', updatePreview); });
  if (userMessage) userMessage.addEventListener('input', renderIdle);
  studio.querySelectorAll('.studio-templates button').forEach((button) => button.addEventListener('click', () => {
    if (!userMessage) return;
    userMessage.value = quickMessages[button.dataset.template] || quickMessages.reserva;
    renderIdle();
  }));
  runButton.addEventListener('click', runStudio);
  techToggle.addEventListener('click', () => {
    const open = techPanel.hidden;
    techPanel.hidden = !open;
    techToggle.setAttribute('aria-pressed', String(open));
  });

  applyTemplate(activeTemplate);
  setStep(0);
}

initAgentStudio();
