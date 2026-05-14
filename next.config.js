/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow large file uploads (up to 25MB — Whisper API limit)
  api: {
    bodyParser: false,
  },
  experimental: {
    serverComponentsExternalPackages: ['openai'],
  },
}

module.exports = nextConfig
