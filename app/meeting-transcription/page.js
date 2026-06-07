import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Meeting Transcription: Any Platform, Any Recording, Free Online | Mictoo',
  description:
    'A platform-agnostic meeting transcription tool. Zoom, Teams, Meet, Webex, Loom, or a phone call recording, drop any meeting file and get a clean transcript with summary.',
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
  openGraph: {
    title: 'Meeting Transcription: Any Platform | Mictoo',
    description: 'Drop any meeting recording. Transcript and summary in under a minute.',
    url: 'https://mictoo.com/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Transcription: Any Platform',
    description: 'Drop any meeting recording, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function MeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="Any platform · MP4/M4A/MP3 · Free"
      h1={<>Meeting Transcription<br /><span className="text-brand-600">Any platform, any recording</span></>}
      subtitle="A single page for any meeting recording, regardless of where it was made. Zoom, Teams, Meet, Webex, Loom, Riverside, or a screen capture from a phone call, drop the file and get a transcript with timestamps, summary, and exports."
      valueBlock={
        <article className="prose-content">
          <p>
            Most meeting-transcription tools are built around one
            platform: a Zoom bot, a Teams add-in, a Meet Workspace
            feature. Useful if all your meetings live on one platform.
            Awkward if your week includes a Zoom client call, a Teams
            internal meeting, a Meet recording from a partner, and a
            Loom from a vendor.
          </p>
          <p>
            Mictoo does not care which platform produced the recording.
            It takes audio and video files (MP4, M4A, MP3, WAV, WebM,
            FLAC, OGG, AAC, MOV), extracts the audio if needed, and
            returns a transcript. The same workflow regardless of the
            source.
          </p>
          <p className="text-sm text-slate-500">
            Need platform-specific help? See <a href="/zoom-transcription" className="text-brand-600 hover:underline">Zoom</a>, <a href="/google-meet-transcription" className="text-brand-600 hover:underline">Google Meet</a>, or <a href="/teams-meeting-transcription" className="text-brand-600 hover:underline">Microsoft Teams</a> pages for download and workflow specifics.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📥',
          title: 'Get the recording, regardless of platform',
          desc: 'Zoom Cloud or Local, Teams from OneDrive/SharePoint, Meet from Drive, Webex from your saved location, Loom download, any screen recorder output. We accept the file.',
        },
        {
          icon: '⚡',
          title: 'Whisper transcribes the audio',
          desc: 'We strip video tracks from MP4/MOV/WebM and feed the audio to Whisper large-v3. A 45-minute meeting finishes in 45-60 seconds.',
        },
        {
          icon: '📝',
          title: 'Edit and ship the transcript anywhere',
          desc: 'Inline editing for wrong names. Export TXT, SRT, VTT, or DOCX. The AI summary appears alongside, ready to paste into a recap email or doc.',
        },
      ]}
      whyUse={{
        title: 'Why a platform-agnostic transcription tool helps',
        bullets: [
          {
            title: 'One workflow regardless of source',
            desc: 'You do not need to remember which transcription service handles Zoom vs Teams vs Meet. Same upload page, same export formats, same AI summary. Useful when your week crosses multiple platforms.',
          },
          {
            title: 'No platform-specific subscription',
            desc: 'Zoom AI Companion, M365 Copilot, Workspace transcripts each require a plan tier or add-on at $10-30 per user per month. Mictoo gives you transcription for free, no per-platform license.',
          },
          {
            title: 'Works for legacy recordings from any platform',
            desc: 'Old Zoom Cloud Recordings, Teams meetings from before transcription was enabled, Webex sessions, Meet calls from free accounts: all transcribe the same way. The recording is the source of truth.',
          },
          {
            title: 'Portable exports, not locked in a vendor portal',
            desc: 'Built-in transcription tools save to the vendor ecosystem (Zoom portal, Teams Stream, Drive Docs). Mictoo gives you TXT, SRT, VTT, DOCX files you can paste anywhere.',
          },
          {
            title: 'No bot, no calendar OAuth, no participant added',
            desc: 'You record the meeting yourself (with whatever platform built-in recording you have), then upload here afterward. No third-party assistant joining the call.',
          },
        ],
      }}
      useCases={{
        title: 'Real situations where platform-agnostic helps',
        items: [
          {
            title: 'External client uses a different platform',
            desc: 'Your team is on Teams, the client wants to use Zoom or Meet. Record on whatever they prefer, transcribe here regardless. No need to set up transcription on each external platform.',
          },
          {
            title: 'Multi-platform week typical for consultants',
            desc: 'Consultants and freelancers often have client meetings on every major platform. One transcription tool covers Zoom morning call, Teams afternoon workshop, Meet vendor sync. Less context-switching.',
          },
          {
            title: 'Phone call recording from a screen recorder',
            desc: 'A WhatsApp or FaceTime audio call, recorded with QuickTime or Audacity. Not a Zoom, not a Teams, not a Meet, but still a meeting recording. Transcribe here.',
          },
          {
            title: 'Webinar attended on Webex or another rare platform',
            desc: 'Webex, GoToMeeting, BlueJeans, Riverside.fm, Squadcast: not the big three, but recordings still need transcribing. Whatever MP4 or M4A the platform produced, Mictoo handles it.',
          },
          {
            title: 'Historical meetings before adopting platform-specific transcription',
            desc: 'Years of past meetings in a folder somewhere. Backfilling transcripts retroactively without setting up tenant-wide policies in M365 or Workspace.',
          },
          {
            title: 'Cross-functional meetings with external attendees',
            desc: 'Some attendees on M365, some on Workspace, some on personal accounts. Built-in transcripts may not cover external participants. Mictoo transcribes whatever audio you captured.',
          },
        ],
      }}
      proTips={{
        title: 'Tips for handling any meeting recording',
        tips: [
          {
            title: 'Audio-only files are faster to upload',
            desc: 'Most platforms offer audio-only export alongside video. Zoom Cloud Recording includes an audio_only.m4a. Teams and Meet require you to extract audio yourself with ffmpeg. Audio is 10-20x smaller than video for the same transcription.',
          },
          {
            title: 'For 60+ MB files, extract audio with ffmpeg first',
            desc: 'One-liner: ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a. Strips video, downsamples to 16 kHz mono. The audio file is small enough to upload and identical for transcription.',
          },
          {
            title: 'Check the participant consent before uploading',
            desc: 'Recording a meeting requires consent in many jurisdictions. Mictoo does not check this; we trust the upload. For external client calls and sensitive contexts, confirm you have the right to transcribe.',
          },
          {
            title: 'Set the language manually for non-English meetings',
            desc: 'Whisper auto-detects language but can mis-fire on the first few seconds of silence or non-speech intro. For non-English meetings, pick the language in the dropdown before uploading for cleaner detection.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>The platform-specific transcription landscape, briefly</h2>
          <p>
            Each major meeting platform has its own built-in
            transcription offering, each with its own plan requirements,
            language coverage, and export limitations. Knowing the
            landscape helps you decide when to use built-in and when to
            use a tool like Mictoo.
          </p>
          <h3>Zoom</h3>
          <p>
            Zoom AI Companion provides live transcription on Pro,
            Business, and Enterprise plans. Free Zoom has no
            transcription. The transcript lives in the Zoom web portal.
            For free Zoom users or anyone wanting a portable transcript,
            Mictoo is the practical option.
          </p>
          <h3>Microsoft Teams</h3>
          <p>
            Teams transcription requires admin enablement at the tenant
            level plus the meeting host turning it on at meeting start.
            Transcripts go into Microsoft 365 Stream. M365 Copilot
            ($30/user/month) adds AI summaries and meeting insights on
            top. For tenants without Copilot or recordings from before
            transcription was on, Mictoo covers the gap.
          </p>
          <h3>Google Meet</h3>
          <p>
            Meet recording is a Workspace feature (Business Standard
            and up). Auto-transcripts as Google Docs are on Business
            Plus and Enterprise. Free Meet has no recording and no
            transcript. Workspace users get a transcript in Drive;
            everyone else needs a tool like Mictoo plus a screen
            recorder to capture the meeting.
          </p>
          <h3>Webex and others</h3>
          <p>
            Webex offers transcription on its higher-tier business
            plans. GoToMeeting, BlueJeans (since shutdown), and other
            smaller platforms have varying offerings. For any of these,
            the recording (MP4 or audio-only) is what you start with;
            Mictoo handles the rest the same way.
          </p>
          <h3>The async tools: Loom, Riverside, Riverfm</h3>
          <p>
            Some async-video and remote-recording tools include
            transcription as part of their paid plans. Riverside (since
            renamed) bundles transcription with their recording
            workflow. Loom includes auto-captioning on paid tiers. For
            users on free tiers of these tools, the recording downloads
            as MP4 or WebM, ready for Mictoo.
          </p>
          <h3>Why a single tool helps across all of them</h3>
          <p>
            Every platform optimises for its own ecosystem. The
            transcripts go to that platform default location, in that
            platform format, accessible to that platform users. The
            moment your workflow crosses a platform boundary (sending
            a transcript to an external client, archiving across
            platforms in one place, providing transcripts as a
            deliverable), a platform-agnostic tool removes friction.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Which meeting platforms does Mictoo support?',
          a: 'Any platform that produces an audio or video recording. Zoom, Teams, Meet, Webex, Loom, Riverside, GoToMeeting, BlueJeans (legacy archives), and screen recordings from QuickTime, OBS, Windows Game Bar, or any other recorder. The file is what matters, not the platform that made it.',
        },
        {
          q: 'What file formats can I upload?',
          a: 'MP4, MOV, WebM (video files, we strip the video and transcribe the audio), M4A, MP3, WAV, FLAC, OGG, AAC (audio files, transcribed directly). Up to 60 MB on the free tier.',
        },
        {
          q: 'How is this different from using Zoom AI Companion or Teams transcription?',
          a: 'Built-in transcription is tied to platform plans and works for new meetings on supported tiers. Mictoo works on the recording file regardless of platform, regardless of plan, and regardless of whether transcription was enabled at meeting start. Useful for cross-platform workflows and historical recordings.',
        },
        {
          q: 'Do I need to grant access to my Zoom, Teams, or Google account?',
          a: 'No. Mictoo never connects to your meeting platform account. You record the meeting using the platform built-in recording (or a screen recorder), download the file, upload here. No OAuth, no calendar sync, no participant added to your call.',
        },
        {
          q: 'Can I get speaker labels in the transcript?',
          a: 'Not automatically. Whisper does not identify speakers out of the box. For workflows where attribution matters, use the platform built-in transcription (Zoom AI Companion, Teams transcripts), which uses account context to label speakers. Diarization is on the Mictoo Pro tier roadmap.',
        },
        {
          q: 'Can I get an AI summary of the meeting?',
          a: 'Yes. The AI summary appears alongside the transcript automatically after transcription finishes. Useful for meeting recaps without paying for M365 Copilot or Zoom AI Companion.',
        },
        {
          q: 'My recording is over 60 MB. What now?',
          a: 'Most video meeting recordings need audio extraction first. Use ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a to drop the file size 10-20x with no transcript quality loss.',
        },
        {
          q: 'Can I export captions for the recording?',
          a: 'Yes. SRT and VTT formats with timestamps aligned to the original audio. Drop into YouTube, Vimeo, your video editor, or upload back to the meeting platform alongside the recording.',
        },
        {
          q: 'How long does a typical meeting transcription take?',
          a: 'A 30-minute audio-only file finishes in 30-50 seconds. A 60-minute meeting finishes in 60-90 seconds. Upload speed is often the longer step for large files.',
        },
        {
          q: 'Does Mictoo store my meeting recording?',
          a: 'No. The audio is streamed to the transcription provider, processed once, and dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and add it to your history.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your meeting recording, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Zoom, Teams, Meet, Webex, Loom, or any screen-recorded call. Same workflow regardless of source.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a meeting now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'Zoom-specific Cloud and Local recording workflow.' },
        { href: '/google-meet-transcription', label: 'Google Meet transcription', desc: 'Meet recording from Drive, Workspace context.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'Teams recording from OneDrive/SharePoint.' },
        { href: '/business-transcription', label: 'Business transcription', desc: 'For internal company meetings and exec briefings.' },
      ]}
    />
  )
}
