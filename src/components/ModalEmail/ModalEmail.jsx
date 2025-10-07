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
          <h2 className="modal__title" data-i18n='modal.email.title'></h2>
          <p className="modal__subtitle" data-i18n='modal.email.subtitle'></p>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='Email verification code'
                labelHidden
                placeholder='XXXXXX'
                isRequired
                inputMode='number'
                type='number'
                extraAttrs={{
                  minLength: "6",
                  maxlength: "6",
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.email.field.label'
                  }
                }}
              />
            </div>
            <Button
              type="submit"
              label="Sing Up"
              extraAttrs={{
                'data-js-modal-open':'successful-registration',
                'data-i18n': 'modal.email.button-sign-up'
              }}
            />
            <a
              className="modal__form-link-again"
              href="/"
              data-i18n='modal.email.link'
            ></a>
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}