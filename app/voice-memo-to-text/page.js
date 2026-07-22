import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Voice Memo to Text for iPhone and Android | Mictoo',
  description:
    'Upload an iPhone or Android voice recording and get timestamped text, an AI summary, and editable exports.',
  alternates: {
    canonical: 'https://mictoo.com/voice-memo-to-text',
    languages: {
      'en': 'https://mictoo.com/voice-memo-to-text',
      'fr': 'https://mictoo.com/fr/voice-memo-to-text',
      'de': 'https://mictoo.com/de/voice-memo-to-text',
      'es': 'https://mictoo.com/es/voice-memo-to-text',
      'ru': 'https://mictoo.com/ru/voice-memo-to-text',
      'it': 'https://mictoo.com/it/voice-memo-to-text',
      'pt': 'https://mictoo.com/pt/voice-memo-to-text',
      'pl': 'https://mictoo.com/pl/voice-memo-to-text',
      'ja': 'https://mictoo.com/ja/voice-memo-to-text',
      'ko': 'https://mictoo.com/ko/voice-memo-to-text',
      'x-default': 'https://mictoo.com/voice-memo-to-text',
    },
  },
  openGraph: {
    title: 'Voice Memo to Text: Free | Mictoo',
    description: 'Drop your iPhone or Android voice recording, get clean text.',
    url: 'https://mictoo.com/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Memo to Text',
    description: 'Free transcription for phone voice recordings.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function VoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      badge="iPhone · Android · Free"
      h1First="Voice Memo to Text"
      h1Second="Free transcription for phone voice recordings"
      subtitle="Drop your iPhone Voice Memo, Android voice recording, WhatsApp voice note, or Telegram voice message. Get a clean transcript in seconds. No signup, no per-minute fee."
      currentHref="/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="How voice memo transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Share the recording',
          desc: 'iPhone: share sheet from Voice Memos. Android: file from Files app. WhatsApp: forward as file.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) all work directly.',
        },
        {
          icon: 'editPen',
          title: 'Transcript in seconds',
          desc: 'A 5-minute memo finishes in about 10 seconds. AI summary turns rambling ideas into a tight action list.',
        },
      ]}

      exampleTitle="Example voice memo transcript"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Okay, quick voice memo before I forget the whole idea.' },
        { t: '0:04',  line: 'So the pitch is that we take the checkout flow and split it into two clear steps instead of one long form.' },
        { t: '0:13',  line: 'Step one, just email and card. Step two, shipping details after they see the confirmation number.' },
        { t: '0:22',  line: 'The reason this matters is that the drop-off on the current single-page form is around thirty-eight percent.' },
        { t: '0:32',  line: 'Most of that drop-off happens at the shipping section, not at the card entry, which is counterintuitive.' },
        { t: '0:42',  line: 'If we shift shipping to after purchase, we can probably recover twelve to fifteen percent of that traffic.' },
        { t: '0:52',  line: 'Timeline-wise, I think this is two weeks of frontend, one week of backend, maybe a week of testing.' },
      ]}
      summaryPoints={[
        'Idea: split checkout flow into two steps.',
        'Step 1: email + card. Step 2: shipping post-confirmation.',
        'Current drop-off: 38%, mostly at shipping section.',
        'Estimated recovery: 12-15% of traffic.',
      ]}
      actionItems={[
        'Draft two-step checkout mockup',
        'Verify 38% drop-off in analytics',
        'Scope engineering (~4 weeks total)',
      ]}

      whyTitle="Why Mictoo for voice memos"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'AI summary for rambling memos',
          desc: 'Voice memos are messy by nature. The summary turns a five-minute stream of thought into a two-line takeaway.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a native',
          desc: 'Apple Voice Memos writes .m4a (AAC in MP4). We accept it directly, no conversion.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga native',
          desc: 'Save Telegram voice message from the chat and drop the .oga file. Opus in OGG, handled natively.',
        },
        {
          icon: 'globe',
          title: 'Translate for cross-language notes',
          desc: 'Memo in your native language, English notes for the team. One click.',
        },
      ]}

      scenariosTitle="Common voice memo scenarios"
      scenarios={[
        { icon: 'sparkles', title: 'Idea capture' },
        { icon: 'chat',     title: 'Meeting notes' },
        { icon: 'editPen',  title: 'Draft writing' },
        { icon: 'book',     title: 'Journaling' },
        { icon: 'phone',    title: 'Voice message' },
        { icon: 'globe',    title: 'Multilingual' },
      ]}

      tipsTitle="Tips for cleaner voice memos"
      tips={[
        'Hold the phone close to reduce room noise.',
        'For long memos over 60 MB, sign in for auto-split.',
        'Speak in one language per memo for cleanest detection.',
        'Say "new paragraph" if you want the transcript to break there.',
      ]}

      guidesTitle="Related tools"
      guides={[
        { href: '/m4a-to-text',        icon: 'file',  title: 'M4A format',       desc: 'iPhone / GarageBand deep dive' },
        { href: '/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Telegram voice deep dive' },
        { href: '/dictation-to-text',  icon: 'editPen', title: 'Dictation',      desc: 'Voice-first writing workflow' },
        { href: '/interview-transcription', icon: 'chat', title: 'Interview',    desc: 'Phone or in-person interview' },
      ]}

      faq={[
        {
          q: 'Can I transcribe iPhone Voice Memos directly?',
          a: 'Yes. Share the memo from the Voice Memos app (share sheet → save to Files or send to yourself) and drop the .m4a into Mictoo. No conversion needed.',
        },
        {
          q: 'Does Mictoo transcribe WhatsApp or Telegram voice messages?',
          a: 'Yes. Save the voice message from the chat (forward → save as file) and drop it. WhatsApp voice notes are .opus, Telegram voice notes are .oga (both are OGG containers). Both work directly.',
        },
        {
          q: 'What is the file size limit?',
          a: '25 MB anonymously, 60 MB when signed in. A 60-minute voice memo at typical bitrate is about 20-30 MB, so most fit under the free cap.',
        },
        {
          q: 'Does Mictoo transcribe non-English voice memos?',
          a: 'Yes. Whisper large-v3 supports 50+ languages. For short memos or non-English content, set the language explicitly for cleaner first-pass detection.',
        },
        {
          q: 'Can I get a summary of a rambling brainstorm memo?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Excellent for turning stream-of-consciousness memos into tight action lists.',
        },
        {
          q: 'Are voice memos stored on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped. Only the transcript persists if you sign in and save it.',
        },
        {
          q: 'Can I translate my voice memo to another language?',
          a: 'Yes. Pick a target language and click Translate after transcription. GPT-4o-mini handles the translation and it appears alongside the original.',
        },
      ]}

      ctaHeadline="Turn voice memos into text and action items"
      ctaSubtitle="iPhone, Android, WhatsApp, Telegram voice notes. All formats, one upload."
      ctaButton="Upload a voice memo"

      relatedLinks={[
        { href: '/dictation-to-text',       label: 'Dictation to Text' },
        { href: '/interview-transcription', label: 'Interview Transcription' },
        { href: '/m4a-to-text',             label: 'M4A to Text' },
        { href: '/ogg-to-text',             label: 'OGG to Text' },
        { href: '/meeting-transcription',   label: 'Meeting Transcription' },
      ]}
    />
  )
}
