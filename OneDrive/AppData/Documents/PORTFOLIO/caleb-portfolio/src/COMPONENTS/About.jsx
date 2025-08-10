// src/components/About.jsx
import { motion } from "framer-motion";
import calebPhoto from "../images/caleb passs photo.jpg"; // ✅ Import your image

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* ✅ Profile Image */}
        <motion.img
          src={calebPhoto}
          alt="Caleb Samraj"
          className="rounded-full w-56 h-56 object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* ✅ About Me Text */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Motivated Electronics and Communication Engineering student with hands-on experience in frontend development.
            I build responsive web apps with React, and I’m passionate about AI, cloud technologies, and clean UI/UX.
            Currently studying at Saveetha Engineering College (B.E. ECE).
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div><strong>Email:</strong> calebsamraj0@gmail.com</div>
            <div><strong>Phone:</strong> +91 63801 93738</div>
            <div><strong>Location:</strong> Arakkonam, Tamil Nadu</div>
            <div>
              <strong>GitHub:</strong> 
              <a href="https://github.com/CalebSamraj14" className="text-indigo-600"> CalebSamraj14</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
