import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'

class CreateCountdown extends Component {
  state = {
    title: '',
    targetTimeHours: '',
    targetTimeMinutes: ''
  }

  handeChange = (e) => {
    const name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  startCounter = (e) => {
    e.preventDefault()

    const date = new Date()
    const now = Date.now()
    const fullYear = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDate()
    const targetHours = this.state.targetTimeHours
    const targetMinutes = this.state.targetTimeMinutes
    const targetDate = new Date(fullYear, m, d, targetHours, targetMinutes)
    const remainingTime = targetDate - Date.now()

    this.props.startCounter (
      this.state.title,  //title
      remainingTime,     //remainingTime
      now                //previousTime
    )
  }

  render() {
    return (
      <form onSubmit={ this.startCounter } >
        <label htmlFor="countdown-title">Celebrate</label>
        <input name="title" id="countdown-title" type="text" onChange={ this.handeChange } />
        <hr/>

        <label htmlFor="countdown-targetTime">At</label>
        <input name="targetTimeHours" id="countdown-targetTime" type="number" min={0} max={23} onChange={ this.handeChange } />:
        <input name="targetTimeMinutes" id="countdown-targetTime" type="number" min={0} max={59} onChange={ this.handeChange } />
        <hr/>

        <input type="submit" value="Start your Hurry up!" />
      </form>
    )
  }
}

CreateCountdown.propTypes = {
  startCounter: PropTypes.func.isRequired
}

export default CreateCountdown
