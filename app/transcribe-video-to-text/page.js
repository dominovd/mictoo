import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Video to Text — Free Online Video Transcription | Mictoo',
  description: 'Convert video to text online for free. Upload MP4, WEBM, or MOV and get an accurate transcript instantly. Powered by AI. No account needed.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-video-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-video-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
      'de': 'https://mictoo.com/de/transcribe-video-to-text',
      'es': 'https://mictoo.com/es/transcribe-video-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
      'it': 'https://mictoo.com/it/transcribe-video-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
      'x-default': 'https://mictoo.com/transcribe-video-to-text',
    },
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Video to Text — Mictoo',
  url: 'https://mictoo.com/transcribe-video-to-text',
  description: 'Free online video to text converter. Transcribe MP4, WEBM, and other video formats.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function VideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Free · Instant"
        h1={<>Video to Text Online<br /><span className="text-brand-600">Free Transcription</span></>}
        subtitle="Upload any video file — YouTube downloads, screen recordings, interviews, lectures — and get the spoken words as text in seconds."
        features={[
          {
            icon: '🎬',
            title: 'MP4, WEBM & more',
            desc: 'Supports MP4, WEBM, MPEG and other video formats. Audio is extracted automatically.',
          },
          {
            icon: '🎞️',
            title: 'SRT subtitles',
            desc: 'Download an .srt subtitle file with timestamps — ready to upload to YouTube or any video editor.',
          },
          {
            icon: '⚡',
            title: 'Instant results',
            desc: 'A 10-minute video is typically transcribed in under 30 seconds. No queue, no wait.',
          },
        ]}
        faq={[
          {
            q: 'How do I transcribe a video for free?',
            a: 'Upload your video file using the tool above. Mictoo extracts the audio and transcribes it using AI. The transcript appears within seconds.',
          },
          {
            q: 'Can I get subtitles from a video?',
            a: 'Yes. After transcribing, click the .srt download button to get a subtitle file with timestamps that you can upload to YouTube, Premiere, or any editing tool.',
          },
          {
            q: 'What video formats are supported?',
            a: 'MP4, WEBM, MPEG. Audio files (MP3, WAV, M4A, OGG, FLAC) are also supported.',
          },
          {
            q: 'Does it work for YouTube videos?',
            a: 'Yes — download your YouTube video first (using a YouTube downloader), then upload the file here for transcription.',
          },
          {
            q: 'Is there a file size limit?',
            a: 'Up to 25 MB. For longer videos, extract the audio track first (e.g. with ffmpeg or an online converter) to reduce the file size.',
          },
        ]}
        relatedLinks={[
          { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
          { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
          { href: '/', label: 'All formats' },
        ]}
      />
    </>
  )
}
