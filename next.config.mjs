/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // /new was a placeholder; what it was reserved for became /now.
    return [{ source: '/new', destination: '/now', permanent: true }]
  },
}

export default nextConfig
