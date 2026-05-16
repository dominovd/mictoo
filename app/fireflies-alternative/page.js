import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Fireflies Alternative — Transcribe Meetings Without a Bot | Mictoo',
  description: "Fireflies auto-joins your meetings as a bot to record and transcribe. Mictoo transcribes recordings you already have — no bot, no signup, no OAuth. Free with OpenAI Whisper.",
  alternates: {
    canonical: 'https://mictoo.com/fireflies-alternative',
    languages: {
      'en': 'https://mictoo.com/fireflies-alternative',
      'fr': 'https://mictoo.com/fr/fireflies-alternative',
      'de': 'https://mictoo.com/de/fireflies-alternative',
      'es': 'https://mictoo.com/es/fireflies-alternative',
      'ru': 'https://mictoo.com/ru/fireflies-alternative',
      'it': 'https://mictoo.com/it/fireflies-alternative',
      'pt': 'https://mictoo.com/pt/fireflies-alternative',
      'pl': 'https://mictoo.com/pl/fireflies-alternative',
      'ja': 'https://mictoo.com/ja/fireflies-alternative',
      'ko': 'https://mictoo.com/ko/fireflies-alternative',
      'x-default': 'https://mictoo.com/fireflies-alternative',
    },
  },
}

export default function FirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparison · Fireflies · Free"
      h1={<>Fireflies Alternative<br /><span className="text-brand-600">Transcribe Meetings Without a Bot</span></>}
      subtitle="Fireflies joins your meetings as an AI bot to record and transcribe in real time. Mictoo works the opposite way — drop the recording you already have and get a transcript. No bot, no calendar integration, no signup."
      competitorName="Fireflies"
      rows={[
        { label: 'Free tier',            mictoo: 'No monthly cap, 25 MB per file', them: '800 minutes / user / month' },
        { label: 'Account required',     mictoo: 'No', them: 'Yes (email + OAuth)' },
        { label: 'Paid plans',            mictoo: 'Free',  them: '$10–19 / user / month' },
        { label: 'Recording method',     mictoo: 'Upload recording yourself', them: 'Bot joins live meeting' },
        { label: 'Live transcription',    mictoo: 'No',  them: 'Yes (during the call)' },
        { label: 'Calendar integration',  mictoo: 'No',  them: 'Google / Outlook / Zoom' },
        { label: 'AI summary',            mictoo: 'Yes, free',     them: 'Yes (paid tier)' },
        { label: 'CRM integration',       mictoo: 'No',            them: 'Salesforce, HubSpot, etc.' },
        { label: 'Transcription model',   mictoo: 'OpenAI Whisper', them: 'Proprietary' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'No bot in your meetings', desc: 'Some participants are uncomfortable with an AI bot recording the call. With Mictoo, you record locally with Zoom/Meet/Teams and transcribe afterwards.' },
        { icon: '🆓', title: 'No signup, no quota', desc: "Fireflies' free plan caps you at 800 minutes per user per month and requires OAuth. Mictoo works without an account and without monthly minute counting." },
        { icon: '🌍', title: 'Better for non-English audio', desc: 'OpenAI Whisper handles 50+ languages with strong accuracy. Fireflies is optimized for English business calls and is weaker on languages like Russian, Ukrainian, Polish, or Korean.' },
      ]}
      whenToChoose={{
        mictoo: [
          'You record meetings yourself and want a transcript afterwards',
          'You don\'t want an AI bot joining your calls',
          'You need transcription for non-English meetings',
          'You want a free, no-signup option for one-off recordings',
        ],
        them: [
          'You want live transcription during the meeting',
          'You need CRM logging of sales conversations',
          'Your team wants automatic recording across all calls',
          'You need conversation analytics (talk time, sentiment, etc.)',
        ],
      }}
      faq={[
        { q: 'Can Mictoo join my Zoom or Teams meeting like Fireflies?', a: "No. Mictoo doesn't join meetings. You record the call with Zoom/Teams/Meet's built-in recording, then upload the file. This avoids the bot in your meetings and the privacy concerns around it." },
        { q: 'How do I get a recording to upload?', a: 'In Zoom: enable Local Recording or Cloud Recording in your meeting. After the meeting, download the MP4 or M4A from Zoom and drop it into Mictoo.' },
        { q: 'Does Mictoo do action items and summary like Fireflies?', a: "Yes. After transcription, Mictoo's AI Summary shows a 2-3 sentence overview, key points, and action items — all on the free tier. Fireflies offers similar features but only on paid plans." },
        { q: 'What about meeting analytics?', a: "Mictoo doesn't do talk-time, sentiment, or speaker analytics. If you need conversation intelligence for sales coaching, Fireflies (or Gong) is a better fit." },
        { q: 'Is Mictoo safe for confidential meetings?', a: "Files are streamed directly to OpenAI's Whisper API and discarded. Mictoo stores nothing. Per OpenAI's API data policy, your audio is not used for training and is deleted after at most 30 days of abuse monitoring." },
      ]}
      relatedLinks={[
        { href: '/otter-alternative', label: 'Otter Alternative' },
        { href: '/meeting-transcription', label: 'Meeting Transcription' },
        { href: '/zoom-transcription', label: 'Zoom Transcription' },
        { href: '/', label: 'Try Mictoo' },
      ]}
    />
  )
}
