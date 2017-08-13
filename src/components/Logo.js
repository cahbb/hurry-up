import React from 'react'
import logo from '../assets/images/logo.svg';
import '../assets/styles/components/Logo.css'

const Logo = props => {
  return (
    <div className="logo">
      <img src={logo} alt="hurry up!"/>
    </div>
  )
}

export default Logo