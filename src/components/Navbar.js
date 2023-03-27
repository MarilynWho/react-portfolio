import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item mr-4">
            <Link className="nav  " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mr-4 ">
            <Link className="nav" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav " to="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
