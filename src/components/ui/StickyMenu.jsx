import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GWPLogo from './GWPLogo';

const Navbar = ({ isDark, toggleTheme }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinksLeft = ['Home', 'About', 'Services'];
    const navLinksRight = ['Blogs', 'Careers', 'Contact'];
    const allLinks = [...navLinksLeft, ...navLinksRight];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed top-0 z-50 w-full border-b shadow-lg transition-colors duration-300 ${isDark ? 'bg-transparent border-white/10' : 'bg-transparent border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-28">

                    {/* Left Navigation Links (Desktop) */}
                    <div className="hidden lg:flex flex-1 justify-end items-center lg:space-x-8">
                        {navLinksLeft.map((item) => {
                            let linkPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === linkPath;

                            return (
                                <Link
                                    key={item}
                                    to={linkPath}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className={`px-3 py-2 text-lg font-semibold tracking-wide transition-all duration-300 border-b-2 ${isActive
                                        ? 'text-blue-400 border-blue-400'
                                        : isDark ? 'text-white/90 hover:text-blue-400 border-transparent hover:border-blue-400' : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                                        }`}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Centered Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center relative -top-2">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="transform transition-transform duration-200"
                        >
                            <GWPLogo isDark={isDark} />
                        </Link>
                    </div>

                    {/* Right Navigation Links (Desktop) */}
                    <div className="hidden lg:flex flex-1 items-center ml-3 justify-between">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                            {navLinksRight.map((item) => {
                                let itemPath = `/${item.toLowerCase()}`;
                                const isActive = location.pathname === itemPath;

                                return (
                                    <Link
                                        key={item}
                                        to={itemPath}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className={`px-3 py-2 text-lg font-semibold tracking-wide transition-all duration-300 border-b-2 ${isActive
                                            ? 'text-blue-400 border-blue-400'
                                            : isDark ? 'text-white/90 hover:text-blue-400 border-transparent hover:border-blue-400' : 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600'
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Theme Toggle Button (Desktop) */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDark ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors duration-300 ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-800'}`}
                            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDark ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-md ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-200'}`}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden border-t overflow-hidden ${isDark ? 'bg-black/95 border-white/10' : 'bg-white/95 border-gray-200'}`}
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                            {allLinks.map((item) => {
                                let linkPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                const isActive = location.pathname === linkPath;

                                return (
                                    <Link
                                        key={item}
                                        to={linkPath}
                                        onClick={() => {
                                            setIsOpen(false);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`text-lg font-medium tracking-wide transition-colors ${isActive
                                            ? 'text-blue-400'
                                            : isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-black'
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
