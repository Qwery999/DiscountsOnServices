class Accordion {
  selectors = {
    root: '[data-js-accordion]',
    details: '[data-js-accordion-details]',
    icon: '[data-js-accordion-icon]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.detailsElements = this.rootElement.querySelectorAll(
      this.selectors.details
    )
    this.bindEvents()
  }

  bindEvents() {
    this.detailsElements.forEach((elem) => {
      elem.addEventListener('toggle', () => {
        if (elem.open) {
          this.detailsElements.forEach((other) => {
            if (other !== elem) {
              other.open = false
            }
          })
        }

        const icon = elem.querySelector(this.selectors.icon)
        if (icon) {
          icon.classList.toggle(this.stateClasses.isActive)
        }
      })
    })
  }
}

export default Accordion
