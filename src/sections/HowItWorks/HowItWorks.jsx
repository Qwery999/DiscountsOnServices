import './HowItWorks.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'
import Button from '@/components/Button'
import InviteFriends from '@/components/InviteFriends'

export default () => {
  return (
    <Section
      className="how-it-works"
      title="How it works?"
      titleId="how-it-works"
    >
      <div className="how-it-works__inner">
        <div className="how-it-works__step-cards">
          <div className="how-it-works__step-card">
            <div className="how-it-works__step-card-body">
              <h4 className="how-it-works__step-card-title">Step 1</h4>
              <Image
                className="how-it-works__step-card-image"
                src="/src/assets/images/how-it-works/how-it-works1.png"
                width={173}
              />
            </div>
            <div className="how-it-works__step-card-description paragraph-blog">
              <p>Enter your account information</p>
            </div>
          </div>
          <div className="how-it-works__step-card">
            <div className="how-it-works__step-card-body">
              <h4 className="how-it-works__step-card-title">Step 2</h4>
              <Image
                className="how-it-works__step-card-image"
                src="/src/assets/images/how-it-works/how-it-works2.png"
                width={173}
              />
            </div>
            <div className="how-it-works__step-card-description paragraph-blog">
              <p>Select the desired subscription and plan</p>
            </div>
          </div>
          <div className="how-it-works__step-card">
            <div className="how-it-works__step-card-body">
              <h4 className="how-it-works__step-card-title">Step 3</h4>
              <Image
                className="how-it-works__step-card-image"
                src="/src/assets/images/how-it-works/how-it-works3.png"
                width={173}
              />
            </div>
            <div className="how-it-works__step-card-description how-it-works__step-card-description--short paragraph-blog">
              <p>Pay your bill with PayPal</p>
            </div>
          </div>
        </div>
        <InviteFriends/>
      </div>
    </Section>
  )
}
