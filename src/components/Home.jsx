import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Service from "./Service";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
