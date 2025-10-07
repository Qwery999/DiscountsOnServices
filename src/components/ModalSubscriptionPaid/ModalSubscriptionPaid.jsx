import '/src/styles/modal.scss'
import ModalWrapper from '@/components/ModalWrapper'
import Button from '@/components/Button'
import {Image} from 'minista'

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
        </div>
        <div className="modal__body modal__body-paid">
          <Image
            className='modal__body-paid-image'
            src='/src/assets/images/how-it-works/how-it-works3.png' width={145}
          />
          <h3 data-i18n='modal.subscription-paid.title'></h3>
          <Button
            label='Continue work'
            extraAttrs={{
              'data-js-modal-close': '',
              'data-i18n':'modal.subscription-paid.button'
            }}
          />
        </div>
      </div>
    </ModalWrapper>
  )
}