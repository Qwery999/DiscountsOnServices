import './DataManagement.scss'
import Icon from '@/components/Icon'
import InviteFriends from '@/components/InviteFriends'
import Field from '@/components/Field'
import Button from '@/components/Button'

export default (props) => {
  const {
  } = props

  return (
    <section
      className='data-management'
    >
      <div className="data-management__inner container">
        <div className="data-management__header">
          <h1 data-i18n='account.title'></h1>
          <a
            className='hidden-mobile'
            href="./"
            data-js-modal-open='logout'
          >
            <Icon
              name='exit'
              hasFill
            />
            <span data-i18n='account.exit'></span>
          </a>
        </div>
        <div className="data-management__body" data-js-data-management=''>
          <div className="data-management__body-tabs">
            <button
              className="data-management__body-tabs-button is-active"
              type="button"
              data-js-data-management-button=''
            >
              <Icon
                name='gear'
                hasFill
              />
              <span data-i18n='account.tabs.info'></span>
            </button>
            <button
              className="data-management__body-tabs-button"
              type="button"
              data-js-data-management-button=''
            >
              <Icon
                name='folder'
                hasFill
              />
              <span data-i18n='account.tabs.subscriptions'></span>
            </button>
          </div>
          <div className="data-management__body-account-info is-active" data-js-data-management-block=''>
            <h3 className="data-management__body-account-info-title" data-i18n='account.account-info.title'></h3>
            <form
              className="data-management__body-account-info-form"
            >
              <Field
                label='ID user'
                labelHidden
                extraAttrs={{
                  value: "123456789",
                  readonly: "",
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'account.account-info.field1.label'
                  }
                }}
              />
              <Field
                label='How can I call you?'
                labelHidden
                extraAttrsLang={{
                  label: {
                    'data-i18n':'account.account-info.field2.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:account.account-info.field2.placeholder'
                  }
                }}
              />
              <Field
                label='Your E-mail'
                labelHidden
                extraAttrsLang={{
                  label: {
                    'data-i18n':'account.account-info.field3.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:account.account-info.field3.placeholder'
                  }
                }}
              />
            </form>
            <Button
              label='Save changes'
              extraAttrs={{
                'data-i18n':'account.account-info.button'
              }}
            />
          </div>
          <div className="data-management__body-subscriptions" data-js-data-management-block=''>
            <div className="data-management__body-subscriptions-item">
              <p className="data-management__body-subscriptions-item-title" data-i18n='account.subscriptions.1.title'/>
              <div className="data-management__body-subscriptions-item-body">
                <div className="data-management__body-subscriptions-item-description">
                  <p data-i18n='account.subscriptions.1.description'></p>
                </div>
                <a
                  className="data-management__body-subscriptions-item-link"
                  href="/spotify"
                  data-i18n='account.subscriptions.link'
                ></a>
              </div>
            </div>
            <div className="data-management__body-subscriptions-item">
              <p className="data-management__body-subscriptions-item-title data-management__body-subscriptions-item-title--bg-red" data-i18n='account.subscriptions.1.title'></p>
              <div className="data-management__body-subscriptions-item-body">
                <div className="data-management__body-subscriptions-item-description">
                  <p data-i18n='account.subscriptions.1.description'></p>
                </div>
                <a
                  className="data-management__body-subscriptions-item-link"
                  href="/youtube"
                  data-i18n='account.subscriptions.link'
                ></a>
              </div>
            </div>
          </div>
        </div>
        <InviteFriends/>
      </div>


    </section>
  )
}