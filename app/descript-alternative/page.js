import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Descript Alternative — Free Transcription Without Signup | Mictoo',
  description: 'Looking for a Descript alternative just for transcription? Mictoo gives you free, no-signup AI transcription powered by OpenAI Whisper. No editor, no subscription.',
  alternates: {
    canonical: 'https://mictoo.com/descript-alternative',
    languages: {
      'en': 'https://mictoo.com/descript-alternative',
      'fr': 'https://mictoo.com/fr/descript-alternative',
      'de': 'https://mictoo.com/de/descript-alternative',
      'es': 'https://mictoo.com/es/descript-alternative',
      'ru': 'https://mictoo.com/ru/descript-alternative',
      'it': 'https://mictoo.com/it/descript-alternative',
      'pt': 'https://mictoo.com/pt/descript-alternative',
      'pl': 'https://mictoo.com/pl/descript-alternative',
      'ja': 'https://mictoo.com/ja/descript-alternative',
      'ko': 'https://mictoo.com/ko/descript-alternative',
      'x-default': 'https://mictoo.com/descript-alternative',
    },
  },

  openGraph: {
    title: "Descript Alternative — Free Transcription Without Signup | Mictoo",
    description: "Looking for a Descript alternative just for transcription? Mictoo gives you free, no-signup AI transcription powered by OpenAI Whisper. No editor, no subscription.",
    url: "https://mictoo.com/descript-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descript Alternative — Free Transcription Without Signup | Mictoo",
    description: "Looking for a Descript alternative just for transcription? Mictoo gives you free, no-signup AI transcription powered by OpenAI Whisper. No editor, no subscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparison · Descript · Free"
      h1={<>Descript Alternative<br /><span className="text-brand-600">Free Transcription Without the Editor</span></>}
      subtitle="Descript is a full audio and video editor with transcription built in. If you only need the transcription part, Mictoo is the free, no-signup option powered by OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Free tier',           mictoo: 'No monthly cap, 25 MB per file', them: '1 hour of transcription per month' },
        { label: 'Account required',    mictoo: 'No', them: 'Yes (email signup)' },
        { label: 'Paid plans',           mictoo: 'Free',  them: '$12–24 / month' },
        { label: 'Audio/video editor',  mictoo: 'No',  them: 'Yes (full-featured)' },
        { label: 'Transcription model', mictoo: 'OpenAI Whisper', them: 'Proprietary + Whisper option' },
        { label: 'AI summary',           mictoo: 'Yes, free',     them: 'Yes (paid tier)' },
        { label: 'SRT export',           mictoo: 'Yes, free',     them: 'Yes (paid tier)' },
        { label: 'Speaker labels',       mictoo: 'Manual edit',   them: 'Automatic' },
        { label: 'Languages',            mictoo: '50+',           them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Free, no signup', desc: 'Drop a file and get a transcript without an account, a card, or an email. Descript requires signup even on the free plan.' },
        { icon: '⚡', title: 'Faster for one-offs', desc: 'No app to install, no editor to learn. One page, one drop, results in seconds. Built for quick transcription, not full production.' },
        { icon: '🔒', title: 'Privacy-first', desc: "Audio is streamed directly to OpenAI's Whisper API and not stored on Mictoo's servers. No projects, no cloud library, no team workspace by design." },
      ]}
      whenToChoose={{
        mictoo: [
          'You only need transcription, not editing',
          'You want it free without a signup',
          'You\'re transcribing a one-off interview, podcast, or meeting',
          'You don\'t want a desktop app or team workspace',
        ],
        them: [
          'You produce podcasts or videos and need a real editor',
          'You want "edit audio by editing text" workflow',
          'You need automatic speaker labels every time',
          'You\'re working in a team with a shared library of projects',
        ],
      }}
      faq={[
        { q: 'Is Mictoo a full replacement for Descript?', a: "Not for editing. Descript is an audio and video editor with transcription built in — Mictoo is just the transcription part. If you only need text or subtitles from a recording, Mictoo replaces that workflow for free." },
        { q: 'Is the transcription quality the same?', a: 'Both tools can use OpenAI Whisper. Mictoo uses Whisper exclusively, so transcription accuracy is comparable. Descript offers an additional proprietary model in some plans.' },
        { q: 'Does Mictoo have speaker labels?', a: 'Mictoo returns a single transcript without automatic speaker labels in the free tier. You can add Speaker 1 / Speaker 2 manually in the browser editor before downloading. Descript labels speakers automatically.' },
        { q: 'Can I edit the transcript in Mictoo?', a: "Yes — the transcript appears in an editable text box. You can fix names, punctuation, or paragraph breaks before copying or downloading as .txt or .srt." },
        { q: 'What about exporting to Word or DOCX?', a: 'Mictoo currently exports .txt and .srt. Copy the transcript and paste it into Word for a quick DOCX. Native DOCX export is on the roadmap.' },
      ]}
      relatedLinks={[
        { href: '/turboscribe-alternative', label: 'TurboScribe Alternative' },
        { href: '/otter-alternative', label: 'Otter Alternative' },
        { href: '/notta-alternative', label: 'Notta Alternative' },
        { href: '/', label: 'Try Mictoo' },
      ]}
    />
  )
}
