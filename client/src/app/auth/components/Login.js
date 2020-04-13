import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from 'app/auth/actions'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state

    const user = {
      email,
      password,
    }
    // Still need to validate submission 
    // before sending it to the server
    this.props.login(user)
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            name="email"/>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.onChange}
            name="password"/>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {login})(Login)
