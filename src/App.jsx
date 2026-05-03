import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Ventures from "./pages/Ventures";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchPage from "./pages/ResearchPage";
import ExperiencePage from "./pages/ExperiencePage";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-dark text-white">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
