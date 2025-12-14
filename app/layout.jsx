import '../styles/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  metadataBase: new URL('https://bernis.dev'),
  title: {
    default: 'Bernis Nukic',
    template: '%s · Bernis Nukic',
  },
  description: "Bernis Nukic's personal website.",
  openGraph: {
    title: 'Bernis Nukic',
    description: "Bernis Nukic's personal website.",
    url: '/',
    siteName: 'Bernis Nukic',
    type: 'website',
    images: [
      {
        url: '/api/og?title=Bernis%20Nukic&description=Full%20stack%20developer&tag=bernis.dev',
        width: 1200,
        height: 630,
        alt: 'Bernis Nukic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernis Nukic',
    description: "Bernis Nukic's personal website.",
    images: ['/api/og?title=Bernis%20Nukic&description=Full%20stack%20developer&tag=bernis.dev'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body className="bg-gray-950 text-gray-100 antialiased">{children}</body>
    </html>
  )
}
