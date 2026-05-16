import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Notta Alternative — Free Transcription Without Monthly Limits | Mictoo',
  description: 'Notta caps free users at 120 minutes per month and limits each transcription to 3 minutes. Mictoo is free, no signup, no monthly minute quota — powered by OpenAI Whisper.',
  alternates: {
    canonical: 'https://mictoo.com/notta-alternative',
    languages: {
      'en': 'https://mictoo.com/notta-alternative',
      'fr': 'https://mictoo.com/fr/notta-alternative',
      'de': 'https://mictoo.com/de/notta-alternative',
      'es': 'https://mictoo.com/es/notta-alternative',
      'ru': 'https://mictoo.com/ru/notta-alternative',
      'it': 'https://mictoo.com/it/notta-alternative',
      'x-default': 'https://mictoo.com/notta-alternative',
    },
  },
}

export default function NottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparison · Notta · Free"
      h1={<>Notta Alternative<br /><span className="text-brand-600">No 120-Minute Monthly Cap</span></>}
      subtitle="Notta is a popular all-in-one transcription tool, but the free tier caps you at 120 minutes per month and 3 minutes per file. Mictoo has no monthly quota and a single per-file limit — for free, no signup."
      competitorName="Notta"
      rows={[
        { label: 'Free tier',            mictoo: 'No monthly cap, 25 MB per file', them: '120 min/month, 3 min per file' },
        { label: 'Account required',     mictoo: 'No', them: 'Yes (email signup)' },
        { label: 'Paid plans',            mictoo: 'Free',  them: '$9 – $25 / user / month' },
        { label: 'Per-file duration',     mictoo: '~25 min (file size cap)', them: '3 min (free) / 5 h (paid)' },
        { label: 'Live transcription',    mictoo: 'No',  them: 'Yes (Notta Bot in meetings)' },
        { label: 'AI summary',            mictoo: 'Yes, free',     them: 'Yes (paid)' },
        { label: 'Transcription model',   mictoo: 'OpenAI Whisper', them: 'Proprietary' },
        { label: 'Speaker labels',        mictoo: 'Manual edit',   them: 'Automatic (paid)' },
        { label: 'Languages',             mictoo: '50+',           them: '100+ (paid plans)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'No 3-minute per-file limit', desc: 'Notta\'s 3-minute free limit per file is too short for a podcast, lecture, or interview. Mictoo handles full ~25-minute audio files for free.' },
        { icon: '🆓', title: 'No monthly minute quota', desc: 'Notta tracks every minute against a 120-min/month free quota. Mictoo only caps individual file size — drop one file or several, no minute counting.' },
        { icon: '✨', title: 'AI summary on the free tier', desc: 'Notta puts AI summaries on paid plans. Mictoo generates a summary with key points and action items free, every time.' },
      ]}
      whenToChoose={{
        mictoo: [
          'You need to transcribe files longer than 3 minutes for free',
          'You don\'t want to hit a 120-minute monthly cap',
          'You want AI summary without paying',
          'You don\'t need automatic speaker diarization',
        ],
        them: [
          'You need a Notta Bot to join your meetings live',
          'You need automatic speaker labels',
          'You want a CRM-integrated workflow',
          'You\'re fine paying for unlimited features',
        ],
      }}
      faq={[
        { q: 'Is Mictoo really free with no minute quota?', a: 'Yes. The only limit is the per-file size (25 MB, which fits roughly 25 minutes at typical podcast bitrates). There\'s no monthly minute tracking and no file count limit.' },
        { q: 'Why does Notta limit free users so heavily?', a: "Notta uses a freemium model where the free tier is intentionally limited to encourage paid upgrades. Mictoo's model is ad-supported, so the free tier is generous by design." },
        { q: 'How does Mictoo make money if it\'s free?', a: "Display ads (Google AdSense), shown in the loading state while a file is being transcribed. The transcript itself and the upload area are ad-free." },
        { q: 'Does Mictoo support live meeting transcription?', a: 'No — Mictoo works on recorded files only. For live capture, use your meeting platform\'s built-in captions (Zoom, Google Meet, Teams) and upload the recording to Mictoo afterwards for a polished transcript.' },
        { q: 'What languages does Mictoo support?', a: 'OpenAI Whisper handles 50+ languages with automatic detection — English, Spanish, French, German, Russian, Ukrainian, Japanese, Chinese, Arabic, Hindi, Korean, and many more. No need to select the language unless auto-detection picks wrong.' },
      ]}
      relatedLinks={[
        { href: '/turboscribe-alternative', label: 'TurboScribe Alternative' },
        { href: '/otter-alternative', label: 'Otter Alternative' },
        { href: '/podcast-transcription', label: 'Podcast Transcription' },
        { href: '/', label: 'Try Mictoo' },
      ]}
    />
  )
}
