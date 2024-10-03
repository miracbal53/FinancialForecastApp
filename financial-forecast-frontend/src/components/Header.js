import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // react-router'dan Link

const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="#home">
            <span>Finexo</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <RouterLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link" to="/#about">
                  About
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link" to="/#service">
                  Services
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link" to="/#why">
                  Why Us
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link" to="/#team">
                  Team
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link" to="/login">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </RouterLink>
              </li>
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
