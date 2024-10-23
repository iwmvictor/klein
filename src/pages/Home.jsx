import React from "react";

import "./../style/Home.scss";
import Hero from "../Homepage/Hero";
import About from "../Homepage/About";
import Service from "../Homepage/Service";
import Cta from "../Homepage/Cta";
import Cars from "./../Homepage/Cars";
import Destination from "../Homepage/Destination";

function Home() {
  return (
    <>
      <div className="homepage">
        <Hero />
        <Service id="services" />
        <Cta />
        <Cars />
        <Destination is="destinations" />
        <About />
      </div>
    </>
  );
}

export default Home;
