import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AntigravityHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: -1000, y: -1000, radius: 250 };
    
    // Grid settings
    const spacing = 14; 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        
        // Aesthetic properties
        this.size = 1.2;
        this.density = (Math.random() * 20) + 10;
        
        // Colors from image: Cyan and Blue tones
        const colors = ['rgb(34, 211, 238)', 'rgb(59, 130, 246)', 'rgb(147, 197, 253)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseOpacity = 0.05; // Mostly invisible grid
        this.opacity = this.baseOpacity;
        this.excited = 0;
      }

      draw() {
        if (this.excited < 0.01 && this.opacity < 0.06) return; // Optimization

        ctx.save();
        ctx.translate(this.x, this.y);
        
        const currentOpacity = this.baseOpacity + (this.excited * 0.7);
        const currentSize = this.size * (1 + this.excited * 1.5);
        
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = this.color;

        if (this.excited > 0.3) {
           ctx.shadowBlur = 8 * this.excited;
           ctx.shadowColor = this.color;
        }

        ctx.beginPath();
        // Drawing small structured shards
        ctx.roundRect(-currentSize, -currentSize / 2, currentSize * 2, currentSize, 1);
        ctx.fill();
        
        ctx.restore();
      }

      update() {
        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let targetExcited = 0;

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          targetExcited = force;

          // Ordered Wave Distortion (Repels from cursor while keeping relative structure)
          const waveIntensity = Math.sin(force * Math.PI) * 40; 
          this.x -= (dx / distance) * waveIntensity * 0.1;
          this.y -= (dy / distance) * waveIntensity * 0.1;
        }

        // Smooth excitement interpolation
        this.excited += (targetExcited - this.excited) * 0.1;

        // Structured snap back to Grid
        let springDx = this.baseX - this.x;
        let springDy = this.baseY - this.y;
        this.x += springDx * 0.08; 
        this.y += springDy * 0.08;
      }
    }

    const init = () => {
      particles = [];
      const cols = Math.ceil(canvas.width / spacing) + 2;
      const rows = Math.ceil(canvas.height / spacing) + 2;
      
      const offsetX = (canvas.width % spacing) / 2;
      const offsetY = (canvas.height % spacing) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing - spacing + offsetX;
          const y = j * spacing - spacing + offsetY;
          particles.push(new Particle(x, y));
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600">
                The Future
              </span>
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-xl text-zinc-500 font-medium max-w-2xl mx-auto tracking-wide leading-relaxed"
          >
            At Global Web Production, we ship excellence through code and design. 
            Ready to initiate mission?
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2 }}
             className="pt-8"
          >
            
          </motion.div>
        </motion.div>
      </div>
      
      {/* Structural Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-5" />
    </section>
  );
};

export default AntigravityHero;
