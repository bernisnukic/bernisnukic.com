import Link from 'next/link'
import { notFound } from 'next/navigation'

import ProjectCard from '../../../components/ProjectCard'
import ProjectMedia from '../../../components/ProjectMedia'
import SectionHeading from '../../../components/SectionHeading'
import SiteLayout from '../../../components/SiteLayout'
import StatusBadge from '../../../components/StatusBadge'
import { getAllProjects, getProjectBySlug } from '../../../lib/projects'

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllProjects()
    .filter((project) => project.hasPage)
    .map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}

  const url = `/projects/${slug}`
  const ogImage = `/api/og?${new URLSearchParams({
    title: project.title,
    description: project.tagline,
    tag: 'Project',
    ...(project.year ? { date: project.year } : {}),
  })}`

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url,
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
      images: [ogImage],
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const others = getAllProjects()
    .filter((other) => other.slug !== slug && other.hasPage)
    .slice(0, 3)

  const facts = [
    ['Platform', project.platform],
    ['Year', project.year],
    ['Built with', project.stack.join(', ')],
  ].filter(([, value]) => value)

  return (
    <SiteLayout>
      <Link href="/projects" className="group inline-flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-white">
        <span aria-hidden="true" className="transition group-hover:-translate-x-0.5">
          ←
        </span>
        All projects
      </Link>

      <header className="mt-8 flex items-start gap-4">
        {project.icon ? <img src={project.icon} alt="" className="mt-1 h-14 w-14 shrink-0 rounded-xl" /> : null}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h1>
            {project.status ? <StatusBadge status={project.status} /> : null}
          </div>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-300">{project.tagline}</p>
        </div>
      </header>

      {project.links.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              rel={link.rel}
              className={[
                'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition',
                index === 0
                  ? 'bg-white text-gray-950 hover:bg-zinc-200'
                  : 'border border-white/15 text-zinc-200 hover:border-white/30 hover:text-white',
              ].join(' ')}
            >
              {link.label}
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                {/* an arrow pointing out for other sites, straight ahead for pages on this one */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={link.href.startsWith('/') ? 'M5 12h14m-6-6 6 6-6 6' : 'M7 17 17 7M9 7h8v8'}
                />
              </svg>
            </a>
          ))}
        </div>
      ) : null}

      <figure
        className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
        style={{ boxShadow: `0 30px 120px -40px ${project.accent}66` }}
      >
        <div className={project.terminal.length > 0 && !project.image ? 'aspect-[16/7]' : ''}>
          <ProjectMedia project={project} eager natural />
        </div>
      </figure>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_15rem]">
        <article
          className="prose prose-lg prose-invert max-w-none prose-a:decoration-white/30 prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
        />
        <aside className="lg:pt-2">
          <dl className="space-y-5 border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">{label}</dt>
                <dd className="mt-1 text-sm leading-6 text-zinc-300">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {project.gallery.length > 0 ? (
        <div className="mt-12 space-y-6">
          {project.gallery.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      ) : null}

      <section className="mt-20">
        <SectionHeading title="More projects" href="/projects" linkLabel="All projects" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <ProjectCard key={other.slug} project={other} />
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
