import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaJava, FaPython, FaReact, FaDatabase } from 'react-icons/fa';

const skills = [
  { label: 'Java', icon: <FaJava className="text-red-400" />, level: 90 },
  { label: 'Python', icon: <FaPython className="text-blue-500" />, level: 85 },
  { label: 'React', icon: <FaReact className="text-cyan-400" />, level: 88 },
  { label: 'SQL', icon: <FaDatabase className="text-yellow-400" />, level: 82 },
  { label: 'C', icon: <FaDatabase className="text-green-400" />, level: 78 },
];

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-6">
      <SectionTitle title="Skills" subtitle="Technologies I use to solve real problems." />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map(({ label, icon, level }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-5 rounded-2xl border border-white/20 shadow-soft"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xl font-semibold text-white">{icon} {label}</div>
              <span className="text-sm text-slate-200">{level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${level}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
