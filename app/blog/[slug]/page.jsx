import { notFound, redirect } from 'next/navigation'

import SiteLayout from '../../../components/SiteLayout'
import PostHero from '../../../components/blog/PostHero'
import SrOnlyScrollWidthDemo from '../../../components/blog/SrOnlyScrollWidthDemo'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'

const legacySlug = '2025-12-13-sr-only-scrollwidth'
const canonicalSlug = 'tailwind-sr-only-horizontal-scrollbar'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const resolvedSlug = slug === legacySlug ? canonicalSlug : slug
  const post = await getPostBySlug(resolvedSlug)

  if (!post) return {}

  const url = `/blog/${resolvedSlug}`
  const ogCode =
    resolvedSlug === canonicalSlug ? 'className="relative w-0"\n<span className="sr-only">Actions</span>' : ''

  const ogImageParams = new URLSearchParams({
    title: post.title,
    description: post.description || '',
    tag: 'Blog',
    date: post.date || '',
    ...(ogCode ? { code: ogCode } : {}),
  })

  const ogImage = `/api/og?${ogImageParams.toString()}`

  return {
    title: post.title,
    description: post.description || undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      url,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || undefined,
      images: [ogImage],
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  if (slug === legacySlug) redirect(`/blog/${canonicalSlug}`)

  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const showSrOnlyDemo = slug === canonicalSlug
  const ogCode = showSrOnlyDemo ? 'className="relative w-0"\n<span className="sr-only">Actions</span>' : ''

  const heroParams = new URLSearchParams({
    title: post.title,
    description: post.description || '',
    tag: 'Blog',
    date: post.date || '',
    ...(ogCode ? { code: ogCode } : {}),
    w: '1600',
    h: '900',
  })

  const fallbackHeroImage = `/api/og?${heroParams.toString()}`
  const heroImage = showSrOnlyDemo ? '/blog/tailwind-sr-only-hero.png' : fallbackHeroImage

  const demoHeading = '<h2>Demo</h2>'
  let beforeDemoHtml = post.contentHtml
  let afterDemoHtml = ''

  if (showSrOnlyDemo) {
    const headingIndex = post.contentHtml.indexOf(demoHeading)

    if (headingIndex !== -1) {
      beforeDemoHtml = post.contentHtml.slice(0, headingIndex + demoHeading.length)
      afterDemoHtml = post.contentHtml.slice(headingIndex + demoHeading.length)
    }
  }

  return (
    <SiteLayout>
      <article className="prose prose-2xl prose-invert max-w-none">
        <PostHero
          title={post.title}
          src={heroImage}
          fallbackSrc={fallbackHeroImage}
          aspectClass={showSrOnlyDemo ? 'aspect-[3/2]' : 'aspect-video'}
          fit={showSrOnlyDemo ? 'contain' : 'cover'}
        />
        <h1>{post.title}</h1>
        {post.date ? <p className="text-sm text-zinc-400">{post.date}</p> : null}
        <div dangerouslySetInnerHTML={{ __html: beforeDemoHtml }} />
        {showSrOnlyDemo ? <SrOnlyScrollWidthDemo /> : null}
        {afterDemoHtml ? <div dangerouslySetInnerHTML={{ __html: afterDemoHtml }} /> : null}
      </article>
    </SiteLayout>
  )
}
