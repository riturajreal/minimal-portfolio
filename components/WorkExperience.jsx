import React from 'react';
import { workExperience } from '../utils/data';
import WorkCard from './WorkCard';

const WorkExperience = () => {
  return (
    <section className='w-full py-6'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-[24px] font-semibold'>Work Experience</h3>
        <div className='flex flex-col gap-5 w-full'>
          {workExperience.map((experience, index) => (
                  <WorkCard key={index} experience={experience} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
