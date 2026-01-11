const { Linkedin, MapPin, FlaskConical } = require("lucide-react");

const Footer = () => {
  return (
    <footer className="py-12 border-t border-[#3E2F22]/10 text-center bg-[#FDFBF7]">
      <div className="flex justify-center space-x-6 mb-8 text-[#3E2F22]/60">
        <a href="#" className="hover:text-[#BFA15F] transition-colors hover-trigger"><Linkedin size={24} /></a>
        <a href="#" className="hover:text-[#BFA15F] transition-colors hover-trigger"><MapPin size={24} /></a>
        <a href="#" className="hover:text-[#BFA15F] transition-colors hover-trigger"><FlaskConical size={24} /></a>
      </div>
      <p className="font-sans text-[10px] tracking-[0.3em] text-[#3E2F22]/50 uppercase">
        © 2025 Scoby Labs. Fermentation Kitchen Labs.
      </p>
    </footer>
  );
};


export default Footer;