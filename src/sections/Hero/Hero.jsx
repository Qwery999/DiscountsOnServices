import './Hero.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__body">
          <div className="hero__body-text">
            <h1 className="hero__title" id="hero-title">
              Start enjoying a benefit of up to 50%
            </h1>
            <div className="hero__description">
              <p>
                You have always wanted to get the same product at a special
                price for you, without haggling - and it is yours.
              </p>
            </div>
          </div>
          <div className="hero__button-wrapper">
            <Button label="Start using" mode="start-using" />
          </div>
        </div>
        <div className="hero__image"></div>
      </div>
    </section>
  )
}
