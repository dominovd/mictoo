import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Podcast Transcription: Free AI Podcast Transcript Generator | Mictoo',
  description:
    'Free podcast transcription with AI. Upload your episode (MP3, MP4, M4A, WAV) and get a clean, timestamped transcript in seconds. No signup, no per-minute fee.',
  alternates: {
    canonical: 'https://mictoo.com/podcast-transcription',
    languages: {
      'en': 'https://mictoo.com/podcast-transcription',
      'fr': 'https://mictoo.com/fr/podcast-transcription',
      'de': 'https://mictoo.com/de/podcast-transcription',
      'es': 'https://mictoo.com/es/podcast-transcription',
      'ru': 'https://mictoo.com/ru/podcast-transcription',
      'it': 'https://mictoo.com/it/podcast-transcription',
      'pt': 'https://mictoo.com/pt/podcast-transcription',
      'pl': 'https://mictoo.com/pl/podcast-transcription',
      'ja': 'https://mictoo.com/ja/podcast-transcription',
      'ko': 'https://mictoo.com/ko/podcast-transcription',
      'x-default': 'https://mictoo.com/podcast-transcription',
    },
  },
  openGraph: {
    title: 'Podcast Transcription: Free AI Podcast Transcript Generator | Mictoo',
    description: 'Upload your episode, get a clean timestamped transcript in seconds.',
    url: 'https://mictoo.com/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast Transcription: Free Generator',
    description: 'Upload your episode, get a clean transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Podcasters · Hosts · Free"
      h1First="Podcast Transcription"
      h1Second="Free AI transcript for every episode"
      subtitle="Drop your episode from any recording tool. Get a clean, timestamped transcript with AI summary ready for show notes, SEO recap, and YouTube captions."
      currentHref="/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="How podcast transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Export the episode',
          desc: 'Any format your DAW or recording tool produces. MP3 is most common, but M4A, WAV, and FLAC all work.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'Upload files up to 60 MB when signed in. Longer episodes are auto-split into segments and stitched back together.',
        },
        {
          icon: 'editPen',
          title: 'Show notes, captions, exports',
          desc: 'Transcript, AI summary, SRT for the YouTube video version, DOCX for the blog. Ready in under a minute.',
        },
      ]}

      exampleTitle="Example podcast transcript"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Welcome back to the show. This is episode forty-two, and today we are talking about independent podcasting in 2026.' },
        { t: '0:10',  line: 'My guest has been running a weekly show for eight years without missing an episode. Thanks for being here.' },
        { t: '0:20',  line: 'Thanks for having me. It is wild to think we started this back when everyone said audio was already saturated.' },
        { t: '0:30',  line: 'Let us start there. What was different about launching a podcast in 2018 versus now.' },
        { t: '0:38',  line: 'Distribution was harder to break into, but audiences were more patient. Attention was cheaper, essentially.' },
        { t: '0:48',  line: 'Today the tools are amazing. Transcription in seconds, AI show notes, but attention itself is much scarcer.' },
        { t: '0:58',  line: 'That is a good segue. What is your show-notes workflow now that transcripts are basically free.' },
      ]}
      summaryPoints={[
        'Episode 42, focus on independent podcasting in 2026.',
        'Guest: 8-year weekly show host.',
        'Discussion: distribution changes 2018 vs 2026.',
        'Attention economy the new bottleneck.',
      ]}
      actionItems={[
        'Draft show notes from summary',
        'Extract 3 pull quotes for social',
        'Publish SRT to YouTube video version',
      ]}

      whyTitle="Why Mictoo for podcast transcription"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'AI summary for show notes',
          desc: 'Solid first draft for episode descriptions, blog recaps, and SEO-friendly show notes.',
        },
        {
          icon: 'clip',
          title: 'SRT for the YouTube version',
          desc: 'Timestamps align to the original audio. Drop SRT into YouTube Studio and captions are done.',
        },
        {
          icon: 'globe',
          title: 'Translate for international audiences',
          desc: 'One-click translation to 50+ languages. Solo hosts syndicate globally without a translation agency.',
        },
        {
          icon: 'gear',
          title: 'Any bitrate, any recorder',
          desc: '32 kbps voice notes to 320 kbps studio bounces transcribe identically for clean speech.',
        },
      ]}

      scenariosTitle="Podcast transcription scenarios"
      scenarios={[
        { icon: 'chat',      title: 'Show notes' },
        { icon: 'clip',      title: 'YouTube captions' },
        { icon: 'search',    title: 'SEO recap' },
        { icon: 'sparkles',  title: 'Pull-quote clips' },
        { icon: 'globe',     title: 'Translation' },
        { icon: 'book',      title: 'Back-catalog' },
      ]}

      tipsTitle="Tips for cleaner podcast transcripts"
      tips={[
        'Bounce a voice-only stem when your DAW allows it.',
        'A voice-optimised 64 kbps mono MP3 transcribes just as well.',
        'For interview episodes, remove music beds before transcription.',
        'Review host and guest names once, they appear consistently after.',
      ]}

      guidesTitle="Related transcription guides"
      guides={[
        { href: '/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3 transcription',   desc: 'Podcast format guide' },
        { href: '/m4a-to-text',               icon: 'file',  title: 'M4A transcription',   desc: 'GarageBand and Apple exports' },
        { href: '/wav-to-text',               icon: 'file',  title: 'WAV transcription',   desc: 'Studio bounces' },
        { href: '/timestamped-transcription', icon: 'file',  title: 'Timestamps deep dive', desc: 'SRT / VTT export mechanics' },
      ]}

      faq={[
        {
          q: 'What podcast platforms does Mictoo work with?',
          a: 'All of them. We accept any audio or video file regardless of host. Common: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Free per file up to 60 MB signed in.',
        },
        {
          q: 'Can I get the transcript as show notes automatically?',
          a: 'The AI summary appears alongside the transcript automatically. Use it as the first draft of your show notes then trim to fit your voice.',
        },
        {
          q: 'My episode is over 60 MB. What now?',
          a: 'Sign in to auto-split longer files, or downsample first with ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. A 60-minute podcast becomes ~28 MB with no accuracy loss.',
        },
        {
          q: 'Can I download SRT for the YouTube video version?',
          a: 'Yes. SRT and VTT include timestamps aligned to the original audio. Drop into YouTube Studio directly.',
        },
        {
          q: 'Does Mictoo transcribe non-English podcasts?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short episodes or unusual accents, pick the language explicitly.',
        },
        {
          q: 'Are episodes stored on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. Transcripts are only stored if you sign in.',
        },
        {
          q: 'Can I identify who is speaking (host vs guest)?',
          a: 'Not yet. The transcript is continuous text with timestamps but no speaker labels. Diarisation is on the Pro tier roadmap.',
        },
      ]}

      ctaHeadline="Turn every episode into publishable text"
      ctaSubtitle="Show notes, YouTube captions, SEO recap, translation. All from a single upload."
      ctaButton="Upload a podcast episode"

      relatedLinks={[
        { href: '/interview-transcription',   label: 'Interview Transcription' },
        { href: '/webinar-transcription',     label: 'Webinar Transcription' },
        { href: '/transcribe-mp3-to-text',    label: 'MP3 to Text' },
        { href: '/free-srt-generator',        label: 'Free SRT Generator' },
        { href: '/meeting-transcription',     label: 'Meeting Transcription' },
      ]}
    />
  )
}
