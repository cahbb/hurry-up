import React from 'react'
import PropTypes from 'prop-types'
import '../css/fireworks.css'

const CountdownSummary = props => {
  if (!props.isCounting && props.hasBeenCounting) {
    return (
      <div className="countdown-summary">
        <p>Finally it's { props.title }</p>
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      </div>
    )  
  } else {
    return false
  }
}

CountdownSummary.PropTypes = {
  title: PropTypes.string.isRequired,
  isCounting: PropTypes.bool.isRequired,
  hasBeenCounting: PropTypes.bool.isRequired
}

export default CountdownSummary