export default function sitemap() {
  return [
    {
      url: 'https://mictoo.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Format landing pages
    {
      url: 'https://mictoo.com/transcribe-audio-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mictoo.com/transcribe-mp3-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mictoo.com/transcribe-video-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Language pages
    {
      url: 'https://mictoo.com/fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://mictoo.com/de',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://mictoo.com/es',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Info pages
    {
      url: 'https://mictoo.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mictoo.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://mictoo.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://mictoo.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
