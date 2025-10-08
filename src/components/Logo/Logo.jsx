import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="./"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="./images/logo.svg"
        alt=""
        width={55}
        height={55}
        loading={loading}
      />
      <span className="logo-text">DiscountsOnServices</span>
    </a>
  )
}
