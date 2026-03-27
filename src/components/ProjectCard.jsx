import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack = [], github, demo }) => (
  <article className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-200 mb-4">{description}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {techStack.map((tech) => (
        <span key={tech} className="text-xs uppercase tracking-wide px-3 py-1 bg-white/10 text-white rounded-full border border-white/15">{tech}</span>
      ))}
    </div>
    <div className="flex gap-3">
      <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition">
        <FaGithub /> GitHub
      </a>
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition">
          <FaExternalLinkAlt /> Live
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;
