import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

function Home() {
  return (
    <div className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      
      {/* Solar Eclipse Arc & Corona Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center z-0">
        {/* Soft Amber Corona Glow */}
        <div className="solar-glow absolute -top-12 w-[600px] h-[600px] rounded-full blur-[110px] bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-transparent"></div>
        
        {/* Concentric Architectural Rings */}
        <div className="absolute -top-6 w-[520px] h-[520px] rounded-full border border-white/[0.07] shadow-[0_0_120px_rgba(245,158,11,0.06)] flex items-center justify-center">
          <div className="w-[512px] h-[512px] rounded-full border border-white/[0.03]"></div>
          <span className="absolute -top-3 px-2.5 bg-charcoal-900 text-[10px] font-mono tracking-widest text-zinc-500 uppercase border border-white/10 rounded-full">
            SYSTEM CORE // LAT 12.97°N • 77.59°E
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-8 font-mono text-xs text-zinc-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="tracking-widest uppercase">CREATIVE FRONT-END & FULL-STACK DEVELOPER</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.08]">
            Crafting high-precision <br className="hidden sm:inline" />
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              web experiences
            </span>{" "}
            & digital systems.
          </h1>

          <p className="mt-7 text-base sm:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
            Hi, I’m <strong className="text-zinc-200 font-medium">Amin Hafis</strong>. I build fast, 
            thoughtfully animated interfaces and resilient full-stack applications with{" "}
            <span className="text-zinc-200 font-medium">React</span> and the{" "}
            <span className="text-zinc-200 font-medium">MERN</span> stack. Driven by minimalist design, 
            performance, and human-centric craft.
          </p>
        </motion.div>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          {/* Primary Action Button */}
          <a
            href="#project"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-charcoal-950 font-medium text-xs font-mono tracking-wider transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02]"
          >
            <span>EXPLORE WORK</span>
            <FiArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary Action Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs font-mono tracking-wider transition-colors"
          >
            <span>GET IN TOUCH</span>
          </a>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-4 sm:pl-6 text-zinc-400">
            <a
              href="https://github.com/Aminhafis"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2.5 rounded-full bg-white/[0.02] hover:bg-white/[0.08] hover:text-white border border-white/5 transition"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://linkedin.com/in/amin-hafis-b365a5276"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white/[0.02] hover:bg-white/[0.08] hover:text-white border border-white/5 transition"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="mailto:aminhafis875@gmail.com"
              title="Send Email"
              className="p-2.5 rounded-full bg-white/[0.02] hover:bg-white/[0.08] hover:text-white border border-white/5 transition"
            >
              <HiOutlineMail size={19} />
            </a>
          </div>
        </motion.div>

        {/* Monolog-Style Key Metric / Principle Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs"
        >
          <div className="space-y-1">
            <div className="text-zinc-500 uppercase tracking-widest text-[10px]">CORE ARCHITECTURE</div>
            <div className="text-zinc-200 font-medium">React • MERN • Tailwind</div>
          </div>
          <div className="space-y-1">
            <div className="text-zinc-500 uppercase tracking-widest text-[10px]">COMPETITION</div>
            <div className="text-zinc-200 font-medium">Hackathon Winner</div>
          </div>
          <div className="space-y-1">
            <div className="text-zinc-500 uppercase tracking-widest text-[10px]">PHILOSOPHY</div>
            <div className="text-zinc-200 font-medium">Speed & Visual Polish</div>
          </div>
          <div className="space-y-1">
            <div className="text-zinc-500 uppercase tracking-widest text-[10px]">BASE OF OPERATION</div>
            <div className="text-zinc-200 font-medium">Bangalore, India 📍</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;
