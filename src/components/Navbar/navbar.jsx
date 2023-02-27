import React, { useState } from "react";
import "./navbar.css";
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../../images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <Nav>
        <div className="logopages_container">
          <div className="logo">
            <NavLink exact to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="pages">
            <NavLink to="/library">
              <h1>Library</h1>
            </NavLink>
            <NavLink to="/community">
              <h1>Community</h1>
            </NavLink>
            <NavLink to="/chat">
              <h1>Chat</h1>
            </NavLink>
            <NavLink to="/api">
              <h1>API</h1>
            </NavLink>
          </div>
        </div>
        <div className="register">
          <NavLink to="/signin">
            <h1>Sign In</h1>
          </NavLink>
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>

        </div>
        <div className="responsive">
          {toggleMenu
            ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggleMenu(false)} width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggleMenu(true)} width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>}
          {toggleMenu && (
            <div className="responsive_container scale-up-center">
              <div className="pagesResponsive">
                <NavLink to="/library">
                  <h1>Library</h1>
                </NavLink>
                <NavLink to="/community">
                  <h1>Community</h1>
                </NavLink>
                <NavLink to="/chat">
                  <h1>Chat</h1>
                </NavLink>
                <NavLink to="/api">
                  <h1>API</h1>
                </NavLink>
              </div>
              <div className="registerResponsive">
                <NavLink to="/signin">
                  <h1>Sign In</h1>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </Nav>
    </>
  );
};

export const Nav = styled.nav`
    background-color: black;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;`


export const NavLink = styled(Link)`
    color: white;`

export default Navbar;