import '/src/styles/modal.scss'
import ModalWrapper from '@/components/ModalWrapper'
import Button from '@/components/Button'

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
        <div className="modal__body modal__body-crypto">
          <h5 data-i18n='modal.purchase-payment.subtitle'></h5>
          <div className="modal__body-crypto-info">
            <div className="modal__body-crypto-info-sum">
              <span data-i18n='modal.purchase-payment.modal3.sum'></span>
              <span><b>0.00158039 BTC</b></span>
            </div>
            <div className="modal__body-crypto-info-blockchain">
              <span data-i18n='modal.purchase-payment.modal3.blockchain'></span>
              <span><b>BTC network</b></span>
            </div>
          </div>
          <div className="modal__body-crypto-link">
            <b data-i18n='modal.purchase-payment.modal3.link'></b>
            <a href="">3PGgmpAxfzDSyPAGPqdL2oe5yS78UytENU</a>
          </div>
          <Button
          label='OK'
          extraAttrs={{
            'data-js-modal-open': 'subscription-paid',
            'data-i18n':'modal.purchase-payment.modal1.pay'
          }}
          />
        </div>
      </div>
    </ModalWrapper>
  )
}