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
          <h2 className="modal__title" data-i18n='modal.forget-password.title'></h2>
          <p className="modal__subtitle" data-i18n='modal.forget-password.subtitle.2'></p>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='Verification code'
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
                    'data-i18n':'modal.forget-password.modal2.field.label'
                  }
                }}
              />
            </div>
            <Button
              type="submit"
              label="Restore Password"
              extraAttrs={{
                'data-js-modal-open': 'forget-password-step-three',
                'data-i18n':'modal.forget-password.modal2.button'
              }}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}