import './About.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'

export default () => {
  return (
    <Section className="about" title="About us" titleId="about">
      <div className="about__inner">
        <div className="about__body">
          <Image
            className="about__body-logo"
            src="/src/assets/images/logo-about.jpg"
            width={130}
          />
          <p className="about__body-description paragraph-blog">
            We offer you a subscription to various media services at the best
            price.
          </p>
          <p className="about__body-description paragraph-blog">
            We have partnered with several companies to help you find the best
            prices for your media subscriptions and provide you with the best
            prices for the Premium subscriptions you want.
          </p>
          <p className="about__body-description paragraph-blog paragraph-blog--bold">
            It's simple, fast and economical.
          </p>
        </div>
        <Image
          className="about__image"
          src="/src/assets/images/about/about1.jpg"
        />
      </div>
    </Section>
  )
}
