"use client";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";

const { FlaskConical, ChefHat, Users, Microscope } = require("lucide-react");

const Classroom = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const perks = [
    {
      type: "text",
      icon: <Microscope />,
      title: "Vision",
      desc: "To lead in sustainable food innovation, make nutritious and gut-friendly products accessible, and create meaningful work for communities often left out.",
    },
    {
      type: "image",
      link: "/IMG_20240522_021601_091.jpg",
    },
    {
      type: "text",
      icon: <ChefHat />,
      title: "Mission",
      desc: "To shape a business that serves everyone — uplifting communities now while safeguarding the world for tomorrow.",
    },
    {
      type: "image",
      link: "/IMG_20240824_231000_333.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-6 bg-[#3E2F22] text-lab-bg relative overflow-hidden">
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center  transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mt-2">
          <h2 className="font-sans text-left  text-xl md:text-3xl   tracking-[0.2em] text-lab-gold uppercase">
            FOUNDER’S MESSAGE{" "}
          </h2>
          <p className="font-sans text-[#FDFBF7]/70 text-left leading-loose mb-4 mt-2">
            Those who eat well can also feed well. I’ve always believed food
            should be top-notch flavour matters. And flavours can be elevated
            through culinary techniques backed by science, especially the kind
            unlocked by fermentation. As an educator who loves chemistry and
            biology, I’ve always felt at home in a kitchen. Cooking, aromas,
            techniques all of it carried a sense of familiarity, and the
            scientific curiosity I had as a child seemed to find its answers
            there.{" "}
          </p>
          <p className="font-sans text-[#FDFBF7]/70 text-left leading-loose mb-2">
            As an educator, I wanted to pass on that same curiosity to my
            students, and that is how Scoby Labs came to life to take this
            intersection of food and science out into the world. We aspire to
            scale and compete with the best, but what will always set us apart
            is what most brands overlook: customisation and inclusion. Everyone
            is welcome because food doesn’t discriminate, and neither do we.
            Food is our medium for inclusivity, which is why the first question
            that we ask any customer is very simple that is{" "}
            <span className="italic text-white ">
              “What do you like?”
            </span>
          </p>

          <p className="font-sans text-[#FDFBF7]/70 text-left leading-loose mb-6">
            Scoby Labs was born from inquisitiveness and research, and it will
            always stay rooted in inclusivity, transparency, and openness. Our
            doors will remain open to everyone, at all times. Our fundamental
            pillars are clear{" "}
            <span className="italic text-white">
              science, research, inclusion, and a genuine love for food.{" "}
            </span>
            If food is culture, then fermentation is conversation and we’re
            here to keep that conversation alive. Join us at the table.
          </p>
          <a
            href="#contact"
            className="inline-block border-b border-lab-gold pb-1 text-lab-gold hover:text-white transition-colors tracking-widest text-xs uppercase hover-trigger"
          >
            Connects With us
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {perks.map((p, idx) => (
            <div
              key={idx}
              className={`relative bg-[#FDFBF7]/5 p-6 md:p-8 backdrop-blur-sm border border-white/5 
      hover:border-lab-gold/30 transition-all duration-300
      ${idx % 2 !== 0 ? "sm:mt-8" : ""}`}
            >
              {p.type === "text" && (
                <>
                  <div className="text-[#BFA15F] mb-4 text-3xl">{p.icon}</div>
                  <h4 className="font-serif text-white text-xl mb-2">
                    {p.title}
                  </h4>
                  <p className="text-sm font-sans text-[#FDFBF7]/60 leading-relaxed">
                    {p.desc}
                  </p>
                </>
              )}

              {p.type === "image" && (
                <div className="relative w-full aspect-[1] overflow-hidden rounded-md">
                  <Image
                    src={p.link}
                    alt="Scoby Labs"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classroom;
