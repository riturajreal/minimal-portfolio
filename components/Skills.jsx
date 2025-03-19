import React from 'react';
import { skills } from '../utils/data';

const Skill = () => {
  return (
    <section className='w-full py-6'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-[24px] font-semibold'>Skills</h3>
        <div className='flex gap-2 flex-wrap'>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className='bg-primary rounded-md px-3 py-2 flex items-center gap-2 text-primary-foreground text-sm font-bold'
            >
              {skill.logo &&  (<img src={skill.logo} alt={skill.name} className='w-4' />) }
             
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
