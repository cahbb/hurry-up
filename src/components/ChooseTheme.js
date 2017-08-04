import React from 'react'
import '../css/choose-theme.css'

const ChooseTheme = props => {
  return (
    <div className="choose-theme">
      <div className="theme circle blue-diagonal" onClick={ () => props.setTheme('blue-diagonal') }></div>
      <div className="theme circle blue-red-pink-horizontal" onClick={ () => props.setTheme('blue-red-pink-horizontal') }></div>
    </div>
  )
}

export default ChooseTheme