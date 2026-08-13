import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const socials = [
  { icon: FaGithub, href: "https://github.com/AndyyBanh", label: "Github" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
    label: "Linkedin",
  },
  { icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
  { icon: FaEnvelope, href: "mailto:andybanhab@gmail.com", label: "Email" },
]

const About = () => {
  return (
    <div className='w-full flex flex-col items-start gap-6 text-left'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight'>hi i&apos;m andy</h1>
          <span className='flex items-center gap-1 text-sm text-muted-foreground'>
            <MdLocationOn /> Toronto, Canada
          </span>
        </div>

        <h2 className='text-xl sm:text-2xl font-medium text-muted-foreground'>
          typical cs student who spends countless hours on leetcode and building
        </h2>

        <p className='text-base sm:text-lg max-w-2xl'>
          Incoming Software Developer Co-op at GoodLife Fitness, studying @ YorkU
        </p>

        <div className='flex items-center gap-6'>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className='text-muted-foreground transition hover:scale-120 hover:text-foreground'
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div className='w-full overflow-x-auto'>
          <img
            src="https://ghchart.rshah.org/AndyyBanh"
            alt="AndyyBanh's Github chart"
            className='w-full min-w-[640px]'
          />
        </div>
    </div>

  )
}

export default About
