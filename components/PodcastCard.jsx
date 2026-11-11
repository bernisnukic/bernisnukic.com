import SpotlightCard from './SpotlightCard'
import { formatMonth } from '../lib/timeline'

// One podcast episode: its video thumbnail, the show and month, the episode title, and links
// to watch it or, where the show has an audio version, listen to it. Unlike a project card
// the whole card is not one link, because an episode can have two places to go.
export default function PodcastCard({ podcast }) {
  const linkFocus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60'

  return (
    <SpotlightCard accent={podcast.accent} className="group h-full">
      <article className="flex h-full flex-col p-3">
        <a
          href={podcast.watch}
          aria-label={`Watch ${podcast.title}`}
          className={`block overflow-hidden rounded-xl border border-white/10 bg-zinc-900 ${linkFocus}`}
        >
          <img
            src={podcast.image}
            alt=""
            width={960}
            height={540}
            loading="lazy"
            decoding="async"
            className="aspect-video h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </a>
        <div className="flex flex-1 flex-col px-2 pt-4">
          <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
            <span>{podcast.show}</span>
            <time dateTime={podcast.date}>{formatMonth(podcast.date)}</time>
          </div>
          <h3 className="mt-2 text-lg font-medium leading-snug text-white">{podcast.title}</h3>
          <div className="mt-auto flex items-center justify-between gap-3 pt-2">
            <span className="font-mono text-xs text-zinc-500">{podcast.meta}</span>
            <span className="flex items-center gap-5 text-sm">
              {podcast.listen ? (
                <a
                  href={podcast.listen}
                  className={`inline-flex min-h-11 items-center text-zinc-400 transition hover:text-white ${linkFocus}`}
                >
                  Listen
                </a>
              ) : null}
              <a
                href={podcast.watch}
                className={`group/watch inline-flex min-h-11 items-center gap-1.5 font-medium text-white ${linkFocus}`}
              >
                Watch
                <span aria-hidden="true" className="transition group-hover/watch:translate-x-0.5">
                  →
                </span>
              </a>
            </span>
          </div>
        </div>
      </article>
    </SpotlightCard>
  )
}
