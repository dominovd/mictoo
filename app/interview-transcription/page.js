import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Free Interview Transcription Tool: Convert Interviews to Text Online | Mictoo',
  description:
    'Transcribe interviews for free with AI. Upload audio or video recordings and get accurate interview transcripts in minutes. Supports MP3, WAV, M4A, MP4, MOV, and more.',
  alternates: {
    canonical: 'https://mictoo.com/interview-transcription',
    languages: {
      'en': 'https://mictoo.com/interview-transcription',
      'fr': 'https://mictoo.com/fr/interview-transcription',
      'de': 'https://mictoo.com/de/interview-transcription',
      'es': 'https://mictoo.com/es/interview-transcription',
      'ru': 'https://mictoo.com/ru/interview-transcription',
      'it': 'https://mictoo.com/it/interview-transcription',
      'pt': 'https://mictoo.com/pt/interview-transcription',
      'pl': 'https://mictoo.com/pl/interview-transcription',
      'ja': 'https://mictoo.com/ja/interview-transcription',
      'ko': 'https://mictoo.com/ko/interview-transcription',
      'x-default': 'https://mictoo.com/interview-transcription',
    },
  },
  openGraph: {
    title: 'Free Interview Transcription Tool | Mictoo',
    description: 'Free interview transcription with AI. Upload audio or video, get a clean transcript in minutes.',
    url: 'https://mictoo.com/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Interview Transcription',
    description: 'Upload audio or video, get a clean transcript in minutes.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function InterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Journalists · Researchers · UX · Free"
      h1First="Interview Transcription"
      h1Second="Free tool for journalists, researchers, and UX teams"
      subtitle="Upload a 1:1 or panel interview from any recorder or meeting app. Get a clean, timestamped transcript with AI summary and exports ready for the article, paper, or research repo."
      currentHref="/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="How interview transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Export your interview',
          desc: 'Any recording will do. Voice memo, Zoom cloud recording, Riverside audio track, phone call export.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'Upload MP3, MP4, M4A, WAV, MOV, or any common audio and video format up to 60 MB.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, quotes, exports',
          desc: 'Timestamped transcript, AI summary, TXT / SRT / VTT / DOCX exports. Ready for the article or research paper.',
        },
      ]}

      exampleTitle="Example interview transcript"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Thanks for taking the time. Could you start by describing your role and how long you have been in it.' },
        { t: '0:08',  line: 'Sure. I lead the analytics team at a mid-sized fintech, and I have been in this role for a little over two years.' },
        { t: '0:20',  line: 'Before that I was at a larger bank, mostly working on customer retention and lifetime-value modelling.' },
        { t: '0:32',  line: 'So the shift from a big bank to a fintech was mostly about the pace and the freedom to try new things.' },
        { t: '0:44',  line: 'And the tooling has come a long way. What used to take a week in the old stack takes an afternoon now.' },
        { t: '0:56',  line: 'Can you give me an example of that kind of shift? Something concrete you would not have attempted before.' },
        { t: '1:04',  line: 'The obvious one is real-time cohort experiments. We ship an idea in the morning and see meaningful data by that evening.' },
      ]}
      summaryPoints={[
        'Analytics lead at fintech, 2+ years in role.',
        'Previous role at large bank focused on retention modelling.',
        'Fintech shift driven by pace and experiment freedom.',
        'Real-time cohort experiments possible with modern tooling.',
      ]}
      actionItems={[
        'Follow up on retention-modelling comparison',
        'Ask for real-time cohort experiment example',
        'Get intro to previous employer contact',
      ]}

      whyTitle="Why Mictoo for interview transcription"
      whyCards={[
        {
          icon: 'target',
          title: 'Accurate on proper nouns',
          desc: 'Whisper large-v3 handles names, cities, and company terms better than most built-in meeting-app transcripts.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary and quote extraction',
          desc: 'The AI summary is a solid first draft for the pull-quote list, the research memo, or the article intro.',
        },
        {
          icon: 'lock',
          title: 'Subject anonymity preserved',
          desc: 'The recording is never stored on our servers. Only the transcript persists, and only if you sign in.',
        },
        {
          icon: 'globe',
          title: 'Translate for cross-language work',
          desc: 'Interview conducted in Spanish, German, or Japanese. Translate to your working language in one click.',
        },
      ]}

      scenariosTitle="Common interview scenarios"
      scenarios={[
        { icon: 'chat',      title: 'Journalism' },
        { icon: 'search',    title: 'UX research' },
        { icon: 'users',     title: 'Recruiting' },
        { icon: 'book',      title: 'Oral history' },
        { icon: 'briefcase', title: 'Legal deposition' },
        { icon: 'globe',     title: 'Multilingual' },
      ]}

      tipsTitle="Tips for cleaner interview transcripts"
      tips={[
        'Record with a lapel or handheld mic close to the subject.',
        'Ask the subject to pause briefly between long answers.',
        'Set the language explicitly for non-English or heavy accents.',
        'Review names and unusual terms after transcription.',
      ]}

      guidesTitle="Pick the right recorder guide"
      guides={[
        { href: '/zoom-transcription',        icon: 'video', title: 'Zoom interview',    desc: 'Cloud Recording MP4 or M4A' },
        { href: '/google-meet-transcription', icon: 'video', title: 'Meet interview',    desc: 'Drive recording download' },
        { href: '/voice-memo-to-text',        icon: 'mic',   title: 'iPhone Voice Memo', desc: 'Any M4A voice recording' },
        { href: '/podcast-transcription',     icon: 'headset', title: 'Podcast-style',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'What file formats does Mictoo accept for interviews?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC and most other common audio and video formats. Video files are auto-demuxed server-side.',
        },
        {
          q: 'Does Mictoo identify who is speaking?',
          a: 'Not yet. The transcript is continuous text with per-line timestamps and no "Interviewer / Subject" labels. Diarisation is on the Pro roadmap.',
        },
        {
          q: 'Is interview transcription free?',
          a: 'Yes. Free per file up to 25 MB anonymously, 60 MB signed in. Longer interviews can be split automatically for signed-in users.',
        },
        {
          q: 'Can I redact names before publishing the transcript?',
          a: 'Yes. Switch to Editor mode after transcription to edit any word or line. Save the edited version and export.',
        },
        {
          q: 'Are recordings kept on your servers?',
          a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts are only stored if you sign in.',
        },
        {
          q: 'Can I translate the interview transcript?',
          a: 'Yes. Pick a target language and click Translate. Useful for cross-language field research or multilingual reporting.',
        },
        {
          q: 'What export formats are available?',
          a: 'TXT, SRT, VTT, DOCX. Signed-in users also get PDF and JSON. Timestamps in SRT and VTT align to the original recording.',
        },
      ]}

      ctaHeadline="Turn interviews into publishable text"
      ctaSubtitle="Drop your recording and get a transcript, summary, and exports ready for the article or research repo."
      ctaButton="Upload an interview"

      relatedLinks={[
        { href: '/meeting-transcription',      label: 'Meeting Transcription' },
        { href: '/podcast-transcription',      label: 'Podcast Transcription' },
        { href: '/voice-memo-to-text',         label: 'Voice Memo to Text' },
        { href: '/business-transcription',     label: 'Business Transcription' },
        { href: '/lecture-transcription',      label: 'Lecture Transcription' },
      ]}
    />
  )
}
