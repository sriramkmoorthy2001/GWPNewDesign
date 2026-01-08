import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 200, isDark }) => {
    const pointsRef = useRef();
    const linesRef = useRef();
    const groupRef = useRef();

    // Theme colors
    const colors = isDark
        ? ['#3B82F6', '#8B5CF6', '#06B6D4'] // Blue, Purple, Cyan (Dark Mode)
        : ['#2563EB', '#7C3AED', '#0891B2']; // Darker shades for Light Mode

    // Initial particle data - SPHERICAL DISTRIBUTION
    const particles = useMemo(() => {
        const temp = [];
        const radius = 4.5;

        for (let i = 0; i < count; i++) {
            // Spherical coordinates (Golden Spiral for even distribution)
            const phi = Math.acos(1 - 2 * (i + 0.5) / count);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            // Small jitter velocity
            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.005,
                (Math.random() - 0.5) * 0.005,
                (Math.random() - 0.5) * 0.005
            );

            const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);

            temp.push({
                position: new THREE.Vector3(x, y, z),
                basePosition: new THREE.Vector3(x, y, z), // Keep scalable
                velocity,
                color,
                phase: Math.random() * Math.PI * 2
            });
        }
        return temp;
    }, [count, colors]);

    // Geometry for points/lines
    const pointsGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colorArray = new Float32Array(count * 3);

        particles.forEach((p, i) => {
            positions[i * 3] = p.position.x;
            positions[i * 3 + 1] = p.position.y;
            positions[i * 3 + 2] = p.position.z;

            colorArray[i * 3] = p.color.r;
            colorArray[i * 3 + 1] = p.color.g;
            colorArray[i * 3 + 2] = p.color.b;
        });

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        return geo;
    }, [particles, count]);

    const linesGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const maxConnections = count * 8;
        const positions = new Float32Array(maxConnections * 6);
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [count]);


    useFrame(({ clock }) => {
        // Rotate the entire group to simulate globe spinning
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.z += 0.0003;
        }

        const positions = pointsRef.current.geometry.attributes.position.array;
        const time = clock.getElapsedTime();

        // Update Particles
        particles.forEach((p, i) => {
            // Breathing effect on radius - subtle globe pulse
            const pulse = Math.sin(time * 1.5 + p.phase) * 0.05;
            const currentRadius = 4.5 + pulse;

            // Re-normalize to sphere surface to maintain shape
            const dir = p.basePosition.clone().normalize();
            p.position.copy(dir.multiplyScalar(currentRadius));

            // Add tiny local jitter
            p.position.add(p.velocity); // Accumulate velocity? Careful drifting off sphere.
            // Actually, let's skip velocity drift for strict sphere shape, use pulse only.

            positions[i * 3] = p.position.x;
            positions[i * 3 + 1] = p.position.y;
            positions[i * 3 + 2] = p.position.z;
        });

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Update Lines
        const linePositions = linesRef.current.geometry.attributes.position.array;
        let lineIndex = 0;
        const connectionDistance = 2.0; // Distance tolerance for connections on sphere

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = particles[i].position.distanceTo(particles[j].position);
                if (dist < connectionDistance) {

                    if (lineIndex < linePositions.length - 5) {
                        linePositions[lineIndex++] = particles[i].position.x;
                        linePositions[lineIndex++] = particles[i].position.y;
                        linePositions[lineIndex++] = particles[i].position.z;

                        linePositions[lineIndex++] = particles[j].position.x;
                        linePositions[lineIndex++] = particles[j].position.y;
                        linePositions[lineIndex++] = particles[j].position.z;
                    }
                }
            }
        }

        linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
        linesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <group ref={groupRef}>
            {/* Points */}
            <points ref={pointsRef} geometry={pointsGeometry}>
                <pointsMaterial
                    size={0.12}
                    vertexColors
                    transparent
                    opacity={0.9}
                    sizeAttenuation
                />
            </points>

            {/* Lines */}
            <lineSegments ref={linesRef} geometry={linesGeometry}>
                <lineBasicMaterial
                    color={isDark ? "#60A5FA" : "#3B82F6"}
                    transparent
                    opacity={0.25}
                    vertexColors={false}
                />
            </lineSegments>
        </group>
    );
};

const ServiceNetworkScene = ({ isDark }) => {
    return (
        <>
            <color attach="background" args={[isDark ? '#000000' : '#F0F9FF']} />
            <fog attach="fog" args={[isDark ? '#000000' : '#F0F9FF', 10, 30]} />

            <ambientLight intensity={isDark ? 0.2 : 0.8} />
            <pointLight position={[10, 10, 10]} intensity={1} color={isDark ? "#4F46E5" : "#60A5FA"} />

            <Stars
                radius={80}
                depth={50}
                count={isDark ? 5000 : 1000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            <ParticleNetwork isDark={isDark} />
        </>
    );
};

export default ServiceNetworkScene;
