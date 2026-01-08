import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Lightbulb, Palette, ArrowRight } from 'lucide-react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import ServiceNetworkScene from '../components/ServiceNetworkScene';
import Carousel3D from '../components/Carousel3D';

const servicesData = [
    {
        title: "Application Services & Engineering",
        icon: <Code2 className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
        description: "Building robust, scalable applications that drive business growth.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
        items: [
            "Application Support Services",
            "Enterprise Platform Services",
            "CRM Implementation",
            "Software Product Development",
            "Quality Engineering & Assurance",
            "Engineering Research & Development",
            "Business Process Services"
        ]
    },
    {
        title: "Data, AI & Automation",
        icon: <Database className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />,
        description: "Unlocking the power of data and intelligent automation.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
        items: [
            "Data & AI",
            "Agentic AI Solutions",
            "Intelligent Business Automations",
            "GWP Insights",
            "Experimentation & Optimization"
        ]
    },
    {
        title: "Strategy & Transformation Consulting",
        icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />,
        description: "Guiding digital transformation with strategic insights.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
        items: [
            "Technology Consulting",
            "Digital Strategy",
            "Sustainability & Resilience"
        ]
    },
    {
        title: "Creative & Experience Services",
        icon: <Palette className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />,
        description: "Designing immersive experiences that captivate audiences.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
        items: [
            "Experience Studio",
            "Content Services",
            "Branding",
            "Games Production & Development",
            "Accessibility"
        ]
    }
];

const TypewriterEffect = ({ words, isDark }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);
    const [blink, setBlink] = React.useState(true);

    // Blinking cursor
    React.useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    React.useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </span>
    );
};

const ServicesPage = ({ isDark }) => {
    return (
        <div className={`min-h-screen pt-32 relative ${isDark ? 'bg-black text-gray-200' : 'bg-sky-75 text-gray-800'}`}>

            {/* Animated Background Elements - 3D Network (Restricted to Hero) */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
                <Canvas camera={{ position: [0, 0, 12], fov: 50 }} className="w-full h-full">
                    <Suspense fallback={null}>
                        <ServiceNetworkScene isDark={isDark} />
                    </Suspense>
                </Canvas>
                {/* Smoother bottom fade for seamless transition */}
                <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t ${isDark ? 'from-black via-black/60 to-transparent' : 'from-sky-75 via-sky-75/60 to-transparent'}`} />
            </div>

            {/* Header - Centered over the 600px background */}
            <div className="h-[600px] flex flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 -mt-32 pointer-events-none">
                <div className="pointer-events-auto"> {/* Restore pointer events for text selection if needed */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`text-4xl md:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                        We Deliver <br className="md:hidden" />
                        <TypewriterEffect
                            words={["Excellence.", "Innovation.", "Transformation.", "AI Solutions.", "Future Tech."]}
                            isDark={isDark}
                        />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Comprehensive digital solutions engineered to transform your business. From AI-driven insights to immersive creative experiences, we deliver excellence at every scale.
                    </motion.p>
                </div>
            </div>

            {/* Services - 3D Coverflow Carousel */}
            <div className="relative pb-32 pt-1"> {/* Adjusted to start after hero bottom with minimal gap */}
                {/* Instructional text for interactivity */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className={`text-center mb-8 text-sm font-medium tracking-widest uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                >
                    Swipe to Explore
                </motion.div>

                <Carousel3D items={servicesData} isDark={isDark} />
            </div>
        </div>
    );
};

export default ServicesPage;
