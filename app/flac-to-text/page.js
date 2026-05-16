import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'FLAC to Text — Free FLAC Audio Transcription Online | Mictoo',
  description: 'Convert FLAC audio files to text for free online. Upload any FLAC recording and get an accurate transcript in seconds. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/flac-to-text',
    languages: {
      'en': 'https://mictoo.com/flac-to-text',
      'fr': 'https://mictoo.com/fr/flac-to-text',
      'de': 'https://mictoo.com/de/flac-to-text',
      'es': 'https://mictoo.com/es/flac-to-text',
      'ru': 'https://mictoo.com/ru/flac-to-text',
      'it': 'https://mictoo.com/it/flac-to-text',
      'pt': 'https://mictoo.com/pt/flac-to-text',
      'pl': 'https://mictoo.com/pl/flac-to-text',
      'x-default': 'https://mictoo.com/flac-to-text',
    },
  },
}

export default function FlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Lossless · Free"
      h1={<>FLAC to Text<br /><span className="text-brand-600">Free FLAC Transcription Online</span></>}
      subtitle="Upload any FLAC audio file and convert it to text instantly. FLAC's lossless quality means excellent transcription accuracy. No account needed."
      features={[
        {
          icon: '🎵',
          title: 'Lossless audio quality',
          desc: 'FLAC files preserve full audio quality, which helps AI transcription deliver the highest possible accuracy.',
        },
        {
          icon: '⚡',
          title: 'Instant results',
          desc: 'Most FLAC files are transcribed in under 30 seconds regardless of quality or bit depth.',
        },
        {
          icon: '📄',
          title: '.txt and .srt export',
          desc: 'Download your transcript as plain text or an SRT subtitle file with timestamps.',
        },
      ]}
      faq={[
        {
          q: 'How do I convert a FLAC file to text?',
          a: 'Upload your FLAC file using the tool above. The AI transcribes it and shows the text within seconds.',
        },
        {
          q: 'Does FLAC audio transcribe more accurately than MP3?',
          a: 'FLAC\'s lossless quality can marginally improve accuracy for low-volume or complex audio compared to heavily compressed formats.',
        },
        {
          q: 'Is FLAC to text conversion free?',
          a: 'Yes, completely free. No account or signup required.',
        },
        {
          q: 'What is the maximum FLAC file size?',
          a: 'Up to 25 MB. FLAC files are large due to lossless compression — consider converting to a lossy format if your file exceeds the limit.',
        },
      ]}
      relatedLinks={[
        { href: '/wav-to-text', label: 'WAV to Text' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
