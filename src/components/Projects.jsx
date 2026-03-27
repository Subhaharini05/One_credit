import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import projects from '../data/projectsData';

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <SectionTitle title="Projects" subtitle="Selected side projects and apps." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
