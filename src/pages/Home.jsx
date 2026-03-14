import React from "react";
import Hero from "../components/Hero";
import ProductVenture from "../components/ProductVenture";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductVenture />
      <Projects />
      <Research />
      <Experience />
    </>
  );
}
