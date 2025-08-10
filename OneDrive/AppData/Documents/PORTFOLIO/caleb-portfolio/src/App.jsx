// src/App.jsx

import Navbar from "./COMPONENTS/Navbar";
import Hero from "./COMPONENTS/Hero";
import About from "./COMPONENTS/About";
import Skills from "./COMPONENTS/Skills";
import Projects from "./COMPONENTS/Projects";
import Education from "./COMPONENTS/Education";
import Certifications from "./COMPONENTS/Certifications";
import Contact from "./COMPONENTS/Contact";
import Footer from "./COMPONENTS/Footer";


export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
