import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand nav-link" to="/">
          Vidly
        </NavLink>
        <div className="navbar-nav ">
          <NavLink className="nav-item nav-link" to="movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="register">
            Register
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
