import Navbar from '@/components/home/Navbar';
import About from '@/components/home/About';
import VisualInterlude from '@/components/home/VisualInterlude';
import Classroom from '@/components/home/Classroom';
import Footer from '@/components/home/Footer';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/HeroSection';
import Products from '@/components/home/Products';
import Outreach from '@/components/home/Outreach';
import { MolecularBackground } from '@/components/hooks/MolecularBg';
import { CustomCursor } from '@/components/hooks/CustomCursor';
import TeamSection from '@/components/home/Team';
import Collaboration from '@/components/home/Collaboration';



export default function App() {
  return (
    <div className="selection:bg-lab-gold selection:text-white">
      <CustomCursor />
      <MolecularBackground />
      <Navbar/>
      <Hero />
      <About />
      <TeamSection />
      <Products/>
      <Collaboration/>
      <VisualInterlude/>
      <Classroom />
      <Outreach/>
      <Contact/>
      <Footer />
    </div>
  );
}
