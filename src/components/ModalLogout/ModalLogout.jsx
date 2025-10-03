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
          <h2 className="modal__title">Are you sure want to logout?</h2>
        </div>
        <div className="modal__body modal__body--button-wrapper">
          <Button label="Cancel" mode="cancel" />
          <Button
            label="Yes, Logout"
          />
        </div>
      </div>
    </ModalWrapper>
  )
}