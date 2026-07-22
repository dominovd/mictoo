import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 to M4A, free online converter | Mictoo',
  description:
    'Convert MP3 to M4A free online. Re-encode MP3 to AAC inside an M4A container for iPhone, iTunes, and Apple ecosystem. No signup, no watermark.',
  alternates: { canonical: 'https://mictoo.com/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 to M4A, free online converter | Mictoo',
    description: 'MP3 to AAC inside M4A. iPhone-friendly. No signup.',
    url: 'https://mictoo.com/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 to M4A, free online converter',
    description: 'iPhone-friendly AAC-in-MP4.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Mp3ToM4aPage() {
  return (
    <ConverterPageLayout
      mode="converter" from="mp3" to="m4a" currentHref="/mp3-to-m4a"
      badge="MP3 → M4A · Free · iPhone-friendly"
      h1First="MP3 to M4A"
      h1Second="Free online converter"
      subtitle="Drop an MP3 and get an M4A (AAC in MP4 container) for iPhone Voice Memos, iTunes, GarageBand, and the Apple ecosystem. No watermark, no email."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Stereo"
      stepsTitle="How MP3 to M4A conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the MP3',        desc: 'Any bitrate MP3, up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We re-encode to AAC', desc: 'ffmpeg decodes the MP3 and re-encodes as 128 kbps AAC inside an .m4a container.' },
        { icon: 'download', title: 'Download the M4A',   desc: 'iPhone-friendly file with the original name plus .m4a extension.' },
      ]}
      previewInputName="episode.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episode.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="Why use Mictoo for MP3 to M4A?"
      whyCards={[
        { icon: 'target',    title: 'iPhone-ready output',      desc: 'M4A plays natively in iOS, iTunes, GarageBand, and every Apple app.' },
        { icon: 'fileAudio', title: 'Slightly smaller size',    desc: 'AAC compresses more efficiently than MP3 at the same bitrate, roughly 10% smaller.' },
        { icon: 'lock',      title: 'Files deleted after',      desc: 'Uploaded MP3 is dropped after conversion; the M4A is purged within the hour.' },
        { icon: 'shield',    title: 'No watermark or tag',      desc: 'Just the audio, re-encoded. No branded intro, no metadata injected.' },
      ]}
      scenariosTitle="When MP3 to M4A is useful"
      scenarios={[
        { icon: 'headphones', title: 'iTunes library import' },
        { icon: 'waveform',   title: 'GarageBand project' },
        { icon: 'video',      title: 'iMovie soundtrack' },
        { icon: 'mail',       title: 'AirDrop compatibility' },
        { icon: 'archive',    title: 'Apple ecosystem archive' },
        { icon: 'editPen',    title: 'Logic Pro import' },
      ]}
      tipsTitle="Tips for clean MP3 to M4A"
      tips={[
        'MP3 and AAC are both lossy; re-encoding adds a small quality loss.',
        'For lossless, convert to WAV instead.',
        'ID3 tags are not carried into the M4A.',
        'For 60 MB cap, sign in.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['MP3 Stream', 'Decode', 'AAC / M4A Encoding']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'No', size: 'Small', best: 'Universal, legacy players' },
        { fmt: 'M4A', contains: 'No', size: 'Slightly smaller', best: 'iPhone, iTunes, GarageBand, Apple apps' },
      ]}
      faq={[
        { q: 'Is the MP3 to M4A converter free?', a: 'Yes. Up to 25 MB anonymously, 60 MB signed in. No watermark, no upgrade prompts.' },
        { q: 'Does converting MP3 to M4A improve quality?', a: 'No. Re-encoding from one lossy format to another can only lose quality slightly. Do it only for Apple-ecosystem compatibility.' },
        { q: 'Will the M4A work in iTunes and Apple Music?', a: 'Yes. Standard AAC inside MP4 container is the exact format iTunes uses.' },
        { q: 'Are files stored?', a: 'No. Uploaded MP3 is dropped after conversion; the M4A is purged within the hour.' },
        { q: 'Can I convert to lossless M4A (ALAC)?', a: 'Not from this page. The output is lossy AAC. For lossless, convert MP3 to WAV first, then to ALAC in your DAW.' },
      ]}
      ctaHeadline="Convert your MP3 to M4A now"
      ctaSubtitle="Drop your MP3 and get an iPhone-friendly M4A in seconds."
      ctaButton="Choose an MP3 file"
      moreTools={[
        { href: '/m4a-to-mp3',  label: 'M4A to MP3' },
        { href: '/mp3-to-wav',  label: 'MP3 to WAV' },
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/m4a-to-text', label: 'M4A to Text' },
      ]}
    />
  )
}
