import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
    const globeRef = useRef();

    useFrame((state) => {
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
            <Sphere args={[2.3, 32, 32]}>
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

export default Globe;
