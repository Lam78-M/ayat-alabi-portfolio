"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white pt-20 pb-10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 mb-14"
        >

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">
              Ayat Lam
            </h2>
            <p className="text-slate-400 mt-4">
              Full-stack developer focused on modern UI, animations and clean code.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
              <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
              <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaGithub size={18} />
              </a>

              <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaLinkedin size={18} />
              </a>

              <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">

          <p>© {new Date().getFullYear()} Ayat Lam. All rights reserved.</p>

          <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition mt-4 md:mt-0">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;