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
          <h2 className="modal__title" data-i18n='modal.sign-up.title'></h2>
          <p className="modal__subtitle"><span data-i18n='modal.sign-up.subtitle.text'></span><button data-js-modal-open='login' data-i18n='modal.sign-up.subtitle.link'></button></p>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-1">
            <div className="modal__form-fields">
              <Field
                label='User name'
                labelHidden
                isRequired
                inputMode='text'
                extraAttrs={{
                  minLength: 2,
                  maxlength: 254,
                  autocomplete:"name",
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.sign-up.field1.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.sign-up.field1.placeholder'
                  }
                }}
              />
              <Field
                label='Email'
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
                    'data-i18n':'modal.sign-up.field2.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.sign-up.field2.placeholder'
                  }
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
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.sign-up.field3.label'
                  }
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
              <label htmlFor="agree">
                <span data-i18n='modal.sign-up.checkbox.text1'></span>
                <a href="" data-i18n='modal.sign-up.checkbox.link1'></a>
                <span data-i18n='modal.sign-up.checkbox.text2'></span>
                <a href="" data-i18n='modal.sign-up.checkbox.link2'></a>
              </label>
            </div>
            <Button
              type="button"
              label="Sing Up"
              extraAttrs={{
                'data-js-modal-open':'email',
                'data-i18n':'modal.sign-up.button-sign-up'
            }}
            />
            <div className="modal__form-other">
              <p data-i18n='modal.sign-up.or-sign-in-with'></p>
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