import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-link">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/cv" className="nav-link">
            CV
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/contact-me" className="nav-link">
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
}
