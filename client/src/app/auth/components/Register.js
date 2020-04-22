import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from 'app/auth/actions'
import {Form} from 'components/form'
import {registerFields} from 'app/auth/constants'
import {clearErrors} from 'app/errors/actions'
import {redirectOnSuccess} from 'app/auth/selectors'

const authEnhancer = connect(
  state => ({
    redirect: redirectOnSuccess(state),
  }),
  {
    register,
    clearErrors,
  }
)

export class Register extends Component {
  onSubmit = async (data, path) => {
    const {register, clearErrors, history} = this.props
    await register(data)

    if (this.props.redirect) {
      history.push(`/${path}`)
      clearErrors()
    }
  }
  render() {
    
    return (
      <div>
        <h2>Sign Up</h2>
        <Form
          onSubmit={this.onSubmit}
          throwErr={this.props.throwErr}
          fields={registerFields}
          button={{
            value: 'Sign Up',
            color: 'primary',
            path: 'dashboard',
          }} /> 
      </div>
    )
  }
}

export default authEnhancer(Register)
