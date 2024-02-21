import './App.css';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
