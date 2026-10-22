import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [time, setTime] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Web Audio context refs for soothing ambient drone
  const audioCtxRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const gainNodeRef = useRef(null);

  // Live Bangalore Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Ambient Audio Toggle (Synthesized 432Hz warm pad)
  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    if (!isAudioPlaying) {
      const ctx = audioCtxRef.current;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(108, ctx.currentTime); // A2 Root
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(162, ctx.currentTime); // E3 5th

      gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.2);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();

      osc1Ref.current = osc1;
      osc2Ref.current = osc2;
      gainNodeRef.current = gainNode;
      setIsAudioPlaying(true);
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(
          0.00001,
          audioCtxRef.current.currentTime + 0.6
        );
        setTimeout(() => {
          if (osc1Ref.current) {
            osc1Ref.current.stop();
            osc1Ref.current.disconnect();
          }
          if (osc2Ref.current) {
            osc2Ref.current.stop();
            osc2Ref.current.disconnect();
          }
        }, 600);
      }
      setIsAudioPlaying(false);
    }
  };

  const navItems = [
    { id: "01", label: "WORK", to: "#project" },
    { id: "02", label: "ABOUT", to: "#about" },
    { id: "03", label: "STACK", to: "#stack" },
    { id: "04", label: "CONTACT", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-charcoal-950/85 backdrop-blur-md border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
        
        {/* Brand Mark */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="font-mono text-sm tracking-widest uppercase font-bold text-white group-hover:text-amber-400 transition-colors">
            AMIN HAFIS
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 border border-white/10 px-2 py-0.5 rounded-full">
            BLR // 2026
          </span>
        </a>

        {/* Center: Status & Time */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.06] px-3.5 py-1.5 rounded-full">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300">AVAILABLE FOR ROLES</span>
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">BLR, IN {time}</span>
        </div>

        {/* Right Nav & Audio */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-xs font-mono tracking-wider">
            {navItems.map(({ id, label, to }) => (
              <li key={id}>
                <a
                  href={to}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 py-1"
                >
                  <span className="text-[10px] text-zinc-600">{id}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            title="Toggle Ambient Audio"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 transition"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 size={13} className="text-amber-400" />
                <span className="text-amber-300 text-[11px]">AMBIENT: ON</span>
                <div className="flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 bg-amber-400 eq-bar-1"></span>
                  <span className="w-0.5 bg-amber-400 eq-bar-2"></span>
                  <span className="w-0.5 bg-amber-400 eq-bar-3"></span>
                </div>
              </>
            ) : (
              <>
                <VolumeX size={13} className="text-zinc-500" />
                <span className="text-zinc-400 text-[11px]">SOUND: OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-400"
            aria-label="Toggle Sound"
          >
            {isAudioPlaying ? <Volume2 size={18} className="text-amber-400" /> : <VolumeX size={18} />}
          </button>
          
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300"
            aria-label="Toggle Menu"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {navOpen && (
        <div className="md:hidden bg-charcoal-950/98 border-b border-white/10 px-6 py-6 space-y-4 font-mono text-sm">
          <div className="flex items-center gap-2 pb-3 border-b border-white/5 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>AVAILABLE FOR ROLES • BLR {time}</span>
          </div>
          {navItems.map(({ id, label, to }) => (
            <a
              key={id}
              href={to}
              onClick={() => setNavOpen(false)}
              className="block text-zinc-300 hover:text-white transition py-2"
            >
              <span className="text-zinc-600 mr-2">{id} {"//"}</span>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
