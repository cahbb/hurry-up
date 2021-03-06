import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/Form.css'

class CreateCountdown extends Component {
  state = {
    title: '',
    targetTimeHours: '',
    targetTimeMinutes: ''
  }

  componentDidMount() {
    this.input.focus()
  }

  focus() {
    this.input.focus();
  }

  handeChange = (e) => {
    const name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  startCounter = (e) => {
    e.preventDefault()

    const date = new Date()
    const now = Date.now()
    const targetHours = this.state.targetTimeHours
    const targetMinutes = this.state.targetTimeMinutes
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), targetHours, targetMinutes)
    const remainingTime = targetDate - Date.now()

    /*
     * PARAMS ->
     * title
     * remainingTime
     * previousTime
     */
    this.props.startCounter (
      this.state.title,
      remainingTime,
      now
    )
  }

  render() {
    return (
      <div className="create-countdown">
        <form onSubmit={ this.startCounter } >
          <div className="input-group">
            <input
              className="input-title"
              ref={(input) => { this.input = input }}
              name="title"
              type="text"
              placeholder="It's beertime"
              onChange={ this.handeChange } />
          </div>

          <div className="input-group">
            <input
              className="input-time"
              name="targetTimeHours"
              type="number"
              placeholder="21"
              min={0}
              max={23}
              onChange={ this.handeChange } />
            <span className="colon">:</span>
            <input
              className="input-time"
              name="targetTimeMinutes"
              type="number"
              placeholder="43"
              min={0}
              max={59}
              onChange={ this.handeChange } />
            <input type="submit" className="btn" value="Hurry up!" />
          </div>
        </form>
      </div>
    )
  }
}

CreateCountdown.propTypes = {
  startCounter: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
}

export default CreateCountdown
