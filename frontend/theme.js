(() => {
  const storageKey = 'axelbl-theme';
  const root = document.documentElement;
  const getPreferred = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (_) {}
    return 'dark';
  };
  const apply = (theme) => {
    const value = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = value;
    root.style.colorScheme = value;
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const isLight = value === 'light';
      button.setAttribute('aria-pressed', String(isLight));
      button.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo luminoso');
      const text = button.querySelector('[data-theme-label]');
      if (text) text.textContent = isLight ? 'Oscuro' : 'Claro';
      const icon = button.querySelector('[data-theme-icon]');
      if (icon) icon.textContent = isLight ? '☾' : '☼';
    });
  };
  apply(getPreferred());
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
