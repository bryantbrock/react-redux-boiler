import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

export class PrimaryButton extends Component {
  render() {
    const {color, value} = this.props

    return (
      <Button
        variant="contained"
        color={color}
        onClick={this.props.onClick} >
        {value}
      </Button>
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

export default PrimaryButton
