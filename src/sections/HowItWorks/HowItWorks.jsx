import './HowItWorks.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'
import InviteFriends from '@/components/InviteFriends'

export default () => {
  return (
    <Section
      className="how-it-works"
      title="How it works?"
      titleId="how-it-works"
      extraAttrs={{
        'data-i18n': 'home.how-it-works.title'
      }}
    >
      <div className="how-it-works__inner">
        <div className="how-it-works__step-cards">
          <div className="how-it-works__step-card">
            <div className="how-it-works__step-card-body">
              <h4 className="how-it-works__step-card-title" data-i18n='home.how-it-works.card1.title'></h4>
              <Image
                className="how-it-works__step-card-image"
                src="/src/assets/images/how-it-works/how-it-works1.png"
                width={173}
              />
            </div>
            <div className="how-it-works__step-card-description paragraph-blog">
              <p data-i18n='home.how-it-works.card1.description'></p>
            </div>
          </div>
          <div className="how-it-works__step-card">
            <div className="how-it-works__step-card-body">
              <h4 className="how-it-works__step-card-title" data-i18n='home.how-it-works.card2.title'></h4>
              <Image
                className="how-it-works__step-card-image"
                src="/src/assets/images/how-it-works/how-it-works2.png"
                width={173}
              />
            </div>
            <div className="how-it-works__step-card-description paragraph-blog">
              <p data-i18n='home.how-it-works.card2.description'></p>
            </div>
          </div>
          <div className="how-it-works__step-card">
            <div className="how-it-works__step-card-body">
              <h4 className="how-it-works__step-card-title" data-i18n='home.how-it-works.card3.title'></h4>
              <Image
                className="how-it-works__step-card-image"
                src="/src/assets/images/how-it-works/how-it-works3.png"
                width={173}
              />
            </div>
            <div className="how-it-works__step-card-description how-it-works__step-card-description--short paragraph-blog">
              <p data-i18n='home.how-it-works.card3.description'></p>
            </div>
          </div>
        </div>
        <InviteFriends/>
      </div>
    </Section>
  )
}
