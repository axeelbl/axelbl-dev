(() => {
  const storageKey = 'axelbl-theme';
  const root = document.documentElement;
  const translations = {
    es: { light: 'Claro', dark: 'Oscuro', toLight: 'Cambiar a modo claro', toDark: 'Cambiar a modo oscuro' },
    en: { light: 'Light', dark: 'Dark', toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
    ca: { light: 'Clar', dark: 'Fosc', toLight: 'Canviar al mode clar', toDark: 'Canviar al mode fosc' },
    no: { light: 'Lys', dark: 'Mørk', toLight: 'Bytt til lyst tema', toDark: 'Bytt til mørkt tema' }
  };
  const labels = () => translations[(root.lang || 'es').slice(0, 2)] || translations.es;
  const getPreferred = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (_) {}
    return 'dark';
  };
  const apply = (theme) => {
    const value = theme === 'light' ? 'light' : 'dark';
    const copy = labels();
    root.dataset.theme = value;
    root.style.colorScheme = value;
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const isLight = value === 'light';
      button.setAttribute('aria-pressed', String(isLight));
      button.setAttribute('aria-label', isLight ? copy.toDark : copy.toLight);
      const text = button.querySelector('[data-theme-label]');
      if (text) text.textContent = isLight ? copy.dark : copy.light;
      const icon = button.querySelector('[data-theme-icon]');
      if (icon) icon.textContent = isLight ? '☾' : '☼';
    });
  };
  const refreshTranslation = () => apply(root.dataset.theme || getPreferred());
  apply(getPreferred());
  new MutationObserver(refreshTranslation).observe(root, { attributes: true, attributeFilter: ['lang'] });
  window.addEventListener('portfolioLanguageChanged', refreshTranslation);
  window.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme || getPreferred());
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const next = root.dataset.theme === 'light' ? 'dark' : 'light';
        try { localStorage.setItem(storageKey, next); } catch (_) {}
        apply(next);
      });
    });
  });
})();
