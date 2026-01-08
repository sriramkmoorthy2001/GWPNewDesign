import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const Coverflow3DCarousel = ({ items, isDark }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Background images for each service category
    const backgroundImages = [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Code/Programming
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", // AI/Data
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Strategy/Analytics
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"  // Creative/Design
    ];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    // Auto-rotate every 3 seconds
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % items.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, items.length]);

    const getCardStyle = (index) => {
        const total = items.length;
        let relativeIndex = (index - activeIndex + total) % total;

        // Stacked Carousel Layout: 1 Front Center, Half Left, Half Right, 1 Hidden
        if (relativeIndex === 0) {
            // CENTER FRONT (Active) - Large, fully visible, prominent
            return {
                zIndex: 30,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                x: 0,
                y: 0,
                z: 100,
                pointerEvents: 'auto'
            };
        } else if (relativeIndex === 1) {
            // RIGHT - Smaller, tucked behind on right, overlapping
            return {
                zIndex: 10,
                opacity: 0.7,
                scale: 0.8,
                rotateY: -15,
                x: '30%',
                y: 0,
                z: -50,
                pointerEvents: 'none'
            };
        } else if (relativeIndex === 2) {
            // BACK (Hidden) - Completely hidden
            return {
                zIndex: 0,
                opacity: 0,
                scale: 0.6,
                rotateY: 0,
                x: 0,
                y: 0,
                z: -200,
                pointerEvents: 'none'
            };
        } else {
            // LEFT - Smaller, tucked behind on left, overlapping
            return {
                zIndex: 10,
                opacity: 0.7,
                scale: 0.8,
                rotateY: 15,
                x: '-30%',
                y: 0,
                z: -50,
                pointerEvents: 'none'
            };
        }
    };

    return (
        <div
            className="relative w-full py-6 perspective-1000 min-h-[800px] flex flex-col items-center gap-0" // Reduced py
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 3D Container - Explicit height to hold the cards */}
            <div className="relative w-full max-w-5xl mx-auto h-[680px] flex justify-center items-center transform-style-3d mt-4"> {/* Reduced mt */}
                {items.map((item, index) => {
                    const style = getCardStyle(index);

                    return (
                        <motion.div
                            key={index}
                            animate={style}
                            transition={{
                                duration: 0.6,
                                ease: "anticipate"
                            }}
                            className={`absolute w-[360px] md:w-[400px] h-[640px] rounded-[2.5rem] 
                                flex flex-col overflow-hidden backdrop-blur-xl border transition-colors duration-500 relative
                                ${isDark
                                    ? 'border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]'
                                    : 'border-white/60 shadow-[0_25px_60px_rgba(59,130,246,0.2)]'
                                }
                            `}
                        >
                            {/* Background Image with Heavy Fade */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={backgroundImages[index % backgroundImages.length]}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                {/* Heavy fade overlay for text visibility */}
                                <div className={`absolute inset-0 ${isDark
                                    ? 'bg-gradient-to-b from-black/85 via-black/90 to-black/95'
                                    : 'bg-gradient-to-b from-white/90 via-white/95 to-white/98'
                                    }`} />
                            </div>
                            {/* Card Content - Relative to appear above background */}
                            {/* Header */}
                            <div className={`shrink-0 h-[28%] relative z-10 flex flex-col items-center justify-center p-6 text-center`}>
                                <div className={`p-4 rounded-2xl shadow-lg border mb-3 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-white'}`}>
                                    {React.cloneElement(item.icon, {
                                        className: `w-10 h-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`
                                    })}
                                </div>
                                <h3 className={`text-xl font-bold leading-tight px-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {item.title}
                                </h3>
                            </div>

                            {/* Body: Full List */}
                            <div className="flex-1 p-8 overflow-y-auto no-scrollbar relative z-10">
                                <ul className="space-y-4">
                                    {item.items.map((subItem, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-1.5 min-w-[6px] h-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-500'}`} />
                                            <span className={`text-sm font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {subItem}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* External Controls - Explicitly below the container with small margin */}
            <div className="flex items-center gap-8 z-50 mt-4"> {/* mt-4 is the "small gap" */}
                <button
                    onClick={handlePrev}
                    className={`p-4 rounded-full backdrop-blur-md border transition-all hover:scale-110 active:scale-95 duration-300 
                        ${isDark
                            ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                            : 'bg-white border-gray-200 text-gray-700 shadow-lg hover:border-blue-300 hover:text-blue-600'
                        }`}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="flex gap-3">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 
                                ${i === activeIndex
                                    ? (isDark ? 'w-8 bg-blue-500' : 'w-8 bg-blue-600')
                                    : (isDark ? 'w-2 bg-white/20' : 'w-2 bg-gray-300')
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className={`p-4 rounded-full backdrop-blur-md border transition-all hover:scale-110 active:scale-95 duration-300 
                        ${isDark
                            ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                            : 'bg-white border-gray-200 text-gray-700 shadow-lg hover:border-blue-300 hover:text-blue-600'
                        }`}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Coverflow3DCarousel;
