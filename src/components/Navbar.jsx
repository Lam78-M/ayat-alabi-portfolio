"use client";

import Link from "next/link";
import {
  House,
  User,
  Brain,
  FolderKanban,
  GraduationCap,
  Mail,
  Briefcase,
} from "lucide-react";


export default function Navbar() {
  const navItems = [
    {
      name: "HOME",
      href: "#homepower",
      icon: <House size={16} className="text-yellow-500" />,
      color:
        "hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10",
    },
    {
      name: "ABOUT",
      href: "#aboutme",
      icon: <User size={16} className="text-blue-400" />,
      color:
        "hover:border-pink-400 hover:text-pink-300 hover:bg-pink-500/10",
    },
    {
      name: "SKILLS",
      href: "#skills",
      icon: <Brain size={16} className="text-red-400" />,
      color:
        "hover:border-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10",
    },
    {
      name: "PROJECTS",
      href: "#projects",
      icon: <FolderKanban size={16} />,
      color:
        "hover:border-green-400 hover:text-green-300 hover:bg-green-500/10",
    },
    {
      name: "EDUCATION",
      href: "#education",
      icon: <GraduationCap size={16}  className="text-yellow-500"  />,
      color:
        "hover:border-purple-400 hover:text-purple-300 hover:bg-purple-500/10",
    },
    {
      name: "CONTACT",
      href: "#contact",
      icon: <Mail size={16} className="text-green-400" />,
      color:
        "hover:border-orange-400 hover:text-orange-300 hover:bg-orange-500/10",
    },
  ];

  return (
    <div id="navbar"
      className="bg-gradient-to-r
      w-full sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 text-white"
    >
      <div className="navbar  mx-auto px-4">
        
        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-white"
            >
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 rounded-2xl w-60
              bg-slate-900/95 backdrop-blur-xl border border-white/10 gap-2"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 border border-white/10
                    rounded-xl px-3 py-2 transition-all duration-300 ${item.color}`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BRAND */}
          <a
            className="text-xl font-bold tracking-wide
            bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500
            text-transparent bg-clip-text pl-4"
          >
         LAM
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl
                  border border-white/10 transition-all duration-300
                  backdrop-blur-md ${item.color}`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-xl
            font-semibold text-white
            bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
            hover:shadow-lg hover:shadow-cyan-500/30
            transition-all duration-300"
          >
            <Briefcase size={18} />
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
}