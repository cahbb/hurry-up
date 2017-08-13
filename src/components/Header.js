import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../components/Logo'
import ChooseTheme from '../components/ChooseTheme'

const Header = props => {
  return (
    <div className="header">
      <Logo />
      <ChooseTheme setTheme={ props.setTheme } />  
    </div>
  )
}

Header.propTypes = {
  setTheme: PropTypes.func.isRequired
}

export default Header