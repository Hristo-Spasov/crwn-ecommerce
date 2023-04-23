import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/crown.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
