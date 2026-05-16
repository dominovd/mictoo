import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'OGG to Text — Free OGG Audio Transcription Online | Mictoo',
  description: 'Convert OGG audio files to text for free online. Upload any OGG Vorbis recording and get an accurate transcript instantly. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/ogg-to-text',
    languages: {
      'en': 'https://mictoo.com/ogg-to-text',
      'fr': 'https://mictoo.com/fr/ogg-to-text',
      'de': 'https://mictoo.com/de/ogg-to-text',
      'es': 'https://mictoo.com/es/ogg-to-text',
      'ru': 'https://mictoo.com/ru/ogg-to-text',
      'it': 'https://mictoo.com/it/ogg-to-text',
      'pt': 'https://mictoo.com/pt/ogg-to-text',
      'pl': 'https://mictoo.com/pl/ogg-to-text',
      'x-default': 'https://mictoo.com/ogg-to-text',
    },
  },
}

export default function OggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Free · Instant"
      h1={<>OGG to Text<br /><span className="text-brand-600">Free OGG Transcription Online</span></>}
      subtitle="Upload any OGG audio file and convert it to text in seconds. Supports OGG Vorbis and OGG Opus recordings. No account needed."
      features={[
        {
          icon: '🎙️',
          title: 'OGG Vorbis & Opus',
          desc: 'Supports OGG files from any source — voice recorders, web browsers, communication apps.',
        },
        {
          icon: '🌍',
          title: '50+ languages',
          desc: 'Language detected automatically. Works for English, Spanish, French, German, and more.',
        },
        {
          icon: '📄',
          title: '.txt and .srt export',
          desc: 'Download as plain text or an SRT subtitle file with timestamps.',
        },
      ]}
      faq={[
        {
          q: 'How do I convert OGG to text?',
          a: 'Upload your OGG file above. The transcript is generated automatically within seconds.',
        },
        {
          q: 'Is OGG to text conversion free?',
          a: 'Yes, completely free. No signup or account required.',
        },
        {
          q: 'What is the maximum OGG file size?',
          a: 'Up to 25 MB.',
        },
        {
          q: 'What other audio formats are supported?',
          a: 'MP3, MP4, WAV, M4A, FLAC, WEBM are also supported.',
        },
      ]}
      relatedLinks={[
        { href: '/wav-to-text', label: 'WAV to Text' },
        { href: '/flac-to-text', label: 'FLAC to Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
