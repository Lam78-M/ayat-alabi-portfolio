"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap size={26} />,
    title: "Secondary Education",
    badge: "Science",
    year: "2022",
    result: "GPA: 5.00 (A+)",
  },
  {
    icon: <BookOpen size={26} />,
    title: "Higher Secondary Education",
    badge: "Science",
    year: "2025",
    result: "GPA: 4.33 (A)",
  },
];

 function Education() {
  return (
    <section id="education" className="py-24 px-6 text-white mb-40 mt-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
      >
        Education
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {educationData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
            className="relative group p-6 rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-lg shadow-cyan-500/10
              overflow-hidden"
          >

            {/* glow background */}
            <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20" />

            <div className="relative flex items-center gap-5">

              {/* Icon circle */}
              <div className="p-4 rounded-full bg-white/10 border border-white/20 text-cyan-400 shadow-md group-hover:shadow-cyan-400/40 transition">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-300">

                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20">
                    {item.badge}
                  </span>

                  <span>Year: {item.year}</span>

                  <span>{item.result}</span>
                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
export default Education;