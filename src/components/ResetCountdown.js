import React from 'react'
import '../assets/styles/components/ResetCountdown.css'

const ResetCounter = props => {
  return (
    <div className="reset-countdown" onClick={ () => { props.resetCountdown() } }>
      <div className="btn">Reset counter</div>
    </div>
  )
}

export default ResetCounter