import { Button } from '@/components/ui/button'
import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div className='grid grid-cols-1'>
        <h2 className='text-2xl font-bold text-center'>About Me</h2>
        <p className='text-sm text-center'>Computer Science Student @YorkU</p>
        <p className='text-xs text-center'>Toronto, Canada</p>
        <p className='mt-2 text-center text-base max-w-md mx-auto'>I&apos;m a passionate <span className='font-semibold'>full stack web developer.</span> Who loves turning ideas into interactive web applications. </p>
        <div className='flex justify-center mt-4 gap-4'>
          <a>
            <Button variant='outline' className='w-fit'>
              Resume <FaDownload />
            </Button>
          </a>
          <a href='mailto:andybanhab@gmail.com'>
            <Button variant='outline' className='w-fit'>
              Email <MdEmail />
            </Button>
          </a>
        </div>
    </div>

  )
}

export default About