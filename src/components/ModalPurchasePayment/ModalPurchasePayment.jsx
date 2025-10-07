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
        className='modal modal--payment'
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
          <h2 className="modal__title" data-i18n='modal.purchase-payment.title'></h2>
        </div>
        <div className="modal__body">
          <form className="modal__form modal__form--grid-2">
            <Button
              className='modal__form-button'
              label="Pay"
              mode="pay-with"
              imgSrc="/src/assets/images/button/google.png"
            />
            <Button
              className='modal__form-button'
              label="Pay"
              mode="pay-with"
              imgSrc="/src/assets/images/button/apple-white.png"
            />
            <div className="modal__form-fields modal__form-fields--grid-2">
              <Field
                className='modal__form--stretched'
                label='Card Number'
                type='number'
                labelHidden
                placeholder='1234 1234 1234 1234'
                isRequired
                inputMode='number'
                extraAttrs={{
                  minLength: 16,
                  maxlength: 16,
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.purchase-payment.modal1.field1.label'
                  }
                }}
              />
              <Field
                label='Expiration Date'
                type='number'
                labelHidden
                isRequired
                inputMode='number'
                extraAttrs={{
                  minLength: 5,
                  maxlength: 5,
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.purchase-payment.modal1.field2.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.purchase-payment.modal1.field2.placeholder'
                  }
                }}
              />
              <Field
                label='СVV'
                type='number'
                labelHidden
                isRequired
                extraAttrs={{
                  minLength: 3,
                  maxlength: 3,
                }}
                extraAttrsLang={{
                  label: {
                    'data-i18n':'modal.purchase-payment.modal1.field3.label'
                  },
                  input: {
                    'data-i18n-attr':'placeholder:modal.purchase-payment.modal1.field3.placeholder'
                  }
                }}
              />
            </div>
            <Button
              className='modal__form--stretched'
              label='Pay with card'
              extraAttrs={{
                'data-js-modal-open': 'subscription-paid',
                'data-i18n':'modal.purchase-payment.modal1.pay-with-card'
              }}
            />
            <p
              className='modal__form--stretched'
              data-i18n='modal.purchase-payment.modal1.warning'
            ></p>
          </form>
          <h5 data-i18n='modal.purchase-payment.subtitle'></h5>
          <form className="modal__form modal__form--grid-1">
            <label
              className="field__label"
              htmlFor="crypto-wallet"
              data-i18n='modal.purchase-payment.modal1.field4.label'
            ></label>
            <select
              className="field__control"
              id="crypto-wallet"
              name="crypto-wallet"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="xrp">XRP</option>
              <option value="tether">Tether</option>
            </select>
            <Button
            label='Pay'
            extraAttrs={{
              'data-js-modal-open': 'purchase-payment-step-two',
              'data-i18n':'modal.purchase-payment.modal1.pay'
            }}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}