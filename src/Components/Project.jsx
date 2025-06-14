import React from "react";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import BookStore from "./BookStore.png"; // Project 1 image
import foodOrdering from "./qurettoHome.jpg";

function Project() {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-6 md:px-12 space-y-32">
      {/* AM Bookstore */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Text Section */}
        <div className="flex-1 cursor-pointer">
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://github.com/Aminhafis/bookstore-project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 rounded-full p-3 hover:scale-105 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://am-bookstore.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 rounded-full p-3 hover:scale-105 transition"
            >
              <LinkIcon size={24} />
            </a>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight hover:text-neutral-300">
            AM Bookstore
          </h2>

          <p className="text-lg md:text-xl mb-6 text-gray-300 ">
            A full-stack online bookstore built with the MERN stack. Browse,
            search, and purchase books with full admin features, user auth,
            cart, and secure checkout.
          </p>

          <p className="uppercase tracking-wider text-gray-400 hover:text-blue-500">
            MongoDB • &nbsp; Express.js • &nbsp; React &nbsp; • &nbsp; Node.js
            &nbsp;
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <motion.img
            src={BookStore}
            alt="Bookstore App Screenshot"
            className="rounded-xl shadow-lg w-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </motion.div>

      {/* Minimal Separator */}
      <div className="h-px bg-gray-300/20 w-full max-w-5xl mx-auto"></div>

      {/* Quretto Cafe */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12"
      >
        {/* Text Section */}
        <div className="flex-1 cursor-pointer">
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://github.com/Aminhafis/quretto-cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 rounded-full p-3 hover:scale-105 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://food-ordering-livid-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 rounded-full p-3 hover:scale-105 transition"
            >
              <LinkIcon size={24} />
            </a>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight hover:text-neutral-300">
            Quretto Cafe
          </h2>

          <p className="text-lg md:text-xl mb-6 text-gray-300">
            A food recipe app built using TheMealDB API. Users can explore meals
            by category, view details, and enjoy a vibrant, responsive UI.
          </p>

          <p className="uppercase tracking-wider text-gray-400 hover:text-yellow-600">
            React &nbsp; • &nbsp; Tailwind CSS &nbsp; • &nbsp; API Integration
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <motion.img
            src={foodOrdering}
            alt="Quretto Cafe App Screenshot"
            className="rounded-xl shadow-lg w-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Project;
