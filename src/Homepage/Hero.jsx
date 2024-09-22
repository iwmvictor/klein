import React, { useState, useEffect } from "react";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import hero1 from "./../assets/images/hero/hero1.png";
import hero2 from "./../assets/images/hero/hero2.png";
import hero3 from "./../assets/images/hero/promo_bg.jpg";

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

  return (
    <div className="hero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {index === currentIndex && (
              <div className="hero-text">
                <h1>Rent Your Dream Car</h1>
                <p>
                  Discover our amazing collection of cars and drive in style.
                </p>
                <button className="btn">Book Now</button>
              </div>
            )}
          </div>
        ))}

        {/* Navigation buttons */}
        <div className="navbtn">
          <button className="prev" onClick={prevSlide}>
            <FaArrowLeftLong />
          </button>
          <button className="next" onClick={nextSlide}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* <div className="book">
        <div className="thumbnail">
          <img src={hero1} alt="Car Thumbnail" />
          <div className="overlay">
            <h3>Search Your Best Cars here.</h3>
          </div>
        </div>
        <div className="form">
          <div className="input-group">
            <input type="text" placeholder="From Address" />
            <input type="text" placeholder="To Address" />
            <select>
              <option>Select</option>
            </select>
            <input type="date" placeholder="Journey Date" />
            <input type="time" placeholder="Journey Time" />

            <button className="btn">FIND CAR</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
