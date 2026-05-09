"use client";

import { motion } from "framer-motion";

const Education = () => {
    return (
        <div>
               <section className="px-6 py-20 min-h-screen text-white bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950">

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-400 mb-12 text-center"
      >
        Education
      </motion.h2>

      <div className="space-y-8 max-w-5xl mx-auto">

        {/* SSC */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="p-6 rounded-2xl 
          bg-white/10 backdrop-blur-md 
          border border-white/20 
          shadow-lg shadow-black/40"
        >
          <h3 className="text-xl font-semibold">
            Secondary School Certificate (SSC)
          </h3>
          <p className="text-gray-200 mt-1">
            Chowbari Islamic Uccho Biddaloi
          </p>
          <p className="text-gray-400 mt-2">
            Year: 2022 | Science | GPA: 5.00 (A+)
          </p>
        </motion.div>

        {/* HSC */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="p-6 rounded-2xl 
          bg-white/10 backdrop-blur-md 
          border border-white/20 
          shadow-lg shadow-black/40"
        >
          <h3 className="text-xl font-semibold">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-gray-200 mt-1">
            Haji Korop Ali Memorial Degree College
          </p>
          <p className="text-gray-400 mt-2">
            Year: 2025 | Science | Completed
          </p>
        </motion.div>

      </div>
    </section>
        </div>
    );
};

export default Education;