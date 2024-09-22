import React, { useState } from 'react';

const services = [
  {
    number: '01',
    icon: '/path/to/city-transport.png',  // Replace with actual image paths
    title: 'City transfer',
    description: 'We offer comfortable and safe city transfers.',
  },
  {
    number: '02',
    icon: '/path/to/airport-transport.png',  // Replace with actual image paths
    title: 'Airport transfer',
    description: 'Reliable airport transfers for timely pickups and drop-offs.',
  },
  {
    number: '03',
    icon: '/path/to/tour.png',  // Replace with actual image paths
    title: 'Tours',
    description: 'Enjoy personalized tours in and around the city.',
  },
  {
    number: '04',
    icon: '/path/to/car-rental.png',  // Replace with actual image paths
    title: 'Car Rental',
    description: 'Affordable car rental services with a wide selection.',
  },
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <section className="service-area">
      <div className="container">
        <div className="heading">
          <h4>See our</h4>
          <h2>Latest Services</h2>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel">
            {services
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((service, index) => (
                <div key={index} className="single-service">
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="service-text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="controls">
            <button onClick={prevSlide} className="prev">‹</button>
            <button onClick={nextSlide} className="next">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
