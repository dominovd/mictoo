import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Webinar Transcription with Summary and Captions | Mictoo',
  description:
    'Upload a webinar recording and get timestamped text, an AI summary, and SRT/VTT captions for the replay.',
  alternates: {
    canonical: 'https://mictoo.com/webinar-transcription',
    languages: {
      'en': 'https://mictoo.com/webinar-transcription',
      'fr': 'https://mictoo.com/fr/webinar-transcription',
      'de': 'https://mictoo.com/de/webinar-transcription',
      'es': 'https://mictoo.com/es/webinar-transcription',
      'ru': 'https://mictoo.com/ru/webinar-transcription',
      'it': 'https://mictoo.com/it/webinar-transcription',
      'pt': 'https://mictoo.com/pt/webinar-transcription',
      'pl': 'https://mictoo.com/pl/webinar-transcription',
      'ja': 'https://mictoo.com/ja/webinar-transcription',
      'ko': 'https://mictoo.com/ko/webinar-transcription',
      'x-default': 'https://mictoo.com/webinar-transcription',
    },
  },
  openGraph: {
    title: 'Webinar Transcription: Free | Mictoo',
    description: 'Upload your webinar recording, get a clean transcript.',
    url: 'https://mictoo.com/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar Transcription',
    description: 'Free transcript for any webinar platform.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Webinars · Long-form · Free"
      h1First="Webinar Transcription"
      h1Second="Free transcript for any webinar recording"
      subtitle="Upload from Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar, or Restream. Get a full transcript, AI summary, and captions ready for the on-demand replay page."
      currentHref="/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="How webinar transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Export the webinar recording',
          desc: 'Most platforms provide an MP4 download after the event. Some also provide audio-only M4A.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'Long webinars (60+ minutes) benefit from signed-in auto-split. Free up to 25 MB anonymously, 60 MB signed in.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, summary, captions',
          desc: 'Timestamped transcript for the replay page, AI summary as the blog recap, SRT for captions on the on-demand video.',
        },
      ]}

      exampleTitle="Example webinar transcript"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Welcome everyone, and thanks for joining. My name is Sam and I lead product marketing at the company.' },
        { t: '0:12',  line: 'Today we are officially launching version five of the platform, and I want to walk you through what is new.' },
        { t: '0:25',  line: 'Three headline changes: rebuilt reporting, native integrations with the top ten CRMs, and a new pricing model.' },
        { t: '0:40',  line: 'Let me start with reporting because that is the change most of you have been asking about for two years.' },
        { t: '0:52',  line: 'The old reports were slow, they broke on large datasets, and they were hard to customise. All three are fixed.' },
        { t: '1:07',  line: 'Here is a live demo of the new report builder. As I click through, keep an eye on how fast the previews update.' },
        { t: '1:22',  line: 'Every field is drag-and-drop, filters are stackable, and you can save any report as a shared template.' },
      ]}
      summaryPoints={[
        'Version 5 launch with 3 headline changes.',
        'Rebuilt reporting (fixes speed, dataset size, customisation).',
        'Native integrations with top 10 CRMs.',
        'New pricing model.',
      ]}
      actionItems={[
        'Draft blog recap from transcript',
        'Cut demo clip for social',
        'Publish captioned replay to on-demand',
      ]}

      whyTitle="Why Mictoo for webinar transcription"
      whyCards={[
        {
          icon: 'clip',
          title: 'SRT captions for the replay',
          desc: 'Timestamps align to the original video. Drop SRT into your on-demand replay player or YouTube upload.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for the blog recap',
          desc: 'Turns a 60-minute webinar into a 200-word summary. Solid first draft for the follow-up email or blog post.',
        },
        {
          icon: 'search',
          title: 'Searchable transcript on the landing page',
          desc: 'Publish the transcript on the on-demand landing page. Attendees skim, SEO ranks, no one has to watch 60 minutes.',
        },
        {
          icon: 'globe',
          title: 'Translate for international attendees',
          desc: 'One-click translation to 50+ languages for follow-up emails and non-English replay pages.',
        },
      ]}

      scenariosTitle="Common webinar scenarios"
      scenarios={[
        { icon: 'broadcast', title: 'Product launch' },
        { icon: 'book',      title: 'Training / academy' },
        { icon: 'briefcase', title: 'Sales enablement' },
        { icon: 'target',    title: 'Customer education' },
        { icon: 'users',     title: 'Analyst briefing' },
        { icon: 'globe',     title: 'Multilingual event' },
      ]}

      tipsTitle="Tips for webinar recordings"
      tips={[
        'Prefer audio-only export when your platform offers it.',
        'For 60+ minute webinars, sign in for auto-split up to 3 hours.',
        'Include host name in the file so the transcript header keeps context.',
        'Pull key quotes from the transcript for social clips.',
      ]}

      guidesTitle="Related tools"
      guides={[
        { href: '/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Cloud Recording MP4 / M4A' },
        { href: '/free-srt-generator',        icon: 'file',  title: 'SRT Generator',     desc: 'On-demand video captions' },
        { href: '/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Repurpose webinar audio' },
        { href: '/timestamped-transcription', icon: 'file',  title: 'Timestamped',       desc: 'Reader-friendly export' },
      ]}

      faq={[
        {
          q: 'What webinar platforms does Mictoo work with?',
          a: 'All of them. We accept any audio or video file regardless of platform. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio, and more.',
        },
        {
          q: 'My webinar recording is over 60 MB. What now?',
          a: 'Sign in for auto-split (up to about 3 hours). Or export audio-only from the platform, or extract audio: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Can I publish the transcript on the on-demand replay page?',
          a: 'Yes. Copy the transcript into your on-demand landing page HTML. Adds searchable content, improves SEO, gives attendees who cannot watch a way to skim.',
        },
        {
          q: 'Can I get captions for the recorded webinar video?',
          a: 'Yes. Download SRT or VTT after transcription. Both work with YouTube, Vimeo, Wistia, Descript, and every modern video player.',
        },
        {
          q: 'Does Mictoo identify presenters vs Q&A speakers?',
          a: 'No. The current transcript is continuous text with per-line timestamps and no automatic speaker labels.',
        },
        {
          q: 'Can I translate the webinar transcript?',
          a: 'Yes. Pick a target language and click Translate. Useful for international attendees or non-English replay pages.',
        },
        {
          q: 'Are webinar recordings kept on your servers?',
          a: 'No. The file streams to the transcription provider, gets processed once, and is dropped. Only the transcript persists on signed-in accounts.',
        },
      ]}

      ctaHeadline="Turn your webinar into a replay-ready asset"
      ctaSubtitle="Full transcript, SRT captions, AI summary, and searchable landing-page copy."
      ctaButton="Upload a webinar recording"

      relatedLinks={[
        { href: '/meeting-transcription',   label: 'Meeting Transcription' },
        { href: '/zoom-transcription',      label: 'Zoom Transcription' },
        { href: '/podcast-transcription',   label: 'Podcast Transcription' },
        { href: '/lecture-transcription',   label: 'Lecture Transcription' },
        { href: '/free-srt-generator',      label: 'Free SRT Generator' },
      ]}
    />
  )
}
