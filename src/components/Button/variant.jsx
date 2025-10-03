import Button from '@/components/Button/Button'

export default () => {
  return (
    <>
      <div className="button">
        <div>
          <Button label="Learn more" />
        </div>
        <div>
          <Button label="Log in" mode="blue-small" />
        </div>
        <div>
          <Button label="Support" mode="black" />
        </div>
        <div>
          <Button label="Start using" mode="start-using" />
        </div>
        <div>
          <Button label="Request" mode="request" />
        </div>
        <div>
          <Button
            label="WhatsApp"
            mode="icon"
            href
            isLabelHidden
            iconName="whatsapp"
            hasFillIcon
          />
        </div>
        <div>
          <Button
            label="Copy"
            mode="copy"
            isLabelHidden
            iconName="copy"
            hasFillIcon
          />
        </div>
        <div>
          <Button label="DISCOUNTS ON SERVICES" mode="link" href />
        </div>
        <div>
          <Button
            label="Sign in with Google"
            mode="sign-in-with"
            isLabelHidden
            imgSrc="/src/assets/images/button/google.png"
          />
        </div>
        <div>
          <Button label="My profile" mode="profile" />
        </div>
        <div>
          <Button label="Change plan" mode="change-plan" />
        </div>
        <div>
          <Button label="Cancel" mode="cancel" />
        </div>
        <div>
          <Button label="Resent code" mode="resent-code" />
        </div>
        <div>
          <Button
            label="cross"
            mode="cross"
            isLabelHidden
            iconName="cross"
            hasFillIcon
          />
        </div>
      </div>
      <div className="modal-button">
        <button
          type="button"
          data-js-modal-open='login'
        >
          Modal "LogIn"
        </button>
        <button
          type="button"
          data-js-modal-open='singup'
        >
          Modal "SingUp"
        </button>
        <button
          type="button"
          data-js-modal-open='email'
        >
          Email
        </button>
        <button
          type="button"
          data-js-modal-open='successful-registration'
        >
          Successful registration
        </button>
        <button
          type="button"
          data-js-modal-open='forget-password-step-one'
        >
          Forget Password step1
        </button>
        <button
          type="button"
          data-js-modal-open='forget-password-step-two'
        >
          Forget Password step2
        </button>
        <button
          type="button"
          data-js-modal-open='forget-password-step-three'
        >
          Forget Password step3
        </button>
        <button
          type="button"
          data-js-modal-open='logout'
        >
          Logout
        </button>
      </div>
    </>
  )
}
