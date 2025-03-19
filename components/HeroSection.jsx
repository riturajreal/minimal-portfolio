import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
      <section className='w-full py-8'>
          <div className='flex gap-4 items-center justify-between'>
              <div className='flex flex-col gap-1'>
                  <div className='flex gap-4 items-center'>
                      <h1 className='font-bold text-[24px] md:text-[48px]'>Ganesh Rana</h1>
                      <div className='bg-green-300/20 px-2 py-1 rounded-full -rotate-1 text-center'>
                          <p className='text-green-400 text-sm font-semibold'>Open to Work</p>

                      </div>
                  </div>
                 
                  <p  className='text-muted-foreground max-w-[480px] text-sm md:text-md'>Frontend and Backend Developer passionate about building intuitive and efficient web applications.</p>

                  
                          <div className='flex gap-2 items-center my-2'>
                              <MapPin className='w-4'/> <p>Banglore, Karnataka</p>
                          </div>
              </div>

              <div>
                 <img src="/ganesh_pfp.svg" width={120} alt="" />
              </div>
          </div>
    </section>
  )
}

export default HeroSection