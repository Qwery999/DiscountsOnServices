import './PlanCard.scss'
import Button from '@/components/Button'

export default (props) => {
  const {
    extraAttrs,
    price6,
    price12,
  } = props


  return (
    <div
      className='plan-card'
    >
      <h2 className="plan-card__title" {...extraAttrs.label}></h2>
      <div className="plan-card__body">
        <ul className="plan-card__list">
          {extraAttrs.features.map(({text}, index) => (
            <li className="plan-card__item" key={index} {...text}></li>
          ))}
        </ul>
        <div className="plan-card__extra">
          <p className="plan-card__price" data-js-tabs-price=''>
            <span className="plan-card__price--small">$</span>
            {price6}
          </p>
          <p className="plan-card__price visually-hidden" data-js-tabs-price=''>
            <span className="plan-card__price--small">$</span>
            {price12}
          </p>
          <Button
            label='Get started'
            mode='get-started'
            extraAttrs={{
              'data-js-modal-open':'subscription-application',
              'data-i18n':'get-started'
            }}
          />
        </div>
      </div>
    </div>
  )
}