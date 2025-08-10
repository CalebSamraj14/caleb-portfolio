// src/components/Navbar.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const links = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 backdrop-blur-sm ${scrolled ? "bg-white/80 shadow" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6">
        <a href="#home" className="text-xl font-semibold">Caleb Samraj</a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-indigo-600">{l}</a></li>
          ))}
        </ul>
        <div className="md:hidden"> {/* mobile simple menu placeholder */} ☰ </div>
      </div>
    </motion.nav>
  );
}
