// src/components/Education.jsx
import { motion } from "framer-motion";

const items = [
  { title: "B.E. Electronics & Communication Engineering", meta: "Saveetha Engineering College, Oct 2022 – May 2026 | GPA: 7.5/10" },
  { title: "HSC (12th Grade)", meta: "Bharathidhasanar Matric Hr. Sec. School, 2021 – 2022 | Score: 80%" },
  { title: "SSLC (10th Grade)", meta: "Bharathidhasanar Matric Hr. Sec. School, 2019 – 2020 | Score: 98%" }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="p-4 bg-white rounded shadow">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">{it.meta}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
