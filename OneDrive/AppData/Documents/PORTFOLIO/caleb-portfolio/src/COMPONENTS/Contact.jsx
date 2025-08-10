// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // replace these with your EmailJS service/template/user IDs
      await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_USER_ID");
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <motion.form ref={formRef} onSubmit={sendEmail} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="grid gap-4">
          <input name="user_name" placeholder="Your name" className="border p-3 rounded" required />
          <input name="user_email" type="email" placeholder="Your email" className="border p-3 rounded" required />
          <textarea name="message" rows="6" placeholder="Message" className="border p-3 rounded" required />
          <div className="flex gap-3 items-center">
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white rounded">Send Message</button>
            <div className="text-sm">
              {status === "sending" && "Sending..."}
              {status === "sent" && <span className="text-green-600">Message sent — thank you!</span>}
              {status === "error" && <span className="text-red-600">Failed to send. Try later.</span>}
            </div>
          </div>
        </motion.form>
        <div className="mt-6 text-sm text-gray-600">
          Or email directly: <a href="mailto:calebsamraj0@gmail.com" className="text-indigo-600">calebsamraj0@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
