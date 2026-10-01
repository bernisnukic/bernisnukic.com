import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import GradientBackground from './GradientBackground'

export default function SiteLayout({ children }) {
  return (
    <div className="relative flex min-h-dvh justify-center">
      <GradientBackground />
      <div className="mt-10 flex w-full max-w-5xl flex-col px-6 md:px-8">
        <SiteHeader />
        <main className="mt-10 flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}
