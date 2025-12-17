import React from "react";

import Hero from "./components/Hero";
import ProductVenture from "./components/ProductVenture";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <ProductVenture />
      <Projects />
      <Experience />
      <Research />
      <Footer />
    </div>
  );
}




