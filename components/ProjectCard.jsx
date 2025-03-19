import React from 'react'
import { Button } from './ui/button'
import { Github, Globe } from 'lucide-react'

const ProjectCard = ({project}) => {
  return (
      <div className='flex flex-col gap-4 p-5 bg-secondary/20 rounded-2xl'>
          <iframe 
  className="rounded-xl w-full aspect-video"
  src={`${project.ytVideoUrl.replace('watch?v=', 'embed/')}?rel=0&modestbranding=1&controls=0&showinfo=0&fs=1`}
  title={project.name}
  frameBorder="0"
  allowFullScreen
></iframe>





          <div className='flex flex-col gap-2'>
                <h3 className='text-[24px] font-semibold'>{project.name}</h3>
                <p className='text-muted-foreground truncate-2'>{project.description}</p>
          </div>


          <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
          </div>
          
          <div className='flex gap-2'>
              <Button variant='outline'> <Globe /> <a href={project.liveUrl} target='blank'>View Demo</a></Button>
              
              <Button variant='outline'> <Github/> <a href={project.githubUrl} target='blank'>Github</a></Button>
          </div>
    </div>
  )
}

export default ProjectCard