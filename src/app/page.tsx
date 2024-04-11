import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
export default function Home() {
  return (
    <div>
      <Navbar />
      <hr />
      <Hero />
      <About />
      <Achievements />
    </div>
  );
}
