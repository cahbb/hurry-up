import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChooseTheme from '../components/ChooseTheme'
import '../assets/styles/components/Form.css'

class CreateCountdown extends Component {
  state = {
    title: '',
    targetTimeHours: '',
    targetTimeMinutes: ''
  }

  // componentDidMount() {
  //   this.input.focus()
  // }

  focus() {
    // Explicitly focus the text input using the raw DOM API
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

    this.props.startCounter (
      this.state.title, //title
      remainingTime,    //remainingTime
      now               //previousTime
    )
  }

  render() {
    if (!this.props.isCounting && !this.props.hasBeenCounting) {
      return (
        <div className="create-countdown">
          <form onSubmit={ this.startCounter } >
            <div className="input-group">
              <label>It's</label>
              <input
                className="input-title"
                ref={(input) => { this.input = input }}
                name="title"
                type="text"
                onChange={ this.handeChange } />
            </div>

            <div className="input-group">
              <label>At</label>
              <input
                className="input-time"
                name="targetTimeHours"
                type="number"
                min={0}
                max={23}
                onChange={ this.handeChange } />
              <span className="colon">:</span>
              <input
                className="input-time"
                name="targetTimeMinutes"
                type="number"
                min={0}
                max={59}
                onChange={ this.handeChange } />
              <input type="submit" className="btn" value="Hurry up!" />
            </div>
          </form>
          <ChooseTheme setTheme={ this.props.setTheme } />
        </div>
      )
    }
    return false
  }
}

CreateCountdown.propTypes = {
  isCounting: PropTypes.bool.isRequired,
  hasBeenCounting: PropTypes.bool.isRequired,
  startCounter: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
}

export default CreateCountdown
