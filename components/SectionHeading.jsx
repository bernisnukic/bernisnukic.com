import Link from 'next/link'

export default function SectionHeading({ index, title, href, linkLabel }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-3">
      <h2 className="flex items-baseline gap-3 text-xl font-medium text-white">
        {index ? <span className="font-mono text-xs text-zinc-500">{index}</span> : null}
        {title}
      </h2>
      {href ? (
        <Link href={href} className="group shrink-0 text-sm text-zinc-400 transition hover:text-white">
          {linkLabel}{' '}
          <span aria-hidden="true" className="inline-block transition group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      ) : null}
    </div>
  )
}
