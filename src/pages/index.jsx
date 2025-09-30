import Hero from '@/sections/Hero'
import Subscriptions from '@/sections/Subscriptions'
import HowItWorks from '@/sections/HowItWorks'
import About from '@/sections/About'
import Faq from '@/sections/Faq'
import Request from '@/sections/Request'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Subscriptions />
      <HowItWorks />
      <About />
      <Faq />
      <Request />
    </>
  )
}
