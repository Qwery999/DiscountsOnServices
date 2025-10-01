import PlanTabs from '@/sections/PlanTabs'
import Faq from '@/sections/Faq'

export const metadata = {
  title: 'YouTube',
}

const plan = {
  title:'YouTube Premium',
  titleId:'youtube-plan',
  subtitle:'Select the subscription type for a period of:',
}

const cards = [
  {
    label:'Music',
    price6:'60',
    price12:'108',
    features: [
      {text:'Listen to music without ads, in the background and offline',},
    ],
  },
  {
    label:'Premium',
    price6:'80',
    price12:'144',
    features: [
      {text:'YouTube and YouTube Music without ads, in the background and offline',}
    ],
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