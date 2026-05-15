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
    // Keyword landing pages
    {
      url: 'https://mictoo.com/timestamped-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/free-srt-generator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/business-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Format pages
    {
      url: 'https://mictoo.com/wav-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/m4a-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/flac-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mictoo.com/ogg-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mictoo.com/webm-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Use-case pages
    {
      url: 'https://mictoo.com/interview-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/podcast-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/lecture-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mictoo.com/meeting-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/zoom-transcription',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/voice-memo-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mictoo.com/youtube-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mictoo.com/aac-to-text',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mictoo.com/how-to-compress-audio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Long-tail use cases (pack #4)
    { url: 'https://mictoo.com/webinar-transcription',       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mictoo.com/dictation-to-text',            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mictoo.com/google-meet-transcription',    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mictoo.com/teams-meeting-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mictoo.com/sermon-transcription',         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    // Competitor comparison pages (low KD, high CPC long-tail)
    { url: 'https://mictoo.com/descript-alternative',         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/fireflies-alternative',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/turboscribe-alternative',      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/otter-alternative',            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/notta-alternative',            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    // Language-specific transcription landing pages (US audience, very low KD)
    { url: 'https://mictoo.com/french-speech-to-text',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://mictoo.com/spanish-audio-to-text',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://mictoo.com/german-audio-transcription',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://mictoo.com/multilingual-transcription',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Localized tool pages — Batch 1 (FR/DE/ES/RU × timestamped/srt/youtube)
    { url: 'https://mictoo.com/fr/timestamped-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/de/timestamped-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/es/timestamped-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/ru/timestamped-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/fr/free-srt-generator',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/de/free-srt-generator',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/es/free-srt-generator',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/ru/free-srt-generator',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/fr/youtube-to-text',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/de/youtube-to-text',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/es/youtube-to-text',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/ru/youtube-to-text',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    // Localized use-case pages — FR
    { url: 'https://mictoo.com/fr/podcast-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/fr/lecture-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    { url: 'https://mictoo.com/fr/business-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    // Localized use-case pages — DE
    { url: 'https://mictoo.com/de/podcast-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/de/lecture-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    { url: 'https://mictoo.com/de/business-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    // Localized use-case pages — ES
    { url: 'https://mictoo.com/es/podcast-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/es/lecture-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    { url: 'https://mictoo.com/es/business-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    // Localized use-case pages — RU
    { url: 'https://mictoo.com/ru/podcast-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://mictoo.com/ru/lecture-transcription',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    { url: 'https://mictoo.com/ru/business-transcription', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
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
    {
      url: 'https://mictoo.com/ru',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Info pages — EN
    { url: 'https://mictoo.com/about',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://mictoo.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://mictoo.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://mictoo.com/terms',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    // Info pages — FR
    { url: 'https://mictoo.com/fr/about',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://mictoo.com/fr/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://mictoo.com/fr/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://mictoo.com/fr/terms',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    // Info pages — DE
    { url: 'https://mictoo.com/de/about',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://mictoo.com/de/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://mictoo.com/de/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://mictoo.com/de/terms',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    // Info pages — ES
    { url: 'https://mictoo.com/es/about',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://mictoo.com/es/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://mictoo.com/es/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://mictoo.com/es/terms',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    // Info pages — RU
    { url: 'https://mictoo.com/ru/about',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://mictoo.com/ru/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://mictoo.com/ru/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://mictoo.com/ru/terms',   lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
