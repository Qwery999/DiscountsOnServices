import './Subscriptions.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import SubscriptionCard from '@/components/SubscriptionCard'

export default () => {
  const subscriptions = [
    {
      label: 'Netflix subscription rates',
      description:
        'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
      href: '/netflix',
      imgSrc: '/src/assets/images/subscriptions/subscriptions1.jpg',
    },
    {
      label: 'Spotify Premium',
      description:
        'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
      href: '/spotify',
      imgSrc: '/src/assets/images/subscriptions/subscriptions2.jpg',
    },
    {
      label: 'YouTube Premium ',
      description:
        'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
      href: '/youtube',
      imgSrc: '/src/assets/images/subscriptions/subscriptions3.jpg',
    },
  ]

  return (
    <Section
      className="subscriptions"
      title="Choose a subscription"
      titleId="subscriptions"
      id='subscriptions'
    >
      <div className="subscriptions__inner">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard {...subscription} key={index} />
        ))}
      </div>
    </Section>
  )
}
