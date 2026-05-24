import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Zoom Transcription — Transcribe Zoom Recordings Free | Mictoo',
  description:
    'Free Zoom transcription. Upload your Zoom Cloud Recording (MP4) or local recording (M4A) and get an accurate AI transcript in seconds. No signup, no per-minute fee.',
  alternates: {
    canonical: 'https://mictoo.com/zoom-transcription',
    languages: {
      'en': 'https://mictoo.com/zoom-transcription',
      'fr': 'https://mictoo.com/fr/zoom-transcription',
      'de': 'https://mictoo.com/de/zoom-transcription',
      'es': 'https://mictoo.com/es/zoom-transcription',
      'ru': 'https://mictoo.com/ru/zoom-transcription',
      'it': 'https://mictoo.com/it/zoom-transcription',
      'pt': 'https://mictoo.com/pt/zoom-transcription',
      'pl': 'https://mictoo.com/pl/zoom-transcription',
      'ja': 'https://mictoo.com/ja/zoom-transcription',
      'ko': 'https://mictoo.com/ko/zoom-transcription',
      'x-default': 'https://mictoo.com/zoom-transcription',
    },
  },
}

export default function ZoomTranscriptionPage() {
  return (
    <LandingLayout
      badge="ZOOM · MP4 · M4A · FREE"
      h1={
        <>
          Zoom Transcription
          <br />
          <span className="text-brand-600">Turn Zoom Recordings into Text</span>
        </>
      }
      subtitle="Turn your Zoom recording into clean text. Cloud Recording MP4 or local M4A, both work. Drop the file, get the transcript in seconds."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Export your Zoom recording',
          desc: 'Cloud recordings download as MP4 (video plus audio) or M4A (audio only). Local recordings are saved on your machine as MP4 plus M4A. Either format works here.',
        },
        {
          icon: '⚡',
          title: 'Drop the file',
          desc: 'Drag it in. We pull the audio (if it is video) and send it to Whisper large-v3. A 30-minute meeting usually finishes in under a minute.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it, copy it, or download as TXT or SRT. Fix any wrong names or jargon inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Zoom recordings',
        bullets: [
          {
            title: 'Works on every Zoom plan, including free',
            desc: 'Zoom transcription is gated to certain paid tiers. Ours has no Zoom plan requirement. Record, download, upload, done.',
          },
          {
            title: 'Better with non-native English and code-switching',
            desc: 'Whisper large-v3 handles accents and bilingual meetings better than Zoom built-in transcription, which has historically been English-first.',
          },
          {
            title: 'Audio-only M4A is small enough to upload directly',
            desc: 'Most 30-minute Zoom meetings end up around 15 to 25 MB as M4A. Fits comfortably in our free tier without any compression.',
          },
          {
            title: 'No 14-day retention concern',
            desc: 'Zoom Cloud Recordings can disappear after 14 to 30 days depending on plan. Once you have the file downloaded and transcribed here, it is yours forever.',
          },
          {
            title: 'Privacy',
            desc: 'The file streams to our transcription provider and is discarded. We do not write the Zoom recording to our database or object storage.',
          },
        ],
      }}
      useCases={{
        title: 'What people transcribe Zoom recordings for',
        items: [
          {
            title: 'Internal meeting minutes',
            desc: 'Run the recording through, get the text, paste into Notion or Confluence. People who missed the meeting catch up in five minutes of reading instead of an hour of video.',
          },
          {
            title: 'Client and sales calls',
            desc: 'Save the transcript to your CRM next to the deal. Future you, six months later, will thank you.',
          },
          {
            title: 'Async standups for distributed teams',
            desc: 'Some teams record async standups instead of doing live meetings. Transcripts make them searchable and skimmable.',
          },
          {
            title: 'Research interviews',
            desc: 'Qualitative research, user interviews, candidate screening calls. The text version is what you actually code and tag, not the video.',
          },
          {
            title: 'Webinar and panel transcripts',
            desc: 'Post the transcript with the recording for accessibility and SEO. Search engines index the transcript text but not the video.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for Zoom transcription',
        tips: [
          {
            title: 'Download the audio-only M4A, not the MP4',
            desc: 'Zoom Cloud Recording offers both. The M4A is one-tenth the size of the MP4 with identical audio quality. Faster upload, well under our 60 MB cap for most meetings.',
          },
          {
            title: 'Enable "Record a separate audio file for each participant" for multi-speaker meetings',
            desc: 'Under Zoom Settings, Recording. This gives you one M4A per speaker. Transcribe each separately for clean speaker attribution, no diarization needed.',
          },
          {
            title: 'Mute participants who are not speaking',
            desc: 'Background noise from open mics during a presentation produces phantom words in the transcript. Worth enforcing in big calls.',
          },
          {
            title: 'Local recording vs Cloud recording quality is the same',
            desc: 'Both record at the same audio settings by default. Local is faster (no upload to Zoom first) but takes disk space.',
          },
          {
            title: 'For sensitive content, use local recording',
            desc: 'Cloud recording stores your meeting on Zoom servers. Local recording stays on your machine until you choose where to send it. For client confidential or HR conversations, local then direct to us is the privacy-preserving path.',
          },
          {
            title: 'Long Zoom meetings (over 60 minutes) need splitting',
            desc: 'Our per-file cap is 60 minutes signed in. For a 90-minute call, split into two 45-minute chunks. Easy in Audacity (File, Export, Multiple) or with ffmpeg.',
          },
        ],
      }}
      faq={[
        {
          q: 'Does Mictoo work with Zoom Cloud Recordings?',
          a: 'Yes. Download the MP4 or M4A from your Zoom recording library, then upload to Mictoo. The M4A audio-only export is faster and smaller.',
        },
        {
          q: 'Does it work with Zoom Phone call recordings?',
          a: 'Yes. Zoom Phone records as MP3 or M4A. Both work. Phone-quality audio (8 kHz mono) transcribes slightly less accurately than video meeting audio, but the result is still readable.',
        },
        {
          q: 'What about Zoom local recordings?',
          a: 'Same story. Zoom saves them as MP4 plus M4A in your default Zoom folder. Drop the M4A here.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. If you enabled "Record a separate audio file for each participant" in Zoom settings, you can transcribe each speaker file separately. Otherwise, you will need to add speaker labels manually based on conversation flow.',
        },
        {
          q: 'My Zoom recording is over 60 MB. What do I do?',
          a: 'Use the audio-only M4A download instead of the MP4. If it is still too big, split into chunks or re-encode at lower bitrate. See our compression and splitting guides.',
        },
        {
          q: 'How does Mictoo compare to Zoom built-in transcription?',
          a: 'We are better on accuracy for non-native English, better on accents, and have stronger language coverage (50+ languages). Zoom built-in transcription is more convenient if you are already paying for the right Zoom plan. Ours is free and works regardless of your Zoom tier.',
        },
        {
          q: 'Is my Zoom recording stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets transcribed, then is discarded. We do not write the recording to disk.',
        },
        {
          q: 'Can I transcribe a Zoom meeting in real time?',
          a: 'No. We work with recorded files only. For real-time transcription during the meeting, Zoom built-in tool or a dedicated meeting assistant would be the right choice.',
        },
        {
          q: 'What about Zoom webinars and large meetings?',
          a: 'Same workflow. Download the recording, upload, transcribe. For very long webinars (over 60 minutes), split first.',
        },
        {
          q: 'Will it transcribe chat messages from the meeting?',
          a: 'No. Chat messages are saved separately by Zoom (as a TXT file in your Zoom folder). We only transcribe the audio. Combine the two yourself if you need both.',
        },
        {
          q: 'How accurate is Zoom audio transcription?',
          a: 'For clean meeting audio with good mics, expect 90 to 95 percent accuracy. For meetings with bad audio (laptop mic, noisy room, weak Wi-Fi), accuracy drops a bit. Names and technical terms often need cleanup.',
        },
        {
          q: 'Does this work for Microsoft Teams or Google Meet recordings too?',
          a: 'Yes, same engine. We have dedicated pages for Google Meet and Microsoft Teams.',
        },
      ]}
      relatedLinks={[
        { href: '/google-meet-transcription', label: 'Google Meet Transcription', desc: 'Same workflow for Google Meet recordings.' },
        { href: '/teams-meeting-transcription', label: 'Teams Meeting Transcription', desc: 'For Microsoft Teams recordings.' },
        { href: '/meeting-transcription', label: 'Meeting Transcription', desc: 'Generic meeting page if your recording is from somewhere else.' },
        { href: '/interview-transcription', label: 'Interview Transcription', desc: 'For one-on-one calls and qualitative interviews.' },
      ]}
    />
  )
}
