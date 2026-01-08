import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CinematicOverlayLight = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const splitText = (text) => {
        return text.split('').map((char, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.03 }}
                className="inline-block"
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ));
    };

    return (
        <div className="relative min-h-screen pointer-events-none z-10 flex flex-col justify-center">
            <div className="container mx-auto px-8 md:px-16 h-full flex flex-col justify-between pt-40 pb-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-between items-start"
                >
                    <div className="text-xs tracking-widest text-gray-700 font-medium">
                        GLOBAL WEB PRODUCTION
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
                            <span className="text-black">
                                {splitText('DIGITAL')}
                            </span>
                            <br />
                            <span className="text-cyan-400">
                                {splitText('EXCELLENCE')}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="text-base md:text-lg text-gray-600 max-w-xl mb-10 leading-relaxed">
                        Empowering businesses with cutting-edge AI solutions, full-stack development,
                        and cloud infrastructure. From automation to deployment, we engineer digital ecosystems that scale globally.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="pointer-events-auto px-8 py-3 border-2 border-cyan-400 text-cyan-500 font-medium rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm tracking-wide">
                        EXPLORE OUR WORK
                    </motion.button>
                </div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="flex justify-between items-end text-xs text-gray-500">
                    <div className="space-y-1">
                        <div>Scroll to discover</div>
                        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent mx-auto"></div>
                    </div>
                    <div className="text-right space-y-1">
                        <div>Engineering the future</div>
                        <div>of digital innovation</div>
                        <div>— globally</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CinematicOverlayLight;
