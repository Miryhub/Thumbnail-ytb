/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['img.youtube.com']
  }
}

module.exports = nextConfig
