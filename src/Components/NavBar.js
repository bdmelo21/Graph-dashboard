import React from "react";
import LogoModatta from "../Assets/logo-header.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPowerOff } from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  state = {
    main: "",
  };
  render() {
    return (
      <div className="nav-bar">
        <div className="logo-box"></div>
        <div className="header-box">
          <div className="div-home-navbar"></div>
          <div className="personal-info">
            <p className="e-mail">user@gmail.com</p>
            <NavLink to="/" className="navbar-item">
              <p>Settings</p>
            </NavLink>
            <FontAwesomeIcon icon={faCog} className="settings" color="#666" />
            <NavLink to="/" className="navbar-item">
              <p>LogOut</p>
            </NavLink>
            <FontAwesomeIcon
              icon={faPowerOff}
              className="log-out"
              color="#666"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
