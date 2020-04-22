import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        Inflation Monitor Dashboard<br></br><br></br>
        This will show current Reported Inflation,<br></br>
        Masked inflation (based on falling prices due to <br></br>
        corperate productivity, exporting labor, and <br></br>
        other ways to lower prices), and asset inflation <br></br>
        (if I can get ahold of any data on that). Finally that will<br></br>
        give you an accurate picture of inflation and possible bubbles.
      </div>
    )
  }
}

export default Dashboard
