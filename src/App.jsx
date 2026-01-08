import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import CareersPage from './pages/CareersPage';

import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className={`relative min-h-screen overflow-x-hidden ${isDark ? 'bg-slate-950' : 'bg-sky-75'}`}>

        {/* GLOBAL 3D BACKGROUND */}


        {/* Global UI & Content */}
        <div className="relative z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Navbar isDark={isDark} toggleTheme={() => setIsDark((prev) => !prev)} />
          </div>

          {/* Global Theme Toggle */}


          <div className="pointer-events-auto">
            <Routes>
              <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
              <Route path="/services" element={<ServicesPage isDark={isDark} />} />
              <Route path="/blogs" element={<BlogsPage isDark={isDark} />} />
              <Route path="/careers" element={<CareersPage isDark={isDark} />} />
              <Route path="/about" element={<AboutPage isDark={isDark} />} />
              <Route path="/contact" element={<Contact isDark={isDark} />} />
            </Routes>
          </div>
          <div className="pointer-events-auto">
            <Footer isDark={isDark} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
