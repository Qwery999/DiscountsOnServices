import PlanTabs from '@/sections/PlanTabs'
import Faq from '@/sections/Faq'

export const metadata = {
  title: 'Netflix',
}

const plan = {
  extraAttrs: {
    title: {
      'data-i18n':'netflix.title'
    },
    subtitle: {
      'data-i18n':'netflix.subtitle'
    }
  },
  titleId:'netflix-plan',
}

const cards = [
  {
    extraAttrs: {
      label: {
        'data-i18n':'netflix.card1.label'
      },
      features: [
        {text:{
            'data-i18n':'netflix.card1.features.1'
          }},
        {text:{
            'data-i18n':'netflix.card1.features.2'
          }},
        {text:{
            'data-i18n':'netflix.card1.features.3'
          }},
      ],
    },
    price6:'45',
    price12:'81',
  },
  {
    extraAttrs: {
      label: {
        'data-i18n':'netflix.card2.label'
      },
      features: [
        {text:{
            'data-i18n':'netflix.card2.features.1'
          }},
        {text:{
            'data-i18n':'netflix.card2.features.2'
          }},
        {text:{
            'data-i18n':'netflix.card2.features.3'
          }},
      ],
    },
    price6:'60',
    price12:'108',
  },
  {
    extraAttrs: {
      label: {
        'data-i18n':'netflix.card3.label'
      },
      features: [
        {text:{
            'data-i18n':'netflix.card3.features.1'
          }},
        {text:{
            'data-i18n':'netflix.card3.features.2'
          }},
        {text:{
            'data-i18n':'netflix.card3.features.3'
          }},
      ],
    },
    price6:'80',
    price12:'144',
  },
]

export default () => {
  return (
    <>
      <PlanTabs
        {...plan}
        cards = {cards}
        mode = 'grid-3'
      />
      <Faq
        mode='padding-bottom'
      />
    </>
  )
}