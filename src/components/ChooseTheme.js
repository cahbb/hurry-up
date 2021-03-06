import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import '../assets/styles/components/ChooseTheme.css'

const ChooseTheme = props => {
    return (
    <div className="choose-theme">
      <div className="theme circle green-purple-horizontal" onClick={ () => {
        props.setTheme('green-purple-horizontal')
        ReactGA.event({
          category: 'Themes',
          action: 'Selected a theme',
          label: 'green-purple-horizontal'
        })
      }}></div>
      <div className="theme circle blue-red-pink-horizontal" onClick={ () => {
        props.setTheme('blue-red-pink-horizontal')
        ReactGA.event({
          category: 'Themes',
          action: 'Selected a theme',
          label: 'blue-red-pink-horizontal'
        })
      }}></div>
      <div className="theme circle yellow-orange-pink-horizontal" onClick={ () => {
        props.setTheme('yellow-orange-pink-horizontal')
        ReactGA.event({
          category: 'Themes',
          action: 'Selected a theme',
          label: 'yellow-orange-pink-horizontal'
        })
      }}></div>
      <div className="theme circle turquoise-blue-diagonal" onClick={ () => {
        props.setTheme('turquoise-blue-diagonal')
        ReactGA.event({category: 'Themes',
          action: 'Selected a theme',
          label: 'turquoise-blue-diagonal'
        })
      }}></div>
      <div className="theme circle blue-red-diagonal" onClick={ () => {
        props.setTheme('blue-red-diagonal')
        ReactGA.event({category: 'Themes',
          action: 'Selected a theme',
          label: 'blue-red-diagonal'
        })
      }}></div>
    </div>
  )
}

ChooseTheme.propTypes = {
  setTheme: PropTypes.func.isRequired
}

export default ChooseTheme