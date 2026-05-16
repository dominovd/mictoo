import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'M4A to Text — Free M4A Transcription Online | Mictoo',
  description: 'Convert M4A audio files to text for free. Upload any M4A file — iPhone voice memos, recordings, podcasts — and get a transcript instantly. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/m4a-to-text',
    languages: {
      'en': 'https://mictoo.com/m4a-to-text',
      'fr': 'https://mictoo.com/fr/m4a-to-text',
      'de': 'https://mictoo.com/de/m4a-to-text',
      'es': 'https://mictoo.com/es/m4a-to-text',
      'ru': 'https://mictoo.com/ru/m4a-to-text',
      'it': 'https://mictoo.com/it/m4a-to-text',
      'pt': 'https://mictoo.com/pt/m4a-to-text',
      'pl': 'https://mictoo.com/pl/m4a-to-text',
      'ja': 'https://mictoo.com/ja/m4a-to-text',
      'x-default': 'https://mictoo.com/m4a-to-text',
    },
  },
}

export default function M4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Free · Instant"
      h1={<>M4A to Text<br /><span className="text-brand-600">Free M4A Transcription Online</span></>}
      subtitle="Convert M4A audio files to text instantly. Works great for iPhone voice memos, voice recordings, and podcast audio files. No account required."
      features={[
        {
          icon: '📱',
          title: 'iPhone voice memos',
          desc: 'M4A is the default format for iPhone voice memos and recordings. Upload directly and get your transcript in seconds.',
        },
        {
          icon: '🎵',
          title: 'Any M4A file',
          desc: 'M4A files from any source — iPhone, Mac, digital recorders, podcasting apps — are fully supported.',
        },
        {
          icon: '📄',
          title: 'Text or SRT export',
          desc: 'Download your transcript as a plain .txt file or an .srt subtitle file with timestamps.',
        },
      ]}
      faq={[
        {
          q: 'How do I convert M4A to text?',
          a: 'Upload your M4A file using the tool above. The transcript is generated automatically and displayed within seconds.',
        },
        {
          q: 'Can I transcribe iPhone voice memos?',
          a: 'Yes. iPhone voice memos are saved as M4A files. Upload the file directly from your iPhone or after transferring it to your computer.',
        },
        {
          q: 'Is M4A to text free?',
          a: 'Yes, completely free. No account, no subscription. Just upload and transcribe.',
        },
        {
          q: 'What is the maximum M4A file size?',
          a: 'Up to 25 MB. Most voice recordings and short audio clips are well within this limit.',
        },
        {
          q: 'What other audio formats are supported?',
          a: 'In addition to M4A, Mictoo supports MP3, MP4, WAV, OGG, WEBM, and FLAC.',
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
