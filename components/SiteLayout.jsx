import SiteHeader from './SiteHeader'
import GradientBackground from './GradientBackground'

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-dvh flex justify-center">
      <GradientBackground />
      <div className="flex w-full max-w-5xl flex-col px-6 md:px-8 mt-10">
        <SiteHeader />
        <main className="mt-10">{children}</main>
      </div>
    </div>
  )
}
