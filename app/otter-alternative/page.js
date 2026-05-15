import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Otter Alternative — Transcribe Recordings, Not Live Meetings | Mictoo',
  description: 'Otter is built for live meeting transcription with real-time captions. Mictoo transcribes recordings you already have — free, no signup, no bot. Powered by OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/otter-alternative' },
}

export default function OtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparison · Otter · Free"
      h1={<>Otter Alternative<br /><span className="text-brand-600">For Recordings, Not Live Meetings</span></>}
      subtitle="Otter is famous for live meeting transcription — captions appear as people speak. Mictoo solves the other half of the problem: a recording you already have, transcribed to text in seconds. Free, no signup, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Free tier',            mictoo: 'No monthly cap, 25 MB per file', them: '300 minutes / month, 30 min per recording' },
        { label: 'Account required',     mictoo: 'No', them: 'Yes (email signup)' },
        { label: 'Paid plans',            mictoo: 'Free forever',  them: '$8.33 – $30 / user / month' },
        { label: 'Live transcription',    mictoo: 'No',  them: 'Yes (real-time captions)' },
        { label: 'Recording upload',      mictoo: 'Yes (drop file)', them: 'Yes (paid tier import)' },
        { label: 'AI summary',            mictoo: 'Yes, free',     them: 'Yes (paid tier)' },
        { label: 'Transcription model',   mictoo: 'OpenAI Whisper', them: 'Proprietary' },
        { label: 'Speaker labels',        mictoo: 'Manual edit',   them: 'Automatic (paid)' },
        { label: 'Languages',             mictoo: '50+',           them: '3 (English, French, Spanish)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ languages vs 3', desc: 'Otter supports only English, French, and Spanish. Mictoo uses Whisper, which handles 50+ languages with automatic detection — German, Russian, Japanese, Arabic, Ukrainian, and more.' },
        { icon: '🆓', title: 'No 300-minute cap', desc: "Otter's free plan limits you to 300 minutes per month. Mictoo has no minute quota — only the per-file 25 MB limit." },
        { icon: '🚫', title: 'No bot in your meetings', desc: 'Otter\'s value is the live bot joining calls. If you prefer to record locally and not have an AI bot in your meeting, Mictoo fits that workflow.' },
      ]}
      whenToChoose={{
        mictoo: [
          'You have a recording and want a fast, free transcript',
          'You work with non-English audio (Russian, German, Japanese, etc.)',
          'You don\'t want an AI bot joining your calls',
          'You\'re transcribing podcasts, lectures, voice memos, not just meetings',
        ],
        them: [
          'You want live captions during meetings',
          'You\'re in a team that needs shared meeting notes',
          'Otter Assistant integrating with Zoom/Google Meet is critical',
          'Speaker diarization is a hard requirement (paid plan)',
        ],
      }}
      faq={[
        { q: 'Can Mictoo do live transcription like Otter?', a: 'No. Mictoo works on recorded files only. For real-time transcription during a meeting, use Otter, Zoom\'s built-in captions, or Google Meet captions. Use Mictoo afterwards if you want a polished transcript file.' },
        { q: 'Does Mictoo replace Otter for podcasters?', a: "For podcast transcription specifically, yes. Drop your MP3/M4A, get the transcript, download as .txt or .srt. Otter's value is live capture; Mictoo's is fast post-recording transcription." },
        { q: 'What about meeting summaries?', a: "Both tools generate AI summaries with key points and action items. Otter puts this on paid plans; Mictoo offers it free on every transcription." },
        { q: 'Is Mictoo accurate for non-English audio?', a: 'Yes — OpenAI Whisper is one of the strongest multilingual speech models available. Otter is limited to English, French, and Spanish; Mictoo handles 50+ languages with automatic detection.' },
        { q: 'Does Mictoo have a mobile app?', a: 'No native app, but the site works in mobile browsers. Open mictoo.com on iPhone or Android, pick a file from your device, get the transcript.' },
      ]}
      relatedLinks={[
        { href: '/fireflies-alternative', label: 'Fireflies Alternative' },
        { href: '/meeting-transcription', label: 'Meeting Transcription' },
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text' },
        { href: '/', label: 'Try Mictoo' },
      ]}
    />
  )
}
