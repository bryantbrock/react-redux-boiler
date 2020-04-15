import React, {Component} from 'react'
import {baseUrl} from 'app/constants'

export class Button extends Component {
  render() {
    const {color, value, path} = this.props

    return (
      <a
        style={base}
        href={`/${path}`}
        color={color}>
          <span>{value}</span>
      </a>
    )
  }
}

const base = {
  textDecoration: 'none',
  color: '#000',
  border: '1px solid #eee',
  borderRadius: '3px',
  display: 'flex',
  padding: '.5em',
  justifyContent: 'center',
  maxWidth: '100px',
}

export default Button
