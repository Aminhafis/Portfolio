import React, { useEffect, useState } from "react";
import about from "./about.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const titles = [
  "Creative Front-End Developer 💡",
  "Aspiring Backend Developer ⚙️",
];

function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative overflow-hidden">
      <motion.div
        className="flex-1 text-center md:text-left pl-2 sm:pl-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 inline-block min-h-[50px]"
          whileHover={{ scale: 1.02 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titles[currentTitle]}
              className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentTitle]}
            </motion.span>
          </AnimatePresence>
          <motion.div
            className="h-[3px] bg-gradient-to-r from-indigo-600 to-blue-400 mt-2 rounded-full"
            layoutId="underline"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.h1>

        <motion.p
          className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I'm <strong className="text-slate-800">Amin Hafis</strong>. I
          craft seamless, modern experiences using <strong>React</strong> and
          the <strong>MERN</strong> stack to bring ideas to life.
        </motion.p>

        <motion.div
          className="mt-4 flex justify-center md:justify-start gap-10 text-gray-700 text-4xl"
          whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative group cursor-pointer">
            <a
              href="http://github.com/Aminhafis"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-black transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              GitHub
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <a
              href="http://linkedin.com/in/amin-hafis-b365a5276"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-blue-700 transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              LinkedIn
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <a
              href="/Amin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume"
              className="hover:text-green-700 transition-transform hover:scale-110"
            >
              <FaFileAlt />
            </a>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              View Resume
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <a
              href="mailto:aminhafis875@gmail.com"
              title="Email Me"
              className="hover:text-red-600 transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              Email Me
            </span>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Amin_Resume.pdf";
              link.download = "Amin_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="mt-10 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Download Resume
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative flex flex-col items-center md:items-start w-full md:w-fit"
      >
        <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full blur-2xl opacity-50"></div>

        <motion.img
          src={about}
          alt="Profile"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 md:ml-10 border border-neutral-400 animate-morph object-cover bg-slate-100"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />

        <p className="text-lg sm:text-xl text-gray-400 pt-6 font-medium hover:text-blue-700 text-center md:text-left">
          <strong className="text-slate-800 hover:text-blue-700">#</strong>{" "}
          Building real-world solutions with modern JavaScript 🛠️.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
