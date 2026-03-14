import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Ventures from "./pages/Ventures";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchPage from "./pages/ResearchPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
