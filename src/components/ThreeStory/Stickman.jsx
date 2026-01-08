import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

// Low-Poly Stickman for better performance
const Stickman = forwardRef((props, ref) => {
    // Refs for limbs to animate
    const leftLeg = useRef();
    const rightLeg = useRef();
    const leftArm = useRef();
    const rightArm = useRef();

    // Internal state for simple walk cycle simulation
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const speed = 10; // Walking speed frequency

        // Simple Oscillating Walk Cycle
        if (leftLeg.current && rightLeg.current) {
            leftLeg.current.rotation.x = Math.sin(time * speed) * 0.5;
            rightLeg.current.rotation.x = Math.cos(time * speed) * 0.5;
        }

        if (leftArm.current && rightArm.current) {
            leftArm.current.rotation.x = Math.cos(time * speed) * 0.5;
            rightArm.current.rotation.x = Math.sin(time * speed) * 0.5;
        }
    });

    const materialProps = {
        color: "#ffffff",
        emissive: "#4ecdc4",
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8
    };

    return (
        <group ref={ref} {...props}>
            {/* Local Light for "Exciting" atmosphere - kept simplified */}
            <pointLight
                position={[0, 2, 0]}
                intensity={1.5}
                distance={8}
                decay={2}
                color="#4ecdc4"
            />

            {/* Optimized Trail: Shorter, faster decay */}
            <Trail
                width={1.2}
                length={4} // Reduced from 8
                decay={2} // Faster decay
                color={new THREE.Color("#4ecdc4")}
                attenuation={(t) => t * t}
            >
                {/* Body Group - Center of the Stickman */}
                <group position={[0, 1, 0]}>

                    {/* Head - Low Poly Sphere (16 segments) */}
                    <mesh position={[0, 1.6, 0]}>
                        <sphereGeometry args={[0.25, 16, 16]} />
                        <meshStandardMaterial {...materialProps} />
                    </mesh>

                    {/* Torso - Low Poly Cylinder (8 segments) */}
                    <mesh position={[0, 0.8, 0]}>
                        <cylinderGeometry args={[0.1, 0.1, 1.2, 8]} />
                        <meshStandardMaterial {...materialProps} />
                    </mesh>

                    {/* Left Arm Pivot */}
                    <group position={[-0.2, 1.3, 0]} ref={leftArm}>
                        <mesh position={[0, -0.4, 0]}>
                            <cylinderGeometry args={[0.06, 0.06, 0.8, 8]} />
                            <meshStandardMaterial {...materialProps} />
                        </mesh>
                    </group>

                    {/* Right Arm Pivot */}
                    <group position={[0.2, 1.3, 0]} ref={rightArm}>
                        <mesh position={[0, -0.4, 0]}>
                            <cylinderGeometry args={[0.06, 0.06, 0.8, 8]} />
                            <meshStandardMaterial {...materialProps} />
                        </mesh>
                    </group>

                    {/* Left Leg Pivot */}
                    <group position={[-0.15, 0.2, 0]} ref={leftLeg}>
                        <mesh position={[0, -0.5, 0]}>
                            <cylinderGeometry args={[0.08, 0.08, 1.0, 8]} />
                            <meshStandardMaterial {...materialProps} />
                        </mesh>
                    </group>

                    {/* Right Leg Pivot */}
                    <group position={[0.15, 0.2, 0]} ref={rightLeg}>
                        <mesh position={[0, -0.5, 0]}>
                            <cylinderGeometry args={[0.08, 0.08, 1.0, 8]} />
                            <meshStandardMaterial {...materialProps} />
                        </mesh>
                    </group>

                </group>
            </Trail>
        </group>
    );
});

export default Stickman;
