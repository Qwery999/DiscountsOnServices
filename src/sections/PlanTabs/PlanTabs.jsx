import './PlanTabs.scss'
import PlanCard from '@/components/PlanCard/PlanCard'
import InviteFriends from '@/components/InviteFriends'
import clsx from 'clsx'

export default (props) => {
  const {
    extraAttrs,
    titleId,
    cards =[],
    mode
  } = props


  return (
    <section
      className='plan-tabs'
      aria-labelledby={titleId}
    >
      <div className="plan-tabs__inner container">
        <header className="plan-tabs__header">
          <h1 className="plan-tabs__title" id={titleId} {...extraAttrs.title}></h1>
          <p className="plan-tabs__subtitle paragraph-blog" {...extraAttrs.subtitle}></p>
        </header>
        <div className="plan-tabs__body" data-js-tabs=''>
          <div className="plan-tabs__body-period">
            <button
              className='plan-tabs__button is-active'
              type="button"
              data-js-tabs-button=''
            >
              <span className='paragraph-blog' data-i18n='period.6'></span>
            </button>
            <button
              className='plan-tabs__button'
              type="button"
              data-js-tabs-button=''
            >
              <span className='paragraph-blog' data-i18n='period.12'></span>
            </button>
          </div>
          <div className={clsx(
            "plan-tabs__body-cards",
            mode && `plan-tabs__body-cards--${mode}`
            )}>
            {cards.map((card, index) => (
              <PlanCard
                {...card}
                key={index}
              />
            ))}
            <InviteFriends
              className='plan-tabs__body-extra'
            />
          </div>
        </div>
      </div>
    </section>
  )
}