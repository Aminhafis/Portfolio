import React from "react";
import about from "./about.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-gray-50 py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        React Front-End Developer 👋🏻
        </h1>

        <p className="text-gray-700 mb-6 text-base sm:text-lg">
          Hi, I'm <strong>Amin Hafis</strong>, a passionate front-end developer
          with strong proficiency in <strong>React</strong> and the{" "}
          <strong>MERN stack</strong>, crafting clean and interactive web
          experiences.
        </p>

        <p className="text-lg sm:text-xl text-gray-800 font-medium">
          Versatile MERN Stack Developer & Creative UI Designer seeking exciting
          opportunities to build meaningful, user-focused digital products.
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex flex-col items-center md:items-start w-full md:w-fit"
      >
        <motion.img
          src={about}
          alt="Profile"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 md:ml-24 border border-neutral-400 animate-morph object-cover bg-slate-100"
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
