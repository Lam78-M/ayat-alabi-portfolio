"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";



import { Code2, Sparkles ,Link, ArrowUp, ArrowDown} from "lucide-react";
const Homepower = () => {
  return (
<section id="homepower">
    <div className="min-h-[500px] flex items-center  px-6 ">

  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE - CENTERED PROPERLY */}
    <div className="text-white text-center md:text-left flex flex-col items-center md:items-start space-y-5">
      <h1 className="text-3xl md:text-xl font-bold mt-50">
        Hey, I’m <span className="text-cyan-400"></span>
      </h1>
      <h1 className="text-4xl text-cyan-300">AYAT ALABI LAM</h1>

     
<p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
  <span
    className="inline-flex items-center gap-2 px-4 py-2 mb-4
    rounded-full border border-cyan-400/30
    bg-cyan-500/10 text-cyan-300 text-sm font-medium"
  >
    <Sparkles size={16} />
    Full Stack Web Developer
  </span>

  <br />

  <span className="text-white font-semibold">
    Crafting modern digital experiences
  </span>{" "}
  with{" "}
  <span className="text-cyan-400 font-semibold">React</span>,{" "}
  <span className="text-blue-400 font-semibold">Next.js</span>, and modern
  web technologies.

  <br />
  <br />

 <span className="flex items-start gap-2 text-gray-400">
  

  <span>
    🚀 Passionate about building <span className="text-white">responsive</span>,{" "}
    <span className="text-white">scalable</span>, and ✨ visually stunning
    web applications with 🧼 clean UI & ⚡ smooth user experience.
  </span>
</span>
</p>



  <a href="#projects">
  <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full text-black font-semibold transition">
    View Projects
  </button>
</a>

<a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition mt-4 md:mt-0 pl-2 border border-cyan-500 rounded-full px-3 py-1 items-center">
          Scroll Down <ArrowDown size={16} />
          </a>
    </div>

     

    {/* RIGHT SIDE - CENTER CIRCLE */}
    <div className="relative flex items-center justify-center  mt-10 sm:mt-20 lg:mt-50">

      {/* ROTATING TEXT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
            />
          </defs>

          <text fill="white" fontSize="11" letterSpacing="4">
            <textPath href="#circlePath">
              • Full Stack Developer • React • Next.js • CRUD • JavaScript •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* PROFILE IMAGE (CENTERED + RESPONSIVE) */}
     <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
  <Image
    src="/WhatsApp Image 2026-05-12 at 6.50.59 PM.jpeg"
    alt="profile"
    width={500}
    height={500}
    className="object-cover w-full h-full object-[center_30%]"
  />
</div>

    </div>

  </div>
</div>
</section>
  );
};

export default Homepower;