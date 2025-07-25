'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass relative overflow-hidden p-12 mb-12 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <motion.h1 
          className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Ameet Kumar Pradhan
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-gray-300 mb-4"
        >
          Software Development Engineer in Test - II
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-400 mb-2"
        >
          Glance Digital Experience Pvt. Ltd. • 3.7 Years
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-500 mb-8"
        >
          7 Years of Professional Experience
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mb-8 px-8 py-6 
            bg-gradient-to-br from-gray-800/30 to-gray-900/30 
            rounded-lg border border-gray-700/20"
        >
          <FaQuoteLeft className="text-purple-400 mb-4 opacity-50" />
          <p className="text-gray-300 italic text-lg">
            "If it is possible manually, it should be possible in automation"
          </p>
          <FaQuoteRight className="text-purple-400 mt-4 ml-auto opacity-50" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a 
            href="https://github.com/azazelamy" 
            className="p-3 rounded-full bg-gray-800/50 border border-gray-700/30 hover:bg-gray-700/50 transition-all"
          >
            <FaGithub size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a 
            href="https://linkedin.com/in/ameet-kumar-pradhan" 
            className="p-3 rounded-full bg-gray-800/50 border border-gray-700/30 hover:bg-gray-700/50 transition-all"
          >
            <FaLinkedin size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a 
            href="mailto:pradhanameet0@gmail.com" 
            className="p-3 rounded-full bg-gray-800/50 border border-gray-700/30 hover:bg-gray-700/50 transition-all"
          >
            <FaEnvelope size={24} className="text-gray-300 hover:text-white" />
          </a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
