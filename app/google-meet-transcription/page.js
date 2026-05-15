import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Google Meet Transcription — Transcribe Meet Recordings Free | Mictoo',
  description: 'Transcribe Google Meet recordings to text for free. Works with MP4 exports from Google Drive. No signup, no install.',
  alternates: {
    canonical: 'https://mictoo.com/google-meet-transcription',
    languages: {
      'en': 'https://mictoo.com/google-meet-transcription',
      'fr': 'https://mictoo.com/fr/google-meet-transcription',
      'de': 'https://mictoo.com/de/google-meet-transcription',
      'es': 'https://mictoo.com/es/google-meet-transcription',
      'ru': 'https://mictoo.com/ru/google-meet-transcription',
      'x-default': 'https://mictoo.com/google-meet-transcription',
    },
  },
}

export default function GoogleMeetTranscriptionPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Free"
      h1={<>Google Meet Transcription<br /><span className="text-brand-600">Turn Meet Recordings into Text</span></>}
      subtitle="Drop your Google Meet MP4 export and get a clean text transcript in seconds. Free, no signup. Works alongside Google&apos;s own captions for a clean post-meeting record."
      features={[
        { icon: '🎬', title: 'Direct MP4 support', desc: 'Google Meet exports recordings to your Google Drive as MP4. Download the file and drop it into Mictoo — no conversion or extraction needed.' },
        { icon: '🧾', title: 'Cleaner than live captions', desc: 'Google\'s live captions get the gist but skip punctuation and miss names. Mictoo produces a polished transcript you can paste into Docs, Notion, or a meeting recap email.' },
        { icon: '🔒', title: 'Private', desc: 'Files are processed and immediately discarded. We never store the meeting audio or transcript.' },
      ]}
      faq={[
        { q: 'How do I download a Google Meet recording?', a: 'Open Google Drive → My Drive → Meet Recordings (folder created automatically). Find your meeting, click ⋮ → Download. The file is an MP4 — drop it into Mictoo as-is.' },
        { q: 'Why use Mictoo if Google Meet already has live captions?', a: 'Live captions are great while the meeting is happening, but they\'re not saved by default and they lack punctuation and proper capitalization. Mictoo gives you a polished, editable transcript ready to share or repurpose.' },
        { q: 'Can I get speaker labels (Host, Guest 1, Guest 2)?', a: 'Not automatically in the free tier. The transcript is a single text stream — speaker labels can be added manually in the browser editor.' },
        { q: 'How long can the Meet recording be?', a: 'Up to 25 MB per file. Google Meet MP4 at default quality is roughly 50 MB per 30 minutes; consider extracting the audio track (M4A) first or compressing the video to fit.' },
        { q: 'Are Google\'s "Take notes for me" transcripts the same?', a: 'No — Workspace\'s "Take notes for me" feature creates an AI-generated summary, not a verbatim transcript. Mictoo gives you the full word-for-word transcript, which you can summarize separately if needed.' },
      ]}
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom Transcription' },
        { href: '/teams-meeting-transcription', label: 'Teams Meeting Transcription' },
        { href: '/meeting-transcription', label: 'Meeting Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
