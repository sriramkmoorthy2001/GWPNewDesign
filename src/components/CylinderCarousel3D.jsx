import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const carouselImages = [
    {
        id: 1,
        title: 'Innovation',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
        color: '#3b82f6'
    },
    {
        id: 2,
        title: 'Collaboration',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400',
        color: '#06b6d4'
    },
    {
        id: 3,
        title: 'Creativity',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
        color: '#8b5cf6'
    },
    {
        id: 4,
        title: 'Excellence',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
        color: '#ec4899'
    },
    {
        id: 5,
        title: 'Growth',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400',
        color: '#10b981'
    },
    {
        id: 6,
        title: 'Impact',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400',
        color: '#f59e0b'
    }
];

const CylinderCarousel3D = () => {
    const [rotation, setRotation] = useState(0);

    const theta = 360 / carouselImages.length;
    const radius = Math.round((250 / 2) / Math.tan(Math.PI / carouselImages.length));

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + theta);
        }, 3000);

        return () => clearInterval(interval);
    }, [theta]);

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center" style={{ perspective: '1200px' }}>
            <div
                className="relative w-[250px] h-[350px] transition-transform duration-1000 ease-out"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${rotation}deg)`
                }}
            >
                {carouselImages.map((item, index) => (
                    <div
                        key={item.id}
                        className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                            transform: `rotateY(${index * theta}deg) translateZ(${radius}px)`,
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        <div className="relative w-full h-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6"
                            >
                                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                            </div>
                            <div
                                className="absolute inset-0 border-2 rounded-2xl"
                                style={{ borderColor: `${item.color}40` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CylinderCarousel3D;
