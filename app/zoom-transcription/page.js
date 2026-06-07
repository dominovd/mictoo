import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Zoom Transcription: Turn Cloud and Local Recordings into Editable Text | Mictoo',
  description:
    'Drop your Zoom Cloud Recording or Local Recording MP4 and get a clean transcript with timestamps, summary, and exports. Works with or without Zoom AI Companion.',
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
  openGraph: {
    title: 'Zoom Transcription: Cloud and Local Recordings | Mictoo',
    description: 'Drop your Zoom recording and get a transcript with summary in under a minute.',
    url: 'https://mictoo.com/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoom Transcription: Cloud and Local Recordings',
    description: 'Drop your Zoom recording, get a transcript with summary.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ZoomTranscriptionPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · Cloud or Local Recording"
      h1={<>Zoom Transcription<br /><span className="text-brand-600">From Cloud or Local recording to clean text</span></>}
      subtitle="Drop a Zoom Cloud Recording MP4 or a Local Recording from your computer. The transcript comes back with timestamps you can click, an AI summary in the sidebar, and exports for TXT, SRT, VTT, and DOCX."
      valueBlock={
        <article className="prose-content">
          <p>
            Zoom records meetings in two places: the cloud (if your plan
            allows it) and locally on the host computer. Either way, the
            output is an MP4 with the meeting audio inside, plus a few
            other files (chat log, gallery view video, audio-only M4A).
            Drop any of them here and we will return the transcript.
          </p>
          <p>
            Zoom AI Companion does its own live transcription during the
            meeting, but that transcript is locked inside the Zoom web
            portal and limited to certain plans. If you need the
            transcript as a portable file, want to feed it into your own
            workflow, or recorded without AI Companion enabled, this
            page is the simpler path.
          </p>
          <p className="text-sm text-slate-500">
            Free for files up to 60 MB. A typical Zoom Cloud Recording
            audio-only M4A of an hour-long meeting is around 25 MB.
            Larger gallery-view video files may need splitting first; see
            <a href="/how-to-compress-audio" className="text-brand-600 hover:underline ml-1">how to compress audio</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📥',
          title: 'Get the Zoom recording',
          desc: 'Cloud recordings download from zoom.us/recording, local recordings live in the Zoom folder on your computer (Documents/Zoom/[meeting_id]). Audio-only M4A is the smallest and uploads fastest.',
        },
        {
          icon: '⚡',
          title: 'Transcribe with Whisper large-v3',
          desc: 'We accept MP4 (video plus audio) and M4A (audio only). For video files we strip the video and transcribe just the audio. A 45-minute meeting usually finishes in 45-60 seconds.',
        },
        {
          icon: '📝',
          title: 'Edit, export, share',
          desc: 'Fix wrong names inline. Download TXT for the plain text, SRT/VTT for captions on the recording, DOCX for a Word doc. Or copy the AI summary straight into a meeting recap email.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for Zoom recordings',
        bullets: [
          {
            title: 'Works for any Zoom plan',
            desc: 'Zoom AI Companion transcription requires specific paid plans (Pro, Business, Enterprise). Mictoo works with the recording itself, regardless of which Zoom plan produced it. Useful for one-off recordings, external accounts, or after a plan downgrade.',
          },
          {
            title: 'Cloud Recording, Local Recording, audio-only, all accepted',
            desc: 'Drop the MP4 gallery-view, the speaker-view, or the audio-only M4A from a Cloud Recording. Or the .mp4 from a Local Recording in your Documents/Zoom folder. We extract the audio track and transcribe the same way.',
          },
          {
            title: 'Portable transcript, not locked in a vendor portal',
            desc: 'The transcript is yours to download as TXT, SRT, VTT, or DOCX. No Zoom account required to access it later, no portal to navigate, no per-seat license to maintain just to read meetings you already recorded.',
          },
          {
            title: 'AI summary built into the same workflow',
            desc: 'Once the transcript finishes, an AI summary appears alongside. Useful for sending a meeting recap to people who could not attend, or for capturing the gist without reading the full hour of text.',
          },
          {
            title: 'No bot in the meeting',
            desc: 'You record with Zoom built-in recording (Cloud or Local), then upload here afterward. No third-party assistant joining the call, no calendar OAuth, no participant added to the participant list.',
          },
        ],
      }}
      useCases={{
        title: 'Where Zoom recordings come from',
        items: [
          {
            title: 'Sales discovery calls',
            desc: 'Cloud Recording the external sales call, transcribing afterward to capture key quotes for the deal notes and the CRM. Faster than typing notes during the call.',
          },
          {
            title: 'Customer support escalations',
            desc: 'Recording a support call so the engineering team can review the customer description verbatim, with the transcript as the searchable record.',
          },
          {
            title: 'User research interviews',
            desc: 'UX researchers recording 30-60 minute user interviews on Zoom. Transcript becomes the source of pull quotes, themes, and journey insights without listening to the audio twice.',
          },
          {
            title: 'Webinars and virtual events',
            desc: 'Hosted a Zoom Webinar, want a transcript for show notes, accessibility, or content repurposing into a blog post. Drop the MP4, get the full text.',
          },
          {
            title: 'All-hands meetings and town halls',
            desc: 'Recording a company-wide meeting for people in other timezones. Transcript plus AI summary is faster to skim than watching the 60-minute replay.',
          },
          {
            title: 'External interviews and podcast recordings',
            desc: 'Many podcasters use Zoom as their interview platform. The Cloud Recording is the source. Transcript becomes show notes and episode pages.',
          },
        ],
      }}
      proTips={{
        title: 'Zoom-specific tips that save time',
        tips: [
          {
            title: 'Download the audio-only M4A, not the full video MP4',
            desc: 'Zoom Cloud Recording produces multiple files. The audio-only M4A is roughly one-tenth the size of the gallery-view MP4. For transcription only, the audio file is faster to upload and the transcript quality is identical.',
          },
          {
            title: 'For Local Recording, use Documents/Zoom path',
            desc: 'Local Recordings save to ~/Documents/Zoom/ on Mac and Linux, Documents\\Zoom\\ on Windows, organised by date and meeting ID. The audio_only.m4a inside each meeting folder is what you want.',
          },
          {
            title: 'Enable speaker view recording for better speaker tracking',
            desc: 'Speaker view recordings give clearer attribution in the transcript because there is typically less audio overlap when only one person at a time is foregrounded. Useful for interview and panel formats.',
          },
          {
            title: 'For 90+ minute meetings, split the recording first',
            desc: 'Beyond 60 MB the upload fails. For long all-hands or workshop recordings, use Audacity or QuickTime to split the M4A into chunks under 60 MB each, transcribe each part separately, concatenate the resulting text.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Zoom recording in plain terms</h2>
          <p>
            Zoom records meetings in two distinct ways. Cloud Recording
            saves to Zoom servers and is available from zoom.us/recording
            after the meeting ends (with a 5-30 minute processing delay).
            Local Recording saves directly to the host computer in
            real-time, no cloud upload required. Cloud is convenient and
            shareable; Local is faster, free of cloud-storage quotas, and
            works on free Zoom accounts.
          </p>
          <h3>What files Zoom produces</h3>
          <p>
            For each recording, Zoom writes several files. The main one
            is the gallery-view MP4 (everyone visible). There is usually
            a speaker-view MP4 (active speaker only), an audio-only M4A
            (just the meeting audio), a chat log if the meeting had chat
            messages, and sometimes individual per-participant audio
            files. For transcription purposes, the audio-only M4A is the
            best starting point: smallest file, fastest upload, identical
            transcript quality to the gallery-view video.
          </p>
          <h3>Where Local Recordings live on your computer</h3>
          <p>
            Mac and Linux: ~/Documents/Zoom/. Windows: Documents\Zoom\.
            Inside, recordings are organised by date and meeting ID
            (YYYY-MM-DD HH.MM.SS [Meeting Name] [Meeting ID]). Each
            meeting folder contains the MP4 video, the audio_only.m4a,
            and chat.txt if applicable. The audio_only.m4a is the file
            you want.
          </p>
          <h3>Zoom AI Companion vs Mictoo</h3>
          <p>
            Zoom AI Companion is Zoom built-in AI feature, available on
            Pro, Business, and Enterprise plans. It transcribes meetings
            in real time during the call, produces a summary, and lives
            inside the Zoom web portal. Useful if you want real-time
            transcription embedded in Zoom workflow. Limitations: locked
            to specific plans, transcript is in the Zoom portal not as a
            portable file, and not available for recordings made before
            you enabled it.
          </p>
          <p>
            Mictoo runs after the recording. You drop the MP4 or M4A in,
            get the transcript and summary as portable files. Works on
            any Zoom plan (including free), any recording (including ones
            made before you knew about AI Companion), and you own the
            output files directly without needing to log back into Zoom.
            Different trade-offs, different use cases.
          </p>
          <h3>Privacy notes for Zoom recordings</h3>
          <p>
            Recording any meeting requires consent from the participants
            in many jurisdictions. Zoom announces recordings to all
            attendees by default. For internal company meetings this is
            usually a non-issue; for external client calls, sales
            discovery, or candidate interviews, double-check your local
            requirements before pressing record. Mictoo never sees your
            file unless you upload it yourself.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Will Mictoo transcribe a Zoom Cloud Recording?',
          a: 'Yes. Download the recording from zoom.us/recording (the audio-only M4A is the smallest file and uploads fastest), drop it onto this page. The transcript comes back with timestamps, AI summary, and exports for TXT, SRT, VTT, or DOCX.',
        },
        {
          q: 'What about Zoom Local Recordings on my computer?',
          a: 'Same workflow. Local Recordings live in Documents/Zoom on Mac/Linux/Windows. Each meeting folder contains an audio_only.m4a alongside the MP4 video. The M4A is the file you want for fastest transcription.',
        },
        {
          q: 'Do I need to invite a bot to the Zoom meeting?',
          a: 'No. Mictoo never joins meetings. You record with Zoom built-in Cloud Recording or Local Recording, then upload the file here afterward. No third-party participant in your call.',
        },
        {
          q: 'My Zoom plan does not include AI Companion. Does this still work?',
          a: 'Yes, fully. Mictoo works with the recording file itself, no Zoom AI Companion needed. Useful for free Zoom accounts, downgraded plans, or recordings made before AI Companion was enabled.',
        },
        {
          q: 'Can I transcribe a recording from someone else (e.g. a guest sent me their MP4)?',
          a: 'Yes. Mictoo does not care which Zoom account produced the recording. As long as you have the file and the right to transcribe it, drop it in. Useful when a meeting host shared their cloud recording with you.',
        },
        {
          q: 'My recording is over 60 MB. What now?',
          a: 'Use the audio-only M4A instead of the gallery-view MP4 (typically 10x smaller). For very long meetings, split the M4A in Audacity or QuickTime into chunks under 60 MB each, transcribe each part, concatenate the text. We will support larger files in the future Pro tier.',
        },
        {
          q: 'Will speaker names be in the transcript?',
          a: 'Not automatically. Whisper does not identify speakers out of the box. If clear speaker attribution matters, look for the per-participant audio files in Cloud Recording (available on some plans), transcribe each separately, label by hand. Diarization is on the Pro tier roadmap.',
        },
        {
          q: 'Can I get an AI summary of the meeting?',
          a: 'Yes. The AI summary appears alongside the transcript automatically after transcription finishes. Useful for sending a recap to people who missed the meeting or pulling action items out of a long call.',
        },
        {
          q: 'Can I export the transcript as captions for the original recording?',
          a: 'Yes. Download as SRT or VTT, both formats include timestamps that align with the original audio timeline. Drop into Zoom (paid plans support custom captions), YouTube, or your video editor of choice.',
        },
        {
          q: 'Does Mictoo store my Zoom recording?',
          a: 'No. The audio is streamed to the transcription provider, processed, and dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to add it to your history.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Upload your Zoom recording, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Cloud Recording M4A or MP4, Local Recording from your Documents/Zoom folder, audio-only or video. All work.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a Zoom recording now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/google-meet-transcription', label: 'Google Meet transcription', desc: 'For Meet recordings, Workspace context.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'For Microsoft Teams recordings.' },
        { href: '/meeting-transcription', label: 'Meeting transcription', desc: 'Platform-agnostic guide for any meeting recording.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For one-on-one recorded interviews.' },
      ]}
    />
  )
}
