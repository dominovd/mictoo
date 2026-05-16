import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Free SRT Generator — Create SRT Subtitle Files Online | Mictoo',
  description: 'Generate SRT subtitle files from any audio or video for free. Upload your file, get a timestamped transcript, and download a ready-to-use .srt file. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/free-srt-generator',
    languages: {
      'en': 'https://mictoo.com/free-srt-generator',
      'fr': 'https://mictoo.com/fr/free-srt-generator',
      'de': 'https://mictoo.com/de/free-srt-generator',
      'es': 'https://mictoo.com/es/free-srt-generator',
      'ru': 'https://mictoo.com/ru/free-srt-generator',
      'it': 'https://mictoo.com/it/free-srt-generator',
      'pt': 'https://mictoo.com/pt/free-srt-generator',
      'pl': 'https://mictoo.com/pl/free-srt-generator',
      'ja': 'https://mictoo.com/ja/free-srt-generator',
      'x-default': 'https://mictoo.com/free-srt-generator',
    },
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free SRT Generator — Mictoo',
  url: 'https://mictoo.com/free-srt-generator',
  description: 'Free online SRT subtitle generator. Upload audio or video and download an SRT file with timestamps.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function FreeSRTGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="SRT · Subtitles · Free · No signup"
        h1={<>Free SRT Generator<br /><span className="text-brand-600">Create Subtitle Files Online</span></>}
        subtitle="Upload any audio or video file and download a ready-to-use SRT subtitle file in seconds. Works with YouTube, Premiere Pro, DaVinci Resolve, and any video editor."
        features={[
          {
            icon: '🎬',
            title: 'YouTube-ready SRT',
            desc: 'Upload the .srt file directly to YouTube Studio to add captions to your videos. Timestamps are synced automatically.',
          },
          {
            icon: '⏱️',
            title: 'Accurate timecodes',
            desc: 'Every subtitle segment gets a precise HH:MM:SS,ms timestamp — the standard format used by all professional video tools.',
          },
          {
            icon: '🌍',
            title: '50+ languages',
            desc: 'Generates SRT files in any language — English, Spanish, French, German, Japanese, and 46 more. Language is detected automatically.',
          },
        ]}
        faq={[
          {
            q: 'What is an SRT file?',
            a: 'An SRT (SubRip Subtitle) file is a plain-text file containing timestamped subtitle entries. Each entry has a sequence number, a start → end time, and the subtitle text. SRT is the most widely supported subtitle format.',
          },
          {
            q: 'How do I generate an SRT file from a video?',
            a: 'Upload your video or audio file above. Mictoo transcribes it and adds timestamps to every segment. After transcription, click the .srt button to download your subtitle file.',
          },
          {
            q: 'How do I add SRT captions to a YouTube video?',
            a: 'In YouTube Studio, open your video and click Subtitles. Select Add Language, then Upload file and choose your .srt file. YouTube syncs the captions automatically.',
          },
          {
            q: 'Does the SRT file work in Premiere Pro and DaVinci Resolve?',
            a: 'Yes. In Premiere Pro: File → Import → select your .srt file. In DaVinci Resolve: open the Edit page, go to File → Import Subtitle, and select the .srt file.',
          },
          {
            q: 'Is the SRT generator really free?',
            a: 'Yes, completely free. No account, no subscription, no watermarks. Upload your file and download the SRT — that\'s it.',
          },
          {
            q: 'What is the maximum file size for SRT generation?',
            a: 'Up to 25 MB. For longer videos, extract the audio track first to reduce file size, or split the video into shorter segments.',
          },
          {
            q: 'Can I generate SRT from audio files (MP3, WAV)?',
            a: 'Yes. Mictoo generates SRT files from any audio or video format: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.',
          },
          {
            q: 'Can I edit the subtitles before downloading?',
            a: 'Yes. After transcription, you can edit the text in the browser before downloading. The timestamp structure is preserved in the exported SRT file.',
          },
        ]}
        relatedLinks={[
          { href: '/timestamped-transcription', label: 'Timestamped Transcription' },
          { href: '/transcribe-video-to-text', label: 'Video to Text' },
          { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
          { href: '/', label: 'All formats' },
        ]}
      />
    </>
  )
}
