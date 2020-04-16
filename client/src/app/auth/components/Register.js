import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from 'app/auth/actions'
import {Form} from 'components/form'
import {registerFields} from 'app/auth/constants'
import {throwErr, clearErrors} from 'app/errors/actions'

export class Register extends Component {
  onSubmit = async data => {
    await this.props.register(data)

    // Redirect if registry success
    if (this.props.status === 200 && this.props.redirect) {
      this.props.history.push('/dashboard')
      this.props.clearErrors()
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

const selector = state => ({
  status: state.errors.status,
  redirect: state.errors.redirect,
})

export default connect(selector, {register, throwErr, clearErrors})(Register)
