import React, { Fragment } from 'react'

const adaptFileEventToValue = delegate =>
    e => delegate(e.target.files[0])

const FileField = ({
    input: {
        value: omitValue,
        onChange,
        onBlur,
    },
    label,
    meta: { touched, error, warning },
    dataAllowedFileExtensions,
    ...props
}) => (
    <div className="form__row">
        <label className="row__label" htmlFor={label}>{label}</label>

        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            accept={dataAllowedFileExtensions}
            className={`row__input ${error && touched ? 'row__input--error' : ''}`}
            type="file"
            {...props}
        />
        {touched &&
            ((error && <span className="row__error">{error}</span>) ||
                (warning && <span>{warning}</span>))
        }
    </div>
)
  

export default FileField
