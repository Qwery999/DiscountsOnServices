import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'
import Button from '@/components/Button/Button'

export default (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    /**
     * undefined (default) | 'email' | 'password'
     */
    type,
    placeholder,
    isRequired,
    inputMode,
    extraAttrs,
    extraAttrsLang = {},
    eye
  } = props

  const eyeComponent = eye && (
    <div className='field__button-wrapper'>
      <Button
        className='field__button'
        label="eye"
        mode="icon"
        isLabelHidden
        iconName="eye"
        hasFillIcon
        extraAttrs={{
          'data-js-field-button': '',
          'data-variant': 'open'
        }}

      />
      <Button
        className='field__button field__button-closed is-active'
        label="eye"
        mode="icon"
        isLabelHidden
        iconName="eye-closed"
        hasFillIcon
        extraAttrs={{
          'data-js-field-button': '',
          'data-variant': 'closed'
        }}
      />
    </div>

  )

  return (
    <div
      className={clsx('field', className)}
      data-js-field=''
    >
      <label className="field__label" htmlFor={id}>
        <span {...extraAttrsLang.label}></span>
        {isRequired && (
          <span className="field__required-star" aria-hidden="true">
            &nbsp;*
          </span>
        )}
      </label>
      <input
        className="field__control"
        id={id}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        {...extraAttrs}
        {...(extraAttrsLang.input)}
      />
      {eyeComponent}
    </div>
  )
}
