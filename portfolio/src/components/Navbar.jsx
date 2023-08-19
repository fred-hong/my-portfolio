import React from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <header className="header-style md:sticky">
      <nav className="navbar-style">
        <div className="logo-style init-fade">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-link-style">
          <ol>
            <li className="init-fade">
              <a href="#aboutme">&lt;/About Me&gt;</a>
            </li>
            <li className="init-fade">
              <a href="#experience">&lt;/Experience&gt;</a>
            </li>
            <li className="init-fade">
              <a href="#projects">&lt;/Projects&gt;</a>
            </li>
            <li className="init-fade">
              <a href="#contact">&lt;/Contact&gt;</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
