import './Subscriptions.scss'
import Section from '@/layouts/Section'
import SubscriptionCard from '@/components/SubscriptionCard'

export default () => {
  const subscriptions = [
    {
      extraAttrs: {
        label: {
          'data-i18n': 'home.subscriptions.card-label.netflix'
        },
        description: {
          'data-i18n': 'home.subscriptions.card-description.netflix'
        }
      },
      href: '/netflix',
      imgSrc: '/src/assets/images/subscriptions/subscriptions1.jpg',
    },
    {
      extraAttrs: {
        label: {
          'data-i18n': 'home.subscriptions.card-label.spotify'
        },
        description: {
          'data-i18n': 'home.subscriptions.card-description.spotify'
        }
      },
      href: '/spotify',
      imgSrc: '/src/assets/images/subscriptions/subscriptions2.jpg',
    },
    {
      extraAttrs: {
        label: {
          'data-i18n': 'home.subscriptions.card-label.youtube'
        },
        description: {
          'data-i18n': 'home.subscriptions.card-description.youtube'
        }
      },
      href: '/youtube',
      imgSrc: '/src/assets/images/subscriptions/subscriptions3.jpg',
    },
  ]

  return (
    <Section
      className="subscriptions"
      titleId="subscriptions"
      id='subscriptions'
      extraAttrs={{
        'data-i18n': 'home.subscriptions.title'
      }}
    >
      <div className="subscriptions__inner">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard {...subscription} key={index} />
        ))}
      </div>
    </Section>
  )
}
