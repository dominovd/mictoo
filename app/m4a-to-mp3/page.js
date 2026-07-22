import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'M4A to MP3: Free Converter for Apple Audio | Mictoo',
  description:
    'Convert iPhone Voice Memos, GarageBand bounces, and Apple-ecosystem M4A files to universal MP3 for podcast hosts, older Android phones, and legacy players.',
  alternates: {
    canonical: 'https://mictoo.com/m4a-to-mp3',
    languages: {
      'en': 'https://mictoo.com/m4a-to-mp3',
      'fr': 'https://mictoo.com/fr/m4a-to-mp3',
      'de': 'https://mictoo.com/de/m4a-to-mp3',
      'es': 'https://mictoo.com/es/m4a-to-mp3',
      'ru': 'https://mictoo.com/ru/m4a-to-mp3',
      'it': 'https://mictoo.com/it/m4a-to-mp3',
      'pt': 'https://mictoo.com/pt/m4a-to-mp3',
      'pl': 'https://mictoo.com/pl/m4a-to-mp3',
      'ja': 'https://mictoo.com/ja/m4a-to-mp3',
      'ko': 'https://mictoo.com/ko/m4a-to-mp3',
      'x-default': 'https://mictoo.com/m4a-to-mp3',
    },
  },
  openGraph: {
    title: 'M4A to MP3: Free Converter for Apple Audio | Mictoo',
    description: 'iPhone Voice Memos and GarageBand bounces to universal MP3.',
    url: 'https://mictoo.com/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A to MP3: Free Converter',
    description: 'iPhone Voice Memos to universal MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function M4aToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter" from="m4a" to="mp3" currentHref="/m4a-to-mp3"
      badge="M4A → MP3 · Free · Apple audio"
      h1First="M4A to MP3"
      h1Second="Free converter for Apple-ecosystem audio"
      subtitle="Drop an iPhone Voice Memo, GarageBand bounce, or Apple Podcasts export and get a universal MP3 for podcast hosts, older Android phones, and legacy players."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="How M4A to MP3 conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the M4A',        desc: 'From Voice Memos, GarageBand, Apple Podcasts. Up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We decode and encode', desc: 'ffmpeg decodes the AAC inside the M4A container and re-encodes to 128 kbps MP3.' },
        { icon: 'download', title: 'Download the MP3',    desc: 'Get an MP3 every player recognises.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="Why use Mictoo for M4A to MP3?"
      whyCards={[
        { icon: 'target',   title: 'iPhone-friendly',        desc: 'iPhone Voice Memos native .m4a drops in directly, no rename needed.' },
        { icon: 'fileAudio',title: 'MP3 for legacy hosts',   desc: 'Some podcast hosts and older Android devices still prefer MP3 over M4A.' },
        { icon: 'lock',     title: 'Files deleted after',    desc: 'Uploaded M4A is dropped after conversion; the MP3 is purged within the hour.' },
        { icon: 'shield',   title: 'No watermark or tag',    desc: 'Just the audio, re-encoded. No branded intro, no metadata injected.' },
      ]}
      scenariosTitle="When M4A to MP3 is useful"
      scenarios={[
        { icon: 'headphones', title: 'iPhone Voice Memo' },
        { icon: 'waveform',   title: 'GarageBand bounce' },
        { icon: 'mail',       title: 'Legacy podcast host' },
        { icon: 'archive',    title: 'Consistent library format' },
        { icon: 'editPen',    title: 'Older DAW import' },
        { icon: 'video',      title: 'Non-Apple video editor' },
      ]}
      tipsTitle="Tips for clean M4A to MP3"
      tips={[
        'If your platform accepts M4A, you may not need to convert.',
        'Both formats are lossy; re-encoding adds a small quality loss.',
        'ID3 and iTunes metadata are not carried across.',
        'For transcription, upload the M4A directly to /m4a-to-text.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['M4A (MP4 container)', 'AAC decode', 'MP3 Encoding']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'No', size: 'Small (efficient)', best: 'Apple ecosystem, modern devices' },
        { fmt: 'MP3', contains: 'No', size: 'Small',             best: 'Universal, legacy players, older hosts' },
      ]}
      faq={[
        { q: 'Do I need to convert M4A to MP3?', a: 'Only if a specific tool or host requires MP3. Most modern devices (including all Android and Windows in 2026) play M4A natively.' },
        { q: 'Is the converter free?', a: 'Yes. Up to 25 MB anonymously, 60 MB signed in. No watermark, no upgrade prompts.' },
        { q: 'Will I lose quality?', a: 'M4A and MP3 are both lossy. Re-encoding adds a small loss but is inaudible for typical listening.' },
        { q: 'Does iPhone Voice Memos native format work?', a: 'Yes. iPhone Voice Memos writes standard .m4a which drops in directly.' },
        { q: 'Are files stored?', a: 'No. Uploaded M4A is dropped after conversion; the MP3 is purged within the hour.' },
      ]}
      ctaHeadline="Convert your M4A to MP3 now"
      ctaSubtitle="Drop your iPhone Voice Memo or Apple audio and get a portable MP3."
      ctaButton="Choose an M4A file"
      moreTools={[
        { href: '/aac-to-mp3',  label: 'AAC to MP3' },
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/mp3-to-m4a',  label: 'MP3 to M4A' },
        { href: '/m4a-to-text', label: 'M4A to Text' },
      ]}
    />
  )
}
