import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DATA = [
    {
        id: 1,
        title: "Our Mission",
        desc: "To be the strategic partner of choice for businesses seeking to unlock their full digital potential. We empower clients with tools & expertise to achieve their objectives, drive sustainable growth, and make a positive global impact.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000", // Team Image
    },
    {
        id: 2,
        title: "Our Vision",
        desc: "To define the future of digital excellence by creating innovative, scalable, and impactful technology solutions that empower businesses worldwide.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Tech/Future Image
    },
    {
        id: 3,
        title: "Our Purpose",
        desc: "To bridge the gap between complex technology and business success, ensuring that every digital interaction creates value, trust, and lasting growth for our partners.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", // Collaboration/Goal Image
    }
];

export default function CinematicSlider() {
    const [items, setItems] = useState(DATA);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Rotate: First becomes last
        setItems((prev) => {
            const newItems = [...prev];
            const first = newItems.shift();
            newItems.push(first);
            return newItems;
        });

        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Rotate: Last becomes first
        setItems((prev) => {
            const newItems = [...prev];
            const last = newItems.pop();
            newItems.unshift(last);
            return newItems;
        });

        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden rounded-3xl shadow-2xl bg-black group">

            {/* 1. Main Background Layers */}
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out
                ${index === 0 ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110 pointer-events-none"}
            `}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Main Text Content */}
                    <div className={`absolute top-1/2 -translate-y-1/2 left-6 md:left-16 max-w-[60%] md:max-w-lg z-20 transition-all duration-700 delay-300
                ${index === 0 ? "translate-y-[-50%] opacity-100 blur-0" : "translate-y-[-40%] opacity-0 blur-sm"}
            `}>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-lg leading-tight">
                            {item.title}
                        </h1>
                        <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow-md font-light line-clamp-3 md:line-clamp-none">
                            {item.desc}
                        </p>
                        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                    </div>
                </div>
            ))}

            {/* 2. Thumbnail Strip (Right Side) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 flex flex-col gap-4">
                {items.slice(1, 4).map((item, index) => (
                    <div
                        key={item.id}
                        onClick={nextSlide} // Clicking thumbnail triggers next
                        className="relative w-[120px] h-[80px] md:w-[180px] md:h-[110px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:ring-2 hover:ring-cyan-500/50 group/thumb"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-colors" />
                        <div className="absolute bottom-2 left-2 font-bold text-white text-xs md:text-sm drop-shadow-lg">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Navigation Buttons */}
            <div className="absolute bottom-8 left-8 md:left-20 flex gap-4 z-30">
                <button
                    onClick={prevSlide}
                    className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/10 text-white transition-all hover:scale-110 active:scale-95"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/10 text-white transition-all hover:scale-110 active:scale-95"
                >
                    <ArrowRight size={24} />
                </button>
            </div>

        </div>
    );
}
