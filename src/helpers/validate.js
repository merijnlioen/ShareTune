export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9. ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

export const passwordConfirmation = (value, allValues) => 
  value !== allValues.password
    ? 'Passwords don\'t match' 
    : undefined
    
export const maxFileSize = value =>
  value && value.size > 10000000
    ? 'Max file size is 10MB'
    : undefined

const acceptedAudioFiles = [
  "audio/mp3",
  "audio/wav"
]

export const audioFile = value =>
  value && !acceptedAudioFiles.includes(value.type)
    ? 'File format not supported'
    : undefined

export const test = (allValues, values) =>
  console.log(values, allValues)