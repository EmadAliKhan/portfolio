import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  // Use the useLocation hook to access the current location
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-3 dancing-script">
              <li className="nav-item ps-3">
                <Link
                  className="nav-link"
                  to="#home"
                  smooth
                  style={{ color: location.hash === '#home' ? 'red' : 'white' }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link
                  className="nav-link"
                  to="#about"
                  smooth
                  style={{ color: location.hash === '#about' ? 'red' : 'white' }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link
                  className="nav-link"
                  to="#portfolio"
                  smooth
                  style={{ color: location.hash === '#portfolio' ? 'red' : 'white' }}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link
                  className="nav-link"
                  to="#contact"
                  smooth
                  style={{ color: location.hash === '#contact' ? 'red' : 'white' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

