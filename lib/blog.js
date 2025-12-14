import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, file)
      const raw = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(raw)

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ''),
        description: data.description ? String(data.description) : '',
        excerpt: content.trim().split('\n').find(Boolean)?.slice(0, 180) ?? '',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: false,
      theme: 'github-dark',
    })
    .use(rehypeStringify)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    description: data.description ? String(data.description) : '',
    contentHtml,
  }
}
