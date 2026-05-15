import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Meeting Transcription — Free AI Transcript for Calls & Meetings | Mictoo',
  description: 'Transcribe meetings, conference calls, and Zoom/Teams recordings to text for free. No signup. Upload MP3, MP4, M4A. Up to 25 MB.',
  alternates: {
    canonical: 'https://mictoo.com/meeting-transcription',
    languages: {
      'en': 'https://mictoo.com/meeting-transcription',
      'fr': 'https://mictoo.com/fr/meeting-transcription',
      'de': 'https://mictoo.com/de/meeting-transcription',
      'es': 'https://mictoo.com/es/meeting-transcription',
      'ru': 'https://mictoo.com/ru/meeting-transcription',
      'x-default': 'https://mictoo.com/meeting-transcription',
    },
  },
}

export default function MeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="Meetings · Calls · Free"
      h1={<>Meeting Transcription<br /><span className="text-brand-600">Free AI Transcript Generator</span></>}
      subtitle="Turn meeting recordings, conference calls, and Zoom/Teams sessions into searchable text. No signup. Edit in the browser and download as .txt or .srt."
      features={[
        { icon: '🏢', title: 'For meetings and calls', desc: 'Works with Zoom, Microsoft Teams, Google Meet, and any local recording. MP3, MP4, M4A, WAV, WEBM.' },
        { icon: '🔍', title: 'Searchable notes', desc: 'Get a full text transcript you can search, share, and turn into action items, decisions, and follow-ups.' },
        { icon: '🔒', title: 'Private by design', desc: 'Files are processed and immediately discarded. We never store your meeting audio or transcript.' },
      ]}
      faq={[
        { q: 'How do I transcribe a meeting recording?', a: 'Export your recording as MP3, MP4, M4A, or WAV. Upload it above — the transcript is generated in seconds and ready to copy or download.' },
        { q: 'Does it work with Zoom and Microsoft Teams recordings?', a: 'Yes. Zoom saves recordings as MP4 (video) or M4A (audio only). Teams saves MP4. Both work directly with Mictoo — just upload the file.' },
        { q: 'Can I get speaker labels (Host, Guest 1, Guest 2)?', a: 'Mictoo returns a full transcript without speaker labels in the free tier. You can add labels manually in the browser editor before downloading. Automatic speaker diarization is on the roadmap.' },
        { q: 'How accurate is the transcript for meetings?', a: 'For meetings with one speaker at a time and clear audio, accuracy typically exceeds 95%. Multiple speakers talking over each other or heavy background noise can reduce accuracy.' },
        { q: 'What is the maximum meeting length?', a: 'Up to 25 MB per file (≈25 minutes at 128 kbps). For longer meetings, export at a lower bitrate or split into shorter segments.' },
      ]}
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom Transcription' },
        { href: '/business-transcription', label: 'Business Transcription' },
        { href: '/interview-transcription', label: 'Interview Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
