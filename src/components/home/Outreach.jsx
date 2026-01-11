import { useIntersectionObserver } from "../hooks/useIntersection";

const Outreach = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

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
        <div className="text-center mb-4 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-[#3E2F22]">
            OUTREACH AND ENGAGEMENT
          </h2>
          <span className="font-sans text-md tracking-[0.3em] text-[#BFA15F] uppercase">
            THE KARAM KULTURE
          </span>
          <p className="font-sans  text-[#3E2F22]/80 leading-loose mt-2">
            Karam Kulture is the kitchen born from Scoby Labs, where
            fermentation science meets the bold, expressive flavours of Indian
            cuisine. Here, ancient techniques like culturing, pickling, brewing,
            and souring are reimagined through the lens of modern food science
            to create probiotic-rich dishes that nourish the body and spark
            curiosity. Rooted in heritage yet oriented toward the future, Karam
            Kulture bridges tradition with innovation — from sourdoughs layered
            with fiery ferments to ingredients shaped by precision fermentation
            and sustainable practice. It is a collaborative space for bakers,
            home chefs, and artisans, built on community, creativity, and
            conscious design. Above all, Karam Kulture is a celebration of food
            as culture, connection, and care — honoring our culinary past while
            shaping what the future of Indian food can be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
