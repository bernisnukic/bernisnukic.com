import { getAllPosts } from '../../lib/blog'
import { feed, siteUrl } from '../../lib/site'

// Built once with the rest of the site; a new post means a new deploy anyway.
export const dynamic = 'force-static'

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// Post dates are plain YYYY-MM-DD strings; RSS wants RFC 822.
const toRssDate = (date) => {
  const parsed = new Date(`${date}T00:00:00Z`)
  return Number.isNaN(parsed.getTime()) ? '' : parsed.toUTCString()
}

export function GET() {
  const posts = getAllPosts()
  const feedUrl = `${siteUrl}${feed.path}`
  const lastBuildDate = posts[0]?.date ? toRssDate(posts[0].date) : ''

  const items = posts
    .map((post) => {
      const url = escapeXml(`${siteUrl}/blog/${encodeURIComponent(post.slug)}`)
      const pubDate = post.date ? toRssDate(post.date) : ''

      return [
        '    <item>',
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        pubDate ? `      <pubDate>${pubDate}</pubDate>` : '',
        post.description ? `      <description>${escapeXml(post.description)}</description>` : '',
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escapeXml(feed.title)}</title>`,
    `    <link>${siteUrl}/blog</link>`,
    '    <description>Blog posts by Bernis Nukic.</description>',
    '    <language>en</language>',
    lastBuildDate ? `    <lastBuildDate>${lastBuildDate}</lastBuildDate>` : '',
    `    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
    items,
    '  </channel>',
    '</rss>',
  ]
    .filter(Boolean)
    .join('\n')

  return new Response(`${xml}\n`, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
