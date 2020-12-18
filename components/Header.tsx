import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {

  return (
    <React.Fragment>

      <ul className="nav">
        <li className="header-home-li">
          <NavLink className="header-home" to="/home">
            <img
              className="header-logo"
              src={require("../../../public/images/logo.png")}
            />
          </NavLink>
        </li>
        <div className="nav-links">
          <li className="nav-center hidden-home">
            <NavLink to="/home">HOME </NavLink><div className="header-bottom-border"></div>
          </li>
          <li className="nav-center">
            <NavLink to="/about">ABOUT </NavLink><div className="header-bottom-border"></div>
          </li>
          <li className="nav-center">
            <NavLink to="/leasing">LEASING </NavLink><div className="header-bottom-border"></div>
          </li>
          <li className="nav-center">
            <NavLink to="/sales">SALES </NavLink><div className="header-bottom-border"></div>
          </li>
          <li className="nav-center">
            <NavLink to="/propertymanagement">PROPERTY MANAGMENT </NavLink><div className="header-bottom-border"></div>
          </li>
          <li className="nav-center">
            <NavLink to="/contact">CONTACT </NavLink><div className="header-bottom-border"></div>
          </li>
        </div>
      </ul>
    </React.Fragment>
  );
};

export default Header;
