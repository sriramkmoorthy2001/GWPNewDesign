import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ setView, currentView }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-links-wrapper">
                    <button
                        onClick={() => setView('home')}
                        className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                    >Home</button>
                    <button
                        onClick={() => setView('about')}
                        className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
                    >About Us</button>
                    <button
                        onClick={() => setView('services')}
                        className={`nav-link ${currentView === 'services' ? 'active' : ''}`}
                    >Services</button>
                    <button
                        onClick={() => setView('blogs')}
                        className={`nav-link ${currentView === 'blogs' || currentView === 'blog-detail' ? 'active' : ''}`}
                    >Blogs</button>
                    <button
                        onClick={() => setView('careers')}
                        className={`nav-link ${currentView === 'careers' ? 'active' : ''}`}
                    >Careers</button>
                    <button
                        onClick={() => setView('contact')}
                        className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}
                    >Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
