// src/components/Hero.jsx
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useState, useEffect } from "react";
import robotImg from "../images/robot.png"; // Make sure this exists

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const deltaX = e.clientX - centerX;
      setRotate(deltaX / 30); // smaller = more sensitive
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-900 to-sky-900 text-white overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            links: { enable: true, color: "#9ca3af" },
            move: { enable: true, speed: 0.6 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Robot Image */}
      <motion.img
        src={robotImg}
        alt="Robot"
        className="w-48 h-48 mb-6 z-10"
        animate={{ rotate }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          CALEB SAMRAJ D
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Electronics & Communication Engineer — Frontend Developer • AI
          Enthusiast
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 rounded-full text-sm font-medium hover:bg-indigo-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 rounded-full text-sm hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
