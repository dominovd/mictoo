import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Teams Meeting Transcription — Transcribe Microsoft Teams Recordings | Mictoo',
  description: 'Transcribe Microsoft Teams meeting recordings to text for free. Works with MP4 from OneDrive or SharePoint. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/teams-meeting-transcription',
    languages: {
      'en': 'https://mictoo.com/teams-meeting-transcription',
      'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
      'de': 'https://mictoo.com/de/teams-meeting-transcription',
      'es': 'https://mictoo.com/es/teams-meeting-transcription',
      'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
      'it': 'https://mictoo.com/it/teams-meeting-transcription',
      'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
      'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
      'x-default': 'https://mictoo.com/teams-meeting-transcription',
    },
  },
}

export default function TeamsMeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Free"
      h1={<>Teams Meeting Transcription<br /><span className="text-brand-600">Microsoft Teams to Text</span></>}
      subtitle="Turn your Microsoft Teams meeting recording into a clean text transcript or SRT subtitle file. Free, no account needed. Works with MP4 from OneDrive or SharePoint."
      features={[
        { icon: '🏢', title: 'Built for Teams workflows', desc: 'Download the recording from OneDrive or SharePoint — usually under "Recordings" in your meeting chat — and drop it into Mictoo. The MP4 works directly.' },
        { icon: '📤', title: 'Shareable transcripts', desc: 'Paste the transcript into a Teams chat, OneNote, or Loop component to share with attendees who missed the meeting.' },
        { icon: '🌐', title: 'All meeting languages', desc: 'Transcribes English, Spanish, French, German, Italian, Dutch, Polish, Japanese, Chinese, and 40+ more. Language is auto-detected.' },
      ]}
      faq={[
        { q: 'Where does Teams save my meeting recordings?', a: 'For most organizations, Teams saves recordings to the recorder\'s OneDrive (1:1 / group chats) or to the channel\'s SharePoint folder (channel meetings). Open the recording, click Download, and you get an MP4 file.' },
        { q: 'Does Teams already provide a transcript?', a: 'Microsoft Teams offers built-in live transcription if your admin has it enabled, but the file is stored inside the Teams ecosystem and isn\'t always downloadable. Mictoo gives you a portable .txt or .srt you can use anywhere.' },
        { q: 'Can I get SRT subtitles for the Teams video?', a: 'Yes. After transcription you can download a .srt file with timestamps and upload it as captions on YouTube, Vimeo, or any video editor for clean replay distribution.' },
        { q: 'What about confidential meeting content?', a: 'Mictoo doesn\'t store files. Audio is sent to our AI provider for transcription and discarded immediately. For meetings with regulated data (HIPAA, GDPR-restricted, classified), check your organization\'s policies on third-party AI services before uploading.' },
        { q: 'What is the maximum Teams recording length?', a: 'Up to 25 MB per file. Most Teams MP4 exports exceed this for meetings over 30 minutes — extract the audio (M4A) first or use a video compressor.' },
      ]}
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom Transcription' },
        { href: '/google-meet-transcription', label: 'Google Meet Transcription' },
        { href: '/meeting-transcription', label: 'Meeting Transcription' },
        { href: '/', label: 'All formats' },
      ]}
    />
  )
}
