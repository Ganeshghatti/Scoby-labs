import { useIntersectionObserver } from "../hooks/useIntersection";

const { FlaskConical, ChefHat, Users, Microscope } = require("lucide-react");

const Classroom = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const perks = [
    {
      icon: <Microscope />,
      title: "Vision",
      desc: "To lead in sustainable food innovation, make nutritious and gut-friendly products accessible, and create meaningful work for communities often left out. ",
    },
    {
      icon: <FlaskConical />,
      title: "Chemistry",
      desc: "PH levels, enzymatic reactions.",
    },
    {
      icon: <ChefHat />,
      title: "Mission",
      desc: "To shape a business that serves everyone — uplifting communities now while safeguarding the world for tomorrow.",
    },
    {
      icon: <Users />,
      title: "Community",
      desc: "Inclusive learning environment.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-[#3E2F22] text-lab-bg relative overflow-hidden">
      <div className="md:absolute -top-40 -right-20 w-64 h-64 md:w-96 md:h-96 border border-[#BFA15F]/20 rounded-full animate-spin-slow pointer-events-none" />
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center  transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="">
          <span className="font-sans text-lg md:text-2xl   tracking-[0.3em] text-lab-gold uppercase">
            FOUNDER’S MESSAGE{" "}
          </span>
          {/* <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-8 leading-tight"> <br/><span className="italic text-lab-gold">CLASSROOM</span></h2> */}
          <p className="font-sans text-[#FDFBF7]/70 leading-loose mb-4 mt-2">
            Those who eat well can also feed well. I’ve always believed food
            should be top-notch — flavour matters. And flavours can be elevated
            through culinary techniques backed by science, especially the kind
            unlocked by fermentation. As an educator who loves chemistry and
            biology, I’ve always felt at home in a kitchen. Cooking, aromas,
            techniques — all of it carried a sense of familiarity, and the
            scientific curiosity I had as a child seemed to find its answers
            there.{" "}
          </p>
          <p className="font-sans text-[#FDFBF7]/70 leading-loose mb-2">
            As an educator, I wanted to pass on that same curiosity to my
            students, and that is how Scoby Labs came to life — to take this
            intersection of food and science out into the world. We aspire to
            scale and compete with the best, but what will always set us apart
            is what most brands overlook: customisation and inclusion. Everyone
            is welcome because food doesn’t discriminate, and neither do we.
            Food is our medium for inclusivity, which is why the first question
            that we ask any customer is very simple that is{" "}
            <span className="text-black bg-yellow-200">
              “What do you like?”
            </span>
          </p>

          <p className="font-sans text-[#FDFBF7]/70 leading-loose mb-6">
            Scoby Labs was born from inquisitiveness and research, and it will
            always stay rooted in inclusivity, transparency, and openness. Our
            doors will remain open to everyone, at all times. Our fundamental
            pillars are clear —{" "}
            <span className="bg-red-200 text-black">
              science, research, inclusion, and a genuine love for food.{" "}
            </span>
            If food is culture, then fermentation is conversation — and we’re
            here to keep that conversation alive. Join us at the table.
          </p>
          <a
            href="#contact"
            className="inline-block border-b border-lab-gold pb-1 text-lab-gold hover:text-white transition-colors tracking-widest text-xs uppercase hover-trigger"
          >
            Connects With us
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perks.map((p, idx) => (
            <div
              key={idx}
              className={`bg-[#FDFBF7]/5 p-6 md:p-8 backdrop-blur-sm border border-white/5 hover:border-lab-gold/30 transition-colors ${
                idx % 2 !== 0 ? "mt-0 sm:mt-8" : ""
              }`}
            >
              <div className="text-[#BFA15F] mb-4">{p.icon}</div>
              <h4 className="font-serif text-white text-xl mb-2">{p.title}</h4>
              <p className="text-xs font-sans text-[#FDFBF7]/50">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classroom;
