class Tabs {
  selectors = {
    root: '[data-js-tabs]',
    buttons: '[data-js-tabs-button]',
    prices: '[data-js-tabs-price]',
  }

  stateClasses = {
    isActive: 'is-active',
    isHidden: 'visually-hidden',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.buttonsElements = this.rootElement.querySelectorAll(
      this.selectors.buttons
    )
    this.pricesElements = this.rootElement.querySelectorAll(
      this.selectors.prices
    )
    this.bindEvents()
  }

  onButtonClick = () => {
    this.buttonsElements.forEach((elem) => {
      elem.classList.toggle(this.stateClasses.isActive)
    })
    this.pricesElements.forEach((elem) => {
      elem.classList.toggle(this.stateClasses.isHidden)
    })
  }

  bindEvents() {
    this.buttonsElements.forEach((elem) => {
      elem.addEventListener('click', this.onButtonClick)
    })
  }
}

export default Tabs
