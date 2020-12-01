import React from 'react'

import Logo from '../UI/Logo'
import Navigation from '../Navigation'

import './Header.scss'
const Header = () => {
  return (
    <header className="Header">
      <div className="Container">
        <div className="Header-Inner">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header