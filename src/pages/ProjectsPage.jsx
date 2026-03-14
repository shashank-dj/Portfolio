import React from "react";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <section className="bg-dark text-white py-20 px-6">

      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Projects
      </h1>

      <Projects />

    </section>
  );
}
