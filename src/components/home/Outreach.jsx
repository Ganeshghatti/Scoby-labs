"use client";

import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";
import image1 from "../../../public/market_1.jpg";
import image2 from "../../../public/market_2.jpg";
import image7 from "../../../public/market_4.jpg";
import image3 from "../../../public/market_6.jpg";
import image4 from "../../../public/market_7.jpg";
import image8 from "../../../public/20251127_173334.jpg";
import { useState } from "react";

const Outreach = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
    const [selectedImage, setSelectedImage] = useState(null);
  
    const galleryImages = [
      { src: image1, alt: "img" },
      { src: image7, alt: "img" },
      { src: image8, alt: "img" },
  
      { src: image2, alt: "img" },
      { src: image3, alt: "img" },
      { src: image4, alt: "img" },
  

    ];
  

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
        <div className="text-left md:text-center mb-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F22]">
            OUTREACH AND ENGAGEMENT
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col  gap-8 lg:gap-12 items-start">
          {/* Text Section */}
          <div className="w-full mt-1 ">
            <span className="font-sans text-center  text-sm sm:text-md md:text-lg tracking-[0.2em] text-[#BFA15F] uppercase block">
              THE KARAM KULTURE
            </span>

            <p className="font-sans text-justify text-[#3E2F22]/80 mt-3 leading-loose text-sm sm:text-base">
              At Scoby Labs, our outreach extends beyond products into
              meaningful, experience-led corporate engagements. We design and
              conduct interactive workshops that explore fermentation, food
              science, and food anthropology in accessible and engaging formats.
              Our food anthropology sessions examine how culture, history, and
              science intersect on the plate—opening conversations around
              sustainability, gut health, traditional knowledge systems, and
              inclusive food practices. These workshops are designed to be
              hands-on, thought-provoking, and community-oriented. Through this
              extension of our work, including curated experiences under Karam
              Kulture, we bring living food cultures into corporate
              spaces—transforming team gatherings into immersive learning
              experiences that are reflective, collaborative, and deeply
              enriching.
            </p>
          </div>

       <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
             {galleryImages.map((image, index) => (
               <div
                 key={index}
                 className="break-inside-avoid group cursor-pointer"
                 onClick={() => setSelectedImage(image)}
               >
                 <div className="relative w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]">
                   <Image
                     src={image.src}
                     alt={image.alt}
                     className="w-full h-auto object-cover rounded-2xl"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     placeholder="blur"
                   />
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
