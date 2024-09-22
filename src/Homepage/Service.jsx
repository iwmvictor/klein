import React, { useState, useEffect } from "react";

const services = [
  {
    number: "01",
    title: "Tours",
    description: "Enjoy personalized tours in and around the city.",
  },
  {
    number: "02",
    title: "Car Rental",
    description: "Affordable car rental services with a wide selection.",
  },
  {
    number: "03",
    title: "Airport transfer",
    description: "Reliable airport transfers for timely pickups and drop-offs.",
  },
  {
    number: "04",
    title: "City transfer",
    description: "We offer comfortable and safe city transfers.",
  },
  {
    number: "05",
    title: "Luxury Chauffeur",
    description: "Experience elegance with our chauffeur services.",
  },
  {
    number: "06",
    title: "Event Transportation",
    description: "Professional transportation for events and gatherings.",
  },
  {
    number: "07",
    title: "Private Guide",
    description: "Expert guides for your tailored experiences.",
  },
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  // Calculate total pages based on number of services and items to show
  const totalPages = Math.ceil(services.length / itemsToShow);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 10000); // Auto slide every 10 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePageChange = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the services to display based on the current index
  const getDisplayedServices = () => {
    const displayedServices = [];
    for (let i = 0; i < itemsToShow; i++) {
      const serviceIndex = (currentIndex * itemsToShow + i) % services.length;
      displayedServices.push(services[serviceIndex]);
    }
    return displayedServices;
  };

  const displayedServices = getDisplayedServices();

  return (
    <section className="service-area">
      <div className="container">
        <div className="heading">
          <div className="left">
            <h2>With our experience, We will serve you</h2>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              dignissimos. Architecto velit, inventore vel voluptatem quisquam
              voluptates.
            </p>
          </div>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel">
            {displayedServices.map((service, index) => (
              <div key={index} className="single-service">
                <span className="service-number">{service.number}</span>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`circle ${currentIndex === index ? "active" : ""}`}
                onClick={() => handlePageChange(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
