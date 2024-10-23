import React from "react";
import car from "./../assets/images/car/toyota-1.png";

function Cta() {
  // WhatsApp contact
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://wa.me/250789596504?text=Hi%2C%20am%20interested%20in%20your%20services";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="cta">
        <div className="overlay">
          <div className="box"></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <img src={car} alt="Car Image" />
            </div>
            <div className="right">
              <span>for people who appreciate quality</span>
              <h2>Ready for smooth drive?</h2>
              {/* 'Book Now' button opens WhatsApp with a pre-filled message */}
              <button className="btn" onClick={handleWhatsAppClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
