import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/Fireworks.css'

const CountdownSummary = props => {
  if (!props.isCounting && props.hasBeenCounting) {
    return (
      <div className="countdown-summary">
        <p>It's { props.title }</p>
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      </div>
    )  
  }
  return false
}

CountdownSummary.PropTypes = {
  title: PropTypes.string.isRequired,
  isCounting: PropTypes.bool.isRequired,
  hasBeenCounting: PropTypes.bool.isRequired
}

export default CountdownSummary