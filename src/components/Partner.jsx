import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Partner = ({ isDark }) => {
    return (
        <section className={`relative py-24 px-8 md:px-16 ${isDark ? 'bg-black' : ''}`}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-cyan-600'}`}>Ladder7 Nextstep Solutions</h2>
                    <h3 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ladder7 Nextstep Solutions</h3>
                    <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Ladder7 Nextstep Solutions is a training academy based in India focused on enhancing the technical skills of their attendees. Through our partnership, we are able to provide opportunities for real-world experience to students, and also provide the companies we serve with top talent.
                    </p>
                    <button className="px-8 py-3 rounded-full font-semibold transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50">
                        Learn More
                    </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center h-[500px]">
                    <ThreeScene />
                </div>
            </div>

        </section >
    );
};

export default Partner;
