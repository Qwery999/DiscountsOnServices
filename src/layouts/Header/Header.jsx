import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'
import SwitchLanguage from '@/components/SwitchLanguage'
import ModalLogIn from '@/components/ModalLogIn'
import ModalSignUp from '@/components/ModalSignUp'
import ModalEmail from '@/components/ModalEmail'
import ModalSuccessfulRegistration
  from '@/components/ModalSuccessfulRegistration'
import ModalForgetPasswordStepOne from '@/components/ModalForgetPasswordStepOne'
import ModalForgetPasswordStepTwo from '@/components/ModalForgetPasswordStepTwo'
import ModalForgetPasswordStepThree
  from '@/components/ModalForgetPasswordStepThree'
import ModalLogout from '@/components/ModalLogout'
import ModalSubscriptionApplication
  from '@/components/ModalSubscriptionApplication'
import ModalPurchasePayment from '@/components/ModalPurchasePayment'
import ModalPurchasePaymentStepTwo
  from '@/components/ModalPurchasePaymentStepTwo'
import ModalPurchasePaymentStepThree
  from '@/components/ModalPurchasePaymentStepThree'
import ModalSubscriptionPaid from '@/components/ModalSubscriptionPaid'
import {Image} from 'minista'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      href: './faq',
      extraAttrs: {
        'data-i18n': 'header.faq',
      },
    },
    {
      href: 'mailto:discountsonservices.support@gmail',
      extraAttrs: {
        'data-i18n': 'header.support',
      },
    },
    {
      href: './#about',
      extraAttrs: {
        'data-i18n': 'header.about',
      },
    },
  ]



  return (
    <header className="header" data-js-header="">
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
                  <span data-i18n='header.subscriptions'></span>
                  <Icon name="arrow-down" />
                </summary>
                <ul className="header__menu-dropdown-list" role="menu">
                  <li className="header__menu-dropdown-item" role="menuitem">
                    <a className="header__menu-dropdown-link" href="./netflix">
                      Netflix
                    </a>
                  </li>
                  <li className="header__menu-dropdown-item" role="menuitem">
                    <a className="header__menu-dropdown-link" href="./youtube">
                      YouTube Premium
                    </a>
                  </li>
                  <li className="header__menu-dropdown-item" role="menuitem">
                    <a className="header__menu-dropdown-link" href="./spotify">
                      Spotify
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            {menuItems.map(({ label, href, extraAttrs }, index) => (
              <li className="header__menu-item" key={index}>
                <a
                  className={clsx(
                    'header__menu-link',
                    href === url && 'is-active'
                  )}
                  href={href}
                  {...extraAttrs}
                >
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
              href="https://wa.me/380999041622"
              isLabelHidden
              iconName="whatsapp"
              hasFillIcon
              extraAttrs={{target:"_blank", rel:"noopener"}}
            />
            <Button
              label="Telegram"
              mode="icon"
              href="https://t.me/qwery_999"
              isLabelHidden
              iconName="telegram"
              hasFillIcon
              extraAttrs={{target:"_blank", rel:"noopener"}}
            />
          </div>
          <SwitchLanguage />
          <Button
            className='header__actions-button is-active'
            label="Log in"
            mode="blue-small"
            extraAttrs={{
              'data-js-modal-open':"login",
              'data-js-account-active': '',
              'data-i18n': 'header.login',
          }}
          />

          <details className="header__actions-dropdown header__actions-button" data-js-account-active=''>
            <summary
              className="header__actions-dropdown-button"
              aria-label="Profile"
            >
              <span data-i18n='header.profile'></span>
              <Icon name="arrow-down" />
            </summary>
            <ul className="header__actions-dropdown-list" role="menu">
              <li className="header__actions-dropdown-item" role="menuitem">
                <Button
                  label="My profile"
                  mode="profile"
                  href='./account'
                  extraAttrs={{
                    'data-i18n':'header.my-profile'
                  }}
                />
              </li>
              <li className="header__actions-dropdown-item" role="menuitem">
                <button
                  className="header__actions-dropdown-item-button"
                  type="button"
                  data-js-modal-open='logout'
                >
                  <Icon
                    name='exit'
                    hasFill
                  />
                  <span data-i18n='header.logout'></span>
                </button>
              </li>
            </ul>
          </details>
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
                <a href='./account' className="header__overlay-menu-dialog-body-account" data-js-account-active=''>
                  <Image src='/src/assets/images/account/account1.jpg'/>
                  <p className="header__overlay-menu-dialog-body-account-username" data-i18n='overlay-menu.username'></p>
                </a>
                <ul className="header__overlay-menu-dialog-body-list">
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="/"
                    >
                      <Icon name="home" hasFill />
                      <span data-i18n='overlay-menu.home'></span>
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href='./#about'
                      data-js-overlay-menu-about=''
                    >
                      <Icon name="about" hasFill />
                      <span data-i18n='overlay-menu.about'></span>
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href='./faq'
                    >
                      <Icon name="faq" hasFill />
                      <span data-i18n='overlay-menu.faq'></span>
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href='mailto:discountsonservices.support@gmail'
                    >
                      <Icon name="support" hasFill />
                      <span data-i18n='overlay-menu.support'></span>
                    </a>
                  </li>
                </ul>
                <ul className="header__overlay-menu-dialog-body-list">
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="./netflix"
                    >
                      Netflix
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="./youtube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="header__overlay-menu-dialog-body-item">
                    <a
                      className="header__overlay-menu-dialog-body-link"
                      href="./spotify"
                    >
                      Spotify
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header__overlay-menu-dialog-body-actions">
                <button
                  className="header__overlay-menu-dialog-body-actions-logout"
                  type="button"
                  data-js-modal-open='logout'
                  data-js-account-active=''
                >
                  <Icon
                    name='exit'
                    hasFill
                  />
                  <span data-i18n='overlay-menu.logout'></span>
                </button>
                <Button
                  className='header__overlay-menu-dialog-body-actions-button is-active'
                  label="Login"
                  extraAttrs={{
                    'data-js-modal-open':"login",
                    'data-js-account-active':'',
                    'data-i18n':'overlay-menu.login'
                  }}
                />
                <Button
                  className='header__overlay-menu-dialog-body-actions-button is-active'
                  label="Sign up"
                  extraAttrs={{
                    'data-js-modal-open':"singup",
                    'data-js-account-active':'',
                    'data-i18n':'overlay-menu.sign-up'
                }}
                />
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
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
      <div className="modal-pack">
        <ModalLogIn
          extraAttrs={{
            'data-js-modal': 'login',
          }}
        />
        <ModalSignUp
          extraAttrs={{
            'data-js-modal':'singup',
          }}
        />
        <ModalEmail
          extraAttrs={{
            'data-js-modal':'email',
          }}
        />
        <ModalSuccessfulRegistration
          extraAttrs={{
            'data-js-modal':'successful-registration',
          }}
        />
        <ModalForgetPasswordStepOne
          extraAttrs={{
            'data-js-modal':'forget-password-step-one',
          }}
        />
        <ModalForgetPasswordStepTwo
          extraAttrs={{
            'data-js-modal':'forget-password-step-two',
          }}
        />
        <ModalForgetPasswordStepThree
          extraAttrs={{
            'data-js-modal':'forget-password-step-three',
          }}
        />
        <ModalLogout
          extraAttrs={{
            'data-js-modal':'logout',
          }}
        />
        <ModalSubscriptionApplication
          extraAttrs={{
            'data-js-modal':'subscription-application',
          }}
        />
        <ModalPurchasePayment
          extraAttrs={{
            'data-js-modal':'purchase-payment',
          }}
        />
        <ModalPurchasePaymentStepTwo
          extraAttrs={{
            'data-js-modal':'purchase-payment-step-two',
          }}
        />
        <ModalPurchasePaymentStepThree
          extraAttrs={{
            'data-js-modal':'purchase-payment-step-three',
          }}
        />
        <ModalSubscriptionPaid
          extraAttrs={{
            'data-js-modal':'subscription-paid',
          }}
        />
      </div>
    </header>
  )
}
