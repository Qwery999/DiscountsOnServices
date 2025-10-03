class OverlayMenu {
  selectors = {
    root: '[data-js-header]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    crossButton: '[data-js-overlay-menu-burger-button-cross]',
    about: '[data-js-overlay-menu-about]',
    buttonMobileModalOpen: '[data-js-mobile-modal-open]',
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
    this.aboutElement = this.rootElement.querySelector(this.selectors.about)

    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.add(this.stateClasses.isActive)
    this.crossButtonElement.classList.add(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.add(this.stateClasses.isLock)

    this.rootElement.querySelectorAll('[data-js-modal].' + this.stateClasses.isActive)
      .forEach(elem => {
        elem.classList.remove(this.stateClasses.isActive);
      });
  }

  closeMenu = () => {
    this.crossButtonElement.classList.remove(this.stateClasses.isActive)
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
  }

  onCrossButtonClick = () => {
    this.closeMenu()
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }


  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    this.crossButtonElement.addEventListener('click', this.onCrossButtonClick)
    this.aboutElement.addEventListener('click', this.onCrossButtonClick)
  }
}

export default OverlayMenu
