import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Meeting Transcription — Free AI Transcript for Calls & Meetings | Mictoo',
  description:
    'Free meeting transcription with AI. Upload any meeting recording (from any platform) and get clean text in seconds. No signup, no per-minute fee, 50+ languages.',
  alternates: {
    canonical: 'https://mictoo.com/meeting-transcription',
    languages: {
      'en': 'https://mictoo.com/meeting-transcription',
      'fr': 'https://mictoo.com/fr/meeting-transcription',
      'de': 'https://mictoo.com/de/meeting-transcription',
      'es': 'https://mictoo.com/es/meeting-transcription',
      'ru': 'https://mictoo.com/ru/meeting-transcription',
      'it': 'https://mictoo.com/it/meeting-transcription',
      'pt': 'https://mictoo.com/pt/meeting-transcription',
      'pl': 'https://mictoo.com/pl/meeting-transcription',
      'ja': 'https://mictoo.com/ja/meeting-transcription',
      'ko': 'https://mictoo.com/ko/meeting-transcription',
      'x-default': 'https://mictoo.com/meeting-transcription',
    },
  },
}

export default function MeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="Any platform · Free · 50+ languages"
      h1={
        <>
          Meeting Transcription
          <br />
          <span className="text-brand-600">Free AI Meeting Transcripts</span>
        </>
      }
      subtitle="Turn any meeting recording into clean text. Works with Zoom, Meet, Teams, Webex, Discord, Skype, voice recorders, anything. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Get the meeting recording',
          desc: 'Whatever platform you used (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, in-person voice recorder), export the recording as MP4, MP3, M4A, WAV, FLAC, or OGG.',
        },
        {
          icon: '⚡',
          title: 'Drop the file',
          desc: 'We extract audio if needed and send it to Whisper large-v3. A 30-minute meeting finishes in about a minute.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it, copy it, or download as TXT or SRT. Fix any wrong words or jargon inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for meetings',
        bullets: [
          {
            title: 'Source platform does not matter',
            desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, in-person recorders. If you have the file, we transcribe it.',
          },
          {
            title: 'One model across all your meetings',
            desc: 'Same Whisper large-v3 for the sales call you recorded on Zoom and the team retro you captured on Teams. Consistent accuracy, consistent output format.',
          },
          {
            title: 'Free with no per-minute meter',
            desc: 'Most meeting-tool transcription is bundled with a license tier that has its own cost. Ours is genuinely free, no monthly cap.',
          },
          {
            title: '50+ languages',
            desc: 'Cross-border meetings, bilingual conversations, international teams. Whisper handles all of them with auto-detect or manual language selection.',
          },
          {
            title: 'Nothing is stored',
            desc: 'The file streams to the transcription provider and is discarded. We do not write your meeting audio to our servers.',
          },
          {
            title: 'AI summary with action items, free',
            desc: 'After every meeting transcript we generate a GPT summary plus the action items mentioned. The thing meeting-notes apps charge 15-20 dollars a month for. Included with every upload.',
          },
        ],
      }}
      useCases={{
        title: 'Common meeting types people transcribe',
        items: [
          {
            title: 'Team standups and retros',
            desc: 'Async teams transcribe standups so people in other time zones can catch up. Retros benefit from a written record for follow-up actions.',
          },
          {
            title: 'Client and customer calls',
            desc: 'Sales calls, account check-ins, customer interviews. Save the transcript to the CRM next to the deal or contact.',
          },
          {
            title: 'Internal training and onboarding sessions',
            desc: 'New hires read the transcript while watching the video. Better retention, searchable later when they forget a step.',
          },
          {
            title: 'Board meetings, leadership offsites, all-hands',
            desc: 'Transcripts make corporate communications more accessible. Useful for employees who could not attend, and for record-keeping.',
          },
          {
            title: 'Interviews and qualitative research',
            desc: 'Whether it is candidate screening, user interviews, or journalism, the transcript is the actual work product.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for meeting transcription',
        tips: [
          {
            title: 'Extract audio if the source is video',
            desc: 'Meeting platforms export MP4 with both audio and video. We only need the audio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 takes a 1 GB MP4 down to 25 MB or less. Faster upload, same transcript.',
          },
          {
            title: 'Make sure everyone has a real microphone',
            desc: 'Laptop built-in mics on a Wi-Fi call produce noisy, echoey audio. A 20-dollar wired USB headset for each participant pays for itself in transcript accuracy.',
          },
          {
            title: 'Mute participants who are not speaking',
            desc: 'Open mics during a presentation pick up keyboard typing, room background noise, and side conversations. Whisper sometimes transcribes those as nonsense words.',
          },
          {
            title: 'For meetings with non-native English speakers, do not split into chunks unnecessarily',
            desc: 'Whisper benefits from longer context for less common phrases. A continuous 30-minute file transcribes better than three 10-minute chunks if you have the choice.',
          },
          {
            title: 'Long meetings split better at natural breaks',
            desc: 'If you have to split a 90-minute meeting into chunks, look for natural pauses (a coffee break, an agenda transition) and split there. Less risk of cutting a sentence in half.',
          },
          {
            title: 'Pick the language manually for short or unusual meetings',
            desc: 'Auto-detect samples the first audio chunk. For meetings that start with on-hold music, a brief greeting, or silence, manual language selection is more reliable.',
          },
        ],
      }}
      faq={[
        {
          q: 'What meeting platforms do you support?',
          a: 'Any platform. We work with the recording file, not the platform. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, in-person voice recorders. If the file is MP4, MP3, M4A, WAV, FLAC, OGG, or WEBM, we transcribe it.',
        },
        {
          q: 'My meeting was on Zoom (or Meet, or Teams). Should I use this page or the platform-specific one?',
          a: 'Same engine, same accuracy. The platform-specific pages give you more targeted tips. Use whichever you find easier.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization out of the box. For a meeting with distinct voices, add speaker labels manually based on the conversation. For meetings with separate audio tracks per speaker (Riverside, SquadCast, sometimes Zoom), transcribe each track separately.',
        },
        {
          q: 'My meeting recording is over 60 MB. What do I do?',
          a: 'Two options. Extract audio-only from the video (one ffmpeg command), or split the meeting into chunks.',
        },
        {
          q: 'How accurate is meeting transcription?',
          a: 'For clean audio (good mics, no background noise), 90 to 95 percent. For conference room mics or speakerphones, 80 to 90 percent. Names and technical terms often need cleanup.',
        },
        {
          q: 'Will my meeting be stored on your servers?',
          a: 'No. The file streams to the transcription provider and is discarded after processing. We do not write your meeting audio or the transcript to our database.',
        },
        {
          q: 'Is meeting transcription on Mictoo GDPR compliant?',
          a: 'We do not retain the audio or the transcript after the page closes. We are based in Europe, and our providers (Groq US, OpenAI US) have data processing agreements. For specific compliance questions, see our Privacy Policy.',
        },
        {
          q: 'Can I get a summary of the meeting, not just the transcript?',
          a: 'Right now we provide the full transcript. For summaries, paste the transcript into ChatGPT or Claude with a prompt like "Summarize this meeting transcript into key decisions and action items".',
        },
        {
          q: 'What languages are supported?',
          a: 'Over 50, with auto-detect. For meetings under 5 minutes or files with non-speech intros, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I transcribe a meeting in real time?',
          a: 'No. We work with recorded files. For real-time transcription, use the meeting platform own live transcription feature or a dedicated meeting assistant.',
        },
        {
          q: 'How do I get the SRT file aligned with my meeting video?',
          a: 'Download the SRT after transcription. Most video editors (Premiere, DaVinci, CapCut, Final Cut) import SRTs that line up automatically as long as the audio in the video matches what you transcribed.',
        },
        {
          q: 'Can I transcribe confidential meetings?',
          a: 'For confidential meetings (HR, legal, M&A, board), be cautious about any cloud transcription service. Our file is not stored, but it does pass through a third-party speech provider for processing. For maximum privacy, use a local Whisper installation instead.',
        },
      ]}
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom Transcription', desc: 'Zoom-specific tips and export workflow.' },
        { href: '/google-meet-transcription', label: 'Google Meet Transcription', desc: 'For Google Meet recordings.' },
        { href: '/teams-meeting-transcription', label: 'Teams Meeting Transcription', desc: 'For Microsoft Teams recordings.' },
        { href: '/business-transcription', label: 'Business Transcription', desc: 'For client calls, conferences, and sales call workflows.' },
      ]}
    />
  )
}
