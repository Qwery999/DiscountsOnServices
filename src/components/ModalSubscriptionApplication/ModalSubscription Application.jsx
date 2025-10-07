import '/src/styles/modal.scss'
import ModalWrapper from '@/components/ModalWrapper'
import Button from '@/components/Button'
import Field from '@/components/Field'

export default (props) => {
  const {
    extraAttrs,
  } = props

  return (
    <ModalWrapper
      extraAttrs={extraAttrs}
    >
      <div
        className='modal'
        data-js-modal-inner=''
      >
        <div className="modal__header">
          <Button
            className='modal__cross'
            label="cross"
            mode="cross"
            isLabelHidden
            iconName="cross"
            hasFillIcon
            extraAttrs={{
              'data-js-modal-close': '',
            }}
          />
          <h2 className="modal__title" data-i18n='modal.subscription-application.title'></h2>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='Enter your name'
                labelHidden
                placeholder='Anastasiia'
                isRequired
                inputMode='text'
                extraAttrs={{
                  minLength: 2,
                  maxlength: 254,
                  autocomplete:"name",
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.subscription-application.field1.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.subscription-application.field1.placeholder'
                  }
                }}
              />
              <Field
                label='E-mail'
                labelHidden
                placeholder='Enter your e-mail'
                isRequired
                inputMode='email'
                extraAttrs={{
                  minLength: 6,
                  maxlength: 254,
                  autocomplete:"email",
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.subscription-application.field2.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.subscription-application.field2.placeholder'
                  }
                }}
              />
              <Field
                label='Phone'
                type='number'
                labelHidden
                placeholder='Enter your phone'
                isRequired
                extraAttrs={{
                  minLength: 8,
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.subscription-application.field3.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.subscription-application.field3.placeholder'
                  }
                }}
              />
            </div>
            <Button
              type="button"
              label="Apply"
              extraAttrs={{
                'data-js-modal-open':'purchase-payment',
                'data-i18n':'modal.subscription-application.button'
            }}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}