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
          <h2 className="modal__title">Successful registration</h2>
          <p className="modal__subtitle">By optimizing our work and using internal tools, we were able to lower the prices while keeping the highest possible.</p>
        </div>
        <div className="modal__body modal__body--button-wrapper">
            <Button
              label="Continue work"
              extraAttrs={{
                'data-js-modal-close': '',
              }}
            />
        </div>
      </div>
    </ModalWrapper>
  )
}