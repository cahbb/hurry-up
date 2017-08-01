import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'

class CreateCountdown extends Component {
  state = {
    title: this.props.title,
    targetTime: this.props.targetTime
  }

  handeChange = (e) => {
    const name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  startCounter = (e) => {
    e.preventDefault()

    const date = new Date()
    const now = Date.now()
    const target = this.state.targetTime.split(':')
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), target[0], target[1])
    const remainingTime = targetDate - Date.now()

    this.props.startCounter (
      this.state.title,
      this.state.targetTime,
      remainingTime,
      now
    )
  }

  render() {
    return (
      <form onSubmit={ this.startCounter } >
        <label htmlFor="countdown-title">Celebrate</label>
        <input name="title" id="countdown-title" type="text" onChange={ this.handeChange } />
        <hr/>

        <label htmlFor="countdown-targetTime">At</label>
        <input name="targetTime" id="countdown-targetTime" type="text" onChange={ this.handeChange } />
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
