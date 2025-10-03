class ModalManager {
  selectors = {
    root: '[data-js-header]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    crossButton: '[data-js-overlay-menu-burger-button-cross]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.crossButtonElement = this.rootElement.querySelector(this.selectors.crossButton)
    this.bindEvents()
  }

  getModalEl(id) {
    return this.rootElement.querySelector(`[data-js-modal='${CSS.escape(id)}']`)
  }

  open(id) {
    const modal = this.getModalEl(id)
    if(!modal) return;

    this.closeAll()

    if (this.dialogElement.open) {
      this.crossButtonElement.classList.remove(this.stateClasses.isActive)
      this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
      this.dialogElement.open = !this.dialogElement.open
    }
    modal.classList.add(this.stateClasses.isActive)
    document.documentElement.classList.add(this.stateClasses.isLock)
    const focusable = modal.querySelector('[data-autofocus], button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusable?.focus();
  }

  closeAll() {
    this.rootElement.querySelectorAll('[data-js-modal].' + this.stateClasses.isActive)
      .forEach(elem => {
        elem.classList.remove(this.stateClasses.isActive);
      });
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  onClick = (elem) => {
    const openBtn = elem.target.closest('[data-js-modal-open]');
    if (openBtn) {
      const id = openBtn.getAttribute('data-js-modal-open');
      this.open(id);
      return;
    }

    // кнопки закрытия внутри модалки
    if (elem.target.closest('[data-js-modal-close]')) {
      this.closeAll();
      return;
    }

    // клик по оверлею (wrapper)
    const wrapper = elem.target.closest('[data-js-modal]');
    if (wrapper && elem.target === wrapper) {
      this.closeAll();
    }
  };

  onKeyDown = (elem) => {
    if (elem.key === 'Escape') this.closeAll();
  };

  bindEvents () {
    this.rootElement.addEventListener('click', this.onClick)
    document.addEventListener('keydown', this.onKeyDown)
  }
}

export default ModalManager
