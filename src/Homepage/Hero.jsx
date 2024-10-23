import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import hero1 from "./../assets/images/hero/hero1.jpg";
import hero2 from "./../assets/images/hero/hero2.jpg";
import hero3 from "./../assets/images/hero/hero3.jpg";
import hero4 from "./../assets/images/hero/hero4.jpg";

function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // WhatsApp contact
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://wa.me/250789596504?text=Hi%2C%20am%20interested%20in%20your%20services";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="hero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="overlay"></div>

            {index === currentIndex && (
              <div className="hero-text">
                <h1>Rent Your Dream Car</h1>
                <p>
                  Discover our amazing collection of cars and drive in style.
                </p>
                {/* 'Book Now' button opens WhatsApp with a pre-filled message */}
                <button className="btn" onClick={handleWhatsAppClick}>
                  Book Now
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="navbtn">
          <button className="prev" onClick={prevSlide}>
            <FaArrowLeftLong />
          </button>
          <button className="next" onClick={nextSlide}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
