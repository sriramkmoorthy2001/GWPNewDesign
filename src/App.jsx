import React from 'react';
import { Canvas } from '@react-three/fiber';
import GlobeScene from './components/GlobeScene';
import Navbar from './components/Navbar';
import LogoWall from './components/LogoWall';
import StatsSection from './components/StatsSection';
import Capabilities from './components/Capabilities';
import ServicesGrid from './components/ServicesGrid';
import Insights from './components/Insights';
import TrainingSection from './components/TrainingSection';
import AboutHero from './components/AboutHero';
import MissionSection from './components/MissionSection';
import ManagementSection from './components/ManagementSection';
import BlogHero from './components/BlogHero';
import BlogShelf from './components/BlogShelf';
import BlogPostDetails from './components/BlogPostDetails';
import Careers from './components/Careers';
import Services from './components/Services';
import Contact from './components/Contact';
import StoryCanvas from './components/ThreeStory/StoryCanvas';
import { useState } from 'react';

function App() {
    const [view, setView] = useState('home'); // 'home', 'about', 'blogs', or 'blog-detail'
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogSelect = (blog) => {
        setSelectedBlog(blog);
        setView('blog-detail');
        window.scrollTo(0, 0);
    };
    return (
        <div className="main-wrapper">
            <Navbar setView={setView} currentView={view} />

            {view === 'home' ? (
                <>
                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="globe-container">
                            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                                <GlobeScene />
                            </Canvas>
                        </div>

                        <div className="hero-content">
                            <h1 className="hero-title">GLOBAL WEB<br />PRODUCTION</h1>
                            <p className="hero-subtitle">Redefining Digital Immersiveness</p>
                        </div>

                        <div className="scroll-indicator">
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <span>Explore Our World</span>
                        </div>
                    </section>

                    {/* Content Flow */}
                    {/* Content Flow replaced by 3D Storytelling Experience */}
                    <div className="story-mode-container" style={{ position: 'relative', zIndex: 10 }}>
                        <StoryCanvas />
                    </div>
                </>
            ) : view === 'about' ? (
                <div className="about-page-container" style={{ paddingTop: '100px' }}>
                    <AboutHero />
                    <MissionSection />
                    <ManagementSection />
                </div>
            ) : view === 'blogs' ? (
                <div className="blogs-page-container" style={{ paddingTop: '100px', position: 'relative' }}>
                    <BlogHero onReadArticle={handleBlogSelect} />
                    <BlogShelf onReadEntry={handleBlogSelect} />
                </div>
            ) : view === 'careers' ? (
                <div className="careers-page-container" style={{ paddingTop: '100px' }}>
                    <Careers />
                </div>
            ) : view === 'services' ? (
                <div className="services-page-container" style={{ paddingTop: '100px' }}>
                    <Services />
                </div>
            ) : view === 'contact' ? (
                <div className="contact-page-container" style={{ paddingTop: '100px' }}>
                    <Contact />
                </div>
            ) : (
                <div className="blog-detail-container" style={{ paddingTop: '100px' }}>
                    <BlogPostDetails blog={selectedBlog} setView={setView} />
                </div>
            )}

            {/* Footer */}
            <footer className="footer-v2">
                <div className="container footer-inner">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <h2 className="footer-logo">GWP</h2>
                            <p className="footer-tagline">Global Web Production. <br />A global strategy consulting firm.</p>
                        </div>
                        <div className="footer-links-grid">
                            <div className="footer-col">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#engineering">Engineering</a></li>
                                    <li><a href="#data">Data & AI</a></li>
                                    <li><a href="#strategy">Strategy</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Social</h4>
                                <ul>
                                    <li><a href="#linkedin">LinkedIn</a></li>
                                    <li><a href="#twitter">Twitter</a></li>
                                    <li><a href="#behance">Behance</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Global Web Production. All rights reserved.</p>
                        <div className="footer-legal">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
