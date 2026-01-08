import React, { useState } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const StoryOverlay = () => {
    const scroll = useScroll();
    const [narrativeStep, setNarrativeStep] = useState(0);

    // Narrative scripts mapped to scroll range (0.0 to 1.0)
    // Updated with exact text from the "Clear Story-Driven" prompt
    const script = [
        // Scene 1: Who We Are
        { start: 0.00, end: 0.15, text: "We partner with businesses worldwide to deliver reliable technology solutions." },
        // Scene 2: Our Impact
        { start: 0.15, end: 0.30, text: "Our solutions scale globally and power data-driven success." },
        // Scene 3: Core Capabilities
        { start: 0.30, end: 0.45, text: "Our expertise lies in building scalable, intelligent, and future-ready systems." },
        // Scene 4: Services
        { start: 0.45, end: 0.60, text: "We design, build, and optimize technology solutions tailored to business needs." },
        // Scene 5: How We Think
        { start: 0.60, end: 0.75, text: "We share insights, research, and ideas that shape the future of technology." },
        // Scene 6: How We Grow Talent
        { start: 0.75, end: 1.00, text: "Through training and education, we empower the next generation of tech talent." },
    ];

    useFrame(() => {
        const offset = scroll.offset;
        // Find the active script line based on scroll position
        const activeIndex = script.findIndex(s => offset >= s.start && offset < s.end);
        if (activeIndex !== -1 && activeIndex !== narrativeStep) {
            setNarrativeStep(activeIndex);
        }
    });

    const activeLine = script[narrativeStep];

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                maxWidth: '600px',
                pointerEvents: 'none', // Allow clicking through to canvas if needed
                zIndex: 100,
                textAlign: 'center'
            }}
        >
            <div
                style={{
                    background: 'rgba(0, 20, 40, 0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: '25px 35px',
                    borderRadius: '20px',
                    border: '1px solid rgba(78, 205, 196, 0.5)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    opacity: activeLine ? 1 : 0,
                    transform: activeLine ? 'translateY(0)' : 'translateY(20px)',
                }}
            >
                <div style={{
                    fontSize: '1.4rem',
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: '1.4',
                    fontWeight: '600',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    {activeLine ? activeLine.text : "..."}
                </div>

                {/* Speech Bubble Arrow */}
                <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '10px solid rgba(0, 20, 40, 0.9)'
                }}></div>
            </div>

            <div style={{
                marginTop: '20px',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 'bold'
            }}>
                Scroll to Explore
            </div>
        </div>
    );
};

export default StoryOverlay;
