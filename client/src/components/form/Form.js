import React, {Component} from 'react'
import {TextInput, Button} from 'components'
import PropType from 'prop-types'

const toObj = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: '',
    }
  }, initialValue)
}

const resetState = state => {
  const newState = {}
  for (let [key, value] of Object.entries(state)) {
    newState[key] = ''
  }
  return newState
}

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = toObj(this.props.fields, 'name')
  }
  onChange = (name, value) => {
    this.setState({[name]: value})
  }
  onSubmit = e => {
    const {password} = this.state
    e.preventDefault()

    // Verify password
    if (this.state.verify) {
      if (!(password === this.state.verify)) {
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