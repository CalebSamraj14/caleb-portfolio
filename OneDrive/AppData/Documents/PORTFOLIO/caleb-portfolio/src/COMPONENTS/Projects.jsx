// src/COMPONENTS/Projects.jsx
import { motion } from "framer-motion";
import expenseTrackerImg from "../images/expense-tracker.webp";
import weatherMonitoringImg from "../images/weather.jpg";

const projects = [
  {
    title: "Expense Tracker Web App",
    desc: "React-based expense tracker with Add/Edit/Delete, dark mode, filters and charts. LocalStorage persistence. Live demo & GitHub available.",
    link: "https://calebsamraj14.github.io/expense-tracker",
    repo: "https://github.com/CalebSamraj14/expense-tracker",
    img: expenseTrackerImg,
  },
  {
    title: "Weather Monitoring System (Arduino)",
    desc: "Embedded project capturing temperature/humidity/pressure using Arduino. Data logger implemented in C.",
    link: "#",
    repo: "#",
    img: weatherMonitoringImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-gray-50 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image with zoom effect */}
              <motion.div
                className="rounded-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover"
                />
              </motion.div>

              {/* Text */}
              <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>

              {/* Buttons with animation */}
              <div className="mt-4 flex gap-3">
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#4338CA" }}
                  transition={{ duration: 0.2 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border rounded-md text-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#E5E7EB",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
