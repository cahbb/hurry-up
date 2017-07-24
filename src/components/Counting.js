import React from 'react'
import PropTypes from 'prop-types'

const Counting = props => {
  return (
    <div>
      <p>Hurry up: { props.countdownTitle }</p>
      <p>On: { props.countdownDay }, { props.countdownMonth }</p>
      <p>At: { props.countdownTime }</p>
    </div>
  )
}

Counting.PropTypes = {
  countdownTitle: PropTypes.string.isRequired,
  countdownDay: PropTypes.string.isRequired,
  countdownMonth: PropTypes.string.isRequired,
  countdownTime: PropTypes.string.isRequired
}

export default Counting