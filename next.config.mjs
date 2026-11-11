/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Browsers that have visited once go straight to HTTPS for the next year.
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        ],
      },
    ]
  },
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
