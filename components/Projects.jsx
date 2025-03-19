import React from 'react';
import { projects } from '../utils/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className='w-full pt-6'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-[24px] font-semibold'>My Projects</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
          {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
