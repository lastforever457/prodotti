import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'api.ijod.aigov.uz',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5020',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '144.91.102.35',
        port: '9090',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5020',
        pathname: '/wallpaperflare-cropped-**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  allowedDevOrigins: ['http://192.168.100.10:3000'],
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
