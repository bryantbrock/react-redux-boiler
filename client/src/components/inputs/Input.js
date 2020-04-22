import React, {Component} from 'react'
import 'resources/css/main.css'

export class Input extends Component {
  render() {
    const {name, type, label, failed, onChange} = this.props
    const className = failed ? 'input-fail' : 'input'

    return (
      <input
        type={type || 'text'}
        required
        label={label}
        name={name}
        value={this.props.value}
        onChange={e => onChange(e)}
        className={className} />
    )
  }
}

export default Input
