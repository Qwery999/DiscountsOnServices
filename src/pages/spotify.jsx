import PlanTabs from '@/sections/PlanTabs'
import Faq from '@/sections/Faq'

export const metadata = {
  title: 'Spotify',
}

const plan = {
  title:'Choose a Spotify Plan',
  titleId:'spotify-plan',
  subtitle:'Select the subscription type for a period of:',
}

const cards = [
  {
    label:'Individual',
    price6:'47',
    price12:'85',
    features: [
      {text:'Ad-free music listening',},
      {text:'Play anywhere - even offline',},
      {text:'On-demand playback',},
    ],
  },
  {
    label:'Duo',
    price6:'57',
    price12:'103',
    features: [
      {text:'2 Premium accounts for a couple under one roof',},
      {text:'Ad-free music listening, play offline, on-demand playback',},
    ],
  },
  {
    label:'Family',
    price6:'77',
    price12:'134',
    features: [
      {text:'6 Premium accounts for family members living under one roof',},
      {text:'Block explicit music',},
      {text:'Ad-free music listening, play offline, on-demand playback',},
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