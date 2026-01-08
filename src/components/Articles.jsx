import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const articlesData = [
    {
        id: 1,
        title: "Transforming U.S. Real Estate",
        fullTitle: "Transforming U.S. Real Estate with an AI Chatbot Agent",
        excerpt: "Modernizing client interactions for digital-first home buyers with intelligent agents.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        tag: "AI"
    },
    {
        id: 2,
        title: "AI-Powered Content Optimizer",
        fullTitle: "AI-Powered Web Content Optimizer: Enhancing UX",
        excerpt: "Balancing technical SEO requirements with engaging, human-centric content.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tag: "UX"
    },
    {
        id: 3,
        title: "Website Performance",
        fullTitle: "The Importance of Website Performance",
        excerpt: "Why page load time (PLT) is the most critical factor for user retention.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        tag: "PERF"
    },
    {
        id: 4,
        title: "SDLC Basics",
        fullTitle: "The Basics of the Software Development Lifecycle",
        excerpt: "A structured approach to efficient and high-quality software creation.",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2066&auto=format&fit=crop",
        tag: "DEV"
    },
    {
        id: 5,
        title: "Web Dev Programs",
        fullTitle: "Top Web Development Programs",
        excerpt: "Navigating the dynamic field of web development education and growth.",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
        tag: "EDU"
    }
];

const Articles = ({ isDark }) => {
    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHoveringContainer, setIsHoveringContainer] = useState(false);

    // Auto-play logic: Advance every 2 seconds, unless hovering
    useEffect(() => {
        if (isHoveringContainer) return; // Pause on hover

        const timer = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex, isHoveringContainer]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % articlesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + articlesData.length) % articlesData.length);
    };

    // Determine the 3 visible slides
    const getVisibleArticles = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % articlesData.length;
            visible.push(articlesData[index]);
        }
        return visible;
    };

    const visibleItems = getVisibleArticles();

    return (
        <section className={`relative py-24 px-4 md:px-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Latest Insights</h2>
                </div>

                {/* Carousel Container with Buttons on Sides */}
                <div
                    className="relative flex justify-center items-center gap-6 h-[500px] px-2"
                    onMouseEnter={() => setIsHoveringContainer(true)}
                    onMouseLeave={() => setIsHoveringContainer(false)}
                >
                    {/* Left Button */}
                    <button
                        onClick={handlePrev}
                        className={`absolute left-0 md:left-4 z-20 p-3 rounded-full border transition-all ${isDark
                            ? 'bg-black/50 border-white/20 hover:bg-white/20 text-white'
                            : 'bg-white/50 border-gray-200 hover:bg-gray-100 text-gray-900'
                            }`}
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((article) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }} // Smoother translation
                                className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 ease-out group ${isDark ? 'bg-gray-900 border border-white/10' : 'bg-white border border-gray-200'
                                    }`}
                                // Default Dimensions
                                style={{
                                    width: "300px",
                                    height: "380px",
                                    flexShrink: 0
                                }}
                                // Hover Interaction: Expand
                                whileHover={{
                                    width: "380px",
                                    height: "480px",
                                    zIndex: 50,
                                    transition: { duration: 0.4, ease: "easeOut" } // Smoother expand
                                }}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className={`absolute inset-0 transition-opacity ${isDark ? 'bg-black/50 group-hover:bg-black/30' : 'bg-black/20 group-hover:bg-black/10'}`} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                    {/* Tag */}
                                    <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {article.tag}
                                    </span>

                                    {/* Default State: Just styled title */}
                                    <h3 className="text-xl font-bold text-white group-hover:hidden">
                                        {article.title}
                                    </h3>

                                    {/* Hover State: Full info, replaces title */}
                                    <div className="hidden group-hover:block animate-fadeIn">
                                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                            {article.fullTitle}
                                        </h3>
                                        <p className="text-sm text-gray-200 mb-4 line-clamp-4">
                                            {article.excerpt}
                                        </p>
                                        <button className="flex items-center gap-2 text-white font-semibold hover:underline">
                                            Read Article <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Right Button */}
                    <button
                        onClick={handleNext}
                        className={`absolute right-0 md:right-4 z-20 p-3 rounded-full border transition-all ${isDark
                            ? 'bg-black/50 border-white/20 hover:bg-white/20 text-white'
                            : 'bg-white/50 border-gray-200 hover:bg-gray-100 text-gray-900'
                            }`}
                        aria-label="Next Slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                    {/* Pagination Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {articlesData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? (isDark ? 'bg-blue-400 w-6' : 'bg-cyan-600 w-6')
                                    : (isDark ? 'bg-white/20 hover:bg-white/40' : 'bg-gray-300 hover:bg-gray-400')
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles;
