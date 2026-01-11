"use client"
import { useIntersectionObserver } from "../hooks/useIntersection";

const {
  BrainCircuit,
  FlaskConical,
} = require("lucide-react");

const Collaboration = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const steps = [
    {
      title: "The Bee Story — Ethical Honey, Real Impact ",
      icon: <BrainCircuit className="w-5 h-5" />,
      text: "Our partnership with The Bee Story aligns with our commitment to ingredient integrity and responsible sourcing. The Bee Story is a purpose-led brand dedicated to delivering premium, ethically sourced honey through sustainable beekeeping practices. Their work supports local beekeepers, protects pollinator habitats, and drives awareness around the ecological importance of bees. This collaboration powers our Honey Sriracha, where high-quality floral honey becomes a key functional ingredient—enhancing flavour, texture, and nutrition while grounding the product in ethical value chains. Together, we’re championing craft, sustainability, and community-led food ecosystems.",
      num: "01. INQUIRY",
    },
    {
      title: "National Science Gallery — Fermentation Meets Public Education ",
      icon: <FlaskConical className="w-5 h-5" />,
      text: "Scoby Labs also partnered with the National Science Gallery, where our fermentation exhibit was showcased for a full year. This collaboration allowed us to demonstrate fermentation as a living interface between biology, chemistry, culture, and daily food systems. Through this exhibit, we engaged students, researchers, and the general public—opening up conversations on microbial ecosystems, food science, and experiential learning. The showcase reinforced our core thesis: science education becomes more memorable when it’s sensory, hands-on, and relevant to everyday life. ",
      num: "02. INOCULATION",
    },
    // {
    //   title: 'Metabolic Transformation',
    //   icon: <Activity className="w-5 h-5" />,
    //   text: 'The alchemy of time and temperature. Complex starches break down into simple sugars, proteins into amino acids (umami), and sugars into alcohols and acids.',
    //   num: '03. METABOLISM'
    // },
    // {
    //   title: 'Sensory & Chemical Analysis',
    //   icon: <ClipboardCheck className="w-5 h-5" />,
    //   text: 'The proof is in the palate and the data. We evaluate the organoleptic properties—taste, aroma, texture—alongside pH and brix readings.',
    //   num: '04. ANALYSIS'
    // }
  ];

  return (
    <section
      id="methodology"
      ref={elementRef}
      className="py-12 md:py-24 px-6 bg-lab-bg relative"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12 md:mb-24">
          <span className="font-sans text-xs tracking-[0.3em] text-[#BFA15F] uppercase">
            Our
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-[#3E2F22]">
            COLLABORATIONS
          </h2>
          <p className="font-sans  text-[#3E2F22]/80 leading-loose">
            At Scoby Labs, collaboration is not a side initiative—it’s a
            strategic driver that shapes how we learn, create, and scale impact.
            Our partnerships allow us to bridge food, science, culture, and
            community in ways that are meaningful and future-facing.
          </p>
        </div>

        <div className="relative timeline-line">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-12 md:mb-24 items-center group`}
            >
              <div
                className={`${idx % 2 === 0 ? "md:text-right" : "md:hidden"}`}
              >
                <h3
                  className={`font-serif text-2xl md:text-3xl text-[#3E2F22] flex items-center ${
                    idx % 2 === 0 ? "md:justify-end" : ""
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
              </div>

              <div className="hidden md:flex justify-center items-center relative">
                <div className="w-12 h-12 rounded-full bg-lab-bg border border-lab-text flex items-center justify-center group-hover:border-[#BFA15F] group-hover:scale-110 transition-all duration-500 z-10 text-[#3E2F22] group-hover:text-[#BFA15F]">
                  {step.icon}
                </div>
              </div>

              <div className={`hidden ${idx % 2 !== 0 ? "md:block" : ""}`}>
                <h3 className="font-serif text-2xl md:text-3xl text-[#26180c] flex items-center gap-4">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#3E2F22]/60 mt-4 leading-relaxed">
                  {step.text}
                </p>
              </div>

              <div className="md:hidden flex items-center mb-4 order-first">
                <span className="text-lab-gold font-sans text-xs tracking-widest">
                  {step.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
