import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
    const globeRef = useRef();
    const atmosphereRef = useRef();

    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group>
            {/* Main Globe */}
            <Sphere ref={globeRef} args={[2, 64, 64]}>
                <meshStandardMaterial
                    color="#0B1120"
                    roughness={0.8}
                    metalness={0.2}
                />
            </Sphere>

            {/* Wireframe Overlay */}
            <Sphere args={[2.01, 32, 32]}>
                <meshBasicMaterial
                    color="#0EA5E9"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </Sphere>

            {/* Atmosphere Glow */}
            <Sphere ref={atmosphereRef} args={[2.3, 32, 32]}>
                <meshBasicMaterial
                    color="#0EA5E9"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Location Markers */}
            {[
                [0.5, 1.8, 0.5],
                [-1.2, 1.5, -0.8],
                [1.5, -0.5, 1],
                [-0.8, -1.2, 1.5],
            ].map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshBasicMaterial color="#57C2FF" />
                    <pointLight color="#57C2FF" intensity={2} distance={0.5} />
                </mesh>
            ))}
        </group>
    );
};

const GlobeScene = () => {
    return (
        <>
            <color attach="background" args={['#000000']} />
            <fog attach="fog" args={['#000000', 5, 15]} />

            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0EA5E9" />

            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            <Globe />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
                autoRotate
                autoRotateSpeed={0.3}
            />
        </>
    );
};

export default GlobeScene;
