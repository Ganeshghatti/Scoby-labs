"use client";

import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";

const Outreach = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="methodology"
      ref={elementRef}
      className="py-12 md:py-24 px-4 md:px-6 bg-lab-bg"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-10 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F22]">
            OUTREACH AND ENGAGEMENT
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <span className="font-sans text-sm sm:text-md md:text-lg tracking-[0.3em] text-[#BFA15F] uppercase block">
              THE KARAM KULTURE
            </span>

            <p className="font-sans text-[#3E2F22]/80 mt-4 leading-loose text-sm sm:text-base">
              Karam Kulture is the kitchen born from Scoby Labs, where
              fermentation science meets the bold, expressive flavours of Indian
              cuisine. Here, ancient techniques like culturing, pickling,
              brewing, and souring are reimagined through the lens of modern food
              science to create probiotic-rich dishes that nourish the body and
              spark curiosity. Rooted in heritage yet oriented toward the
              future, Karam Kulture bridges tradition with innovation — from
              sourdoughs layered with fiery ferments to ingredients shaped by
              precision fermentation and sustainable practice. It is a
              collaborative space for bakers, home chefs, and artisans, built
              on community, creativity, and conscious design. Above all, Karam
              Kulture is a celebration of food as culture, connection, and care.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[260px] sm:h-[360px] md:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/20251127_173334.jpg"
              alt="Karam Kulture"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
