import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-dark text-white flex justify-center gap-8 py-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/case-studies">Case Studies</Link>
      <Link to="/ventures">Ventures</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/research">Research</Link>
    </nav>
  );
}
