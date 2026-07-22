import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV to MP3, free online converter | Mictoo',
  description:
    'Convert WAV to MP3 free online. Shrink lossless WAV files to portable 128 kbps MP3 in seconds. No signup, no watermark. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV to MP3, free online converter | Mictoo',
    description: 'Shrink lossless WAV to portable 128 kbps MP3. No signup.',
    url: 'https://mictoo.com/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV to MP3, free online converter',
    description: 'Shrink WAV to portable MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WavToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter" from="wav" to="mp3" currentHref="/wav-to-mp3"
      badge="WAV → MP3 · Free · No signup"
      h1First="WAV to MP3"
      h1Second="Free online converter"
      subtitle="Drop an uncompressed WAV file and get a small, portable MP3 in seconds. No watermark, no email, no waiting."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="How WAV to MP3 conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the WAV',         desc: 'Upload your WAV file. Up to 25 MB anonymously, 60 MB when signed in.' },
        { icon: 'waveform', title: 'We encode to MP3',      desc: 'ffmpeg encodes to 128 kbps stereo MP3 at 44.1 kHz. A 25 MB WAV finishes in about 10 seconds.' },
        { icon: 'download', title: 'Download the MP3',     desc: 'Ten-times-smaller MP3 with the same filename plus a .mp3 extension.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16-bit / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="Why use Mictoo for WAV to MP3?"
      whyCards={[
        { icon: 'target',   title: 'One job done well',      desc: 'Just the conversion. No newsletter popup, no fake progress bar.' },
        { icon: 'fileAudio',title: '10-15× smaller output',  desc: 'A 60 MB WAV becomes a 5-6 MB MP3 with no audible loss for typical listening.' },
        { icon: 'lock',     title: 'Files deleted after',    desc: 'Your upload is dropped once conversion finishes; the MP3 is purged within the hour.' },
        { icon: 'shield',   title: 'No watermark or tag',    desc: 'No branded intro, no metadata injected. Just the audio, re-encoded.' },
      ]}
      scenariosTitle="When WAV to MP3 is useful"
      scenarios={[
        { icon: 'headphones', title: 'Studio bounce for phone' },
        { icon: 'mail',       title: 'Email a smaller file' },
        { icon: 'archive',    title: 'Archive at smaller size' },
        { icon: 'editPen',    title: 'Prepare for transcription' },
        { icon: 'waveform',   title: 'Music library import' },
        { icon: 'video',      title: 'Voiceover for video' },
      ]}
      tipsTitle="Tips for clean WAV to MP3"
      tips={[
        '128 kbps is transparent for most listening.',
        'If the WAV is over 25 MB, sign in for a 60 MB cap.',
        'Multi-channel WAV is downmixed to stereo.',
        'For lossless preservation, keep the WAV as the archive copy.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['WAV Container', 'Decode PCM', 'MP3 Encoding']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'No', size: 'Large (~10 MB/min)', best: 'Editing, archiving, studio' },
        { fmt: 'MP3', contains: 'No', size: 'Small (~1 MB/min)',  best: 'Sharing, playback, listening' },
      ]}
      faq={[
        { q: 'Is the WAV to MP3 converter free?', a: 'Yes. No account needed for files up to 25 MB, no watermark, no upgrade prompts. Sign in to bump the cap to 60 MB.' },
        { q: 'Does the conversion reduce audio quality?', a: 'Slightly. MP3 at 128 kbps is a lossy format but the quality drop is inaudible for voice and typical music playback. Keep your WAV as the master.' },
        { q: 'Are uploaded files stored?', a: 'No. Your WAV lands on Vercel Blob storage just long enough to convert, then it is deleted. The MP3 is purged within the hour.' },
        { q: 'Can I convert a large WAV?', a: 'Cap is 25 MB (anonymously) or 60 MB (signed in). A 60 MB WAV covers roughly 6 minutes of stereo 16-bit audio. For longer, downsample to mono first with Audacity.' },
        { q: 'Does it work on mobile?', a: 'Yes. Uploads work from iOS Safari and Android Chrome.' },
      ]}
      ctaHeadline="Convert your WAV to MP3 now"
      ctaSubtitle="Drop your WAV and get a portable MP3 in seconds. No signup. No watermark."
      ctaButton="Choose a WAV file"
      moreTools={[
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/webm-to-mp3', label: 'WEBM to MP3' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3' },
        { href: '/mp3-to-wav',  label: 'MP3 to WAV' },
        { href: '/wav-to-text', label: 'WAV to Text' },
      ]}
    />
  )
}
