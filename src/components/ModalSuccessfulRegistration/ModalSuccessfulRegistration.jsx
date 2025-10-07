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
          <h2 className="modal__title" data-i18n='modal.successful-registration.title'></h2>
          <p className="modal__subtitle" data-i18n='modal.successful-registration.subtitle'></p>
        </div>
        <div className="modal__body modal__body--button-wrapper">
            <Button
              label="Continue work"
              extraAttrs={{
                'data-js-modal-close': '',
                'data-i18n':'modal.successful-registration.button-continue'
              }}
            />
        </div>
      </div>
    </ModalWrapper>
  )
}