import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

const ThemePreview = props => {
  return (
    <div className={ `theme circle ${props.theme}` } onClick={ () => {
      props.setTheme(props.theme)
      ReactGA.event({category: 'Themes', action: 'Selected a theme', label: props.theme})
    }}></div>
  )
}

ThemePreview.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
}

export default ThemePreview