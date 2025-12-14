import SiteLayout from '../components/SiteLayout'

export const metadata = {
  title: 'About',
}

export default function Page() {
  return (
    <SiteLayout>
      <div className="prose prose-2xl prose-invert">
        <p>Hey, I'm Bernis. I'm a full stack developer.</p>
        <p>I build modern web products with Next.js, Laravel, and a strong focus on automation and developer experience.</p>
        <p>I currently work at Bicom Systems.</p>
        <p>
          I am the founder of <a href="https://fadehost.com/">FadeHost</a> which is a company that specializes in hosting
          services and building automation and deployment tools.
        </p>
      </div>
    </SiteLayout>
  )
}
