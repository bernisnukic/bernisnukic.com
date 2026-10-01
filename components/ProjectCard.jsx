import Link from 'next/link'

import ProjectMedia from './ProjectMedia'
import SpotlightCard from './SpotlightCard'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project, eager = false }) {
  const external = !project.hasPage
  // Long platform lists ("Windows, macOS, Linux") take two tags' worth of room.
  const tags = [project.platform, ...project.stack].filter(Boolean).slice(0, project.platform.includes(',') ? 3 : 4)
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
        <ProjectMedia
          project={project}
          eager={eager}
          className="transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-center gap-2.5">
          {project.icon ? <img src={project.icon} alt="" className="h-6 w-6 rounded-md" /> : null}
          <h3 className="text-lg font-medium text-white">{project.title}</h3>
          {project.status ? <StatusBadge status={project.status} /> : null}
          <svg
            className="ml-auto h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            {external ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            )}
          </svg>
        </div>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{project.tagline}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {tags.map((tag) => (
            <li key={tag} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-zinc-400">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  )

  const className =
    'flex h-full flex-col rounded-[inherit] p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60'

  return (
    <SpotlightCard accent={project.accent} className="group h-full">
      {external ? (
        <a href={project.href} className={className}>
          {content}
        </a>
      ) : (
        <Link href={project.href} className={className}>
          {content}
        </Link>
      )}
    </SpotlightCard>
  )
}
