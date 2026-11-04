import React from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import ArtifactCaption from './ArtifactCaption'
import PageLink from './PageLink'
import { Logo } from './SectionParts'
import { experiences } from '../data/experience'
import { portfolio, type PortfolioFeedback, type PortfolioLink } from '../data/portfolio'

function LinkRow({ link }: { link: PortfolioLink }) {
  const meta = [link.note, !link.href && 'Link coming soon']
    .filter(Boolean)
    .join(' · ')

  const content = (
    <>
      <span className='flex items-center justify-between gap-3'>
        <span className='font-medium'>{link.title}</span>
        {link.href && <ArrowUpRight className='size-4 shrink-0 text-muted-foreground' />}
      </span>
      <span className='mt-0.5 block text-xs sm:text-sm text-muted-foreground break-words'>
        {meta}
      </span>
    </>
  )

  if (!link.href) {
    return <div className='py-3 text-muted-foreground'>{content}</div>
  }

  return (
    <a
      href={link.href}
      target='_blank'
      rel='noopener noreferrer'
      className='block py-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
    >
      {content}
    </a>
  )
}

function Feedback({ feedback }: { feedback: PortfolioFeedback }) {
  const { quote, author, role, rating, image } = feedback
  return (
    <figure className='mt-6 flex flex-col gap-3'>
      {rating && (
        <p className='flex items-center gap-2 text-xs sm:text-sm text-muted-foreground'>
          <span className='flex gap-0.5' role='img' aria-label={`Rated ${rating} out of 5`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                aria-hidden
                className={i < rating ? 'size-4 fill-current text-foreground' : 'size-4'}
              />
            ))}
          </span>
          {rating.toFixed(1)} on Riipen
        </p>
      )}
      <blockquote className='border-l-2 border-foreground pl-4 text-sm sm:text-base italic leading-relaxed'>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className='text-xs sm:text-sm text-muted-foreground'>
        {author}, {role}
        {image && (
          <>
            {' · '}
            <a
              href={image}
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
            >
              View original
            </a>
          </>
        )}
      </figcaption>
    </figure>
  )
}

const WorkPortfolio = ({
  pageHref,
  showEvidence = false,
}: {
  pageHref?: string
  // Show feedback quotes and artifact captions (the /portfolio page only).
  showEvidence?: boolean
}) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
        <h2 className='text-2xl font-bold'>Work Portfolio</h2>
        {pageHref && <PageLink href={pageHref} />}
      </div>

      <div className='flex flex-col gap-10 w-full max-w-2xl mx-auto'>
        {portfolio.map((entry) => {
          const exp = experiences.find((e) => e.company === entry.company)
          return (
            <section key={entry.company} className='flex gap-4 sm:gap-6'>
              <Logo src={exp?.logo} name={entry.company} />
              <div className='min-w-0 flex-1'>
                <h3 className='text-lg sm:text-xl font-semibold leading-tight'>
                  {entry.company}
                </h3>
                {exp && (
                  <p className='mt-0.5 text-xs sm:text-sm text-muted-foreground'>
                    {exp.role} · {exp.period}
                  </p>
                )}
                {entry.links.length > 0 ? (
                  <ul className='mt-3 divide-y divide-border border-t border-border'>
                    {entry.links.map((link, i) => (
                      <li key={`${link.title}-${i}`}>
                        <LinkRow link={link} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='mt-3 text-sm text-muted-foreground'>Work samples coming soon.</p>
                )}
                {showEvidence && entry.feedback && <Feedback feedback={entry.feedback} />}
                {showEvidence && entry.artifact && (
                  <ArtifactCaption {...entry.artifact} className='mt-4' />
                )}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default WorkPortfolio
