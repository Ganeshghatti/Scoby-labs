"use client"
import { useEffect, useState } from "react";
import "./HeroSection.css";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20 text-[#3E2F22] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="w-48 h-48 md:w-[600px] md:h-[600px] border border-[#3E2F22]/10 rounded-full     animate-[spinMove_12s_linear_infinite]
"
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 md:w-[400px] md:h-[400px] border border-[#3E2F22]/20 rounded-full animate-float"></div>
        </div>
      </div>

      <p
        className={`font-sans text-xs tracking-[0.3em] text-[#BFA15F] mb-4 reveal-load ${
          loaded ? "visible" : ""
        }`}
      >
        EST. 2022
      </p>

      <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl text-center leading-none mb-6">
        <span className="line-wrapper">
          <span className={`line-inner ${loaded ? "visible" : ""}`}>SCOBY</span>
        </span>
        <span className="line-wrapper">
          <span
            className={`line-inner italic text-[#3E2F22]/60 ${
              loaded ? "visible" : ""
            }`}
          >
            LABS
          </span>
        </span>
      </h1>

      <p
        className={`font-sans text-sm md:text-base text-[#3E2F22]/70 max-w-xs md:max-w-lg text-center leading-relaxed mt-4 fade-in-up ${
          loaded ? "visible" : ""
        }`}
      >
        Where microbes meet magic. Where kitchens become classrooms. Scoby Labs
        is a living, breathing fermentation kitchen lab — a space where cooking
        meets chemistry, and age-old fermentation wisdom is reimagined with
        modern biology.
      </p>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up ${
          loaded ? "visible" : ""
        } hidden md:block`}
      >
      </div>
    </header>
  );
};

export default Hero;
