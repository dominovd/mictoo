import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'YouTube to Text — Transcribe YouTube Videos Free | Mictoo',
  description: 'Transcribe YouTube videos to text and SRT subtitles for free. Download the audio first, then upload to Mictoo. Works with MP3, MP4, M4A. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/youtube-to-text',
    languages: {
      'en': 'https://mictoo.com/youtube-to-text',
      'fr': 'https://mictoo.com/fr/youtube-to-text',
      'de': 'https://mictoo.com/de/youtube-to-text',
      'es': 'https://mictoo.com/es/youtube-to-text',
      'ru': 'https://mictoo.com/ru/youtube-to-text',
      'it': 'https://mictoo.com/it/youtube-to-text',
      'pt': 'https://mictoo.com/pt/youtube-to-text',
      'pl': 'https://mictoo.com/pl/youtube-to-text',
      'x-default': 'https://mictoo.com/youtube-to-text',
    },
  },
}

export default function YouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Free"
      h1={<>YouTube to Text<br /><span className="text-brand-600">Transcribe YouTube Videos Free</span></>}
      subtitle="Turn any YouTube video into a text transcript or SRT subtitle file. Free, no signup. Download the audio or video file, then upload it to Mictoo."
      features={[
        { icon: '🎬', title: 'Works for any YouTube video', desc: 'Tutorials, podcasts, interviews, lectures, vlogs — any video where speech is clear. Languages auto-detected, 50+ supported.' },
        { icon: '📺', title: 'SRT for captions', desc: 'After transcription you can download a ready-to-use .srt subtitle file. Upload it to YouTube Studio to add accurate captions to your own videos in seconds.' },
        { icon: '📝', title: 'Repurpose into content', desc: 'Turn a video into a blog post, show notes, social media quotes, or a script for translation. The transcript is fully editable in the browser.' },
      ]}
      faq={[
        { q: 'How do I get audio from a YouTube video?', a: 'For your own videos: open YouTube Studio → Content → click the video → Download. For third-party videos, your options depend on the video license and YouTube\'s Terms of Service. Many users download their own content first, then upload here.' },
        { q: 'Can Mictoo download from a YouTube URL directly?', a: 'No — to respect YouTube\'s Terms of Service and the rights of creators, Mictoo does not fetch from URLs. Upload an audio or video file you already have the right to transcribe.' },
        { q: 'How do I add Mictoo subtitles to my YouTube video?', a: 'After transcription, click "Download .srt" to get a subtitle file. In YouTube Studio: open the video → Subtitles → Add Language → Upload file → choose the .srt. Captions sync automatically.' },
        { q: 'Will the transcription work for non-English YouTube videos?', a: 'Yes. Mictoo auto-detects the spoken language and supports 50+ languages including Spanish, French, German, Russian, Japanese, Chinese, Arabic, and more. Set the language manually if auto-detection picks wrong.' },
        { q: 'What is the maximum video size?', a: 'Up to 25 MB per upload. A 25-minute audio export at 128 kbps fits. For longer videos, extract just the audio track (M4A is most efficient) or split the file into shorter parts.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text' },
        { href: '/free-srt-generator', label: 'SRT Generator' },
        { href: '/podcast-transcription', label: 'Podcast Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
