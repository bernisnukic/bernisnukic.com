'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
  { href: '/blog', label: 'Blog' },
]

function isActive(pathname, href) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

const githubIcon = (
  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
)

const emailIcon = (
  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
)

const external = [
  { href: 'https://github.com/bernisnukic', label: 'GitHub', icon: githubIcon },
  { href: 'mailto:bernis@bernisnukic.com', label: 'Email', icon: emailIcon },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header className="flex flex-col items-start">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="text-lg leading-none font-medium text-white sm:text-xl md:text-2xl md:font-normal lg:text-3xl"
        >
          Bernis Nukic
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-8 w-8 items-center justify-center sm:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav className="mt-10 hidden w-full justify-between border-b border-white/10 text-lg text-zinc-200 sm:flex">
        <div className="-mb-px inline-flex space-x-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                'border-b pb-4 transition-colors hover:text-white',
                isActive(pathname, link.href) ? 'border-white text-white' : 'border-transparent text-zinc-300',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="inline-flex space-x-4 pb-4">
          {external.map((link) => (
            <a key={link.href} href={link.href} className="flex items-center space-x-1.5 text-zinc-300 hover:text-white">
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {menuOpen ? (
        <nav className="mt-6 w-full border-y border-white/10 py-2 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                'block py-2.5 text-lg',
                isActive(pathname, link.href) ? 'text-white' : 'text-zinc-400',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-5 border-t border-white/10 pt-4 pb-2">
            {external.map((link) => (
              <a key={link.href} href={link.href} className="flex items-center space-x-1.5 text-zinc-300">
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
