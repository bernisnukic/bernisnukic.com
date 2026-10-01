import { getAllPosts } from '../lib/blog'
import { getAllProjects } from '../lib/projects'

const base = 'https://bernis.dev'

export default function sitemap() {
  const pages = ['/', '/projects', '/now', '/blog'].map((path) => ({ url: `${base}${path === '/' ? '' : path}` }))
  const projects = getAllProjects()
    .filter((project) => project.hasPage)
    .map((project) => ({ url: `${base}/projects/${project.slug}` }))
  const posts = getAllPosts().map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: post.date || undefined }))
  return [...pages, ...projects, ...posts]
}
