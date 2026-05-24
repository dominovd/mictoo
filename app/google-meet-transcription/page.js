import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Google Meet Transcription — Transcribe Meet Recordings Free | Mictoo',
  description:
    'Free Google Meet transcription. Upload your Meet recording from Drive (MP4 or M4A) and get a clean AI transcript in seconds. No signup, works on free Google Workspace.',
  alternates: {
    canonical: 'https://mictoo.com/google-meet-transcription',
    languages: {
      'en': 'https://mictoo.com/google-meet-transcription',
      'fr': 'https://mictoo.com/fr/google-meet-transcription',
      'de': 'https://mictoo.com/de/google-meet-transcription',
      'es': 'https://mictoo.com/es/google-meet-transcription',
      'ru': 'https://mictoo.com/ru/google-meet-transcription',
      'it': 'https://mictoo.com/it/google-meet-transcription',
      'pt': 'https://mictoo.com/pt/google-meet-transcription',
      'pl': 'https://mictoo.com/pl/google-meet-transcription',
      'ja': 'https://mictoo.com/ja/google-meet-transcription',
      'ko': 'https://mictoo.com/ko/google-meet-transcription',
      'x-default': 'https://mictoo.com/google-meet-transcription',
    },
  },
}

export default function GoogleMeetTranscriptionPage() {
  return (
    <LandingLayout
      badge="GOOGLE MEET · MP4 · FREE"
      h1={
        <>
          Google Meet Transcription
          <br />
          <span className="text-brand-600">Transcribe Meet Recordings</span>
        </>
      }
      subtitle="Turn your Google Meet recording into clean text. Drop the MP4 from your Drive, get a transcript in seconds. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Download from Google Drive',
          desc: 'Google Meet recordings save to your Drive in the "Meet Recordings" folder. Download as MP4 (right-click, Download). For long meetings, extract the audio first to save upload time.',
        },
        {
          icon: '⚡',
          title: 'Drop the file',
          desc: 'We pull the audio out of the MP4 and send it to Whisper large-v3. A 30-minute meeting finishes in about a minute.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it in the browser, copy it, or download as TXT or SRT. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Google Meet',
        bullets: [
          {
            title: 'Works on every Workspace tier, including free',
            desc: 'Google Meet recording itself requires a paid tier, but once you have the file, our transcription is free.',
          },
          {
            title: 'Better non-English support',
            desc: 'Google transcription has historically been strongest in English. Whisper large-v3 handles 50+ languages with auto-detect, and is much better with accents, bilingual conversations, and code-switching.',
          },
          {
            title: 'No data goes back to Google',
            desc: 'If you are intentionally avoiding Google ecosystem lock-in for sensitive meetings, transcribing here keeps the text off Google Workspace.',
          },
          {
            title: 'SRT export works in any video editor',
            desc: 'Google transcription gives you text inside Docs. Ours exports clean SRT, ready for Premiere, DaVinci, or YouTube Studio.',
          },
          {
            title: 'Privacy',
            desc: 'The file streams to our transcription provider and is discarded after processing. Nothing is written to our servers.',
          },
        ],
      }}
      useCases={{
        title: 'What people transcribe Google Meet recordings for',
        items: [
          {
            title: 'Meeting notes that everyone can search',
            desc: 'Drop the transcript into Google Docs or Notion. Past you will not remember what was decided in week 14 of the project. Searchable text helps.',
          },
          {
            title: 'Async catch-up for distributed teams',
            desc: 'People in other time zones who missed the live meeting read the transcript in minutes, instead of watching a 60-minute recording at 1.5x speed.',
          },
          {
            title: 'Customer call review',
            desc: 'Account managers transcribe key client calls and store the text in the CRM. Faster recall, better handoffs.',
          },
          {
            title: 'Webinar and town hall transcripts',
            desc: 'For larger events recorded on Meet, the transcript is what you publish (alongside the recording) for accessibility and searchability.',
          },
          {
            title: '1:1 and performance conversations (for the manager)',
            desc: 'Some managers transcribe their 1:1s to keep notes for follow-up. Useful, but be transparent with the report about why.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for Google Meet transcription',
        tips: [
          {
            title: 'Extract audio from the MP4 before upload',
            desc: 'Meet recordings are 720p video, which is wasted bytes for a transcript. Pull audio only: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. A 1 GB MP4 drops to 25 MB or less.',
          },
          {
            title: 'Download the MP4, do not stream it',
            desc: 'Drive sometimes opens MP4s in the browser viewer. Make sure you actually downloaded the file before trying to upload here. Drive sharing links are not file uploads.',
          },
          {
            title: 'For meetings longer than 60 minutes, split before upload',
            desc: 'Our cap is 60 minutes per file signed in. Cut the audio into chunks first. Transcripts can be concatenated afterwards.',
          },
          {
            title: 'Mute background tabs and apps during the meeting if possible',
            desc: 'A Spotify track playing under your meeting voice ends up in the transcript as random words. Same with notification sounds. Not always fixable post-recording.',
          },
          {
            title: 'Use a real microphone, even a cheap headset',
            desc: 'Laptop built-in mics pick up keyboard typing, fan noise, and room echo. A 20-dollar wired headset transcribes noticeably cleaner.',
          },
          {
            title: 'For shared recordings, check Drive sharing settings before re-uploading anywhere',
            desc: 'If someone shared a Meet recording with you, double-check what you are allowed to do with it before transcribing for external use.',
          },
        ],
      }}
      faq={[
        {
          q: 'Does Mictoo work with Google Meet recordings?',
          a: 'Yes. Download the MP4 from your Drive Meet Recordings folder, then upload here. Audio-only extraction (with ffmpeg or any audio tool) speeds things up for long meetings.',
        },
        {
          q: 'Do I need a paid Google Workspace plan?',
          a: 'You need a paid Workspace plan to record a Meet in the first place. Once you have the recording, transcribing it here is free regardless of your Workspace tier.',
        },
        {
          q: 'Will my recording be uploaded back to Google?',
          a: 'No. The file goes to our transcription provider (Groq, with OpenAI as backup) and is discarded after processing. Nothing goes to Google or any Google service.',
        },
        {
          q: 'How does this compare to Google built-in transcription?',
          a: 'Ours is free and works on every Workspace tier. Google is more convenient if your plan includes it and your meetings are English-only. For non-English, accents, or bilingual meetings, ours is more accurate.',
        },
        {
          q: 'My Meet recording is over 60 MB. What do I do?',
          a: 'Extract audio-only with ffmpeg or any audio tool. A 1 GB video usually drops to under 30 MB as audio. If the audio itself is over 60 MB, split into chunks.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization by default. You will need to add speaker labels manually. For a 4-person meeting with distinct voices, this usually takes 5 minutes.',
        },
        {
          q: 'Does it work with Meet chat messages?',
          a: 'No. Chat messages are saved separately by Google in the Meet recording folder. We only transcribe the audio. Combine the two yourself if you need both.',
        },
        {
          q: 'How accurate is Google Meet transcription?',
          a: 'For clean audio (good mics, no background noise), 90 to 95 percent. Conference room recordings with multiple mics or speakerphones drop to 80 to 90 percent. Names and technical terms often need cleanup.',
        },
        {
          q: 'Can I transcribe a Google Meet livestream?',
          a: 'No. We work with recorded files only, not live streams. Once the stream ends and the recording is saved to Drive, you can download and transcribe.',
        },
        {
          q: 'What languages do you support?',
          a: 'Over 50 languages with auto-detect. For meetings under 5 minutes or files with non-speech intros, pick the language manually for better results.',
        },
        {
          q: 'Can I export to a Google Doc?',
          a: 'We export plain text (TXT) and SRT. Copy and paste into Google Docs. We do not have a direct Drive integration yet.',
        },
        {
          q: 'Does this work for Meet recordings in other Workspace orgs?',
          a: 'If you have access to download the file from your Drive, yes. We treat the file as just an MP4. We do not check or care about its origin.',
        },
      ]}
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom Transcription', desc: 'For Zoom Cloud or local recordings.' },
        { href: '/teams-meeting-transcription', label: 'Teams Meeting Transcription', desc: 'For Microsoft Teams recordings.' },
        { href: '/meeting-transcription', label: 'Meeting Transcription', desc: 'For recordings from other platforms.' },
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'Generic video-to-text page.' },
      ]}
    />
  )
}
