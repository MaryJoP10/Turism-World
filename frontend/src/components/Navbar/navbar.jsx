import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components'
import Logo from "../../images/logo.png"
import { MdLanguage } from "react-icons/md";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleConfig, setToggleConfig] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState(null);
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if(savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }
  return (
    <>
      <Nav className="nav">
        <div className="logopages_container">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt=''/>
            </NavLink>
          </div>
          <div className="pages">
            <NavLink to="/map">
              <h1>Mapa</h1>
            </NavLink>
            <div className="search_container">
              <TextField className="search_field"
                type="search"
                label="Buscar"
                value={searchInput}
                onChange={handleChange}
                sx={{ width: 300 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon className="search_icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div style={{display: 'flex'}} className="register">
            {user ? (
              <>
                <p style={{textAlign: 'left', fontSize: '1.5vw', marginRight: '5vw'}}>Hola, {user}</p>
                <button onClick={handleLogout}>Cerrar Sesión</button>
                </>
              ): (
              <NavLink to="/signin">
                <button>Iniciar Sesión</button>
              </NavLink>
            )}
            
            {toggleConfig
              ? <MdLanguage className="icon" onClick={() => setToggleConfig(false)} />
              : <MdLanguage className="icon" onClick={() => setToggleConfig(true)} />
            }
            {toggleConfig && (
              <div className="config_menu responsive_container pagesResponsive">
                
              </div>
            )}
          </div>
        </div>
        <div className="responsive">
          {/*Responsive Hambar*/}
          {toggleMenu
            ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggleMenu(false)} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggleMenu(true)} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>}
          {toggleMenu && (
            <div className="responsive_container">
              <div className="pagesResponsive">
                <NavLink to="/map">
                  <h1>Mapa</h1>
                </NavLink>
              </div>
              <div className="registerResponsive">
                <NavLink to="/signin">
                  <button>Iniciar Sesión</button>
                </NavLink>
              </div>
            </div>
          )}
          {/*Responsive Settings*/}
          <div className="settings">
            {toggleConfig
              ? <MdLanguage className="icon" onClick={() => setToggleConfig(false)} />
              : <MdLanguage className="icon" onClick={() => setToggleConfig(true)} />
            }
            {toggleConfig && (
              <div className="config_menu responsive_container pagesResponsive">
                
              </div>
            )}
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
export const Nav = styled.nav`
    background: rgba(0,0,0,0.2);
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;`

export const NavLink = styled(Link)`
    color: white;`

