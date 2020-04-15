import React, {Component} from 'react'

export class TextInput extends Component {
  onChange = e => {
    this.props.onChange(e.target.name, e.target.value)
  }
  render() {
    const {name, type} = this.props

    return (
      <input 
        type={type || 'text'}
        name={name}
        value={this.props.value}
        onChange={this.onChange} />
    )
  }
}

export default TextInput
