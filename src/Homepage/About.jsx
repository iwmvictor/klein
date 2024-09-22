import React from "react";

const reasons = [
  {
    count: "01",
    title: "Financing Made Easy",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    count: "02",
    title: "Deals in All Brands",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    count: "03",
    title: "Deals for Every Budget",
    description:
      "Discover a range of options tailored to fit any budget, making luxury accessible for everyone.",
  },
  {
    count: "04",
    title: "24/7 Support",
    description:
      "We're here for you around the clock, ensuring a seamless experience anytime you need us.",
  },
];

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="heading">
            <div>
              <h2>Why choose us</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                assumenda optio officiis aut! Nulla dignissimos tenetur debitis
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
