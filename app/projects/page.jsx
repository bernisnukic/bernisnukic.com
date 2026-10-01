import PageHeader from '../../components/PageHeader'
import ProjectCard from '../../components/ProjectCard'
import SectionHeading from '../../components/SectionHeading'
import SiteLayout from '../../components/SiteLayout'
import { getAllProjects } from '../../lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Products I run, apps and tools I build, and open source work.',
}

const contributions = [
  {
    title: 'Domain Connect templates for FadeHost',
    repo: 'Domain-Connect/Templates',
    href: 'https://github.com/Domain-Connect/Templates/pull/1808',
    date: 'Sep 2026',
    text: "Added FadeHost's templates for Minecraft servers (SRV records) and community websites (CNAME records) to the Domain Connect protocol.",
  },
]

export default function Page() {
  const projects = getAllProjects()
  const products = projects.filter((project) => project.kind === 'product')
  const apps = projects.filter((project) => project.kind === 'app')

  return (
    <SiteLayout>
      <PageHeader eyebrow="Projects" title="Things I've built">
        <p>Products I run, apps and tools I&apos;ve made for myself and others, and the odd open source contribution.</p>
      </PageHeader>

      <section className="mt-14">
        <SectionHeading index="01" title="Products" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((project) => (
            <ProjectCard key={project.slug} project={project} eager />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading index="02" title="Apps & tools" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading index="03" title="Open source contributions" />
        <ul className="mt-2 divide-y divide-white/10">
          {contributions.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-wider text-zinc-500">{item.date}</span>
                <span>
                  <span className="font-medium text-white decoration-white/30 underline-offset-4 group-hover:underline">
                    {item.title}
                  </span>
                  <span className="ml-2 font-mono text-xs text-zinc-500">{item.repo}</span>
                  <span className="mt-1 block text-sm leading-6 text-zinc-400">{item.text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  )
}
