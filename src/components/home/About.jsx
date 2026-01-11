"use client"

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
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl w-full items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="order-2 md:order-1 relative">
          <div className="aspect-square overflow-hidden bg-lab-accent relative group dish-card">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
              alt="Microscope View"
              className="object-cover w-full h-full dish-img opacity-90"
            />
            <div className="absolute inset-0 border border-lab-text/10 pointer-events-none z-10" />
          </div>
          <div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 font-serif text-6xl md:text-8xl text-transparent opacity-10 pointer-events-none"
            style={{ WebkitTextStroke: "1px #3E2F22" }}
          >
            01
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-5 text-lab-text">
          <h2 className="font-serif flex text-4xl md:text-6xl">
            <span className="block px-2">OUR</span>
            <span className="block italic text-lab-gold">Story</span>
          </h2>
          <div className="w-12 h-[1px] " />
          <p className="font-sans   text-[#3E2F22]/80 leading-loose">
            <span className="bg-yellow-200 text-black p-1">
              Scoby Labs began in 2022{" "}
            </span>{" "}
            with a very pertinent question that became impossible to ignore
            after a time marked by loss and grief- If tomorrow wasn’t promised,
            what dream deserved to be lived today? The answer was simple- cook,
            create and feed people. What began as a small, cathartic experiment-
            fruit jars set to a ferment for a 21-day “passion project” quickly
            turned into a gathering. Friends tasted the early brews,
            conversations sparked, and the name SCOBY emerged organically from
            that circle of support. A spontaneous stall at a local market on 18
            November 2022 turned into the real beginning. With unpolished
            ferments and simple tasting sessions, the stall drew unexpected
            crowds. People connected with the flavours, the story, and the
            science. Orders came in, and the journey began. From delivering
            bottles across the city to{" "}
            <span className="bg-red-200 text-black p-1">
              experimenting with over 19 flavours
            </span>
            , the work grew into a deep dive into fermentation, flavour
            chemistry, and nine months of kombucha R&D. A café opened space for
            our products, and soon, the project expanded into workshops and
            science-based learning experiences. Whether you're sipping on a
            handcrafted beverage or joining us for a fermentation masterclass,
            you’re stepping into a lab that believes:
          </p>
          <ul className="font-sans text-xs tracking-widest space-y-4 text-lab-text/70 mt-6">
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
