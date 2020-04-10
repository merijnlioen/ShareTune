import React, { useState } from 'react'

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

const FileInput = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps
  },
  label,
  meta: { touched, error, warning },
  dataAllowedFileExtensions,
  firebase,
  ...props
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState()

  return (
    <div className="form__row form__row--image">
      <label htmlFor={label} className="row__label" >Profile picture</label>
      <label htmlFor={label} >
        <img className="avatar" src={selectedPhoto || firebase.auth.currentUser.photoURL} />
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
  

export default FileInput
