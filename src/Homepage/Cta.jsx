import React from "react";

import car from "./../assets/images/car/toyota-1.png";

function Cta() {
  return (
    <>
      <div className="cta">
        <div className="overlay">
          <div className="box"></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <img src={car} alt="" />
            </div>
            <div className="right">
              <span>for people who appreciate quality</span>
              <h2>Ready for smooth drive?</h2>
              <button className="btn">book now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
