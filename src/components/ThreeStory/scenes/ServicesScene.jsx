import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const TechNode = ({ position }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1} position={position}>
            <Sphere args={[0.5, 16, 16]}>
                <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} wireframe />
            </Sphere>
        </Float>
    );
};

const Pipeline = () => {
    // Determine path for a simple tube
    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2, -2, 0),
        new THREE.Vector3(-1, 0, 1),
        new THREE.Vector3(1, 1, -1),
        new THREE.Vector3(2, 2, 0),
    ]);

    // Simulate "Flow" by offsetting texture or color in real app
    // Here we pulse opacity
    const meshRef = useRef();
    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.material.opacity = 0.4 + Math.sin(clock.elapsedTime * 3) * 0.2;
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <tubeGeometry args={[path, 64, 0.2, 16, false]} />
            <meshStandardMaterial color="#44aaff" transparent opacity={0.6} roughness={0.2} metalness={0.8} />
        </mesh>
    );
}

const ServiceStation = ({ position, title, color, children }) => {
    return (
        <group position={position}>
            {/* Station Base */}
            <mesh position={[0, -1, 0]} receiveShadow>
                <cylinderGeometry args={[3, 3, 0.2, 32]} />
                <meshStandardMaterial color="#222" emissive={color} emissiveIntensity={0.1} />
            </mesh>

            <Text
                position={[0, 4, 0]}
                fontSize={0.6}
                color={color}
                outlineWidth={0.02}
                outlineColor="#000"
            >
                {title}
            </Text>

            {children}
        </group>
    )
}

const ServicesScene = () => {
    return (
        <group>
            <Text
                position={[0, 7, 0]}
                fontSize={0.8}
                color="#ffffff"
                outlineWidth={0.02}
                outlineColor="#000"
            >
                HOW WE HELP
            </Text>

            {/* Station 1: AI & Data (Left) */}
            <ServiceStation position={[-6, 0, 0]} title="AI & Data" color="#00ff88">
                <Sparkles count={30} scale={4} size={2} speed={0.4} opacity={0.5} color="#00ff88" position={[0, 1, 0]} />
                <group position={[0, 1, 0]}>
                    <TechNode position={[0, 0, 0]} />
                    <TechNode position={[-1, 1, 1]} />
                    <TechNode position={[1, -1, -1]} />
                </group>
            </ServiceStation>

            {/* Station 2: Engineering (Right) */}
            <ServiceStation position={[6, 0, 0]} title="Engineering" color="#44aaff">
                <group position={[0, 1, 0]}>
                    <Pipeline />
                    <Sparkles count={20} scale={5} size={1} speed={1} opacity={0.3} color="#44aaff" />
                </group>
            </ServiceStation>
        </group>
    );
};

export default ServicesScene;
