
export const selectSubmissionStatus = state => {
  const {id, fields, message} = state.errors

  if (id === 1)  {
    let failedFields = {}
    fields.map(field => failedFields[field] = true)
    return failedFields
  }
  if (id === 2) return {verify: true}
  if (id === 3) return {email: true, message}
  if (id === 4) return {email: true, message}
  if (id === 5) return {password: true, message}

  return {}
}

export const selectWording = (name, props) => {
  const basic = props.button.value === 'login' ? 'Incorrect' : "Provide a "
  let wording = (name === 'verify') ? "Verify Password Failed" : basic + ' ' + name
  let failed = false

  if (props.failedFields[name]) {
    failed = true
    if (props.failedFields.message) {
      wording = props.failedFields.message
    }
  }
  return {wording, failed}
}