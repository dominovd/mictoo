import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Sermon Transcription: Free Transcript Generator for Sermons | Mictoo',
  description:
    'Free sermon transcription. Upload your service recording (MP3, MP4, M4A, WAV) and get a clean AI transcript in seconds. Built for churches, pastors, and study notes.',
  alternates: {
    canonical: 'https://mictoo.com/sermon-transcription',
    languages: {
      'en': 'https://mictoo.com/sermon-transcription',
      'fr': 'https://mictoo.com/fr/sermon-transcription',
      'de': 'https://mictoo.com/de/sermon-transcription',
      'es': 'https://mictoo.com/es/sermon-transcription',
      'ru': 'https://mictoo.com/ru/sermon-transcription',
      'it': 'https://mictoo.com/it/sermon-transcription',
      'pt': 'https://mictoo.com/pt/sermon-transcription',
      'pl': 'https://mictoo.com/pl/sermon-transcription',
      'ja': 'https://mictoo.com/ja/sermon-transcription',
      'ko': 'https://mictoo.com/ko/sermon-transcription',
      'x-default': 'https://mictoo.com/sermon-transcription',
    },
  },
  openGraph: {
    title: 'Sermon Transcription: Free | Mictoo',
    description: 'Upload your service recording, get a clean transcript.',
    url: 'https://mictoo.com/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sermon Transcription',
    description: 'Free transcripts for churches and study.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function SermonTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Churches · Pastors · Study · Free"
      h1First="Sermon Transcription"
      h1Second="Free transcript for services and study"
      subtitle="Drop a Sunday service recording, weeknight teaching, or Bible study session. Get a clean transcript with timestamps for the church website, study notes, and podcast episode notes."
      currentHref="/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="How sermon transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Export the service recording',
          desc: 'Sunday livestream MP4, sanctuary sound-board WAV, or the podcast MP3 you already publish.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'MP3, MP4, WAV, M4A all work. Long services benefit from signed-in auto-split.',
        },
        {
          icon: 'editPen',
          title: 'Transcript for the website',
          desc: 'Clean text ready for the church website, study notes, podcast description, and searchable archive.',
        },
      ]}

      exampleTitle="Example sermon transcript"
      exampleFileName="sunday-service-jan-14.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Good morning church. Please turn with me to the Gospel of Matthew, chapter five, verse three.' },
        { t: '0:12',  line: 'This morning we begin a new series on what Jesus called the blessed life, the Beatitudes.' },
        { t: '0:24',  line: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven. That is our text this week.' },
        { t: '0:38',  line: 'The word Jesus uses here for blessed does not mean happy in a shallow, circumstantial sense.' },
        { t: '0:51',  line: 'It means deeply, fundamentally content because of your relationship with God, regardless of circumstance.' },
        { t: '1:04',  line: 'And to be poor in spirit is not about material poverty. It is a posture of dependence on God.' },
        { t: '1:18',  line: 'It is knowing that whatever you build, whatever you accomplish, ultimately rests on grace, not on merit.' },
      ]}
      summaryPoints={[
        'New series on the Beatitudes (Matthew 5).',
        'Focus: "Blessed are the poor in spirit."',
        'Blessed = deep contentment through relationship with God.',
        'Poor in spirit = posture of dependence, not material poverty.',
      ]}
      actionItems={[
        'Post transcript to church website',
        'Cut 60-second clip for social',
        'Include in weekly study guide',
      ]}

      whyTitle="Why Mictoo for sermon transcription"
      whyCards={[
        {
          icon: 'search',
          title: 'Searchable sermon archive',
          desc: 'Publish transcripts on the church site. Congregants find teaching by topic or verse, months or years later.',
        },
        {
          icon: 'sparkles',
          title: 'Study notes and small-group guides',
          desc: 'AI summary is the starting point for the weekly study guide or small-group discussion questions.',
        },
        {
          icon: 'clip',
          title: 'Captions for the livestream replay',
          desc: 'SRT for the YouTube or Facebook video version. Accessibility for the hard-of-hearing members.',
        },
        {
          icon: 'globe',
          title: 'Translate for multilingual congregations',
          desc: 'Sermon in English but part of the congregation prefers Spanish or Korean. One-click translation.',
        },
      ]}

      scenariosTitle="Common sermon scenarios"
      scenarios={[
        { icon: 'church',    title: 'Sunday service' },
        { icon: 'book',      title: 'Bible study' },
        { icon: 'chat',      title: 'Small group' },
        { icon: 'sparkles',  title: 'Devotional' },
        { icon: 'globe',     title: 'Missions' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Tips for sermon recordings"
      tips={[
        'Sound-board WAV or M4A gives cleaner input than room mic.',
        'For long services over 60 MB, sign in for auto-split.',
        'For congregations with heavy scriptural terms, review key words.',
        'Include the sermon title in the file name for archive ordering.',
      ]}

      guidesTitle="Related tools"
      guides={[
        { href: '/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3 format',        desc: 'Podcast-friendly export' },
        { href: '/wav-to-text',               icon: 'file',  title: 'WAV format',        desc: 'Sound-board recording' },
        { href: '/lecture-transcription',     icon: 'book',  title: 'Lecture / study',   desc: 'Teaching-heavy content' },
        { href: '/free-srt-generator',        icon: 'file',  title: 'SRT captions',      desc: 'Livestream replay' },
      ]}

      faq={[
        {
          q: 'Can I transcribe a Sunday livestream recording?',
          a: 'Yes. Download the MP4 from YouTube Live, Facebook Live, or your church-stream provider and drop it here. Video is auto-demuxed server-side.',
        },
        {
          q: 'Does Mictoo handle scriptural references and theological terms accurately?',
          a: 'Whisper large-v3 handles common English scripture and theological vocabulary well. For unusual proper nouns (older transliterations, specific translation terms), review after transcription.',
        },
        {
          q: 'Is Mictoo free for churches?',
          a: 'Yes. Free per file up to the size cap. No church-specific tier or license.',
        },
        {
          q: 'My service recording is over 60 MB. What now?',
          a: 'Sign in for auto-split (up to about 3 hours). Or downsample: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. Same accuracy, 3-5x smaller.',
        },
        {
          q: 'Can I get captions for the livestream replay?',
          a: 'Yes. Download SRT or VTT after transcription. Timestamps align to the original recording for YouTube, Facebook, or your video hosting.',
        },
        {
          q: 'Can I translate the sermon for the missions team?',
          a: 'Yes. Pick a target language and click Translate. Useful for multilingual congregations, missions, and diaspora ministry.',
        },
        {
          q: 'Are recordings kept on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped. Only the transcript persists on signed-in accounts.',
        },
      ]}

      ctaHeadline="Turn every sermon into a searchable resource"
      ctaSubtitle="Transcript for the website, captions for the replay, notes for study groups."
      ctaButton="Upload a sermon"

      relatedLinks={[
        { href: '/lecture-transcription',     label: 'Lecture Transcription' },
        { href: '/podcast-transcription',     label: 'Podcast Transcription' },
        { href: '/webinar-transcription',     label: 'Webinar Transcription' },
        { href: '/free-srt-generator',        label: 'Free SRT Generator' },
        { href: '/interview-transcription',   label: 'Interview Transcription' },
      ]}
    />
  )
}
