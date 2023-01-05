import React from "react";
import logo from "../../assets/logo.svg";
import "./index.scss";

const Navbar = ({ matchedWords, errorCounter }) => {
  return (
    <div className="navbar">
      <div className="container">
        <a href="/">
          <div className="brand">
            <img src={logo} alt="Logo" />
            WordMatch
          </div>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
