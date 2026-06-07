import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Business Transcription: Internal Meetings, All-Hands, Exec Briefings | Mictoo',
  description:
    'Transcribe internal company meetings without IT bureaucracy. Founder 1:1s, all-hands, strategy sessions, exec briefings. Upload the recording, get a transcript and summary.',
  alternates: {
    canonical: 'https://mictoo.com/business-transcription',
    languages: {
      'en': 'https://mictoo.com/business-transcription',
      'fr': 'https://mictoo.com/fr/business-transcription',
      'de': 'https://mictoo.com/de/business-transcription',
      'es': 'https://mictoo.com/es/business-transcription',
      'ru': 'https://mictoo.com/ru/business-transcription',
      'it': 'https://mictoo.com/it/business-transcription',
      'pt': 'https://mictoo.com/pt/business-transcription',
      'pl': 'https://mictoo.com/pl/business-transcription',
      'ja': 'https://mictoo.com/ja/business-transcription',
      'ko': 'https://mictoo.com/ko/business-transcription',
      'x-default': 'https://mictoo.com/business-transcription',
    },
  },
  openGraph: {
    title: 'Business Transcription: Internal Meetings to Text | Mictoo',
    description: 'Transcribe internal company meetings, all-hands, exec briefings. Free, no IT setup.',
    url: 'https://mictoo.com/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Transcription: Internal Meetings to Text',
    description: 'Transcribe internal company meetings. Free, no IT setup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function BusinessTranscriptionPage() {
  return (
    <LandingLayout
      badge="Business · Internal use · No IT setup"
      h1={<>Business Transcription<br /><span className="text-brand-600">For founders, execs, and small teams</span></>}
      subtitle="A practical transcription tool for internal company meetings: founder 1:1s, leadership offsites, all-hands, strategy sessions, board calls. Upload the recording, get a transcript and AI summary. No IT ticket to file, no per-seat license to provision."
      valueBlock={
        <article className="prose-content">
          <p>
            Business transcription used to mean hiring a human or buying
            an enterprise software contract. For a founder reviewing
            last week strategy session, an exec preparing for a board
            update, or HR documenting a difficult conversation, neither
            is a good fit. You need the transcript today, not in three
            days, and you do not want to file a ticket for it.
          </p>
          <p>
            Mictoo handles those exact cases. Drop the recording you
            already have (Zoom, Teams, Meet, Loom, phone-call screen
            capture), get the transcript and AI summary in under a
            minute. Free for files up to 60 MB. No team workspace, no
            CRM sync, no IT involvement.
          </p>
          <p className="text-sm text-slate-500">
            For team-wide meeting automation across hundreds of meetings
            with CRM integrations, a tool like Fireflies or M365 Copilot
            is the right fit. Mictoo covers the cases where that level
            of infrastructure is overkill.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Record the meeting yourself',
          desc: 'Zoom Cloud Recording, Teams meeting recording, Meet Workspace recording, or a screen recorder on any platform. Whatever you already use for your internal meetings.',
        },
        {
          icon: '⚡',
          title: 'Drop the file into Mictoo',
          desc: 'Upload the MP4, M4A, or audio-only file. We extract audio if needed and feed it to Whisper large-v3. A typical 30-minute meeting transcribes in 30-50 seconds.',
        },
        {
          icon: '📋',
          title: 'Edit and distribute',
          desc: 'Fix wrong names, copy the AI summary into the recap email, download TXT/DOCX for meeting minutes, SRT/VTT if you are publishing the recording internally.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for internal business meetings',
        bullets: [
          {
            title: 'No IT ticket, no procurement',
            desc: 'Tenant-level transcription policies, M365 Copilot licensing, Zoom AI Companion provisioning: all require IT involvement. Mictoo just needs the file. Useful when you need transcription this week, not next quarter.',
          },
          {
            title: 'Founders and execs can self-serve',
            desc: 'No need to be added to an enterprise contract. Sign in with your work email (or not, transcription works anonymously), upload, done. Useful for the CEO transcribing a board prep call before the meeting.',
          },
          {
            title: 'AI summary in the free tier',
            desc: 'M365 Copilot adds AI summaries for $30 per user per month. Mictoo includes the summary alongside the transcript at no cost. For founders and small leadership teams the savings add up fast.',
          },
          {
            title: 'No persistent storage of audio',
            desc: 'Sensitive internal recordings (compensation discussions, exec strategy, HR conversations) deserve careful handling. Mictoo processes the audio once and drops it from memory. The text transcript is only kept if you sign in and explicitly save it to your history.',
          },
          {
            title: 'Works for any meeting platform you happen to use',
            desc: 'Mictoo does not care if your team is on Zoom, Teams, Meet, or a mix. Same upload page handles all of them. Useful when an exec is on a personal account or an external partner used a different platform.',
          },
        ],
      }}
      useCases={{
        title: 'Internal business meeting scenarios',
        items: [
          {
            title: 'Leadership offsite and strategy session',
            desc: 'Recording a full-day offsite for the leadership team. Transcript becomes the source of decisions, action items, and the eventual strategy doc. Faster than retyping from handwritten notes.',
          },
          {
            title: 'Board prep and post-board debrief',
            desc: 'Founder recording a board prep call, transcribing for review before the actual board meeting. Or transcribing the board call itself (with consent) for accurate minutes that go in the board pack.',
          },
          {
            title: 'All-hands and town hall recordings',
            desc: 'Company-wide all-hands recorded for people in other timezones or who missed it. Transcript plus AI summary is faster to consume than the 60-minute video replay.',
          },
          {
            title: 'Exec 1:1s and skip-level meetings',
            desc: 'Manager-direct or skip-level 1:1s where the report wants to refer back to specific commitments. Transcript becomes a personal record of the conversation.',
          },
          {
            title: 'HR conversations and difficult discussions',
            desc: 'Performance discussions, exit interviews, sensitive HR meetings (with consent and per policy). Transcript provides an objective record for both parties.',
          },
          {
            title: 'Sales strategy and pipeline reviews',
            desc: 'Internal pipeline reviews and sales strategy sessions. Transcript captures the rationale behind each deal decision without burning a CRM-integrated transcription license.',
          },
        ],
      }}
      proTips={{
        title: 'Practical tips for business meeting transcription',
        tips: [
          {
            title: 'Get consent before recording sensitive conversations',
            desc: 'Most jurisdictions require participant consent for recording. For internal meetings this is usually handled by company policy. For 1:1s with reports or sensitive HR discussions, confirm verbally at the start and note it in the transcript.',
          },
          {
            title: 'Use audio-only recordings for confidential discussions',
            desc: 'A recording with video and screen-share captures more than just the audio. For confidential meetings, audio-only recording (Zoom audio_only.m4a, or a phone audio-recording app) is a smaller attack surface.',
          },
          {
            title: 'Treat transcripts as confidential too',
            desc: 'The transcript carries the same sensitivity as the recording. Store in your existing confidential-document workflow (encrypted Drive folder, password-protected Notion page, restricted SharePoint site). Mictoo does not store anything we generate; that is your responsibility downstream.',
          },
          {
            title: 'For board and exec meetings, transcribe a derivative copy',
            desc: 'Keep the original recording in your sealed archive. Make a derivative copy of just the audio you want transcribed, upload that. Limits what passes through external services.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Business meeting transcription, beyond the talking-points-list</h2>
          <p>
            The phrase "business transcription" has historically meant
            hiring a professional human transcriber, paying per audio
            minute, getting the result a few days later. That model
            still exists for legal depositions, court reporters, and
            verbatim records that need notarisation. For internal
            company use (strategy, exec briefings, all-hands), modern
            AI transcription has replaced human transcription for almost
            every use case where speed and cost matter more than legal
            verbatim accuracy.
          </p>
          <h3>What is "good enough" accuracy for internal use</h3>
          <p>
            Whisper large-v3 (the model Mictoo runs) produces transcripts
            with roughly 5-10% word error rate on clear speech in
            English, lower on common terms and higher on company-specific
            jargon, proper nouns, and technical acronyms. For internal
            meetings where the goal is "capture what was said for review
            later" rather than "produce a legally-binding verbatim
            record", that accuracy is usually fine. Most meeting recaps
            are summaries anyway, where a few mis-transcribed words do
            not change the substance.
          </p>
          <h3>What to transcribe and what to leave alone</h3>
          <p>
            Not every meeting needs a transcript. A 15-minute standup
            with no major decisions does not. A 90-minute strategy
            session with action items definitely does. Useful rule: if
            you would normally write notes during the meeting, the
            transcript replaces those notes; if you would normally not,
            the transcript is just storage cost.
          </p>
          <p>
            High-value targets for transcription: leadership offsites,
            board prep and debriefs, all-hands, customer interviews,
            performance discussions, exit interviews, postmortems,
            architectural design reviews, sales pipeline strategy.
            Low-value targets: recurring standups, status updates, brief
            sync calls.
          </p>
          <h3>The consent and privacy layer</h3>
          <p>
            Recording any meeting requires consent in most jurisdictions
            (single-party in some US states, two-party in others, all-
            party in EU under GDPR plus local laws). For internal
            company meetings, consent is usually established by policy:
            employees agree to potential recording when they sign the
            employment agreement, and the platform shows a recording
            indicator. For external participants (clients, candidates,
            board observers), explicit consent at meeting start is
            standard practice.
          </p>
          <p>
            Mictoo does not check consent; we assume the upload is
            authorised. The responsibility for consent rests with the
            person uploading the recording. For highly sensitive
            recordings (HR investigations, executive M&A discussions,
            legal hold), the policy choice is usually to keep
            transcription in-tenant (M365 Copilot, Workspace
            transcripts) rather than send to an external service.
          </p>
          <h3>Where the AI summary fits in</h3>
          <p>
            The summary that Mictoo generates alongside the transcript
            is useful for the "recap email" use case: send to people who
            could not attend, capture the decisions made, list the
            action items. It is not a substitute for the transcript;
            anything the summary mentions can be traced back to the
            transcript text. For meetings where exact wording matters
            (contract negotiations, performance feedback), read the
            transcript itself; for meetings where the gist matters
            (project updates, strategy syncs), the summary is enough.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Can I transcribe internal company meetings with Mictoo?',
          a: 'Yes. Mictoo is built for exactly this use case: upload a recording (Zoom, Teams, Meet, screen capture), get a transcript and AI summary in under a minute. No IT setup, no per-seat license, no integration to configure. Free for files up to 60 MB.',
        },
        {
          q: 'How is this different from Zoom AI Companion or M365 Copilot?',
          a: 'Those are platform-integrated AI features tied to specific subscriptions ($10-30 per user per month). Mictoo is a standalone tool that works on the recording file regardless of platform or plan. Useful when the platform-integrated path is unavailable or too expensive for your use case.',
        },
        {
          q: 'Is Mictoo safe to use for confidential business recordings?',
          a: 'We process audio in memory and discard it after transcription, never write to disk. For highly sensitive content (HR investigations, M&A discussions, legal hold), enterprise policy usually prefers in-tenant transcription (M365 native, Workspace native) to avoid external data transit. For everyday business meetings, Mictoo is a reasonable trade-off.',
        },
        {
          q: 'Do I need consent to record a business meeting?',
          a: 'Yes, in almost every jurisdiction. For internal meetings this is usually covered by company policy and the platform recording indicator. For external participants (clients, candidates, board observers), explicit consent at meeting start is standard. Mictoo does not check consent; the responsibility rests with the uploader.',
        },
        {
          q: 'Will I get speaker labels (CEO vs CFO vs board chair)?',
          a: 'Not automatically. Whisper does not identify speakers out of the box. For workflows where attribution matters (board minutes, performance reviews), built-in platform transcripts (Zoom AI Companion, Teams transcripts) use account context to label speakers. Diarization is on the Mictoo Pro tier roadmap.',
        },
        {
          q: 'Can I get an AI summary of the meeting for the recap email?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Copy it into your recap email, paste into a Notion or Confluence page, or include in the meeting minutes document.',
        },
        {
          q: 'My recording is too large to upload. What now?',
          a: 'Use the audio-only version of the recording if your platform produces one (Zoom audio_only.m4a). Or extract audio from the video MP4 with ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a. The audio file is typically 10-20x smaller.',
        },
        {
          q: 'Can I get the transcript as Word minutes for the board pack?',
          a: 'Yes. Download as DOCX after transcription. The DOCX is a clean Word document you can edit further, format with your standard meeting-minutes template, and include in the board pack.',
        },
        {
          q: 'Does Mictoo retain my meeting recording or transcript?',
          a: 'The audio is processed and discarded; we never write it to disk. The text transcript is only stored if you sign in and choose to save it to your history. Even then, you can delete the transcript at any time from your account.',
        },
        {
          q: 'Is Mictoo a substitute for M365 Copilot or a full meeting-AI platform?',
          a: 'No. Mictoo is the lightweight tool for individual transcripts and summaries. M365 Copilot and similar add team-wide automation, CRM integrations, deep platform context, and AI insights across hundreds of meetings. Use Mictoo when those layers are overkill; use a full platform when your workflow depends on them.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Transcribe an internal meeting without filing an IT ticket
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Strategy session, board prep, all-hands, exec 1:1. Drop the recording, get the transcript and summary.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a business meeting now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting transcription', desc: 'Platform-agnostic guide for any meeting platform.' },
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'Zoom-specific Cloud and Local workflow.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'Microsoft Teams recordings from OneDrive/SharePoint.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For one-on-one recorded interviews.' },
      ]}
    />
  )
}
