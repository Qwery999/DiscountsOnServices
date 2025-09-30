import './Button.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import { Image } from 'minista'

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    /**
     * '' (default) | blue-small | black | start-using | request | icon | copy | link | sign-in-with | profile | change-plan | cancel | cross | resent-code | icon-white
     */
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
    imgSrc,
    hasFillIcon,
    iconPosition = '',
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )
  const imageComponent = imgSrc && <Image src={imgSrc} />

  return (
    <Component
      className={clsx('button', className, mode && `button--${mode}`)}
      {...attributesByTag}
      {...extraAttrs}
    >
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconComponent}
      {imageComponent}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}
