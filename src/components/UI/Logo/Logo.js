import React from 'react'
import logo from './img/logo.svg'
import { NavLink } from 'react-router-dom'
import './Logo.scss'
const Logo = () => {
  return (
    <NavLink to="/add-user">
      <img className="Logo" src={logo} alt="logotype"/>
    </NavLink>
    
  )
}

export default Logo