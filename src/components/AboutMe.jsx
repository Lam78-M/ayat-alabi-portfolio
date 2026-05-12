
"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutme" className="w-full px-6 py-40  text-white ">
      
      {/* Title */}
      <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-center relative inline-block mb-3">
      About Me

  <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-cyan-600 animate-neon"></span>
</h2>
        <p className="text-gray-400 mt-2">My Introduction</p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image / Avatar */}

        <div className="flex-1 flex justify-center items-center">
  
  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 p-1 flex items-center justify-center">
    
    <div className="w-full h-full rounded-full bg-black overflow-hidden flex items-center justify-center">
      
      <Image
        src="/WhatsApp Image 2026-05-12 at 7.01.51 PM.jpeg"
        alt="profile"
        width={500}
        height={500}
        className="w-full h-full object-cover object-[center_100%]"
      />

    </div>
  </div>
</div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">
          
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer who loves building
            responsive, scalable, and visually stunning web applications.
            I enjoy working with modern technologies like Next.js, React,
            Node.js, and MongoDB.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/10 p-4 rounded-xl text-center">
    <p className="text-xl font-bold">Learning Phase</p>
    <p className="text-gray-400 text-sm">Web Development</p>
  </div>

  <div className="bg-white/10 p-4 rounded-xl text-center">
    <p className="text-xl font-bold">Assignment Projects</p>
    <p className="text-gray-400 text-sm">Practice Based</p>
  </div>

            <div className="bg-white/10 p-4 rounded-xl text-center">
    <p className="text-xl font-bold">9+ Skills</p>
    <p className="text-gray-400 text-sm">HTML, CSS, JS, React,NextJs and more...</p>
  </div>
          </div>

          {/* Social Links */}
         
  <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            <div className="flex gap-4">
              <a href="https://github.com/" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaGithub size={18} />
              </a>

              <a href="https://www.linkedin.com/in/ayat-alabi-lam/" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaLinkedin size={18} />
              </a>

              <a href="https://x.com/home" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaTwitter size={18} />
              </a>
                <a href="https://www.facebook.com/ayat.alabilam" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
          {/* Button */}
          <button className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-black font-semibold transition flex items-center gap-2">
            <HiCodeBracket size={18} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}