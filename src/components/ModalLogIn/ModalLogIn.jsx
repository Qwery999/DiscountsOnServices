import '/src/styles/modal.scss'
import Button from '@/components/Button'
import Field from '@/components/Field'
import ModalWrapper from '@/components/ModalWrapper'

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
            <h2 className="modal__title">Log in</h2>
            <p className="modal__subtitle">New user? <button data-js-modal-open='singup'>Create an account</button></p>
          </div>
          <div className="modal__body">
            <form className="modal__form">
              <div className="modal__form-fields">
                <Field
                  label='Email Address'
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
                  label='Password'
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
              <div className="modal__form-link">
                <button
                  data-js-modal-open='forget-password-step-one'
                >
                  Forgot password?
                </button>
              </div>
              <Button
                type='button'
                label='Log in'
                extraAttrs={{
                  'data-js-modal-close': '',
                }}
              />
              <div className="modal__form-other">
                <p>Or sign in with</p>
                <Button
                  type='button'
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
          <div className="modal__footer">
            <p>Protected by reCAPTCHA and subject to the Google <a href="">Privacy Policy</a> and <a href="">Terms of Service.</a></p>
          </div>
        </div>
      </ModalWrapper>
  )
}