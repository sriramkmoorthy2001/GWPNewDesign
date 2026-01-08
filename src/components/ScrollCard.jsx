import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollCard = ({ title, description, image, index }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;

        gsap.fromTo(contentRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(imageRef.current,
            {
                scale: 1.2,
                filter: "brightness(0.5)"
            },
            {
                scale: 1,
                filter: "brightness(1)",
                duration: 2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

    }, []);

    return (
        <div
            ref={cardRef}
            className="scroll-card-container"
        >
            <div className="card-image-wrapper">
                <img
                    ref={imageRef}
                    src={image}
                    alt={title}
                    className="card-image"
                />
                <div className="card-overlay"></div>
            </div>

            <div ref={contentRef} className="card-content">
                <span className="card-index">0{index + 1}</span>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <button className="card-btn">Explore More</button>
            </div>
        </div>
    );
};

export default ScrollCard;
