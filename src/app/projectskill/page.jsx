"use client";

import {
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiGit,
  SiAmazonaws,
} from "react-icons/si";

export default function ProjectSkill() {
  return (
    <section className="w-full py-20 px-6 mt-10">
      
      {/* Title */}
      <div className="text-center mb-12">
     <h2 className="text-4xl font-semibold text-center relative inline-block">
  Skills

  <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-cyan-600 animate-neon"></span>
</h2>
        <p className="text-gray-400 mt-5">My Technical Level</p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Frontend */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/10 transition">
          <h3 className="text-xl font-semibold text-center mb-6">
            Frontend Developer
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm">

            <Skill icon={<SiHtml5 />} name="HTML5" level="Expert" />
            <Skill icon={<SiNextdotjs />} name="Next.js" level="Expert" />
            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" level="Intermediate" />
            <Skill icon={<SiJavascript />} name="JavaScript" level="Expert" />
            <Skill icon={<SiReact />} name="React.js" level="Expert" />

          </div>
        </div>

        {/* Backend */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/10 transition">
          <h3 className="text-xl font-semibold text-center mb-6">
            Backend Developer
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm">

            <Skill icon={<SiNodedotjs />} name="Node.js" level="Expert" />
           
            <Skill icon={<SiExpress />} name="Express.js" level="Expert" />
           
            <Skill icon={<SiMongodb />} name="MongoDB" level="Expert" />
           

          </div>
        </div>

      </div>
    </section>
  );
}

/* Skill Component */
function Skill({ icon, name, level }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl text-cyan-400">{icon}</span>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-400 text-xs">{level}</p>
      </div>
    </div>
  );
}