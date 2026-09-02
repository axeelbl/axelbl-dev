(() => {
  try { ['axel_analytics_consent', 'axel_first_touch', 'axel_visitor_id'].forEach((key) => localStorage.removeItem(key)); } catch (_) {}
  try { ['axel_utm', 'axel_last_touch', 'axel_session_id'].forEach((key) => sessionStorage.removeItem(key)); } catch (_) {}
  const existingFooter = document.querySelector('body > footer:not(.composer)');
  const footer = existingFooter || document.createElement('footer');
  footer.classList.add('site-legal-footer');
  footer.innerHTML = '<span>© <span data-legal-year></span> Axel Berral López</span><a href="/privacidad.html">Privacidad</a><a href="/aviso-legal.html">Aviso legal y condiciones</a>';
  if (!existingFooter) document.body.appendChild(footer);
  footer.querySelector('[data-legal-year]').textContent = new Date().getFullYear();

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

})();
