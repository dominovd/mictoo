import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 to MP3, free online converter | Mictoo',
  description:
    'Convert MP4 to MP3 free online. Drop your video, get a clean 128 kbps MP3 audio file in seconds. No signup, no watermark, no email. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 to MP3, free online converter | Mictoo',
    description: 'Convert MP4 to MP3 free online. 128 kbps, no signup, no watermark.',
    url: 'https://mictoo.com/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 to MP3, free online converter',
    description: 'Convert MP4 to MP3 free online. 128 kbps, no signup, no watermark.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Mp4ToMp3Page() {
  return (
    <ConverterPageLayout
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/mp4-to-mp3"

      badge="MP4 → MP3 · Free · No signup"
      h1First="MP4 to MP3"
      h1Second="Free online converter"
      subtitle="Drop an MP4 video and get a clean MP3 audio file in seconds. No watermark, no email, no waiting."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Stereo"

      stepsTitle="How MP4 to MP3 conversion works"
      steps={[
        {
          icon: 'upload',
          title: 'Drop the MP4',
          desc: 'Upload your MP4 video. We accept files up to 25 MB.',
        },
        {
          icon: 'waveform',
          title: 'We extract the audio',
          desc: 'Our server extracts the audio track and encodes it to MP3.',
        },
        {
          icon: 'download',
          title: 'Download the MP3',
          desc: 'Get your clean MP3 file in seconds.',
        },
      ]}

      previewInputName="meeting-recording.mp4"
      previewInputSize="128.4 MB · 00:45:32"
      previewOutputName="meeting-recording.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="Why use Mictoo for MP4 to MP3?"
      whyCards={[
        {
          icon: 'target',
          title: 'Just the conversion',
          desc: 'We focus on one thing — converting MP4 to MP3 quickly and reliably.',
        },
        {
          icon: 'fileAudio',
          title: 'Small, universal MP3',
          desc: 'MP3 works everywhere and keeps file sizes small.',
        },
        {
          icon: 'lock',
          title: 'Files are deleted',
          desc: 'Your uploads are processed securely and deleted after conversion.',
        },
        {
          icon: 'shield',
          title: 'No watermark or audio tag',
          desc: 'Get a clean MP3 with no watermark or added tags.',
        },
      ]}

      scenariosTitle="When MP4 to MP3 is useful"
      scenarios={[
        { icon: 'headphones', title: 'Save a video podcast' },
        { icon: 'cap',        title: 'Extract lecture audio' },
        { icon: 'mail',       title: 'Email a smaller file' },
        { icon: 'editPen',    title: 'Prepare for transcription' },
        { icon: 'waveform',   title: 'Background audio' },
        { icon: 'archive',    title: 'Archive voice recordings' },
      ]}

      tipsTitle="Tips for clean conversion"
      tips={[
        'Trim huge videos first.',
        '128 kbps works for voice and music.',
        'Default audio track is used.',
        'DRM-protected video is unsupported.',
      ]}
      processTitle="What happens during conversion"
      processSteps={[
        'MP4 Container',
        'Audio track extraction',
        'MP3 Encoding',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Yes', size: 'Large', best: 'Watching, sharing video' },
        { fmt: 'MP3', contains: 'No',  size: 'Small', best: 'Listening, audio only' },
      ]}

      faq={[
        { q: 'Is the MP4 to MP3 converter free?', a: 'Yes. No account needed for files up to 25 MB, no time limit, no watermark on the output, no upgrade prompts. Display ads on the marketing pages cover server costs.' },
        { q: 'Does conversion reduce audio quality?', a: 'Slightly. MP3 is a lossy format, but at 128 kbps the quality loss is inaudible for voice and typical music playback. If you need lossless, convert to WAV instead.' },
        { q: 'Are uploaded files stored?', a: 'No. Your MP4 lands on Vercel Blob storage just long enough to be converted, then it is deleted. The resulting MP3 is purged within the hour. Save the MP3 locally.' },
        { q: 'Can I convert a large MP4?', a: 'The current upload limit is 25 MB. If your MP4 is larger, trim it in QuickTime, the Photos app, or another video editor before uploading.' },
        { q: 'Does it work on mobile?', a: 'Yes. The page is mobile-friendly and uploads work from iOS Safari and Android Chrome. On iPhone, share the video to Files first so the picker can reach it.' },
      ]}

      ctaHeadline="Convert your MP4 to MP3 now"
      ctaSubtitle="Drop your video and get a clean MP3 in seconds. No signup. No watermark."
      ctaButton="Choose an MP4 file"

      moreTools={[
        { href: '/wav-to-mp3',  label: 'WAV to MP3' },
        { href: '/webm-to-mp3', label: 'WEBM to MP3' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3' },
        { href: '/aac-to-mp3',  label: 'AAC to MP3' },
        { href: '/m4a-to-mp3',  label: 'M4A to MP3' },
        { href: '/mp3-to-wav',  label: 'MP3 to WAV' },
      ]}
    />
  )
}
