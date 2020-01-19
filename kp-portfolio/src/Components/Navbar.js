import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../Assets/logo.svg";

import "../SCSS/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="home" className="logo" />
      </Link>
      <div className="navlinks-container">
        <NavLink to="/" className="navlink" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/resume" className="navlink" activeClassName="active">
          Resume
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
