import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Business Transcription: Internal Meetings, All-Hands, Exec Briefings | Mictoo',
  description:
    'Transcribe internal company meetings without IT bureaucracy. Founder 1:1s, all-hands, strategy sessions, exec briefings. Upload the recording, get a transcript and summary.',
  alternates: {
    canonical: 'https://mictoo.com/business-transcription',
    languages: {
      'en': 'https://mictoo.com/business-transcription',
      'fr': 'https://mictoo.com/fr/business-transcription',
      'de': 'https://mictoo.com/de/business-transcription',
      'es': 'https://mictoo.com/es/business-transcription',
      'ru': 'https://mictoo.com/ru/business-transcription',
      'it': 'https://mictoo.com/it/business-transcription',
      'pt': 'https://mictoo.com/pt/business-transcription',
      'pl': 'https://mictoo.com/pl/business-transcription',
      'ja': 'https://mictoo.com/ja/business-transcription',
      'ko': 'https://mictoo.com/ko/business-transcription',
      'x-default': 'https://mictoo.com/business-transcription',
    },
  },
  openGraph: {
    title: 'Business Transcription: Internal Meetings to Text | Mictoo',
    description: 'Transcribe internal company meetings without IT setup.',
    url: 'https://mictoo.com/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Transcription',
    description: 'Founder 1:1s, all-hands, exec briefings.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function BusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Founders · Execs · Small teams · Free"
      h1First="Business Transcription"
      h1Second="Founder 1:1s, all-hands, exec briefings"
      subtitle="A practical transcription tool for internal company meetings. Upload the recording, get a transcript and AI summary. No IT ticket to file, no per-seat license to provision."
      currentHref="/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="How business transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Export the recording',
          desc: 'From Zoom, Teams, Meet, Webex, or whatever your company uses. MP4 or M4A audio-only both work.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'No IT approval needed. Runs entirely on your side, no admin console, no per-seat license.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, summary, action items',
          desc: 'Timestamped transcript, AI summary, DOCX export ready for the recap email.',
        },
      ]}

      exampleTitle="Example business meeting transcript"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Thanks everyone for making time. This is our Q3 strategy check-in, and we have about an hour blocked.' },
        { t: '0:10',  line: 'Let me start with the top-line update. Revenue is tracking eight percent ahead of plan, mostly from mid-market expansion.' },
        { t: '0:22',  line: 'The new enterprise motion is slower than we projected. Two deals slipped from Q2 into Q3.' },
        { t: '0:35',  line: 'We should discuss whether we double down on mid-market or push harder on enterprise readiness this quarter.' },
        { t: '0:48',  line: 'My take: mid-market is working, and we should not distract the team by chasing the enterprise segment yet.' },
        { t: '1:02',  line: 'Agreed. Let us set a target of thirty new mid-market accounts by end of Q3 and revisit enterprise in Q4 planning.' },
        { t: '1:14',  line: 'One more topic before we wrap. The engineering roadmap for the same quarter, which we tie to these customer commitments.' },
      ]}
      summaryPoints={[
        'Revenue 8% ahead of plan, driven by mid-market.',
        'Enterprise motion slipping (2 deals moved Q2 to Q3).',
        'Decision: double down on mid-market this quarter.',
        'Target: 30 new mid-market accounts by end of Q3.',
      ]}
      actionItems={[
        'Set 30-account mid-market target',
        'Revisit enterprise motion in Q4 planning',
        'Align engineering roadmap to customer commitments',
      ]}

      whyTitle="Why Mictoo for business transcription"
      whyCards={[
        {
          icon: 'lock',
          title: 'No IT approval loop',
          desc: 'Runs on your side. No admin dashboard, no per-seat license, no compliance review to schedule.',
        },
        {
          icon: 'sparkles',
          title: 'Recap-email-ready summary',
          desc: 'AI summary gives the recap draft in seconds. Trim what you already committed to, keep what needs escalation.',
        },
        {
          icon: 'shield',
          title: 'Recordings not stored',
          desc: 'Audio streams to the transcription provider and is dropped after processing. Only the transcript persists on signed-in accounts.',
        },
        {
          icon: 'globe',
          title: 'Translate for international teams',
          desc: 'Meeting in English but the recap needs to go to a German subsidiary? One click.',
        },
      ]}

      scenariosTitle="Common business scenarios"
      scenarios={[
        { icon: 'briefcase', title: 'Exec briefing' },
        { icon: 'users',     title: 'All-hands' },
        { icon: 'chat',      title: 'Founder 1:1' },
        { icon: 'target',    title: 'Strategy offsite' },
        { icon: 'search',    title: 'Board update' },
        { icon: 'headset',   title: 'Customer escalation' },
      ]}

      tipsTitle="Tips for internal recordings"
      tips={[
        'Prefer audio-only exports when your platform offers them.',
        'For meeting-video MP4 over 60 MB, extract audio with ffmpeg first.',
        'Use Auto-detect for multilingual leadership calls.',
        'Save the transcript to history to build a searchable archive.',
      ]}

      guidesTitle="Pick the right platform guide"
      guides={[
        { href: '/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Cloud Recording, M4A audio-only' },
        { href: '/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive or SharePoint path' },
        { href: '/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Drive recording, free workaround' },
        { href: '/meeting-transcription#tool',  icon: 'file',  title: 'Other',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: 'Is my company recording sent to your servers?',
          a: 'The audio streams to the transcription provider (Groq/Replicate/Deepgram/OpenAI depending on routing), gets processed once, and is dropped from memory. We never write the audio to disk. Only the text transcript persists, and only if you sign in and save it.',
        },
        {
          q: 'Do I need IT to approve this?',
          a: 'No. Mictoo is a browser tool. Nothing gets installed, no admin console, no directory integration, no admin enablement. If your company allows browsing SaaS websites, you can use it.',
        },
        {
          q: 'Can I use Mictoo for regulated industries?',
          a: 'Check your specific compliance requirements. We do not offer a signed BAA or SOC 2 report. For strict regulated environments, use a fully self-hosted transcription tool instead.',
        },
        {
          q: 'Can I get an AI summary for the recap email?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Solid first draft for the follow-up email or Notion doc.',
        },
        {
          q: 'What if the meeting is over 60 MB?',
          a: 'Sign in to enable auto-split (up to about 3 hours). Or extract audio from the video with ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, drops file size 5-15x.',
        },
        {
          q: 'Can I translate the transcript for an international team?',
          a: 'Yes. After transcription, pick a target language and click Translate. Useful for cross-language subsidiaries.',
        },
        {
          q: 'What export formats work for a recap email?',
          a: 'TXT for pasting into the email body, DOCX for a proper attachment, PDF (signed-in) for archive. Summary is available separately.',
        },
      ]}

      ctaHeadline="Turn internal meetings into recap docs"
      ctaSubtitle="Founder 1:1s, all-hands, exec briefings. Transcript and summary without an IT ticket."
      ctaButton="Upload a business meeting"

      relatedLinks={[
        { href: '/meeting-transcription',       label: 'Meeting Transcription' },
        { href: '/zoom-transcription',          label: 'Zoom Transcription' },
        { href: '/teams-meeting-transcription', label: 'Teams Transcription' },
        { href: '/google-meet-transcription',   label: 'Google Meet Transcription' },
        { href: '/interview-transcription',     label: 'Interview Transcription' },
      ]}
    />
  )
}
