import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'WEBM to Text — Free WEBM Transcription Online | Mictoo',
  description: 'Convert WEBM audio and video files to text for free online. Upload any WEBM recording and get an accurate transcript instantly. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
}

export default function WebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Browser recordings · Free"
      h1={<>WEBM to Text<br /><span className="text-brand-600">Free WEBM Transcription Online</span></>}
      subtitle="Upload any WEBM audio or video file and get an accurate text transcript in seconds. WEBM is commonly used by browsers, screen recorders, and video call tools. No account needed."
      features={[
        {
          icon: '🖥️',
          title: 'Browser & screen recordings',
          desc: 'WEBM is the default format for Chrome and Firefox screen recordings, Loom clips, and WebRTC recordings.',
        },
        {
          icon: '🎬',
          title: 'Audio and video WEBM',
          desc: 'Supports both audio-only WEBM and video WEBM files. Audio is extracted automatically.',
        },
        {
          icon: '📄',
          title: '.txt and .srt export',
          desc: 'Download your transcript as plain text or an SRT subtitle file with timestamps.',
        },
      ]}
      faq={[
        {
          q: 'How do I convert WEBM to text?',
          a: 'Upload your WEBM file above. The transcript is generated automatically and shown within seconds.',
        },
        {
          q: 'Is WEBM to text conversion free?',
          a: 'Yes, completely free. No account or signup required.',
        },
        {
          q: 'Can I transcribe Chrome screen recordings?',
          a: 'Yes. Chrome\'s built-in screen recorder saves video as WEBM. Upload the file directly to get a transcript.',
        },
        {
          q: 'What is the maximum WEBM file size?',
          a: 'Up to 25 MB. For larger recordings, extract the audio track first to reduce file size.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text' },
        { href: '/wav-to-text', label: 'WAV to Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
