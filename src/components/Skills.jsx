import ProjectSkill from "@/app/projectskill/page";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiCss,
  SiHtml5,
  SiExpress,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  return (
  <section
      id="skills"
      className="py-24 "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-center relative inline-block">
  Technologies

  <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-cyan-600 animate-neon"></span>
</h2>
        <p className="mb-20 text-xl mt-5">My tech stack</p>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

 <SkillCard icon={<SiNextdotjs className="text-white" />} name="Next.js" glow="hover:shadow-white/40" />

<SkillCard icon={<SiReact className="text-cyan-400" />} name="React" glow="hover:shadow-cyan-400/40" />

<SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" glow="hover:shadow-green-500/40" />

<SkillCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind" glow="hover:shadow-sky-400/40" />

<SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" glow="hover:shadow-yellow-400/40" />

<SkillCard icon={<SiCss className="text-blue-500" />} name="CSS" glow="hover:shadow-blue-500/40" />

<SkillCard icon={<SiHtml5 className="text-orange-500" />} name="HTML" glow="hover:shadow-orange-500/40" />

<SkillCard icon={<IoLogoNodejs className="text-green-500" />}  name="Node.js"  glow="hover:shadow-green-500/40" />

<SkillCard  icon={<SiExpress className="text-gray-300" />}  name="Express.js"  glow="hover:shadow-gray-400/30" />

<SkillCard icon={<SiGithub className="text-gray-300" />} name="GitHub" glow="hover:shadow-gray-400/30"/>
        </div>

      </div>
      <ProjectSkill></ProjectSkill>
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