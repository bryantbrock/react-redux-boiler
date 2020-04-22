import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'components'
import {TextInput} from 'components/inputs'
import {toObj} from 'utils/misc'
import PropType from 'prop-types'
import {selectSubmissionStatus} from 'modules/form/selectors'

const formEnhancer = connect(
  state => ({
    failedFields: selectSubmissionStatus(state),
  }),
)

export class Form extends Component {
  state = toObj(this.props.fields, 'name')
  onChange = (name, value) => this.setState({[name]: value})
  onSubmit = e => {
    const {button} = this.props

    e.preventDefault()
    this.props.onSubmit(this.state, button.path)
  }
  render() {
    const {button, fields} = this.props
    const wording = button.value === 'login' ? 'Incorrect' : "Provide a "

    return (
      <form onSubmit={this.onSubmit}>
        {fields.map(({label, name, ...values}) => (
          <React.Fragment key={name}>
            <TextInput 
              label={label}
              type={values.type}
              name={name}
              value={this.state[name]}
              onChange={this.onChange}
              failedFields={this.props.failedFields}
              wording={wording} />
          </React.Fragment>
        ))}
        <Button
          value={button.value}
          path={button.path}
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

export default formEnhancer(Form)