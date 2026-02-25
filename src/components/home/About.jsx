"use client";

import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={elementRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-20 px-6 relative bg-[#E6E0D4]/30 overflow-hidden"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-7xl w-full items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="order-2 md:order-1 relative">
          <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden bg-lab-accent group dish-card">
            <Image
              src="/ourstory.jpg"
              alt="Microscope View"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover dish-img opacity-90"
            />
            <div className="absolute inset-0 border border-lab-text/10 pointer-events-none z-10" />
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-2 md:space-y-4 text-left text-lab-text">
          <h2 className="font-serif flex justify-start text-4xl md:text-6xl text-center md:text-left">
            <span className="px-2">OUR</span>
            <span className="italic text-lab-gold">Story</span>
          </h2>

          <div className="w-12 h-[1px] " />
          <p className="font-sans   text-[#3E2F22]/80 leading-loose text-justify">
            <span className="italic text-black">Scoby Labs began in 2022 </span>{" "}
            with a question that emerged during a time of loss and reflection:{" "}
            <span className="italic text-black">
              If tomorrow wasn’t promised, what dream deserved to be lived
              today?
            </span>{" "}
            The answer was simple- cook, create, and feed people. <br/> What started
            as a 21 days passion project of fermenting fruit jars soon became a
            gathering. Friends tasted the early brews, conversations grew, and
            the name SCOBY emerged from that circle of support. A spontaneous
            stall on 18 November 2022 marked the true beginning. With simple
            tasting sessions and unpolished ferments, people connected with the
            flavours, the story, and the science, and the journey began.<br/> From
            delivering bottles across the city to developing over 19 flavours
            and spending nine months refining kombucha through R&D, Scoby Labs
            evolved into both a product and a learning space. A café partnership
            followed, along with workshops and science-led experiences. Whether
            you’re sipping a handcrafted beverage or joining a fermentation
            masterclass, you’re stepping into a lab that believes:
            <span className="italic text-black">
              experimenting with over 19 flavours
            </span>
            , the work grew into a deep dive into fermentation, flavour
            chemistry, and nine months of kombucha R&D. A café opened space for
            our products, and soon, the project expanded into workshops and
            science-based learning experiences. <br/> <br/> Whether you&apos;re sipping on a
            handcrafted beverage or joining us for a fermentation masterclass,
            you’re stepping into a lab that believes:
          </p>
          <ul className="font-sans text-sm tracking-widest space-y-1 text-lab-text/70 mt-4">
            <li className="flex items-center space-x-4">
              <span className="w-1 h-1 bg-lab-gold rounded-full" />
              <span>Cooking is science </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-1 h-1 bg-lab-gold rounded-full" />
              <span>Fermentation is culture </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-1 h-1 bg-lab-gold rounded-full" />
              <span>Learning never stops </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
