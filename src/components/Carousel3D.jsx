import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Carousel3D({ items, isDark }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Navigation Handlers (Memoized)
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // 2. Auto Rotation Logic - Faster Speed (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds for snappier rotation

    return () => clearInterval(interval);
  }, [activeIndex, handleNext]);

  // 3. Helper to determine the position class for each index
  const getCardStyle = (index) => {
    const diff = (index - activeIndex + items.length) % items.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === 2) return "back";
    if (diff === 3) return "left";
    return "hidden";
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* LEFT NAVIGATION BUTTON */}
      <button
        onClick={handlePrev}
        className={`absolute left-4 md:left-10 z-50 p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-lg border group
            ${
              isDark
                ? "bg-black/40 hover:bg-cyan-500/20 border-white/10 text-white"
                : "bg-white/60 hover:bg-blue-500/20 border-gray-200 text-gray-800"
            }`}
      >
        <ChevronLeft
          size={32}
          className={`transition-colors ${
            isDark ? "group-hover:text-cyan-400" : "group-hover:text-blue-600"
          }`}
        />
      </button>

      {/* CAROUSEL CONTAINER */}
      <div className="relative w-full max-w-[1000px] h-[500px] flex items-center justify-center perspective-1000">
        {items.map((card, index) => {
          const position = getCardStyle(index);

          // Define Styles for specific positions
          let transformStyles = "";
          let zIndex = "";
          let opacity = "";
          let pointerEvents = "";

          switch (position) {
            case "center":
              transformStyles = "translateX(0) scale(1)";
              zIndex = "z-30";
              opacity = "opacity-100";
              pointerEvents = "pointer-events-auto";
              break;
            case "left":
              transformStyles = "translateX(-65%) scale(0.85) rotateY(15deg)";
              zIndex = "z-20";
              opacity = "opacity-40 blur-[1px]";
              pointerEvents = "pointer-events-none";
              break;
            case "right":
              transformStyles = "translateX(65%) scale(0.85) rotateY(-15deg)";
              zIndex = "z-20";
              opacity = "opacity-40 blur-[1px]";
              pointerEvents = "pointer-events-none";
              break;
            case "back":
              transformStyles = "translateX(0) scale(0.6)";
              zIndex = "z-10";
              opacity = "opacity-0";
              pointerEvents = "pointer-events-none";
              break;
            default:
              break;
          }

          return (
            <div
              key={index}
              // Changed duration-700 to duration-500 for snappier animation
              className={`absolute w-[85vw] max-w-xl md:w-[400px] h-[520px] rounded-3xl shadow-2xl transition-all duration-500 ease-in-out flex flex-col ${zIndex} ${opacity} ${pointerEvents}`}
              style={{
                transform: transformStyles,
              }}
            >
              {/* Internal Card Content */}
              <div
                className={`w-full h-full rounded-3xl p-8 flex flex-col border backdrop-blur-xl relative overflow-hidden group
                ${
                  isDark
                    ? "bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95 border-white/10"
                    : "bg-blue-50 border-white/40 shadow-xl"
                }
              `}
              >
                {/* Background Image Layer (Increased Opacity) */}
                {card.image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={card.image}
                      alt=""
                      className={`w-full h-full object-cover  transition-all duration-700 opacity-80`}
                    />
                    {/* Gradient Overlay to ensure text pops */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${
                        isDark
                          ? "from-transparent via-gray-900/40 to-black/80"
                          : "from-transparent via-blue-50/0 to-blue-50/90"
                      }`}
                    />
                  </div>
                )}

                {/* Foreground Content Wrapper */}
                <div className="relative z-10 flex flex-col justify-end h-full">
                  {/* Gradient Top Bar */}
                  {/* <div
                    className={`absolute top-[-32px] left-[-32px] w-[200%] h-2 bg-gradient-to-r ${
                      isDark
                        ? "from-cyan-400 to-blue-600"
                        : "from-blue-600 to-indigo-600"
                    }`}
                  /> */}

                  {/* Icon */}
                  {/* <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 w-fit border border-white/5 shadow-inner">
                    {card.icon}
                  </div> */}

                  {/* Text */}
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-400" : "text-black"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* List Items */}
                  {/* <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 mt-1 flex-shrink-0 ${
                            isDark ? "text-cyan-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            isDark ? "text-gray-300" : "text-black"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT NAVIGATION BUTTON */}
      <button
        onClick={handleNext}
        className={`absolute right-4 md:right-10 z-50 p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-lg border group
            ${
              isDark
                ? "bg-black/40 hover:bg-cyan-500/20 border-white/10 text-white"
                : "bg-white/60 hover:bg-blue-500/20 border-gray-200 text-gray-800"
            }`}
      >
        <ChevronRight
          size={32}
          className={`transition-colors ${
            isDark ? "group-hover:text-cyan-400" : "group-hover:text-blue-600"
          }`}
        />
      </button>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
