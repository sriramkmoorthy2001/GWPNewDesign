import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';

// Custom Shader Material for the Antigravity dots
const DotMaterial = {
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color('#00ffff') } // Cyan/Neon Blue
  },
  vertexShader: `
    uniform float time;
    varying vec2 vUv;
    varying float vAlpha;
    varying float vDist;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Antigravity Wave Effect
      // Displace y based on time and x position
      float wave = sin(time * 0.5 + pos.x * 2.0) * 0.1;
      
      // Add some noise-like movement
      pos.y += wave;
      
      // Gentle breathing scale
      float scale = 1.0 + sin(time + pos.y) * 0.05;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos * scale, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Pass distance for fading
      vDist = -mvPosition.z;

      // Size attenuation
      gl_PointSize = 4.0 * (15.0 / -mvPosition.z);
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    varying float vDist;

    void main() {
      // Create soft circular dot
      float r = distance(gl_PointCoord, vec2(0.5));
      if (r > 0.5) discard;
      
      // Smooth edge + Glow center
      float glow = 1.0 - smoothstep(0.0, 0.5, r);
      float alpha = 1.0 - smoothstep(0.3, 0.5, r);
      
      // Fade distant points slightly
      float fade = max(0.3, 1.0 - (vDist / 20.0));
      
      gl_FragColor = vec4(color * 1.5, alpha * fade); // Overdrive color for bloom
    }
  `
};

const DottedGlobe = () => {
    const pointsRef = useRef();
    const [geometry, setGeometry] = useState(null);

    useEffect(() => {
        // Load Earth Texture to Sample Points
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"; // Specular map: Black Ocean, White Land
        
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data; // RGBA
            
            const positions = [];
            
            // Sample points
            // Lat: -90 to 90, Lon: -180 to 180
            const POINT_DENSITY = 45000; // High density for solid continents
            
            for (let i = 0; i < POINT_DENSITY; i++) {
                // Random spherical coordinates
                const phi = Math.acos(-1 + (2 * i) / POINT_DENSITY); // 0 to PI
                const theta = Math.sqrt(POINT_DENSITY * Math.PI) * phi; // 0 to 2PI
                
                // Convert spherical to cartesian
                const r = 4;
                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);
                
                // Map to Texture UV
                const u = (Math.atan2(x, -z) / (Math.PI * 2)) + 0.5;
                const v = 0.5 - (Math.asin(y / r) / Math.PI);

                // Sample texture brightness
                const tx = Math.floor(u * img.width);
                const ty = Math.floor(v * img.height);
                const index = (ty * img.width + tx) * 4;
                
                const brightness = data[index]; // Red channel
                
                // Threshold: If bright enough (land), keep point
                // Specular map has clear distinction, so > 50 is safe
                if (brightness > 50) { 
                   positions.push(x, y, z);
                }
            }
            
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            setGeometry(geo);
        };
    }, []);
    
    // Animation Loop
    useFrame((state) => {
        if (pointsRef.current) {
            // Uniforms
            pointsRef.current.material.uniforms.time.value = state.clock.getElapsedTime();
            
            // Slow Rotation
            pointsRef.current.rotation.y += 0.001; 
            
            // Mouse Parallax (using state.pointer which is normalized -1 to 1)
            const x = state.pointer.x * 0.05;
            const y = state.pointer.y * 0.05;
            
            pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, y, 0.05);
            pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, -x, 0.05);
        }
    });

    if (!geometry) return null;

    return (
        <points ref={pointsRef} geometry={geometry}>
             <shaderMaterial 
                args={[DotMaterial]}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
             />
        </points>
    );
};

export default DottedGlobe;
