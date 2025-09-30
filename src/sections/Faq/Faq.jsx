import './Faq.scss'
import Section from '@/layouts/Section'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default () => {
  return (
    <Section className="faq" title="FAQ" titleId="faq">
      <div className="faq__inner">
        <div className="faq__accordion" data-js-accordion="">
          <details className="faq__details" data-js-accordion-details="">
            <summary className="faq__question">
              <span>
                The set time has passed, but the invoice has not yet arrived,
                what should I do?
              </span>
              <Icon
                className="faq__question-icon"
                name="accordion-arrow"
                hasFill
                extraAttrs={{
                  'data-js-accordion-icon': '',
                }}
              />
            </summary>
            <div className="faq__answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              dolor excepturi ipsum iure officiis omnis pariatur praesentium
              provident repudiandae sapiente similique veritatis vitae
              voluptatem! Asperiores dolores doloribus earum fugiat placeat?
            </div>
          </details>
          <details className="faq__details" data-js-accordion-details="">
            <summary className="faq__question">
              <span>
                Can I change my Netflix account email and password after
                purchase?
              </span>
              <Icon
                className="faq__question-icon"
                name="accordion-arrow"
                hasFill
                extraAttrs={{
                  'data-js-accordion-icon': '',
                }}
              />
            </summary>
            <div className="faq__answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              numquam odit quibusdam quidem repudiandae tempore vitae
              voluptatibus. Alias aliquid assumenda blanditiis consequatur
              consequuntur, cumque cupiditate, dicta distinctio esse
              exercitationem explicabo harum in molestias mollitia nemo non
              optio perferendis placeat provident recusandae repellendus sint
              ullam unde ut velit voluptate voluptatum. A.
            </div>
          </details>
          <details className="faq__details" data-js-accordion-details="">
            <summary className="faq__question">
              <span>Can I add a phone number for password recovery?</span>
              <Icon
                className="faq__question-icon"
                name="accordion-arrow"
                hasFill
                extraAttrs={{
                  'data-js-accordion-icon': '',
                }}
              />
            </summary>
            <div className="faq__answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              deserunt ducimus earum enim, esse id incidunt laboriosam magnam
              quasi voluptate? Aspernatur dolorum error esse eveniet
              exercitationem , harum ipsa iste maxime modi nesciunt nisi nostrum
              odit perferendis sequi temporibus. Placeat, repellat!
            </div>
          </details>
          <details className="faq__details" data-js-accordion-details="">
            <summary className="faq__question">
              <span>
                How soon will I receive the account information I ordered?
              </span>
              <Icon
                className="faq__question-icon"
                name="accordion-arrow"
                hasFill
                extraAttrs={{
                  'data-js-accordion-icon': '',
                }}
              />
            </summary>
            <div className="faq__answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium consequuntur error explicabo incidunt ipsam magni
              natus pariatur perferendis quidem reprehenderit!
            </div>
          </details>
          <details className="faq__details" open data-js-accordion-details="">
            <summary className="faq__question">
              <span>How to pay?</span>
              <Icon
                className="faq__question-icon"
                name="accordion-arrow"
                hasFill
                extraAttrs={{
                  'data-js-accordion-icon': '',
                }}
              />
            </summary>
            <div className="faq__answer">
              Payment options we currently have: PayPal, Bitcoin.
            </div>
          </details>
        </div>
        <Button label="Support" mode="black" />
      </div>
    </Section>
  )
}
