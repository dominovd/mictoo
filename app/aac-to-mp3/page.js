import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'AAC to MP3: Free Online Converter | Mictoo',
  description:
    'Convert AAC to MP3 free, in seconds, with a clear explanation of when conversion actually helps and when it just costs you quality.',
  alternates: {
    canonical: 'https://mictoo.com/aac-to-mp3',
    languages: {
      'en': 'https://mictoo.com/aac-to-mp3',
      'fr': 'https://mictoo.com/fr/aac-to-mp3',
      'de': 'https://mictoo.com/de/aac-to-mp3',
      'es': 'https://mictoo.com/es/aac-to-mp3',
      'ru': 'https://mictoo.com/ru/aac-to-mp3',
      'it': 'https://mictoo.com/it/aac-to-mp3',
      'pt': 'https://mictoo.com/pt/aac-to-mp3',
      'pl': 'https://mictoo.com/pl/aac-to-mp3',
      'ja': 'https://mictoo.com/ja/aac-to-mp3',
      'ko': 'https://mictoo.com/ko/aac-to-mp3',
      'x-default': 'https://mictoo.com/aac-to-mp3',
    },
  },
  openGraph: {
    title: 'AAC to MP3: Free Online Converter | Mictoo',
    description: 'Convert AAC to MP3 free, in seconds.',
    url: 'https://mictoo.com/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC to MP3: Free Online Converter',
    description: 'Convert AAC to MP3 in seconds. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function AacToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter" from="aac" to="mp3" currentHref="/aac-to-mp3"
      badge="AAC → MP3 · Free · No signup"
      h1First="AAC to MP3"
      h1Second="Free online converter"
      subtitle="Drop a raw .aac file (ADTS stream, broadcast dump, or extracted iPhone audio) and get a portable MP3 in seconds."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="How AAC to MP3 conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the AAC',        desc: 'Raw ADTS or ADIF framing, up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We decode and encode', desc: 'ffmpeg reads the AAC bitstream and re-encodes to 128 kbps stereo MP3.' },
        { icon: 'download', title: 'Download the MP3',    desc: 'Get your clean MP3 in seconds, ready for any player.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="Why use Mictoo for AAC to MP3?"
      whyCards={[
        { icon: 'target',   title: 'Raw AAC handled',        desc: 'Both ADTS and ADIF framings work directly, no manual repackaging.' },
        { icon: 'fileAudio',title: 'MP3 plays everywhere',   desc: 'Older devices and legacy podcast hosts sometimes prefer MP3 over AAC.' },
        { icon: 'lock',     title: 'Files deleted after',    desc: 'Uploaded AAC is dropped after conversion; the MP3 is purged within the hour.' },
        { icon: 'shield',   title: 'No watermark or tag',    desc: 'Just the audio, re-encoded. No branded intro or metadata.' },
      ]}
      scenariosTitle="When AAC to MP3 is useful"
      scenarios={[
        { icon: 'video',      title: 'HLS broadcast dump' },
        { icon: 'headphones', title: 'Podcast host requires MP3' },
        { icon: 'mail',       title: 'Legacy player compatibility' },
        { icon: 'editPen',    title: 'DAW import (older tools)' },
        { icon: 'archive',    title: 'Consistent archive format' },
        { icon: 'waveform',   title: 'Ripped iPhone AAC' },
      ]}
      tipsTitle="Tips for clean AAC to MP3"
      tips={[
        'If your device plays AAC natively, you may not need to convert.',
        'Both AAC and MP3 are lossy; re-encoding adds a small quality loss.',
        'For 60 MB cap, sign in.',
        'For transcription, upload the AAC directly to /aac-to-text instead.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['AAC ADTS frames', 'Decode', 'MP3 Encoding']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'No', size: 'Small (efficient)', best: 'Modern devices, streaming, iPhone' },
        { fmt: 'MP3', contains: 'No', size: 'Small',             best: 'Universal compatibility, legacy players' },
      ]}
      faq={[
        { q: 'Do I really need to convert AAC to MP3?', a: 'Rarely. Most modern devices play AAC natively. Convert only if a specific tool or host explicitly requires MP3.' },
        { q: 'Is the converter free?', a: 'Yes. Files up to 25 MB anonymously, 60 MB signed in. No watermark, no upgrade prompts.' },
        { q: 'What is the quality loss?', a: 'AAC and MP3 are both lossy. Re-encoding adds a small extra loss but is inaudible for typical listening at 128 kbps.' },
        { q: 'Which AAC framings work?', a: 'ADTS (most common), ADIF, and LATM all decode. AAC inside MP4/M4A works too but is a different intake path.' },
        { q: 'Are files stored?', a: 'No. Uploaded AAC is dropped after conversion; the MP3 is purged within the hour.' },
      ]}
      ctaHeadline="Convert your AAC to MP3 now"
      ctaSubtitle="Drop your AAC and get a clean MP3 in seconds. No signup. No watermark."
      ctaButton="Choose an AAC file"
      moreTools={[
        { href: '/m4a-to-mp3',  label: 'M4A to MP3' },
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/wav-to-mp3',  label: 'WAV to MP3' },
        { href: '/aac-to-text', label: 'AAC to Text' },
      ]}
    />
  )
}
