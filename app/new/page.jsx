import SiteLayout from '../../components/SiteLayout'

export const metadata = {
  title: 'New',
}

export default function Page() {
  return (
    <SiteLayout>
      <div className="prose prose-2xl prose-invert">
        <p>This page is reserved for future updates.</p>
      </div>
    </SiteLayout>
  )
}
