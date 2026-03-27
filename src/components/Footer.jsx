import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <div className="mb-4 flex justify-center gap-4">
        <a href="https://github.com/subhaharini" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition"><FaGithub size={22} /></a>
        <a href="https://linkedin.com/in/subhaharini" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition"><FaLinkedin size={22} /></a>
        <a href="mailto:subharharini05@gmail.com" className="hover:text-cyan-300 transition"><FaEnvelope size={22} /></a>
      </div>
      <p className="text-sm text-slate-400">© {new Date().getFullYear()} Subhaharini R. Built with React, Tailwind CSS.</p>
    </div>
  </footer>
);

export default Footer;
