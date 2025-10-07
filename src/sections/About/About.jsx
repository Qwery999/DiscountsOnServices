import './About.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'

export default () => {
  return (
    <Section
      className="about"
      title="About us"
      titleId="about"
      id='about'
      extraAttrs={{
        'data-i18n': 'home.about.title'
      }}
    >
      <div className="about__inner">
        <div className="about__body">
          <Image
            className="about__body-logo"
            src="/src/assets/images/logo-about.jpg"
            width={130}
          />
          <p className="about__body-description paragraph-blog" data-i18n='home.about.description.1'></p>
          <p className="about__body-description paragraph-blog" data-i18n='home.about.description.2'></p>
          <p className="about__body-description paragraph-blog paragraph-blog--bold" data-i18n='home.about.description.3'></p>
        </div>
        <Image
          className="about__image"
          src="/src/assets/images/about/about1.jpg"
        />
      </div>
    </Section>
  )
}
