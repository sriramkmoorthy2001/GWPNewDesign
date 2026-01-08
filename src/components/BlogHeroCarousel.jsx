import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "AI & Machine Learning",
        description: "Discover the future of intelligent automation",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Web Development",
        description: "Building the next generation of digital experiences",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Cloud & DevOps",
        description: "Scaling infrastructure for modern applications",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Data Science",
        description: "Transforming data into actionable insights",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
];

const BlogHeroCarousel = ({ isDark }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + slides.length) % slides.length);
    };

    // Auto-advance every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    // Animation Variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const textVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
        exit: { y: -50, opacity: 0, transition: { duration: 0.2 } }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white">
            <AnimatePresence initial={false} custom={direction}>
                {/* Background Image */}
                <motion.img
                    key={currentIndex}
                    src={slides[currentIndex].img}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
            </AnimatePresence>

            {/* Dark overlay for better text readability - NOW OUTSIDE AnimatePresence */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-[1]" />

            {/* Text Overlay (Centered) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 pt-32">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-cyan-400 font-light">
                            {slides[currentIndex].description}
                        </p>
                        <h1 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter drop-shadow-2xl">
                            {slides[currentIndex].title}
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-10 right-10 flex gap-4 z-20">
                <button
                    onClick={() => paginate(-1)}
                    className="p-4 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md transition-all border border-white/20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="p-4 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md transition-all border border-white/20"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-10 left-10 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-12 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div >
    );
};

export default BlogHeroCarousel;
