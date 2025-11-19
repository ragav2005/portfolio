import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useFontAwesome } from "./hooks/useFontAwesome";

const App = () => {
  useFontAwesome();

  return (
    <div className="bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
