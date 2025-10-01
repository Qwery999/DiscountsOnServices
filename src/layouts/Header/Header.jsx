import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'
import SwitchLanguage from '@/components/SwitchLanguage'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'FAQ',
      href: '/about',
    },
    {
      label: 'Support',
      href: 'mailto:discountsonservices.support@gmail',
    },
    {
      label: 'About',
      href: '/#about',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <details className="header__menu-dropdown">
                <summary
                  className="header__menu-dropdown-button"
                  aria-label="Subscriptions"
                >
                  <span>Subscriptions</span>
                  <Icon name="arrow-down" />
                </summary>
                <ul className="header__menu-dropdown-list" role="menu">
                  <li className="header__menu-dropdown-item" role="menuitem">
                    <a className="header__menu-dropdown-link" href="/netflix">
                      Netflix
                    </a>
                  </li>
                  <li className="header__menu-dropdown-item" role="menuitem">
                    <a className="header__menu-dropdown-link" href="/youtube">
                      YouTube Premium
                    </a>
                  </li>
                  <li className="header__menu-dropdown-item" role="menuitem">
                    <a className="header__menu-dropdown-link" href="/spotify">
                      Spotify
                    </a>
                  </li>
                </ul>
              </details>
            </li>
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
          <div className="header__soc1als">
            <Button
              label="WhatsApp"
              mode="icon"
              href
              isLabelHidden
              iconName="whatsapp"
              hasFillIcon
            />
            <Button
              label="WhatsApp"
              mode="icon"
              href
              isLabelHidden
              iconName="telegram"
              hasFillIcon
            />
          </div>
          <SwitchLanguage />
          <Button label="Log in" mode="blue-small" />
        </div>
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <div className="header__overlay-menu-dialog-header">
            <div className="header__overlay-menu-dialog-header-inner">
              <Logo className="header__logo" loading="eager" />
              <Button
                className="header__burger-button-cross"
                label="cross"
                mode="cross"
                isLabelHidden
                iconName="cross"
                hasFillIcon
                extraAttrs={{
                  'data-js-overlay-menu-burger-button-cross': '',
                }}
              />
            </div>
          </div>
          <div className="header__overlay-menu-dialog-body">
            <div className="header__overlay-menu-dialog-body-inner">
              <nav className="header__overlay-menu-dialog-body-menu">
                <ul className="header__overlay-menu-dialog-body-list">
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/"
                    >
                      <Icon name="home" hasFill />
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/"
                    >
                      <Icon name="about" hasFill />
                      <span>About</span>
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/"
                    >
                      <Icon name="faq" hasFill />
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/"
                    >
                      <Icon name="support" hasFill />
                      <span>Support</span>
                    </a>
                  </li>
                </ul>
                <ul className="header__overlay-menu-dialog-body-list">
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/netflix"
                    >
                      Netflix
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/youtube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/spotify"
                    >
                      Spotify
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header__overlay-menu-dialog-body-actions">
                <Button label="Login" />
                <Button label="Sign up" />
              </div>
            </div>
          </div>
          <div className="header__overlay-menu-dialog-footer">
            <div className="header__overlay-menu-dialog-footer-inner">
              <div className="header__soc1als">
                <Button
                  label="WhatsApp"
                  mode="icon"
                  href
                  isLabelHidden
                  iconName="whatsapp"
                  hasFillIcon
                />
                <Button
                  label="WhatsApp"
                  mode="icon"
                  href
                  isLabelHidden
                  iconName="telegram"
                  hasFillIcon
                />
              </div>
              <SwitchLanguage mode="overlay-menu" />
            </div>
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
