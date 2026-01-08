import React from 'react';
import { motion } from 'framer-motion';

const Intro = ({ isDark }) => {
    return (
        <section className={`relative py-24 px-8 md:px-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300' : 'text-cyan-600'}`}>
                        Your Partner in Digital Innovation
                    </h2>
                    <p className={`text-lg md:text-xl leading-relaxed max-w-4xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Global Web Production is your digital solutions partner specializing in web and mobile development, UI/UX design, branding, business transformation, and AI-powered automation. We combine creative expertise with strategic insight to deliver scalable, results-driven solutions—from building intuitive platforms and compelling brand identities to optimizing business processes and enabling intelligent, data-driven decisions. Our mission is to help organizations innovate, grow, and thrive in a fast-changing digital world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;
