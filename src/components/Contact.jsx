"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-50 px-6 text-white"
    >
      {/* Title */}
 <div className="flex justify-center">
  <h2 className="text-4xl font-semibold text-center relative inline-block mb-30">
    Get In Touch

    <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-cyan-600 animate-neon"></span>
  </h2>
</div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            Let’s build something amazing 🚀
          </h3>

          <p className="text-slate-300 leading-relaxed">
            I’m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          {/* Info Cards */}
          <div className="space-y-4">

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
              <Mail className="text-cyan-400" />
              <span className="text-slate-200">ayatlam63@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
              <Phone className="text-cyan-400" />
              <span className="text-slate-200">+880 1602514628</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
              <MapPin className="text-cyan-400" />
              <span className="text-slate-200">Bangladesh</span>
            </div>

          </div>

          <div>
                      <h3 className="text-lg font-semibold mb-4">Connect With</h3>
          
                      <div className="flex gap-4">
                        <a href="https://github.com/" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                          <FaGithub size={18} />
                        </a>
          
                        <a href="https://www.linkedin.com/in/ayat-alabi-lam/" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                          <FaLinkedin className="text-blue-500" size={18} />
                        </a>
          
                        <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                          <FaTwitter size={18} />
                        </a>
                          <a href="https://www.facebook.com/ayat.alabilam" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                          <FaFacebook className="text-blue-400" size={18} />
                        </a>
                      </div>
                    </div>
        </motion.div>

        {/* RIGHT FORM */}
      <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative p-[2px] rounded-2xl overflow-hidden"
>
  {/* glowing border (softened) */}
  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00f5ff33,#3b82f633,#8b5cf633,#00f5ff33)] animate-spin-slow blur-sm opacity-70"></div>

  {/* form */}
  <div className="relative bg-white/5 backdrop-blur-2xl p-8 rounded-2xl space-y-5 border border-white/10 shadow-xl">

    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
      outline-none text-white placeholder:text-gray-400
      focus:border-cyan-400/50 transition"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
      outline-none text-white placeholder:text-gray-400
      focus:border-blue-400/50 transition"
    />

    <textarea
      rows="5"
      placeholder="Your Message"
      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
      outline-none text-white placeholder:text-gray-400
      focus:border-indigo-400/50 transition"
    ></textarea>

    <button
      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
      bg-white/10 backdrop-blur-md border border-white/10
      text-white font-semibold
      hover:bg-white/15 hover:shadow-lg hover:shadow-cyan-500/20
      transition"
    >
      Send Message <Send size={18} />
    </button>

  </div>
</motion.div>
      </div>
    </section>
  );
}