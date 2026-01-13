"use client"
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";
import image1 from "../../../public/IMG-20240622-WA0004.jpg"
import image2 from '../../../public/IMG-20250613-WA0022.jpg'
import image3 from "../../../public/IMG_20240204_232855_346.jpg"
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
    <section id="Team" ref={elementRef} className="py-12 md:py-24 px-6 bg-lab-bg relative overflow-hidden">
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

       <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 px-10 py-6 w-full bg-[#F5F5F5]"
      id="gallery"
    >
      <div className="relative aspect-square w-full overflow-hidden  shadow-md">
        <Image
          src={image1}
          alt="Social Hardware robotics lab workspace"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden shadow-md">
        <Image
          src={image2}
          alt="Collaborative robot in action"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative aspect-square w-full overflow-hidden  shadow-md">
        <Image
          src={image3}
          alt="Robotic automation system"
          fill
          className="object-cover"
        />
      </div>
    </div>
      </div>
    </section>
  );
};

export default TeamSection;