import React, { Fragment } from 'react'

const renderField = ({
    input,
    label,
    meta: { touched, error, warning }
}) => (
    <div className="form__row">
        <label className="row__label" htmlFor={label}>{label}</label>
        <input {...input} id={label} placeholder={`Enter ${label}`} className={`row__input ${error && touched ? 'row__input--error' : ''}`} />
        {touched &&
        ((error && <span className="row__error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

export default renderField
