import React from 'react'

const renderField = ({
    input,
    label,
    meta: { touched, error, warning },
    disabled,
    inputOnChange
}) => (
    <div className="form__row">
        <label className="row__label" htmlFor={label}>{label}</label>
        <input {...input} id={label} disabled={disabled} className={`row__input ${error && touched ? 'row__input--error' : ''}`} onChange={e => {
            input.onChange(e)
            !!inputOnChange && inputOnChange(e)
        }}/>
        {touched &&
        ((error && <span className="row__error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

export default renderField
