import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 py-8 text-sm text-zinc-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Bernis Nukic</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/now" className="hover:text-white">
            Now
          </Link>
          <a href="https://github.com/bernisnukic" className="hover:text-white">
            GitHub
          </a>
          <a href="mailto:bernis@bernisnukic.com" className="hover:text-white">
            Email
          </a>
        </nav>
      </div>
    </footer>
  )
}
