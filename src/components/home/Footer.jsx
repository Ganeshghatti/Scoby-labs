const { Linkedin, MapPin, FlaskConical, Phone } = require("lucide-react");

const Footer = () => {
  return (
    <footer className="py-12 border-t border-[#3E2F22]/10 text-center bg-[#FDFBF7]">
      <div className="flex justify-center space-x-6 mb-8 text-[#3E2F22]/60">
        <a href="https://www.linkedin.com/company/scoby-labs/" className="hover:text-[#BFA15F] transition-colors hover-trigger"><Linkedin size={24} /></a>
        <a href="https://wa.me/c/919113574563" className="hover:text-[#BFA15F] transition-colors hover-trigger"><Phone size={24} /></a>
        <a href="#contact" className="hover:text-[#BFA15F] transition-colors hover-trigger"><FlaskConical size={24} /></a>
      </div>
      <p className="font-sans text-[10px] tracking-[0.3em] text-[#3E2F22]/50 uppercase">
        © 2026 Scoby Labs. Fermentation Kitchen Labs.
      </p>
    </footer>
  );
};


export default Footer;