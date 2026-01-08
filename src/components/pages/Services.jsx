import React, { Suspense, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { FiArrowRight } from "react-icons/fi";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera, OrbitControls, Center, useProgress, Html, Stage } from "@react-three/drei";
import GlowButton from "../ui/GlowButton";
import TokyoScene from "../TokyoScene";

const AnimatedHeading = () => {
  const rotatingWords = [
    "DIGITAL FUTURE",
    "SMARTER WEB",
    "BETTER WORLD",
    "GLOBAL REACH",
    "NEW ERA"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = rotatingWords[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;
    
    let timeout;
    
    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
      timeout = setTimeout(() => {}, pauseBeforeType);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);
  
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      BUILDING A <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </h1>
  );
};

const ValueProposition = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const text = "→ We help CTOs and product teams speed up development, modernize existing products, and adopt AI so they can ship faster without compromising on quality. That's our promise.";
  
  const getCharOpacity = (index) => {
    const totalChars = text.length;
    const charProgress = index / totalChars;
    const revealProgress = scrollProgress * 1.5; // Speed up reveal
    
    if (revealProgress >= charProgress) {
      return 1;
    } else if (revealProgress >= charProgress - 0.1) {
      return (revealProgress - (charProgress - 0.1)) / 0.1;
    }
    return 0.1; // Minimum opacity for dark text
  };
  
  const getHighlightColor = (word) => {
    const highlights = {
      'speed up': 'text-purple-400',
      'modernize': 'text-orange-400',
      'adopt AI': 'text-cyan-400',
      'ship faster': 'text-pink-400'
    };
    return highlights[word] || '';
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Sticky container for text */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-3xl md:text-5xl lg:text-6xl leading-relaxed font-light">
              {text.split('').map((char, index) => {
                const opacity = getCharOpacity(index);
                const isHighlighted = false; // We'll handle highlights separately
                
                return (
                  <span
                    key={index}
                    style={{
                      opacity: opacity,
                      transition: 'opacity 0.1s ease-out'
                    }}
                    className={`${char === '→' ? 'text-cyan-400' : 'text-white'}`}
                  >
                    {char}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        
        {/* 3D Model fade overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2),
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>
      </div>
    </section>
  );
};

const ThreeDHero = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <Canvas 
        shadows 
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false 
        }} 
        dpr={[1, 2]}
        camera={{ position: [-1, 3, 10], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#020617');
        }}
      >
        <Suspense fallback={
          <Html center>
            <div className="text-cyan-400 animate-pulse text-2xl font-bold whitespace-nowrap">
              LOADING 3D SCENE...
            </div>
          </Html>
        }>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
          <pointLight position={[-10, 5, -10]} intensity={1} color="#00aaff" />
          
          <Center top>
            <TokyoScene scale={0.18} />  
          </Center>
          
          <Environment preset="city" />
        </Suspense>
 
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
        />
      </Canvas>
      
      {/* Overlay gradient for text readability and cinematic look */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-black">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <section className="relative h-screen w-full overflow-hidden">
          <ThreeDHero />
          
          {/* Content Container - Right Aligned - pointer-events-none allows canvas interaction */}
          <div className="relative h-full container mx-auto px-6 flex items-center justify-end z-10 pointer-events-none">
            <div className="max-w-xl text-right pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <AnimatedHeading />
              </motion.div>
            </div>
          </div>
        </section>

        <ValueProposition />
        <ServicesContent />
      </ReactLenis>
    </div>
  );
};

const ArrowIcon = ({ className = "w-6 h-6", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
  </svg>
);

const ServicesContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredArrowSide, setHoveredArrowSide] = useState(null);
  
  const services = [
    {
      id: 1,
      number: "01",
      title: "Platform Modernization",
      description: "Upgrade your platform with a clear plan for faster delivery and better performance without putting the business on pause.",
      color: "bg-zinc-900",
      accent: "text-[#fdbb6f]",
      border: "border-[#fdbb6f]/20"
    },
    {
      id: 2,
      number: "02",
      title: "Software Delivery",
      description: "Accelerate your product development with high-performing teams implementing modern software delivery practices.",
      color: "bg-zinc-900",
      accent: "text-[#90d8ff]",
      border: "border-[#90d8ff]/20"
    },
    {
      id: 3,
      number: "03",
      title: "Specialists on Demand",
      description: "Scale your engineering capacity with expert developers, designers, and product managers who integrate seamlessly with your team.",
      color: "bg-zinc-900",
      accent: "text-[#b5a9ff]",
      border: "border-[#b5a9ff]/20"
    },
    {
      id: 4,
      number: "04",
      title: "Data & AI",
      description: "Transform your data into a competitive advantage with advanced analytics, machine learning, and AI-powered automation.",
      color: "bg-zinc-900",
      accent: "text-[#e5b3ff]",
      border: "border-[#e5b3ff]/20"
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">WHAT WE DO</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
            Effective software<br />development
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-col gap-4">
          {services.map((service, index) => {
            const isHovered = hoveredCard === service.id;
            const isArrowHovered = hoveredArrowSide === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setHoveredArrowSide(null);
                }}
                className={`
                  relative overflow-hidden cursor-pointer w-full
                  ${service.color} border ${service.border} rounded-xl
                  hover:border-white/20 transition-colors duration-300
                `}
                animate={{
                  height: isHovered ? (window.innerWidth < 768 ? '420px' : '350px') : '100px',
                  backgroundColor: isHovered ? '#18181b' : '#09090b',
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Content Container */}
                <div className="h-full w-full relative">
                  {/* Closed State - Heading Only */}
                  <motion.div 
                    className="absolute inset-0 flex items-center px-8 md:px-12"
                    animate={{ 
                      opacity: isHovered ? 0 : 1,
                      y: isHovered ? -20 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-3xl font-light text-white uppercase tracking-wider">
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Expanded State */}
                  <motion.div 
                    className="h-full grid grid-cols-1 md:grid-cols-[2fr_1px_1fr]"
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 20
                    }}
                    transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
                    style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
                  >
                    {/* Left Section: Number, Title, Description */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-xl md:text-2xl font-light ${service.accent}`}>{service.number}</span>
                        <ArrowIcon className={`w-5 h-5 md:w-6 md:h-6 ${service.accent}`} />
                        <h3 className="text-xl md:text-2xl font-normal text-white uppercase tracking-wider">
                          {service.title}
                        </h3>
                      </div>
                      
                      <div className="mt-8 md:mt-0">
                        <p className="text-sm md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block bg-white/5 self-stretch" />

                    {/* Right Section: Triple Arrow Area */}
                    <div 
                      className="hidden md:flex items-center justify-center p-12 relative overflow-hidden"
                      onMouseEnter={() => setHoveredArrowSide(service.id)}
                      onMouseLeave={() => setHoveredArrowSide(null)}
                    >
                      <div className="relative flex items-center justify-center gap-2">
                        {/* Left Extra Arrow */}
                        <motion.div
                          animate={{
                            x: isArrowHovered ? 0 : 40,
                            opacity: isArrowHovered ? 1 : 0,
                            scale: isArrowHovered ? 1 : 0.5
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <ArrowIcon size={48} className="text-white" />
                        </motion.div>

                        {/* Main Center Arrow */}
                        <motion.div
                          animate={{
                            scale: isArrowHovered ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <ArrowIcon size={64} className="text-white" />
                        </motion.div>

                        {/* Right Extra Arrow */}
                        <motion.div
                          animate={{
                            x: isArrowHovered ? 0 : -40,
                            opacity: isArrowHovered ? 1 : 0,
                            scale: isArrowHovered ? 1 : 0.5
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <ArrowIcon size={48} className="text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
