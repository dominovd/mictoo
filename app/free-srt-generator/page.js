import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'Free SRT Generator: Make SRT Subtitle Files Online from Audio or Video | Mictoo',
  description:
    'Generate clean SRT subtitle files from any audio or video. Whisper-quality timestamps, ready for YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Free, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/free-srt-generator',
    languages: {
      'en': 'https://mictoo.com/free-srt-generator',
      'fr': 'https://mictoo.com/fr/free-srt-generator',
      'de': 'https://mictoo.com/de/free-srt-generator',
      'es': 'https://mictoo.com/es/free-srt-generator',
      'ru': 'https://mictoo.com/ru/free-srt-generator',
      'it': 'https://mictoo.com/it/free-srt-generator',
      'pt': 'https://mictoo.com/pt/free-srt-generator',
      'pl': 'https://mictoo.com/pl/free-srt-generator',
      'ja': 'https://mictoo.com/ja/free-srt-generator',
      'ko': 'https://mictoo.com/ko/free-srt-generator',
      'x-default': 'https://mictoo.com/free-srt-generator',
    },
  },
  openGraph: {
    title: 'Free SRT Generator | Mictoo',
    description: 'Generate SRT subtitle files from audio or video. YouTube, Premiere, Final Cut ready.',
    url: 'https://mictoo.com/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SRT Generator',
    description: 'Whisper-quality SRT subtitles from audio or video.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      mode="upload" currentHref="/free-srt-generator"
      badge="SRT · Audio or video · Free"
      h1First="Free SRT Generator"
      h1Second="Whisper-quality subtitles from any audio or video"
      subtitle="Upload audio or video, get an SRT subtitle file ready for YouTube, Premiere, Final Cut, DaVinci Resolve, or CapCut. No signup, no per-minute fee."
      stepsTitle="How SRT generation works"
      steps={[
        { icon: 'upload',   title: 'Drop audio or video', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC and more. Up to 25 MB anonymously, 60 MB signed in.' },
        { icon: 'waveform', title: 'Whisper transcribes', desc: 'Whisper large-v3 produces per-segment timestamps aligned to the original audio.' },
        { icon: 'download', title: 'Download SRT',        desc: 'SRT and VTT exports included. Drop into your video editor or YouTube upload.' },
      ]}
      whyTitle="Why use Mictoo for SRT generation?"
      whyCards={[
        { icon: 'target',   title: 'Higher accuracy than YouTube auto', desc: 'Whisper large-v3 outperforms YouTube auto-captions on proper nouns, punctuation, and accents.' },
        { icon: 'captions', title: 'SRT + VTT included',                desc: 'Both subtitle formats generated automatically. VTT for web players, SRT for editors.' },
        { icon: 'lock',     title: 'Files deleted after',               desc: 'Uploaded audio is dropped after transcription; transcript persists only on signed-in accounts.' },
        { icon: 'shield',   title: 'No watermark or tag',               desc: 'Clean SRT with no branded intro or "Made with X" tag.' },
      ]}
      scenariosTitle="When SRT generation is useful"
      scenarios={[
        { icon: 'video',      title: 'YouTube upload captions' },
        { icon: 'editPen',    title: 'Premiere / DaVinci import' },
        { icon: 'headphones', title: 'Podcast video version' },
        { icon: 'mail',       title: 'Client review copy' },
        { icon: 'archive',    title: 'Accessibility archive' },
        { icon: 'target',     title: 'Foreign-language captions' },
      ]}
      tipsTitle="Tips for cleaner subtitles"
      tips={[
        'For long recordings over 60 MB, sign in for auto-split.',
        'Set the language explicitly for non-English or technical content.',
        'Review names and unusual terms in Editor mode before export.',
        'Translate the transcript first, then export SRT for foreign captions.',
      ]}
      processTitle="What happens during generation"
      processSteps={['Audio / video', 'Whisper transcription', 'SRT + VTT export']}
      faq={[
        { q: 'Is the SRT generator free?', a: 'Yes. Up to 25 MB anonymously, 60 MB signed in. No watermark on the SRT, no per-minute fee.' },
        { q: 'Which subtitle formats do I get?', a: 'SRT and VTT are both included. TXT (plain text) and DOCX are also available. Signed-in users additionally get PDF and JSON.' },
        { q: 'How accurate are the timestamps?', a: 'Whisper large-v3 provides per-segment timestamps aligned to the original audio. Accurate enough for YouTube captions and most video editing use cases.' },
        { q: 'Do you identify speakers (diarisation)?', a: 'Not yet. Continuous captions with timestamps but no speaker labels. Diarisation is on the Pro roadmap.' },
        { q: 'Does Mictoo transcribe non-English audio?', a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. Set the language explicitly for cleaner results.' },
        { q: 'Are recordings kept on your servers?', a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
      ]}
      ctaHeadline="Generate SRT captions from any recording"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Whisper-quality timestamps."
      ctaButton="Upload audio or video"
      moreTools={[
        { href: '/timestamped-transcription', label: 'Timestamped Transcript' },
        { href: '/youtube-to-text',           label: 'YouTube to Text' },
        { href: '/transcribe-video-to-text',  label: 'Video to Text' },
        { href: '/transcribe-audio-to-text',  label: 'Audio to Text' },
      ]}
    />
  )
}
