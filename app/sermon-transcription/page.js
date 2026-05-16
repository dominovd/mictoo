import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Sermon Transcription — Free Transcript Generator for Sermons | Mictoo',
  description: 'Transcribe sermons and church audio to text for free. Perfect for blog posts, study notes, and accessibility. Supports MP3, MP4, M4A. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/sermon-transcription',
    languages: {
      'en': 'https://mictoo.com/sermon-transcription',
      'fr': 'https://mictoo.com/fr/sermon-transcription',
      'de': 'https://mictoo.com/de/sermon-transcription',
      'es': 'https://mictoo.com/es/sermon-transcription',
      'ru': 'https://mictoo.com/ru/sermon-transcription',
      'it': 'https://mictoo.com/it/sermon-transcription',
      'x-default': 'https://mictoo.com/sermon-transcription',
    },
  },
}

export default function SermonTranscriptionPage() {
  return (
    <LandingLayout
      badge="Sermons · Church · Free"
      h1={<>Sermon Transcription<br /><span className="text-brand-600">Free Sermon Transcript Generator</span></>}
      subtitle="Turn sermon recordings into clean text in seconds. Great for church blogs, study guides, social posts, and making your messages accessible to the hard of hearing."
      features={[
        { icon: '📖', title: 'Repurpose every sermon', desc: 'Convert one sermon into a blog post, devotional, email newsletter, study guide, and quote-ready social posts. Multiply your reach without extra work.' },
        { icon: '♿', title: 'Accessibility', desc: 'Provide transcripts so members who are deaf, hard of hearing, or attending remotely can fully engage with the message.' },
        { icon: '🌐', title: 'Multi-language support', desc: 'Works for English, Spanish, Portuguese, Korean, French, Russian, and 45+ more languages. Perfect for multilingual congregations.' },
      ]}
      faq={[
        { q: 'How do I get a sermon recording into text?', a: 'Export the recording from your church\'s sound desk, podcast feed, or YouTube as MP3, MP4, or M4A. Drop the file above — Mictoo transcribes it in seconds.' },
        { q: 'Can I transcribe sermons from our church\'s YouTube channel?', a: 'Yes. For your own channel: YouTube Studio → Content → click video → Download. Drop the file into Mictoo. For external channels, you need permission to download — many ministries share audio downloads via their podcast feed.' },
        { q: 'What about Bible verse references and proper nouns?', a: 'AI transcription handles common verses and names well but occasionally misspells less-frequent biblical names or church-specific terms. Edit them in the browser before downloading — usually a 30-second cleanup.' },
        { q: 'How long can the sermon be?', a: 'Up to 25 MB per file. A 30-minute sermon at 128 kbps fits comfortably. For longer messages (45–60 minutes), lower the bitrate to 64 kbps mono or split into two parts.' },
        { q: 'Are the files private?', a: 'Yes. Sermons are processed and immediately discarded. We do not store any audio or transcript content.' },
      ]}
      relatedLinks={[
        { href: '/podcast-transcription', label: 'Podcast Transcription' },
        { href: '/lecture-transcription', label: 'Lecture Transcription' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
