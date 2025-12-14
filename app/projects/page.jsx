import SiteLayout from '../../components/SiteLayout'

export const metadata = {
  title: 'Projects',
}

const projects = [
  {
    title: 'FadeHost',
    href: 'https://fadehost.com/',
    description:
      'FadeHost specializes in hosting and automation services in the gaming industry. We are currently hosting websites, VPS and game servers.',
  },
  {
    title: 'Minecraft Tools',
    href: 'https://tools.fadehost.com/',
    description: 'A collection of useful tools relating to managing a Minecraft server.',
  },
  {
    title: 'Online Video Editor',
    href: 'https://editclips.online/',
    description:
      'A website where you can edit video clips in your browser without uploading any files. Works completely offline.',
  },
]

export default function Page() {
  return (
    <SiteLayout>
      <div>
        <dl className="space-y-5">
          {projects.map((project) => (
            <div key={project.href} className="relative prose prose-invert">
              <dt>
                <a href={project.href} className="flex items-center space-x-1 text-lg leading-6 font-medium text-white hover:underline">
                  <div>{project.title}</div>
                  <svg className="h-4 w-4 text-zinc-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </dt>
              <dd className="mt-2 text-base text-zinc-300 border-b border-white/10 pb-5">{project.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SiteLayout>
  )
}
