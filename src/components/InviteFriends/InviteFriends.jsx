import './InviteFriends.scss'
import Button from '@/components/Button'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
  } = props

  return (
    <div className= {clsx("invite-friends", className)}>
      <div className="invite-friends__text">
        <h3 className="invite-friends__title">Invite friends</h3>
        <div className="invite-friends__description">
          <p>
            Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY
            subscriptions with a secure payment from PAYPAL
          </p>
        </div>
      </div>
      <div className="invite-friends__link-wrapper">
        <p className="invite-friends__link-clue h5">
          Click on the link
        </p>
        <div className="invite-friends__link-button-wrapper">
          <Button label="DISCOUNTS ON SERVICES" mode="link" href />
          <Button
            label="Copy"
            mode="copy"
            isLabelHidden
            iconName="copy"
            hasFillIcon
          />
        </div>
      </div>
    </div>
  )
}