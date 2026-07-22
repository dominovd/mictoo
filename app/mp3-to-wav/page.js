import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 to WAV, free online converter | Mictoo',
  description:
    'Convert MP3 to WAV free online. Expand compressed MP3 into uncompressed 16-bit/44.1 kHz WAV for audio editing. No signup, no watermark.',
  alternates: { canonical: 'https://mictoo.com/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 to WAV, free online converter | Mictoo',
    description: 'MP3 into uncompressed 16-bit/44.1 kHz WAV. For editing.',
    url: 'https://mictoo.com/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 to WAV, free online converter',
    description: 'For DAW editing and mastering.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Mp3ToWavPage() {
  return (
    <ConverterPageLayout
      mode="converter" from="mp3" to="wav" currentHref="/mp3-to-wav"
      badge="MP3 → WAV · Free · Editor-friendly"
      h1First="MP3 to WAV"
      h1Second="Free online converter"
      subtitle="Drop an MP3 and get an uncompressed 16-bit / 44.1 kHz WAV for DAW editing, mastering, or CD burning. No watermark, no email."
      outputFormat="WAV" outputQuality="16-bit / 44.1 kHz" outputAudio="Stereo"
      stepsTitle="How MP3 to WAV conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the MP3',       desc: 'Any bitrate MP3, up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We decode to PCM',   desc: 'ffmpeg decodes the MP3 into uncompressed 16-bit / 44.1 kHz PCM wrapped in a WAV container.' },
        { icon: 'download', title: 'Download the WAV',   desc: 'Ready for Audacity, Pro Tools, Logic, Ableton, and any audio editor.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4.6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16-bit / 44.1 kHz · 50 MB"
      whyTitle="Why use Mictoo for MP3 to WAV?"
      whyCards={[
        { icon: 'target',   title: 'DAW-ready output',       desc: 'Uncompressed PCM is what audio editors and mastering tools expect.' },
        { icon: 'fileAudio',title: 'Standard 16-bit / 44.1', desc: 'CD-quality settings that every DAW, mastering plugin, and CD burner recognises.' },
        { icon: 'lock',     title: 'Files deleted after',    desc: 'Uploaded MP3 is dropped after conversion; the WAV is purged within the hour.' },
        { icon: 'shield',   title: 'No watermark or tag',    desc: 'Just the audio, decoded to PCM. No branded intro, no metadata injected.' },
      ]}
      scenariosTitle="When MP3 to WAV is useful"
      scenarios={[
        { icon: 'editPen',    title: 'Audacity editing' },
        { icon: 'waveform',   title: 'Pro Tools import' },
        { icon: 'headphones', title: 'Mastering workflow' },
        { icon: 'archive',    title: 'CD burning' },
        { icon: 'video',      title: 'Video editor with WAV requirement' },
        { icon: 'target',     title: 'Voice-cloning training input' },
      ]}
      tipsTitle="Tips for clean MP3 to WAV"
      tips={[
        'WAV is 10× larger than MP3 (about 10 MB per minute).',
        'The output is not "true" lossless — it preserves the MP3 signal.',
        'For real lossless audio, start from a FLAC or original WAV master.',
        'For 60 MB cap, sign in.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['MP3 Stream', 'Decode to PCM', 'WAV Container']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'No', size: 'Small (~1 MB/min)', best: 'Sharing, phones, streaming' },
        { fmt: 'WAV', contains: 'No', size: 'Large (~10 MB/min)', best: 'Editing, mastering, CD burning' },
      ]}
      faq={[
        { q: 'Does converting MP3 to WAV recover lossless quality?', a: 'No. MP3 is lossy; the WAV preserves the MP3 signal but nothing more. For true lossless, you need to start from a FLAC or original WAV.' },
        { q: 'Is the converter free?', a: 'Yes. Up to 25 MB anonymously, 60 MB signed in. No watermark, no upgrade prompts.' },
        { q: 'Why is the WAV file so much larger?', a: 'WAV is uncompressed PCM. A 5 MB MP3 becomes roughly a 50 MB WAV. That is normal.' },
        { q: 'What bit depth and sample rate?', a: '16-bit / 44.1 kHz stereo (CD quality). This is the standard DAW-import format.' },
        { q: 'Are files stored?', a: 'No. Uploaded MP3 is dropped after conversion; the WAV is purged within the hour.' },
      ]}
      ctaHeadline="Convert your MP3 to WAV now"
      ctaSubtitle="Drop your MP3 and get an uncompressed WAV ready for editing."
      ctaButton="Choose an MP3 file"
      moreTools={[
        { href: '/wav-to-mp3',  label: 'WAV to MP3' },
        { href: '/mp3-to-m4a',  label: 'MP3 to M4A' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3' },
        { href: '/wav-to-text', label: 'WAV to Text' },
      ]}
    />
  )
}
