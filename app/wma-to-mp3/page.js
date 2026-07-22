import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'WMA to MP3: Free Converter for Legacy Windows Media Audio | Mictoo',
  description:
    'Convert old WMA files to universal MP3. Built for rescuing legacy Windows Media archives, voicemail exports, and ripped CDs that nothing modern wants to open.',
  alternates: {
    canonical: 'https://mictoo.com/wma-to-mp3',
    languages: {
      'en': 'https://mictoo.com/wma-to-mp3',
      'fr': 'https://mictoo.com/fr/wma-to-mp3',
      'de': 'https://mictoo.com/de/wma-to-mp3',
      'es': 'https://mictoo.com/es/wma-to-mp3',
      'ru': 'https://mictoo.com/ru/wma-to-mp3',
      'it': 'https://mictoo.com/it/wma-to-mp3',
      'pt': 'https://mictoo.com/pt/wma-to-mp3',
      'pl': 'https://mictoo.com/pl/wma-to-mp3',
      'ja': 'https://mictoo.com/ja/wma-to-mp3',
      'ko': 'https://mictoo.com/ko/wma-to-mp3',
      'x-default': 'https://mictoo.com/wma-to-mp3',
    },
  },
  openGraph: {
    title: 'WMA to MP3: Legacy Windows Media Converter | Mictoo',
    description: 'Rescue legacy WMA archives, voicemail exports, ripped CDs.',
    url: 'https://mictoo.com/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA to MP3: Free Converter',
    description: 'Rescue legacy WMA files. Free.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WmaToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter" from="wma" to="mp3" currentHref="/wma-to-mp3"
      badge="WMA → MP3 · Free · Legacy rescue"
      h1First="WMA to MP3"
      h1Second="Free legacy Windows Media converter"
      subtitle="Drop an old WMA file (voicemail export, ripped CD, legacy Windows Media archive) and get a universal MP3 that any modern device or player will open."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="How WMA to MP3 conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the WMA',        desc: 'Any Windows Media Audio version, up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We decode and encode', desc: 'ffmpeg reads the WMA and re-encodes to 128 kbps stereo MP3 at 44.1 kHz.' },
        { icon: 'download', title: 'Download the MP3',    desc: 'Get an MP3 compatible with most current players, phones, and audio editors.' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="Why use Mictoo for WMA to MP3?"
      whyCards={[
        { icon: 'target',   title: 'Legacy files handled',    desc: 'Old Windows Media Audio files that iTunes, Apple Music, and modern players refuse to open.' },
        { icon: 'fileAudio',title: 'Broad MP3 compatibility', desc: 'MP3 is widely supported across macOS, Linux, iPhone, Android, and common music players.' },
        { icon: 'lock',     title: 'Files deleted after',     desc: 'Uploaded WMA is dropped after conversion; the MP3 is purged within the hour.' },
        { icon: 'shield',   title: 'No watermark or tag',     desc: 'Just the audio, re-encoded. No branded intro, no metadata injected.' },
      ]}
      scenariosTitle="When WMA to MP3 is useful"
      scenarios={[
        { icon: 'archive',    title: 'Legacy CD rip' },
        { icon: 'headphones', title: 'Old voicemail export' },
        { icon: 'editPen',    title: 'Windows Movie Maker output' },
        { icon: 'mail',       title: 'Share on non-Windows device' },
        { icon: 'video',      title: 'Import into modern editor' },
        { icon: 'waveform',   title: 'Rescue tape archive' },
      ]}
      tipsTitle="Tips for clean WMA to MP3"
      tips={[
        'DRM-protected WMA (old Windows Media Player rentals) cannot be decoded.',
        'Very low-bitrate WMA (voicemail) will sound the same as source.',
        'Old WMV video is not supported here; use MP4 to MP3 instead.',
        'For recordings over 25 MB, trim or split the source before uploading.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['WMA (ASF)', 'Decode Windows Media', 'MP3 Encoding']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'No', size: 'Small', best: 'Legacy Windows workflows (deprecated)' },
        { fmt: 'MP3', contains: 'No', size: 'Small', best: 'Universal compatibility, modern devices' },
      ]}
      faq={[
        { q: 'Is the WMA to MP3 converter free?', a: 'Yes. Files up to 25 MB can be converted without an account, and the output has no watermark.' },
        { q: 'Why do modern players refuse to open WMA?', a: 'Apple never supported WMA. Some Android players dropped it. WMA is a legacy Microsoft format that Windows itself has been moving away from.' },
        { q: 'Can you convert DRM-protected WMA?', a: 'No. Old Windows Media Player rentals used DRM that ffmpeg cannot decode. We never bypass copyright protection.' },
        { q: 'Are files stored?', a: 'No. Uploaded WMA is dropped after conversion; the MP3 is purged within the hour.' },
        { q: 'What about WMA lossless?', a: 'The converter reads WMA lossless too, but the output is still 128 kbps MP3 (lossy). For lossless output, convert to WAV instead.' },
      ]}
      ctaHeadline="Convert your WMA to MP3 now"
      ctaSubtitle="Rescue legacy Windows Media Audio. Get a portable MP3 in seconds."
      ctaButton="Choose a WMA file"
      moreTools={[
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/wav-to-mp3',  label: 'WAV to MP3' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3' },
        { href: '/aac-to-mp3',  label: 'AAC to MP3' },
      ]}
    />
  )
}
