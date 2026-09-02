(() => {
  const KEY = 'axel_analytics_consent';
  const getChoice = () => { try { return localStorage.getItem(KEY); } catch (_) { return 'denied'; } };
  const setChoice = (value) => { try { localStorage.setItem(KEY, value); } catch (_) {} };
  const clearAnalyticsData = () => {
    try { ['axel_first_touch', 'axel_visitor_id'].forEach((key) => localStorage.removeItem(key)); } catch (_) {}
    try { ['axel_utm', 'axel_last_touch', 'axel_session_id'].forEach((key) => sessionStorage.removeItem(key)); } catch (_) {}
  };
  const existingFooter = document.querySelector('body > footer:not(.composer)');
  const footer = existingFooter || document.createElement('footer');
  footer.classList.add('site-legal-footer');
  footer.innerHTML = '<span>© <span id="year" data-legal-year></span> Axel Berral López</span><a href="/privacidad.html">Privacidad</a><a href="/aviso-legal.html">Aviso legal y condiciones</a><button type="button" data-manage-privacy>Preferencias de privacidad</button>';
  if (!existingFooter) document.body.appendChild(footer);
  footer.querySelector('[data-legal-year]').textContent = new Date().getFullYear();

  const banner = document.createElement('aside');
  banner.className = 'consent-banner';
  banner.setAttribute('aria-label', 'Preferencias de privacidad');
  banner.hidden = true;
  banner.innerHTML = '<strong>Analítica respetuosa con tu privacidad</strong><p>Con tu permiso, guardamos identificadores propios en este navegador para medir visitas y mejorar la web. No usamos publicidad ni cookies de terceros. Puedes cambiar tu elección cuando quieras. <a href="/privacidad.html#analitica">Más información</a>.</p><div class="consent-actions"><button type="button" data-consent="denied">Solo necesarias</button><button type="button" class="consent-accept" data-consent="granted">Aceptar analítica</button></div>';
  document.body.appendChild(banner);

  const decorateForms = (root = document) => {
    root.querySelectorAll?.('form:not([data-privacy-notice])').forEach((form) => {
      form.dataset.privacyNotice = 'true';
      const note = document.createElement('p');
      note.className = 'form-privacy-note';
      note.innerHTML = 'Al enviar este formulario confirmas que has leído la <a href="/privacidad.html">Política de privacidad</a>.';
      const submit = form.querySelector('[type="submit"]');
      const actions = submit?.closest('.modal-actions,.form-actions,.report-email-actions');
      form.insertBefore(note, actions || submit || null);
    });
  };
  decorateForms();
  new MutationObserver((mutations) => mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
    if (node.nodeType === 1) decorateForms(node.matches?.('form') ? node.parentElement : node);
  }))).observe(document.body, { childList: true, subtree: true });

  const show = () => { banner.hidden = false; };
  const hide = () => { banner.hidden = true; };
  if (!getChoice()) show();
  banner.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-consent]')?.dataset.consent;
    if (!choice) return;
    const previous = getChoice();
    setChoice(choice);
    if (choice === 'denied') clearAnalyticsData();
    hide();
    if (choice !== previous) location.reload();
  });
  footer.querySelector('[data-manage-privacy]').addEventListener('click', show);
})();
