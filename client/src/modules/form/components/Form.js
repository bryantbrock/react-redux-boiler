import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Input, Anchor} from 'components'
import {toObj} from 'utils/misc'
import PropType from 'prop-types'
import {selectSubmissionStatus, selectWording} from 'modules/form/selectors'

const formEnhancer = connect(
  state => ({
    failedFields: selectSubmissionStatus(state),
    getIfFailed: (name, fields) => selectWording(name, fields)
  }),
)

export class Form extends Component {
  state = toObj(this.props.fields, 'name')
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = e => {
    const {button} = this.props

    e.preventDefault()
    this.props.onSubmit(this.state, button.path)
  }
  render() {
    const {button, fields, anchor} = this.props
    const res = name => this.props.getIfFailed(name, this.props)
    const failed = name => res(name).failed
    const wording = name => res(name).wording

    return (
      <form onSubmit={this.onSubmit}>
        {fields.map(({label, name, ...values}) => (
          <React.Fragment key={name}>
            <Input 
              label={label}
              type={values.type}
              name={name}
              value={this.state[name]}
              onChange={this.onChange}
              failed={failed(name)} />
              {failed(name) && 
                <span>{wording(name)}</span>}
          </React.Fragment>
        ))}
        {anchor && 
          <Anchor 
            path={anchor.path}
            value={anchor.value} />
        }
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
  // Parent
  fields: PropType.array,
  onSubmit: PropType.func.isRequired,
  button: PropType.object,
  // Store
  failedFields: PropType.object,
  getIfFailed: PropType.func,
}

export default formEnhancer(Form)