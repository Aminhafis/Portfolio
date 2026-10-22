import React from "react";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-charcoal-950 py-10 font-mono text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Colophon */}
        <div className="flex items-center gap-3">
          <span className="text-zinc-300 font-medium">AMIN HAFIS</span>
          <span>{"//"}</span>
          <span>© 2026 ALL RIGHTS RESERVED</span>
        </div>

        {/* Center Technical Spec */}
        <div className="text-zinc-600 text-[11px] text-center">
          BANGALORE, INDIA • LAT 12.97°N, LON 77.59°E
        </div>

        {/* Right Action */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition py-1 px-3 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/5"
        >
          <span>BACK TO TOP</span>
          <FiArrowUp size={13} />
        </button>

      </div>
    </footer>
  );
}

export default Footer;
