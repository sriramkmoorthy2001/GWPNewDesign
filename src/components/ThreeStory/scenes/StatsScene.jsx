import React, { useRef, useState } from 'react';
import { Text, Float, Sparkles, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DataPillar = ({ position, height, color, label, value, triggerOffset }) => {
    const meshRef = useRef();
    const [active, setActive] = useState(false);
    const scroll = useScroll();

    useFrame(() => {
        // Simple distance check or scroll offset check
        // Here we simulate "activation" based on time/random for "alive" feel
        // or strictly based on scroll proximity if we passed exact scroll props.
        // For visual impact without complex prop drilling, we'll use a distance check from "center" 
        // assuming the camera moves past.

        // Actually, let's just make them pulse to show "Activation"
        const time = Date.now() * 0.002;
        if (meshRef.current) {
            meshRef.current.material.emissiveIntensity = active ? 2 : 0.5 + Math.sin(time) * 0.2;
        }
    });

    return (
        <group
            position={position}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
        >
            {/* Glowing Pillar */}
            <mesh ref={meshRef} position={[0, height / 2, 0]}>
                <boxGeometry args={[1, height, 1]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Metric Value */}
            <Float speed={2} floatIntensity={0.2}>
                <Text
                    position={[0, height + 1, 0]}
                    fontSize={1}
                    color="white"
                    anchorY="bottom"
                    outlineWidth={0.05}
                    outlineColor={color}
                >
                    {value}
                </Text>
            </Float>

            {/* Label */}
            <Text
                position={[0, -0.5, 1]}
                fontSize={0.4}
                color="white"
                rotation={[-Math.PI / 4, 0, 0]}
            >
                {label}
            </Text>
        </group>
    );
};

const StatsScene = () => {
    return (
        <group>
            {/* Optimized Sparkles: Reduced count for "Performance" */}
            <Sparkles
                count={30} // Reduced from 100
                scale={12}
                size={4}
                speed={0.4}
                opacity={0.5}
                color="#4ecdc4"
                position={[0, 5, 0]}
            />

            <Text
                position={[0, 7, 0]}
                fontSize={0.8}
                color="#ff6b6b"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                OUR IMPACT
            </Text>

            <DataPillar
                position={[-5, 0, 0]}
                height={5}
                color="#ff6b6b"
                value="10M+"
                label="Users Reached"
            />
            <DataPillar
                position={[-2, 0, 2]}
                height={8}
                color="#4ecdc4"
                value="99.9%"
                label="Uptime"
            />
            <DataPillar
                position={[2, 0, -1]}
                height={6}
                color="#ffe66d"
                value="500+"
                label="Projects"
            />
            <DataPillar
                position={[5, 0, 1]}
                height={4}
                color="#1a535c"
                value="24/7"
                label="Support"
            />

            {/* Floor Reflection for style (Simplified) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#000" roughness={0} metalness={0.8} opacity={0.3} transparent />
            </mesh>
        </group>
    );
};

export default StatsScene;
