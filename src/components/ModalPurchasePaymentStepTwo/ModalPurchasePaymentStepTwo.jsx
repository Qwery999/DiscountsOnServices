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
          <h5 data-i18n='modal.purchase-payment.subtitle'></h5>
          <form className="modal__form modal__form--grid-1">
            <label
              className="field__label"
              htmlFor="crypto-wallet-blockchain"
              data-i18n='modal.purchase-payment.modal2.field.label'
            ></label>
            <select
              className="field__control"
              id="crypto-wallet-blockchain"
              name="crypto-wallet"
            >
              <optgroup label="EVM Compatible">
                <option value="ethereum">Ethereum</option>
                <option value="bsc">BNB Smart Chain</option>
                <option value="polygon">Polygon</option>
                <option value="arbitrum">Arbitrum</option>
              </optgroup>
              <optgroup label="Non-EVM">
                <option value="solana">Solana</option>
                <option value="tron">Tron</option>
                <option value="near">NEAR</option>
              </optgroup>
            </select>
            <Button
            label='Pay'
            extraAttrs={{
              'data-js-modal-open': 'purchase-payment-step-three',
              'data-i18n':'modal.purchase-payment.modal1.pay'
            }}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}