import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitAuthForm} from 'app/auth/state'
import {Form} from 'modules/form'
import {registerFields} from 'app/auth/constants'
import {clearErrors} from 'app/errors/state'
import {redirectOnSuccess} from 'app/auth/selectors'

const authEnhancer = connect(
  state => ({
    redirect: redirectOnSuccess(state),
  }),
  {
    submitAuthForm,
    clearErrors,
  }
)

export class Register extends Component {
  onSubmit = async (data, path) => {
    const {submitAuthForm, clearErrors, history} = this.props

    await submitAuthForm(data, 'auth/sign-up')

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
