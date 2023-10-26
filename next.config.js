/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com']
  }
  ,
  ignoreDuringBuilds: true,

}

module.exports = nextConfig
