import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'WAV to Text — Free WAV File Transcription Online | Mictoo',
  description: 'Convert WAV files to text online for free. Upload any WAV audio file and get an accurate transcript in seconds. No signup required.',
  alternates: { canonical: 'https://mictoo.com/wav-to-text' },
}

export default function WavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Free · Instant"
      h1={<>WAV to Text<br /><span className="text-brand-600">Free WAV Transcription Online</span></>}
      subtitle="Upload any WAV audio file and get an accurate text transcript in seconds. Supports all WAV recordings — interviews, calls, lectures, voice notes. No account needed."
      features={[
        {
          icon: '🎙️',
          title: 'Any WAV file',
          desc: 'Standard WAV, PCM, broadcast WAV — any WAV format up to 25 MB is accepted.',
        },
        {
          icon: '⏱️',
          title: 'Timestamps included',
          desc: 'Download your transcript as a .txt file or an .srt subtitle file with timecodes.',
        },
        {
          icon: '🌍',
          title: '50+ languages',
          desc: 'Language is detected automatically. Works for English, Spanish, French, German, Russian, and many more.',
        },
      ]}
      faq={[
        {
          q: 'How do I convert a WAV file to text?',
          a: 'Upload your WAV file using the tool above. Mictoo automatically transcribes it using AI and displays the text within seconds.',
        },
        {
          q: 'Is WAV to text conversion free?',
          a: 'Yes, completely free. No account required. Upload your WAV files — no monthly minute quota, no signup.',
        },
        {
          q: 'What is the maximum WAV file size?',
          a: 'Up to 25 MB. For larger recordings, consider converting to MP3 first to reduce file size, or split the recording into shorter segments.',
        },
        {
          q: 'Can I get a timestamped transcript from a WAV file?',
          a: 'Yes. After transcribing, click the .srt button to download a subtitle file with exact timestamps for each segment.',
        },
        {
          q: 'What other audio formats are supported?',
          a: 'Mictoo also supports MP3, MP4, M4A, OGG, WEBM, and FLAC in addition to WAV.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/m4a-to-text', label: 'M4A to Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
