
"use client";

import { motion } from "framer-motion";
const AboutMe = () => {
    return (
        <div>
       <section id="aboutme" className="px-6 py-24 text-white bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-cyan-400 mb-10 text-center"
        >
          About Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40"
        >

          <p className="text-gray-200 leading-relaxed text-lg">
            I am a passionate <span className="text-cyan-400 font-semibold">Frontend Developer</span> from Bangladesh with a strong interest in building modern, responsive, and user-friendly web applications.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            I have completed my <span className="text-white font-semibold">SSC (2022)</span> from Chowbari Islamic Uccho Biddaloi with GPA 5.00 (A+) and my <span className="text-white font-semibold">HSC (2025)</span> from Haji Korop Ali Memorial Degree College, Science background.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Currently, I am focusing on modern web technologies like <span className="text-cyan-300">React.js, Next.js, JavaScript, and Tailwind CSS</span>. I also practice problem solving and continuously improve my development skills by building real-world projects.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            My goal is to become a professional full-stack developer and contribute to impactful software solutions that solve real problems.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm">
              React.js
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>

        </motion.div>

      </div>
    </section>
        </div>
    );
};

export default AboutMe;