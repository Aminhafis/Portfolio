import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "aminhafis875@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-charcoal-850/80 to-charcoal-900/90 border border-white/[0.08] shadow-2xl backdrop-blur-md overflow-hidden text-center"
        >
          {/* Subtle Ambient Solar Aura */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-500/10 blur-[80px]"></div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="tracking-widest uppercase">03 {"//"} INITIATE DIALOGUE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl mx-auto leading-tight mb-6">
            Let’s build something <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              extraordinary together.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
            I am currently open to software engineering opportunities, front-end roles, 
            and collaborative projects. Feel free to reach out directly.
          </p>

          {/* Direct Email Action Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-charcoal-950 font-mono text-xs font-medium hover:bg-zinc-200 transition-all hover:scale-105 shadow-lg"
            >
              <HiOutlineMail size={16} />
              <span>SEND AN EMAIL</span>
              <FiArrowUpRight size={14} />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 font-mono text-xs transition"
            >
              {copied ? <FiCheck className="text-emerald-400" size={14} /> : <FiCopy size={14} />}
              <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-wrap justify-center items-center gap-6 font-mono text-xs text-zinc-400">
            <a
              href="https://github.com/Aminhafis"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition group"
            >
              <FaGithub size={15} />
              <span>GITHUB</span>
              <FiArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href="https://linkedin.com/in/amin-hafis-b365a5276"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition group"
            >
              <FaLinkedin size={15} />
              <span>LINKEDIN</span>
              <FiArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="text-zinc-700">•</span>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-white transition group"
            >
              <HiOutlineMail size={15} />
              <span>aminhafis875@gmail.com</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
