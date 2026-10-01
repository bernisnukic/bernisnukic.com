'use client'

import { useEffect, useRef } from 'react'

// A silent looping clip that plays only while it's on screen in a visible tab. Browsers only
// autoplay muted video, and React doesn't put the `muted` attribute into server-rendered HTML, so
// mute and start it here; Chrome also refuses to start video in a background tab, hence the retry
// on visibility. People who prefer reduced motion get the still poster instead.
export default function LoopingVideo({ src, poster, label, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let onScreen = false
    const update = () => {
      if (onScreen && document.visibilityState === 'visible') {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        update()
      },
      { threshold: 0.2 }
    )
    observer.observe(video)
    document.addEventListener('visibilitychange', update)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster || undefined}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    />
  )
}
