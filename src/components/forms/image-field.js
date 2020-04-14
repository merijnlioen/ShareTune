import React, { useState } from 'react'
import classNames from 'classnames'

const adaptFileEventToValue = (delegate, setSelectedPhoto) => e => {
  delegate(e.target.files[0])
  if (e.target.files[0]) {
    const reader = new FileReader()
    
    reader.onload = (e) => {
      setSelectedPhoto(e.target.result)
    }
    
    reader.readAsDataURL(e.target.files[0])
  }
}

const ImageField = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps
  },
  label,
  meta: { touched, error, warning },
  dataAllowedFileExtensions,
  fullWidth,
  photo,
  ...props
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState()

  return (
    <div className="form__row form__row--image">
      <label htmlFor={label} className="row__label" >{label}</label>
      <label htmlFor={label} >
        <img className={classNames({ 'banner': fullWidth }, { 'avatar': !fullWidth })} src={selectedPhoto || photo} />
      </label>
      <input
        className="hidden"
        onChange={adaptFileEventToValue(onChange, setSelectedPhoto)}
        onBlur={adaptFileEventToValue(onBlur, setSelectedPhoto)}
        accept={dataAllowedFileExtensions}
        type="file"
        id={label}
        {...inputProps}
        {...props}
      />
      {touched &&
        ((error && <span className="row__error">{error}</span>) ||
            (warning && <span>{warning}</span>))
      }
    </div>
  )
}
  

export default ImageField
