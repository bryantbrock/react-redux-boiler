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
    const anchor = {path: '/login', value: "Already have an Account? Login"}
    const button = {value: 'Sign Up', path: 'dashboard'}
    
    return (
      <div>
        <h2>Sign Up</h2>
        <Form
          onSubmit={this.onSubmit}
          fields={registerFields}
          anchor={anchor}
          button={button} /> 
      </div>
    )
  }
}

export default authEnhancer(Register)
