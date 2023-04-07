import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="main-navbar">
        <NavLink to="/">Logo</NavLink>
        <div className="right-nav">
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
