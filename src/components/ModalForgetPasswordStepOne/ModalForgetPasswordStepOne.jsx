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
          <h2 className="modal__title">Forget Password</h2>
          <p className="modal__subtitle">We will send reset code in this email.</p>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='Your Email Address'
                labelHidden
                placeholder='Enter your e-mail'
                isRequired
                inputMode='email'
                extraAttrs={{
                  minLength: 6,
                  maxlength: 254,
                  autocomplete:"email",
                }}
              />
            </div>
            <Button
              type="submit"
              label="Submit"
              extraAttrs={{'data-js-modal-open': 'forget-password-step-two'}}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}