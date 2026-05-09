import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiCss,
  SiHtml5,
} from "react-icons/si";

export default function Skills() {
  return (
  <section
      id="skills"
      className="py-24 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-white">
          My Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

 <SkillCard icon={<SiNextdotjs className="text-white" />} name="Next.js" glow="hover:shadow-white/40" />

<SkillCard icon={<SiReact className="text-cyan-400" />} name="React" glow="hover:shadow-cyan-400/40" />

<SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" glow="hover:shadow-green-500/40" />

<SkillCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind" glow="hover:shadow-sky-400/40" />

<SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" glow="hover:shadow-yellow-400/40" />

<SkillCard icon={<SiCss className="text-blue-500" />} name="CSS" glow="hover:shadow-blue-500/40" />

<SkillCard icon={<SiHtml5 className="text-orange-500" />} name="HTML" glow="hover:shadow-orange-500/40" />
        </div>

      </div>
    </section>
  );
}

/* 🎯 Skill Card */
function SkillCard({ icon, name, glow }) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center p-7 rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        transition duration-300 
        hover:scale-105 hover:-translate-y-2
        hover:border-white/30
        hover:shadow-2xl
        ${glow}
      `}
    >
      <div className="text-5xl text-white drop-shadow-lg">
        {icon}
      </div>

      <p className="mt-4 font-semibold text-lg text-white">
        {name}
      </p>
    </div>
  );
}