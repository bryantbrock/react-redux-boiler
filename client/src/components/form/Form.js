import React, {Component} from 'react'
import {Button} from 'components'
import {TextInput} from 'components/inputs'
import {toObj} from 'utils/misc'
import PropType from 'prop-types'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = toObj(this.props.fields, 'name')
  }
  onChange = (name, value) => this.setState({[name]: value})
  onSubmit = e => {
    e.preventDefault()
    // Verify password if need be
    if (this.state.verify) {
      if (!(this.state.password === this.state.verify)) {
        this.props.throwErr('Passwords do not match')
        return 
      }
    }
    this.props.onSubmit(this.state)

  }
  render() {
    const {button, fields} = this.props

    return (
      <form onSubmit={this.onSubmit}>
        {fields.map(({label, name, ...values}) => (
          <React.Fragment key={name}>
            <label>{label}</label>
            <TextInput 
              type={values.type}
              name={name}
              value={this.state[name]}
              onChange={this.onChange} />
          </React.Fragment>
        ))}
        <Button
          value={button.value}
          onClick={this.onSubmit}
          color={button.color || 'primary'}/>
      </form>
    )
  }
}

Form.propTypes = {
  fields: PropType.array,
  onSubmit: PropType.func.isRequired,
  button: PropType.object, 
}

export default Form