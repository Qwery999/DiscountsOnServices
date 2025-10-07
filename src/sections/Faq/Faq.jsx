import './Faq.scss'
import Section from '@/layouts/Section'
import Button from '@/components/Button'
import clsx from 'clsx'
import FaqDetails from '@/components/FaqDetails'

export default (props) => {
  const {
    /**
     * '' (default) | padding-bottom
     */
    mode,
  } = props

  const accordion = [
    {
      extraAttrs: {
        question: {
          'data-i18n':'home.faq.question1.question'
        },
        answer: {
          'data-i18n':'home.faq.question1.answer'
        }
      },
    },
    {
      extraAttrs: {
        question: {
          'data-i18n':'home.faq.question2.question'
        },
        answer: {
          'data-i18n':'home.faq.question2.answer'
        }
      },
    },
    {
      extraAttrs: {
        question: {
          'data-i18n':'home.faq.question3.question'
        },
        answer: {
          'data-i18n':'home.faq.question3.answer'
        }
      },
    },
    {
      extraAttrs: {
        question: {
          'data-i18n':'home.faq.question4.question'
        },
        answer: {
          'data-i18n':'home.faq.question4.answer'
        }
      },
    },
    {
      extraAttrs: {
        question: {
          'data-i18n':'home.faq.question5.question'
        },
        answer: {
          'data-i18n':'home.faq.question5.answer'
        }
      },
      open: true
    },
  ]

  return (
    <Section
      className={clsx(
        "faq",
        mode && `faq--${mode}`
      )}
      titleId="faq"
      id='faq'
      extraAttrs={{
        'data-i18n':'home.faq.title'
      }}
    >
      <div className="faq__inner">
        <div className="faq__accordion" data-js-accordion="">
          {accordion.map((elem, index) => (
            <FaqDetails {...elem} key={index}/>
          ))}
        </div>
        <Button
          label="Support"
          mode="black"
          href='mailto:discountsonservices.support@gmail'
          extraAttrs={{
            'data-i18n':'home.faq.support'
          }}
        />
      </div>
    </Section>
  )
}
