import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, titleId, children } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <h2 className="section__title" id={titleId}>
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  )
}
