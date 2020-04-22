import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'

export class Input extends Component {
  onChange = e => {
    this.props.onChange(e.target.name, e.target.value)
  }
  render() {
    const {name, type, label, wording} = this.props
    let newWording = (name === 'verify') 
      ? "Verify Password Failed"
      : wording + ' ' + name

    let failed = false

    if (this.props.failedFields[name]) {
      console.log('yay')
      failed = true
      if (this.props.failedFields.message) {
        newWording = this.props.failedFields.message
      }
    }

    return (
      <TextField 
        type={type || 'text'}
        variant="outlined"
        required
        label={label}
        name={name}
        value={this.props.value}
        onChange={this.onChange}
        helperText={failed ? newWording : null}
        error={failed} />
    )
  }
}

export default Input
