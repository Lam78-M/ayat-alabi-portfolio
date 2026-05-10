"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 text-white">

      <div className="navbar max-w-7xl mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              ☰
            </label>

            <ul className="menu menu-sm dropdown-content mt-3 p-4 rounded-xl w-52
              bg-slate-900/90 backdrop-blur-xl border border-white/10">

              <li><Link href="/homepower">HOME</Link></li>
              <li><Link href="#aboutme">ABOUT</Link></li>
              <li><Link href="#skills">SKILLS</Link></li>
              <li><Link href="#projects">PROJECTS</Link></li>
              <li><Link href="#education">EDUCATION</Link></li>
              <li><Link href="#contact">CONTACT</Link></li>
            </ul>
          </div>

          {/* BRAND */}
          <a className="text-xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
            AYAT LAM
          </a>

        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 text-sm font-medium">

            {[
              "home",
              "aboutme",
              "skills",
              "projects",
              "education",
              "contact",
            ].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`#${item}`}
                  className="text-slate-200 hover:text-cyan-300 transition"
                >
                  {item.toUpperCase()}
                </Link>

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">

          <button
            className="px-5 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
            hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            HIRE ME
          </button>

        </div>

      </div>
    </div>
  );
}