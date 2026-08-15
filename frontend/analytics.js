(() => {
  const ENDPOINT = '/analytics/event';
  const UTM_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content'];
  const now = () => Date.now();
  const dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1';
  if (dnt) return;
  const safe = (v, n=500) => String(v || '').trim().slice(0, n);
  const params = new URLSearchParams(location.search);

  function readJson(storage, key) {
    try { return JSON.parse(storage.getItem(key) || '{}') || {}; } catch (_) { return {}; }
  }
  function writeJson(storage, key, value) {
    try { storage.setItem(key, JSON.stringify(value)); } catch (_) {}
  }
  function hostOf(url) {
    try { return new URL(url, location.href).hostname.replace(/^www\./, '').toLowerCase(); } catch (_) { return ''; }
  }
  function sourceFromCurrentVisit() {
    const utmSource = safe(params.get('utm_source'), 120);
    const refHost = hostOf(document.referrer);
    if (utmSource) return utmSource;
    if (refHost && refHost !== location.hostname.replace(/^www\./, '').toLowerCase()) return refHost;
    return '';
  }

  const storedUtm = readJson(sessionStorage, 'axel_utm');
  const utm = {...storedUtm};
  UTM_KEYS.forEach(k => { if (params.get(k)) utm[k] = params.get(k); });
  writeJson(sessionStorage, 'axel_utm', utm);

  const touchNow = {
    source: sourceFromCurrentVisit(),
    medium: safe(params.get('utm_medium'), 120),
    campaign: safe(params.get('utm_campaign'), 160),
    content: safe(params.get('utm_content'), 160),
    landing_page: location.pathname,
    referrer: safe(document.referrer, 900),
    ts: new Date().toISOString()
  };
  let firstTouch = readJson(localStorage, 'axel_first_touch');
  if (!firstTouch.ts) {
    firstTouch = touchNow;
    writeJson(localStorage, 'axel_first_touch', firstTouch);
  }
  const lastTouch = {...touchNow, source: touchNow.source || utm.utm_source || ''};
  writeJson(sessionStorage, 'axel_last_touch', lastTouch);

  const sidKey = 'axel_session_id';
  let sessionId = sessionStorage.getItem(sidKey);
  if (!sessionId) { sessionId = 's_' + Math.random().toString(36).slice(2) + now().toString(36); sessionStorage.setItem(sidKey, sessionId); }
  const vidKey = 'axel_visitor_id';
  let visitorId = localStorage.getItem(vidKey);
  if (!visitorId) { visitorId = 'v_' + Math.random().toString(36).slice(2) + now().toString(36); localStorage.setItem(vidKey, visitorId); }
  const demoFromUrl = () => new URLSearchParams(location.search).get('demo') || (location.pathname.includes('call-analysis') ? 'audio' : '');
  const projectFromUrl = (href='') => href && href.includes('/projects/') ? href.split('/projects/')[1].split(/[?#]/)[0] : '';
  const base = () => ({
    page_url: location.href,
    page_path: location.pathname,
    referrer: document.referrer,
    title: document.title,
    session_id: sessionId,
    visitor_id: visitorId,
    demo: demoFromUrl(),
    utm_source: utm.utm_source || '',
    utm_medium: utm.utm_medium || '',
    utm_campaign: utm.utm_campaign || '',
    utm_content: utm.utm_content || '',
    extra: { first_touch: firstTouch, last_touch: lastTouch }
  });
  function send(event, data={}) {
    const mergedExtra = {...(base().extra || {}), ...(data.extra || {})};
    const payload = JSON.stringify({...base(), event, ...data, extra: mergedExtra});
    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], {type:'application/json'});
        if (navigator.sendBeacon(ENDPOINT, blob)) return;
      }
    } catch (_) {}
    try { fetch(ENDPOINT, {method:'POST', headers:{'Content-Type':'application/json'}, body:payload, keepalive:true, credentials:'omit'}).catch(()=>{}); } catch (_) {}
  }
  window.axelTrack = send;
  send('page_view');

  function eventForLink(a, text) {
    const href = a.getAttribute('href') || '';
    const abs = a.href || href;
    const lower = (href + ' ' + text).toLowerCase();
    if (href.includes('/assets/') && href.toLowerCase().includes('cv')) return 'cv_downloaded';
    if (abs.includes('github.com')) return 'github_clicked';
    if (href.startsWith('mailto:')) return 'email_clicked';
    if (abs.includes('linkedin.com/in/axelbl')) return 'external_link_clicked';
    if (href.includes('/projects/ai-analysis-demo') || href.includes('/projects/call-analysis.html#audioDemo')) return 'demo_started';
    if (href.includes('/agents/') || href.includes('/projects/')) return 'project_opened';
    if (href === '#agents' || href === '#ai-analysis') return 'hero_demo_clicked';
    if (/^https?:\/\//i.test(abs) && hostOf(abs) !== location.hostname.replace(/^www\./, '').toLowerCase()) return 'external_link_clicked';
    return '';
  }
  function looksLikeCta(el, text) {
    const cls = safe(el.className, 300).toLowerCase();
    const low = text.toLowerCase();
    return Boolean(el.dataset?.trackCta) || cls.includes('button') || cls.includes('demo-cta') ||
      /(probar|demo|contact|contactar|crear|descargar|download|github|linkedin|solución|solution|reserva|book|analizar|generate|generar)/i.test(low);
  }

  document.addEventListener('click', (ev) => {
    const el = ev.target && ev.target.closest ? ev.target.closest('a,button,[data-track]') : null;
    if (!el) return;
    const text = safe(el.innerText || el.textContent, 180);
    const href = el.getAttribute && (el.getAttribute('href') || '');
    const common = {target_text:text, target_url: href || (el.href || ''), project: projectFromUrl(href || el.href || ''), demo: demoFromUrl() || (href && href.includes('demo=') ? new URL(href, location.href).searchParams.get('demo') : '')};
    if (looksLikeCta(el, text)) send('cta_clicked', common);
    let event = el.dataset && el.dataset.track;
    if (!event && el.matches('a')) event = eventForLink(el, text);
    const low = text.toLowerCase();
    if (!event && (low.includes('modo técnico') || low.includes('technical mode') || low.includes('mode tècnic'))) event = 'technical_mode_opened';
    if (!event && (low.includes('generar') || low.includes('generate')) && location.search.includes('demo=architect')) event = 'report_generated';
    if (event && event !== 'cta_clicked') send(event, common);
  }, {capture:true});

  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    const started = now();
    const p = originalFetch.apply(this, arguments);
    p.then(res => {
      const ms = now() - started;
      if (url.includes('/api/audio-demo/analyze')) send(res.ok ? 'demo_completed' : 'demo_failed', {demo:'audio', error: res.ok ? '' : String(res.status), extra:{latencyMs:ms}});
      else if (url.includes('/agent-studio/chat')) send(res.ok ? 'demo_completed' : 'demo_failed', {demo:'agent_studio', error: res.ok ? '' : String(res.status), extra:{latencyMs:ms}});
      else if (url.includes('/ai-solution-architect/report-email')) send(res.ok ? 'lead_submitted' : 'demo_failed', {demo:'architect', error: res.ok ? '' : String(res.status), extra:{latencyMs:ms, legacy_event:'report_emailed'}});
      else if (url.includes('/chat')) send(res.ok ? 'chat_completed' : 'chat_failed', {agent:(location.pathname.match(/\/agents\/([^/]+)/)||[])[1]||'cv', error: res.ok ? '' : String(res.status), extra:{latencyMs:ms}});
      else if (url.includes('/booking/reserve')) send(res.ok ? 'lead_submitted' : 'demo_failed', {agent:(location.pathname.match(/\/agents\/([^/]+)/)||[])[1]||'', error: res.ok ? '' : String(res.status), extra:{latencyMs:ms, legacy_event:'booking_completed'}});
      else if (url.includes('/booking/availability')) send('booking_started', {agent:(location.pathname.match(/\/agents\/([^/]+)/)||[])[1]||''});
    }).catch(err => {
      const msg = safe(err && err.message, 240);
      if (url.includes('/api/audio-demo/analyze')) send('demo_failed', {demo:'audio', error:msg});
      else if (url.includes('/chat')) send('chat_failed', {error:msg});
      else if (url.includes('/booking/')) send('demo_failed', {error:msg});
    });
    return p;
  };
})();
