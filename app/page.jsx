import Link from 'next/link'

import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SiteLayout from '../components/SiteLayout'
import Timeline from '../components/Timeline'
import { getAllPosts } from '../lib/blog'
import { getAllProjects } from '../lib/projects'
import { timeline } from '../lib/timeline'

export const metadata = {
  title: 'About',
}

export default function Page() {
  const featured = getAllProjects().filter((project) => project.featured)
  const [first, second, ...rest] = featured
  const posts = getAllPosts().slice(0, 3)

  return (
    <SiteLayout>
      <section className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Full stack developer · Founder of FadeHost
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            I build tools for the web, the desktop <span className="text-gradient">and the terminal.</span>
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              Hey, I&apos;m Bernis. I build web products with Next.js and Laravel, with a strong focus on automation and
              developer experience. I currently work at Bicom Systems.
            </p>
            <p>
              I&apos;m the founder of{' '}
              <a href="https://fadehost.com/" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                FadeHost
              </a>
              , a hosting company for the gaming industry, and in my own time I build{' '}
              {/* rel="me" answers the link back to bernis.dev on editclips.online/about (Person sameAs),
                  so identity verifiers see a reciprocal link rather than a one-way claim. */}
              <a
                href="https://editclips.online/"
                rel="me"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                EditClips
              </a>{' '}
              and a growing set of apps and tools.
            </p>
          </div>
          <Link
            href="/now"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pr-4 pl-3 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>
              <span className="text-zinc-500">Now:</span> filming videos for EditClips and shipping Camera Import
            </span>
            <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
        <img
          src="/profile.jpg?v=2026-10"
          alt="Bernis Nukic"
          width={460}
          height={460}
          className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-1 ring-white/15 sm:h-28 sm:w-28"
        />
      </section>

      <section className="mt-20">
        <SectionHeading index="01" title="Selected work" href="/projects" linkLabel="All projects" />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[first, second].filter(Boolean).map((project) => (
            <ProjectCard key={project.slug} project={project} eager />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1.35fr_1fr]">
        <section>
          <SectionHeading index="02" title="Recently shipped" />
          <Timeline items={timeline} />
        </section>

        <section>
          <SectionHeading index="03" title="Writing" href="/blog" linkLabel="Blog" />
          <ul className="mt-6 space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  {post.date ? (
                    <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                      {post.date}
                    </time>
                  ) : null}
                  <h3 className="mt-1 font-medium text-white decoration-white/30 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h3>
                  {post.description ? <p className="mt-1 text-sm leading-6 text-zinc-400">{post.description}</p> : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SiteLayout>
  )
}
