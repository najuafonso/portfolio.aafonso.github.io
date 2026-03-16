function setLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.getAttribute('data-lang') === lang ? 'inline' : 'none';
  });
}

// Initialize default language
setLang('pt');
