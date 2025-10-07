import PlanTabs from '@/sections/PlanTabs'
import Faq from '@/sections/Faq'

export const metadata = {
  title: 'YouTube',
}

const plan = {
  extraAttrs: {
    title: {
      'data-i18n':'youtube.title'
    },
    subtitle: {
      'data-i18n':'youtube.subtitle'
    }
  },
  titleId:'youtube-plan',
}

const cards = [
  {
    extraAttrs: {
      label: {
        'data-i18n':'youtube.card1.label'
      },
      features: [
        {text:{
            'data-i18n':'youtube.card1.features.1'
          }}
      ],
    },
    price6:'60',
    price12:'108'
  },
  {
    extraAttrs: {
      label: {
        'data-i18n':'youtube.card2.label'
      },
      features: [
        {text:{
            'data-i18n':'youtube.card2.features.1'
          }}
      ],
    },
    price6:'80',
    price12:'144'
  },
]

export default () => {
  return (
    <>
      <PlanTabs
        {...plan}
        cards = {cards}
        mode = 'grid-2'
      />
      <Faq
        mode='padding-bottom'
      />
    </>
  )
}