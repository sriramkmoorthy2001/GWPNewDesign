import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, PerspectiveCamera, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import FlyingBird from '../FlyingBird';
import Globe from '../Globe';
import Loader from '../ui/Loader';
import * as THREE from 'three';

const SceneContent = () => {
  const scroll = useScroll();
  const { camera, viewport } = useThree();
  const birdGroupRef = useRef();
  const globeGroupRef = useRef();
  
  // Approximate mobile check based on viewport width (assuming standard camera distance)
  const isMobile = viewport.width < 5.5; 

  useFrame((state) => {
    const offset = scroll.offset;
    
    // CAMERA: Smooth transition from intro to globe
    // Mobile needs to be further back to see everything
    const startZ = isMobile ? 8 : 5;
    const endZ = isMobile ? 16 : 12;
    
    camera.position.x = THREE.MathUtils.lerp(5, 0, offset);
    // Lift camera slightly higher on mobile to center content better
    camera.position.y = THREE.MathUtils.lerp(3, isMobile ? 1 : 0, offset);
    camera.position.z = THREE.MathUtils.lerp(startZ, endZ, offset);
    camera.lookAt(0, -0.5, -1);
    
    if (birdGroupRef.current) {
        // Move bird RIGHT faster to exit before globe
        birdGroupRef.current.position.x = THREE.MathUtils.lerp(0, isMobile ? 15 : 25, offset * 3);
        // Scale down slightly on mobile
        const baseScale = isMobile ? 0.7 : 1;
        birdGroupRef.current.scale.setScalar(baseScale);
        birdGroupRef.current.visible = offset < 0.4;
    }

    if (globeGroupRef.current) {
        // Start globe entry earlier for smoother approach
        const globeFade = THREE.MathUtils.smoothstep(offset, 0.25, 0.75);
        // Move globe from further LEFT (x: -25) to center (x: 0)
        // On mobile, maybe start closer so it doesn't fly in too fast
        globeGroupRef.current.position.x = THREE.MathUtils.lerp(isMobile ? -15 : -25, 0, globeFade);
        globeGroupRef.current.position.y = 0; 
        // Scale globe to fit width
        const targetScale = isMobile ? 0.7 : 1;
        globeGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(targetScale * 0.8, targetScale, globeFade));
        globeGroupRef.current.visible = offset > 0.2;
    }
  });

  return (
    <>

      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0EA5E9" />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <group ref={birdGroupRef}>
          <FlyingBird scrollOffset={scroll.offset * 0.4} />
      </group>

      <group ref={globeGroupRef} position={[0, -10, 0]}>
          <Globe />
      </group>

      <directionalLight position={[5, 5, 5]} intensity={1} />
    </>
  );
};

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-[#050510] overflow-hidden">
      <Loader />
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
          
          <Suspense fallback={null}>
            <ScrollControls pages={3} damping={0.2}>
                <SceneContent />
              
              <Scroll html style={{ width: '100%' }}>
                {/* SECTION 1: BIRD INTRO */}
                <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <h1 
                      style={{ fontFamily: "'Antonio', sans-serif" }}
                      className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold text-white mb-6 tracking-tighter uppercase leading-[0.85]"
                    >
                      Experience <br/> The Globe
                    </h1>
                    <p className="max-w-xs md:max-w-2xl text-[10px] md:text-sm text-white/70 font-medium tracking-[0.3em] uppercase">
                      We design experiences that move people and transform spaces
                    </p>
                  </motion.div>
                  
                  {/* Scroll Down Indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                    aria-label="Scroll down indicator"
                  >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white"></div>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
                      Scroll Down
                    </span>
                  </motion.div>
                </section>

                {/* SECTION 2: THE GLOBE */}
                <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                      GLOBAL REACH
                    </span>
                  </h2>
                  <p className="max-w-md md:max-w-2xl text-base md:text-lg text-white/70 mb-8 md:mb-10 text-balance leading-relaxed">
                    Connecting ideas across the digital landscape with high-performance solutions.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      aria-label="Learn more about our global reach"
                      className="px-6 py-3 md:px-8 md:py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-400 transition-shadow hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] text-sm md:text-base"
                    >
                      Learn More
                    </button>
                  </div>
                </section>

                {/* SECTION 3: CALL TO ACTION */}
                <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
                   <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter">READY TO BUILD?</h2>
                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-8 sm:px-0">
                      <button 
                        aria-label="Get started with your project"
                        className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-sky-100 transition-transform hover:scale-105 text-sm md:text-base"
                      >
                        Get Started
                      </button>
                      <button 
                         aria-label="View our portfolio"
                        className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
                      >
                        View Portfolio
                      </button>
                   </div>
                </section>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};







export default Home;
