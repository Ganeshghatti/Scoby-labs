"use client";

import { useState } from "react";
import Image from "next/image";

import image1 from "../../../public/IMG_20240204_232855_259.jpg";
import image2 from "../../../public/NR_BIC_00303.jpg";
import image7 from "../../../public/20250618_153833.jpg";
import image3 from "../../../public/IMG_20240824_231000_333.jpg";
import image4 from "../../../public/IMG_20240204_232855_346.jpg";
import image5 from "../../../public/IMG-20240622-WA0004.jpg";
import image6 from "../../../public/IMG-20250613-WA0022.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: image1, alt: "img" },
    { src: image7, alt: "img" },

    { src: image2, alt: "img" },
    { src: image3, alt: "img" },
    { src: image4, alt: "img" },
    { src: image5, alt: "img" },
    { src: image6, alt: "img" },
  ];

  return (
    <section id="gallery" className=" px-6 lg:px-24 py-16 w-full">
      <div className="text-left md:text-center mb-10 md:mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#3E2F22]">
          Gallery
        </h2>
      </div>

      <div className="mt-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
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

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
            >
              ×
            </button>

            <div className="relative w-full max-h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="object-contain rounded-xl shadow-2xl"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
