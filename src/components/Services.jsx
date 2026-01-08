import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Database, Lightbulb, Palette } from 'lucide-react';

const servicesData = [
    {
        id: 'app-engineering',
        title: "Application Services & Engineering",
        description: "Building scalable, high-performance applications tailored to your business needs. We specialize in full-cycle development, legacy modernization, and cloud-native architecture.",
        icon: <Code size={32} />,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 'data-ai',
        title: "Data, AI & Automation",
        description: "Unlock the power of your data with advanced analytics and AI-driven insights. We implement machine learning models and automation workflows to optimize operations.",
        icon: <Database size={32} />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 'strategy',
        title: "Strategy & Transformation Consulting",
        description: "Navigating digital change with confidence. Our experts provide strategic roadmaps, technology assessment, and transformation frameworks to drive growth.",
        icon: <Lightbulb size={32} />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 'creative',
        title: "Creative & Experience Services",
        description: "Designing intuitive and engaging digital experiences. From UI/UX design to brand identity, we ensure your digital presence resonates with your audience.",
        icon: <Palette size={32} />,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    }
];

const Services = ({ isDark }) => {
    // Click to expand interaction
    // Symmetric logic: Left column items expand Left, Right column items expand Right.
    const [activeId, setActiveId] = useState(null);

    const handleServiceClick = (id) => {
        setActiveId(prev => (prev === id ? null : id));
    };

    // Determine layout based on which item is active
    const activeIndex = servicesData.findIndex(s => s.id === activeId);
    // Indices 0, 2 are Left. Indices 1, 3 are Right.
    // If a Right-side item (index 1 or 3) is active, we flip the columns so the expanded item is on the Right (col 2).
    const isRightSideActive = activeIndex !== -1 && activeIndex % 2 !== 0;

    return (
        <section className={`relative py-24 px-4 md:px-8 overflow-hidden ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="max-w-7xl mx-auto h-[600px]">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 h-[10%]"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
                    <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Click on a service to explore details.
                    </p>
                </motion.div>

                <div className="relative w-full h-[85%] bg-transparent flex gap-4 transition-all duration-500">
                    <div
                        className="w-full h-full grid gap-4 transition-all duration-500 ease-in-out"
                        style={{
                            display: 'grid',
                            // If active:
                            // Right Side Active -> '1fr 3fr' (Left Small, Right Big)
                            // Left Side Active -> '3fr 1fr' (Left Big, Right Small)
                            gridTemplateColumns: activeId
                                ? (isRightSideActive ? '1fr 3fr' : '3fr 1fr')
                                : '1fr 1fr',
                            gridTemplateRows: activeId ? '1fr 1fr 1fr' : '1fr 1fr',
                        }}
                    >
                        {servicesData.map((service) => {
                            const isActive = activeId === service.id;
                            const isAnyActive = activeId !== null;

                            let gridStyle = {};

                            if (!isAnyActive) {
                                // Default 2x2
                                gridStyle = { gridColumn: 'auto', gridRow: 'auto' };
                            } else if (isActive) {
                                // The Expanded Card
                                // If Right Side Active -> It goes to Col 2.
                                // If Left Side Active -> It goes to Col 1.
                                gridStyle = {
                                    gridColumn: isRightSideActive ? '2 / span 1' : '1 / span 1',
                                    gridRow: '1 / span 3'
                                };
                            } else {
                                // The Collapsed Cards
                                // If Right Side Active -> They go to Col 1.
                                // If Left Side Active -> They go to Col 2.
                                gridStyle = {
                                    gridColumn: isRightSideActive ? '1 / span 1' : '2 / span 1',
                                    gridRow: 'auto'
                                };
                            }

                            return (
                                <motion.div
                                    key={service.id}
                                    layout
                                    onClick={() => handleServiceClick(service.id)}
                                    className={`relative rounded-3xl overflow-hidden cursor-pointer group border transition-colors duration-300 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
                                        }`}
                                    style={gridStyle}
                                >
                                    {/* Background Image */}
                                    <div className={`absolute inset-0 transition-all duration-500 ${isActive
                                        ? 'opacity-100'
                                        : isAnyActive
                                            ? 'opacity-0'
                                            : 'opacity-100'
                                        }`}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/30'}`} />
                                    </div>

                                    {/* Sidebar Background for stacked items */}
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${!isActive && isAnyActive ? 'opacity-100' : 'opacity-0'
                                        } ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`} />

                                    {/* Content Content */}
                                    <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between">
                                        {/* Icon & Title */}
                                        <div className={`transition-all duration-300 ${!isActive && isAnyActive ? 'flex items-center gap-3' : ''}`}>
                                            <div className={`p-3 rounded-xl w-fit mb-4 ${isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-cyan-100 text-cyan-600'
                                                } ${!isActive && isAnyActive ? 'mb-0 scale-75' : ''}`}>
                                                {service.icon}
                                            </div>

                                            <h3 className={`font-bold transition-all duration-300 ${isActive ? 'text-4xl mb-4' :
                                                isAnyActive ? 'text-sm line-clamp-2' : 'text-2xl'
                                                } ${(isDark || isActive || !isAnyActive) ? 'text-white' : 'text-gray-900'}`}>
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Description & Button */}
                                        <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-white/90 drop-shadow-md'}`}>
                                                {service.description}
                                            </p>
                                            <button className={`flex items-center gap-2 font-semibold ${isDark ? 'text-blue-400' : 'text-cyan-600'
                                                } hover:gap-4 transition-all`}>
                                                Explore Service <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
