import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InfiniteCarousel = ({ isDark }) => {
    const scrollRef = useRef(null);

    const carouselImages = [
        {
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            title: "Web Development"
        },
        {
            url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
            title: "Coding"
        },
        {
            url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            title: "Programming"
        },
        {
            url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            title: "Software Development"
        },
        {
            url: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=800",
            title: "Tech Innovation"
        },
        {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            title: "Digital Solutions"
        }
    ];

    // Duplicate for seamless loop
    const duplicatedImages = [...carouselImages, ...carouselImages, ...carouselImages];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 1; // pixels per frame
        const cardWidth = 320; // width + gap
        const totalWidth = cardWidth * carouselImages.length;

        const scroll = () => {
            scrollPosition += scrollSpeed;

            // Reset when we've scrolled through one set
            if (scrollPosition >= totalWidth) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-black/80 to-transparent' : 'from-sky-50/80 to-transparent'}`} />
            <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-black/80 to-transparent' : 'from-sky-50/80 to-transparent'}`} />

            {/* Scrolling container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden h-full items-center py-8 px-4"
                style={{ scrollBehavior: 'auto' }}
            >
                {duplicatedImages.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex-shrink-0 w-[280px] h-[200px] rounded-2xl overflow-hidden border-2 shadow-xl transition-transform hover:scale-105 hover:z-20
                            ${isDark ? 'border-white/10 shadow-blue-500/20' : 'border-white shadow-blue-500/30'}`}
                    >
                        <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
