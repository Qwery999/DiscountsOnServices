import './Footer.scss'
import Icon from '@/components/Icon'
import {Image} from 'minista'
import SwitchLanguage from '@/components/SwitchLanguage'
import Button from '@/components/Button'

export default () => {
  const subscriptions = [
    {
      label:'Netflix',
      href:'/',
    },
    {
      label:'YouTube Premium',
      href:'/',
    },
    {
      label:'Spotify',
      href:'/',
    },
  ]

  const siteNavigation = [
    {
      label:'About',
      href:'/',
    },
    {
      label:'FAQ',
      href:'/',
    },
    {
      label:'Support',
      href:'/',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <Image
                className="footer__logo-images"
                src='/src/assets/images/logo-footer.png'
              />
              <span>DiscountsOnServices</span>
            </div>
            <div className="footer__logo-description">
              <p>It's simple, fast and economical</p>
            </div>
          </div>
          <nav className="footer__nav">
            <p className="footer__nav-title">Subscriptions</p>
            <ul className="footer__nav-list">
              {subscriptions.map(({label, href}, index) => (
                <li className='footer__nav-item' key={index}>
                  <a
                    className="footer__nav-link"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          </nav>
          <nav className="footer__nav">
            <p className="footer__nav-title">Site navigation</p>
            <ul className="footer__nav-list">
              {siteNavigation.map(({label, href}, index) => (
                <li className='footer__nav-item' key={index}>
                  <a
                    className="footer__nav-link"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          </nav>
          <div className="footer__soc1als">
            <div className="footer__soc1al">
              <Button
                label='WhatsApp'
                mode='icon-white'
                href='/'
                isLabelHidden
                iconName='whatsapp'
                hasFillIcon
              />
              <Button
                label='Telegram'
                mode='icon-white'
                href='/'
                isLabelHidden
                iconName='telegram'
                hasFillIcon
              />
            </div>
            <SwitchLanguage
              mode='footer'
            />
          </div>
        </div>
        <div className="footer__extra">
          <p className="footer__extra-text">Privacy Policy</p>
          <p className="footer__extra-text">Copyright 2021 © All Rights Reserved</p>
          <p className="footer__extra-text">Developed by ....</p>
        </div>
      </div>
    </footer>
  )
}
