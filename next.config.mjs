/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /new was a placeholder; what it was reserved for became /now.
      { source: '/new', destination: '/now', permanent: true },
      // Camera Import was renamed Shutterback.
      { source: '/projects/camera-import', destination: '/projects/shutterback', permanent: true },
    ]
  },
}

export default nextConfig
