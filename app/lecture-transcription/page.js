import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Lecture Transcription for Classes and Seminars | Mictoo',
  description:
    'Upload a recorded class, lecture, or seminar and get searchable text, timestamps, an AI summary, and export files.',
  alternates: {
    canonical: 'https://mictoo.com/lecture-transcription',
    languages: {
      'en': 'https://mictoo.com/lecture-transcription',
      'fr': 'https://mictoo.com/fr/lecture-transcription',
      'de': 'https://mictoo.com/de/lecture-transcription',
      'es': 'https://mictoo.com/es/lecture-transcription',
      'ru': 'https://mictoo.com/ru/lecture-transcription',
      'it': 'https://mictoo.com/it/lecture-transcription',
      'pt': 'https://mictoo.com/pt/lecture-transcription',
      'pl': 'https://mictoo.com/pl/lecture-transcription',
      'ja': 'https://mictoo.com/ja/lecture-transcription',
      'ko': 'https://mictoo.com/ko/lecture-transcription',
      'x-default': 'https://mictoo.com/lecture-transcription',
    },
  },
  openGraph: {
    title: 'Lecture Transcription: Free Transcript Generator | Mictoo',
    description: 'Upload your recorded class or seminar and get clean text in seconds.',
    url: 'https://mictoo.com/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lecture Transcription: Free Generator',
    description: 'Upload your class or seminar recording.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function LectureTranscriptionPage() {
  return (
    <UseCaseLayout
      badge="Students · Academics · Free"
      h1First="Lecture Transcription"
      h1Second="Free transcripts for classes and seminars"
      subtitle="Upload your recorded lecture from Zoom, Panopto, YouTube, Kaltura, or your phone. Get a searchable transcript with timestamps ready for study notes, revision, and citation."
      currentHref="/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/voice-memo-to-text' },
      ]}

      howItWorksTitle="How lecture transcription works"
      steps={[
        {
          icon: 'folder',
          title: 'Export the lecture',
          desc: 'Download from Panopto/Kaltura, save from Zoom cloud, or record on your phone during class.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'MP3, MP4, M4A, WAV, MOV all work. Long lectures are auto-split when signed in.',
        },
        {
          icon: 'editPen',
          title: 'Notes, summary, citations',
          desc: 'Searchable timestamped transcript, AI summary, DOCX for study notes. Chat with the transcript to prep for exams.',
        },
      ]}

      exampleTitle="Example lecture transcript"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'All right. Last week we finished with the concept of consumer surplus. Today we build on that with producer surplus.' },
        { t: '0:11',  line: 'Producer surplus is the difference between what a producer would accept for a good and what they actually receive.' },
        { t: '0:23',  line: 'Together, consumer plus producer surplus gives us total welfare in a market before we introduce taxes or price controls.' },
        { t: '0:35',  line: 'Now, why do we care about this concept practically? Because it lets us evaluate whether policy makes a market better or worse off.' },
        { t: '0:47',  line: 'Consider a per-unit tax. It shifts the supply curve upward by the tax amount, and both surpluses shrink.' },
        { t: '0:58',  line: 'The gap that appears between what buyers pay and what sellers receive is what we call deadweight loss.' },
        { t: '1:08',  line: 'Please open the workbook to page thirty-one, and let us work through a numerical example together.' },
      ]}
      summaryPoints={[
        'Recap: consumer surplus from previous lecture.',
        'New concept: producer surplus and total welfare.',
        'Applied to taxation analysis.',
        'Deadweight loss illustrated numerically.',
      ]}
      actionItems={[
        'Review workbook page 31',
        'Practice deadweight loss calc',
        'Read chapter 4 before Thursday',
      ]}

      whyTitle="Why Mictoo for lecture transcription"
      whyCards={[
        {
          icon: 'search',
          title: 'Searchable inside the transcript',
          desc: 'Ctrl-F any concept from the whole 45-minute lecture in a second. Better than scrubbing through video.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for revision notes',
          desc: 'The summary is a solid revision starting point. Trim what you already know, keep what you missed.',
        },
        {
          icon: 'chat',
          title: 'Chat with the lecture',
          desc: 'Ask questions about the material to prep for exams. RAG-style answers cite the exact timestamp.',
        },
        {
          icon: 'globe',
          title: 'Translate for non-native students',
          desc: 'Lecture in English but you study in Portuguese? One-click translation to 50+ languages.',
        },
      ]}

      scenariosTitle="Common lecture scenarios"
      scenarios={[
        { icon: 'book',      title: 'University class' },
        { icon: 'cap' ,      title: 'Online course' },
        { icon: 'search',    title: 'Exam revision' },
        { icon: 'editPen',   title: 'Study notes' },
        { icon: 'globe',     title: 'Non-native student' },
        { icon: 'headset',   title: 'Recorded seminar' },
      ]}

      tipsTitle="Tips for cleaner lecture transcripts"
      tips={[
        'Sit close to the front and use your phone as a backup mic.',
        'Long lectures over 60 MB auto-split when you sign in.',
        'Set the language explicitly for technical or non-English content.',
        'Use Chat to ask follow-up questions after transcription.',
      ]}

      guidesTitle="Related learning tools"
      guides={[
        { href: '/zoom-transcription',        icon: 'video', title: 'Zoom lecture',      desc: 'Cloud Recording download' },
        { href: '/youtube-to-text',           icon: 'video', title: 'YouTube lecture',   desc: 'Paste URL or upload' },
        { href: '/voice-memo-to-text',        icon: 'mic',   title: 'Phone recording',   desc: 'iPhone Voice Memo in class' },
        { href: '/timestamped-transcription', icon: 'file',  title: 'Timestamped notes', desc: 'Time-aligned exports' },
      ]}

      faq={[
        {
          q: 'Can I transcribe a Zoom class recording?',
          a: 'Yes. Download the Cloud Recording MP4 or M4A and drop here. See the Zoom guide for the exact download path.',
        },
        {
          q: 'My lecture is over 60 MB. What now?',
          a: 'Sign in to enable auto-split (up to about 3 hours). Or downsample to 64 kbps mono MP3 with ffmpeg for a 5x size reduction.',
        },
        {
          q: 'Does Mictoo transcribe non-English lectures?',
          a: 'Yes. Whisper large-v3 supports 50+ languages. Set the language explicitly for technical vocabulary or heavy accents.',
        },
        {
          q: 'Can I search inside the transcript?',
          a: 'Yes. Reader view includes a search box with match count and highlighting. Ctrl-F your term and jump between hits.',
        },
        {
          q: 'Can I ask questions about the lecture material?',
          a: 'Yes. Chat with transcript lets you ask "explain deadweight loss" or "what pages did the professor mention". Answers cite timestamps.',
        },
        {
          q: 'Can I export lecture notes as DOCX or PDF?',
          a: 'Yes. DOCX for anyone, PDF and JSON for signed-in users. TXT is always available.',
        },
        {
          q: 'Are lecture recordings kept on your servers?',
          a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts are only saved if you sign in.',
        },
      ]}

      ctaHeadline="Turn lectures into study notes"
      ctaSubtitle="Searchable transcript, AI summary, chat with the material. Free per lecture."
      ctaButton="Upload a lecture"

      relatedLinks={[
        { href: '/webinar-transcription',     label: 'Webinar Transcription' },
        { href: '/sermon-transcription',      label: 'Sermon Transcription' },
        { href: '/voice-memo-to-text',        label: 'Voice Memo to Text' },
        { href: '/interview-transcription',   label: 'Interview Transcription' },
        { href: '/meeting-transcription',     label: 'Meeting Transcription' },
      ]}
    />
  )
}
