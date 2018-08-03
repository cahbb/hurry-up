import React from 'react'
import PropTypes from 'prop-types'
import ResetCountdown from '../components/ResetCountdown'
import '../assets/styles/components/Fireworks.css'
import '../assets/styles/components/CountdownSummary.css'

const CountdownSummary = props => {
  return (
    <div className="countdown-summary">
      <p>{ props.title }</p>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <ResetCountdown resetCountdown={ props.resetCountdown } />
    </div>
  )
}

CountdownSummary.PropTypes = {
  title: PropTypes.string.isRequired,
  isCounting: PropTypes.bool.isRequired,
  hasBeenCounting: PropTypes.bool.isRequired
}

export default CountdownSummary