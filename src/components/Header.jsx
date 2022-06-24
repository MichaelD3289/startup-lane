import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="../../imgs/logo.png" alt="startup lane logo" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link">Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">Saved</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header