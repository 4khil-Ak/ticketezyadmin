import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md">
      {/* <!-- Brand --> */}
      <Link class="navbar-brand" to={`/`}>
        TicketEzy Admin
      </Link>

      {/* <!-- Toggler/collapsibe Button --> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Navbar links --> */}
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav w-100 justify-content-end">
          <li class="nav-item">
            <Link class="nav-link" to={`/movies`}>
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <span class="nav-link px-0">/</span>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/theaters`}>
              Theater
            </Link>
          </li>
          <li class="nav-item">
            <span class="nav-link px-0">/</span>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/events`}>
              Events
            </Link>
          </li>
          <li class="nav-item">
            <span class="nav-link px-0">/</span>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/eventsmanager`}>
              Events Manager
            </Link>
          </li>
          <li class="nav-item">
            <span class="nav-link px-0">/</span>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/login`}>
              Logout&ensp;<i class="fa fa-sign-out"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
