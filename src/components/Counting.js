import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counting extends Component {

  componentDidMount() {
    this.interval = setInterval(this.onTick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onTick = () => {
    if (this.props.isCounting) {
      if (this.props.remainingTime <= 0) {
        this.props.stopCounter()
      } else {
        let now = Date.now()
        this.props.decrementCounter(
          this.props.remainingTime - (now - this.props.previousTime),
          now
        )
      }
    }
  }

  render() {
    let s = this.props.remainingTime / 1000
    let m = s / 60
    let h = m / 60
    return (
      <div className="counting">
        <p>Celebrate: { this.props.title }</p>
        <p>In:
          { h <= 0 ? '' : `${Math.floor(h % 24)} hours` }
          { m <= 0 ? '' : `${Math.floor(m % 60)} min` }
          { s <= 0 ? '' : `${Math.floor(s % 60)} seconds` }
        </p>
      </div>
    )
  }
}

Counting.PropTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.string.isRequired,
  isCounting: PropTypes.bool.isRequired
}

export default Counting