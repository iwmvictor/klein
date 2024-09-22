import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import "./../style/Component.scss";
import globe from "./../assets/images/other/globe.png";
import clock from "./../assets/images/other/clock.png";
import logo from "./../assets/images/brand/logo.jpg";

function Header() {
  const [menuModal, setMenuModal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu toggle logic
  const toggleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      <div className="header">
        <div className="top">
          <div className="content">
            <div className="left">
              <p>Welcome to Klein — Car Rentals & Tours</p>
            </div>
            <div className="right">
              <ul>
                <li>
                  <a href="">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTiktok />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="content">
              <div className="left"></div>
              <div className="mid">
                <div className="location">
                  <div className="img">
                    <img src={globe} alt="" />
                  </div>
                  <div className="text">
                    <h3>Kigali, Rwanda</h3>
                    <p>Available in Kigali</p>
                  </div>
                </div>
                <div className="day">
                  <div className="img">
                    <img src={clock} alt="" />
                  </div>
                  <div className="text">
                    <h3>Monday to Sunday</h3>
                    <p>We are available 24/7</p>
                  </div>
                </div>
              </div>
              <div className="right btn">
                <div className="text">
                  <h3>+250 78 9596 504</h3>
                  <p>joshmugs22@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="container">
            <Link to={"/"} className="logo">
              <img src={logo} alt="" />
            </Link>
            <div></div>
            <div className="nav">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    <span>home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    <span>about</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={
                      location.pathname === "/services" ? "active" : ""
                    }
                  >
                    <span>services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className={location.pathname === "/gallery" ? "active" : ""}
                  >
                    <span>gallery</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    <span>contact</span>
                  </Link>
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

        {/* Modal for Menu */}
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
