import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="navleft">
          <h1>
            Our<span className="logo">Logo</span>
          </h1>
        </div>
        <div className="navright">
          <ul>
            <li>
              <a href="#"> Home</a>
              <ul>
                <li>
                  <a href="#">DropDown-1</a>
                </li>
                <li>
                  <a href="#">DropDown-2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
