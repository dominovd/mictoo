import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Spanish Audio to Text — Free AI Transcription for Spanish | Mictoo',
  description: 'Convert Spanish audio and video to text for free. Mictoo uses OpenAI Whisper, with strong accuracy across Latin American, Castilian, and other Spanish varieties. No signup.',
  alternates: { canonical: 'https://mictoo.com/spanish-audio-to-text' },
}

export default function SpanishAudioToTextPage() {
  return (
    <LandingLayout
      badge="Español · Whisper · Free"
      h1={<>Spanish Audio to Text<br /><span className="text-brand-600">Free AI Transcription for Spanish</span></>}
      subtitle="Drop a Spanish recording and get a clean text transcript in seconds. Mictoo uses OpenAI Whisper, which handles Castilian, Mexican, Argentine, Colombian, and other Spanish varieties with strong accuracy."
      features={[
        { icon: '🌎', title: 'All Spanish varieties', desc: "Whisper is trained on Spanish from across the Spanish-speaking world. Castilian, Mexican, Caribbean, Andean, and Río de la Plata Spanish all transcribe accurately." },
        { icon: '📁', title: 'Any common format', desc: 'MP3, MP4, M4A, WAV, OGG, WEBM, FLAC. Up to 25 MB per file — fits a typical 25-minute podcast or interview at normal bitrates.' },
        { icon: '✨', title: 'AI summary in Spanish', desc: "After transcription, Mictoo generates a Spanish-language summary with key points and action items — useful for show notes, blog posts, or meeting recap emails." },
      ]}
      faq={[
        { q: 'Is it accurate for fast-spoken Spanish?', a: "Yes. Whisper handles fast natural speech well. For very fast speakers or overlapping voices, accuracy may drop slightly — just review the transcript in the browser and fix any errors before downloading." },
        { q: 'Does it work for Mexican Spanish vs Castilian Spanish?', a: 'Yes. Whisper handles both equally well, plus Argentine, Colombian, Chilean, Peruvian, and other regional varieties. Vocabulary differences are usually transcribed correctly.' },
        { q: 'Can I get a Spanish blog post from a Spanish podcast?', a: "Drop the podcast file, get the transcript, then use the AI Summary as a starting point. The summary, key points, and action items are all generated in Spanish automatically." },
        { q: 'How do I record Spanish audio?', a: 'iPhone Voice Memos, Android voice recorder, Zoom recording, or any digital recorder. Save as .m4a or .mp3 and upload above. For phone calls, use call-recording apps that comply with your local laws.' },
        { q: 'Is there a Spanish version of the interface?', a: 'Yes — visit mictoo.com/es for the fully Spanish-language interface. This page targets English-speaking users who specifically need to transcribe Spanish recordings.' },
        { q: 'Is it really free?', a: 'Yes, 100% free for files up to 25 MB. No account, no card, no monthly minute quota.' },
      ]}
      relatedLinks={[
        { href: '/es', label: 'Sitio en español' },
        { href: '/french-speech-to-text', label: 'French Speech to Text' },
        { href: '/multilingual-transcription', label: 'Multilingual Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
