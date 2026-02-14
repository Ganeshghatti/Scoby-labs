"use client";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";

const { BrainCircuit, FlaskConical } = require("lucide-react");

const Collaboration = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const steps = [
    {
      title: "National Science Gallery — Fermentation Meets Public Education",
      icon: <FlaskConical className="w-5 h-5" />,
      text: "Scoby Labs also partnered with the National Science Gallery, where our fermentation exhibit was showcased for a full year. This collaboration allowed us to demonstrate fermentation as a living interface between biology, chemistry, culture, and daily food systems. Through this exhibit, we engaged students, researchers, and the general public—opening up conversations on microbial ecosystems, food science, and experiential learning. The showcase reinforced our core thesis: science education becomes more memorable when it’s sensory, hands-on, and relevant to everyday life.",
      num: "02. INOCULATION",
      image: "/SCIENCE_GALLERY_COLLABORATION.png",
    },
    {
      title: "The Bee Story — Ethical Honey, Real Impact",
      icon: <BrainCircuit className="w-5 h-5" />,
      text: "Our partnership with The Bee Story aligns with our commitment to ingredient integrity and responsible sourcing. The Bee Story is a purpose-led brand dedicated to delivering premium, ethically sourced honey through sustainable beekeeping practices. Their work supports local beekeepers, protects pollinator habitats, and drives awareness around the ecological importance of bees. This collaboration powers our Honey Sriracha, where high-quality floral honey becomes a key functional ingredient—enhancing flavour, texture, and nutrition while grounding the product in ethical value chains. Together, we’re championing craft, sustainability, and community-led food ecosystems.",
      num: "01. INQUIRY",
      image: "/bee_story_collaboration.png",
    },
  ];

  return (
    <section
      id="Collaboration"
      ref={elementRef}
      className="py-12 md:py-20 px-6 bg-lab-bg relative"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-left md:text-center mb-10 md:mb-24">
          <span className="font-sans text-sm md:text-md tracking-[0.3em] text-[#BFA15F] uppercase">
            Our
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#3E2F22]">
            COLLABORATIONS
          </h2>
          <p className="font-sans mt-1 text-[#3E2F22]/80 leading-loose">
            At Scoby Labs, collaboration is not a side initiative—it’s a
            strategic driver that shapes how we learn, create, and scale impact.
            Our partnerships allow us to bridge food, science, culture, and
            community in ways that are meaningful and future-facing.
          </p>
        </div>

        <div className="relative timeline-line">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-24 items-center group"
              >
                <div
                  className={`${
                    isEven
                      ? "md:order-1 md:text-right"
                      : "md:order-2 md:text-left"
                  }`}
                >
                  <h3
                    className={`font-serif text-2xl md:text-3xl text-[#3E2F22] flex items-center ${
                      isEven ? "md:justify-end" : ""
                    } gap-4`}
                  >
                    <span className="hover:text-[#BFA15F] md:hidden">
                      {step.icon}
                    </span>
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm text-[#3E2F22]/60 mt-4 leading-relaxed">
                    {step.text}
                  </p>

                  <div className="md:hidden flex items-center mt-4">
                    <span className="text-lab-gold font-sans text-xs tracking-widest">
                      {step.num}
                    </span>
                  </div>
                </div>

                

                {step.image && step.image !== "#" ? (
                  <div
                    className={`${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative w-full  overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={500}
                        className="object-cover h-1/2 w-3/2 object-center"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${isEven ? "md:order-2" : "md:order-1"}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
