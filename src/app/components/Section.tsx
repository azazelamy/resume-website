'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`neumorphic p-8 mb-8 relative overflow-hidden ${className}`}
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
