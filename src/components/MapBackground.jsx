import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MapBackground = ({ isDark }) => {
    const pointsRef = useRef();

    // Generate points for a "Map" effect (using a sphere for now, but widely distributed)
    // or actually using a simple dot grid to simulate a digital map plane.
    // Let's create a "Digital World" sphere of particles.
    const particlesCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            // Spherical distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 2.5 + Math.random() * 0.2; // Radius

            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
            pos[i * 3 + 2] = r * Math.cos(phi); // z
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.001; // Slow rotation
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color={isDark ? "#3b82f6" : "#0284c7"} // Blue in both, slightly darker in light mode
                sizeAttenuation={true}
                transparent={true}
                opacity={0.6}
                depthWrite={false}
            />
        </points>
    );
};

export default MapBackground;
