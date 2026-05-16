import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Dictation to Text — Free Voice Dictation Transcription | Mictoo',
  description: 'Convert dictated audio recordings to text for free. Perfect for writers, doctors, lawyers, and researchers. Supports MP3, M4A, WAV. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/dictation-to-text',
    languages: {
      'en': 'https://mictoo.com/dictation-to-text',
      'fr': 'https://mictoo.com/fr/dictation-to-text',
      'de': 'https://mictoo.com/de/dictation-to-text',
      'es': 'https://mictoo.com/es/dictation-to-text',
      'ru': 'https://mictoo.com/ru/dictation-to-text',
      'it': 'https://mictoo.com/it/dictation-to-text',
      'pt': 'https://mictoo.com/pt/dictation-to-text',
      'x-default': 'https://mictoo.com/dictation-to-text',
    },
  },
}

export default function DictationToTextPage() {
  return (
    <LandingLayout
      badge="Dictation · Voice → Text · Free"
      h1={<>Dictation to Text<br /><span className="text-brand-600">Free Voice Dictation Transcription</span></>}
      subtitle="Record your thoughts, draft a chapter, or dictate notes — then upload the file here for an accurate text transcript. No signup, no app to install."
      features={[
        { icon: '📝', title: 'For writers and researchers', desc: 'Dictate a draft chapter, an article outline, or interview notes. Mictoo converts your voice into clean editable text in seconds.' },
        { icon: '👨‍⚕️', title: 'For doctors and lawyers', desc: 'Dictate case notes, patient summaries, or memos on your phone, then turn them into text for your records. Files are processed and deleted instantly.' },
        { icon: '🌍', title: '50+ languages', desc: 'Dictate in English, Spanish, French, German, Russian, Japanese, and many more. Language is auto-detected; override if needed.' },
      ]}
      faq={[
        { q: 'How do I record dictation on my phone?', a: 'iPhone: use the Voice Memos app — export as .m4a. Android: use the built-in voice recorder or Easy Voice Recorder — export as .mp3 or .m4a. Drop the file into Mictoo when ready.' },
        { q: 'Is Mictoo a real-time dictation tool?', a: 'No — Mictoo transcribes existing audio files. For real-time dictation (speak and see text appear), use your operating system\'s built-in dictation (macOS, Windows, iOS, Android). Use Mictoo afterwards to clean up long recordings.' },
        { q: 'How accurate is dictation transcription?', a: 'Clear dictation with a single speaker typically transcribes at 95%+ accuracy. Speak at a natural pace, in a quiet room, and consider using a headset for best results.' },
        { q: 'Can I use it for medical or legal dictation?', a: 'Yes, but check your local regulations on AI processing of patient or client data. Mictoo never stores files — but the audio passes through our AI provider for transcription. For HIPAA-regulated workflows, consult your compliance team.' },
        { q: 'What is the maximum dictation length?', a: 'Up to 25 MB. At 64 kbps mono that\'s roughly 50 minutes of dictation. For longer recordings, split into chapters or lower the bitrate.' },
      ]}
      relatedLinks={[
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/m4a-to-text', label: 'M4A to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
