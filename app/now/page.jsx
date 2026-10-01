import Link from 'next/link'

import PageHeader from '../../components/PageHeader'
import SiteLayout from '../../components/SiteLayout'

export const metadata = {
  title: 'Now',
  description: "What I'm focused on right now.",
}

const updated = { iso: '2026-10-01', label: '1 October 2026' }

const items = [
  {
    label: 'Video',
    title: 'Learning to make videos',
    body: (
      <>
        I put together a proper recording setup and recorded my first video, an introduction to EditClips. Short
        tutorials for YouTube and TikTok are next.
      </>
    ),
  },
  {
    label: 'EditClips',
    title: 'Getting EditClips in front of people',
    body: (
      <>
        <Link href="/projects/editclips">EditClips</Link> has 150+ tools that run in the browser, plus AI tools on my own
        GPUs. Now the job is telling people about it, starting with the videos above.
      </>
    ),
  },
  {
    label: 'macOS',
    title: 'Shipping Camera Import',
    body: (
      <>
        The new camera needed a painless way to get footage onto my Mac, so I built{' '}
        <Link href="/projects/camera-import">Camera Import</Link>, a menu bar app that copies new files and then lets go
        of the camera.
      </>
    ),
  },
  {
    label: 'FadeHost',
    title: 'Improving FadeHost',
    body: (
      <>
        Steady updates to the <Link href="/projects/fadehost">FadeHost</Link> control panel and website, and one-step
        domain setup through Domain Connect.
      </>
    ),
  },
]

export default function Page() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Now" title="What I'm focused on">
        <p>
          A snapshot of what has my attention at the moment, updated whenever it changes. Last updated{' '}
          <time dateTime={updated.iso}>{updated.label}</time>.
        </p>
      </PageHeader>

      <ol className="mt-14 space-y-4">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <div className="flex items-baseline gap-3 sm:block">
              <span className="font-mono text-xs text-zinc-600">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 sm:mt-1 sm:block">{item.label}</span>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">{item.title}</h2>
              <p className="mt-2 leading-7 text-zinc-300 [&_a]:text-white [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-white">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-sm text-zinc-500">
        This is a <a href="https://nownownow.com/about" className="underline decoration-white/20 underline-offset-4 hover:text-zinc-300">now page</a>, an idea from Derek Sivers.
      </p>
    </SiteLayout>
  )
}
