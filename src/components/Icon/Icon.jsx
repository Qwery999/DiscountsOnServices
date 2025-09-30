import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'

export default (props) => {
  const { className, name, hasFill = false, ariaLabel, extraAttrs } = props

  return (
    <span
      className={clsx('icon', className)}
      aria-label={ariaLabel}
      {...extraAttrs}
    >
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}
