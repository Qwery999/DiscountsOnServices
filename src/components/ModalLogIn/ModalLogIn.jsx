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
            <h2 className="modal__title" data-i18n='modal.login.title'></h2>
            <p className="modal__subtitle"><span data-i18n='modal.login.subtitle.text'></span><button data-js-modal-open='singup' data-i18n='modal.login.subtitle.link'></button></p>
          </div>
          <div className="modal__body">
            <form className="modal__form">
              <div className="modal__form-fields">
                <Field
                  label='Email Address'
                  labelHidden
                  isRequired
                  inputMode='email'
                  extraAttrs={{
                    minLength: 6,
                    maxlength: 254,
                    autocomplete:"email",
                  }}
                  extraAttrsLang={{
                    label: {
                      'data-i18n':'modal.login.field1.label'
                    },
                    input: {
                      'data-i18n-attr':'placeholder:modal.login.field1.placeholder'
                    }
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
                  extraAttrsLang={{
                    label: {
                      'data-i18n':'modal.login.field2.label'
                    }
                  }}
                />
              </div>
              <div className="modal__form-link">
                <button
                  data-js-modal-open='forget-password-step-one'
                  data-i18n='modal.login.forgot-password'
                ></button>
              </div>
              <Button
                type='button'
                label='Log in'
                extraAttrs={{
                  'data-js-account-login':'',
                  'data-i18n':'modal.login.button-login'
                }}
              />
              <div className="modal__form-other">
                <p data-i18n='modal.login.or-sign-in-with'></p>
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
            <p>
              <span data-i18n='modal.login.footer.text1'></span>
              <a href="" data-i18n='modal.login.footer.link1'></a>
              <span data-i18n='modal.login.footer.text2'></span>
              <a href="" data-i18n='modal.login.footer.link2'></a>
            </p>
          </div>
        </div>
      </ModalWrapper>
  )
}