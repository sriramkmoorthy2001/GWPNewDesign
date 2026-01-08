import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshTransmissionMaterial } from '@react-three/drei';

const AbstractShape = ({ position, color, label, isActive }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group position={position}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={2}
                        chromaticAberration={0.5}
                        anisotropy={0.3}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        color={isActive ? color : "#222"} // Dim if not active
                        resolution={128} // Optimized
                    />
                </mesh>
            </Float>
            <Text
                position={[0, -2.5, 0]}
                fontSize={isActive ? 0.8 : 0.6} // Grow if active
                color={isActive ? "#ffffff" : "#444"}
                anchorX="center"
            >
                {label}
            </Text>
        </group>
    );
};

const CapabilitiesScene = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Cycle through active capability every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <group>
            <Text
                position={[0, 5, 0]}
                fontSize={0.8}
                color="#ffffff"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                WHAT WE DO BEST
            </Text>

            <AbstractShape
                position={[-4, 0, 0]}
                color="#4ecdc4"
                label="Innovation"
                isActive={activeIndex === 0}
            />
            <AbstractShape
                position={[0, 1, -2]}
                color="#ff6b6b"
                label="Engineering"
                isActive={activeIndex === 1}
            />
            <AbstractShape
                position={[4, 0, 0]}
                color="#ffe66d"
                label="Strategy"
                isActive={activeIndex === 2}
            />
        </group>
    );
};

export default CapabilitiesScene;
