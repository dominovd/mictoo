import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Lecture Transcription — Free Lecture Transcript Generator | Mictoo',
  description: 'Transcribe lectures to text for free. Upload your lecture recording and get an accurate transcript in seconds. Great for students and academics. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/lecture-transcription',
    languages: {
      'en': 'https://mictoo.com/lecture-transcription',
      'fr': 'https://mictoo.com/fr/lecture-transcription',
      'de': 'https://mictoo.com/de/lecture-transcription',
      'es': 'https://mictoo.com/es/lecture-transcription',
      'ru': 'https://mictoo.com/ru/lecture-transcription',
      'x-default': 'https://mictoo.com/lecture-transcription',
    },
  },
}

export default function LectureTranscriptionPage() {
  return (
    <LandingLayout
      badge="Students · Academics · Free"
      h1={<>Lecture Transcription<br /><span className="text-brand-600">Free Lecture Transcript Generator</span></>}
      subtitle="Record your lecture and upload it here to get a full text transcript in seconds. Review, study, and search lecture content without replaying the recording. No account needed."
      features={[
        {
          icon: '🎓',
          title: 'For students',
          desc: 'Stop struggling to take notes during fast lectures. Record audio, upload later, get a full searchable transcript.',
        },
        {
          icon: '🔍',
          title: 'Searchable text',
          desc: 'Find any concept or quote from a lecture instantly. Ctrl+F your entire semester of notes.',
        },
        {
          icon: '🌍',
          title: '50+ languages',
          desc: 'Works for lectures in English, Spanish, French, German, Mandarin, Japanese, and many more languages.',
        },
      ]}
      faq={[
        {
          q: 'How do I transcribe a lecture recording for free?',
          a: 'Record your lecture as an audio or video file (MP3, MP4, M4A, WAV) using your phone or laptop. Upload the file above and get the full transcript within seconds.',
        },
        {
          q: 'What is the best app to record and transcribe lectures?',
          a: 'Any voice recorder app works — iPhone Voice Memos, Android Recorder, or your laptop\'s built-in mic. Save the file and upload it here for transcription.',
        },
        {
          q: 'Can I transcribe university lectures?',
          a: 'Yes. As long as you have recorded audio of the lecture (and have the right to transcribe it per your institution\'s policy), upload the file and get your transcript instantly.',
        },
        {
          q: 'How long does it take to transcribe a 1-hour lecture?',
          a: 'With Mictoo, a 1-hour lecture is typically transcribed in under 2 minutes. Note the 25 MB file size limit — for long lectures, export at a lower audio bitrate or split the file.',
        },
        {
          q: 'Is lecture transcription accurate?',
          a: 'Accuracy is typically 90–95% for clear audio. Technical lectures with domain-specific terminology may require manual correction of specialist terms.',
        },
        {
          q: 'Can I transcribe online lecture videos?',
          a: 'Yes. Download the video or extract the audio from the lecture video, then upload it here. MP4 and WEBM video files are also accepted.',
        },
      ]}
      relatedLinks={[
        { href: '/interview-transcription', label: 'Interview Transcription' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
        { href: '/timestamped-transcription', label: 'Timestamped Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
