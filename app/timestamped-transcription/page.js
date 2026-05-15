import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Timestamped Transcription — Free Time-Coded Transcript Generator | Mictoo',
  description: 'Generate timestamped transcripts and time-coded transcriptions for free. Upload audio or video and download an SRT file with exact timecodes. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/timestamped-transcription',
    languages: {
      'en': 'https://mictoo.com/timestamped-transcription',
      'fr': 'https://mictoo.com/fr/timestamped-transcription',
      'de': 'https://mictoo.com/de/timestamped-transcription',
      'es': 'https://mictoo.com/es/timestamped-transcription',
      'ru': 'https://mictoo.com/ru/timestamped-transcription',
      'x-default': 'https://mictoo.com/timestamped-transcription',
    },
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Timestamped Transcription — Mictoo',
  url: 'https://mictoo.com/timestamped-transcription',
  description: 'Free timestamped transcript generator. Upload audio or video and get time-coded transcription with SRT subtitle export.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function TimestampedTranscriptionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Time codes · SRT · Free"
        h1={<>Timestamped Transcription<br /><span className="text-brand-600">Free Time-Coded Transcripts</span></>}
        subtitle="Upload any audio or video file and get a transcript with exact timestamps. Download as an SRT file — ready for YouTube, video editors, and caption tools. No signup required."
        features={[
          {
            icon: '⏱️',
            title: 'Automatic timecodes',
            desc: 'Every segment gets a precise start and end timestamp — automatically generated from your audio.',
          },
          {
            icon: '📄',
            title: 'Download as .srt',
            desc: 'Export your time-coded transcript as an SRT subtitle file. Upload directly to YouTube, Premiere, DaVinci, or any caption tool.',
          },
          {
            icon: '✏️',
            title: 'Editable text',
            desc: 'Review and edit the plain-text transcript in your browser before downloading. No account needed.',
          },
        ]}
        faq={[
          {
            q: 'What is a timestamped transcript?',
            a: 'A timestamped transcript (also called a time-coded transcript) is a text version of audio or video where each line includes the exact time it was spoken — for example, "00:01:23 → Hello, welcome to the show." This lets you sync the text with the original media.',
          },
          {
            q: 'How do I create a time-coded transcript for free?',
            a: 'Upload your audio or video file using the tool above. Mictoo automatically generates a transcript with timestamps and lets you download it as an SRT file or plain text.',
          },
          {
            q: 'What is an SRT file?',
            a: 'SRT (SubRip Subtitle) is a standard subtitle file format that contains timestamped text segments. SRT files are supported by YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve, and most other video platforms and editors.',
          },
          {
            q: 'Can I use the SRT file for YouTube captions?',
            a: 'Yes. After downloading the .srt file, go to YouTube Studio → Subtitles → Add Language → Upload file. Your time-coded captions will be synced with the video automatically.',
          },
          {
            q: 'How accurate are the timestamps?',
            a: 'Timestamps are generated at the segment level (usually every 5–15 seconds). Accuracy is high for clear audio. Overlapping speakers or heavy background noise may affect precision.',
          },
          {
            q: 'What is the difference between a transcript and a time-coded transcript?',
            a: 'A plain transcript is a text-only version of the audio. A time-coded transcript adds timestamps so each section can be matched back to a specific moment in the recording — essential for captioning, subtitles, and editing.',
          },
          {
            q: 'What file formats are supported for timestamped transcription?',
            a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Any audio or video file up to 25 MB.',
          },
        ]}
        relatedLinks={[
          { href: '/free-srt-generator', label: 'SRT Generator' },
          { href: '/transcribe-video-to-text', label: 'Video to Text' },
          { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
          { href: '/', label: 'All formats' },
        ]}
      />
    </>
  )
}
