"use client"
import { useIntersectionObserver } from "../hooks/useIntersection";


const TeamSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const specimens = [
    {
      name: 'Yaami',
      subtitle: 'Product Manager',
      desc: 'Responsible for transforming starches into sugars, the heart of sake, miso, and soy sauce.',
      img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000'
    },
    {
      name: ' Lakshay',
      subtitle: 'Intern',
      desc: 'The microscopic engine of fermentation, converting sugars into alcohol and carbon dioxide.',
      img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1000'
    },
    {
      name: 'Dayasha',
      subtitle: 'Intern',
      desc: 'Creators of acetic acid, giving vinegar and kombucha their distinctive sharp profile.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <section id="cultures" ref={elementRef} className="py-12 md:py-24 px-6 bg-lab-bg relative overflow-hidden">
      <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 md:mb-20">
          <span className="font-sans text-xs tracking-[0.3em] text-lab-gold uppercase">Specimen Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-lab-text">THE TEAM</h2>

          <p className="font-sans  text-[#3E2F22]/80 leading-loose">
            At Scoby Labs, the idea of a “team” extends far beyond titles or roles. It 
includes the Community Living Room at Blank Canvas, the friends who 
showed up in early experiments, and the wider community that continues to 
shape what we do. Our customers are part of this team too—through their 
feedback, curiosity, and trust, they help us refine our processes and think 
better. Every collaboration, conversation, tasting, and shared moment has 
contributed to the lab we are today. Scoby Labs exists because of collective 
effort, sustained support, and a community that believes in learning, making, 
and growing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {specimens.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center group hover-trigger">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-lab-accent/50 relative mb-6 md:mb-8 petri-dish overflow-hidden border border-lab-text/10 shadow-inner flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${s.img})` }} 
                />
                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full blur-xl animate-float ${idx % 2 === 0 ? 'bg-lab-gold/20' : 'bg-white/30'}`} />
              </div>
              <h3 className="font-serif text-2xl text-lab-text">{s.name}</h3>
              <p className="font-sans text-xs text-lab-text/50 mt-2 tracking-widest uppercase">{s.subtitle}</p>
              <p className="text-center text-sm text-lab-text/70 mt-4 max-w-xs leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;