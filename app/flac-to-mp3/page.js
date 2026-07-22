import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC to MP3, free online converter | Mictoo',
  description:
    'Convert FLAC to MP3 free online. Shrink lossless FLAC down to 128 kbps MP3 in seconds. No signup, no watermark. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC to MP3, free online converter | Mictoo',
    description: 'Shrink lossless FLAC to 128 kbps MP3. No signup.',
    url: 'https://mictoo.com/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC to MP3, free online converter',
    description: 'Shrink lossless FLAC to portable MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FlacToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter" from="flac" to="mp3" currentHref="/flac-to-mp3"
      badge="FLAC → MP3 · Free · No signup"
      h1First="FLAC to MP3"
      h1Second="Free online converter"
      subtitle="Drop a lossless FLAC file (from a CD rip, Tidal download, or hi-res source) and get a portable 128 kbps MP3 in seconds."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="How FLAC to MP3 conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the FLAC',       desc: 'Any FLAC (native or FLAC-in-OGG). Up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We decode and encode', desc: 'ffmpeg decodes the lossless FLAC and re-encodes to 128 kbps stereo MP3.' },
        { icon: 'download', title: 'Download the MP3',    desc: 'Get your 5-8x smaller MP3, ready for any player.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16-bit / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="Why use Mictoo for FLAC to MP3?"
      whyCards={[
        { icon: 'target',    title: 'Keeps the lossless master', desc: 'Your FLAC file is never modified. We only produce a copy.' },
        { icon: 'fileAudio', title: 'Smaller listening copy',    desc: 'A 128 kbps MP3 is often several times smaller than FLAC. Conversion is lossy, so keep the FLAC as your master.' },
        { icon: 'lock',      title: 'Files deleted after',       desc: 'Uploaded FLAC is dropped after conversion; the MP3 is purged within the hour.' },
        { icon: 'shield',    title: 'No watermark or tag',       desc: 'Just the audio, re-encoded. No intro splice, no branded metadata.' },
      ]}
      scenariosTitle="When FLAC to MP3 is useful"
      scenarios={[
        { icon: 'headphones', title: 'CD rip for phone' },
        { icon: 'mail',       title: 'Email a smaller file' },
        { icon: 'archive',    title: 'Portable music library' },
        { icon: 'editPen',    title: 'DAW import' },
        { icon: 'waveform',   title: 'Podcast listen copy' },
        { icon: 'video',      title: 'Video soundtrack' },
      ]}
      tipsTitle="Tips for clean FLAC to MP3"
      tips={[
        'Keep the FLAC as the lossless archive copy.',
        '128 kbps is transparent for most listening.',
        'For tracks over 25 MB, trim or split the source before uploading.',
        'Vorbis metadata tags (title/artist) are not carried into the MP3.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['FLAC Container', 'Lossless decode', 'MP3 Encoding']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'No', size: 'Large (~5-8 MB/min)', best: 'Archival, hi-fi playback' },
        { fmt: 'MP3',  contains: 'No', size: 'Small (~1 MB/min)',   best: 'Sharing, phones, everywhere' },
      ]}
      faq={[
        { q: 'Is the FLAC to MP3 converter free?', a: 'Yes. Files up to 25 MB can be converted without an account, and the output has no watermark.' },
        { q: 'Do I lose quality converting FLAC to MP3?', a: 'Technically yes (MP3 is lossy), but at 128 kbps the loss is inaudible for typical listening. Keep the FLAC as the archive copy.' },
        { q: 'Are FLAC-in-OGG files supported?', a: 'Yes. Both native FLAC (magic bytes fLaC) and FLAC inside OGG containers work.' },
        { q: 'Are files stored?', a: 'No. Uploaded FLAC is dropped after conversion; the MP3 is purged within the hour.' },
        { q: 'My FLAC is over 25 MB. What now?', a: 'Trim or split the source, or export a lower-resolution listening copy before uploading.' },
      ]}
      ctaHeadline="Convert your FLAC to MP3 now"
      ctaSubtitle="Drop your FLAC and get a portable MP3 in seconds. No signup. No watermark."
      ctaButton="Choose a FLAC file"
      moreTools={[
        { href: '/wav-to-mp3',  label: 'WAV to MP3' },
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/webm-to-mp3', label: 'WEBM to MP3' },
        { href: '/flac-to-text', label: 'FLAC to Text' },
      ]}
    />
  )
}
