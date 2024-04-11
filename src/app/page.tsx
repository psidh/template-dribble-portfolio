import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import FiveButtons from '@/components/FiveButtons';
import LetsTalk from '@/components/LetsTalk';

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr />
      <Hero />
      <About />
      <Achievements />
      <Features />
      <Projects />
      <Services />
      <FiveButtons />
      <LetsTalk />
    </div>
  );
}
