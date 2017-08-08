import React from 'react'
import PropTypes from 'prop-types'
import ThemePreview from './ThemePreview'
import '../assets/styles/components/ChooseTheme.css'

const ChooseTheme = props => {
  return (
    <div className="choose-theme">
      <ThemePreview
        setTheme={ props.setTheme }
        theme='green-purple-horizontal'/>
      <ThemePreview
        setTheme={ props.setTheme }
        theme='blue-red-pink-horizontal'/>
      <ThemePreview
        setTheme={ props.setTheme }
        theme='yellow-orange-pink-horizontal'/>
      <ThemePreview
        setTheme={ props.setTheme }
        theme='turquoise-blue-diagonal'/>
      <ThemePreview
        setTheme={ props.setTheme }
        theme='blue-red-diagonal'/>
    </div>
  )
}

ChooseTheme.propTypes = {
  setTheme: PropTypes.func.isRequired
}

export default ChooseTheme