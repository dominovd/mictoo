import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Zoom Transcription for Cloud and Local Recordings | Mictoo',
  description:
    'Upload a Zoom cloud or local MP4/M4A recording and get a timestamped transcript, AI summary, and export files.',
  alternates: {
    canonical: 'https://mictoo.com/zoom-transcription',
    languages: {
      'en': 'https://mictoo.com/zoom-transcription',
      'fr': 'https://mictoo.com/fr/zoom-transcription',
      'de': 'https://mictoo.com/de/zoom-transcription',
      'es': 'https://mictoo.com/es/zoom-transcription',
      'ru': 'https://mictoo.com/ru/zoom-transcription',
      'it': 'https://mictoo.com/it/zoom-transcription',
      'pt': 'https://mictoo.com/pt/zoom-transcription',
      'pl': 'https://mictoo.com/pl/zoom-transcription',
      'ja': 'https://mictoo.com/ja/zoom-transcription',
      'ko': 'https://mictoo.com/ko/zoom-transcription',
      'x-default': 'https://mictoo.com/zoom-transcription',
    },
  },
  openGraph: {
    title: 'Zoom Recording Transcription | Mictoo',
    description: 'Upload a Zoom cloud or local MP4/M4A and get a transcript, summary, and exports.',
    url: 'https://mictoo.com/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoom Transcription: Free',
    description: 'Upload a Zoom recording and get a timestamped transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Zoom · Cloud / Local / M4A audio · Free"
      h1First="Zoom Transcription"
      h1Second="Cloud and local recordings to text"
      subtitle="Upload a Zoom Cloud Recording MP4, an audio-only M4A, or a local recording. Get a timestamped transcript, AI summary, translation, and export files in one workflow."
      currentHref="/zoom-transcription"

      platforms={[
        { name: 'Cloud MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4A audio',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Local MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/teams-meeting-transcription' },
        { name: 'Meeting hub',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/meeting-transcription' },
      ]}

      howItWorksTitle="How Zoom transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Download from Zoom',
          desc: 'Cloud: zoom.us → Recordings → download MP4 or the "Audio Only (M4A)" version. Local: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'Audio-only M4A is usually much smaller than MP4 and avoids uploading the video track. Free up to 25 MB anonymously, 60 MB signed in.',
        },
        {
          icon: 'editPen',
          title: 'Review and export',
          desc: 'Processing time depends on duration, file size, and demand. When complete, review the transcript and export a summary, captions, or DOCX recap.',
        },
      ]}

      exampleTitle="Example Zoom meeting transcript"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'Alright, sorry for the delay everyone. Zoom refused to let me in until I updated. Let us get started.' },
        { t: '0:10',  line: 'Today we are reviewing the prototype feedback from last week and deciding what to prioritise for the sprint.' },
        { t: '0:22',  line: 'Overall the feedback was positive. Twelve out of fifteen participants understood the flow without help.' },
        { t: '0:33',  line: 'The three who got stuck all hit the same issue on the settings screen. We should fix that first.' },
        { t: '0:45',  line: 'Agreed. I already have a design revision in the works. Should be ready to review by Thursday.' },
        { t: '0:56',  line: 'Second, everyone loved the new empty state but nobody found the import button. It is buried too deep.' },
        { t: '1:08',  line: 'Let us move import to the primary action on the empty state. That is a one-line change for engineering.' },
      ]}
      summaryPoints={[
        'Prototype feedback: 12/15 completed flow unaided.',
        'Blocker: settings screen confused 3/15 participants.',
        'Empty state well received but Import button hard to find.',
        'Design revision by Thursday.',
      ]}
      actionItems={[
        'Fix settings screen (design revision Thursday)',
        'Promote Import to primary action on empty state',
        'Share revised prototype in Friday standup',
      ]}

      whyTitle="Why use Mictoo with a Zoom recording"
      whyCards={[
        {
          icon: 'target',
          title: 'A second transcript to review',
          desc: 'Use Mictoo when you want an additional transcript and timestamped text for checking names, terminology, and key quotes.',
        },
        {
          icon: 'lock',
          title: 'Processes downloaded files',
          desc: 'Mictoo does not connect to your Zoom account. Upload a cloud or local recording you already have permission to use.',
        },
        {
          icon: 'gear',
          title: 'Works with Local Recording too',
          desc: 'Zoom built-in transcript is Cloud-only. Local Recording gets nothing. Mictoo works with both.',
        },
        {
          icon: 'sparkles',
          title: 'Summary + Translate included',
          desc: 'AI summary appears alongside the transcript automatically. Translate to 50+ languages in one click.',
        },
      ]}

      scenariosTitle="Common Zoom scenarios"
      scenarios={[
        { icon: 'chat',      title: 'Client call' },
        { icon: 'users',     title: 'Team standup' },
        { icon: 'briefcase', title: 'Sales demo' },
        { icon: 'search',    title: 'User interview' },
        { icon: 'book',      title: 'Webinar' },
        { icon: 'globe',     title: 'Multilingual call' },
      ]}

      tipsTitle="Tips for Zoom recordings"
      tips={[
        'Download the M4A "Audio Only" version. Same accuracy, 10x smaller.',
        'Cloud Recording quota is not spent on our transcription (we run externally).',
        'Local Recording works too. Look under ~/Documents/Zoom/.',
        'For long calls over 60 MB, sign in for auto-split.',
      ]}

      guidesTitle="Meeting platforms with own guides"
      guides={[
        { href: '/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + free workaround' },
        { href: '/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive + SharePoint paths' },
        { href: '/meeting-transcription',       icon: 'video', title: 'Meeting hub', desc: 'Any platform, one upload' },
        { href: '/webinar-transcription',       icon: 'monitor', title: 'Webinars',  desc: 'Zoom Webinars, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Which Zoom recording types work?',
          a: 'Cloud Recording MP4 (video), Cloud Recording M4A (audio-only), and Local Recording MP4. Also chat.txt export if you want the chat log, though we do not transcribe chat.',
        },
        {
          q: 'Do I need Zoom Pro or higher?',
          a: 'No. Any Zoom recording works, including from free-tier Local Recording. Zoom Cloud Recording itself requires Pro+, but if you already have the file, Mictoo does not care about your Zoom tier.',
        },
        {
          q: 'My Cloud Recording MP4 is over 60 MB. What now?',
          a: 'If your recording includes an Audio Only (M4A) download, use it to avoid uploading the video track. Availability and file size depend on the recording settings and duration.',
        },
        {
          q: 'Should I use Zoom audio transcription or Mictoo?',
          a: 'Zoom audio transcription is convenient when cloud recording and transcription are enabled on your account. Mictoo is useful for local files, additional export formats, translation, or producing another transcript to review. Accuracy varies with the recording.',
        },
        {
          q: 'Does Mictoo identify Zoom speakers?',
          a: 'No. The current transcript is continuous text with per-line timestamps and no automatic "Speaker 1 / Speaker 2" labels.',
        },
        {
          q: 'Where does Local Recording save?',
          a: 'By default, ~/Documents/Zoom/ on Mac and %USERPROFILE%\\Documents\\Zoom\\ on Windows. Each meeting gets its own folder with the MP4 and separate audio.m4a.',
        },
        {
          q: 'Is my Zoom recording stored on your servers?',
          a: 'No. The file streams to the transcription provider, gets processed once, and is dropped from memory. Only the transcript persists if you sign in.',
        },
      ]}

      ctaHeadline="Turn Zoom recordings into clean text"
      ctaSubtitle="Cloud MP4 or M4A, Local Recording, any Zoom tier. Free per file."
      ctaButton="Upload Zoom recording"

      relatedLinks={[
        { href: '/meeting-transcription',       label: 'Meeting Transcription' },
        { href: '/google-meet-transcription',   label: 'Google Meet Transcription' },
        { href: '/teams-meeting-transcription', label: 'Teams Transcription' },
        { href: '/webinar-transcription',       label: 'Webinar Transcription' },
        { href: '/interview-transcription',     label: 'Interview Transcription' },
      ]}
    />
  )
}
