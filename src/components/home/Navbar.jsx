"use client";

import Image from "next/image";

const { Menu, X } = require("lucide-react");
const { useState } = require("react");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-lab-bg/80 backdrop-blur-sm transition-all duration-300">
        <a href="#" className="hover-trigger">
          <Image src="/logo.jpg" alt="SCOBY LABS" width={50} height={50} className="h-16 w-16 md:h-24 md:w-24 rounded-full border border-lab-text/10" />
        </a>
        <div className="hidden md:flex space-x-12 font-sans text-xs tracking-[0.2em] uppercase text-lab-text">
          {['about', 'Team', 'products', 'Collaboration', 'contact'].map(item => (
            <a key={item} href={`#${item}`} className="hover:text-lab-gold transition-colors hover-trigger">
              {item}
            </a>
          ))}
        </div>
        <button onClick={() => setIsOpen(true)} className="md:hidden text-lab-text hover-trigger">
          <Menu size={24} />
        </button>
      </nav>

      <div className={`fixed inset-0 bg-lab-bg z-[60] flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-lab-text hover-trigger">
          <X size={24} />
        </button>
        {['about', 'Team', 'products', 'Collaboration', 'contact'].map(item => (
          <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)} className="font-serif text-3xl text-lab-text hover:text-lab-gold transition-colors">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
};


export default Navbar;