import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

function Whatsapp() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: "",
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = () => {
    const { name, email, service, message } = formData;
    const whatsappNumber = "250789596504";

    // Constructing the message text
    const text = `Hi Mr. Josue, I am *${name}*. I found your website and wanted to talk to you about *${service}*. Additionally, ${message}`;

    // WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Clear form and close modal
    setFormData({ name: "", service: "", message: "" });
    setIsOpen(false);
  };

  return (
    <>
      <div className="whatsapp">
        <div className="icon">
          <button onClick={toggleModal}>
            <IoLogoWhatsapp />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="wamodal">
          <div className="content">
            <div className="wahead">
              <h3>WhatsApp Message</h3>
            </div>
            <div className="form">
              <div className="input">
                <input
                  type="text"
                  name="name"
                  placeholder="Names"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  <option value="car">Car Rental</option>
                  <option value="tour">Tours and Travel</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="chauffer">Private Chauffers</option>
                </select>
              </div>
              <div className="input">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="input">
                <button onClick={sendMessage}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Whatsapp;
