import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Multilingual Transcription — Free AI Tool for 50+ Languages | Mictoo',
  description: 'Free multilingual transcription powered by OpenAI Whisper. Automatic language detection across 50+ languages — perfect for international podcasts, interviews, and recordings.',
  alternates: { canonical: 'https://mictoo.com/multilingual-transcription' },
}

export default function MultilingualTranscriptionPage() {
  return (
    <LandingLayout
      badge="50+ Languages · Whisper · Free"
      h1={<>Multilingual Transcription<br /><span className="text-brand-600">Free AI Tool for 50+ Languages</span></>}
      subtitle="Drop a recording in any of 50+ languages and Mictoo identifies it automatically and transcribes it. Powered by OpenAI Whisper — built for global content. No signup, no per-language pricing."
      features={[
        { icon: '🌍', title: 'Auto-detect language', desc: "Whisper detects the spoken language automatically. You can override it if needed, but for clean recordings auto-detection is reliable in most cases." },
        { icon: '🗺️', title: 'Strong coverage', desc: 'English, Spanish, French, German, Portuguese, Russian, Ukrainian, Polish, Italian, Dutch, Turkish, Japanese, Korean, Chinese, Arabic, Hindi, Hebrew, Indonesian, and many more.' },
        { icon: '✨', title: 'Summary in the same language', desc: "After transcription, Mictoo's AI Summary is generated in the recording's language — so a Japanese podcast gets a Japanese summary, an Arabic interview gets an Arabic summary." },
      ]}
      faq={[
        { q: 'How does language detection work?', a: 'OpenAI Whisper analyzes the first few seconds of audio and identifies the language with high confidence. For most recordings auto-detection is reliable; for very short clips (under 5 seconds) or noisy openings you can set the language manually from the dropdown.' },
        { q: 'Which languages are supported?', a: 'Whisper supports over 50 languages including all major European, East Asian, and Middle Eastern languages. Less common languages may have lower accuracy. Smaller languages like Welsh, Maltese, or Yiddish are supported but with varying quality.' },
        { q: 'What if my recording mixes two languages?', a: 'Whisper transcribes the dominant language. If the audio switches between, say, English and Spanish, you may need to split the file or run it twice with the language set manually for each segment.' },
        { q: 'Is it free for all languages?', a: 'Yes. There\'s no per-language pricing or quota. The 25 MB per-file limit applies regardless of language.' },
        { q: 'Can I translate the transcript?', a: 'Mictoo transcribes in the spoken language. For translation, copy the transcript into ChatGPT, DeepL, or Google Translate. Native in-product translation is on the roadmap.' },
        { q: 'How accurate is non-English transcription?', a: 'Major languages (Spanish, French, German, Portuguese, Russian, Japanese, Chinese) typically reach 90-95% accuracy on clear recordings. Smaller or less-resourced languages may have lower baseline accuracy.' },
      ]}
      relatedLinks={[
        { href: '/french-speech-to-text', label: 'French Speech to Text' },
        { href: '/spanish-audio-to-text', label: 'Spanish Audio to Text' },
        { href: '/german-audio-transcription', label: 'German Audio Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
