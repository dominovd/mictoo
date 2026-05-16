import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Webinar Transcription — Free Transcript for Webinar Recordings | Mictoo',
  description: 'Transcribe webinar recordings to text and SRT subtitles for free. Works with Zoom, Webex, GoToWebinar, and any MP4 or MP3 export. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/webinar-transcription',
    languages: {
      'en': 'https://mictoo.com/webinar-transcription',
      'fr': 'https://mictoo.com/fr/webinar-transcription',
      'de': 'https://mictoo.com/de/webinar-transcription',
      'es': 'https://mictoo.com/es/webinar-transcription',
      'ru': 'https://mictoo.com/ru/webinar-transcription',
      'it': 'https://mictoo.com/it/webinar-transcription',
      'pt': 'https://mictoo.com/pt/webinar-transcription',
      'x-default': 'https://mictoo.com/webinar-transcription',
    },
  },
}

export default function WebinarTranscriptionPage() {
  return (
    <LandingLayout
      badge="Webinars · MP4 · Free"
      h1={<>Webinar Transcription<br /><span className="text-brand-600">Free Transcript Generator</span></>}
      subtitle="Turn your webinar recording into a searchable text transcript or SRT subtitle file. Works with Zoom, Webex, GoToWebinar, and any MP4/MP3 export."
      features={[
        { icon: '🎥', title: 'Any platform export', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — they all export MP4 or M4A. Drop your file directly, no conversion needed.' },
        { icon: '📝', title: 'Repurpose your webinar', desc: 'Turn one webinar into a blog post, social posts, email newsletter, and a follow-up document for attendees.' },
        { icon: '📺', title: 'SRT for on-demand replay', desc: 'Download the .srt file and upload it as captions when you publish the replay on YouTube, Vimeo, or your website.' },
      ]}
      faq={[
        { q: 'How do I download my Zoom or Webex webinar recording?', a: 'In Zoom: open the web portal → Recordings → click the webinar → Download. In Webex: open the recording in My Recordings → Download. Both export as MP4 by default.' },
        { q: 'Can I get a transcript while the webinar is still live?', a: 'Mictoo works on recorded files, not live audio streams. For real-time captions, use your webinar platform\'s built-in live captions feature, then upload the recording afterwards for a polished transcript.' },
        { q: 'What about multiple speakers and Q&A segments?', a: 'Mictoo generates a single transcript with all spoken words. Speaker labels (Host, Panelist 1, Audience) can be added manually in the browser editor before downloading.' },
        { q: 'What is the maximum webinar length?', a: 'Up to 25 MB per file. A 60-minute webinar audio at 64 kbps mono fits easily; export at lower bitrate or extract M4A audio to fit longer sessions.' },
        { q: 'Is the transcription accurate for technical or industry-specific terms?', a: 'Accuracy is high for clear audio. Brand names, acronyms, and unusual terminology are sometimes misspelled — quick to fix in the browser editor before exporting.' },
      ]}
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting Transcription' },
        { href: '/zoom-transcription', label: 'Zoom Transcription' },
        { href: '/free-srt-generator', label: 'SRT Generator' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
