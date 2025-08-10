// src/components/Certifications.jsx
import { motion } from "framer-motion";

const certs = [
  "Internet of Things (IoT) & Cloud Computing – NPTEL",
  "VLSI Design – NPTEL",
  "Prompt Engineering for Beginners - Coursera",
  "Generative AI Fundamentals - Google Cloud"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.div key={i} whileHover={{ rotateY: 10 }} className="bg-gray-800 p-4 rounded-lg shadow">
              <div className="font-medium">{c}</div>
              <div className="text-sm text-gray-400 mt-2">Issued: {i % 2 === 0 ? "2023" : "2024"}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
