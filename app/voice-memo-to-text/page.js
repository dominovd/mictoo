import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Voice Memo to Text — Transcribe iPhone Voice Memos Free | Mictoo',
  description: 'Convert iPhone Voice Memos and Android voice recordings to text for free. Supports M4A and MP3. No signup, no app install. Accurate AI transcription.',
  alternates: { canonical: 'https://mictoo.com/voice-memo-to-text' },
}

export default function VoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Free"
      h1={<>Voice Memo to Text<br /><span className="text-brand-600">Free Online Transcription</span></>}
      subtitle="Drop your iPhone Voice Memos or Android voice recording and get an accurate text transcript in seconds. No signup, no app to install."
      features={[
        { icon: '📱', title: 'iPhone and Android', desc: 'iPhone Voice Memos export as .m4a — fully supported. Android voice recorders export as .m4a, .mp3, or .wav — all supported.' },
        { icon: '🧠', title: 'Great for notes and ideas', desc: 'Turn voice notes, brainstorming sessions, and reminders into searchable text you can paste into Notion, Obsidian, or your favourite editor.' },
        { icon: '🆓', title: '100% free', desc: 'No subscription, no in-app purchase, no watermark. No monthly cap — drop a memo whenever you need a transcript.' },
      ]}
      faq={[
        { q: 'How do I send my iPhone Voice Memo to a computer?', a: 'Open the Voice Memos app, tap the memo, tap "…", then "Share" → "Save to Files" or AirDrop to your Mac. Then drop the .m4a file into Mictoo on your computer.' },
        { q: 'Can I transcribe directly on iPhone?', a: 'Yes. Open mictoo.com in Safari on your iPhone, tap the upload area, and pick a Voice Memo from the Files app. The transcript appears in seconds and you can copy or download .txt.' },
        { q: 'What format are Android voice recordings?', a: 'Most Android phones save voice recordings as .m4a or .mp3, depending on the recorder app. Both are supported. Some apps use .amr — convert to .m4a first using any free converter.' },
        { q: 'Is my voice recording private?', a: 'Yes. Files are sent to the AI engine for transcription only and never stored on our servers. The transcript stays in your browser and is yours alone.' },
        { q: 'What if my voice memo is longer than 25 MB?', a: 'iPhone Voice Memos use about 1 MB per minute at default quality — so 25 minutes fit in 25 MB. For longer memos, change Voice Memos quality to "Compressed" in Settings → Voice Memos, or split the recording.' },
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
