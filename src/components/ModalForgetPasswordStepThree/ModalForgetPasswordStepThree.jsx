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
          <p className="modal__subtitle" data-i18n='modal.forget-password.subtitle.3'></p>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='New Password'
                type='password'
                eye
                labelHidden
                placeholder='********'
                isRequired
                extraAttrs={{
                  minLength: 8,
                  autocomplete:"new-password",
                  'data-js-input-password': '',
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.forget-password.modal3.field1.label'
                  }
                }}
              />
              <Field
                label='Confirm Password'
                type='password'
                eye
                labelHidden
                placeholder='********'
                isRequired
                extraAttrs={{
                  minLength: 8,
                  autocomplete:"new-password",
                  'data-js-input-password': '',
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.forget-password.modal3.field2.label'
                  }
                }}
              />
            </div>
            <Button
              type="submit"
              label="Restore Password"
              extraAttrs={{
                'data-js-modal-close': '',
                'data-i18n':'modal.forget-password.modal3.button'
              }}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}