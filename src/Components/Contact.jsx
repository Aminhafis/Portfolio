import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      className="bg-[#0F172A] text-white py-20 px-6 max-w-4xl mx-auto text-center rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
    >
      <h2 className="text-4xl font-bold text-white mb-2">Let's Connect</h2>
      <p className="text-lg text-gray-300 mb-10">
        Got a question, proposal, or just want to say hello? I'm open to collaborations and opportunities.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
        {/* Email */}
        <div className="flex items-center gap-4">
          <HiOutlineMail className="text-blue-500 text-3xl" />
          <div className="text-left">
            <a
              href="mailto:aminhafis875@gmail.com"
              className="text-blue-400 hover:underline"
            >
              aminhafis875@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.a
  href="mailto:aminhafis875@gmail.com"
  className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium mb-10"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
>
  Send Me an Email
</motion.a>


      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://linkedin.com/in/amin-hafis"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaLinkedin className="text-blue-500 text-2xl" />
        </a>
        <a
          href="https://github.com/Aminhafis"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGithub className="text-white text-2xl" />
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
