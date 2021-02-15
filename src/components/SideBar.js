import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function Navbar(props) {
  return (
    <div>
      <Menu right {...props} width={"40%"}>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/about" className="menu-item">
          About
        </Link>
        <Link to="/projects" className="menu-item">
          Projects
        </Link>
        <Link to="/cv" className="menu-item">
          CV
        </Link>
        <Link to="/contact-me" className="menu-item">
          Contact me
        </Link>
      </Menu>
    </div>
  );
}
