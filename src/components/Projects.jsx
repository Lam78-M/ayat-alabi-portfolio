"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Globe,
  Database,
  ShieldCheck,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "TravelSphere",
    description:
      "A modern travel booking platform with secure authentication, destination management, and smooth animations.",
    image:
      "",
    tech: ["Next.js", "MongoDB", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "DevConnect",
    description:
      "Developer social platform where users can share posts, connect, and build their coding community.",
    image:
      "",
    tech: ["React", "Firebase", "Node.js", "Express"],
    github: "#",
    live: "#",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    title: "SecureVault",
    description:
      "",
    image:
      "",
    tech: ["NextAuth", "JWT", "MongoDB", "TypeScript"],
    github: "#",
    live: "#",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "DataFlow",
    description:
      "A full-stack analytics dashboard with beautiful charts, real-time insights, and admin controls.",
    image:
      "",
    tech: ["Next.js", "Chart.js", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
    icon: <Database className="w-5 h-5" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            Some of my modern full-stack and frontend development projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px]
              border border-white/10 bg-white/10 backdrop-blur-xl
              shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br
                from-cyan-400/10 via-white/5 to-indigo-500/10
                opacity-0 group-hover:opacity-100 transition duration-500"
              ></div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-[250px] object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                {/* Icon */}
                <div
                  className="absolute top-5 left-5 w-12 h-12 rounded-2xl
                  bg-white/10 backdrop-blur-lg border border-white/20
                  flex items-center justify-center text-cyan-300"
                >
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mb-7">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm text-cyan-200
                      bg-white/10 border border-white/10 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl
                    bg-white/10 hover:bg-white/20 border border-white/10
                    text-white transition duration-300"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl
                    bg-cyan-500 hover:bg-cyan-400 text-black font-semibold
                    transition duration-300 shadow-lg shadow-cyan-500/30"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Border Glow */}
              <div
                className="absolute inset-0 rounded-[30px]
                border border-cyan-400/10
                group-hover:border-cyan-400/30 transition duration-500"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;