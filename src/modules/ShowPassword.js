class ShowPassword {
  selectors = {
    root: '[data-js-modal-inner]',
    buttons: '[data-js-field-button]',
    input: '[data-js-input-password]',
    field: '[data-js-field]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor() {
    this.rootElements = document.querySelectorAll(this.selectors.root)
    if (!this.rootElements.length) return;
    this.rootElements.forEach(rootElement => this.bindRoot(rootElement))
  }

  bindRoot(rootElement) {
    rootElement.querySelectorAll(this.selectors.buttons).forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (btn.getAttribute('type') !== 'button') e.preventDefault();

        const field = btn.closest(this.selectors.field) || rootElement;
        const input = field.querySelector(this.selectors.input)
        if(!input) return;

        const willShow = input.type === 'password'
        input.type = willShow ? 'text' : 'password'

        const openBtn   = field.querySelector(`${this.selectors.buttons}[data-variant="open"]`);
        const closedBtn = field.querySelector(`${this.selectors.buttons}[data-variant="closed"]`);

        openBtn?.classList.toggle(this.stateClasses.isActive,  willShow);
        closedBtn?.classList.toggle(this.stateClasses.isActive, !willShow);

        openBtn?.setAttribute('aria-pressed',  String(willShow));
        closedBtn?.setAttribute('aria-pressed', String(!willShow));


        field.querySelectorAll(this.selectors.buttons).forEach(b => b.classList.toggle(this.stateClasses.isActive, show))
      })
    })
  }
}

export default ShowPassword