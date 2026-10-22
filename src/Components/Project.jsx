import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import BookStore from "./BookStore.png";
import foodOrdering from "./qurettoHome.jpg";
import agentDistribution from "./agentdistributionBg.png";

const projects = [
  {
    id: "01",
    title: "AM Bookstore",
    subtitle: "Full-Stack MERN eCommerce Platform",
    description:
      "A complete online bookstore solution engineered with the MERN stack. Features comprehensive administrative inventory management, secure JWT authentication, dynamic search and categorization, persistent shopping cart, and streamlined order checkout.",
    tags: ["MongoDB", "Express.js", "React 18", "Node.js", "Tailwind CSS", "JWT Auth"],
    image: BookStore,
    liveUrl: "https://am-bookstore.vercel.app/",
    githubUrl: "https://github.com/Aminhafis/bookstore-project",
    year: "2024",
  },
  {
    id: "02",
    title: "Quretto Cafe",
    subtitle: "Interactive Culinary Discovery & Recipe Engine",
    description:
      "A fast, responsive recipe platform built atop TheMealDB REST API. Engineered with client-side category filtering, dynamic ingredient breakdowns, smooth animated transitions, and an intuitive culinary browsing experience.",
    tags: ["React 18", "TheMealDB API", "Tailwind CSS", "Framer Motion", "Axios"],
    image: foodOrdering,
    liveUrl: "https://quretto-cafe.vercel.app/",
    githubUrl: "https://github.com/Aminhafis/quretto-cafe",
    year: "2024",
  },
  {
    id: "03",
    title: "Agent Distribution System",
    subtitle: "Scalable Task Allocation & Agent Dashboard",
    description:
      "A modern operations dashboard crafted for real-time agent distribution workflows. Focuses on data density, clean metric cards, responsive tables, and intuitive status monitoring for automated processes.",
    tags: ["React", "State Management", "Tailwind CSS", "REST API", "Lucide Icons"],
    image: agentDistribution,
    liveUrl: "https://github.com/Aminhafis",
    githubUrl: "https://github.com/Aminhafis",
    year: "2024",
  },
];

function Project() {
  return (
    <section id="project" className="relative py-28 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                01 {"//"} INDEX
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Selected <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Works</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-zinc-400 max-w-md leading-relaxed">
            A curated showcase of production applications and full-stack software built with performance, usability, and rigorous code structure.
          </p>
        </div>

        {/* Project Case Studies */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-2xl bg-charcoal-850/40 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 backdrop-blur-sm"
            >
              {/* Left / Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between font-mono text-xs text-zinc-500 pb-4 mb-5 border-b border-white/[0.06]">
                    <span className="text-amber-400/90 font-medium">{project.id} {"//"} PROJECT</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-light text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-1 mb-4">
                    {project.subtitle}
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-charcoal-950 font-mono text-xs font-medium hover:bg-zinc-200 transition-all hover:scale-105"
                  >
                    <span>VISIT SITE</span>
                    <FiArrowUpRight size={14} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition"
                  >
                    <FiGithub size={14} />
                    <span>SOURCE</span>
                  </a>
                </div>
              </div>

              {/* Right / Mockup Media Column */}
              <div className="lg:col-span-7">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl group/media bg-charcoal-950"
                >
                  <motion.img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-auto max-h-[440px] object-cover object-top transition-transform duration-700 ease-out group-hover/media:scale-[1.03]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Subtle glass reflection gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-40 group-hover/media:opacity-20 transition-opacity"></div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;
