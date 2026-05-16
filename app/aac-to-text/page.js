import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'AAC to Text — Free AAC Audio Transcription Online | Mictoo',
  description: 'Transcribe AAC audio files to text for free. Drag and drop your .aac, .m4a, or other AAC-encoded file and get an accurate transcript in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/aac-to-text',
    languages: {
      'en': 'https://mictoo.com/aac-to-text',
      'fr': 'https://mictoo.com/fr/aac-to-text',
      'de': 'https://mictoo.com/de/aac-to-text',
      'es': 'https://mictoo.com/es/aac-to-text',
      'ru': 'https://mictoo.com/ru/aac-to-text',
      'it': 'https://mictoo.com/it/aac-to-text',
      'pt': 'https://mictoo.com/pt/aac-to-text',
      'x-default': 'https://mictoo.com/aac-to-text',
    },
  },
}

export default function AacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Free"
      h1={<>AAC to Text<br /><span className="text-brand-600">Free Online AAC Transcription</span></>}
      subtitle="Drop your AAC audio file and get an accurate text transcript in seconds. Works with .aac and .m4a (AAC inside an MP4 container). No signup."
      features={[
        { icon: '🎧', title: 'Native AAC support', desc: 'AAC is the default audio codec for Apple devices, YouTube, and most streaming services. Mictoo accepts .aac and .m4a directly without conversion.' },
        { icon: '🎯', title: 'High accuracy', desc: 'AAC keeps high quality at small file sizes — perfect for AI transcription. Most clear recordings transcribe with 95%+ accuracy.' },
        { icon: '📥', title: 'Edit and export', desc: 'Review the transcript in the browser, fix names and punctuation, then download as plain .txt or .srt subtitles.' },
      ]}
      faq={[
        { q: 'What is an AAC file?', a: 'AAC (Advanced Audio Coding) is a lossy audio compression format used by iTunes, Apple Music, YouTube, and most podcast apps. Files have .aac or .m4a extensions. AAC offers better quality than MP3 at the same bitrate.' },
        { q: 'What is the difference between .aac and .m4a?', a: 'Both contain AAC-encoded audio. .aac is the raw audio stream; .m4a wraps it inside an MP4 container (which is how iTunes and iPhone Voice Memos save it). Mictoo supports both directly.' },
        { q: 'How do I convert AAC to text for free?', a: 'Drag your AAC file into the upload area above. Mictoo automatically transcribes it using AI and shows the text in seconds. Copy it to clipboard or download as a .txt file.' },
        { q: 'What is the maximum AAC file size?', a: 'Up to 25 MB per upload. AAC at 128 kbps gives about 25 minutes of audio per 25 MB; at 64 kbps you can fit nearly an hour. For longer files, lower the bitrate or split into segments.' },
        { q: 'Can I get timestamps for an AAC transcript?', a: 'Yes. After transcription you can download a .srt subtitle file with precise timestamps — useful for syncing the transcript back to the original audio or video.' },
      ]}
      relatedLinks={[
        { href: '/m4a-to-text', label: 'M4A to Text' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
