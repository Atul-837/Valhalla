import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <section className="container">
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">abc</span>
        </button> */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                GENRE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item">
                    <Link className="links" to="/Hindi">
                      Hindi
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link className="links" to="/Punjabi">
                      Punjabi
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link className="links" to="/International">
                      International
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/New_Releases">
                NEW RELEASES
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-brand col-auto justify-content-center">
          <Link className="links" to="/">
            ARIOSO
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Menu</title>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Upcoming_Shows" className="nav-link">
                UPCOMING SHOWS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Profile" className="nav-link">
                PROFILE
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}
