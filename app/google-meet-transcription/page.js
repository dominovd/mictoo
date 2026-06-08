import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Google Meet Transcription: Workspace Recording or Free-Account Workaround | Mictoo',
  description:
    'Drop a Google Meet recording from your Drive (Workspace Business Standard+) or a screen capture from a free Meet account. Either path gets you a transcript that beats the Workspace AI add-on transcript quality.',
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
    title: 'Google Meet Transcription: Workspace or Free Account | Mictoo',
    description: 'Recording from Drive or a screen capture from free Meet. Either works. Free.',
    url: 'https://mictoo.com/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Meet Transcription: Any Account Type',
    description: 'Workspace recording or free-account screen capture, both work.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GoogleMeetTranscriptionPage() {
  return (
    <LandingLayout
      badge="Google Meet · Drive recording / Screen capture / Any tier"
      h1={<>Google Meet Transcription<br /><span className="text-brand-600">Workspace recording or free-account screen capture</span></>}
      subtitle="Google Meet recording requires Workspace Business Standard or higher. If you have it, the MP4 lands in Drive › Meet Recordings, download and drop here. If you are on a free Meet account, screen-record with QuickTime or OBS and drop that file. Either path produces a cleaner transcript than the Workspace AI add-on transcript feature."
      valueBlock={
        <article className="prose-content">
          <p>
            Google Meet is the most tier-fragmented of the major meeting
            platforms. Recording is a paid Workspace feature, locked
            behind Business Standard ($14/user/month) or higher.
            Built-in transcripts are a separate paid feature (Workspace
            AI add-on or Gemini Enterprise license). Free Meet has
            neither.
          </p>
          <p>
            Mictoo gives you the transcript regardless of your Workspace
            tier. The two paths: download the Drive Meet Recording if
            you have Workspace Business Standard or higher; or screen-
            record the meeting with QuickTime / OBS / Game Bar on a
            free account and upload that file. Same Whisper large-v3
            transcript quality at the end, better than the Workspace
            AI transcript on proper nouns and accented speakers.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📁',
          title: 'Find your Meet recording',
          desc: 'Workspace Business Standard+ (recording enabled): Drive → My Drive → Meet Recordings folder. The MP4 is named with the meeting title and start time. Free Meet account: you used QuickTime / OBS / Game Bar to capture, the file is wherever you saved it.',
        },
        {
          icon: '⬇️',
          title: 'Download the MP4 to your computer',
          desc: 'In Drive, right-click the MP4 → Download. The file size is typically 100-400 MB for a 60-minute meeting at 720p. For better upload speed, use the audio-extraction tip below.',
        },
        {
          icon: '📝',
          title: 'Drop into Mictoo',
          desc: 'Drag the MP4 (or extracted M4A) onto the upload zone. Transcribes in under a minute. Timestamps, AI summary, exports for TXT / SRT / VTT / DOCX. Better quality than the Workspace AI transcript feature.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Google Meet transcription',
        bullets: [
          {
            title: 'Better than the Workspace AI add-on transcript',
            desc: 'Workspace AI transcripts (and Gemini Enterprise transcripts) use Google internal ASR. Mictoo uses Whisper large-v3, which handles proper nouns, technical jargon, and accented speakers noticeably better. Side-by-side on the same meeting, the difference is obvious.',
          },
          {
            title: 'Works on any Workspace tier (and free Meet too)',
            desc: 'Free Meet: no recording, screen-capture with QuickTime / OBS / Game Bar, upload the file. Business Starter: no recording, same screen-capture workaround. Business Standard+: recording goes to Drive, download and upload. Mictoo workflow is identical at the end regardless of tier.',
          },
          {
            title: 'No Workspace AI add-on license to provision',
            desc: 'Workspace AI add-on is a separate per-user license on top of regular Workspace ($30/user/mo for Gemini Business). Mictoo is free per file. The 4-person agency on Business Standard does not need to buy AI add-on for everyone just to get transcripts.',
          },
          {
            title: 'Works on shared / inherited recordings',
            desc: 'Someone shared their Meet Recording with you via Drive. You can download the MP4 (your view permission is enough) and transcribe it yourself, even if you do not have Workspace AI on your own account.',
          },
          {
            title: 'Same workflow for Google Classroom recordings',
            desc: 'Google Classroom Meet calls (Education editions) save to Drive the same way. Teachers and students with Education accounts can transcribe lectures, office hours, and recorded discussions without needing Education AI add-on.',
          },
        ],
      }}
      useCases={{
        title: 'Google Meet transcription scenarios',
        items: [
          {
            title: 'Workspace teams without AI add-on license',
            desc: 'You have Workspace Business Standard so recordings work, but no one signed off on the AI add-on for transcripts. Download from Drive, transcribe with Mictoo, paste summary into the recap email.',
          },
          {
            title: 'Freelancers on free Meet accounts',
            desc: 'You use free Meet for client calls and screen-record with QuickTime or OBS. Drop the screen capture into Mictoo. Same workflow as Workspace users, just with self-recording instead of Drive auto-save.',
          },
          {
            title: 'Education recordings (teachers, professors, students)',
            desc: 'Google Classroom Meet calls saved to Drive. Lectures, office hours, recorded discussions. Mictoo transcripts as the searchable text version for review and study without needing Education AI add-on.',
          },
          {
            title: 'Workspace Business Standard users with shared recordings',
            desc: 'You attended a meeting hosted by a colleague on a higher Workspace tier. They shared the Drive recording with you. Download with your view permission, transcribe locally, your transcript is yours.',
          },
          {
            title: 'Multilingual meetings in Workspace',
            desc: 'Meet auto-translated captions during the call are limited to specific language pairs. Mictoo transcribes any of 50+ languages, then translates with one click to any other supported language. Useful for international Workspace teams.',
          },
          {
            title: 'Non-profit and education accounts (Education Plus / Nonprofits)',
            desc: 'Special-tier accounts (Education Plus, Nonprofits) have recording but not always AI features. Mictoo fills the transcription gap without needing the AI add-on, which on these tiers is often unavailable or separately priced.',
          },
        ],
      }}
      proTips={{
        title: 'Google Meet-specific tips',
        tips: [
          {
            title: 'Free Meet: screen-record audio AND video, but upload audio only',
            desc: 'QuickTime: File → New Screen Recording, set Microphone to your system audio, select the Meet tab area. The output is .mov. Extract just the audio with ffmpeg -i meet.mov -vn -ac 1 -ar 16000 audio.m4a or QuickTime File → Export As → Audio Only. Smaller upload, same transcript.',
          },
          {
            title: 'For browser-based Meet, OBS captures the tab audio cleanly',
            desc: 'OBS Studio (free, all platforms) can capture a browser tab audio output without needing macOS-specific tools. Set up an Audio Output Capture source pointing at your browser. Useful on Windows and Linux where QuickTime is not available.',
          },
          {
            title: 'Drive Meet Recordings folder takes a few minutes to populate',
            desc: 'After a recorded meeting ends, the MP4 takes 5-15 minutes to appear in Drive › Meet Recordings (Workspace processes the video first). Check back in a few minutes if it is not there immediately. The organiser also gets an email with the link.',
          },
          {
            title: 'Workspace AI transcript file is separate from the MP4',
            desc: 'If your account has AI add-on, the transcript is generated as a separate Google Doc or VTT file in the same Drive folder. You can ignore it and use Mictoo for a cleaner transcript instead; or download both and compare quality on the same meeting.',
          },
          {
            title: 'Education Plus has speech-to-text on attendance reports',
            desc: 'Education Plus tier has some transcript features wrapped into attendance reporting. Mictoo gives you a cleaner, more complete transcript for teaching and study use without depending on that feature.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Google Meet recording, by Workspace tier</h2>
          <p>
            Recording is the most tier-fragmented feature in Workspace.
            Knowing your tier saves time when you cannot find the
            recording you expected.
          </p>
          <h3>Free Meet (personal Google account)</h3>
          <p>
            No recording. The Record button does not appear in the
            meeting controls. The only way to capture is third-party
            screen recording: QuickTime on Mac, Xbox Game Bar on
            Windows, OBS on any OS. These produce .mov / .mp4 / .mkv
            files locally, which you upload to Mictoo.
          </p>
          <h3>Workspace Business Starter</h3>
          <p>
            No recording. Same constraint as free Meet. Screen-capture
            workaround is the path.
          </p>
          <h3>Workspace Business Standard, Business Plus, Enterprise</h3>
          <p>
            Recording is enabled. The host clicks More (three dots) →
            Record meeting → Start recording. The MP4 saves to the
            host Drive at My Drive › Meet Recordings after the meeting
            ends. The organiser gets an email with the link. Recording
            uses the host Drive storage quota.
          </p>
          <h3>Education Fundamentals, Education Standard, Education Plus</h3>
          <p>
            Recording available on Education Standard and Education
            Plus (not Fundamentals). Same Drive › Meet Recordings
            folder structure. Education Plus adds attendance reporting
            and some speech-to-text features tied to the attendance
            report.
          </p>
          <h3>Built-in transcripts (Workspace AI / Gemini)</h3>
          <p>
            Workspace AI add-on (now Gemini Business / Enterprise) is
            a separately priced license that includes meeting
            transcripts and summaries inside Meet. Without that
            license, recording works but no transcript appears in the
            recording folder. With the license, a transcript file
            (Google Doc or VTT) appears alongside the MP4 in Drive.
            The transcript quality is reasonable but not as accurate
            as Whisper large-v3 on hard cases.
          </p>
          <h3>The Drive Meet Recordings folder structure</h3>
          <p>
            Recordings land in My Drive › Meet Recordings (created
            automatically on first recording). File naming:
            <code>&lt;Meeting title&gt; (&lt;start date and time&gt;).mp4</code>.
            If you renamed the meeting in Calendar, that name is used;
            otherwise the meeting ID. Drive permissions follow the
            host: by default only the organiser sees the recording;
            sharing must be explicit.
          </p>
          <h3>Comparing transcript paths: Workspace AI vs Mictoo</h3>
          <p>
            For the same Meet recording, both Workspace AI and Mictoo
            produce a transcript. Workspace AI transcript is auto-
            generated, lives in Drive next to the MP4, includes
            speaker labels (using your Workspace identity directory).
            Mictoo transcript requires manual download + upload, has
            no speaker labels, but is noticeably more accurate on
            proper nouns and technical jargon. Many teams use both:
            speaker-labelled rough transcript from Workspace AI, then
            Mictoo for the final cleaned version when accuracy
            matters.
          </p>
          <h3>Free Meet workaround: which screen recorder?</h3>
          <p>
            Mac: QuickTime built-in (File → New Screen Recording),
            saves as .mov. Mac alternative: Screenflick, Loom, OBS.
            Windows: Xbox Game Bar (Win + G) built into Windows 10/11,
            saves as .mp4. OBS Studio works on any OS and gives more
            control over audio sources. For free Meet specifically,
            tab-audio capture in OBS lets you record just the meeting
            audio without ambient room noise.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Do I need a paid Workspace tier to use Mictoo for Meet?',
          a: 'No. Free Meet works via screen-recording with QuickTime / Game Bar / OBS. Workspace Business Standard+ has recording built in (saves to Drive). Either path gives you a file Mictoo can transcribe. The constraint is whether Meet itself records; Mictoo is free regardless.',
        },
        {
          q: 'How does Mictoo compare to Workspace AI add-on transcripts?',
          a: 'Mictoo is more accurate on text (Whisper large-v3 vs Workspace internal ASR) but has no speaker labels. Workspace AI has speaker labels (uses your Workspace identity directory) but weaker text accuracy. For accuracy-critical use (citations, articles, training material), Mictoo wins. For quick scan with speaker labels, Workspace AI is convenient.',
        },
        {
          q: 'Where exactly does Google save Meet recordings?',
          a: 'In the host Google Drive at My Drive › Meet Recordings. The folder is created automatically on first recording. Files named with the meeting title and start time, format is MP4. Permissions follow the host; the organiser must explicitly share if others need access.',
        },
        {
          q: 'My Meet recording is not in Drive yet, what is wrong?',
          a: 'Processing delay. After a recorded meeting ends, Google needs 5-15 minutes to process the video before it appears in Drive › Meet Recordings. The host also gets an email with the direct link once processing finishes. Wait a bit and refresh.',
        },
        {
          q: 'How do I record a free Meet call?',
          a: 'Free Meet has no built-in recording. Use a screen recorder: QuickTime on Mac (File → New Screen Recording), Xbox Game Bar on Windows (Win+G), or OBS on any OS. Set the audio source to capture system audio so you record the meeting voice, not just your microphone.',
        },
        {
          q: 'Is the Meet MP4 too big for the 60 MB Mictoo cap?',
          a: 'Often yes for meetings over 20-30 minutes. Workaround: extract the audio with ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. The M4A is typically 5-25 MB for a 60-minute meeting and transcribes identically.',
        },
        {
          q: 'Will the Mictoo transcript have speaker labels like Workspace AI does?',
          a: 'No. Mictoo does not currently distinguish speakers (it produces continuous text). Speaker diarisation is on our Pro tier roadmap. For now, if you need labels, the Workspace AI transcript provides them (at lower text accuracy).',
        },
        {
          q: 'Does Mictoo work with Google Classroom Meet calls?',
          a: 'Yes. Classroom Meet recordings save to Drive the same way regular Workspace recordings do (when recording is enabled on the Education tier). Download the MP4, drop into Mictoo. Useful for lecture transcripts, office hours archives, and recorded class discussions.',
        },
        {
          q: 'Can I get an AI summary of the meeting?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Functionally similar to the summary in Workspace AI / Gemini, available on any Mictoo upload regardless of your Workspace add-on licensing.',
        },
        {
          q: 'Does Mictoo translate Meet recordings?',
          a: 'Yes. After transcription, pick a target language and click Translate. Useful for international Workspace teams where the meeting was in one language and the recap email needs to go to participants in another.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your Meet recording or screen capture
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Workspace MP4 from Drive, or QuickTime / OBS / Game Bar capture from free Meet. Either path, cleaner transcript than the Workspace AI add-on.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload Meet recording
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting transcription (any platform)', desc: 'Umbrella page for any meeting tool.' },
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'Cloud Recording and Local Recording paths.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'OneDrive / SharePoint paths.' },
        { href: '/lecture-transcription', label: 'Lecture transcription', desc: 'For Education / Classroom recordings.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For 1:1 interview recordings.' },
      ]}
    />
  )
}
