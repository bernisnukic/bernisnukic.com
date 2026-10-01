import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

function readProject(file) {
  const slug = file.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(projectsDirectory, file), 'utf8')
  const { data, content } = matter(raw)

  return {
    project: {
      slug,
      title: String(data.title ?? slug),
      tagline: String(data.tagline ?? ''),
      kind: data.kind === 'product' ? 'product' : 'app',
      platform: data.platform ? String(data.platform) : '',
      year: data.year ? String(data.year) : '',
      date: data.date ? String(data.date) : '',
      status: data.status ? String(data.status) : '',
      order: Number(data.order ?? 99),
      featured: Boolean(data.featured),
      // Projects without their own page link straight to `href`.
      hasPage: data.page !== false,
      href: data.page === false ? String(data.href ?? '') : `/projects/${slug}`,
      accent: String(data.accent ?? '#a78bfa'),
      icon: data.icon ? String(data.icon) : '',
      image: data.image ? String(data.image) : '',
      imageAlt: String(data.imageAlt ?? data.title ?? slug),
      video: data.video ? String(data.video) : '',
      terminal: Array.isArray(data.terminal) ? data.terminal.map(String) : [],
      stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
      links: Array.isArray(data.links) ? data.links : [],
      gallery: Array.isArray(data.gallery) ? data.gallery : [],
    },
    content,
  }
}

export function getAllProjects() {
  if (!fs.existsSync(projectsDirectory)) return []

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readProject(file).project)
    .sort((a, b) => a.order - b.order)
}

export async function getProjectBySlug(slug) {
  const file = `${slug}.md`
  if (!fs.existsSync(path.join(projectsDirectory, file))) return null

  const { project, content } = readProject(file)
  if (!project.hasPage) return null

  const processed = await remark().use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(content)

  return { ...project, contentHtml: processed.toString() }
}
