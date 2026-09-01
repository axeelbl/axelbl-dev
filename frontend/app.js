const i18n = {
  es: {
    meta: {
      title: 'Axel Berral López — Ingeniero Informático & AI Engineer',
      description: 'Diseño y despliego sistemas de IA aplicada: agentes LLM, pipelines de audio, APIs, automatización y demos full-stack seguras y mantenibles.',
      ogDescription: 'Ingeniero Informático y AI Engineer especializado en agentes LLM, pipelines de audio, APIs, automatización y sistemas de IA aplicada.'
    },
    navAria: 'Principal',
    language: { aria: 'Cambiar idioma' },
    nav: { experience: 'Experiencia', agents: 'Agentes', analysis: 'Análisis IA', work: 'Proyectos', contact: 'Contacto' },
    hero: {
      location: 'Barcelona, España', role: 'Ingeniero Informático / AI Engineer',
      title: 'Sistemas de IA, agentes y backend con foco en producción.',
      copy: 'Diseño y despliego sistemas de IA aplicada: agentes LLM, pipelines de audio, APIs, automatización y demos full-stack construidas para ser entendibles, mantenibles y seguras.'
    },
    buttons: { viewAgents: 'Ver agentes', downloadCv: 'Descargar CV', openAgent: 'Abrir' }, studioCta: { kicker: 'AI Agent Studio', title: 'Crea tu propio agente en segundos', copy: 'Construye una demo de agente personal con sector, herramientas, instrucciones, conversación, grafo de ejecución y modo técnico.', button: 'Crear mi agente' },
    strip: { aria: 'Áreas' },
    sections: { profile: '01 / Perfil', experience: '02 / Experiencia', agents: '03 / Agentes IA', analysis: '04 / Análisis con IA', work: '05 / Proyectos destacados', stack: '06 / Stack', credentials: '07 / Credenciales', contact: '08 / Contacto' },
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
    analysis: { title: 'Analizar cualquier señal de negocio con IA.', copy: 'La IA no solo conversa: escucha audios, lee correos, resume reuniones, detecta intención y convierte información desordenada en decisiones claras, métricas y próximos pasos.', examplesAria: 'Demos de análisis con IA', openDemo: 'Probar demo', demoLabel: 'Resultado', inputLabel: 'Texto de prueba', runDemo: 'Analizar demo', audio: { kicker: 'Audio / llamadas', title: 'De una llamada a un informe accionable', copy: 'Transcripción, resumen, sentimiento, motivo de contacto, incidencias, cumplimiento y tareas posteriores para equipos de soporte o ventas.', result: 'Cliente preocupado · incidencia detectada · seguimiento recomendado', placeholder: 'Hola, llamo porque hice un pedido ayer y todavía no tengo confirmación. Me preocupa que no llegue a tiempo.', cta: 'Probar demo de audio' }, sentiment: { kicker: 'Sentimiento', title: 'Detectar tono, urgencia y riesgo', copy: 'Clasifica conversaciones por satisfacción, frustración, prioridad y probabilidad de escalado para actuar antes de que el problema crezca.', result: 'Negativo moderado · urgencia alta · riesgo de baja', placeholder: 'Estoy bastante frustrado porque llevo tres días esperando una respuesta y nadie me dice nada claro.' }, email: { kicker: 'Correo', title: 'Priorizar emails automáticamente', copy: 'Extrae intención, fechas, importes, entidades y respuesta sugerida para que una bandeja de entrada se convierta en una cola de trabajo.', result: 'Factura pendiente · vence mañana · preparar respuesta', placeholder: 'Buenos días, adjunto factura pendiente. El pago vence mañana y necesitamos confirmación de recepción.' }, meeting: { kicker: 'Reuniones', title: 'Resumir decisiones y tareas', copy: 'Convierte notas o transcripciones de reuniones en acuerdos, responsables, fechas límite, bloqueos y próximos pasos verificables.', result: '3 decisiones · 5 tareas · 2 bloqueos abiertos', placeholder: 'Reunión: Marta prepara la propuesta para el viernes, Axel revisa el backend y falta confirmar presupuesto con dirección.' }, architect: { kicker: 'AI Solution Architect', title: 'Diseña una solución IA para tu proceso', copy: 'Responde cinco preguntas y recibe una propuesta inicial con arquitectura, componentes, riesgos, fases, diagrama y estimación de complejidad.', cta: 'Crear informe inicial', visualData: 'Datos', visualModel: 'Modelo', visualReport: 'Informe' } },
    work: {
      caseStudy: 'Leer caso', thermalDemo: 'Probar demo', website: 'Ver web', audioDemoCta: 'Probar demo de análisis de audio', call: { kicker: 'IA en producción', title: 'Sistema de análisis de llamadas con IA', copy: 'Proyecto profesional desarrollado en MST Holding en el contexto de servicios para un cliente del sector financiero: pipeline end-to-end para transformar audios reales en transcripciones, rutas y evaluaciones automáticas con Whisper, LLMs locales y backend productivo on-premise.' }, callDisclaimer: 'Información presentada de forma agregada, sin datos sensibles ni detalles internos del cliente.', callMetrics: { aria: 'Métricas del sistema de análisis de llamadas', evaluatedAudio: 'audios evaluados automáticamente', peak: 'Audios x hora', pipeline: 'pipeline completo en producción', privateGpu: 'GPU local y datos privados' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Investigación · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Investigación experimental sobre cuándo las GNN aportan valor real frente a MLPs y modelos ligeros para predicción térmica en grafos.' }, framework: { kicker: 'Arquitectura LLM', title: 'Framework de agentes', copy: 'Framework modular para crear agentes LLM locales reutilizables.' }, lovelink: { kicker: 'Grafos / ML', copy: 'Sistema de recomendación basado en conexiones sociales indirectas.' }, dashboard: { kicker: 'Full stack', title: 'Dashboard financiero', copy: 'Dashboard de finanzas personales con Python, Flask y SQLite.' }
    },
    stack: { languages: 'Lenguajes' },
    credentials: { title: 'Formación, idiomas y resultados académicos.', copy: 'Una base universitaria sólida combinada con certificación cloud, experiencia internacional e idiomas para trabajar en entornos técnicos diversos.', degree: { kicker: 'Formación', title: 'Ingeniería Informática', copy: 'Universitat de Lleida · Erasmus en NTNU Gjøvik, Noruega', average: 'nota media final' }, languages: { kicker: 'Idiomas', es: { name: 'Español', level: 'Nativo' }, ca: { name: 'Catalán', level: 'Nativo' }, en: { name: 'Inglés', level: 'Profesional · Cambridge B2 First' }, no: { name: 'Noruego', level: 'Básico / A1' } }, cert: { kicker: 'Certificación', copy: 'Fundamentos de cloud computing, arquitectura AWS, seguridad, redes, almacenamiento y servicios base.' }, grades: { kicker: 'Asignaturas destacadas', aria: 'Asignaturas destacadas', subjects: { userDesign: 'Diseño centrado en el usuario', appSecurity: 'Seguridad de aplicaciones y comunicaciones', internship: 'Prácticas tuteladas en empresa', programming2: 'Programación II', programming1: 'Programación I', enterpriseArchitecture: 'Arquitecturas de software empresarial', legalSocial: 'Aspectos legales, sociales y profesionales', distributedComputing: 'Computación distribuida y aplicaciones', finalProject: 'Trabajo de fin de grado', algorithms: 'Algorítmica y complejidad' } } },
    contact: { title: 'Disponible para ingeniería de IA, desarrollo software y colaboraciones de IA aplicada.' }
  },
  en: {
    meta: { title: 'Axel Berral López — Computer Engineer & AI Engineer', description: 'I design and deploy applied AI systems: LLM agents, audio pipelines, APIs, automation and secure, maintainable full-stack demos.', ogDescription: 'Computer Engineer and AI Engineer focused on LLM agents, audio pipelines, APIs, automation and applied AI systems.' },
    navAria: 'Main', language: { aria: 'Change language' }, nav: { experience: 'Experience', agents: 'Agents', analysis: 'AI Analysis', work: 'Work', contact: 'Contact' },
    hero: { location: 'Barcelona, Spain', role: 'Computer Engineer / AI Engineer', title: 'AI systems, agents and backend software with production focus.', copy: 'I design and deploy applied AI systems: LLM agents, audio pipelines, APIs, automation and full-stack demos built to be understandable, maintainable and safe.' },
    buttons: { viewAgents: 'View agents', downloadCv: 'Download CV', openAgent: 'Open' }, studioCta: { kicker: 'AI Agent Studio', title: 'Create your own agent in seconds', copy: 'Build a personal agent demo with a sector, tools, instructions, conversation, execution graph and technical mode.', button: 'Create my agent' }, strip: { aria: 'Areas' }, sections: { profile: '01 / Profile', experience: '02 / Experience', agents: '03 / AI Agents', analysis: '04 / AI Analysis', work: '05 / Selected work', stack: '06 / Stack', credentials: '07 / Credentials', contact: '08 / Contact' },
    profile: { title: 'Computer Engineer building applied AI products.', copy: 'Currently focused on end-to-end AI systems: from data ingestion and model orchestration to backend services, deployment and user-facing interfaces.' },
    experience: { mst: { date: 'Feb 2026 — Present', title: 'AI Software Engineer — MST Holding', copy: 'AI call-analysis systems, Whisper pipelines, local LLMs, backend APIs and GPU-oriented deployment.' }, stikets: { date: 'Jun 2025 — Aug 2025', title: 'AI Internship — Stikets', copy: 'Agent framework development and frontend/backend improvements.' }, udl: { title: 'Computer Engineering — Universitat de Lleida', copy: 'Erasmus at NTNU Gjøvik, Norway. Focus on software engineering, AI and data systems.' } },
    agents: { title: 'Agent projects', copy: 'Each agent has its own public page. Backends are connected progressively with secure limits, environment isolation and no exposed secrets.' },
    agent: { restaurant: { title: 'Restaurant Agent', copy: 'Reservations, menu and recommendations' }, tennis: { title: 'Tennis Agent', copy: 'Responsible match analysis and predictions' }, barber: { title: 'Barber Agent', copy: 'Styles, bookings and customer flows' }, cv: { title: 'CV Agent', copy: 'Professional chatbot based on my profile' }, gym: { title: 'Gym Agent', copy: 'Training, booking and lead capture' }, investor: { title: 'Investor Agent', copy: 'Educational investment planning' }, news: { title: 'News Anchor Agent', copy: 'AI presenter and news summaries' }, christian: { title: 'Christian Agent', copy: 'Spiritual conversation and local search' }, nur: { title: 'Nur Agent', copy: 'Islamic assistant and mosque search' } },
    analysis: { title: 'Analyze any business signal with AI.', copy: 'AI does more than chat: it listens to audio, reads emails, summarizes meetings, detects intent and turns messy information into clear decisions, metrics and next steps.', examplesAria: 'AI analysis demos', openDemo: 'Try demo', demoLabel: 'Result', inputLabel: 'Test text', runDemo: 'Analyze demo', audio: { kicker: 'Audio / calls', title: 'From a call to an actionable report', copy: 'Transcription, summary, sentiment, contact reason, incidents, compliance and follow-up tasks for support or sales teams.', result: 'Concerned customer · issue detected · follow-up recommended', placeholder: 'Hi, I’m calling because I placed an order yesterday and still have no confirmation. I’m worried it won’t arrive on time.', cta: 'Try the audio demo' }, sentiment: { kicker: 'Sentiment', title: 'Detect tone, urgency and risk', copy: 'Classify conversations by satisfaction, frustration, priority and escalation probability so teams can act before issues grow.', result: 'Moderately negative · high urgency · churn risk', placeholder: 'I’m quite frustrated because I have been waiting three days for a reply and nobody gives me a clear answer.' }, email: { kicker: 'Email', title: 'Prioritize emails automatically', copy: 'Extract intent, dates, amounts, entities and suggested replies so an inbox becomes a structured work queue.', result: 'Pending invoice · due tomorrow · prepare reply', placeholder: 'Good morning, I’m attaching the pending invoice. Payment is due tomorrow and we need confirmation of receipt.' }, meeting: { kicker: 'Meetings', title: 'Summarize decisions and tasks', copy: 'Turn meeting notes or transcripts into decisions, owners, deadlines, blockers and verifiable next steps.', result: '3 decisions · 5 tasks · 2 open blockers', placeholder: 'Meeting: Marta prepares the proposal by Friday, Axel reviews the backend and budget approval from management is still pending.' }, architect: { kicker: 'AI Solution Architect', title: 'Design an AI solution for your process', copy: 'Answer five questions and receive an initial proposal with architecture, components, risks, phases, diagram and complexity estimate.', cta: 'Create initial report', visualData: 'Data', visualModel: 'Model', visualReport: 'Report' } },
    work: { caseStudy: 'Read case study', thermalDemo: 'Try demo', website: 'View website', audioDemoCta: 'Try the audio analysis demo', call: { kicker: 'Production AI', title: 'AI call analysis system', copy: 'Professional work developed at MST Holding in the context of services for a financial-sector client: an end-to-end pipeline that turns real audio into transcriptions, routing decisions and automated evaluations with Whisper, local LLMs and on-premise backend services.' }, callDisclaimer: 'Information is presented in aggregated form, without sensitive data or internal client details.', callMetrics: { aria: 'AI call analysis system metrics', evaluatedAudio: 'audio files evaluated automatically', peak: 'audio files per hour', pipeline: 'complete production pipeline', privateGpu: 'local GPU and private data' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Research · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Experimental research on when GNNs add real value over MLPs and lightweight models for thermal prediction on graphs.' }, framework: { kicker: 'LLM Architecture', title: 'Agent framework', copy: 'Modular framework for building reusable local LLM agents.' }, lovelink: { kicker: 'Graphs / ML', copy: 'Recommendation system based on indirect social connections.' }, dashboard: { kicker: 'Full stack', title: 'Financial dashboard', copy: 'Personal finance dashboard with Python, Flask and SQLite.' } },
    stack: { languages: 'Languages' }, credentials: { title: 'Education, languages and academic results.', copy: 'A strong university foundation combined with cloud certification, international experience and languages for diverse technical environments.', degree: { kicker: 'Education', title: 'Computer Engineering', copy: 'Universitat de Lleida · Erasmus at NTNU Gjøvik, Norway', average: 'final average grade' }, languages: { kicker: 'Languages', es: { name: 'Spanish', level: 'Native' }, ca: { name: 'Catalan', level: 'Native' }, en: { name: 'English', level: 'Professional · Cambridge B2 First' }, no: { name: 'Norwegian', level: 'Basic / A1' } }, cert: { kicker: 'Certification', copy: 'Cloud computing fundamentals, AWS architecture, security, networking, storage and core services.' }, grades: { kicker: 'Selected coursework', aria: 'Selected coursework', subjects: { userDesign: 'User-centered design', appSecurity: 'Application and communication security', internship: 'Supervised company internship', programming2: 'Programming II', programming1: 'Programming I', enterpriseArchitecture: 'Enterprise software architecture', legalSocial: 'Legal, social and professional aspects', distributedComputing: 'Distributed computing and applications', finalProject: 'Final degree project', algorithms: 'Algorithms and complexity' } } }, contact: { title: 'Available for AI engineering, software development and applied AI collaborations.' }
  },
  ca: {
    meta: { title: 'Axel Berral López — Enginyer Informàtic & AI Engineer', description: 'Dissenyo i desplego sistemes d’IA aplicada: agents LLM, pipelines d’àudio, APIs, automatització i demos full-stack segures i mantenibles.', ogDescription: 'Enginyer Informàtic i AI Engineer especialitzat en agents LLM, pipelines d’àudio, APIs, automatització i IA aplicada.' },
    navAria: 'Principal', language: { aria: 'Canviar idioma' }, nav: { experience: 'Experiència', agents: 'Agents', analysis: 'Anàlisi IA', work: 'Projectes', contact: 'Contacte' },
    hero: { location: 'Barcelona, Espanya', role: 'Enginyer Informàtic / AI Engineer', title: 'Sistemes d’IA, agents i backend amb focus en producció.', copy: 'Dissenyo i desplego sistemes d’IA aplicada: agents LLM, pipelines d’àudio, APIs, automatització i demos full-stack construïdes perquè siguin entenedores, mantenibles i segures.' },
    buttons: { viewAgents: 'Veure agents', downloadCv: 'Descarregar CV', openAgent: 'Obrir' }, studioCta: { kicker: 'AI Agent Studio', title: 'Crea el teu propi agent en segons', copy: 'Construeix una demo d’agent personal amb sector, eines, instruccions, conversa, graf d’execució i mode tècnic.', button: 'Crear el meu agent' }, strip: { aria: 'Àrees' }, sections: { profile: '01 / Perfil', experience: '02 / Experiència', agents: '03 / Agents IA', analysis: '04 / Anàlisi amb IA', work: '05 / Projectes destacats', stack: '06 / Stack', credentials: '07 / Credencials', contact: '08 / Contacte' },
    profile: { title: 'Enginyer Informàtic construint productes d’IA aplicada.', copy: 'Actualment estic centrat en sistemes d’IA end-to-end: des de la ingesta de dades i l’orquestració de models fins a serveis backend, desplegament i interfícies per a usuaris.' },
    experience: { mst: { date: 'Feb 2026 — Actualitat', title: 'AI Software Engineer — MST Holding', copy: 'Sistemes d’anàlisi de trucades amb IA, pipelines amb Whisper, LLMs locals, APIs backend i desplegament orientat a GPU.' }, stikets: { date: 'Jun 2025 — Ago 2025', title: 'Pràctiques IA — Stikets', copy: 'Desenvolupament d’un framework d’agents IA i millores de frontend/backend.' }, udl: { title: 'Enginyeria Informàtica — Universitat de Lleida', copy: 'Erasmus a NTNU Gjøvik, Noruega. Focus en enginyeria del software, IA i sistemes de dades.' } },
    agents: { title: 'Projectes d’agents', copy: 'Cada agent té la seva pròpia pàgina pública. Els backends es connecten progressivament amb límits segurs, aïllament d’entorn i sense secrets exposats.' },
    agent: { restaurant: { title: 'Agent Restaurant', copy: 'Reserves, menú i recomanacions' }, tennis: { title: 'Agent Tennista', copy: 'Anàlisi responsable de partits i prediccions' }, barber: { title: 'Agent Perruquer', copy: 'Estils, reserves i fluxos de clients' }, cv: { title: 'Agent CV', copy: 'Chatbot professional basat en el meu perfil' }, gym: { title: 'Assistent Gym', copy: 'Entrenament, reserves i captació de leads' }, investor: { title: 'Agent Inversor', copy: 'Planificació educativa d’inversió' }, news: { title: 'Agent Noticiari', copy: 'Presentador IA i resums de notícies' }, christian: { title: 'Agent Cristià', copy: 'Conversa espiritual i cerca local' }, nur: { title: 'Agent Nur', copy: 'Assistent islàmic i cerca de mesquites' } },
    analysis: { title: 'Analitzar qualsevol senyal de negoci amb IA.', copy: 'La IA no només conversa: escolta àudios, llegeix correus, resumeix reunions, detecta intenció i converteix informació desordenada en decisions clares, mètriques i pròxims passos.', examplesAria: 'Demos d’anàlisi amb IA', openDemo: 'Provar demo', demoLabel: 'Resultat', inputLabel: 'Text de prova', runDemo: 'Analitzar demo', audio: { kicker: 'Àudio / trucades', title: 'D’una trucada a un informe accionable', copy: 'Transcripció, resum, sentiment, motiu de contacte, incidències, compliment i tasques posteriors per a equips de suport o vendes.', result: 'Client preocupat · incidència detectada · seguiment recomanat', placeholder: 'Hola, truco perquè vaig fer una comanda ahir i encara no tinc confirmació. Em preocupa que no arribi a temps.', cta: 'Provar demo d’àudio' }, sentiment: { kicker: 'Sentiment', title: 'Detectar to, urgència i risc', copy: 'Classifica converses per satisfacció, frustració, prioritat i probabilitat d’escalat per actuar abans que el problema creixi.', result: 'Negatiu moderat · urgència alta · risc de baixa', placeholder: 'Estic força frustrat perquè fa tres dies que espero una resposta i ningú em diu res clar.' }, email: { kicker: 'Correu', title: 'Prioritzar emails automàticament', copy: 'Extreu intenció, dates, imports, entitats i resposta suggerida perquè una safata d’entrada es converteixi en una cua de treball.', result: 'Factura pendent · venç demà · preparar resposta', placeholder: 'Bon dia, adjunto factura pendent. El pagament venç demà i necessitem confirmació de recepció.' }, meeting: { kicker: 'Reunions', title: 'Resumir decisions i tasques', copy: 'Converteix notes o transcripcions de reunions en acords, responsables, dates límit, bloquejos i pròxims passos verificables.', result: '3 decisions · 5 tasques · 2 bloquejos oberts', placeholder: 'Reunió: la Marta prepara la proposta per divendres, l’Axel revisa el backend i falta confirmar pressupost amb direcció.' }, architect: { kicker: 'AI Solution Architect', title: 'Dissenya una solució IA per al teu procés', copy: 'Respon cinc preguntes i rep una proposta inicial amb arquitectura, components, riscos, fases, diagrama i estimació de complexitat.', cta: 'Crear informe inicial', visualData: 'Dades', visualModel: 'Model', visualReport: 'Informe' } },
    work: { caseStudy: 'Llegir cas', thermalDemo: 'Provar demo', website: 'Veure web', audioDemoCta: 'Provar demo d’anàlisi d’àudio', call: { kicker: 'IA en producció', title: 'Sistema d’anàlisi de trucades amb IA', copy: 'Treball professional desenvolupat a MST Holding en el context de serveis per a un client del sector financer: pipeline end-to-end per transformar àudios reals en transcripcions, rutes i avaluacions automàtiques amb Whisper, LLMs locals i backend productiu on-premise.' }, callDisclaimer: 'Informació presentada de manera agregada, sense dades sensibles ni detalls interns del client.', callMetrics: { aria: 'Mètriques del sistema d’anàlisi de trucades', evaluatedAudio: 'àudios avaluats automàticament', peak: 'àudios per hora', pipeline: 'pipeline complet en producció', privateGpu: 'GPU local i dades privades' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Recerca · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Recerca experimental sobre quan les GNN aporten valor real davant MLPs i models lleugers per a predicció tèrmica en grafs.' }, framework: { kicker: 'Arquitectura LLM', title: 'Framework d’agents', copy: 'Framework modular per crear agents LLM locals reutilitzables.' }, lovelink: { kicker: 'Grafs / ML', copy: 'Sistema de recomanació basat en connexions socials indirectes.' }, dashboard: { kicker: 'Full stack', title: 'Dashboard financer', copy: 'Dashboard de finances personals amb Python, Flask i SQLite.' } },
    stack: { languages: 'Llenguatges' }, credentials: { title: 'Formació, idiomes i resultats acadèmics.', copy: 'Una base universitària sòlida combinada amb certificació cloud, experiència internacional i idiomes per treballar en entorns tècnics diversos.', degree: { kicker: 'Formació', title: 'Enginyeria Informàtica', copy: 'Universitat de Lleida · Erasmus a NTNU Gjøvik, Noruega', average: 'nota mitjana final' }, languages: { kicker: 'Idiomes', es: { name: 'Espanyol', level: 'Natiu' }, ca: { name: 'Català', level: 'Natiu' }, en: { name: 'Anglès', level: 'Professional · Cambridge B2 First' }, no: { name: 'Noruec', level: 'Bàsic / A1' } }, cert: { kicker: 'Certificació', copy: 'Fonaments de cloud computing, arquitectura AWS, seguretat, xarxes, emmagatzematge i serveis base.' }, grades: { kicker: 'Assignatures destacades', aria: 'Assignatures destacades', subjects: { userDesign: "Disseny centrat en l'usuari", appSecurity: "Seguretat d'aplicacions i comunicacions", internship: 'Pràctiques tutelades en empresa', programming2: 'Programació II', programming1: 'Programació I', enterpriseArchitecture: 'Arquitectures de programari empresarial', legalSocial: 'Aspectes legals, socials i professionals', distributedComputing: 'Computació distribuïda i aplicacions', finalProject: 'Treball de fi de grau', algorithms: 'Algorítmica i complexitat' } } }, contact: { title: 'Disponible per a enginyeria d’IA, desenvolupament software i col·laboracions d’IA aplicada.' }
  },
  no: {
    meta: { title: 'Axel Berral López — Dataingeniør & AI Engineer', description: 'Jeg designer og deployer anvendte AI-systemer: LLM-agenter, lydpipelines, API-er, automatisering og sikre full-stack demoer.', ogDescription: 'Dataingeniør og AI Engineer med fokus på LLM-agenter, lydpipelines, API-er, automatisering og anvendt AI.' },
    navAria: 'Hovedmeny', language: { aria: 'Bytt språk' }, nav: { experience: 'Erfaring', agents: 'Agenter', analysis: 'AI-analyse', work: 'Prosjekter', contact: 'Kontakt' },
    hero: { location: 'Barcelona, Spania', role: 'Dataingeniør / AI Engineer', title: 'AI-systemer, agenter og backend med fokus på produksjon.', copy: 'Jeg designer og deployer anvendte AI-systemer: LLM-agenter, lydpipelines, API-er, automatisering og full-stack demoer bygget for å være forståelige, vedlikeholdbare og sikre.' },
    buttons: { viewAgents: 'Se agenter', downloadCv: 'Last ned CV', openAgent: 'Åpne' }, studioCta: { kicker: 'AI Agent Studio', title: 'Lag din egen agent på sekunder', copy: 'Bygg en personlig agentdemo med sektor, verktøy, instruksjoner, samtale, kjøringsgraf og teknisk modus.', button: 'Lag min agent' }, strip: { aria: 'Områder' }, sections: { profile: '01 / Profil', experience: '02 / Erfaring', agents: '03 / AI-agenter', analysis: '04 / AI-analyse', work: '05 / Utvalgte prosjekter', stack: '06 / Stack', credentials: '07 / Credentials', contact: '08 / Kontakt' },
    profile: { title: 'Dataingeniør som bygger anvendte AI-produkter.', copy: 'Akkurat nå fokuserer jeg på end-to-end AI-systemer: fra datainntak og modellorkestrering til backend-tjenester, utrulling og brukergrensesnitt.' },
    experience: { mst: { date: 'Feb 2026 — Nå', title: 'AI Software Engineer — MST Holding', copy: 'AI-systemer for samtaleanalyse, Whisper-pipelines, lokale LLM-er, backend-API-er og GPU-orientert deployment.' }, stikets: { date: 'Jun 2025 — Aug 2025', title: 'AI-praksis — Stikets', copy: 'Utvikling av et rammeverk for AI-agenter og forbedringer i frontend/backend.' }, udl: { title: 'Dataingeniør — Universitat de Lleida', copy: 'Erasmus ved NTNU Gjøvik, Norge. Fokus på software engineering, AI og datasystemer.' } },
    agents: { title: 'Agentprosjekter', copy: 'Hver agent har sin egen offentlige side. Backendene kobles gradvis med sikre grenser, miljøisolasjon og uten eksponerte hemmeligheter.' },
    agent: { restaurant: { title: 'Restaurantagent', copy: 'Reservasjoner, meny og anbefalinger' }, tennis: { title: 'Tennisagent', copy: 'Ansvarlig kampanalyse og prediksjoner' }, barber: { title: 'Frisøragent', copy: 'Stiler, booking og kundeflyt' }, cv: { title: 'CV-agent', copy: 'Profesjonell chatbot basert på profilen min' }, gym: { title: 'Gymassistent', copy: 'Trening, booking og lead capture' }, investor: { title: 'Investeringsagent', copy: 'Pedagogisk investeringsplanlegging' }, news: { title: 'Nyhetsanker-agent', copy: 'AI-presentatør og nyhetssammendrag' }, christian: { title: 'Kristen agent', copy: 'Åndelig samtale og lokalt søk' }, nur: { title: 'Nur-agent', copy: 'Islamsk assistent og moskésøk' } },
    analysis: { title: 'Analyser alle typer forretningssignaler med AI.', copy: 'AI gjør mer enn å chatte: den lytter til lyd, leser e-post, oppsummerer møter, oppdager intensjon og gjør rotete informasjon om til tydelige beslutninger, målinger og neste steg.', examplesAria: 'Demoer for AI-analyse', openDemo: 'Prøv demo', demoLabel: 'Resultat', inputLabel: 'Testtekst', runDemo: 'Analyser demo', audio: { kicker: 'Lyd / samtaler', title: 'Fra samtale til handlingsrapport', copy: 'Transkripsjon, sammendrag, sentiment, kontaktårsak, hendelser, etterlevelse og oppfølgingsoppgaver for support- eller salgsteam.', result: 'Bekymret kunde · problem oppdaget · oppfølging anbefalt', placeholder: 'Hei, jeg ringer fordi jeg la inn en bestilling i går og fortsatt ikke har fått bekreftelse. Jeg er bekymret for at den ikke kommer fram i tide.', cta: 'Prøv lyddemo' }, sentiment: { kicker: 'Sentiment', title: 'Oppdag tone, hast og risiko', copy: 'Klassifiser samtaler etter tilfredshet, frustrasjon, prioritet og eskaleringsrisiko slik at team kan handle tidligere.', result: 'Moderat negativ · høy hast · risiko for frafall', placeholder: 'Jeg er ganske frustrert fordi jeg har ventet tre dager på svar og ingen gir meg et tydelig svar.' }, email: { kicker: 'E-post', title: 'Prioriter e-post automatisk', copy: 'Trekk ut intensjon, datoer, beløp, entiteter og foreslåtte svar slik at innboksen blir en strukturert arbeidskø.', result: 'Ubetalt faktura · forfaller i morgen · forbered svar', placeholder: 'God morgen, jeg legger ved den ubetalte fakturaen. Betalingen forfaller i morgen og vi trenger bekreftelse på mottak.' }, meeting: { kicker: 'Møter', title: 'Oppsummer beslutninger og oppgaver', copy: 'Gjør møtenotater eller transkripsjoner om til beslutninger, ansvarlige, frister, blokkeringer og verifiserbare neste steg.', result: '3 beslutninger · 5 oppgaver · 2 åpne blokkeringer', placeholder: 'Møte: Marta lager forslaget til fredag, Axel går gjennom backend og budsjettgodkjenning fra ledelsen mangler.' }, architect: { kicker: 'AI Solution Architect', title: 'Design en AI-løsning for prosessen din', copy: 'Svar på fem spørsmål og få et første forslag med arkitektur, komponenter, risikoer, faser, diagram og kompleksitetsestimat.', cta: 'Lag første rapport', visualData: 'Data', visualModel: 'Modell', visualReport: 'Rapport' } },
    work: { caseStudy: 'Les case study', thermalDemo: 'Prøv demo', website: 'Se nettside', audioDemoCta: 'Prøv demo for lydanalyse', call: { kicker: 'Produksjons-AI', title: 'AI-system for samtaleanalyse', copy: 'Profesjonelt arbeid utviklet hos MST Holding i forbindelse med tjenester for en kunde i finanssektoren: en end-to-end pipeline som gjør ekte lyd om til transkripsjoner, ruting og automatiserte evalueringer med Whisper, lokale LLM-er og on-premise backend.' }, callDisclaimer: 'Informasjonen presenteres aggregert, uten sensitive data eller interne kundedetaljer.', callMetrics: { aria: 'Metrikk for AI-system for samtaleanalyse', evaluatedAudio: 'lydfiler evaluert automatisk', peak: 'lydfiler per time', pipeline: 'komplett produksjonspipeline', privateGpu: 'lokal GPU og private data' }, callHardware: 'On-premise · 2× NVIDIA RTX PRO 6000 Blackwell · Whisper · vLLM · FastAPI', gnn: { kicker: 'Forskning · Graph ML', title: 'Do We Need GNN Edge?', copy: 'Eksperimentell forskning på når GNN-er gir reell verdi sammenlignet med MLP-er og lette modeller for termisk prediksjon på grafer.' }, framework: { kicker: 'LLM-arkitektur', title: 'Agentrammeverk', copy: 'Modulært rammeverk for å bygge gjenbrukbare lokale LLM-agenter.' }, lovelink: { kicker: 'Grafer / ML', copy: 'Anbefalingssystem basert på indirekte sosiale forbindelser.' }, dashboard: { kicker: 'Full stack', title: 'Finansdashboard', copy: 'Dashboard for personlig økonomi med Python, Flask og SQLite.' } },
    stack: { languages: 'Språk' }, credentials: { title: 'Utdanning, språk og akademiske resultater.', copy: 'Et solid universitetsgrunnlag kombinert med cloud-sertifisering, internasjonal erfaring og språk for ulike tekniske miljøer.', degree: { kicker: 'Utdanning', title: 'Dataingeniør', copy: 'Universitat de Lleida · Erasmus ved NTNU Gjøvik, Norge', average: 'endelig snittkarakter' }, languages: { kicker: 'Språk', es: { name: 'Spansk', level: 'Morsmål' }, ca: { name: 'Katalansk', level: 'Morsmål' }, en: { name: 'Engelsk', level: 'Profesjonelt · Cambridge B2 First' }, no: { name: 'Norsk', level: 'Grunnleggende / A1' } }, cert: { kicker: 'Sertifisering', copy: 'Grunnleggende cloud computing, AWS-arkitektur, sikkerhet, nettverk, lagring og kjernetjenester.' }, grades: { kicker: 'Utvalgte fag', aria: 'Utvalgte fag', subjects: { userDesign: 'Brukersentrert design', appSecurity: 'Sikkerhet for applikasjoner og kommunikasjon', internship: 'Veiledet praksis i bedrift', programming2: 'Programmering II', programming1: 'Programmering I', enterpriseArchitecture: 'Arkitektur for bedriftsprogramvare', legalSocial: 'Juridiske, sosiale og profesjonelle aspekter', distributedComputing: 'Distribuert databehandling og applikasjoner', finalProject: 'Bacheloroppgave', algorithms: 'Algoritmikk og kompleksitet' } } }, contact: { title: 'Tilgjengelig for AI engineering, softwareutvikling og samarbeid innen anvendt AI.' }
  }
};

Object.assign(i18n.es.credentials, {
  master: {
    kicker: 'Máster en curso', title: 'Máster Universitario en Ciencia de Datos', university: 'Universitat Oberta de Catalunya', period: 'Sept. 2026 — Jun. 2027',
    copy: 'Máster Universitario en Ciencia de Datos enfocado en el análisis, procesamiento y modelado de datos, machine learning, estadística y programación aplicada.',
    skillsAria: 'Aptitudes del máster', skills: { statistics: 'Estadística', analysis: 'Análisis de datos', processing: 'Procesamiento de datos', visualization: 'Visualización de datos' }
  }
});
Object.assign(i18n.en.credentials, {
  master: {
    kicker: 'Master’s degree in progress', title: 'University Master’s Degree in Data Science', university: 'Universitat Oberta de Catalunya', period: 'Sep 2026 — Jun 2027',
    copy: 'University Master’s Degree in Data Science focused on data analysis, processing and modelling, machine learning, statistics and applied programming.',
    skillsAria: 'Master’s degree skills', skills: { statistics: 'Statistics', analysis: 'Data Analysis', processing: 'Data Processing', visualization: 'Data Visualization' }
  }
});
Object.assign(i18n.ca.credentials, {
  master: {
    kicker: 'Màster en curs', title: 'Màster Universitari en Ciència de Dades', university: 'Universitat Oberta de Catalunya', period: 'Set. 2026 — Juny 2027',
    copy: 'Màster Universitari en Ciència de Dades enfocat en l’anàlisi, el processament i el modelatge de dades, machine learning, estadística i programació aplicada.',
    skillsAria: 'Aptituds del màster', skills: { statistics: 'Estadística', analysis: 'Anàlisi de dades', processing: 'Processament de dades', visualization: 'Visualització de dades' }
  }
});
Object.assign(i18n.no.credentials, {
  master: {
    kicker: 'Pågående mastergrad', title: 'Mastergrad i datavitenskap', university: 'Universitat Oberta de Catalunya', period: 'Sep. 2026 — Jun. 2027',
    copy: 'Mastergrad i datavitenskap med fokus på dataanalyse, databehandling og modellering, maskinlæring, statistikk og anvendt programmering.',
    skillsAria: 'Ferdigheter fra mastergraden', skills: { statistics: 'Statistikk', analysis: 'Dataanalyse', processing: 'Databehandling', visualization: 'Datavisualisering' }
  }
});

Object.assign(i18n.es.contact, { copy: '¿Quieres aplicar algo similar en tu empresa? Cuéntame tu caso y vemos si tiene sentido automatizarlo con IA.', businessCta: 'Quiero una solución IA para mi empresa', businessHref: 'mailto:axelberrallopez@gmail.com?subject=Quiero%20una%20soluci%C3%B3n%20IA%20para%20mi%20empresa&body=Hola%20Axel%2C%0A%0AQuiero%20explorar%20una%20soluci%C3%B3n%20IA%20para%20mi%20empresa.%20El%20proceso%20que%20me%20gustar%C3%ADa%20mejorar%20es%3A%0A%0A' });
Object.assign(i18n.en.contact, { copy: 'Want to apply something similar in your company? Tell me your use case and we can see whether it makes sense to automate it with AI.', businessCta: 'I want an AI solution for my company', businessHref: 'mailto:axelberrallopez@gmail.com?subject=I%20want%20an%20AI%20solution%20for%20my%20company&body=Hi%20Axel%2C%0A%0AI%20want%20to%20explore%20an%20AI%20solution%20for%20my%20company.%20The%20process%20I%20would%20like%20to%20improve%20is%3A%0A%0A' });
Object.assign(i18n.ca.contact, { copy: 'Vols aplicar alguna cosa similar a la teva empresa? Explica’m el teu cas i veiem si té sentit automatitzar-lo amb IA.', businessCta: 'Vull una solució IA per a la meva empresa', businessHref: 'mailto:axelberrallopez@gmail.com?subject=Vull%20una%20soluci%C3%B3%20IA%20per%20a%20la%20meva%20empresa&body=Hola%20Axel%2C%0A%0AVull%20explorar%20una%20soluci%C3%B3%20IA%20per%20a%20la%20meva%20empresa.%20El%20proc%C3%A9s%20que%20m%27agradaria%20millorar%20%C3%A9s%3A%0A%0A' });
Object.assign(i18n.no.contact, { copy: 'Vil du bruke noe lignende i bedriften din? Fortell meg om caset, så ser vi om det gir mening å automatisere det med AI.', businessCta: 'Jeg vil ha en AI-løsning for bedriften min', businessHref: 'mailto:axelberrallopez@gmail.com?subject=Jeg%20vil%20ha%20en%20AI-l%C3%B8sning%20for%20bedriften%20min&body=Hei%20Axel%2C%0A%0AJeg%20vil%20utforske%20en%20AI-l%C3%B8sning%20for%20bedriften%20min.%20Prosessen%20jeg%20vil%20forbedre%20er%3A%0A%0A' });

const getValue = (obj, path) => path.split('.').reduce((acc, part) => acc && acc[part], obj);
const localeByLanguage = { es: 'es_ES', en: 'en_GB', ca: 'ca_ES', no: 'nb_NO' };

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang;
  document.title = dict.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', dict.meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', dict.meta.ogDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', localeByLanguage[lang] || localeByLanguage.es);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', dict.meta.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', dict.meta.description);

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
  window.dispatchEvent(new CustomEvent('portfolioLanguageChanged', { detail: { lang } }));
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
initAnalysisDemos();


function initAnalysisDemos() {
  const demos = Array.from(document.querySelectorAll('[data-analysis-demo]'));
  if (!demos.length) return;

  const detailText = {
    es: {
      words: 'palabras analizadas',
      audio: ['Transcripción simulada y motivo principal detectado.', 'Sentimiento y urgencia estimados automáticamente.', 'Siguiente acción propuesta para el equipo.'],
      sentiment: ['Polaridad, emoción dominante y urgencia detectadas.', 'Riesgo priorizado para decidir si escalar.', 'Resumen corto listo para CRM o dashboard.'],
      email: ['Intención, fecha límite y entidades principales extraídas.', 'Prioridad asignada según urgencia y contenido.', 'Borrador de siguiente respuesta sugerido.'],
      meeting: ['Decisiones separadas de comentarios generales.', 'Tareas con responsable y posible fecha límite.', 'Bloqueos abiertos marcados para seguimiento.']
    },
    en: {
      words: 'words analyzed',
      audio: ['Simulated transcript and main contact reason detected.', 'Sentiment and urgency estimated automatically.', 'Next action suggested for the team.'],
      sentiment: ['Polarity, dominant emotion and urgency detected.', 'Risk prioritized to decide whether to escalate.', 'Short summary ready for CRM or dashboard.'],
      email: ['Intent, deadline and key entities extracted.', 'Priority assigned from urgency and content.', 'Suggested next reply draft prepared.'],
      meeting: ['Decisions separated from general comments.', 'Tasks with owner and possible deadline.', 'Open blockers marked for follow-up.']
    },
    ca: {
      words: 'paraules analitzades',
      audio: ['Transcripció simulada i motiu principal detectat.', 'Sentiment i urgència estimats automàticament.', 'Acció següent proposada per a l’equip.'],
      sentiment: ['Polaritat, emoció dominant i urgència detectades.', 'Risc prioritzat per decidir si cal escalar.', 'Resum curt llest per a CRM o dashboard.'],
      email: ['Intenció, data límit i entitats principals extretes.', 'Prioritat assignada segons urgència i contingut.', 'Esborrany de següent resposta suggerit.'],
      meeting: ['Decisions separades dels comentaris generals.', 'Tasques amb responsable i possible data límit.', 'Bloquejos oberts marcats per seguiment.']
    },
    no: {
      words: 'ord analysert',
      audio: ['Simulert transkripsjon og hovedårsak oppdaget.', 'Sentiment og hast estimert automatisk.', 'Neste handling foreslått for teamet.'],
      sentiment: ['Polaritet, dominerende følelse og hast oppdaget.', 'Risiko prioritert for å vurdere eskalering.', 'Kort sammendrag klart for CRM eller dashboard.'],
      email: ['Intensjon, frist og viktige entiteter trukket ut.', 'Prioritet satt ut fra hast og innhold.', 'Forslag til neste svar klargjort.'],
      meeting: ['Beslutninger skilt fra generelle kommentarer.', 'Oppgaver med ansvarlig og mulig frist.', 'Åpne blokkeringer markert for oppfølging.']
    }
  };

  const safe = (value) => String(value ?? '').replace(/[&<>'"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  const lang = () => {
    const code = (document.documentElement.lang || 'es').slice(0, 2);
    return detailText[code] ? code : 'es';
  };

  function syncDemoSample(card) {
    const input = card.querySelector('[data-demo-input]');
    if (input && !input.dataset.userEdited) input.value = input.placeholder || input.value;
  }

  function renderDemo(card) {
    syncDemoSample(card);
    const type = card.dataset.analysisDemo || 'audio';
    const code = lang();
    const dict = i18n[code] || i18n.es;
    const analysis = getValue(dict, `analysis.${type}`) || getValue(i18n.es, `analysis.${type}`);
    const input = card.querySelector('[data-demo-input]');
    const output = card.querySelector('[data-demo-output]');
    if (!analysis || !output) return;
    const wordCount = ((input?.value || input?.placeholder || '').trim().match(/\S+/g) || []).length;
    const details = detailText[code][type] || detailText.es[type];
    output.innerHTML = `<span>${safe(dict.analysis.demoLabel)}</span><strong>${safe(analysis.result)}</strong><ul>${details.map((item) => `<li>${safe(item)}</li>`).join('')}<li>${wordCount} ${safe(detailText[code].words)}</li></ul>`;
  }

  demos.forEach((card) => {
    const input = card.querySelector('[data-demo-input]');
    syncDemoSample(card);
    input?.addEventListener('input', () => { input.dataset.userEdited = 'true'; });
    card.querySelector('[data-demo-run]')?.addEventListener('click', () => renderDemo(card));
  });

  window.addEventListener('portfolioLanguageChanged', () => setTimeout(() => { demos.forEach((card) => { syncDemoSample(card); renderDemo(card); }); }, 0));
}

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
  const localizedMessages = {
    es: {
      names: { restaurante: 'Agente Restaurante', clinica: 'Agente Clínica', inmobiliaria: 'Agente Inmobiliaria', ecommerce: 'Agente E-commerce', personalizado: 'Agente Personalizado' },
      sectors: { restaurante: 'Quiero reservar mesa para 4 mañana por la noche. ¿Tenéis disponibilidad?', clinica: 'Necesito pedir cita esta semana por la tarde. ¿Puedes buscarme un hueco?', inmobiliaria: 'Busco un piso de alquiler de dos habitaciones cerca del centro.', ecommerce: 'Mi pedido tenía que llegar hoy y aún no aparece. ¿Puedes revisar qué pasa?', personalizado: 'Necesito ayuda con una tarea concreta. ¿Puedes guiarme paso a paso?' },
      templates: { reservas: 'Quiero reservar mesa para 4 mañana por la noche. ¿Tenéis disponibilidad?', leads: 'Estoy interesado pero quiero saber precios y si me podéis contactar.', soporte: 'Mi pedido tenía que llegar hoy y aún no aparece. ¿Puedes revisarlo?', recomendador: 'Quiero una recomendación, pero no sé cuál elegir.', personal: 'Ayúdame a organizar esta semana y priorizar tareas.' },
      quick: { cita: 'Necesito cita para una revisión esta semana por la tarde.' },
      idle: 'Completa los pasos y pulsa “Probar agente real”.'
    },
    en: {
      names: { restaurante: 'Restaurant Agent', clinica: 'Clinic Agent', inmobiliaria: 'Real Estate Agent', ecommerce: 'E-commerce Agent', personalizado: 'Custom Agent' },
      sectors: { restaurante: 'I want to book a table for 4 tomorrow night. Do you have availability?', clinica: 'I need to book an appointment this week in the afternoon. Can you find me a slot?', inmobiliaria: 'I’m looking for a two-bedroom rental apartment near the city center.', ecommerce: 'My order was supposed to arrive today but it still has not shown up. Can you check what happened?', personalizado: 'I need help with a specific task. Can you guide me step by step?' },
      templates: { reservas: 'I want to book a table for 4 tomorrow night. Do you have availability?', leads: 'I’m interested, but I’d like to know the prices and whether you can contact me.', soporte: 'My order was supposed to arrive today but it still has not shown up. Can you check it?', recomendador: 'I want a recommendation, but I’m not sure which one to choose.', personal: 'Help me organize this week and prioritize tasks.' },
      quick: { cita: 'I need an appointment for a check-up this week in the afternoon.' },
      idle: 'Complete the steps and click “Test real agent”.'
    },
    ca: {
      names: { restaurante: 'Agent Restaurant', clinica: 'Agent Clínica', inmobiliaria: 'Agent Immobiliària', ecommerce: 'Agent E-commerce', personalizado: 'Agent Personalitzat' },
      sectors: { restaurante: 'Vull reservar taula per a 4 demà a la nit. Teniu disponibilitat?', clinica: 'Necessito demanar cita aquesta setmana a la tarda. Em pots buscar un forat?', inmobiliaria: 'Busco un pis de lloguer de dues habitacions prop del centre.', ecommerce: 'La meva comanda havia d’arribar avui i encara no apareix. Pots revisar què passa?', personalizado: 'Necessito ajuda amb una tasca concreta. Em pots guiar pas a pas?' },
      templates: { reservas: 'Vull reservar taula per a 4 demà a la nit. Teniu disponibilitat?', leads: 'M’interessa, però voldria saber preus i si em podeu contactar.', soporte: 'La meva comanda havia d’arribar avui i encara no apareix. Pots revisar-la?', recomendador: 'Vull una recomanació, però no sé quina triar.', personal: 'Ajuda’m a organitzar aquesta setmana i prioritzar tasques.' },
      quick: { cita: 'Necessito cita per a una revisió aquesta setmana a la tarda.' },
      idle: 'Completa els passos i prem “Provar agent real”.'
    },
    no: {
      names: { restaurante: 'Restaurantagent', clinica: 'Klinikkagent', inmobiliaria: 'Eiendomsagent', ecommerce: 'E-commerce-agent', personalizado: 'Tilpasset agent' },
      sectors: { restaurante: 'Jeg vil bestille bord til 4 i morgen kveld. Har dere ledig?', clinica: 'Jeg må bestille en time denne uken på ettermiddagen. Kan du finne en ledig tid?', inmobiliaria: 'Jeg ser etter en toroms leilighet til leie nær sentrum.', ecommerce: 'Bestillingen min skulle komme i dag, men den har fortsatt ikke dukket opp. Kan du sjekke hva som skjer?', personalizado: 'Jeg trenger hjelp med en konkret oppgave. Kan du veilede meg steg for steg?' },
      templates: { reservas: 'Jeg vil bestille bord til 4 i morgen kveld. Har dere ledig?', leads: 'Jeg er interessert, men vil gjerne vite priser og om dere kan kontakte meg.', soporte: 'Bestillingen min skulle komme i dag, men den har fortsatt ikke dukket opp. Kan du sjekke den?', recomendador: 'Jeg vil ha en anbefaling, men vet ikke hva jeg skal velge.', personal: 'Hjelp meg å organisere denne uken og prioritere oppgaver.' },
      quick: { cita: 'Jeg trenger en time for en kontroll denne uken på ettermiddagen.' },
      idle: 'Fullfør stegene og trykk “Test ekte agent”.'
    }
  };
  const currentLang = () => {
    try { const stored = localStorage.getItem('preferredLanguage'); if (localizedMessages[stored]) return stored; } catch (_) {}
    const code = (new URLSearchParams(location.search).get('lang') || document.documentElement.lang || 'es').slice(0, 2);
    return localizedMessages[code] ? code : 'es';
  };
  const currentMessages = () => localizedMessages[currentLang()] || localizedMessages.es;
  const sectorMessage = (key) => currentMessages().sectors[key] || localizedMessages.es.sectors[key] || '';
  const sectorName = (key) => currentMessages().names[key] || localizedMessages.es.names[key] || '';
  const defaultSectorNames = () => Object.values(localizedMessages).flatMap((lang) => Object.values(lang.names));
  const templateMessage = (key) => currentMessages().templates[key] || localizedMessages.es.templates[key] || '';
  const quickMessages = () => ({ reserva: templateMessage('reservas'), cita: currentMessages().quick.cita, pedido: templateMessage('soporte'), lead: templateMessage('leads') });
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
    if (userMessage) userMessage.value = templateMessage(activeTemplate) || tpl.message;
    updatePreview();
    renderIdle();
  }

  function updatePreview() {
    const sector = sectors[activeSector] || sectors.restaurante;
    const tpl = templates[activeTemplate] || templates.reservas;
    if (agentNameInput && (!agentNameInput.value || defaultSectorNames().includes(agentNameInput.value))) agentNameInput.value = sectorName(activeSector) || sector.label;
    const displayName = (agentNameInput && agentNameInput.value.trim()) || sectorName(activeSector) || sector.label;
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
    chat.innerHTML = `<p class="user">${esc((userMessage && userMessage.value) || sectorMessage(activeSector) || sector.user)}</p><p class="assistant">${esc(currentMessages().idle)}</p>`;
    nodes.forEach((node) => { node.classList.remove('active', 'done'); node.classList.add('idle'); });
  }

  function refreshLocalizedMessage() {
    if (agentNameInput && (!agentNameInput.value || defaultSectorNames().includes(agentNameInput.value))) agentNameInput.value = sectorName(activeSector) || agentNameInput.value;
    if (userMessage) userMessage.value = templateMessage(activeTemplate) || sectorMessage(activeSector) || userMessage.value;
    updatePreview();
    renderIdle();
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
    if (agentNameInput) agentNameInput.value = sectorName(activeSector) || (sectors[activeSector] || sectors.restaurante).label;
    if (userMessage) userMessage.value = sectorMessage(activeSector) || (sectors[activeSector] || sectors.restaurante).user;
    updatePreview();
    renderIdle();
  }));
  templateButtons.forEach((button) => button.addEventListener('click', () => applyTemplate(button.dataset.template || 'reservas')));
  toolInputs.forEach((input) => input.addEventListener('change', updatePreview));
  [agentNameInput, toneInput, goalsInput, forbiddenInput, instructions].forEach((input) => { if (input) input.addEventListener('input', updatePreview); if (input && input.tagName === 'SELECT') input.addEventListener('change', updatePreview); });
  if (userMessage) userMessage.addEventListener('input', renderIdle);
  studio.querySelectorAll('.studio-templates button').forEach((button) => button.addEventListener('click', () => {
    if (!userMessage) return;
    const messages = quickMessages();
    userMessage.value = messages[button.dataset.template] || messages.reserva;
    renderIdle();
  }));
  window.addEventListener('portfolioLanguageChanged', () => setTimeout(refreshLocalizedMessage, 0));
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setTimeout(refreshLocalizedMessage, 140)));
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
