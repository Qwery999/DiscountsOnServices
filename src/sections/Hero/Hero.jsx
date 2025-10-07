import './Hero.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__body">
          <div className="hero__body-text">
            <h1 className="hero__title" id="hero-title" data-i18n='home.hero.title'></h1>
            <div className="hero__description">
              <p data-i18n='home.hero.description'></p>
            </div>
          </div>
          <div className="hero__button-wrapper">
            <Button
              label="Start using"
              mode="start-using"
              href='#subscriptions'
              extraAttrs={{
                'data-i18n':'home.hero.start'
              }}
            />
          </div>
        </div>
        <div className="hero__image"></div>
      </div>
    </section>
  )
}
