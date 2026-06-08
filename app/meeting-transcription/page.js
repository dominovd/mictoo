import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Meeting Transcription: One Page for Any Recorded Meeting | Mictoo',
  description:
    'A platform-agnostic upload for any recorded meeting (Zoom, Teams, Meet, Webex, Loom, Riverside). Drop the file, get a transcript with timestamps, AI summary, and exports. Free, no signup.',
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
    title: 'Meeting Transcription: Any Platform, Any Recording | Mictoo',
    description: 'Drop any meeting recording, get a transcript. Free.',
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
      badge="Any platform · Free · No signup"
      h1={<>Meeting Transcription<br /><span className="text-brand-600">One upload page for any platform</span></>}
      subtitle="The platform-agnostic entry point. Drop a recording from Zoom, Teams, Meet, Webex, Loom, Riverside, Whereby, or any screen capture and get a clean transcript with timestamps, AI summary, and exports. Or pick a platform-specific guide below for the download-and-upload mechanics."
      valueBlock={
        <article className="prose-content">
          <p>
            This is the umbrella page. If you already have a meeting
            recording on disk and just want the transcript, drop the
            file above. If you are stuck on the "where is my recording"
            step, the platform guides below cover the exact path on
            each major meeting tool.
          </p>
          <p className="text-sm text-slate-500">
            Platform-specific guides:
            <a href="/zoom-transcription" className="text-brand-600 hover:underline ml-1">Zoom</a>,
            <a href="/google-meet-transcription" className="text-brand-600 hover:underline ml-1">Google Meet</a>,
            <a href="/teams-meeting-transcription" className="text-brand-600 hover:underline ml-1">Microsoft Teams</a>,
            <a href="/interview-transcription" className="text-brand-600 hover:underline ml-1">interview transcription</a>,
            <a href="/business-transcription" className="text-brand-600 hover:underline ml-1">business / corporate transcription</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📂',
          title: 'Find your meeting recording',
          desc: 'Zoom Cloud: zoom.us → Recordings. Zoom Local: ~/Documents/Zoom on most platforms. Google Meet: Drive › Meet Recordings. Teams: OneDrive › My Files › Recordings (private) or SharePoint (channel). Other platforms: check the recording / library section.',
        },
        {
          icon: '⬆️',
          title: 'Drop the file here',
          desc: 'Drag the MP4, M4A, MP3, or whatever your platform produced. We accept all common audio and video formats and extract the audio track from videos automatically. Free for files up to 60 MB.',
        },
        {
          icon: '📝',
          title: 'Transcript, summary, exports',
          desc: 'A 30-minute meeting finishes in under a minute. Timestamps you can click, AI summary in the sidebar, export TXT / SRT / VTT / DOCX. Translate the transcript with one click for cross-language recap.',
        },
      ]}
      whyUse={{
        title: 'Why a platform-agnostic upload helps',
        bullets: [
          {
            title: 'Mixed-platform reality of modern teams',
            desc: 'Your client uses Zoom, your manager runs Google Meet, the candidate insists on Teams, the podcast guest booked Riverside. One transcription tool that accepts files from all of them is less mental overhead than juggling each platform native transcription quirks.',
          },
          {
            title: 'Better than most built-in platform transcripts',
            desc: 'Zoom audio transcript (paid), Meet auto-transcripts (Workspace AI add-on), Teams transcripts (Premium): all use older or weaker ASR than Whisper large-v3. Mictoo transcript is noticeably cleaner on proper nouns, accents, and technical jargon.',
          },
          {
            title: 'No license / tier negotiation with IT',
            desc: 'Most platform native transcripts require a specific seat tier, admin enablement, or AI add-on license. Mictoo is free per file. The contractor who is on the free tier of every meeting tool can still get a transcript.',
          },
          {
            title: 'Same workflow for meeting AND non-meeting content',
            desc: 'Interviews, lectures, podcast episodes, voice memos, recorded webinars: same upload page, same exports. One tool covers all your transcription cases rather than fragmenting across each platform native transcript feature.',
          },
          {
            title: 'AI summary and translation in the same view',
            desc: 'Summary appears alongside the transcript automatically (good as the start of the recap email). Translate the transcript to any of 50+ languages with one click for cross-language teams.',
          },
        ],
      }}
      useCases={{
        title: 'Common meeting-transcription scenarios',
        items: [
          {
            title: 'Client recap emails',
            desc: 'Strategy or consulting calls where the deliverable is the post-call recap. Recording becomes the transcript, summary becomes the email draft, action items become the follow-up.',
          },
          {
            title: 'User research session notes',
            desc: 'Product or UX research calls where the transcript IS the data. Pull quotes for the research repo, tag themes, share with the team. Format-agnostic so each researcher can use whatever recording tool they prefer.',
          },
          {
            title: 'Recruiter screen documentation',
            desc: 'Candidate screens recorded with the platform of choice. Transcript feeds candidate notes and feedback to hiring managers; summary helps the next-stage interviewer prep.',
          },
          {
            title: 'All-hands and team meeting archives',
            desc: 'Recorded internal meetings (all-hands, board calls, planning sessions). Transcript goes into the team wiki for asynchronous catch-up.',
          },
          {
            title: 'Customer support escalation calls',
            desc: 'Support reps occasionally jump on calls for complex issues. Transcript becomes the ticket note and the knowledge-base contribution.',
          },
          {
            title: 'Cross-language meetings with international clients',
            desc: 'Source-language transcript plus one-click translation. Useful when the recap email needs to go to participants who do not speak the meeting language.',
          },
        ],
      }}
      proTips={{
        title: 'Tips that apply to any meeting platform',
        tips: [
          {
            title: 'Prefer audio-only download when the platform offers it',
            desc: 'Zoom Cloud Recording offers an M4A audio-only download alongside the MP4. Same for Riverside (separate audio tracks). Audio-only files are 5-10x smaller than the full video, upload faster, transcribe identically.',
          },
          {
            title: 'If video is the only export, strip audio locally first for large files',
            desc: 'A 60-minute 1080p MP4 from Zoom Cloud can be 300-500 MB. Run ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a to strip just audio, file becomes ~25 MB. Same transcript quality, fits under 60 MB cap.',
          },
          {
            title: 'For multi-speaker meetings, expect continuous text (no speaker labels)',
            desc: 'Mictoo does not currently distinguish speakers ("Speaker 1: ... Speaker 2: ..."). For meetings where speaker labels matter (interviews, panels), add them manually post-transcription or wait for our Pro tier diarisation feature.',
          },
          {
            title: 'Multilingual meetings: set language to "auto-detect" or pick the majority language',
            desc: 'For mixed-language meetings (e.g. English with German speakers occasionally), pick the majority language explicitly. Whisper handles occasional foreign words within a primarily English meeting well; switching languages mid-sentence can confuse it.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Pick the right platform-specific guide</h2>
          <p>
            Each major meeting platform has its own recording quirks
            (where files land, what audio quality, what builtin
            transcript feature exists, what tier you need). Mictoo
            transcription works the same regardless, but the
            download-the-file step is platform-specific. Pick the guide
            that matches the platform you used:
          </p>
          <h3>Zoom Meetings</h3>
          <p>
            Cloud Recording (Pro and above) saves to zoom.us with both
            MP4 and M4A audio-only files. Local Recording (any account)
            saves to ~/Documents/Zoom. Built-in Zoom audio transcripts
            require Pro+ and are weaker than Whisper. See our
            <a href="/zoom-transcription" className="text-brand-600 hover:underline">Zoom transcription guide</a>
            for download paths and Cloud Recording quota considerations.
          </p>
          <h3>Google Meet</h3>
          <p>
            Recording requires Workspace Business Standard or higher.
            Free accounts have no recording (use third-party screen
            recorder). Recorded MP4 lands in your Drive at My Drive ›
            Meet Recordings. Workspace AI add-on includes built-in
            transcripts (separately licensed). See the
            <a href="/google-meet-transcription" className="text-brand-600 hover:underline">Google Meet transcription guide</a>
            for tier matrix and free-account workarounds.
          </p>
          <h3>Microsoft Teams</h3>
          <p>
            Recording saves to OneDrive (private meetings) or
            SharePoint (channel meetings). Built-in Teams transcripts
            require Teams Premium license. Channel meeting permissions
            are governed by the SharePoint site. Government Cloud (GCC)
            has additional limits. See the
            <a href="/teams-meeting-transcription" className="text-brand-600 hover:underline">Teams transcription guide</a>
            for storage paths, license tier matrix, and enterprise
            compliance considerations.
          </p>
          <h3>Other platforms (Webex, Loom, Riverside, Whereby, Around)</h3>
          <p>
            Webex Cloud Recording: webex.com › Recordings, downloads
            as MP4 or M4A audio. Loom: shareable Loom URL with
            download option in the share dialog. Riverside: studio
            dashboard with separate audio tracks per participant
            (high quality, useful for podcast workflows). Whereby:
            local download from the meeting interface. Around: similar.
            For all of these, the workflow is the same: download the
            audio or video, drop here.
          </p>
          <h3>Use cases beyond meetings</h3>
          <p>
            If your "meeting" is actually a different kind of recorded
            conversation, the dedicated pages may fit better:
            <a href="/interview-transcription" className="text-brand-600 hover:underline">interview transcription</a> (1:1
            interviews for research or journalism),
            <a href="/webinar-transcription" className="text-brand-600 hover:underline">webinar transcription</a> (one-to-many
            presentations),
            <a href="/lecture-transcription" className="text-brand-600 hover:underline">lecture transcription</a> (educational
            content), or
            <a href="/business-transcription" className="text-brand-600 hover:underline">business / corporate transcription</a>
            (corporate compliance, board meetings, regulatory).
          </p>
        </article>
      }
      faq={[
        {
          q: 'What meeting platforms does this page work with?',
          a: 'All of them. We accept any audio or video file regardless of which platform produced it. Common: Zoom, Microsoft Teams, Google Meet, Cisco Webex, Loom, Riverside, Whereby, Around. Less common: GoToMeeting, BlueJeans (now Verizon), Jitsi, BigBlueButton. Free for files up to 60 MB.',
        },
        {
          q: 'Should I use this umbrella page or a platform-specific one?',
          a: 'Functionally identical for the actual transcription. The platform-specific pages have more detail on the download-from-platform step (where files land, what tier you need, common pitfalls). If you already have the file and just want the transcript, this page works fine.',
        },
        {
          q: 'How is Mictoo better than my platform built-in transcript?',
          a: 'Two ways. Quality: Whisper large-v3 is more accurate than the ASR most platforms use, especially on proper nouns, accents, and technical jargon. Cost: most built-in transcripts require a specific paid tier or AI add-on (Zoom Pro, Workspace AI, Teams Premium), while Mictoo is free per file.',
        },
        {
          q: 'Does Mictoo identify who said what (speaker diarisation)?',
          a: 'Not currently. The transcript is continuous text without "Speaker 1: ... Speaker 2: ..." prefixes. Speaker diarisation is on our Pro tier roadmap. For meetings where speaker labels are critical (interviews with named subjects, panels), add labels manually post-transcription or use a tool that includes diarisation natively.',
        },
        {
          q: 'My meeting MP4 is larger than 60 MB. What do I do?',
          a: 'Extract just the audio with ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a. The resulting M4A is typically 5-15 MB for a 60-minute meeting. Or download the platform audio-only version if it offers one (Zoom Cloud Recording does, Riverside does, others vary).',
        },
        {
          q: 'Can I get an AI summary of the meeting?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Useful as the foundation for follow-up emails, recap notes, and action-item extraction. Mention this in your platform-specific guide of choice for details on how it compares to that platform built-in summary.',
        },
        {
          q: 'Is my meeting recording private?',
          a: 'Yes. The file streams to our transcription provider, gets processed once, and is dropped from memory. We never store the audio or video. The text transcript persists only if you are signed in and choose to save it to your history.',
        },
        {
          q: 'Can I transcribe meetings in languages other than English?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For meetings under 5 minutes or non-English content, set the language explicitly in the dropdown for cleaner first-pass detection.',
        },
        {
          q: 'Can I translate the meeting transcript?',
          a: 'Yes. After transcription, pick a target language and click Translate. Useful for sending recap emails to participants in their preferred language, or for archiving cross-language meetings in a single working language.',
        },
        {
          q: 'Does Mictoo work for meeting recordings on legacy platforms (Skype, GoToMeeting, etc)?',
          a: 'Yes, as long as the platform exports an audio or video file. The transcription does not depend on the platform; we just need the recording. Legacy platforms that only stream and do not export are not supported.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop any meeting recording, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Zoom, Meet, Teams, Webex, Loom, Riverside, screen capture. One upload page for all of them.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload meeting recording
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'Cloud Recording quota, MP4 vs M4A download.' },
        { href: '/google-meet-transcription', label: 'Google Meet transcription', desc: 'Workspace tier matrix, free-account workaround.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'OneDrive vs SharePoint paths, enterprise compliance.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: '1:1 interviews for research and journalism.' },
        { href: '/business-transcription', label: 'Business transcription', desc: 'Corporate meetings, board calls, compliance.' },
      ]}
    />
  )
}
