import React from "react";
import "./Navbar.css";
import { Link , NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top ">
      <div className="container">
        <Link className="navbar-brand nav-brand" to="/">
          START FRAMEWORK
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link " to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
