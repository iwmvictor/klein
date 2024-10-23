import React from "react";

import gorilla from "./../assets/images/destination/gorilla.jpg";
import nyungwe from "./../assets/images/destination/nyungwe.jpg";
import akagera from "./../assets/images/destination/akagera.jpg";
import kigali from "./../assets/images/destination/kigali.jpg";
import kivu from "./../assets/images/destination/kivu.jpeg";
import palace from "./../assets/images/destination/palace.jpg";

import { FaStar } from "react-icons/fa6";

// Updated destinations array with background colors and marketing descriptions
const destinations = [
  {
    thumbnail: gorilla,
    title: "Gorilla Trekking",
    description:
      "Experience a thrilling trek through the misty mountains of Virunga to see majestic mountain gorillas up close.",
    rating: 4.6,
    bgColor: "#F0E68C",
  },
  {
    thumbnail: nyungwe,
    title: "Nyungwe National Park",
    description:
      "Discover the beauty of Rwanda’s dense rainforests and a rich diversity of wildlife at Nyungwe.",
    rating: 4,
    bgColor: "#ADD8E6",
  },
  {
    thumbnail: akagera,
    title: "Akagera National Park",
    description:
      "Embark on a safari adventure in Rwanda’s savannah, home to the Big Five and breathtaking scenery.",
    rating: 4.1,
    bgColor: "#FFD700",
  },
  {
    thumbnail: kigali,
    title: "Kigali City Tour",
    description:
      "Explore the vibrant capital city of Kigali, with its rich culture, history, and modern attractions.",
    rating: 4.3,
    bgColor: "#FFB6C1",
  },
  {
    thumbnail: kivu,
    title: "Lake Kivu",
    description:
      "Relax by the serene shores of Lake Kivu, offering stunning views and endless opportunities for water activities.",
    rating: 4.5,
    bgColor: "#87CEEB",
  },
  {
    thumbnail: palace,
    title: "King's Palace Museum",
    description:
      "Step into Rwanda’s royal past with a visit to the traditional King’s Palace in Nyanza.",
    rating: 4.2,
    bgColor: "#FFFACD",
  },
];

function Destination() {
  return (
    <>
      <div className="destination">
        <div className="container">
          <div className="heading">
            <div>
              <h2>Our Popular Destinations</h2>
            </div>
            <div>
              <p>
                Explore Rwanda's top travel destinations with Klein Transports
                and Tours. Your unforgettable adventure awaits.
              </p>
            </div>
          </div>

          <div className="content">
            {destinations.map((place, index) => (
              <div
                className="box"
                key={index}
                style={{ backgroundColor: place.bgColor }}
              >
                <div className="img">
                  <img src={place.thumbnail} alt={place.title} />
                </div>
                <div className="rate">
                  {place.rating} <FaStar />
                </div>
                <div className="detail">
                  <h3>{place.title}</h3>
                  <p>{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
