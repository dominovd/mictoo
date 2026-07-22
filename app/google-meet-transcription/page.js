import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Google Meet Recording Transcription to Text | Mictoo',
  description:
    'Upload an authorized Google Meet recording from Drive or a local screen capture and get a transcript, AI summary, and exports.',
  alternates: {
    canonical: 'https://mictoo.com/google-meet-transcription',
    languages: {
      'en': 'https://mictoo.com/google-meet-transcription',
      'fr': 'https://mictoo.com/fr/google-meet-transcription',
      'de': 'https://mictoo.com/de/google-meet-transcription',
      'es': 'https://mictoo.com/es/google-meet-transcription',
      'ru': 'https://mictoo.com/ru/google-meet-transcription',
      'it': 'https://mictoo.com/it/google-meet-transcription',
      'pt': 'https://mictoo.com/pt/google-meet-transcription',
      'pl': 'https://mictoo.com/pl/google-meet-transcription',
      'ja': 'https://mictoo.com/ja/google-meet-transcription',
      'ko': 'https://mictoo.com/ko/google-meet-transcription',
      'x-default': 'https://mictoo.com/google-meet-transcription',
    },
  },
  openGraph: {
    title: 'Google Meet Transcription: Workspace or Free Account | Mictoo',
    description: 'Recording from Drive or screen capture from free Meet. Either works.',
    url: 'https://mictoo.com/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Meet Transcription',
    description: 'Any account tier, one upload page.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Google Meet · Drive or local capture · Free"
      h1First="Google Meet Transcription"
      h1Second="Drive recordings and local captures to text"
      subtitle="Upload a Google Meet recording from Drive or a local capture you are authorized to make. Recording availability depends on the host's Workspace edition, permissions, and administrator settings."
      currentHref="/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/meeting-transcription' },
      ]}

      howItWorksTitle="How Google Meet transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Get the recording',
          desc: 'Eligible Workspace recording: Drive › My Drive › Meet Recordings. Otherwise, use an authorized local capture that follows participant-consent rules.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'MP4 or M4A both work. For large MP4s, extract audio with ffmpeg first or sign in for auto-split.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, summary, exports',
          desc: 'Get a timestamped transcript, AI summary, and TXT/SRT/VTT/DOCX exports. Processing time depends on duration and file size.',
        },
      ]}

      exampleTitle="Example Google Meet transcript"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Hey team, thanks for joining. Quick sync on the Q3 launch plan before I head into the offsite next week.' },
        { t: '0:10',  line: 'Marketing has finalised the landing page copy. Engineering is on track for the feature freeze on Friday.' },
        { t: '0:22',  line: 'Support docs are the risk item. We are behind by about three days and need to catch up before launch.' },
        { t: '0:33',  line: 'I can shift Anna from onboarding docs to help this week. That should recover the gap.' },
        { t: '0:44',  line: 'Great. Second topic, the pricing page changes we discussed. Anyone have concerns before we ship them.' },
        { t: '0:56',  line: 'The one thing I would flag is the enterprise tier framing. Feels a bit thin for the price point.' },
        { t: '1:08',  line: 'Fair point. Let me revisit that section this week and share a revised version Friday.' },
      ]}
      summaryPoints={[
        'Q3 launch tracking well, feature freeze Friday.',
        'Support docs behind by 3 days (risk).',
        'Anna reassigned to close the doc gap.',
        'Enterprise tier framing needs revision.',
      ]}
      actionItems={[
        'Reassign Anna to support docs this week',
        'Revise enterprise tier framing by Friday',
        'Confirm feature freeze in Friday standup',
      ]}

      whyTitle="Why Mictoo for Google Meet transcription"
      whyCards={[
        {
          icon: 'lock',
          title: 'Works with a media file',
          desc: 'Upload a Drive recording or an authorized local capture without connecting Mictoo to your Google account.',
        },
        {
          icon: 'target',
          title: 'Timestamped text for review',
          desc: 'Review names and technical terms against the recording, then export the corrected transcript in the format you need.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary always included',
          desc: 'Workspace AI transcript summary is a separate paid feature. Ours is bundled with every transcript.',
        },
        {
          icon: 'globe',
          title: 'Translate to 50+ languages',
          desc: 'Cross-language meeting recap without a translation vendor.',
        },
      ]}

      scenariosTitle="Common Meet scenarios"
      scenarios={[
        { icon: 'chat',      title: 'Standup / sync' },
        { icon: 'briefcase', title: 'Client review' },
        { icon: 'search',    title: 'User interview' },
        { icon: 'users',     title: 'All-hands' },
        { icon: 'headset',   title: 'Support call' },
        { icon: 'globe',     title: 'Multilingual' },
      ]}

      tipsTitle="Tips for Google Meet recordings"
      tips={[
        'Workspace Meet recordings save to Drive › Meet Recordings.',
        'Free tier: QuickTime (Mac) or OBS (Win/Linux) work well.',
        'Large MP4? Extract audio: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Sign in for auto-split of long meetings.',
      ]}

      guidesTitle="Other meeting platforms"
      guides={[
        { href: '/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Cloud + Local + M4A' },
        { href: '/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'OneDrive + SharePoint paths' },
        { href: '/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Any platform, one upload' },
        { href: '/webinar-transcription',       icon: 'monitor', title: 'Webinars',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Do I need Google Workspace to record a Meet call?',
          a: 'Google recording availability depends on the host account edition, meeting role, administrator settings, and permissions. Eligible recordings are saved to Drive. If you make a local capture instead, obtain any required participant consent and follow applicable policy.',
        },
        {
          q: 'Where do Workspace Meet recordings save?',
          a: 'To the meeting organizer\'s Drive: My Drive › Meet Recordings. The MP4 typically appears within a few minutes of the meeting ending. An email notification is sent when it is ready.',
        },
        {
          q: 'Should I use the Meet transcript or upload the recording?',
          a: 'Use the Meet transcript when it is available and meets your needs. Uploading the media is useful when you want Mictoo exports, translation, or an additional transcript to review. Accuracy varies with the audio.',
        },
        {
          q: 'My Meet recording is over 60 MB. What now?',
          a: 'Extract audio only with ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. Or sign in for auto-split of long files up to about 3 hours.',
        },
        {
          q: 'Can I get an AI summary of the Meet call?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Solid first draft for the recap email or follow-up doc.',
        },
        {
          q: 'Does Mictoo identify who is speaking in Meet?',
          a: 'No. The current transcript is continuous text with per-line timestamps and no automatic speaker labels.',
        },
        {
          q: 'Are Meet recordings kept on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped. Only the transcript persists on signed-in accounts.',
        },
      ]}

      ctaHeadline="Turn Meet calls into clean text"
      ctaSubtitle="Upload an authorized Drive recording or local capture for text, summary, and exports."
      ctaButton="Upload Meet recording"

      relatedLinks={[
        { href: '/meeting-transcription',       label: 'Meeting Transcription' },
        { href: '/zoom-transcription',          label: 'Zoom Transcription' },
        { href: '/teams-meeting-transcription', label: 'Teams Transcription' },
        { href: '/webinar-transcription',       label: 'Webinar Transcription' },
        { href: '/business-transcription',      label: 'Business Transcription' },
      ]}
    />
  )
}
