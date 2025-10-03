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
          <h2 className="modal__title">Create an account</h2>
          <p className="modal__subtitle">Already have an account? <button data-js-modal-open='login'>Sign In</button></p>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='User name'
                labelHidden
                placeholder='Enter your name'
                isRequired
                inputMode='text'
                extraAttrs={{
                  minLength: 2,
                  maxlength: 254,
                  autocomplete:"name",
                }}
              />
              <Field
                label='Email'
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
              <Field
                label='Create password'
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
              />
            </div>
            <div className="modal__form-agreement">
              <input
                className='modal__form-agreement-checkbox'
                type="checkbox"
                id="agree"
                name="agree"
              />
              <label htmlFor="agree">Protected by reCAPTCHA and subject to the Google <a href="">Privacy Policy</a> and <a href="">Terms of Service.</a></label>
            </div>
            <Button
              type="button"
              label="Sing Up"
              extraAttrs={{'data-js-modal-open':'email'}}
            />
            <div className="modal__form-other">
              <p>Or sign in with</p>
              <Button
                label="Sign in with Google"
                mode="sign-in-with"
                href
                isLabelHidden
                imgSrc="/src/assets/images/button/google.png"
              />
              <Button
                label="Sign in with Google"
                mode="sign-in-with"
                href
                isLabelHidden
                imgSrc="/src/assets/images/button/facebook.png"
              />
              <Button
                label="Sign in with Google"
                mode="sign-in-with"
                href
                isLabelHidden
                imgSrc="/src/assets/images/button/apple.png"
              />
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}