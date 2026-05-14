import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Zoom Transcription — Transcribe Zoom Recordings Free | Mictoo',
  description: 'Transcribe Zoom meeting recordings to text for free. Works with MP4 and M4A from Zoom Cloud Recording or local recording. No signup required.',
  alternates: { canonical: 'https://mictoo.com/zoom-transcription' },
}

export default function ZoomTranscriptionPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · M4A · Free"
      h1={<>Zoom Transcription<br /><span className="text-brand-600">Turn Zoom Recordings into Text</span></>}
      subtitle="Upload your Zoom MP4 or M4A recording and get an accurate text transcript in seconds. Perfect for meetings, webinars, and interviews."
      features={[
        { icon: '🎬', title: 'Works with all Zoom recordings', desc: 'Both Zoom Cloud Recording exports (MP4) and Local Recording files (M4A audio-only) are supported. Just upload — no conversion needed.' },
        { icon: '✏️', title: 'Editable in the browser', desc: 'Clean up the transcript, add speaker names, fix names, and download as plain .txt or as .srt subtitles for the original video.' },
        { icon: '⚡', title: 'Fast and free', desc: 'A 25-minute Zoom meeting is typically transcribed in under 30 seconds. 100% free, no account, no credit card.' },
      ]}
      faq={[
        { q: 'How do I download my Zoom recording?', a: 'For Cloud Recording: open Zoom web portal → Recordings → click the meeting → Download. For Local Recording: open Zoom desktop client → Settings → Recording, recordings are saved in the configured folder by default.' },
        { q: 'What is the difference between MP4 and M4A from Zoom?', a: 'MP4 is the full video (with audio), M4A is audio-only. Both work with Mictoo. If you only need the transcript and not subtitles, M4A is smaller and uploads faster.' },
        { q: 'Can I get .srt subtitles for the Zoom video?', a: 'Yes. After transcription Mictoo shows a download .srt button. The .srt file contains synced timestamps and can be uploaded to Zoom, YouTube Studio, Premiere Pro, or DaVinci Resolve.' },
        { q: 'What is the maximum Zoom recording size?', a: 'Up to 25 MB per file. Most 25-minute MP4 recordings exceed this — extract the audio track as M4A or compress the video first. For 30–60 minute meetings, M4A at 64 kbps usually fits.' },
        { q: 'Is the transcription accurate for multiple speakers?', a: 'Accuracy is high when speakers take turns and don\'t talk over each other. Mictoo generates a single transcript without speaker labels — you can add Host / Guest manually in the browser editor.' },
      ]}
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting Transcription' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text' },
        { href: '/transcribe-video-to-text', label: 'Video to Text' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
