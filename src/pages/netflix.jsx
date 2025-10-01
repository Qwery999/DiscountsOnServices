import PlanTabs from '@/sections/PlanTabs'
import Faq from '@/sections/Faq'

export const metadata = {
  title: 'Netflix',
}

const plan = {
  title:'Choose a Netflix Plan',
  titleId:'netflix-plan',
  subtitle:'Listen without limits at a bargain price',
}

const cards = [
  {
    label:'Basic',
    price6:'45',
    price12:'81',
    features: [
      {text:'Ad-free music listening',},
      {text:'Play anywhere - even offline',},
      {text:'On-demand playback',},
    ],
  },
  {
    label:'Standart',
    price6:'60',
    price12:'108',
    features: [
      {text:'Ad-free music listening',},
      {text:'Play anywhere - even offline',},
      {text:'On-demand playback',},
    ],
  },
  {
    label:'Premium',
    price6:'80',
    price12:'144',
    features: [
      {text:'Ad-free music listening',},
      {text:'Play anywhere - even offline',},
      {text:'On-demand playback',},
    ],
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