class AccountTabs {
  selectors = {
    root: '[data-js-data-management]',
    buttons: '[data-js-data-management-button]',
    blocks: '[data-js-data-management-block]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.buttonsElements = this.rootElement.querySelectorAll(
      this.selectors.buttons
    )
    this.blocksElements = this.rootElement.querySelectorAll(
      this.selectors.blocks
    )
    this.bindEvents()
  }

  onButtonClick = () => {
    this.buttonsElements.forEach((elem) => {
      elem.classList.toggle(this.stateClasses.isActive)
    })
    this.blocksElements.forEach((elem) => {
      elem.classList.toggle(this.stateClasses.isActive)
    })
  }

  bindEvents() {
    this.buttonsElements.forEach((elem) => {
      elem.addEventListener('click', this.onButtonClick)
    })
  }
}

export default AccountTabs
