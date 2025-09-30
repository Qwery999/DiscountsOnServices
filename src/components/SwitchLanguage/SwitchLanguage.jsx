import './SwitchLanguage.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    /**
     * '' (default) | overlay-menu | footer
     */
    mode,
  } = props

  return (
    <details
      className={clsx(
        'switch-language',
        className,
        mode && `switch-language--${mode}`
      )}
    >
      <summary className="switch-language__button" aria-label="Subscriptions">
        <span>EN</span>
        <Icon name="arrow-down" />
      </summary>
      <ul className="switch-language__list" role="menu">
        <li className="switch-language__item" role="menuitem">
          <p className="switch-language__link">EN</p>
        </li>
        <li className="switch-language__item" role="menuitem">
          <p className="switch-language__link">UA</p>
        </li>
      </ul>
    </details>
  )
}
