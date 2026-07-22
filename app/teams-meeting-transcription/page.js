import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Teams Meeting Transcription from MP4 Recordings | Mictoo',
  description:
    'Upload a Microsoft Teams MP4 from OneDrive or SharePoint and get a timestamped transcript, AI summary, and export files.',
  alternates: {
    canonical: 'https://mictoo.com/teams-meeting-transcription',
    languages: {
      'en': 'https://mictoo.com/teams-meeting-transcription',
      'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
      'de': 'https://mictoo.com/de/teams-meeting-transcription',
      'es': 'https://mictoo.com/es/teams-meeting-transcription',
      'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
      'it': 'https://mictoo.com/it/teams-meeting-transcription',
      'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
      'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
      'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
      'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
      'x-default': 'https://mictoo.com/teams-meeting-transcription',
    },
  },
  openGraph: {
    title: 'Teams Meeting Transcription from MP4 | Mictoo',
    description: 'Drop a Teams recording from OneDrive or SharePoint and get text, summary, and exports.',
    url: 'https://mictoo.com/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teams Meeting Transcription',
    description: 'Upload an MP4 from OneDrive or SharePoint and get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Teams · OneDrive / SharePoint · M365 · Free"
      h1First="Teams Meeting Transcription"
      h1Second="From OneDrive or SharePoint MP4 to text"
      subtitle="Download the Teams recording you are allowed to access, then upload the MP4 for a timestamped transcript, AI summary, and exports. Recording availability depends on your Microsoft 365 license and organization policies."
      currentHref="/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/meeting-transcription' },
      ]}

      howItWorksTitle="How Teams meeting transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Find the recording',
          desc: 'Private meeting: OneDrive › My Files › Recordings. Channel meeting: the channel\'s SharePoint site.',
        },
        {
          icon: 'upload',
          title: 'Drop the MP4 here',
          desc: 'Download from OneDrive or SharePoint and drag in. For over 60 MB, extract audio or sign in for auto-split.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, summary, exports',
          desc: 'Timestamped transcript, AI summary, TXT/SRT/VTT/DOCX. A 30-minute Teams call finishes in about a minute.',
        },
      ]}

      exampleTitle="Example Teams meeting transcript"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Right, welcome to the sprint review. We are going to walk through what shipped, what did not, and why.' },
        { t: '0:11',  line: 'Payments team shipped the new refund flow on Tuesday. Adoption is above expectation, about forty percent of eligible tickets.' },
        { t: '0:24',  line: 'Search team ran into a longer indexing pipeline than expected. Ship pushed to next sprint.' },
        { t: '0:35',  line: 'That is fine, but we need to communicate the delay to the customer-success team so they can manage expectations.' },
        { t: '0:47',  line: 'I will send a note in the shared channel today with the revised timeline and the reason.' },
        { t: '0:58',  line: 'Third, the mobile crash rate has ticked up slightly. Still within SLA but worth watching this sprint.' },
        { t: '1:09',  line: 'Devices team is already on it. We should have a root cause by Wednesday and a fix by end of sprint.' },
      ]}
      summaryPoints={[
        'Refund flow shipped Tuesday, 40% adoption.',
        'Search team delayed one sprint (indexing pipeline).',
        'Mobile crash rate ticked up but within SLA.',
        'Root cause for mobile crash by Wednesday.',
      ]}
      actionItems={[
        'Send delay note to customer-success channel',
        'Investigate mobile crash root cause (Wednesday)',
        'Confirm search team new ship date',
      ]}

      whyTitle="Why Mictoo for Teams recordings"
      whyCards={[
        {
          icon: 'folder',
          title: 'Works with downloaded recordings',
          desc: 'Use an MP4 you already have permission to download from OneDrive or the channel SharePoint site.',
        },
        {
          icon: 'target',
          title: 'Review names and terminology',
          desc: 'The timestamped output makes it easier to find and correct product names, acronyms, and specialist terms.',
        },
        {
          icon: 'sparkles',
          title: 'Summary alongside the transcript',
          desc: 'Generate a recap draft and keep it next to the full text for review before sharing.',
        },
        {
          icon: 'globe',
          title: 'Translate cross-language recordings',
          desc: 'Recording in one language, recap needed in another. One click, 50+ languages.',
        },
      ]}

      scenariosTitle="Common Teams scenarios"
      scenarios={[
        { icon: 'chat',      title: 'Sprint review' },
        { icon: 'briefcase', title: 'Board sync' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'OKR review' },
        { icon: 'headset',   title: 'Support escalation' },
        { icon: 'globe',     title: 'International call' },
      ]}

      tipsTitle="Tips for Teams recordings"
      tips={[
        'Private meetings save to OneDrive (organizer\'s account).',
        'Channel meetings save to the channel\'s SharePoint site.',
        'GCC / enterprise tenants may restrict downloads: ask IT.',
        'For long meetings, extract audio with ffmpeg to shrink the file.',
      ]}

      guidesTitle="Other meeting platforms"
      guides={[
        { href: '/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Cloud + Local + M4A' },
        { href: '/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + free' },
        { href: '/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Any platform, one upload' },
        { href: '/business-transcription',    icon: 'briefcase', title: 'Business', desc: 'Authorized internal recordings' },
      ]}

      faq={[
        {
          q: 'Where do Teams recordings save?',
          a: 'Private meetings: to the organizer\'s OneDrive under My Files › Recordings. Channel meetings: to the SharePoint site backing that channel, under the channel folder in Documents.',
        },
        {
          q: 'Do I need Teams Premium to upload a recording?',
          a: 'Mictoo processes the downloaded media file rather than connecting to your Teams account. Your ability to record, transcribe, or download within Teams still depends on your Microsoft 365 license, meeting role, and organization policies.',
        },
        {
          q: 'Should I use the Teams transcript or upload the recording?',
          a: 'Use the Teams transcript when it is available and meets your needs. Uploading the recording is useful when you want Mictoo exports, translation, or an additional transcript to review. Accuracy varies with the recording.',
        },
        {
          q: 'My Teams MP4 is over 60 MB. What now?',
          a: 'Extract audio: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Or sign in for auto-split of files up to about 3 hours.',
        },
        {
          q: 'Can I use Mictoo for GCC / enterprise tenants?',
          a: 'Some enterprise and government tenants restrict downloads or external processing. Follow your organization policy and check with IT or the recording owner before downloading or uploading meeting media.',
        },
        {
          q: 'Does Mictoo identify Teams speakers?',
          a: 'No. The current transcript is continuous text with per-line timestamps and no automatic speaker labels.',
        },
        {
          q: 'Are Teams recordings stored on your servers?',
          a: 'No. The file streams to the transcription provider, gets processed once, and is dropped. Only the transcript persists on signed-in accounts.',
        },
      ]}

      ctaHeadline="Turn Teams meetings into clean text"
      ctaSubtitle="Upload an authorized OneDrive or SharePoint recording and get text, summary, and exports."
      ctaButton="Upload Teams recording"

      relatedLinks={[
        { href: '/meeting-transcription',       label: 'Meeting Transcription' },
        { href: '/zoom-transcription',          label: 'Zoom Transcription' },
        { href: '/google-meet-transcription',   label: 'Google Meet Transcription' },
        { href: '/business-transcription',      label: 'Business Transcription' },
        { href: '/webinar-transcription',       label: 'Webinar Transcription' },
      ]}
    />
  )
}
