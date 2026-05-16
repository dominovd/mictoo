import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Business Transcription — Free Meeting & Call Transcript Tool | Mictoo',
  description: 'Transcribe business meetings, sales calls, interviews, and conference recordings for free. Instant, accurate, no signup. Download as text or SRT.',
  alternates: {
    canonical: 'https://mictoo.com/business-transcription',
    languages: {
      'en': 'https://mictoo.com/business-transcription',
      'fr': 'https://mictoo.com/fr/business-transcription',
      'de': 'https://mictoo.com/de/business-transcription',
      'es': 'https://mictoo.com/es/business-transcription',
      'ru': 'https://mictoo.com/ru/business-transcription',
      'it': 'https://mictoo.com/it/business-transcription',
      'x-default': 'https://mictoo.com/business-transcription',
    },
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Business Transcription — Mictoo',
  url: 'https://mictoo.com/business-transcription',
  description: 'Free business transcription tool for meetings, calls, interviews, and presentations.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function BusinessTranscriptionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Meetings · Calls · Interviews · Free"
        h1={<>Business Transcription<br /><span className="text-brand-600">Free Meeting & Call Transcripts</span></>}
        subtitle="Turn any recorded meeting, sales call, interview, or presentation into a searchable text document in seconds. No account. No subscription."
        features={[
          {
            icon: '📞',
            title: 'Sales & client calls',
            desc: 'Transcribe recorded sales calls, customer interviews, and discovery sessions. Review key points and commitments without replaying audio.',
          },
          {
            icon: '📊',
            title: 'Meetings & standups',
            desc: 'Convert Zoom, Google Meet, and Teams recordings into text. Share meeting notes without watching the whole recording.',
          },
          {
            icon: '🔐',
            title: 'Private processing',
            desc: 'Your recordings are processed immediately and never stored. Business conversations stay confidential.',
          },
        ]}
        faq={[
          {
            q: 'How do I transcribe a business meeting recording?',
            a: 'Export your meeting recording as an MP4 or MP3 file from Zoom, Google Meet, or Teams. Upload it here and get a full text transcript within seconds.',
          },
          {
            q: 'Can I transcribe a Zoom recording for free?',
            a: 'Yes. Download your Zoom recording locally (MP4 or M4A), then upload it to Mictoo. The transcript is generated instantly at no cost.',
          },
          {
            q: 'Is my business data safe?',
            a: 'Yes. Files are processed in real time and immediately discarded. Nothing is stored on our servers. We never train models on your data.',
          },
          {
            q: 'How do I transcribe a sales call recording?',
            a: 'Export the call recording from your CRM or call recording tool as an MP3 or WAV, upload it above, and download the transcript as a .txt file.',
          },
          {
            q: 'Does it support multiple speakers?',
            a: 'The transcript captures all spoken words in a single text block. Speaker diarization (labeling who said what) requires a professional transcription service.',
          },
          {
            q: 'What meeting platforms are supported?',
            a: 'Any platform that lets you download a recording works: Zoom, Google Meet, Microsoft Teams, Webex, Riverside, Loom, and others. Export as MP4, MP3, M4A, or WAV.',
          },
          {
            q: 'Can I transcribe a podcast or webinar?',
            a: 'Yes. Podcast episodes, webinar recordings, and conference talks all transcribe well. Upload the audio file and get your transcript in seconds.',
          },
        ]}
        relatedLinks={[
          { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
          { href: '/timestamped-transcription', label: 'Timestamped Transcription' },
          { href: '/transcribe-video-to-text', label: 'Video to Text' },
          { href: '/', label: 'All formats' },
        ]}
      />
    </>
  )
}
