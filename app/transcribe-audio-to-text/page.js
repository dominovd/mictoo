import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Audio to Text — Free Online Audio Transcription | Mictoo',
  description: 'Transcribe audio to text online for free. Upload any audio file and get an accurate transcript instantly. Supports 50+ languages. Powered by AI.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-audio-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-audio-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
      'de': 'https://mictoo.com/de/transcribe-audio-to-text',
      'es': 'https://mictoo.com/es/transcribe-audio-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
      'it': 'https://mictoo.com/it/transcribe-audio-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
      'x-default': 'https://mictoo.com/transcribe-audio-to-text',
    },
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Audio to Text — Mictoo',
  url: 'https://mictoo.com/transcribe-audio-to-text',
  description: 'Free online audio to text converter. Supports MP3, WAV, M4A, OGG, FLAC and more.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function AudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Free"
        h1={<>Audio to Text<br /><span className="text-brand-600">Free AI Transcription</span></>}
        subtitle="The fastest way to convert any audio recording to text. Upload your file — no account, no subscription, no waiting."
        features={[
          {
            icon: '🎙️',
            title: 'All audio formats',
            desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — any audio file up to 25 MB.',
          },
          {
            icon: '🧠',
            title: 'AI-powered accuracy',
            desc: 'Our AI is trained on hundreds of thousands of hours of multilingual audio, delivering industry-leading accuracy.',
          },
          {
            icon: '🔒',
            title: 'Private & secure',
            desc: 'Your audio is never stored. Files are processed once and immediately discarded.',
          },
        ]}
        faq={[
          {
            q: 'What is the best free audio to text converter?',
            a: 'Mictoo uses AI, widely regarded as the most accurate free speech recognition model available. It supports 50+ languages and requires no account.',
          },
          {
            q: 'How accurate is audio transcription?',
            a: 'Our AI achieves 95%+ accuracy on clear recordings. Background noise or strong accents may reduce accuracy slightly.',
          },
          {
            q: 'What audio formats are supported?',
            a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Video files (MP4) are also accepted.',
          },
          {
            q: 'How long does it take to transcribe audio?',
            a: 'A 10-minute recording is usually transcribed in 15–30 seconds. There is no queue — your file is processed immediately.',
          },
          {
            q: 'Can I transcribe a phone call recording?',
            a: 'Yes. Phone call recordings in MP3, WAV, or M4A format work well. Multi-speaker audio is transcribed as a single block of text (speaker labels require a pro tool).',
          },
          {
            q: 'Do I need to select the language?',
            a: 'No — language is detected automatically. If auto-detection produces poor results, you can select the language manually using the Language dropdown.',
          },
        ]}
        relatedLinks={[
          { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
          { href: '/transcribe-video-to-text', label: 'Video to Text' },
          { href: '/', label: 'All formats' },
        ]}
      />
    </>
  )
}
