import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WebM to Text: Loom, OBS, and Browser Screen-Recording Transcription | Mictoo',
  description:
    'Upload WebM screen recordings from Loom, OBS, or browser MediaRecorder API. We strip the video and transcribe the audio. Editable transcript with timestamps in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'ko': 'https://mictoo.com/ko/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
  openGraph: {
    title: 'WebM to Text: Loom, OBS, Browser Recording Transcription | Mictoo',
    description: 'Upload a WebM screen recording. We extract the audio and return an editable transcript with timestamps.',
    url: 'https://mictoo.com/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM to Text: Loom, OBS, Browser Recording Transcription',
    description: 'Upload a WebM screen recording. We extract the audio and return an editable transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WebmToTextPage() {
  return (
    <FormatPageLayout
      badge="WebM · Loom · OBS · Screen recording"
      h1First="WebM to Text"
      h1Second="For Loom, OBS, and browser screen recordings"
      subtitle="WebM is what Loom exports, what OBS records by default in newer versions, and what browsers write when your app uses the MediaRecorder API. Drop the file, we strip the video and transcribe the audio in seconds."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Hey team, I wanted to walk through the new onboarding flow before we ship it on Thursday.' },
        { t: '0:07',  line: 'This is my screen. What you are seeing is the landing page after a fresh signup.' },
        { t: '0:14',  line: 'First thing to notice, the welcome modal now sits over the dashboard instead of blocking the whole viewport.' },
        { t: '0:23',  line: 'That is intentional. Users kept getting confused when the dashboard was completely hidden by the tour.' },
        { t: '0:32',  line: 'Second, the three tour steps are shorter. We cut the copy roughly in half based on the last round of feedback.' },
        { t: '0:41',  line: 'If I click Skip Tour here, the modal closes and we drop the user right into an empty-state coach mark.' },
        { t: '0:51',  line: 'That coach mark points at the primary upload button, which is the one action every user needs to do first.' },
        { t: '1:00',  line: 'Let me know what you think. Ship-blocking issues by Wednesday morning if possible.' },
      ]}
      whyTitle="Why Mictoo for WebM transcription"
      whyCards={[
        {
          icon: 'video',
          title: 'Video WebM handled server-side',
          desc: 'WebM screen recording with the video track intact. We demux, drop the video, and transcribe the audio. No local extraction needed.',
        },
        {
          icon: 'gear',
          title: 'Opus and Vorbis both supported',
          desc: 'Most WebM files carry Opus audio (newer) or Vorbis (older). We handle both codecs, no manual conversion required.',
        },
        {
          icon: 'clip',
          title: 'SRT captions for the walkthrough',
          desc: 'Download SRT or VTT after transcription. Timestamps align to the original WebM, so captions match the screen recording frame-accurately.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for release notes',
          desc: 'The AI summary is a solid first draft for the ticket description, release note, or async update that a walkthrough was made to replace.',
        },
      ]}
      scenariosTitle="When WebM to text is the right fit"
      scenarios={[
        {
          icon: 'video',
          title: 'Loom walkthrough',
          desc: 'Product demo, code review, or async update recorded in Loom. Transcript feeds the ticket, the notion doc, or the follow-up email.',
        },
        {
          icon: 'briefcase',
          title: 'OBS screen recording',
          desc: 'Tutorial or gameplay capture recorded with OBS Studio. Transcript becomes the YouTube description or blog write-up.',
        },
        {
          icon: 'gear',
          title: 'Browser MediaRecorder output',
          desc: 'App-recorded audio via the MediaRecorder API. Drop the .webm your app produced without any conversion step.',
        },
        {
          icon: 'users',
          title: 'Google Meet or Firefox recording',
          desc: 'Some meeting tools and browsers record to WebM by default. Drop the file for a searchable text version of the conversation.',
        },
        {
          icon: 'editPen',
          title: 'Async design review',
          desc: 'Designer records a WebM walking through a mockup. Reviewers get a written transcript so they can skim before watching.',
        },
        {
          icon: 'book',
          title: 'Lecture screen capture',
          desc: 'Instructor recorded slides with narration and shared as WebM. Students get a searchable transcript alongside the video.',
        },
      ]}
      technicalTitle="What to know about WebM recordings"
      technicalIntro="WebM is a browser-friendly container that may hold video plus audio or audio alone. Browser and recorder settings determine which tracks and codecs are present."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Opus or Vorbis audio',
          desc: 'Most recent WebM speech recordings use Opus; older files may use Vorbis. Both sit inside the WebM container.',
        },
        {
          icon: 'video',
          title: 'Audio-only or with video',
          desc: 'A WebM can contain a screen recording or only a microphone track. Transcription uses the audible speech stream.',
        },
        {
          icon: 'clip',
          title: 'Timeline-based exports',
          desc: 'Transcript timestamps follow the decoded recording timeline for later subtitle or editing work.',
        },
        {
          icon: 'gear',
          title: 'Browser recorder output',
          desc: 'MediaRecorder settings vary by browser. If a capture has no microphone permission, it may contain no speech to transcribe.',
        },
      ]}
      faq={[
        {
          q: 'What kind of WebM files does Mictoo accept?',
          a: 'Any standard WebM: video with Opus or Vorbis audio (Loom, OBS, browser MediaRecorder), or audio-only WebM. We demux the audio track server-side and transcribe with Whisper large-v3.',
        },
        {
          q: 'Do I need to extract the audio myself first?',
          a: 'No. Upload the WebM video as-is. We handle the demux server-side and only transcribe the audio track. If you already extracted the audio (Opus or Vorbis), that works too.',
        },
        {
          q: 'My Loom is over 60 MB. What now?',
          a: 'A 20-30 minute Loom often exceeds 60 MB. If you are signed in, we auto-split long files up to about 3 hours. Otherwise, use Loom download settings to reduce quality, or export the audio and upload that.',
        },
        {
          q: 'Do the timestamps match my screen recording?',
          a: 'Yes. Timestamps in the transcript and in SRT/VTT exports align to the original WebM timeline, so captions match the screen recording frame-accurately when dropped back onto the video.',
        },
        {
          q: 'Can I get SRT captions for the walkthrough?',
          a: 'Yes. Download SRT or VTT after transcription. Drop into your video editor, YouTube upload, or Loom re-render workflow.',
        },
        {
          q: 'Does Mictoo transcribe non-English WebM?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short recordings or non-English content, set the language explicitly for cleaner first-pass results.',
        },
        {
          q: 'What if the WebM has no audio track?',
          a: 'The transcript will be empty. WebM files without an audio track (silent screen recordings, GIF-style captures) have nothing for Whisper to transcribe.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original.',
        },
        {
          q: 'Is my WebM file saved on your servers?',
          a: 'No. The WebM streams to the transcription provider, we demux and transcribe in memory, then drop everything. The transcript is only stored if you sign in and save to history.',
        },
        {
          q: 'How long does a WebM transcription take?',
          a: 'A 10-minute Loom typically finishes in 20-40 seconds end to end. Longer WebM files (30-45 minutes) take 60-90 seconds. Upload speed is often the longer step for large screen recordings.',
        },
      ]}
      ctaHeadline="Drop your Loom or OBS recording"
      ctaSubtitle="WebM screen recordings, browser MediaRecorder output. Video demuxed server-side."
      ctaButton="Upload WebM to transcribe"
    />
  )
}
