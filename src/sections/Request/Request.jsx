import './Request.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section className="request container">
      <h2 className="visually-hidden">Request</h2>
      <div className="request__inner">
        <div className="request__body">
          <h4 className="request__title" data-i18n='home.request.title'></h4>
          <div className="request__description">
            <p data-i18n='home.request.description'></p>
          </div>
        </div>
        <Button
          className="request__button"
          mode="request"
          extraAttrs={{
            'data-i18n':'home.request.button'
          }}
        />
      </div>
    </section>
  )
}
