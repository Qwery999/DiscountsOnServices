class Account {
  selectors = {
    root: '[data-js-header]',
    accountActive: '[data-js-account-active]',
    buttonLogin: '[data-js-account-login]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.accountActiveElements = this.rootElement.querySelectorAll(
      this.selectors.accountActive
    )
    this.buttonLoginElements = this.rootElement.querySelector(
      this.selectors.buttonLogin
    )
    this.bindEvents()
  }

  onButtonClick = () => {
    this.accountActiveElements.forEach((elem) => {
      elem.classList.toggle(this.stateClasses.isActive)
    })

    this.rootElement.querySelectorAll('[data-js-modal].' + this.stateClasses.isActive)
      .forEach(elem => {
        elem.classList.remove(this.stateClasses.isActive);
      });
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    this.buttonLoginElements.addEventListener('click', this.onButtonClick)
  }
}

export default Account
