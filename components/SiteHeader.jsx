'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={[
        'text-zinc-300 pb-4 border-b border-transparent hover:text-white',
        isActive ? 'border-white text-white' : '',
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

function ExternalLink({ href, label, icon }) {
  return (
    <a href={href} className="flex items-center space-x-1 text-zinc-300 hover:text-white">
      {icon}
      <div>{label}</div>
    </a>
  )
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = useMemo(
    () => (
      <div className="mt-10 w-full flex justify-between text-lg text-zinc-200 border-b border-white/10">
        <div className="inline-flex space-x-4 -mb-px">
          <NavLink href="/">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>

        <div className="inline-flex space-x-4 pb-4">
          <ExternalLink
            href="https://github.com/bernisnukic"
            label="Github"
            icon={
              <svg className="h-4 w-4 text-zinc-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20">
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            }
          />
          <ExternalLink
            href="mailto:bernis@bernisnukic.com"
            label="Email"
            icon={
              <svg className="h-4 w-4 text-zinc-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          />
        </div>
      </div>
    ),
    []
  )

  return (
    <header className="flex flex-col items-start">
      <div className="flex w-full items-center justify-between">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium md:font-normal leading-none">
          Bernis Nukic
        </div>

        {!menuOpen ? (
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="sm:hidden h-8 w-8 inline-flex items-center justify-center"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="sm:hidden h-8 w-8 inline-flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div className="hidden sm:block w-full">{nav}</div>
      <div className="sm:hidden w-full">{menuOpen ? nav : null}</div>
    </header>
  )
}
