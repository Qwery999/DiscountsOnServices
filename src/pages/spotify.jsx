import PlanTabs from '@/sections/PlanTabs'
import Faq from '@/sections/Faq'

export const metadata = {
  title: 'Spotify',
}

const plan = {
  extraAttrs: {
    title: {
      'data-i18n':'spotify.title'
    },
    subtitle: {
      'data-i18n':'spotify.subtitle'
    }
  },
  titleId:'spotify-plan',
}

const cards = [
  {
    extraAttrs: {
      label: {
        'data-i18n':'spotify.card1.label'
      },
      features: [
        {text:{
            'data-i18n':'spotify.card1.features.1'
          }},
        {text:{
            'data-i18n':'spotify.card1.features.2'
          }},
        {text:{
            'data-i18n':'spotify.card1.features.3'
          }},
      ],
    },
    price6:'47',
    price12:'85',
  },
  {
    extraAttrs: {
      label: {
        'data-i18n':'spotify.card2.label'
      },
      features: [
        {text:{
            'data-i18n':'spotify.card2.features.1'
          }},
        {text:{
            'data-i18n':'spotify.card2.features.2'
          }}
      ],
    },
    price6:'57',
    price12:'103',
  },
  {
    extraAttrs: {
      label: {
        'data-i18n':'spotify.card3.label'
      },
      features: [
        {text:{
            'data-i18n':'spotify.card3.features.1'
          }},
        {text:{
            'data-i18n':'spotify.card3.features.2'
          }},
        {text:{
            'data-i18n':'spotify.card3.features.3'
          }},
      ],
    },
    price6:'77',
    price12:'134'
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