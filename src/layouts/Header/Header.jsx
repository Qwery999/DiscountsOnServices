import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'Subscriptions',
      href: '/',
    },
    {
      label: 'FAQ',
      href: '/about',
    },
    {
      label: 'Support',
      href: '/about',
    },
    {
      label: 'About',
      href: '/about',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <div className="header__logo-wrapper">
          <Logo className="header__logo" loading="eager" />
          <span className="header__logo-text">DiscountsOnServices</span>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a
                  className={clsx(
                    'header__menu-link',
                    href === url && 'is-active'
                  )}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button className="header__button">
            <span>Search</span>
            <Icon name="search" />
          </Button>
          <Button className="header__button">
            <span>Notifications</span>
            <Icon name="notification" />
          </Button>
        </div>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
        <dialog
        className="header__overlay-menu-dialog"
        data-js-overlay-menu-dialog=""
        >


        </dialog>
      </div>
    </header>
  )
}
