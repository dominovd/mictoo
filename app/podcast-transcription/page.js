import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Podcast Transcription — Free Podcast Transcript Generator | Mictoo',
  description: 'Transcribe podcast episodes to text for free. Upload your audio file and get a full podcast transcript instantly. Supports MP3, M4A, WAV. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/podcast-transcription',
    languages: {
      'en': 'https://mictoo.com/podcast-transcription',
      'fr': 'https://mictoo.com/fr/podcast-transcription',
      'de': 'https://mictoo.com/de/podcast-transcription',
      'es': 'https://mictoo.com/es/podcast-transcription',
      'ru': 'https://mictoo.com/ru/podcast-transcription',
      'it': 'https://mictoo.com/it/podcast-transcription',
      'x-default': 'https://mictoo.com/podcast-transcription',
    },
  },
}

export default function PodcastTranscriptionPage() {
  return (
    <LandingLayout
      badge="Podcasters · YouTube · Free"
      h1={<>Podcast Transcription<br /><span className="text-brand-600">Free Podcast Transcript Generator</span></>}
      subtitle="Turn any podcast episode into a full text transcript in seconds. Great for show notes, blog posts, SEO, and accessibility. Upload MP3, M4A, or WAV — no account needed."
      features={[
        {
          icon: '🎙️',
          title: 'Any podcast format',
          desc: 'Upload MP3, M4A, WAV, OGG, or FLAC podcast files. Works with all podcast hosting exports.',
        },
        {
          icon: '📝',
          title: 'Show notes & blog posts',
          desc: 'Turn your episode transcript into SEO-friendly blog content, show notes, or a searchable archive.',
        },
        {
          icon: '♿',
          title: 'Accessibility',
          desc: 'Provide transcripts to make your podcast accessible to deaf and hard-of-hearing listeners.',
        },
      ]}
      faq={[
        {
          q: 'How do I transcribe a podcast episode for free?',
          a: 'Download your podcast episode as an MP3 or M4A file. Upload it above and get the full transcript within seconds.',
        },
        {
          q: 'Can I get a transcript of a Spotify podcast?',
          a: 'If you have access to the podcast audio file (e.g. your own show), upload it directly. For third-party podcasts, you can download episodes using a podcast app that supports offline listening, then upload the file.',
        },
        {
          q: 'Why should podcasters create transcripts?',
          a: 'Transcripts improve SEO (Google indexes the text), improve accessibility for deaf listeners, can be repurposed as blog posts or newsletters, and help listeners skim content.',
        },
        {
          q: 'How accurate is podcast transcription?',
          a: 'For clear, well-recorded podcasts with a single host or guest, accuracy is typically 95%+. Accuracy drops with multiple overlapping speakers, heavy accents, or poor audio quality.',
        },
        {
          q: 'Can I transcribe a two-person podcast interview?',
          a: 'Yes. The transcript captures all spoken words. Speaker labels (Host/Guest) need to be added manually by editing the transcript in the browser.',
        },
        {
          q: 'What file size can I upload?',
          a: 'Up to 25 MB. Most MP3 podcast episodes at 128kbps are well within this limit for up to 25 minutes. For longer episodes, export at a lower bitrate or split the file.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/m4a-to-text', label: 'M4A to Text' },
        { href: '/interview-transcription', label: 'Interview Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
