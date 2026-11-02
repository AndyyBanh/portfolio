import React from 'react'

const paragraphs = [
  "Growing up, I watched things I wanted stay out of reach, and it stung. Now, things feel more real. I’m a third-year computer science student at York University, currently completing a software development co-op at GoodLife Fitness, building production systems. I’m invested in backend and distributed systems. Outside of academics, I run an ecommerce business where I generated over $60k in revenue in 2025. Running a solo business has built my resilience, adaptability, and helped me develop a client first mindset, all which have made be a better developer.",
  "From the moment I got my first iPad at 8 years old, I became hooked on technology. Growing up around older cousins who loved gaming and tech, paved the way for me to get into computer science. Whether I was building games on Roblox, modding in Minecraft, or editing videos, I was always creating things. I started from ground zero each time. It was always a challenge, but I learned. There is no greater feeling than knowing all the hard work you put in, created a product that somebody benefits from.",
  "When deciding on post-secondary education, I chose York University because its close network let me to pursue my studies, work towards becoming a software engineer, and keep running my business. In high school, I had this math teacher who was the most honest person I’ve met. He led by example, without saying much his message was simple. Through his actions I was able to learn that life may not always goes as planned. But good things come from the effort we put in. That lesson has driven me to get 1% better each day.",
  "Striving for small improvements each day has shaped not just my work skills but life skills too. During my business journey, I was affected by the tariffs placed on Canada as my business relied mostly on exports. Facing adversity, I had to adapt to a new selling strategy. As a result, it helped build my resilience and adaptability, two traits everyone should have. In life two things are inevitable: failure and change. It is essential to face one’s fears and adapt, especially in a tech industry where new tools and skills are required every day. I try to keep up with the latest tech developments because breadth of knowledge has never mattered more.",
  "Communication matters in every part of work and life. The ability to communicate effectively, is one of the biggest skills I am seeking to improve. During meetings, I often find myself struggling to explain my thought process and worry about whether what I said makes sense. To improve, I plan to speak up more in standups and everyday conversation. Each day, I aim to talk to at least one person and practice explaining my thought process clearly within the flow of the conversation.",
  "As a visual, hands-on learner, I’m at my best when I can see the results of my work in front of me. I’ve always learned this way, whether by watching a Roblox game unfold, a Minecraft mod run, or watching an edit playback. In software, it looks like starting with smaller tickets, running the code, and seeing how things behave. That’s how I quickly picked up my co-op’s codebases, conventions, and workflows. Every ticket builds on the last. That idea is why I chose this image as my artifact. Like a boulder, progress only happens when you keep pushing. Sometimes it rolls back, but that is no reason to stop because the idea is not to reach the top. There is no top, you keeping pushing until the things that were out of reach become closer. Then there will always be new goals and ambitions.",
]

const [lede, ...body] = paragraphs
const last = body.pop()

const AboutEssay = () => {
  return (
    <article className='w-full max-w-2xl mx-auto'>
      <header className='flex flex-col gap-3 border-b pb-6 mb-8'>
        <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          About me · Reflective essay
        </p>
        <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>Out of reach</h2>
        <p className='text-sm text-muted-foreground'>Andy Banh · ~4 min read</p>
      </header>

      <div className='flex flex-col gap-5 text-sm sm:text-base leading-relaxed'>
        <p className='text-base sm:text-lg leading-relaxed'>{lede}</p>

        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}

        <blockquote className='border-l-2 border-foreground pl-5 my-2 text-lg sm:text-xl font-medium italic leading-snug'>
          Like a boulder, progress only happens when you keep pushing.
        </blockquote>

        <p>{last}</p>

        <figure className='flex flex-col gap-3 mt-2'>
          <img
            src="/artifact_boulder.jpg"
            alt="A boulder being pushed uphill"
            className='w-full rounded-xl border'
          />
          <figcaption className='text-sm text-muted-foreground text-center'>
            My artifact: progress only happens when you keep pushing.
          </figcaption>
        </figure>
      </div>
    </article>
  )
}

export default AboutEssay
