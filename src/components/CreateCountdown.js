import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'

class CreateCountdown extends Component {
  state = {
    countdownTitle: this.props.countdownTitle,
    countdownDay: this.props.countdownDay,
    countdownMonth: this.props.countdownMonth,
    countdownTime: this.props.countdownTime
  }

  onCountdownTitleChange = (e) => {
    this.setState({ countdownTitle: e.target.value })
  }

  onCountdownDayChange = (e) => {
    this.setState({ countdownDay: e.target.value })
  }

  onCountdownMonthChange = (e) => {
    this.setState({ countdownMonth: e.target.value })
  }

  onCountdownTimeChange = (e) => {
    this.setState({ countdownTime: e.target.value })
  }

  addCountdown = (e) => {
    e.preventDefault()

    this.props.addCountdown (
      this.state.countdownTitle,
      this.state.countdownDay,
      this.state.countdownMonth,
      this.state.countdownTime
    )
  }

  render() {
    return (
      <form onSubmit={ this.addCountdown } >
        <label htmlFor="countdown-title">Celebrate</label>
        <input
          id="countdown-title"
          type="text"
          value={ this.state.countdownTitle }
          onChange={ this.onCountdownTitleChange } />
        <hr/>

        <label htmlFor="countdown-day">On</label>
        <input
          id="countdown-day"
          type="text"
          value={ this.state.countdownDay }
          onChange={ this.onCountdownDayChange } />
        <input
          id="countdown-month"
          type="text"
          value={ this.state.countdownMonth }
          onChange={ this.onCountdownMonthChange } />
        <hr/>

        <label htmlFor="countdown-time">At</label>
        <input
          id="countdown-time"
          type="text"
          value={ this.state.countdownTime }
          onChange={ this.onCountdownTimeChange } />
        <hr/>

        <input type="submit" value="Start your Hurry up!" />
      </form>
    )
  }
}

CreateCountdown.propTypes = {
  addCountdown: PropTypes.func.isRequired
}

export default CreateCountdown
