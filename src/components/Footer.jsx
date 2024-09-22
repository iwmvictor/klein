import React from "react";
import { IoLocation } from "react-icons/io5";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import "./../style/Component.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
    footer
      {/* <div className="footer">
        <div className="top">
          <div className="container">
            <div className="content">
              <div className="contact">
                <div className="grid">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <div className="text">
                    <span>Call us</span>
                    <a href="tel:250789596504">+250 789 596 504</a>
                  </div>
                </div>
                <div className="grid">
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="text">
                    <span>Write to us</span>
                    <a href="mailto:joshmugs22@gmail.com">
                      joshmugs22@gmail.com
                    </a>
                  </div>
                </div>
                <div className="grid">
                  <div className="icon">
                    <IoLocation />
                  </div>
                  <div className="text">
                    <span>Address</span>
                    <a>Kigali, Rwanda</a>
                  </div>
                </div>
              </div>
              <div className="div">
                <div className="logo"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  illo, obcaecati accusantium suscipit rerum ut sit doloremque
                  officiis asperiores. In voluptate quia at odit, et amet
                  voluptatum commodi perferendis consequatur.
                </p>
                <div className="socials">
                  <div className="icon whatsapp">
                    <span className="tooltip">WhatsApp</span>
                    <span>
                      <FaWhatsapp />
                    </span>
                  </div>
                  <div className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <span>
                      <FaXTwitter />
                    </span>
                  </div>
                  <div className="icon tiktok">
                    <span className="tooltip">TikTok</span>
                    <span>
                      <FaTiktok />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="content">
              <p>&copy; {year} Klein. All rights reserved</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Footer;
