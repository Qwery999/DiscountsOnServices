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
          <h2 className="modal__title">Email verification</h2>
          <p className="modal__subtitle">Please enter the 6-digit verification code that was sent to name@gmail,com. The code is valid for 30 minutes.</p>
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
              />
            </div>
            <Button
              type="submit"
              label="Sing Up"
              extraAttrs={{
                'data-js-modal-open':'successful-registration'
              }}
            />
            <a
              className="modal__form-link-again"
              href="/"
            >
              Didn’t receive the code?
            </a>
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}