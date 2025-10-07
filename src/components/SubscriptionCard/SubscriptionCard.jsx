import './SubscriptionCard.scss'
import Button from '@/components/Button'
import { Image } from 'minista'

export default (props) => {
  const { href, imgSrc, extraAttrs } = props

  return (
    <div className="subscription-card">
      <div className="subscription-card__body">
        <div className="subscription-card__body-text">
          <h3 className="subscription-card__title" {...extraAttrs.label}></h3>
          <div className="subscription-card__description">
            <p {...extraAttrs.description}></p>
          </div>
        </div>
        <div className="subscription-card__button-wrapper">
          <Button label="Learn more" href={href} extraAttrs={{'data-i18n': 'home.subscriptions.learn-more'}} />
        </div>
      </div>
      <Image className="subscription-card__image" src={imgSrc} width={588} />
    </div>
  )
}
