'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-xl mb-8 flex flex-col items-center text-center"
    >
      <motion.h1 
        className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Ameet Kumar Pradhan
      </motion.h1>
      <motion.h2 className="text-xl text-gray-300 mb-6">
        Full Stack Developer
      </motion.h2>
      <p className="text-gray-400 max-w-2xl mb-6">
        Passionate about creating elegant solutions to complex problems. Experienced in modern web technologies
        and best practices.
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/yourusername" className="text-gray-300 hover:text-white transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" className="text-gray-300 hover:text-white transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
          <FaEnvelope size={24} />
        </a>
      </div>
    </motion.header>
  );
}
