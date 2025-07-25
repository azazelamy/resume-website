'use client';

import Header from './components/Header';
import Section from './components/Section';
import { motion } from 'framer-motion';

export default function Home() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Next.js', 'Python', 'SQL', 'AWS',
    'GraphQL', 'Git', 'Docker', 'REST APIs'
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Led development of scalable web applications, implemented modern best practices, and mentored junior developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Start-up',
      period: '2018 - 2020',
      description: 'Built and maintained client projects using React, Node.js, and cloud technologies.'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <Header />
      
      <Section title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              key={skill}
              className="glass p-3 text-center hover:shadow-lg transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass p-6 hover:translate-y-[-5px] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-gray-400 mb-2">{exp.company}</h4>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-6">
          <h3 className="text-xl font-semibold mb-2">Computer Science Degree</h3>
          <h4 className="text-gray-400 mb-2">University Name</h4>
          <p className="text-sm text-gray-500">2014 - 2018</p>
        </motion.div>
      </Section>

      <Section title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-6 hover:translate-y-[-5px] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-300">Description of your amazing project.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 hover:translate-y-[-5px] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-300">Description of another cool project.</p>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
