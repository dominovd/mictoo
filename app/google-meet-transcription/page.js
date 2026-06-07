import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Google Meet Transcription: Recording to Text for Workspace and Free Accounts | Mictoo',
  description:
    'Transcribe Google Meet recordings whether you are on Workspace Business or a free account. Drop the MP4 from Drive, get an editable transcript with summary in seconds.',
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
  openGraph: {
    title: 'Google Meet Transcription: Recording to Text | Mictoo',
    description: 'Drop your Google Meet recording from Drive, get a transcript and summary in seconds.',
    url: 'https://mictoo.com/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Meet Transcription: Recording to Text',
    description: 'Drop your Google Meet recording, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GoogleMeetTranscriptionPage() {
  return (
    <LandingLayout
      badge="Google Meet · Workspace + Free · MP4 from Drive"
      h1={<>Google Meet Transcription<br /><span className="text-brand-600">Recording to text, on any account type</span></>}
      subtitle="Google Meet recording lives in your Drive as an MP4. Download it, drop it here, get a clean transcript with timestamps, summary, and clean exports. Works whether you are on Workspace Business+ (with recording enabled) or you used a third-party screen recorder on a free Meet account."
      valueBlock={
        <article className="prose-content">
          <p>
            Google Meet recording is a Workspace feature, limited to
            Business Standard, Business Plus, Enterprise, and Education
            plans. If your plan does not include it, Meet does not let
            you record at all. Many education users, small teams on
            free Meet, and personal accounts hit this wall.
          </p>
          <p>
            The workaround is screen recording: QuickTime on Mac, the
            built-in Screen Recorder on Windows 11, OBS on any platform.
            The result is an MP4 (or WebM, depending on the tool) with
            the meeting audio you can drop here for transcription.
          </p>
          <p className="text-sm text-slate-500">
            Google Meet has its own built-in caption feature (live during
            the meeting) and Workspace plans get auto-generated transcripts
            in some configurations. Mictoo runs after the meeting,
            produces a portable transcript file you can export anywhere,
            and works regardless of your plan tier.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📥',
          title: 'Get the recording out of Drive',
          desc: 'If Workspace recorded it, the MP4 is in My Drive > Meet Recordings, named with the meeting date and time. Right-click, Download. If you screen-recorded, the file is wherever your recorder saved it.',
        },
        {
          icon: '⚡',
          title: 'Drop into Mictoo, audio extracted',
          desc: 'We strip the video track from the MP4 and feed just the audio to Whisper large-v3. A 30-minute Meet recording finishes in 30-50 seconds end to end.',
        },
        {
          icon: '📝',
          title: 'Edit and share',
          desc: 'Fix names, copy the AI summary into a Doc or email recap, download TXT/SRT/VTT/DOCX. Drop the SRT into the original recording for accessible captions.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for Google Meet',
        bullets: [
          {
            title: 'Works on free Meet and personal accounts',
            desc: 'Workspace recording is paywalled. If you used a screen recorder (QuickTime, Windows Screen Recorder, OBS) on a free Meet, Mictoo handles the resulting MP4 the same as a Workspace recording.',
          },
          {
            title: 'No domain admin permissions needed',
            desc: 'Some Workspace transcription features require admin enablement at the domain level. Mictoo runs on the recording you already have, no IT ticket needed.',
          },
          {
            title: 'Portable transcript outside Google ecosystem',
            desc: 'Workspace transcripts go into Google Docs in your Drive. Useful if you live in Google, awkward if you do not. Mictoo gives you the transcript as TXT, SRT, VTT, or DOCX, paste wherever you actually work.',
          },
          {
            title: 'Captions for the recording when you publish it',
            desc: 'SRT and VTT exports drop into YouTube uploads, video editors, and Drive video previews. Useful when you record a lecture, webinar, or town hall in Meet and want to publish with captions.',
          },
          {
            title: 'Free for the typical 60-minute meeting recording',
            desc: 'Drive video recordings of an hour usually compress to under 60 MB after Meet does its own encoding. For longer or higher-quality recordings, use the audio-only extraction tip in Pro tips below.',
          },
        ],
      }}
      useCases={{
        title: 'Where Google Meet recordings come from',
        items: [
          {
            title: 'Classroom and education sessions',
            desc: 'Teachers on Google Workspace for Education recording lessons for absent students or for review. Transcript provides a searchable, accessible text version of every lesson.',
          },
          {
            title: 'University lectures and tutorials',
            desc: 'Professors using Meet for hybrid teaching, recording for asynchronous student access. Transcript becomes lecture notes, study material, or accessibility-compliant text.',
          },
          {
            title: 'Small team standups on free Workspace',
            desc: 'Founders and small teams using personal Gmail accounts for Meet calls (no recording from Meet itself). Screen-record with QuickTime, transcribe here for a meeting log.',
          },
          {
            title: 'Coaching and consulting sessions',
            desc: 'Coaches recording sessions with clients (with consent). Transcript becomes follow-up notes, action items, and a record both parties can reference.',
          },
          {
            title: 'External vendor and partner calls',
            desc: 'Recording a call with an external partner who is not on your Workspace. Transcript ensures both sides have the same record without relying on each others note-taking.',
          },
          {
            title: 'Recorded Q&A sessions and AMAs',
            desc: 'Internal Q&A or external AMA hosted on Meet. Transcript becomes the searchable archive and can be repurposed into FAQ documents or blog content.',
          },
        ],
      }}
      proTips={{
        title: 'Google Meet tips that save time',
        tips: [
          {
            title: 'Extract audio from the Drive MP4 before uploading',
            desc: 'Meet Drive recordings are videos. If your recording is over 60 MB, run ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a to extract just the audio, dropping the file size 10-20x with no transcript quality loss.',
          },
          {
            title: 'For free Meet, QuickTime is the easiest screen recorder',
            desc: 'On Mac, Cmd+Shift+5, Record Selected Portion, draw a box around the Meet window. Make sure to enable microphone audio in the options menu. Saves an MP4 to Desktop you can drop here.',
          },
          {
            title: 'On Windows, use the built-in Game Bar recorder',
            desc: 'Press Win+G during the Meet, click the Record button. Saves to Videos/Captures as MP4. Limited to one app window but works fine for Chrome with Meet open.',
          },
          {
            title: 'For full-quality recordings, use OBS',
            desc: 'OBS records arbitrary screen regions with separate audio sources (microphone + system audio). The output MP4 or MKV can be very large, so use the audio extraction trick above before uploading.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Google Meet recording, plan by plan</h2>
          <p>
            Meeting recording is not available on free Meet or Workspace
            Business Starter. It is included with Business Standard
            (10 GB pooled storage), Business Plus, Enterprise tiers,
            Education Fundamentals (with caveats), Education Standard,
            Teaching and Learning Upgrade, and Education Plus. For
            anything not in that list, recording from inside Meet is
            simply not an option, and that is why screen-recording
            workarounds are so popular.
          </p>
          <h3>Where Workspace recordings end up</h3>
          <p>
            When Meet records a meeting, the file lands in the host
            Google Drive at My Drive > Meet Recordings, named with the
            meeting subject and the start time. An email also goes to
            the organiser with a link. Workspace admins can configure
            domain-level retention policies and storage locations. The
            file format is MP4, with H.264 video and AAC audio.
          </p>
          <h3>Meet built-in transcripts (Workspace only)</h3>
          <p>
            Workspace Business Plus and Enterprise tiers can produce
            automatic transcripts saved as Google Docs in Drive. The
            transcript appears 5-15 minutes after the meeting ends. It
            is searchable inside Google Drive and shareable like any
            Doc. Limitations: only available on those plan tiers, only
            in supported languages (around 15 as of mid-2026), only
            with auto-recording turned on at the meeting level.
          </p>
          <p>
            Mictoo complements rather than replaces this. If you have
            the Workspace transcript, great. If you do not (free plan,
            unsupported language, host forgot to enable it, recording
            from before the feature was on), drop the MP4 here for the
            same transcript output.
          </p>
          <h3>Live captions vs post-meeting transcript</h3>
          <p>
            Meet shows live captions during the meeting (free on all
            plans, even personal Gmail). These are useful for real-time
            accessibility but vanish when the meeting ends. They are
            never saved unless you separately record the screen.
            Post-meeting transcription, like Mictoo, works on the saved
            recording and produces a permanent file you keep.
          </p>
          <h3>Privacy and consent</h3>
          <p>
            Meet announces recordings to all participants by default
            (visual indicator in the participant tile). Most
            jurisdictions require consent from participants before
            recording. For internal team meetings this is usually
            handled by company policy. For external calls, double-check
            requirements in your region before pressing record.
          </p>
        </article>
      }
      faq={[
        {
          q: 'How do I get my Google Meet recording to transcribe?',
          a: 'If you have a Workspace plan with recording enabled, the MP4 is in your Drive at My Drive > Meet Recordings. Download it, drop it onto this page. If you do not have recording enabled, use a screen recorder (QuickTime on Mac, Windows Game Bar, or OBS) during the meeting, save the MP4, drop it here.',
        },
        {
          q: 'Does Mictoo work with free Google Meet accounts?',
          a: 'Yes, with a screen-recording workaround. Free Meet does not include recording, so you need to screen-record the Meet window separately (QuickTime, Windows Game Bar, OBS). The resulting MP4 transcribes the same as a Workspace recording.',
        },
        {
          q: 'My Workspace already gives me transcripts. Why use Mictoo?',
          a: 'Workspace transcripts land in Google Docs in Drive, in a limited set of languages, only on Business Plus and Enterprise plans, and only when admin and meeting settings allow. Mictoo works on any recording in any language Whisper supports, produces a portable file, and does not depend on plan or admin configuration.',
        },
        {
          q: 'What is the difference between Google Meet live captions and Mictoo transcripts?',
          a: 'Live captions are real-time and ephemeral, useful during the meeting for accessibility. Mictoo works on the recording afterward and produces a permanent transcript file you can edit, export, and share. Different jobs.',
        },
        {
          q: 'Can I get SRT captions to add to a recording I am publishing?',
          a: 'Yes. Download as SRT or VTT after transcription. Both formats include timestamps aligned to the original audio. Drop into YouTube, Drive video preview, or your video editor of choice for accessible captions.',
        },
        {
          q: 'My recording is too large to upload. What now?',
          a: 'Most Meet recordings of an hour fit under 60 MB. For longer or higher-quality recordings, extract just the audio with ffmpeg: ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a. The audio-only file is roughly 10-20x smaller.',
        },
        {
          q: 'Does Mictoo join my Meet meeting like a bot?',
          a: 'No. Mictoo never joins meetings or asks for calendar access. You record the meeting yourself (Workspace recording or screen recording) and upload the file afterward. No third-party participant in your call.',
        },
        {
          q: 'Will the transcript identify which student or teacher was speaking?',
          a: 'Not automatically. Whisper does not separate speakers out of the box. For classroom contexts where attribution matters, consider recording each speaker on a separate audio device, or wait for diarization on the Pro tier roadmap.',
        },
        {
          q: 'Does this work for Google Workspace for Education recordings?',
          a: 'Yes. Workspace Education recordings are MP4 files in Drive, same as any other Workspace tier. Download, upload, transcribe. Useful for accessibility, async student access, and creating searchable lecture archives.',
        },
        {
          q: 'Will my Meet recording be saved by Mictoo?',
          a: 'No. The MP4 is streamed to the transcription provider, the audio is extracted and processed, and the file is dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your Meet recording, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Workspace recording from Drive, or a screen recording you made yourself. Both work.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a Meet recording now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'For Zoom Cloud and Local recordings.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'For Microsoft Teams recordings.' },
        { href: '/meeting-transcription', label: 'Meeting transcription', desc: 'Platform-agnostic guide.' },
        { href: '/lecture-transcription', label: 'Lecture transcription', desc: 'For classroom and lecture recordings.' },
      ]}
    />
  )
}
