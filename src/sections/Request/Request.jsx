import './Request.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section className="request container">
      <h2 className="visually-hidden">Request</h2>
      <div className="request__inner">
        <div className="request__body">
          <h4 className="request__title">
            Request for an additional subscription that was not found here
          </h4>
          <div className="request__description">
            <p>Disney, Amazon Prime, Microsoft Office, Microsoft Windows</p>
          </div>
        </div>
        <Button className="request__button" label="Request" mode="request" />
      </div>
    </section>
  )
}
