"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full navbar bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-md sticky top-0 z-50">

      {/* LEFT SIDE */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">

          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Mobile Menu */}
          <ul className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-slate-900 rounded-box w-52 text-white">
            <li><Link href="#home">HOME</Link></li>
            <li><Link href="#aboutme">ABOUT</Link></li>
            <li><Link href="#skills">SKILLS</Link></li>
            <li><Link href="#projects">PROJECTS</Link></li>
            <li><Link href="#contact">CONTACT</Link></li>
            <li><Link href="#education">EDUCATION</Link></li>
          </ul>

        </div>

        {/* Brand */}
        <a className="btn btn-ghost text-lg sm:text-xl font-bold tracking-wide">
          AYAT ALABI LAM
        </a>

      </div>

      {/* CENTER (DESKTOP MENU) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 text-sm font-medium">

          <li><Link href="#home" className="hover:text-blue-300 transition">HOME</Link></li>
          <li><Link href="#aboutme" className="hover:text-blue-300 transition">ABOUT</Link></li>
          <li><Link href="#skills" className="hover:text-blue-300 transition">SKILLS</Link></li>
          <li><Link href="#projects" className="hover:text-blue-300 transition">PROJECTS</Link></li>
          <li><Link href="#contact" className="hover:text-blue-300 transition">CONTACT</Link></li>
          <li><Link href="#education" className="hover:text-blue-300 transition">EDUCATION</Link></li>

        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">

        <button className="btn btn-accent btn-sm sm:btn-md font-semibold">
          HIRE ME
        </button>

      </div>

    </div>
  );
}