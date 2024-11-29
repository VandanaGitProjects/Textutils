import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${
        props.mode
      } text-${props.mode === "dark" ? "light" : "dark"} `}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button
                    type="button"
                    className="btn  dropdown-item"
                    onClick={() => props.toggleMode("dark")}
                  >
                    DarkMode
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn  dropdown-item"
                    onClick={() => props.toggleMode("light")}
                  >
                    LightMode
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className="btn  dropdown-item"
                    onClick={() => props.toggleMode("blue")}
                  >
                    BlueMode
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          {console.log(props.mode === "light")}
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              //
              checked={props.mode === "light"}
              // checked={true}
              onChange={() => props.toggleMode("light")}
            />
            <label
              className={`form-check-label .text-${props.mode}`}
              htmlFor="flexRadioDefault1"
            >
              Light Mode
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={() => props.toggleMode("dark")}
              checked={props.mode === "dark"}
            />
            <label
              className={`form-check-label .text-${props.mode}`}
              htmlFor="flexRadioDefault2"
            >
              Dark Mode
            </label>
          </div>

          <form className="d-flex" role="search" id="fm1">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={() => props.toggleMode("light")}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "dark" ? "light" : "dark"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About",
};
