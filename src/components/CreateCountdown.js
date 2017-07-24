import React, { Component } from 'react'
import '../css/App.css'

class CreateCountdown extends Component {
  state = {
    eventToCelebrate: ''
  }

  onEventToCelebrate = (e) => {
      this.setState({ eventToCelebrate: e.target.value })
  }

  render() {
    return (
      <form>
        <label htmlFor="celebrate-this">Celebrate</label>
        <input id="celebrate-this" type="text" value={ this.state.eventToCelebrate } onChange={ this.onEventToCelebrate } />
      </form>
    )
  }
}

export default CreateCountdown
