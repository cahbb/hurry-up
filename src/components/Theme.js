import React from 'react'
import ReactGA from 'react-ga'

const Theme = props => {
  return (
    <div className={ `theme circle ${props.theme}` } onClick={ () => {
      props.setTheme(props.theme)
      ReactGA.event({category: 'Themes', action: 'Selected a theme', label: props.theme})
    }}></div>
  )
}

export default Theme