import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-6 text-center flex justify-between items-center max-w-6xl mx-auto px-4">
      <p className="text-gray-600 text-sm">© 2024. All rights reserved.</p>
      <div className="flex space-x-6 text-gray-600 text-xl">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-blue-600 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <RiTwitterXFill className="hover:text-blue-600 transition" />
        </a>
        <a href="https://github.com/Aminhafis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:text-blue-600 transition" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
