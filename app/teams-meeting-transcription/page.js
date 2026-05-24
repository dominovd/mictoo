import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Teams Meeting Transcription — Transcribe Microsoft Teams Recordings | Mictoo',
  description:
    'Free Microsoft Teams transcription. Upload your Teams recording (MP4) from OneDrive or SharePoint and get a clean AI transcript in seconds. No signup.',
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
      'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
      'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
      'x-default': 'https://mictoo.com/teams-meeting-transcription',
    },
  },
}

export default function TeamsMeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="TEAMS · ONEDRIVE · FREE"
      h1={
        <>
          Microsoft Teams Meeting Transcription
          <br />
          <span className="text-brand-600">Free Teams Recording to Text</span>
        </>
      }
      subtitle="Turn your Teams recording into clean text. Drop the MP4 from OneDrive or SharePoint, get a transcript in seconds. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Download from OneDrive or SharePoint',
          desc: 'Teams recordings save to the organizer OneDrive (for non-channel meetings) or to the SharePoint site (for channel meetings). Download as MP4. For long meetings, extract audio first.',
        },
        {
          icon: '⚡',
          title: 'Drop the file',
          desc: 'We pull the audio out of the MP4 and send it to Whisper large-v3. A 30-minute meeting finishes in about a minute.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it in the browser, copy it, or download as TXT or SRT. Fix any wrong words or jargon inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Teams meetings',
        bullets: [
          {
            title: 'Works without a Microsoft 365 license entry for transcription',
            desc: 'As long as you have the recording file, you can transcribe it here. No need for Teams Premium or specific Office plans.',
          },
          {
            title: 'Stronger non-English and accent coverage',
            desc: 'Microsoft Teams transcription works well in English and the major Western European languages. Whisper large-v3 covers 50+ languages with stronger handling of accents and bilingual conversations.',
          },
          {
            title: 'Free, no per-minute meter',
            desc: 'Teams transcription is bundled with your license but capped by feature gates. Mictoo has no per-meeting cap and no monthly minute limit.',
          },
          {
            title: 'SRT export for video editors',
            desc: 'The Teams transcript lives in the Teams app or downloads as VTT. We export both TXT and clean SRT, drop-in compatible with Premiere, DaVinci, CapCut, and YouTube Studio.',
          },
          {
            title: 'Privacy by default',
            desc: 'The file streams to the transcription provider, gets processed, and is discarded. We do not retain your meeting audio.',
          },
        ],
      }}
      useCases={{
        title: 'What people transcribe Teams meetings for',
        items: [
          {
            title: 'Project meeting minutes',
            desc: 'Drop the transcript into Confluence, Notion, or a SharePoint page. People who missed the call read the text in 5 minutes instead of watching 60 minutes of video.',
          },
          {
            title: 'Customer call review for account teams',
            desc: 'Save the transcript next to the deal in Salesforce, Dynamics, or HubSpot. Quote retrieval for follow-up emails takes seconds.',
          },
          {
            title: 'Cross-team decisions log',
            desc: 'Big decisions made on Teams calls get summarized in the transcript. Useful for governance and audit trails.',
          },
          {
            title: 'Vendor and contractor calls',
            desc: 'When a project involves external parties, the transcript is the unambiguous record of what was agreed.',
          },
          {
            title: 'Compliance and regulated industries',
            desc: 'Some sectors require recordkeeping of certain conversations. Transcripts make audio recordings searchable and indexable.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for Teams transcription',
        tips: [
          {
            title: 'Extract audio from the MP4 before upload',
            desc: 'Teams MP4s are 720p or 1080p video, which is irrelevant for transcription. Pull audio only: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. A 1.5 GB MP4 drops to 30 MB or less.',
          },
          {
            title: 'Download from OneDrive or SharePoint, do not stream',
            desc: 'OneDrive sometimes plays MP4s in the browser. Make sure you actually downloaded the file before trying to upload here. SharePoint sharing links are not the same as the file itself.',
          },
          {
            title: 'For meetings over 60 minutes, split before upload',
            desc: 'Cut into 30 or 45-minute chunks first. The transcripts can be concatenated. Long Teams calls are common and worth handling carefully.',
          },
          {
            title: 'Mute background notifications during the meeting if you can',
            desc: 'Outlook desktop notifications and Teams chat sounds during the call end up in the audio and sometimes in the transcript. Use Focus Assist on Windows or Do Not Disturb on Mac.',
          },
          {
            title: 'Conference room mics need cleanup',
            desc: 'Teams Rooms with ceiling mics have variable audio quality. Echo and far-field pickup hurt accuracy. Adobe Podcast Enhance (free web tool) can help with these recordings before upload.',
          },
          {
            title: 'For confidential meetings, avoid uploading to anywhere external',
            desc: 'That includes us. For HR, legal, or board conversations, prefer on-premise transcription. Our service is for non-confidential meetings where AI cloud processing is acceptable.',
          },
        ],
      }}
      faq={[
        {
          q: 'Does Mictoo work with Microsoft Teams recordings?',
          a: 'Yes. Download the MP4 from OneDrive (your organizer OneDrive for non-channel meetings) or from the SharePoint channel site. Upload to Mictoo. Audio extraction first speeds it up for long meetings.',
        },
        {
          q: 'Do I need Teams Premium or a specific Microsoft 365 plan?',
          a: 'You need a plan that lets you record meetings. Once the recording is in OneDrive or SharePoint, transcription here is free regardless of your license.',
        },
        {
          q: 'Will my recording be uploaded to Microsoft?',
          a: 'No. The file goes to our transcription provider (Groq, with OpenAI as backup) and is discarded after processing. Nothing goes to Microsoft, Outlook, or any Microsoft service.',
        },
        {
          q: 'How does this compare to Teams built-in transcription?',
          a: 'Teams transcription is fine for English meetings if your license includes it. Ours is free, works on more languages and accents, and exports clean SRT for video editors. Use whichever suits the meeting.',
        },
        {
          q: 'My Teams recording is over 60 MB. What do I do?',
          a: 'Extract audio-only with ffmpeg or any audio tool. A 1.5 GB Teams MP4 drops to under 30 MB as audio. If the audio is still over 60 MB, split into chunks.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. For a meeting with distinct voices, you can add speaker labels manually based on the conversation. If your meeting was recorded with separate audio tracks (rare for Teams), upload each track separately for clean attribution.',
        },
        {
          q: 'Does it work with Teams chat messages?',
          a: 'No. Chat messages stay in Teams. We only transcribe the audio. Combine the two yourself if you need both.',
        },
        {
          q: 'How accurate is Teams transcription?',
          a: 'For meetings with good mics (laptop with USB headset), 90 to 95 percent. For meetings in conference rooms with ceiling mics, 80 to 90 percent. Names, technical terms, and acronyms often need cleanup.',
        },
        {
          q: 'Can I transcribe a Teams meeting in real time?',
          a: 'No. We work with recorded files. For real-time transcription during the meeting, use Teams own live captions or transcript feature.',
        },
        {
          q: 'What languages do you support?',
          a: 'Over 50 languages with auto-detect. For meetings under 5 minutes or files with non-speech intros (waiting room music, hold tones), pick the language manually.',
        },
        {
          q: 'Can I export the transcript to a Word document or OneDrive?',
          a: 'We export plain text (TXT) and SRT. Copy and paste into Word, or upload the TXT to OneDrive yourself. We do not have a Microsoft 365 integration yet.',
        },
        {
          q: 'Is this GDPR compliant for European Teams meetings?',
          a: 'We do not store the audio or the transcript on our servers after the page closes. We are based in Europe, and our providers (Groq US, OpenAI US) have data processing agreements in place. For specific compliance questions, see our Privacy Policy or email info@mictoo.com.',
        },
      ]}
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom Transcription', desc: 'For Zoom Cloud or local recordings.' },
        { href: '/google-meet-transcription', label: 'Google Meet Transcription', desc: 'For Google Meet recordings.' },
        { href: '/meeting-transcription', label: 'Meeting Transcription', desc: 'For recordings from other platforms.' },
        { href: '/business-transcription', label: 'Business Transcription', desc: 'For sales calls, interviews, and other business audio.' },
      ]}
    />
  )
}
