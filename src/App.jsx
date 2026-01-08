import StickyMenu from "./components/ui/StickyMenu";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Career from "./components/pages/Career";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Footer from "./components/ui/Footer";
import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/about";
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <StickyMenu isDark={isDark} toggleTheme={toggleTheme} />
      <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white">Loading Experience...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
      {!isHomePage && <Footer isDark={isDark} />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
