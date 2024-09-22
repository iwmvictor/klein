import React from "react";

import volcano from "./../assets/images/destination/volcano.jpeg";
import kigali from "./../assets/images/destination/volcano.jpeg";
import akagera from "./../assets/images/destination/akagera.jpeg";
import kivu from "./../assets/images/destination/volcano.jpeg";
import gorilla from "./../assets/images/destination/volcano.jpeg";
import nyungwe from "./../assets/images/destination/nyungwe.jpeg";
import { FaStar } from "react-icons/fa6";

const destinations = [
  {
    thumbnail: gorilla,
    title: "Gorilla Trekking",
    description:
      "Visit gorilla in Virunga National Park located in Northern Province of Rwanda, Musanze district.",
    rating: 4.6,
  },
  {
    thumbnail: nyungwe,
    title: "Nyungwe National Park",
    description:
      " laudantium dignissimos facere deleniti molestiae fuga illum. Voluptate nam aut dolores, explicabo corrupti maiores!",
    rating: 4,
  },
  {
    thumbnail: akagera,
    title: "Akagera National Park",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consectetur provident earum porro quisquam optio veritatis,",
    rating: 4.1,
  },
];

function Destination() {
  return (
    <>
      <div className="destination">
        <div className="container">
          <div className="heading">
            <div>
              <h2>Our popular destinations</h2>
            </div>
            <div>
              <p>
                Explore from a range of different Rwandan travel destinations,
                With Klein Transports and Tours, Unforgetable Adventure Awaits.
              </p>
            </div>
          </div>

          <div className="content">
            {destinations.map((place, index) => (
              <div className="box" key={index}>
                <div className="img">
                  <img src={place.thumbnail} alt={place.title} />
                </div>
                <div className="rate">{place.rating} <FaStar/></div>
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
