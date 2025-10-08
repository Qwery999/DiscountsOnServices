import './Footer.scss'
import { Image } from 'minista'
import SwitchLanguage from '@/components/SwitchLanguage'
import Button from '@/components/Button'

export default () => {
  const subscriptions = [
    {
      label: 'Netflix',
      href: './netflix',
    },
    {
      label: 'YouTube Premium',
      href: './youtube',
    },
    {
      label: 'Spotify',
      href: './spotify',
    },
  ]

  const siteNavigation = [
    {
      href: './#about',
      extraAttrs: {
        'data-i18n': 'footer.about'
      }
    },
    {
      href: './faq',
      extraAttrs: {
        'data-i18n': 'footer.faq'
      }
    },
    {
      href: 'mailto:discountsonservices.support@gmail',
      extraAttrs: {
        'data-i18n': 'footer.support'
      }
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
                src="/src/assets/images/logo-footer.png"
              />
              <span>DiscountsOnServices</span>
            </div>
            <div className="footer__logo-description">
              <p data-i18n='footer.logo-description'></p>
            </div>
          </div>
          <nav className="footer__nav">
            <p className="footer__nav-title" data-i18n='footer.subscriptions'></p>
            <ul className="footer__nav-list">
              {subscriptions.map(({ label, href }, index) => (
                <li className="footer__nav-item" key={index}>
                  <a className="footer__nav-link" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="footer__nav">
            <p className="footer__nav-title" data-i18n='footer.site-navigation'></p>
            <ul className="footer__nav-list">
              {siteNavigation.map(({ href, extraAttrs }, index) => (
                <li className="footer__nav-item" key={index}>
                  <a className="footer__nav-link" href={href} {...extraAttrs}></a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__soc1als">
            <div className="footer__soc1al">
              <Button
                label="WhatsApp"
                mode="icon-white"
                href="https://wa.me/380999041622"
                isLabelHidden
                iconName="whatsapp"
                hasFillIcon
                extraAttrs={{target:"_blank", rel:"noopener"}}
              />
              <Button
                label="Telegram"
                mode="icon-white"
                href="https://t.me/qwery_999"
                isLabelHidden
                iconName="telegram"
                hasFillIcon
                extraAttrs={{target:"_blank", rel:"noopener"}}
              />
            </div>
            <SwitchLanguage mode="footer" />
          </div>
        </div>
        <div className="footer__extra">
          <p className="footer__extra-text" data-i18n='footer.privacy-policy'></p>
          <p className="footer__extra-text" data-i18n='footer.copyright'></p>
          <p className="footer__extra-text" data-i18n='footer.developed'></p>
        </div>
      </div>
    </footer>
  )
}
