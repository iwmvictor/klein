import React from "react";

// Updated reasons for choosing the car rental and tour company
const reasons = [
  {
    count: "01",
    title: "Wide Range of Vehicles",
    description:
      "From luxury sedans to rugged SUVs, we offer a diverse selection of vehicles to suit any journey.",
  },
  {
    count: "02",
    title: "Tailored Tour Packages",
    description:
      "Explore Rwanda with personalized tour packages designed to meet your unique travel interests.",
  },
  {
    count: "03",
    title: "Affordable Pricing & Transparent Rates",
    description:
      "Enjoy competitive pricing with no hidden fees. We make luxury and comfort accessible to all.",
  },
  {
    count: "04",
    title: "Expert Local Guides",
    description:
      "Our experienced local guides ensure that you experience the true beauty and culture of Rwanda.",
  },
];

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="heading">
            <div>
              <h2>Why Choose Us</h2>
            </div>
            <div>
              <p>
                We are committed to providing top-notch car rental services and
                unforgettable tour experiences in Rwanda. We
                ensure a seamless and enjoyable journey.
              </p>
            </div>
          </div>

          <div className="content">
            {reasons.map((why, index) => (
              <div className="box" key={index}>
                <div className="number">{why.count}</div>
                <div>
                  <h3>{why.title}</h3>
                  <p>{why.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
