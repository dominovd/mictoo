import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM to MP3, free online converter | Mictoo',
  description:
    'Convert WEBM to MP3 free online. Pull MP3 audio out of any WEBM video or audio file in seconds. No signup, no watermark. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM to MP3, free online converter | Mictoo',
    description: 'Pull MP3 out of any WEBM. No signup, no watermark.',
    url: 'https://mictoo.com/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM to MP3, free online converter',
    description: 'Pull MP3 out of any WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WebmToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter" from="webm" to="mp3" currentHref="/webm-to-mp3"
      badge="WEBM → MP3 · Free · No signup"
      h1First="WEBM to MP3"
      h1Second="Free online converter"
      subtitle="Drop a WEBM (from Loom, OBS, Firefox recording, or a YouTube downloader) and get a clean MP3 in seconds. No watermark, no email."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="How WEBM to MP3 conversion works"
      steps={[
        { icon: 'upload',   title: 'Drop the WEBM',   desc: 'Video or audio-only WEBM, either works. Up to 25 MB anonymously.' },
        { icon: 'waveform', title: 'We demux and encode', desc: 'ffmpeg strips the video track (if any) and re-encodes the Opus or Vorbis audio to 128 kbps MP3.' },
        { icon: 'download', title: 'Download the MP3', desc: 'Get your clean MP3 in seconds. Original filename with .mp3 extension.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="Why use Mictoo for WEBM to MP3?"
      whyCards={[
        { icon: 'target',   title: 'Handles Opus and Vorbis', desc: 'Both WEBM audio codecs work directly, no manual repackaging.' },
        { icon: 'video',    title: 'Video-in-WEBM handled',   desc: 'We demux the video track server-side. You never need to extract audio yourself.' },
        { icon: 'lock',     title: 'Files deleted after',     desc: 'Uploaded WEBM is dropped after conversion; the MP3 is purged within the hour.' },
        { icon: 'shield',   title: 'No watermark or tag',     desc: 'The output MP3 has no intro splice, no branded metadata.' },
      ]}
      scenariosTitle="When WEBM to MP3 is useful"
      scenarios={[
        { icon: 'video',      title: 'Loom walkthrough' },
        { icon: 'headphones', title: 'YouTube downloader output' },
        { icon: 'mail',       title: 'Email a smaller file' },
        { icon: 'editPen',    title: 'Prepare for transcription' },
        { icon: 'waveform',   title: 'Browser recording' },
        { icon: 'archive',    title: 'Archive audio only' },
      ]}
      tipsTitle="Tips for clean WEBM to MP3"
      tips={[
        'Video-WEBM is auto-demuxed, no need to strip first.',
        'For long recordings over 25 MB, sign in for 60 MB.',
        'The default audio track is used if multiple exist.',
        'For Whisper transcription, upload the WEBM directly to /webm-to-text.',
      ]}
      processTitle="What happens during conversion"
      processSteps={['WEBM Container', 'Audio track extraction', 'MP3 Encoding']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Often yes', size: 'Medium-large', best: 'Web recording, browser video' },
        { fmt: 'MP3',  contains: 'No',        size: 'Small',        best: 'Sharing, playback, everywhere' },
      ]}
      faq={[
        { q: 'Is the WEBM to MP3 converter free?', a: 'Yes. Files up to 25 MB anonymously, 60 MB signed in. No watermark, no upgrade prompts.' },
        { q: 'What if my WEBM has video?', a: 'We demux the video track server-side and only encode the audio. You do not need to pre-strip anything.' },
        { q: 'Which WEBM audio codecs work?', a: 'Opus (modern, most common) and Vorbis (older). Both are supported directly.' },
        { q: 'Are uploaded files stored?', a: 'No. WEBM is dropped after conversion; the MP3 is purged within the hour.' },
        { q: 'My WEBM is over 60 MB. What now?', a: 'Trim the source before uploading, or extract audio-only WEBM with ffmpeg first (usually 5-10x smaller).' },
      ]}
      ctaHeadline="Convert your WEBM to MP3 now"
      ctaSubtitle="Drop your WEBM and get a clean MP3 in seconds. No signup. No watermark."
      ctaButton="Choose a WEBM file"
      moreTools={[
        { href: '/mp4-to-mp3',  label: 'MP4 to MP3' },
        { href: '/wav-to-mp3',  label: 'WAV to MP3' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3' },
        { href: '/webm-to-text', label: 'WEBM to Text' },
      ]}
    />
  )
}
