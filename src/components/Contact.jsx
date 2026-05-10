"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-cyan-400 mb-14"
      >
        Contact Me
      </motion.h2>

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
              <span className="text-slate-200">youremail@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
              <Phone className="text-cyan-400" />
              <span className="text-slate-200">+880 1XXXXXXXXX</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
              <MapPin className="text-cyan-400" />
              <span className="text-slate-200">Bangladesh</span>
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
          {/* glowing border */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00f5ff,#3b82f6,#8b5cf6,#00f5ff)] animate-spin-slow"></div>

          {/* form */}
          <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 outline-none text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 outline-none text-white"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 outline-none text-white"
            ></textarea>

            <button
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
              bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
              font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Send Message <Send size={18} />
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}