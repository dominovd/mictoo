import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'MP3 to Text — Free Online MP3 Transcription | Mictoo',
  description: 'Convert MP3 to text online for free. Upload your MP3 file and get an accurate transcript in seconds. Powered by AI. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-mp3-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-mp3-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
      'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
      'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
      'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
    },
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 to Text — Mictoo',
  url: 'https://mictoo.com/transcribe-mp3-to-text',
  description: 'Free online MP3 to text converter powered by AI.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function MP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Free · No signup · Instant"
        h1={<>Convert MP3 to Text<br /><span className="text-brand-600">Online, Free</span></>}
        subtitle="Upload any MP3 file and get an accurate text transcript in seconds. Supports interviews, podcasts, lectures, voice notes, and more."
        features={[
          {
            icon: '🎵',
            title: 'Any MP3 file',
            desc: 'Works with voice recordings, podcast episodes, music interviews, lectures — any MP3 up to 25 MB.',
          },
          {
            icon: '🌍',
            title: '50+ languages',
            desc: 'Automatic language detection. Your MP3 can be in English, Spanish, French, German, or 47 other languages.',
          },
          {
            icon: '📋',
            title: 'Copy or download',
            desc: 'Get your transcript as editable text. Download as .txt or .srt subtitle file.',
          },
        ]}
        faq={[
          {
            q: 'How do I convert MP3 to text?',
            a: 'Upload your MP3 file using the tool above. Mictoo will automatically transcribe it using AI and display the text within seconds.',
          },
          {
            q: 'Is MP3 to text conversion free?',
            a: 'Yes, completely free. No account required. Just upload and transcribe.',
          },
          {
            q: 'What is the maximum MP3 file size?',
            a: 'Up to 25 MB. For longer recordings, consider compressing the file first or splitting it into shorter segments.',
          },
          {
            q: 'How accurate is MP3 transcription?',
            a: 'Mictoo uses AI, which typically achieves 95%+ accuracy on clear recordings. Quality may vary with heavy background noise or strong accents.',
          },
          {
            q: 'Can I get subtitles from an MP3 file?',
            a: 'Yes. After transcribing, click the .srt button to download a subtitle file with timestamps.',
          },
        ]}
        relatedLinks={[
          { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
          { href: '/transcribe-video-to-text', label: 'Video to Text' },
          { href: '/', label: 'All formats' },
        ]}
      />
    </>
  )
}
