import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'Timestamped Transcription: Free Time-Coded Transcript Generator | Mictoo',
  description:
    'Free timestamped transcription with segment-level time codes for audio or video. Useful for journalism, research, podcasting, and video editing.',
  alternates: {
    canonical: 'https://mictoo.com/timestamped-transcription',
    languages: {
      'en': 'https://mictoo.com/timestamped-transcription',
      'fr': 'https://mictoo.com/fr/timestamped-transcription',
      'de': 'https://mictoo.com/de/timestamped-transcription',
      'es': 'https://mictoo.com/es/timestamped-transcription',
      'ru': 'https://mictoo.com/ru/timestamped-transcription',
      'it': 'https://mictoo.com/it/timestamped-transcription',
      'pt': 'https://mictoo.com/pt/timestamped-transcription',
      'pl': 'https://mictoo.com/pl/timestamped-transcription',
      'ja': 'https://mictoo.com/ja/timestamped-transcription',
      'ko': 'https://mictoo.com/ko/timestamped-transcription',
      'x-default': 'https://mictoo.com/timestamped-transcription',
    },
  },
  openGraph: {
    title: 'Timestamped Transcription: Free Time-Coded Transcript Generator | Mictoo',
    description: 'Sentence-level timestamps for any audio or video.',
    url: 'https://mictoo.com/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timestamped Transcription: Free',
    description: 'Time-coded transcripts for journalism, research, editing.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      mode="upload" currentHref="/timestamped-transcription"
      badge="Timestamped · Audio or video · Free"
      h1First="Timestamped Transcription"
      h1Second="Time-coded transcripts for journalism, research, editing"
      subtitle="Upload audio or video and get a transcript with per-segment timestamps. Click any timestamp to jump to that moment in the audio player. Free, no signup."
      stepsTitle="How timestamped transcription works"
      steps={[
        { icon: 'upload',   title: 'Drop audio or video',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC and more. Up to 25 MB anonymously or 180 MB signed in.' },
        { icon: 'waveform', title: 'Whisper timestamps segments', desc: 'Whisper large-v3 provides per-segment timestamps aligned to the original audio.' },
        { icon: 'download', title: 'Export with timestamps',      desc: 'TXT with inline timestamps, SRT / VTT for subtitles, DOCX for review.' },
      ]}
      whyTitle="Why use Mictoo for timestamped transcripts?"
      whyCards={[
        { icon: 'clock',    title: 'Click-to-jump timestamps',   desc: 'Every timestamp is clickable in the Reader view. Jump to any moment in the audio player.' },
        { icon: 'target',   title: 'Whisper-quality transcription', desc: 'Whisper large-v3 adds punctuation and handles many languages, accents, and recording types.' },
        { icon: 'captions', title: 'SRT + VTT included',         desc: 'Timestamps carry through to SRT and VTT exports for video captioning.' },
        { icon: 'lock',     title: 'Files deleted after',        desc: 'Uploaded audio is dropped after transcription; transcript persists only on signed-in accounts.' },
      ]}
      scenariosTitle="When timestamped transcripts are useful"
      scenarios={[
        { icon: 'editPen',    title: 'Journalism quote hunt' },
        { icon: 'target',     title: 'UX research citation' },
        { icon: 'video',      title: 'Video editing cue-list' },
        { icon: 'headphones', title: 'Podcast show-notes' },
        { icon: 'archive',    title: 'Legal / discovery' },
        { icon: 'waveform',   title: 'Audio bookmarking' },
      ]}
      tipsTitle="Tips for cleaner timestamped output"
      tips={[
        'Reader view is best for click-to-jump navigation.',
        'For SRT / VTT export, timestamps align to the original file timeline.',
        'For long recordings, sign in for auto-split up to about 3 hours.',
        'Search bar highlights matches and shows their timestamp instantly.',
      ]}
      processTitle="What happens during transcription"
      processSteps={['Audio / video', 'Whisper large-v3', 'Timestamped text']}
      faq={[
        { q: 'What granularity are the timestamps?', a: 'Per-segment (roughly per-sentence). Whisper natively produces segment-level timestamps aligned to the audio.' },
        { q: 'Can I click a timestamp to jump in the audio?', a: 'Yes. In Reader view, every timestamp is clickable and scrubs the audio player to that moment.' },
        { q: 'Is the tool free?', a: 'Yes. Up to 25 MB anonymously or 180 MB when signed in. No watermark and no per-minute fee.' },
        { q: 'What export formats are supported?', a: 'TXT (with inline timestamps), SRT, VTT, DOCX. Signed-in users also get PDF and JSON with structured timestamp data.' },
        { q: 'Do you identify speakers?', a: 'Not yet. Continuous timestamped text with no speaker labels. Diarisation is on the Pro roadmap.' },
        { q: 'Are recordings kept on your servers?', a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
      ]}
      ctaHeadline="Get a click-to-jump timestamped transcript"
      ctaSubtitle="Journalism, UX research, video editing, podcast show-notes. Free per file."
      ctaButton="Upload audio or video"
      moreTools={[
        { href: '/free-srt-generator',       label: 'SRT Generator' },
        { href: '/youtube-to-text',          label: 'YouTube to Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/transcribe-video-to-text', label: 'Video to Text' },
      ]}
    />
  )
}
