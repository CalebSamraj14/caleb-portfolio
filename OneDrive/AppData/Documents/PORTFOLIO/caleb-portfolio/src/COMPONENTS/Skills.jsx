// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaJava, FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Python (Basic)", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {skills.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-6 bg-gray-800 rounded-xl shadow hover:scale-105 transition transform">
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="font-medium">{s.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
