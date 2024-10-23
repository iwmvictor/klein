import React, { useState } from "react";

import "./../style/Component.scss";
import logo from "./../assets/images/brand/logo.jpg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuModal, setMenuModal] = useState(false);
  const location = useLocation();

  // Menu toggle logic
  const toggleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="content">
            <div>
              <Link to={"/"} className="logo">
                <img src={logo} alt="Klein Logo" />
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <a
                    href="#services"
                    className={
                      location.pathname === "/#services" ? "active" : ""
                    }
                  >
                    <span>service</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#destinations"
                    className={
                      location.pathname === "/#destinations" ? "active" : ""
                    }
                  >
                    <span>destinations</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#gallery"
                    className={
                      location.pathname === "/#gallery" ? "active" : ""
                    }
                  >
                    <span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    <span>contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu">
              <button
                className={menuModal ? "active" : ""}
                onClick={toggleMenuModal}
              >
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </button>
            </div>
          </div>
        </div>

        {menuModal && (
          <div className="menu-modal">
            <div className="modal-content">
              <ul>
                <li>
                  <a href="/" onClick={toggleMenuModal}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={toggleMenuModal}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={toggleMenuModal}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/gallery" onClick={toggleMenuModal}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={toggleMenuModal}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
