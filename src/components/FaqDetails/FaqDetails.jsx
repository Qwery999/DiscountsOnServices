import './FaqDetails.scss'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    extraAttrs,
    open,
  } = props

  return (
    <details className="faq-details" open={open} data-js-accordion-details="">
      <summary className="faq-details__question">
              <span {...extraAttrs.question}></span>
        <Icon
          className="faq-details__question-icon"
          name="accordion-arrow"
          hasFill
          extraAttrs={{
            'data-js-accordion-icon': '',
          }}
        />
      </summary>
      <div className="faq-details__answer" {...extraAttrs.answer}></div>
    </details>
  )
}