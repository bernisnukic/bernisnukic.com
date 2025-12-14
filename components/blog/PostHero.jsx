'use client'

import { useMemo, useState } from 'react'

export default function PostHero({ title, src, fallbackSrc, aspectClass = 'aspect-video', fit = 'cover' }) {
  const initialSrc = useMemo(() => src || fallbackSrc || '', [src, fallbackSrc])
  const [currentSrc, setCurrentSrc] = useState(initialSrc)

  if (!currentSrc) return null

  return (
    <div className="not-prose mb-10">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-sm">
        <img
          src={currentSrc}
          alt={title}
          className={['w-full', aspectClass, fit === 'contain' ? 'object-contain' : 'object-cover'].join(' ')}
          onError={() => {
            if (fallbackSrc && currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc)
          }}
        />
      </div>
    </div>
  )
}
