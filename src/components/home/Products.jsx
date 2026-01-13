"use client";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersection";

const Products = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const items = [
    {
      title: "KOMBUCHA",
      sub: "Kombucha is a fermented tea traditionally rooted in East Asian cultures.It’s brewed using black or green tea, sugar, and a living SCOBY—a symbiotic culture of bacteria and yeast.Over days of fermentation, it naturally develops probiotics, organic acids, and gentle carbonation.This process supports gut health while creating complex, refreshing flavours.Rich in tea polyphenols and acetic acid, kombucha helps balance beneficial bacteria in the body. A functional beverage where science, fermentation, and flavour come together.",
      tag: "/products/product1.jpeg",
    },
    {
      title: "WATER KEFIR",
      sub: "Water kefir is a fermented, non-dairy probiotic beverage produced using sugar water and kefir cultures.Through short fermentation, it develops natural carbonation and a mildly acidic profile.It contains diverse strains of beneficial bacteria and yeast formed during the fermentation process. Water kefir is traditionally valued for supporting gut and immune function. Being dairy-free and vegan, it fits a wide range of dietary preferences.A versatile ferment that highlights the simplicity and efficiency of microbial activity.",
      tag: "/products/product2.jpg",
    },
    {
      title: "GINGER ALE",
      sub: "Ginger ale is a carbonated beverage traditionally flavoured with ginger, known for its sharp, refreshing profile.At Scoby Labs, it is produced through natural fermentation rather than artificial carbonation.This process allows the drink to develop gentle effervescence and deeper flavour complexity over time.Made using real ginger, it retains the plant’s naturally warming and digestive properties.Historically rooted in 19th-century Europe, ginger ale continues to evolve through craft fermentation.A clean, functional ferment that balances spice, acidity, and natural fizz. ",
      tag: "/Screenshot 2026-01-13 144908.png",
    },
    {
      title: "KIMCHI",
      sub: "Kimchi is a traditional Korean fermented vegetable preparation, defined by process rather than a single recipe.At Scoby Labs, we craft a vegan kimchi  using seasonal vegetables, garlic, ginger, and spices.Natural lactic fermentation transforms the vegetables into a living, probiotic-rich food.This process enhances flavour while supporting digestion and nutrient absorption.Rooted in centuries-old preservation practices, kimchi reflects fermentation as both science and culture.A bold, evolving ferment shaped by time, microbes, and care. ",
      tag: "/Screenshot 2026-01-13 145150.png",
    },
    {
      title: "SAUERKRAUT ",
      sub: "Sauerkraut is a fermented cabbage preparation developed as a method of long-term preservation.Through natural lactic fermentation, cabbage transforms into a probiotic-rich, acidic ferment.This process enhances nutrient availability beyond that of raw cabbage.Sauerkraut contains beneficial bacteria that support gut health and digestion.Historically adopted across cultures, it reflects fermentation as both necessity and craft.A simple, structured ferment shaped by time, salt, and microbial activity. ",
      tag: "/Screenshot 2026-01-13 145150.png",
    },
    {
      title: "BEET KVASS",
      sub: "Beet kvass is a lacto-fermented beverage made using beets, water, and salt.The fermentation produces a tangy, earthy profile with a naturally vibrant colour.Rooted in Eastern European fermentation traditions, kvass evolved as a functional daily drink.Beet kvass develops beneficial bacteria through lactic fermentation.It is traditionally valued for supporting digestion and metabolic balance.A minimal ferment that highlights the functional depth of vegetables and time. ",
      tag: "/products/product3.jpg",
    },
    {
      title: "TEPACHE",
      sub: "Tepache is a lightly fermented beverage traditionally made from pineapple.It originated in pre-Columbian Mexico, where it was prepared as a household ferment rather than a standardized drink.Through short fermentation, pineapple develops gentle effervescence and a balanced sweet-tart profile.Tepache typically contains very low alcohol, similar to other natural ferments.Rooted in indigenous fermentation practices, it reflects adaptability and regional variation.A vibrant fruit ferment shaped by time, tradition, and microbial activity. ",
      tag: "/products/Screenshot 2026-01-13 111702.png",
    },
    {
      title: "HONEY SRIRACHA",
      sub: "Honey Sriracha is a fermented chili sauce that balances natural sweetness with controlled heat.At Scoby Labs, it’s crafted using real honey, chili paste, and pineapple vinegar.Fermentation deepens flavour complexity while preserving the sauce’s natural character.Unpasteurised and ingredient-forward, it develops a layered sweet–spicy profile.Designed for versatility, it works as a dip, glaze, or cooking ingredient.Made in collaboration with The Bee Story, supporting ethical, locally sourced honey.",
      tag: "/Screenshot 2026-01-13 145235.png",
    },
    {
      title: "JAGGERY SRIRACHA",
      sub: "Jaggery Sriracha is a fermented chili sauce that balances natural sweetness with controlled heat.Made using chili paste, jaggery, and pineapple vinegar, it develops depth through slow fermentation.This is our vegan take on sriracha, where jaggery replaces honey without compromising complexity.Unpasteurised and ingredient-led, it delivers a layered sweet–spicy profile with a subtle smoky note.Designed for versatility, it works as a condiment, glaze, or cooking ingredient.A contemporary ferment shaped by time, microbes, and plant-based craft. ",
      tag: "/products/Screenshot 2026-01-13 111702.png",
    },
    {
      title: "CHILI OIL",
      sub: "Chili oil is an aromatic condiment made by infusing oils with dried chilies, spices, and alliums.The slow infusion process builds heat, aroma, and savoury depth without overpowering the palate.Our approach highlights clean ingredients and balanced extraction for a smooth, flavour-forward finish.Rich in umami and gentle spice, it elevates noodles, dumplings, salads, breads, and marinades.Designed for versatility, it functions as both seasoning and garnish.A pantry staple that brings warmth, texture, and character to everyday food. ",
      tag: "/products/Screenshot 2026-01-13 111702.png",
    },
  ];

  return (
    <section
      id="products"
      ref={elementRef}
      className="py-12 md:py-24 px-6 bg-[#E6E0D4]/20"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-lab-gold uppercase">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-lab-text">
            OUR PRODUCTS
          </h2>
        </div>
        <div
          className="space-y-8 md:space-y-12 
                max-h-[700px] 
                overflow-y-auto 
                pr-2"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row justify-between items-baseline
                 border-b border-lab-text/10 pb-6
                 transition-all duration-300
                 cursor-pointer
                 hover:border-[#BFA15F]/50"
            >
              <div className="mb-2 md:mb-0 flex">
                <div>
                  <h3
                    className="font-serif text-2xl md:text-3xl 
                     transition-colors duration-300
                     group-hover:text-[#BFA15F]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="font-sans text-xs tracking-wide uppercase mt-2
                     text-[#3E2F22]/60"
                  >
                    {item.sub}
                  </p>
                </div>
                <div
                  className="
    ml-6
    w-[120px] sm:w-[150px] md:w-[280px]
    flex-shrink-0
    transition-transform duration-300
    group-hover:scale-105
  "
                >
                  <Image
                    src={item.tag}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
