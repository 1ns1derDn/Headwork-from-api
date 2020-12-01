import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className="Nav">  
      <ul className="Nav-List">
        <li className="Nav-Item"><NavLink to="/add-user">Регистрация</NavLink></li>
        <li className="Nav-Item"><NavLink to="/user-list">Наш списком</NavLink></li>
        <li className="Nav-Item"><NavLink to="/about">О себе</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation