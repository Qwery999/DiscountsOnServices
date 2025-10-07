import './Help.scss'
import Section from '@/layouts/Section'
import FaqDetails from '@/components/FaqDetails/FaqDetails'
import Button from '@/components/Button'

export default () => {
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
  ]

  return (
    <Section
      className='help'
      titleId='help'
      extraAttrs={{
        'data-i18n':'help.title'
      }}
    >
      <div className="help__inner">
        <div className="help__accordion" data-js-accordion="">
          {accordion.map((elem, index) => (
            <FaqDetails {...elem} key={index}/>
          ))}
        </div>
        <Button
          label="Support"
          mode="black"
          href='mailto:discountsonservices.support@gmail'
          extraAttrs={{
            'data-i18n':'help.support'
          }}
        />
      </div>
    </Section>
  )
}