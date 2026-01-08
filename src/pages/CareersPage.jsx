import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, ChevronRight, Users, Globe, Sparkles } from 'lucide-react';
import CylinderCarousel3D from '../components/CylinderCarousel3D';

const jobListings = {
    India: [
        { title: "Technical Project Manager - AEM Lead", location: "Trivandrum, Kerala", type: "Remote" },
        { title: "WordPress Developer", location: "Trivandrum, Kerala", type: "Hybrid" },
        { title: "UI/UX Designer", location: "Trivandrum, Kerala", type: "Hybrid" },
        { title: "HR Executive", location: "Trivandrum, Kerala", type: "Onsite" },
        { title: "Development QA Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "Full Stack Developer (MERN) Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "HR Associate Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "WordPress Developer Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "Full Stack Developer (AEM) Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "Data Science Associate Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "Digital Marketing Associate Intern", location: "Trivandrum, Kerala", type: "Internship" },
        { title: "Operations Executive Intern", location: "Trivandrum, Kerala", type: "Internship" }
    ],
    USA: [
        { title: "CRM Executive", location: "USA", type: "Remote" },
        { title: "Graphic Designer-Intern", location: "USA", type: "Remote" }
    ]
};

// Animated Hero Text Component with Continuous Ray Globe Sweep
const AnimatedHeroText = ({ isDark }) => {
    const [showFirst, setShowFirst] = useState(true);
    const [globePosition, setGlobePosition] = useState(-200);
    const [isAnimating, setIsAnimating] = useState(false);

    React.useEffect(() => {
        // Start first animation after 4 seconds (let first text be visible)
        const startTimer = setTimeout(() => {
            animateGlobe();
        }, 2000);

        return () => clearTimeout(startTimer);
    }, []);

    const animateGlobe = () => {
        setIsAnimating(true);
        setGlobePosition(-200);

        let hasChangedText = false; // Flag to ensure text changes only once

        // Animate globe from left to right
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Move from -200 to 200
            const newPosition = -200 + (progress * 400);
            setGlobePosition(newPosition);

            // Switch text when globe is at center (50% progress) - only once
            if (progress >= 0.5 && !hasChangedText) {
                setShowFirst(prev => !prev);
                hasChangedText = true;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
                // Wait 4 seconds before next globe animation (let changed text be visible longer)
                setTimeout(() => {
                    animateGlobe();
                }, 2000);
            }
        };

        requestAnimationFrame(animate);
    };

    // Generate rays in a circular pattern (globe shape)
    const rays = [...Array(40)].map((_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        return {
            id: i,
            angle: angle
        };
    });

    return (
        <div className="relative min-h-[200px] flex items-center justify-center overflow-hidden">
            {/* Ray Globe Sweep Effect */}
            <div
                className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center"
                style={{
                    transform: `translateX(${globePosition}%)`,
                    transition: 'none'
                }}
            >
                {/* Globe made of Rays */}
                <div className="relative w-64 h-64">
                    {/* Center glow */}
                    <div
                        className={`absolute inset-0 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'}`}
                        style={{
                            boxShadow: isDark
                                ? '0 0 100px 50px rgba(34, 211, 238, 0.7), 0 0 150px 80px rgba(34, 211, 238, 0.4)'
                                : '0 0 100px 50px rgba(6, 182, 212, 0.7), 0 0 150px 80px rgba(6, 182, 212, 0.4)',
                            filter: 'blur(30px)',
                            opacity: 0.6
                        }}
                    />

                    {/* Rays emanating from center */}
                    {rays.map((ray) => (
                        <motion.div
                            key={ray.id}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: ray.id * 0.05,
                                ease: "easeInOut"
                            }}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                width: '6px',
                                height: '100px',
                                transform: `translate(-50%, -50%) rotate(${ray.angle}rad)`,
                                transformOrigin: 'center'
                            }}
                        >
                            <div
                                className={`w-full h-full ${isDark ? 'bg-gradient-to-t from-cyan-400 to-transparent' : 'bg-gradient-to-t from-cyan-600 to-transparent'}`}
                                style={{
                                    boxShadow: isDark
                                        ? '0 0 15px rgba(34, 211, 238, 0.9)'
                                        : '0 0 15px rgba(6, 182, 212, 0.9)'
                                }}
                            />
                        </motion.div>
                    ))}

                    {/* Rotating particles around globe */}
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                rotate: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                width: '10px',
                                height: '10px',
                                transform: `translate(-50%, -50%) translateX(${110 + (i % 3) * 20}px) rotate(${(i / 25) * 360}deg)`
                            }}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.1
                                }}
                                className={`w-full h-full rounded-full ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'}`}
                                style={{
                                    boxShadow: isDark
                                        ? '0 0 20px rgba(34, 211, 238, 1)'
                                        : '0 0 20px rgba(6, 182, 212, 1)'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Text Container with Clip Path Reveal */}
            <div className="relative z-10 w-full">
                {/* First Text */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300`}
                    style={{
                        opacity: showFirst ? 1 : 0,
                        pointerEvents: showFirst ? 'auto' : 'none'
                    }}
                >
                    <h1 className={`flex flex-col gap-2 text-4xl md:text-7xl lg:text-8xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <span>Be a part of</span>
                        <span className="inline-block py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Global Web Production
                        </span>
                    </h1>
                </div>

                {/* Second Text */}
                <div
                    className="flex items-center justify-center transition-opacity duration-300"
                    style={{
                        opacity: !showFirst ? 1 : 0,
                        pointerEvents: !showFirst ? 'auto' : 'none'
                    }}
                >
                    <h1 className={`flex flex-col gap-2 text-4xl md:text-7xl lg:text-8xl font-black text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <span>Be Part of</span>
                        <span className="inline-block py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Something Greater
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

const CareersPage = ({ isDark }) => {
    const [activeCountry, setActiveCountry] = useState('India');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredJobs = jobListings[activeCountry].filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getTypeColor = (type) => {
        switch (type) {
            case 'Remote': return isDark ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-300';
            case 'Hybrid': return isDark ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-300';
            case 'Onsite': return isDark ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-300';
            case 'Internship': return isDark ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-orange-100 text-orange-700 border-orange-300';
            default: return isDark ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    return (
        <div className={`min-h-screen pt-20 ${isDark ? 'bg-black text-gray-200' : 'bg-sky-75 text-gray-800'}`}>

            {/* Hero Section - Full Screen */}
            <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
                {/* Enhanced Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-cyan-500' : 'bg-cyan-400'}`}
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -90, 0],
                            x: [0, -50, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-blue-600' : 'bg-blue-500'}`}
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1],
                            rotate: [0, 180, 0],
                            x: [0, -30, 0],
                            y: [0, 50, 0]
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDark ? 'bg-cyan-400' : 'bg-cyan-300'}`}
                    />

                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 100 - 50, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeInOut"
                            }}
                            className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'}`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
                    {/* Animated Text Transition with Particle Ray */}
                    <AnimatedHeroText isDark={isDark} />
                </div>

                {/* Gradient fade to intro section */}
                <div className={`absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10 bg-gradient-to-b ${isDark ? 'from-transparent to-black' : 'hidden'}`} />
            </section>


            {/* Intro Section - Enhanced */}
            <section className={`relative py-20 px-6 md:px-12 overflow-hidden ${isDark ? 'bg-black' : 'bg-sky-75'}`}>
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.03, 0.05, 0.03]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500 blur-3xl"
                    />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-20">
                    {/* Accent line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-8"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                        We Create the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Future Together
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        At Global Web Production Company, we're more than a digital solutions provider — we're a vibrant community of innovators, creators, and trailblazers. In our dynamic, collaborative spaces, we bring together passionate minds from around the world to design, build, and inspire. Whether you're a developer, designer, strategist, or visionary, here you'll find the freedom to grow, create global impact, and shape the digital future. Join us and be part of a global movement where ideas thrive, careers take flight, and bold thinking leads the way.
                    </motion.p>

                    {/* Decorative dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center gap-2 mt-12"
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                                className="w-2 h-2 rounded-full bg-cyan-400"
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Future of Web Production Section */}
            <section className={`py-20 px-6 md:px-12 ${isDark ? 'bg-black' : 'bg-sky-75'}`}>
                <div className="max-w-7xl mx-auto">
                    {/* The "One Box" Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`p-8 md:p-12 rounded-[2.5rem] border ${isDark ? 'bg-white/5 border-white/10 backdrop-blur-xl' : 'bg-white/30 border-white/40 shadow-2xl backdrop-blur-2xl'}`}
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Text Content */}
                            <div>
                                <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    The Future of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Web Production</span>
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <p className={`text-xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                            Since 2022,
                                        </p>
                                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            Global Web Production Company has been a home for creators, builders, and innovators. We've reimagined what digital experiences can look like—and we're just getting started.
                                        </p>
                                    </div>

                                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Whether you're coding the next big platform, designing stunning interfaces, or managing projects, you'll be part of a team that's shaping the future of the web for businesses worldwide. With every line of code and every pixel, you'll help create experiences that connect, inspire, and drive results.
                                    </p>

                                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        We move fast, dream big, and put passion into everything we do. You'll find a team that's talented, quirky, driven, and endlessly creative — and we think you'll fit right in.
                                    </p>

                                    <div className="pt-4">
                                        <p className={`text-xl font-bold italic ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                            "Come build the future of digital with us."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Carousel (No Inner Box) */}
                            <div className="relative w-full h-full flex items-center justify-center min-h-[500px]">
                                <div className="relative z-10 w-full transform scale-90">
                                    <CylinderCarousel3D />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Be You Section - Enhanced */}
            <section className={`relative py-24 px-6 md:px-12 overflow-hidden ${isDark ? 'bg-black' : 'bg-sky-75'}`}>
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        {/* Accent line */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
                        />

                        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Be You.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                Make an Impact
                            </span>
                        </h2>

                        <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            We believe there's room for everyone at Global Web Production Company. We are all different, and each of us brings something unique that helps build the community spirit that drives our success. We celebrate diversity, we aim to always be inclusive, and we know this is a journey that constantly evolves. That's why we keep learning—through workshops, webinars, and events we organize with support from our (internal) communities and external partners. After all, we are creators, collaborators, and life-long learners.
                        </p>
                    </motion.div>

                    {/* Feature Cards - Enhanced */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Diverse Community",
                                desc: "A global team of talented individuals from all backgrounds",
                                gradient: "from-cyan-500 to-blue-600"
                            },
                            {
                                icon: Globe,
                                title: "Global Impact",
                                desc: "Work on projects that reach millions worldwide",
                                gradient: "from-blue-500 to-purple-600"
                            },
                            {
                                icon: Sparkles,
                                title: "Continuous Learning",
                                desc: "Workshops, webinars, and growth opportunities",
                                gradient: "from-purple-500 to-pink-600"
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-cyan-500/50' : 'bg-white border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-200'}`}
                            >
                                {/* Gradient glow on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Icon with gradient background */}
                                <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                <h3 className={`text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-600 transition-all duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {feature.title}
                                </h3>

                                <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {feature.desc}
                                </p>

                                {/* Bottom accent line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.gradient}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs Section - Professional Grid with Hover Blur */}
            <section className={`py-20 px-6 md:px-12 ${isDark ? 'bg-black' : 'bg-sky-75'}`}>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
                        />

                        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Open{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                Positions
                            </span>
                        </h2>
                        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Working at Global Web Production Company is all about professional challenges, personal growth, career development, and having fun. What makes working here different? We truly care about our people.
                        </p>
                    </motion.div>

                    {/* Filters Bar */}
                    <div className="mb-10">
                        <div className={`flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'}`}>
                            {/* Country Tabs */}
                            <div className="flex gap-3">
                                {['India', 'USA'].map((country) => (
                                    <button
                                        key={country}
                                        onClick={() => setActiveCountry(country)}
                                        className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${activeCountry === country
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                            : isDark ? 'bg-transparent text-gray-400 hover:text-white' : 'bg-transparent text-gray-500 hover:text-blue-600'
                                            }`}
                                    >
                                        {country}
                                    </button>
                                ))}
                            </div>

                            {/* Search Bar */}
                            <div className="flex-1 max-w-md">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search jobs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-full pl-10 pr-4 py-2.5 bg-transparent border rounded-lg outline-none transition-colors ${isDark ? 'border-white/10 text-white placeholder-gray-500 focus:border-cyan-500' : 'border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'}`}
                                    />
                                </div>
                            </div>

                            {/* Results count */}
                            <div className="text-sm text-gray-400 whitespace-nowrap">
                                <span className="text-cyan-400 font-bold">{filteredJobs.length}</span> positions
                            </div>
                        </div>
                    </div>

                    {/* Job Listings Grid with Hover Blur Effect */}
                    <style>{`
                        .job-grid:hover .job-card {
                            filter: blur(4px);
                            transform: scale(0.95);
                            opacity: 0.6;
                        }
                        .job-grid .job-card:hover {
                            filter: none !important;
                            transform: scale(1.02) !important;
                            opacity: 1 !important;
                            z-index: 10;
                            border-color: rgba(6, 182, 212, 0.5); /* cyan-500/50 */
                        }
                    `}</style>
                    {filteredJobs.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 job-grid group/grid">
                            {filteredJobs.map((job, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="job-card transition-all duration-300 ease-out"
                                >
                                    <div className={`relative h-full p-6 rounded-xl border transition-all duration-300 cursor-pointer ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-md group-hover:shadow-xl'}`}>
                                        {/* Hover glow */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 pointer-events-none" />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Job Title */}
                                            <h3 className={`text-xl font-bold mb-3 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {job.title}
                                            </h3>

                                            {/* Location & Type */}
                                            <div className="flex flex-col gap-2 mb-4 flex-grow">
                                                <span className="flex items-center gap-2 text-sm text-gray-400">
                                                    <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                                                    <span className="truncate">{job.location}</span>
                                                </span>
                                                <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(job.type)}`}>
                                                    {job.type}
                                                </span>
                                            </div>

                                            {/* View Details Button */}
                                            <button className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100'}`}>
                                                View Details
                                                <ChevronRight size={16} className="transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                                <Search size={32} className="text-gray-500" />
                            </div>
                            <p className="text-lg text-gray-400">
                                No jobs found matching your search.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div >
    );
};

export default CareersPage;
