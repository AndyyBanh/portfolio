"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

/* Shows the thumbnail + a play button and only loads YouTube's ~1MB player once clicked. */
const YouTubeFacade = ({ id, title }: { id: string; title: string }) => {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='w-full h-full'
      />
    )
  }

  return (
    <button
      type='button'
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className='group relative w-full h-full cursor-pointer'
    >
      {/* maxresdefault (1280x720) only exists for 720p+ uploads; fall back to hqdefault if a new video lacks it */}
      <Image
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        fill
        priority
        sizes="(max-width: 896px) 100vw, 896px"
        className='object-cover'
      />
      <span className='absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/10'>
        <span className='flex size-16 items-center justify-center rounded-full bg-black/70 text-white transition group-hover:scale-110 group-focus-visible:scale-110'>
          <Play className='size-7 translate-x-0.5' fill='currentColor' />
        </span>
      </span>
    </button>
  )
}

export default YouTubeFacade
