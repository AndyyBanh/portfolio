import React from 'react'
import YouTubeFacade from './YouTubeFacade'
import ArtifactCaption from './ArtifactCaption'
import { CodeComment, CodeHeading } from './SectionParts'
import { artifacts } from '../data/artifacts'

const YOUTUBE_ID = "vxZnKNezrrs"

const WhyMeVideo = () => {
  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <CodeHeading title='Why me' />
        <CodeComment>A quick intro, in my own words.</CodeComment>
      </div>

      <div className='aspect-video w-full overflow-hidden rounded-xl border bg-muted'>
        <YouTubeFacade id={YOUTUBE_ID} title="Why me — Andy Banh" />
      </div>

      <ArtifactCaption {...artifacts.whyMe} />
    </div>
  )
}

export default WhyMeVideo
