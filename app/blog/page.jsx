import Link from 'next/link'

import SiteLayout from '../../components/SiteLayout'
import { getAllPosts } from '../../lib/blog'

export const metadata = {
  title: 'Blog',
}

export default function Page() {
  const posts = getAllPosts()

  return (
    <SiteLayout>
      <div className="prose prose-2xl prose-invert">
        <h1>Blog</h1>
      </div>

      <div className="mt-8 space-y-6">
        {posts.length === 0 ? (
          <div className="text-zinc-300">No posts yet.</div>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="border-b border-white/10 pb-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-medium">
                  <Link href={`/blog/${post.slug}`} className="text-white hover:underline">
                    {post.title}
                  </Link>
                </h2>
                {post.date ? <div className="text-sm text-zinc-400">{post.date}</div> : null}
              </div>
              {post.description ? <p className="mt-2 text-zinc-300">{post.description}</p> : null}
            </article>
          ))
        )}
      </div>
    </SiteLayout>
  )
}
