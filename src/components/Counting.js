import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResetCountdown from '../components/ResetCountdown'
import '../assets/styles/components/Counting.css'

class Counting extends Component {
  componentDidMount() {
    this.interval = setInterval(this.onTick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onTick = () => {
    if (this.props.isCounting) {
      const s = Math.floor(this.props.remainingTime / 1000)
      if (s === 0) {
        this.props.stopCounter()
      } else {
        const now = Date.now()
        let remainingTime = this.props.remainingTime - (now - this.props.previousTime)

        /*
         * PARAMS ->
         * remainingTime
         * previousTime
         */
        this.props.decrementCounter(
          remainingTime,
          now
        )
      }
    }
  }

  render() {
    const s = Math.floor(this.props.remainingTime / 1000)
    const m = Math.floor(s / 60)
    const h = Math.floor(m / 60)

    let hours = `${h % 24} hours`
    if (h % 24 === 1) {
      hours = hours.slice(0, -1)
    } else if (h % 24 === 0) {
      hours = ''
    }

    let minutes = `${m % 60} minutes`
    if (m % 60 === 1) {
      minutes = minutes.slice(0, -1)
    } else if (m % 60 === 0) {
      minutes = ''
    }

    let seconds = `${s % 60} seconds`
    if (s % 60 === 1) {
      seconds = seconds.slice(0, -1)
    }

    return (
      <div className="counting">
        <p>It's { this.props.title } in</p>
        <p>{ hours } { minutes } { seconds }</p>
        <ResetCountdown resetCountdown={ this.props.resetCountdown } />
      </div>
    )
  }
}

Counting.PropTypes = {
  title: PropTypes.string.isRequired,
  remainingTime: PropTypes.number.isRequired,
  previousTime: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  stopCounter: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
}

export default Counting