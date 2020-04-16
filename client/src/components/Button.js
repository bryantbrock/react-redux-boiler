import React, {Component} from 'react'

export class Button extends Component {
  render() {
    const {color, value} = this.props

    return (
      <button
        style={base}
        onClick={this.props.onClick}
        type="submit"
        color={color}>
          <span>{value}</span>
      </button>
    )
  }
}

const base = {
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#000',
  border: '1px solid #eee',
  borderRadius: '50px',
  display: 'flex',
  padding: '1em',
  justifyContent: 'center',
  width: '100px',
}

export default Button
