import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'French Speech to Text — Free AI Transcription for French Audio | Mictoo',
  description: 'Free French speech-to-text transcription powered by OpenAI Whisper. Transcribe French podcasts, interviews, lectures, and Voice Memos with high accuracy. No signup.',
  alternates: { canonical: 'https://mictoo.com/french-speech-to-text' },
}

export default function FrenchSpeechToTextPage() {
  return (
    <LandingLayout
      badge="Français · Whisper · Free"
      h1={<>French Speech to Text<br /><span className="text-brand-600">Free AI Transcription for French Audio</span></>}
      subtitle="Drop a French audio or video file and get an accurate transcript in seconds. Mictoo uses OpenAI Whisper — one of the strongest speech models for French — and handles Parisian, Belgian, Quebec, and African French equally well."
      features={[
        { icon: '🇫🇷', title: 'Trained on French audio', desc: "OpenAI Whisper was trained on a large body of French speech, with strong performance across European, Canadian, and African accents." },
        { icon: '📁', title: 'All common formats', desc: 'MP3, MP4, M4A, WAV, OGG, WEBM, FLAC. Up to 25 MB per file — a 25-minute podcast or interview typically fits.' },
        { icon: '📋', title: 'Edit and export', desc: 'The transcript is editable in the browser. Download as plain .txt or as .srt subtitles. AI Summary in French is generated automatically.' },
      ]}
      faq={[
        { q: 'How accurate is French transcription?', a: 'For clear recordings with a single speaker, OpenAI Whisper typically achieves 95%+ word accuracy on French. Multiple speakers, heavy regional accents, or background noise can reduce accuracy.' },
        { q: 'Does it work for Quebec or African French?', a: 'Yes. Whisper handles French varieties well — including Quebec, Belgian, Swiss, and West African French. Pronunciation differences rarely cause major errors.' },
        { q: 'Can I get a French summary of the recording?', a: 'Yes. After transcription, Mictoo automatically generates an AI summary in the recording\'s language — so a French audio gets a French summary with key points and action items.' },
        { q: 'How do I get a recording for French interviews?', a: "Use your phone's voice recorder (Voice Memos on iPhone, default Recorder on Android), Zoom for video calls, or a digital recorder. Export as .m4a or .mp3 and drop it in the upload area." },
        { q: 'Is there a French version of the site?', a: 'Yes — visit mictoo.com/fr for the fully French-language interface. This page exists for English-speaking users who specifically need French transcription.' },
        { q: 'Is it free?', a: 'Yes, fully free for files up to 25 MB. No account, no credit card, no monthly limits.' },
      ]}
      relatedLinks={[
        { href: '/fr', label: 'Site en français' },
        { href: '/spanish-audio-to-text', label: 'Spanish Audio to Text' },
        { href: '/multilingual-transcription', label: 'Multilingual Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
