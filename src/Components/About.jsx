import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiFigma,
} from "react-icons/si";
import { FiAward, FiZap } from "react-icons/fi";

const stackCategories = [
  {
    title: "FRONTEND CORE",
    items: [
      { name: "React 18", icon: FaReact, color: "text-cyan-400" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-amber-300" },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "BACKEND & DATA",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-emerald-400" },
      { name: "Express.js", icon: SiExpress, color: "text-zinc-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "RESTful APIs", icon: FiZap, color: "text-amber-400" },
    ],
  },
  {
    title: "DEV ENVIRONMENT & TOOLS",
    items: [
      { name: "Git & GitHub", icon: FaGithub, color: "text-zinc-200" },
      { name: "Vite & Tooling", icon: SiVite, color: "text-purple-300" },
      { name: "Postman API", icon: SiPostman, color: "text-orange-400" },
      { name: "Figma UI/UX", icon: SiFigma, color: "text-pink-400" },
    ],
  },
];

const principles = [
  {
    num: "01",
    title: "Performance & Structure by Default",
    desc: "A fast, accessible website is non-negotiable. I write clean, modular components and optimized code that scales effortlessly.",
  },
  {
    num: "02",
    title: "Tactile Motion & Design Polish",
    desc: "Micro-interactions, smooth easing curves, and typographic discipline separate forgettable sites from work that genuinely captivates.",
  },
  {
    num: "03",
    title: "Competitive Drive & Real Impact",
    desc: "Multiple inter-college hackathon wins and active campus community leadership inspire me to build software that solves actual problems.",
  },
];

function About() {
  return (
    <section id="about" className="relative py-28 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            02 {"//"} BACKGROUND & SPECS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-16">
          Philosophy & <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Capabilities</span>
        </h2>

        {/* Two-Column Grid (Monolog Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Narrative & Principles */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">
                THE NARRATIVE
              </h3>
              <p className="text-base text-zinc-300 font-light leading-relaxed mb-4">
                I’m Amin — a front-end and full-stack developer based in Bangalore, India 📍. 
                I specialize in engineering responsive, tactile user experiences with React, 
                Node.js, and modern CSS architecture.
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Beyond shipping code, I actively organize tech communities on campus, compete in 
                hackathons, and follow design trends obsessively. Outside the terminal, you’ll find 
                me playing football, cheering for FC Barcelona, or exploring culinary experiments.
              </p>
            </div>

            {/* Principles List */}
            <div className="pt-6 border-t border-white/[0.06] space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                WORK PRINCIPLES
              </h3>

              <div className="space-y-4">
                {principles.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition"
                  >
                    <div className="flex items-center gap-3 mb-1.5 font-mono text-xs">
                      <span className="text-amber-400 font-medium">{item.num} {"//"}</span>
                      <span className="text-white font-medium">{item.title}</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technical Specification Matrix */}
          <div id="stack" className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">
                TECHNICAL SPECIFICATION
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                A structured overview of core languages, libraries, and frameworks I use to build scalable web applications.
              </p>
            </div>

            <div className="space-y-6">
              {stackCategories.map((category) => (
                <div
                  key={category.title}
                  className="p-6 rounded-2xl bg-charcoal-850/50 border border-white/[0.06] backdrop-blur-sm"
                >
                  <div className="font-mono text-xs text-zinc-500 tracking-wider mb-4 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                    <span>{category.title}</span>
                    <span className="text-zinc-600">[04 SPEC]</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((tech) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition group"
                        >
                          <IconComponent
                            size={18}
                            className={`${tech.color} group-hover:scale-110 transition-transform`}
                          />
                          <span className="font-mono text-xs text-zinc-300 font-light">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Hackathon Badge */}
            <div className="p-4 rounded-xl bg-amber-500/[0.05] border border-amber-500/20 flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                <FiAward size={22} />
              </div>
              <div className="font-mono text-xs">
                <div className="text-amber-300 font-medium">Inter-College Hackathon Winner</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">Recognized for rapid MERN prototyping & UI execution.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
