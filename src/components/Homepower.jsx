"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepower = () => {
  return (
    <div className="flex items-center justify-center h-[400px] bg-blue-900">
      
      {/* Outer rotating text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-64 h-64 flex items-center justify-center"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text fill="white" fontSize="12" letterSpacing="3">
            <textPath href="#circlePath">
              • Full Stack Developer • React • Next.js • UI/UX • JavaScript •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Image */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
        <Image
          src=""
          alt="profile"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
};

export default Homepower;