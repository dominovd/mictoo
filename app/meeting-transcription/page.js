import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Meeting Transcription for Any Recorded Platform | Mictoo',
  description:
    'Upload an authorized meeting recording from Zoom, Teams, Meet, Webex, Loom, or Riverside for text, summary, and exports.',
  alternates: {
    canonical: 'https://mictoo.com/meeting-transcription',
    languages: {
      'en': 'https://mictoo.com/meeting-transcription',
      'fr': 'https://mictoo.com/fr/meeting-transcription',
      'de': 'https://mictoo.com/de/meeting-transcription',
      'es': 'https://mictoo.com/es/meeting-transcription',
      'ru': 'https://mictoo.com/ru/meeting-transcription',
      'it': 'https://mictoo.com/it/meeting-transcription',
      'pt': 'https://mictoo.com/pt/meeting-transcription',
      'pl': 'https://mictoo.com/pl/meeting-transcription',
      'ja': 'https://mictoo.com/ja/meeting-transcription',
      'ko': 'https://mictoo.com/ko/meeting-transcription',
      'x-default': 'https://mictoo.com/meeting-transcription',
    },
  },
  openGraph: {
    title: 'Meeting Transcription: Any Platform, Any Recording | Mictoo',
    description: 'Drop any meeting recording, get a transcript. Free.',
    url: 'https://mictoo.com/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Transcription: Any Platform',
    description: 'Drop any meeting recording, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function MeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Any platform · Free · No signup"
      h1First="Meeting Transcription"
      h1Second="One upload page for any platform"
      subtitle="Upload a recording from Zoom, Teams, Google Meet, Webex, Loom or any screen capture. Get a clean transcript with timestamps, AI summary and exports."
      currentHref="/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="How meeting transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Find your meeting recording',
          desc: 'Export or download the recording from any platform.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'Upload your file in MP3, MP4, WAV or other supported formats.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, summary, exports',
          desc: 'Get a timestamped transcript, AI summary and export files.',
        },
      ]}

      exampleTitle="Example transcript & summary"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Thanks everyone for joining. Let us quickly recap last week progress before we jump into today agenda.' },
        { t: '0:12',  line: 'We shipped the onboarding flow and saw a twelve percent increase in activation over the previous baseline.' },
        { t: '0:28',  line: 'Great. Next up, we need to fix the checkout bug on mobile before it hits any more paying customers.' },
        { t: '0:36',  line: 'I will create a ticket and assign it to the team by end of day. Should be resolved within the sprint.' },
        { t: '0:44',  line: 'We should also discuss the pricing page updates. The current version is not converting the way we expected.' },
        { t: '0:55',  line: 'I will share a draft by end of day and we can review together tomorrow before the standup.' },
      ]}
      summaryPoints={[
        'Onboarding flow shipped with 12% increase in activation.',
        'Checkout bug on mobile needs fixing.',
        'Pricing page updates to be discussed.',
        'Draft to be shared by EOD and reviewed tomorrow.',
      ]}
      actionItems={[
        'Create ticket for mobile checkout bug',
        'Share pricing page draft',
        'Review draft tomorrow',
      ]}

      whyTitle="Why a platform-agnostic upload helps"
      whyCards={[
        {
          icon: 'globe',
          title: 'Works across every meeting platform',
          desc: 'Upload from Zoom, Teams, Google Meet, Webex, Loom and more.',
        },
        {
          icon: 'target',
          title: 'One review workflow',
          desc: 'Use the same timestamped layout and export options regardless of which platform created the recording.',
        },
        {
          icon: 'lock',
          title: 'Works from an authorized file',
          desc: 'Mictoo processes a recording you already have permission to use; access and download policies still belong to the source platform.',
        },
        {
          icon: 'sparkles',
          title: 'Summary and translation included',
          desc: 'Get AI summaries and translate transcripts into 50+ languages.',
        },
      ]}

      scenariosTitle="Common meeting transcription scenarios"
      scenarios={[
        { icon: 'chat',      title: 'Client recap emails' },
        { icon: 'search',    title: 'User research notes' },
        { icon: 'users',     title: 'Recruiter screens' },
        { icon: 'briefcase', title: 'Team meeting archives' },
        { icon: 'headset',   title: 'Support escalations' },
        { icon: 'globe',     title: 'Multilingual meetings' },
      ]}

      practicalTitle="Where to find a meeting recording"
      practicalIntro="The exact location depends on the platform and your meeting role. Download only recordings you are authorized to access, and follow participant-consent and organization policies before uploading."
      practicalItems={[
        {
          title: 'Zoom cloud or local recording',
          desc: 'Cloud recordings are available from the Zoom web portal on eligible paid accounts. Computer recordings are normally saved to the local Zoom folder.',
        },
        {
          title: 'Google Meet recording',
          desc: 'Eligible Meet recordings are saved to the organizer\'s My Drive › Meet Recordings folder. Availability depends on edition and admin settings.',
        },
        {
          title: 'Microsoft Teams recording',
          desc: 'Find the recording from the meeting chat, OneDrive, or the channel SharePoint site. Download permissions can be restricted by policy.',
        },
        {
          title: 'Webex, Loom, and Riverside',
          desc: 'Use the platform export or download control to obtain an audio or video file, then confirm that the file plays correctly before upload.',
        },
      ]}

      tipsTitle="Tips for better meeting transcripts"
      tips={[
        'Prefer audio-only exports when you want a smaller upload.',
        'Record in a quiet space and reduce background noise.',
        'Use Auto-detect for multilingual or mixed-language calls.',
        'Review names and terminology after transcription.',
      ]}

      guidesTitle="Pick the right platform guide"
      guides={[
        { href: '/zoom-transcription',          icon: 'video', title: 'Zoom Meetings',    desc: 'Step-by-step download guide' },
        { href: '/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Step-by-step download guide' },
        { href: '/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Step-by-step download guide' },
        { href: '/meeting-transcription#tool',  icon: 'file',  title: 'Other platforms',  desc: 'See all guides and tips' },
      ]}

      faq={[
        {
          q: 'Can I transcribe a Zoom, Meet or Teams recording?',
          a: 'Yes. Any audio or video file from any meeting platform works. Just download the recording and drop it here. We accept MP3, MP4, WAV, M4A, WEBM, FLAC and more.',
        },
        {
          q: 'Is meeting transcription free?',
          a: 'Yes. Files up to 25 MB anonymously, 60 MB when signed in. Longer meetings can be split automatically for signed-in users. No credit card required.',
        },
        {
          q: 'Does Mictoo identify different speakers?',
          a: 'No. The current transcript is continuous text with per-line timestamps and no automatic "Speaker 1 / Speaker 2" labels.',
        },
        {
          q: 'Are meeting recordings stored?',
          a: 'No. The file streams to the transcription provider, gets processed once, and is dropped from memory. The transcript is only saved if you sign in and add it to your history.',
        },
        {
          q: 'Which export formats are available?',
          a: 'TXT (plain text), SRT and VTT (captions with timestamps aligned to the recording), and DOCX (Word document). Signed-in users also get PDF and JSON.',
        },
        {
          q: 'Can I translate the transcript?',
          a: 'Yes. After transcription, pick a target language and click Translate. Useful for sending recap emails to participants in their preferred language, or for archiving cross-language meetings in a single working language.',
        },
      ]}

      ctaHeadline="Turn your next meeting into clear notes"
      ctaSubtitle="Drop a recording from any platform and get a transcript, summary and exports in seconds."
      ctaButton="Upload a meeting recording"

      relatedLinks={[
        { href: '/interview-transcription',  label: 'Interview Transcription' },
        { href: '/podcast-transcription',    label: 'Podcast Transcription' },
        { href: '/lecture-transcription',    label: 'Lecture Transcription' },
        { href: '/business-transcription',   label: 'Business Transcription' },
        { href: '/voice-memo-to-text',       label: 'Voice Memo to Text' },
      ]}
    />
  )
}
