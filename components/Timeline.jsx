import Link from 'next/link'

import { formatMonth } from '../lib/timeline'

export default function Timeline({ items }) {
  return (
    <ol className="relative mt-8 space-y-7 border-l border-white/10 pl-6">
      {items.map((item, index) => {
        const internal = item.href.startsWith('/')
        const LinkTag = internal ? Link : 'a'

        return (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className={[
                'absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border',
                index === 0
                  ? 'border-emerald-300 bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.45)]'
                  : 'border-white/30 bg-gray-950',
              ].join(' ')}
            />
            <time dateTime={item.date} className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              {formatMonth(item.date)}
            </time>
            <div className="mt-1">
              <LinkTag href={item.href} className="font-medium text-white decoration-white/30 underline-offset-4 hover:underline">
                {item.title}
              </LinkTag>
            </div>
            <p className="mt-1 text-sm leading-6 text-zinc-400">{item.text}</p>
          </li>
        )
      })}
    </ol>
  )
}
