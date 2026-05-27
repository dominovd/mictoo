/** @type {import('next').NextConfig} */
const nextConfig = {
  // In App Router, FormData is handled natively — no bodyParser config needed
  experimental: {
    serverComponentsExternalPackages: ['openai', '@ffmpeg-installer/ffmpeg'],
  },
}

module.exports = nextConfig
