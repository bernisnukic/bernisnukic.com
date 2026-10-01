'use client'

import { useRef } from 'react'

// A card with a soft glow and a brighter rim that follow the pointer, tinted with the
// project's accent color. The effect itself is CSS (.spotlight-card in globals.css); this only
// feeds it the pointer position.
export default function SpotlightCard({ accent = '#a78bfa', className = '', children }) {
  const ref = useRef(null)

  function onPointerMove(event) {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onPointerMove={onPointerMove} style={{ '--accent': accent }} className={`spotlight-card ${className}`}>
      {children}
    </div>
  )
}
