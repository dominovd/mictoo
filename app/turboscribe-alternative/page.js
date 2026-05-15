import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'TurboScribe Alternative — Free Whisper Transcription, No Signup | Mictoo',
  description: 'TurboScribe is a popular Whisper-based transcription tool but requires an account and limits free users to 30 minutes per day. Mictoo is fully no-signup with built-in AI summary.',
  alternates: {
    canonical: 'https://mictoo.com/turboscribe-alternative',
    languages: {
      'en': 'https://mictoo.com/turboscribe-alternative',
      'fr': 'https://mictoo.com/fr/turboscribe-alternative',
      'de': 'https://mictoo.com/de/turboscribe-alternative',
      'es': 'https://mictoo.com/es/turboscribe-alternative',
      'ru': 'https://mictoo.com/ru/turboscribe-alternative',
      'x-default': 'https://mictoo.com/turboscribe-alternative',
    },
  },
}

export default function TurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparison · TurboScribe · Free"
      h1={<>TurboScribe Alternative<br /><span className="text-brand-600">Same Whisper, No Signup</span></>}
      subtitle="TurboScribe and Mictoo both use OpenAI Whisper, so transcription quality is nearly identical. The main differences are signup, file limits, and built-in AI summary."
      competitorName="TurboScribe"
      rows={[
        { label: 'Free tier',            mictoo: 'No monthly cap, 25 MB per file', them: '3 files per day, 30 min each' },
        { label: 'Account required',     mictoo: 'No', them: 'Yes (email signup)' },
        { label: 'Paid plans',            mictoo: 'Free',  them: '$20 / month unlimited' },
        { label: 'File size limit (free)', mictoo: '25 MB per file', them: '~150 MB / 30 min per file' },
        { label: 'File size limit (paid)', mictoo: 'Same as free',   them: '5 GB / 10 h per file' },
        { label: 'Batch upload',           mictoo: 'No', them: 'Yes (paid, up to 50 files)' },
        { label: 'Transcription model',    mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'AI summary',             mictoo: 'Yes, free',     them: 'Yes (paid tier)' },
        { label: 'SRT export',             mictoo: 'Yes, free',     them: 'Yes' },
        { label: 'Transcript history',     mictoo: 'No',            them: 'Yes (account-based)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Truly no signup', desc: "TurboScribe needs an email even for the free tier. Mictoo asks for nothing — drop file, get text. Useful for one-off recordings where you don't want another account." },
        { icon: '✨', title: 'AI summary on the free tier', desc: "Mictoo automatically generates a 2-3 sentence summary, key points, and action items after every transcription. TurboScribe puts AI summary behind the $20/month paywall." },
        { icon: '🔒', title: 'Nothing stored', desc: 'No transcript history, no cloud workspace, no projects. Audio is streamed to Whisper and discarded immediately. TurboScribe stores your transcripts in your account.' },
      ]}
      whenToChoose={{
        mictoo: [
          'You want zero signup friction',
          'You need AI summary on the free tier',
          'Your files are under 25 MB (or you can compress)',
          'You value not having a transcript history stored',
        ],
        them: [
          'You need files larger than 25 MB on the free tier',
          'You want a history of all past transcriptions',
          'You need to upload many files at once (batch)',
          'You\'re fine paying $20/month for unlimited large files',
        ],
      }}
      faq={[
        { q: 'Is the transcription quality the same?', a: 'Yes, essentially. Both tools use OpenAI\'s Whisper model. Quality differences come from how each tool segments audio and handles edge cases, but core transcription accuracy is comparable.' },
        { q: 'Why does Mictoo have a smaller file limit?', a: "The 25 MB limit comes from OpenAI's Whisper API. TurboScribe handles larger files by splitting them on their servers and stitching the results back together. We're working on the same approach for larger files." },
        { q: 'Can I get long files transcribed on Mictoo?', a: "For now, files need to fit under 25 MB. The how-to-compress-audio guide on our site walks through three quick ways to fit a long recording: extract just the audio track, lower the bitrate, or split into segments." },
        { q: 'Does Mictoo plan to add an account / history?', a: 'A local history (stored in your browser, no server account) is on the roadmap. Cloud-based history with a signup is intentionally not in the product — it conflicts with the no-signup positioning.' },
        { q: 'Which one is faster?', a: 'TurboScribe advertises ~30 minutes processed in under a minute. Mictoo is similar — most files transcribe in 15-30 seconds. Both feel near-instant for files under 25 minutes.' },
      ]}
      relatedLinks={[
        { href: '/descript-alternative', label: 'Descript Alternative' },
        { href: '/notta-alternative', label: 'Notta Alternative' },
        { href: '/how-to-compress-audio', label: 'How to compress audio' },
        { href: '/', label: 'Try Mictoo' },
      ]}
    />
  )
}
