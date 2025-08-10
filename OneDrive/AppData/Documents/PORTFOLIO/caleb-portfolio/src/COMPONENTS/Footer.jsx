// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} CALEB SAMRAJ D</div>
        <div className="flex gap-4">
          <a href="https://github.com/CalebSamraj14" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/caleb-samraj-d-b08562321" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
