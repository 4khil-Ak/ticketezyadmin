import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md">
      {/* <!-- Brand --> */}
      <Link className="navbar-brand" to={`/`}>
        TicketEzy Admin
      </Link>

      {/* <!-- Toggler/collapsibe Button --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        style={{ outline: "0" }}
      >
        <span className="fa fa-bars text-light"></span>
      </button>

      {/* <!-- Navbar links --> */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav w-100 justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to={`/`}>
              Movies
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <span className="nav-link px-0">/</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/theaters`}>
              Theater
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <span className="nav-link px-0">/</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/events`}>
              Events
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <span className="nav-link px-0">/</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/eventsmanager`}>
              Events Manager
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <span className="nav-link px-0">/</span>
          </li>
          <li className="nav-item">
            <span className="nav-link cursor-pointer" onClick={props.handleLogout}>
              Logout&ensp;<i className="fa fa-sign-out"></i>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
