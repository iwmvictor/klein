import React, { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import "./../style/Component.scss";
import logo from "./../assets/images/brand/logo-light.svg";

function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "rental",
    message: "",
  });

  const year = new Date().getFullYear();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number to send the message
    const phoneNumber = "250789596504";

    // Formatting message to send via WhatsApp
    const whatsappMessage = `Full Name: ${formData.fullName}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service === "rental" ? "Car Rental" : "Tours & Travel"}%0AMessage: ${formData.message}`;

    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    );
  };

  return (
    <>
      <div className="footer">
        <div className="main">
          <div className="container">
            <div className="content">
              <div className="company">
                <img src={logo} alt="Klein Logo" />
                <h2>Klein Transports & Tours</h2>
                <p>
                  Experience the thrill of the open road and the freedom to
                  explore our diverse range of top-quality rental vehicles
                </p>
              </div>
              <div className="contact">
                <div>
                  <h3>Get In Touch</h3>
                  <ul>
                    <li>
                      <a href="tel:250789596504">
                        <span>
                          <FaPhone />
                        </span>
                        <span>+250 78 9596 504</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:joshmugs22@gmail.com">
                        <span>
                          <FaEnvelope />
                        </span>
                        <span>joshmugs22@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/250789596504">
                        <span>
                          <FaWhatsapp />
                        </span>
                        <span>WhatsApp</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/klein_transports_tours">
                        <span>
                          <FaInstagram />
                        </span>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <FaXTwitter />
                        </span>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <FaTiktok />
                        </span>
                        <span>TikTok</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form">
                <h3>Quick Booking Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="input">
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Fullnames"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="rental">Car Rental</option>
                      <option value="tours">Tours & Travel</option>
                    </select>
                  </div>
                  <div className="input">
                    <textarea
                      name="message"
                      placeholder="What else would you like us to know?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="input">
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <p>&copy; Copyright {year} — Klein Transports & Tours</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
