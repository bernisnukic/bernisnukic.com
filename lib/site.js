export const siteUrl = 'https://bernis.dev'

export const feed = { path: '/rss.xml', title: 'Bernis Nukic' }

// Next replaces `alternates` wholesale when a page sets it, so every page builds its
// own through this: its canonical URL plus the feed link, which belongs on all of them.
export function alternates(canonical) {
  return {
    canonical,
    types: { 'application/rss+xml': [{ url: feed.path, title: feed.title }] },
  }
}
