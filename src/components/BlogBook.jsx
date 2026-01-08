import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

const BlogBook = ({ coverColor = '#2a2a2a', hovered = false, ...props }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (!meshRef.current) return;

        // Target values
        const targetZ = hovered ? 2 : 0;
        const targetRotY = hovered ? -0.5 : 0;
        const targetRotX = hovered ? 0.2 : 0;

        // Smooth transition
        meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);

        // If not hovered, follow mouse slightly
        if (!hovered) {
            const { x, y } = state.mouse;
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.2, 0.05);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.2, 0.05);
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <mesh ref={meshRef} {...props}>
                <boxGeometry args={[3, 4, 0.5]} />
                <meshStandardMaterial attach="material-0" color={coverColor} /> {/* Right */}
                <meshStandardMaterial attach="material-1" color={coverColor} /> {/* Left - Spine */}
                <meshStandardMaterial attach="material-2" color={coverColor} /> {/* Top */}
                <meshStandardMaterial attach="material-3" color={coverColor} /> {/* Bottom */}
                <meshStandardMaterial attach="material-4" color={coverColor} /> {/* Front */}
                <meshStandardMaterial attach="material-5" color={coverColor} /> {/* Back */}
            </mesh>
        </Float>
    );
};

export default BlogBook;
