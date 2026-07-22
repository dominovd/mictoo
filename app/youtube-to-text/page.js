import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'YouTube to Text: Transcript, Summary, and SRT | Mictoo',
  description:
    'Paste a YouTube URL to use available captions, or upload audio for a new transcript with timestamps, summary, and SRT export.',
  alternates: {
    canonical: 'https://mictoo.com/youtube-to-text',
    languages: {
      'en': 'https://mictoo.com/youtube-to-text',
      'fr': 'https://mictoo.com/fr/youtube-to-text',
      'de': 'https://mictoo.com/de/youtube-to-text',
      'es': 'https://mictoo.com/es/youtube-to-text',
      'ru': 'https://mictoo.com/ru/youtube-to-text',
      'it': 'https://mictoo.com/it/youtube-to-text',
      'pt': 'https://mictoo.com/pt/youtube-to-text',
      'pl': 'https://mictoo.com/pl/youtube-to-text',
      'ja': 'https://mictoo.com/ja/youtube-to-text',
      'ko': 'https://mictoo.com/ko/youtube-to-text',
      'x-default': 'https://mictoo.com/youtube-to-text',
    },
  },
  openGraph: {
    title: 'YouTube to Text: Free YouTube Video Transcription | Mictoo',
    description: 'Paste a YouTube URL, get a clean transcript with timestamps, summary, and SRT subtitles.',
    url: 'https://mictoo.com/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube to Text: Free YouTube Transcription',
    description: 'Paste a YouTube URL or upload audio, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function YouTubeToTextPage() {
  return (
    <UseCaseLayout
      badge="YouTube URL or upload · Free · No signup"
      h1First="YouTube to Text"
      h1Second="Paste a URL, get a clean transcript"
      subtitle="Paste a YouTube link to use captions that are already available, or upload audio to create a new Whisper transcript. Review the text, generate a summary, and export SRT subtitles."
      currentHref="/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/transcribe-video-to-text' },
      ]}

      howItWorksTitle="How YouTube transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Paste a URL or upload audio',
          desc: 'Fast path: paste the YouTube link, we fetch existing captions. Whisper path: upload the audio for fresh transcription.',
        },
        {
          icon: 'upload',
          title: 'Captions or fresh transcription',
          desc: 'The URL path returns available captions. The upload path runs Whisper large-v3; processing time depends on the media length and size.',
        },
        {
          icon: 'editPen',
          title: 'Summary, SRT, translation',
          desc: 'AI summary alongside the transcript. Download SRT for the video, translate to 50+ languages, export as DOCX or PDF.',
        },
      ]}

      exampleTitle="Example YouTube transcript"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Welcome back to the channel. Today we are looking at the three biggest changes to product analytics in 2026.' },
        { t: '0:12',  line: 'Change one, session replay is basically table stakes now. Every serious tool ships it in the base tier.' },
        { t: '0:24',  line: 'Change two, the shift from custom SQL dashboards to natural-language querying is happening fast.' },
        { t: '0:37',  line: 'Change three, warehouse-native tools are eating the old event-based analytics stack.' },
        { t: '0:50',  line: 'Let me walk through what each change actually means for the tooling you should evaluate this year.' },
        { t: '1:02',  line: 'Session replay first. If your current tool charges extra for it, that is a signal to shop around.' },
        { t: '1:14',  line: 'Modern tools bundle replay with events, funnels, and cohorts as one product, not a paid add-on.' },
      ]}
      summaryPoints={[
        '3 biggest changes to product analytics in 2026.',
        'Session replay is now table stakes across serious tools.',
        'Shift from SQL dashboards to natural-language querying.',
        'Warehouse-native tools replacing event-based stacks.',
      ]}
      actionItems={[
        'Evaluate current tool for bundled replay',
        'Try 1 warehouse-native analytics tool this quarter',
        'Draft blog recap of the 3 changes',
      ]}

      whyTitle="Why Mictoo for YouTube transcription"
      whyCards={[
        {
          icon: 'target',
          title: 'Choose the right transcript path',
          desc: 'Use existing captions for speed, or upload audio when you want a fresh transcript to review for names, punctuation, and specialist terms.',
        },
        {
          icon: 'clip',
          title: 'SRT for the video description',
          desc: 'Download SRT and re-upload to YouTube Studio for edited captions, or use elsewhere in your workflow.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for episode notes',
          desc: 'Solid first draft for the video description, blog recap, and chapter titles. Turn a 60-min podcast into 200 words.',
        },
        {
          icon: 'globe',
          title: 'Translate captions to 50+ languages',
          desc: 'International audience? Translate the transcript then re-upload as translated SRT to your video.',
        },
      ]}

      scenariosTitle="Common YouTube scenarios"
      scenarios={[
        { icon: 'search',    title: 'Research a video' },
        { icon: 'editPen',   title: 'Blog recap' },
        { icon: 'clip',      title: 'SRT captions' },
        { icon: 'chat',      title: 'Quote pull' },
        { icon: 'globe',     title: 'Translate captions' },
        { icon: 'headset',   title: 'Podcast on YT' },
      ]}

      tipsTitle="Tips for YouTube transcripts"
      tips={[
        'Fastest path is the URL when the video already has captions.',
        'For technical or non-English videos, prefer the audio-upload path.',
        'Very long streams: download the audio and split before upload.',
        'For your own videos, upload the source audio for best accuracy.',
      ]}

      guidesTitle="Related tools"
      guides={[
        { href: '/transcribe-video-to-text',      icon: 'video', title: 'Video to Text',       desc: 'Non-YouTube MP4, MOV, WebM' },
        { href: '/transcribe-audio-to-text',      icon: 'file',  title: 'Audio to Text',       desc: 'Any audio format' },
        { href: '/free-srt-generator',            icon: 'file',  title: 'SRT Generator',       desc: 'Subtitle-focused export' },
        { href: '/how-to-download-youtube-video', icon: 'video', title: 'Download from YT',    desc: 'Guide: getting the audio' },
      ]}

      faq={[
        {
          q: 'Can I just paste a YouTube URL?',
          a: 'Yes. When the video has captions (creator-uploaded or auto-generated), we fetch them in seconds. If there are no captions, upload the audio file instead for full Whisper transcription.',
        },
        {
          q: 'How does the upload path differ from YouTube captions?',
          a: 'The URL path returns captions already available for the video. The upload path creates a separate Whisper transcript from the audio. Either version can contain errors, so review names, numbers, and timing before publishing.',
        },
        {
          q: 'How do I get the audio out of a YouTube video?',
          a: 'Use a browser tool or desktop extractor of your choice, then upload the MP3 or M4A. We do not host a download tool for copyright reasons, but see our guide "How to download a YouTube video" for common options.',
        },
        {
          q: 'Does Mictoo transcribe non-English YouTube videos?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short clips or unusual accents, set the language explicitly in the dropdown.',
        },
        {
          q: 'Can I get an AI summary of the video?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Solid first draft for a video description, blog recap, or episode notes.',
        },
        {
          q: 'Can I download SRT to add captions back to my video?',
          a: 'Yes. Download SRT or VTT after transcription. Both formats work with YouTube Studio, Premiere, DaVinci, Final Cut, CapCut, and most modern players.',
        },
        {
          q: 'Can I translate a YouTube transcript?',
          a: 'Yes. Pick a target language and click Translate. Useful for international audiences or non-English replay pages.',
        },
        {
          q: 'Is my YouTube data kept on your servers?',
          a: 'No. Fetched captions and uploaded audio are processed once and dropped. Only the transcript persists if you sign in and save it to history.',
        },
      ]}

      ctaHeadline="Turn any YouTube video into text"
      ctaSubtitle="Paste a URL for the fast path, upload audio for the full-Whisper path. Free per video."
      ctaButton="Paste a YouTube URL or upload"

      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text' },
        { href: '/podcast-transcription',    label: 'Podcast Transcription' },
        { href: '/lecture-transcription',    label: 'Lecture Transcription' },
        { href: '/free-srt-generator',       label: 'Free SRT Generator' },
        { href: '/webinar-transcription',    label: 'Webinar Transcription' },
      ]}
    />
  )
}
