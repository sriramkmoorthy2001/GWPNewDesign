import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Slideshow Component
const Slideshow = ({ images, interval = 3000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-2xl bg-gray-200">
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Slide ${index}`}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    );
};

const Solutions = ({ isDark }) => {
    // Using placeholders as image generation is currently rate-limited.
    const enterpriseImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Business architecture
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // Tech team
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"  // Meeting
    ];

    const smbImages = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // Collaborative team
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop", // Meeting/Result
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"  // Office
    ];

    return (
        <section className="relative py-24 px-8 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Enterprise Solutions - Text Left, Image Right */}
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`p-8 rounded-2xl backdrop-blur-md border h-full flex flex-col justify-center ${isDark
                            ? 'bg-white/5 border-white/10'
                            : 'bg-white/60 border-gray-200'
                            }`}
                    >
                        <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Enterprise Solutions</h3>
                        <p className={`mb-8 leading-relaxed text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Our Enterprise Solutions empower organizations to streamline operations, enhance scalability, and drive innovation through a blend of advanced technology and strategic insight. From custom enterprise application development and high-performance, SEO-optimized enterprise website builds to CRM implementation, AI-driven automation, data analytics, and cloud transformation, we deliver solutions tailored to complex business needs. We also support change management, process optimization, and enterprise-grade cybersecurity, ensuring every solution we deploy is secure, compliant, and future-ready.
                        </p>
                        <div className="flex gap-4">
                            <button className={`px-6 py-3 rounded-full font-semibold transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-cyan-500 hover:bg-cyan-600 text-white'
                                }`}>
                                Learn More
                            </button>
                            <button className={`px-6 py-3 rounded-full font-semibold border transition-colors ${isDark ? 'border-white/30 hover:bg-white/10 text-white' : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                                }`}>
                                Contact Us
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[300px] md:h-full min-h-[500px] shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <Slideshow images={enterpriseImages} interval={3000} />
                    </motion.div>
                </div>

                {/* SMB Solutions - Image Left, Text Right */}
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[300px] md:h-full min-h-[500px] shadow-2xl rounded-2xl overflow-hidden order-2 md:order-1"
                    >
                        <Slideshow images={smbImages} interval={3000} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`p-8 rounded-2xl backdrop-blur-md border h-full flex flex-col justify-center order-1 md:order-2 ${isDark
                            ? 'bg-white/5 border-white/10'
                            : 'bg-white/60 border-gray-200'
                            }`}
                    >
                        <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Small to Medium Business</h3>
                        <p className={`mb-8 leading-relaxed text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Our Small and Medium Business Solutions are designed to help growing companies establish a strong digital presence, attract customers, and scale efficiently. From SEO-optimized website design and e-commerce development to cost-effective digital marketing and branding services, we deliver high-impact results without the enterprise-level complexity. Our team also implements CRM systems, AI-powered marketing automation, and streamlined workflows to boost productivity and customer engagement.
                        </p>
                        <div className="flex gap-4">
                            <button className={`px-6 py-3 rounded-full font-semibold transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-cyan-500 hover:bg-cyan-600 text-white'
                                }`}>
                                Learn More
                            </button>
                            <button className={`px-6 py-3 rounded-full font-semibold border transition-colors ${isDark ? 'border-white/30 hover:bg-white/10 text-white' : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                                }`}>
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Solutions;
