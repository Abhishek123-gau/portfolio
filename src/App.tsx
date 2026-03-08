import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Research } from './components/sections/Research';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.05)_0%,transparent_50%)]"></div>
      </div>
    </div>
  );
}

export default App;
