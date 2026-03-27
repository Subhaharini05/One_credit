import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <SectionTitle title="About Me" subtitle="Computer Science student committed to building scalable software and evolving through collaborative projects." />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="glassmorphism p-8 rounded-3xl shadow-soft border border-white/20">
          <p className="text-slate-200 leading-relaxed">Hello! I&apos;m Subhaharini, a 3rd-year AIML student and aspiring software developer exploring full-stack development, AI/ML, and data-driven systems. I love converting ideas into working products, learning new technologies, and collaborating to solve real-world problems.</p>
          <p className="text-slate-200 leading-relaxed mt-4">My experience spans project-based work with Java, Python, React, SQL, C, and cloud APIs. I focus on clean architecture, responsive UX, and accessible interfaces. I am currently enhancing projects with modern best practices like testing and CI/CD.</p>
          <a href="/resume.pdf" download className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">Download Resume</a>
        </div>
        <div className="text-center md:text-left">
          <div className="w-full max-w-sm mx-auto rounded-[2.5rem] overflow-hidden shadow-soft border border-white/20 glassmorphism">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=80" alt="Profile" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
