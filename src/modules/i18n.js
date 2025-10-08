export default class I18n {
  constructor(options = {}) {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
    this.supported = options.supported || ['en', 'ua'];
    this.path = options.path || `${base}/locales`;
    this.key = 'lang';
    this.lang = localStorage.getItem(this.key) || this.detectLang();
    this.dict = {};
  }

  detectLang() {
    const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return this.supported.includes(browserLang) ? browserLang : 'en';
  }

  async load(lang = this.lang) {
    try {
      const res = await fetch(`${this.path}/${lang}.json`, { cache: 'no-store' });
      if (!res.ok) {
        console.error(`[i18n] cannot load ${lang}: status ${res.status}`);
        return;
      }
      this.dict = await res.json();
      this.lang = lang;
      localStorage.setItem(this.key, lang);
      document.documentElement.setAttribute('lang', lang);
      this.apply();
    } catch (err) {
      console.error('[i18n] load failed:', err);
    }
  }

  t(key, vars = {}) {
    const value = key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), this.dict);
    if (value == null) return key;
    return String(value).replace(/\{([\w.-]+)}/g, (_, k) => vars[k] ?? '');
  }

  apply(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = this.t(key);
    });

    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrs = el.dataset.i18nAttr.split('|');
      attrs.forEach(pair => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, this.t(key));
      });
    });
  }

  async change(lang) {
    if (lang === this.lang) return;
    await this.load(lang);
  }

  initLanguageButtons(selector = '[data-lang]') {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest(selector);
      if (!btn) return;
      const lang = btn.dataset.lang;
      this.change(lang).then(() => {
        document.querySelectorAll(selector).forEach(b =>
          b.classList.toggle('is-active', b.dataset.lang === this.lang)
        );
      });
    });
  }
}