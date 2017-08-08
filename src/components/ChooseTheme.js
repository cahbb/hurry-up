import React from 'react'
import Theme from './Theme'
import '../assets/styles/components/ChooseTheme.css'

const ChooseTheme = props => {
  return (
    <div className="choose-theme">
      <Theme theme='green-purple-horizontal'/>
      <Theme theme='blue-red-pink-horizontal'/>
      <Theme theme='yellow-orange-pink-horizontal'/>
      <Theme theme='turquoise-blue-diagonal'/>
      <Theme theme='blue-red-diagonal'/>
    </div>
  )
}

export default ChooseTheme