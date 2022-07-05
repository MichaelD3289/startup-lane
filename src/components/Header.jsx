import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [hideNav, setHideNav] = useState(true);

  return (
    <header className="header neutral-bg secpad-xs">
      <div className="container row">
        <button
          onClick={() => {
            setHideNav((prev) => !prev);
          }}
          className="nav-toggle"
          aria-label="open navigation"
        >
          <span className="hamburger"></span>
        </button>
        <img
          className="logo"
          src="../../imgs/logo.png"
          alt="startup lane logo"
        />
        <nav className={hideNav ? "nav" : "nav nav--hidden"}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : "nav__link"
                }
                onClick={() => setHideNav(true)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : "nav__link"
                }
                onClick={() => setHideNav(true)}
              >
                Saved
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
