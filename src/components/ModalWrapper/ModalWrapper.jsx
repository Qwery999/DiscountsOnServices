import './ModalWrapper.scss'

export default (props) => {
  const {
    children,
    extraAttrs,
  } = props

  return (
    <div
      className='modal-wrapper'
      {...extraAttrs}
    >
      {children}
    </div>
  )
}