import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import Cursor         from './components/Cursor';

import Home           from './pages/Home';
import About          from './pages/About';
import CaseStudies    from './pages/CaseStudies';
import Ventures       from './pages/Ventures';
import ProjectsPage   from './pages/ProjectsPage';
import ResearchPage   from './pages/ResearchPage';
import ExperiencePage from './pages/ExperiencePage';
import ZomatoCaseStudy from './pages/caseStudies/Zomato';

/* Scroll to top on every navigation */
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <div className="min-h-screen flex flex-col bg-void text-zinc-100 font-jakarta">
      <Cursor />
      <ScrollReset />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/about"               element={<About />} />
          <Route path="/case-studies"        element={<CaseStudies />} />
          <Route path="/case-studies/zomato" element={<ZomatoCaseStudy />} />
          <Route path="/ventures"            element={<Ventures />} />
          <Route path="/projects"            element={<ProjectsPage />} />
          <Route path="/research"            element={<ResearchPage />} />
          <Route path="/experience"          element={<ExperiencePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
