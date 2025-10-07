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
          <h3 className="modal__title" data-i18n='modal.logout.title'></h3>
        </div>
        <div className="modal__body modal__body--button-wrapper">
          <Button
            label="Cancel"
            mode="cancel"
            extraAttrs={{
              'data-js-modal-close': '',
              'data-i18n':'modal.logout.button-cancel'
            }}
          />
          <Button
            label="Yes, Logout"
            href='/'
            extraAttrs={{
              'data-i18n':'modal.logout.button-yes'
            }}
          />
        </div>
      </div>
    </ModalWrapper>
  )
}