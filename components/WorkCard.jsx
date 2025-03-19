import React from 'react'

const WorkCard = ({experience}) => {
  return (
      <div className='flex flex-col gap-3 p-5 bg-secondary/20 rounded-2xl'>
          <div className='flex flex-col items gap-4 md:flex-row md:items-center'>
              <img src={experience.companyLogo} className='w-12 h-12' />
              
              <div>
                    <h3 className='text-[20px] font-semibold'>{experience.position}</h3>
                  <p className='text-muted-foreground'>{experience.companyName} | {experience.location} | {experience.duration}</p>
              </div>
          </div>

          <div>
              <p>
                  {experience.description}   
              </p>
          </div>
    </div>
  )
}

export default WorkCard