import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Hero from "./sections/Hero.jsx";
import Profiles from "./sections/Profiles.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Timeline from "./sections/Timeline.jsx";
import { useLenis } from "./hooks/useLenis.js";

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-ink-950 text-white selection:bg-signal-cyan selection:text-ink-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Profiles />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
