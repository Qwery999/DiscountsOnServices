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
        <h3 className="invite-friends__title" data-i18n='home.invite-friends.title'></h3>
        <div className="invite-friends__description">
          <p data-i18n='home.invite-friends.description'></p>
        </div>
      </div>
      <div className="invite-friends__link-wrapper">
        <p className="invite-friends__link-clue h5" data-i18n='home.invite-friends.clue'></p>
        <div className="invite-friends__link-button-wrapper">
          <Button
            mode="link"
            href
            extraAttrs={{
              'data-i18n':'home.invite-friends.link'
            }}
          />
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