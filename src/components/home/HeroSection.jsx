"use client";
import { useEffect, useState } from "react";
import "./HeroSection.css";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20 text-[#3E2F22] overflow-hidden bg-[#FAF7F2]">
      
      {/* PREMIUM LAB BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="halo-bg"></div>
        <div className="soft-grid"></div>
        <div className="glow-core"></div>
      </div>

      {/* SMALL TAG */}
      <p
        className={`font-sans text-xs tracking-[0.35em] text-[#BFA15F] mb-4 reveal ${loaded ? "show" : ""}`}
      >
        EST. 2022
      </p>

      {/* BRAND NAME */}
      <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl text-center leading-none mb-6 relative z-10">
        <span className={`brand-line ${loaded ? "show" : ""}`}>SCOBY</span>
        <span className={`brand-line italic delay ${loaded ? "show" : ""}`}>
          LABS
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className={`font-sans text-sm md:text-base text-[#3E2F22]/70 max-w-xs md:max-w-lg text-center leading-relaxed mt-4 fade-up ${loaded ? "show" : ""}`}
      >
        Where microbes meet magic. Where kitchens become classrooms. Scoby Labs
        is a living, breathing fermentation kitchen lab — a space where cooking
        meets chemistry, and age-old fermentation wisdom is reimagined with
        modern biology.
      </p>
    </header>
  );
};

export default Hero;
