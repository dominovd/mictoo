import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'German Audio Transcription — Free AI Speech to Text | Mictoo',
  description: 'Transcribe German audio and video to text for free. Mictoo uses OpenAI Whisper, with strong accuracy on Standard German, Austrian, and Swiss German. No signup required.',
  alternates: { canonical: 'https://mictoo.com/german-audio-transcription' },
}

export default function GermanAudioTranscriptionPage() {
  return (
    <LandingLayout
      badge="Deutsch · Whisper · Free"
      h1={<>German Audio Transcription<br /><span className="text-brand-600">Free AI Speech to Text for German</span></>}
      subtitle="Drop a German audio or video file and get an accurate text transcript in seconds. Powered by OpenAI Whisper — handles Standard German, Austrian, and most Swiss German recordings well. No signup, no subscription."
      features={[
        { icon: '🇩🇪', title: 'Standard, Austrian, Swiss', desc: 'Whisper transcribes Hochdeutsch reliably, plus Austrian and Swiss German in most cases. Strong dialect speakers may need minor cleanup in the editor.' },
        { icon: '📁', title: 'All common formats', desc: 'MP3, MP4, M4A, WAV, OGG, WEBM, FLAC. Up to 25 MB — a 25-minute interview or lecture at normal bitrates fits comfortably.' },
        { icon: '✨', title: 'German AI summary', desc: 'Mictoo generates a 2-3 sentence summary in German with key points and action items — useful for show notes, meeting recaps, or repurposing a podcast into a blog post.' },
      ]}
      faq={[
        { q: 'How accurate is German transcription?', a: 'For clear Hochdeutsch recordings with one speaker, Whisper typically achieves 95%+ word accuracy. Austrian and Swiss German with a strong dialect, multiple speakers, or background noise can reduce accuracy.' },
        { q: 'Does it handle Swiss German (Schweizerdeutsch)?', a: 'Whisper transcribes spoken Swiss German into written Standard German in most cases. Heavy dialect (e.g. rural Bernese or Walliserdeutsch) may produce imperfect results that need cleanup.' },
        { q: 'Can I transcribe German legal or medical recordings?', a: 'Yes for the text. Accuracy for specialized terminology depends on context — Whisper knows most common German legal and medical vocabulary. Verify specialist terms in the browser editor before exporting.' },
        { q: 'Is there a German version of the site?', a: 'Yes — visit mictoo.com/de for the fully German-language interface. This page targets English-speaking users who specifically need to transcribe German audio.' },
        { q: 'How do I record German lectures or interviews?', a: 'Any voice recorder works — iPhone Voice Memos, Android Recorder, Zoom for video calls, or a digital recorder. Save as .m4a or .mp3 and drop into Mictoo.' },
        { q: 'Is it really free?', a: 'Yes. No account, no credit card, no monthly limits. Files up to 25 MB are processed at no cost.' },
      ]}
      relatedLinks={[
        { href: '/de', label: 'Website auf Deutsch' },
        { href: '/french-speech-to-text', label: 'French Speech to Text' },
        { href: '/spanish-audio-to-text', label: 'Spanish Audio to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
