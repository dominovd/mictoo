import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Microsoft Teams Meeting Transcription: SharePoint Recording to Editable Text | Mictoo',
  description:
    'Transcribe Microsoft Teams meeting recordings from SharePoint or OneDrive. Drop the MP4, get a clean transcript with timestamps and AI summary. No admin permissions required.',
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
  openGraph: {
    title: 'Teams Meeting Transcription: SharePoint Recording to Text | Mictoo',
    description: 'Drop your Teams MP4 from SharePoint or OneDrive, get a transcript and summary in seconds.',
    url: 'https://mictoo.com/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teams Meeting Transcription: SharePoint Recording to Text',
    description: 'Drop your Teams MP4, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TeamsMeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="Teams · SharePoint/OneDrive · M365"
      h1={<>Microsoft Teams Meeting Transcription<br /><span className="text-brand-600">SharePoint recording into editable text</span></>}
      subtitle="Teams meeting recordings save to OneDrive (private meetings) or SharePoint (channel meetings) as MP4. Download the file, drop it here, get a transcript with timestamps, AI summary, and clean exports. No admin permissions, no IT ticket, no separate license to provision."
      valueBlock={
        <article className="prose-content">
          <p>
            Microsoft Teams produces its own transcripts and live
            captions through Microsoft 365 Stream and the Teams web
            interface. Useful when admin has enabled it at the tenant
            level, the meeting host turned it on at meeting start, and
            you have access to the SharePoint/OneDrive site where the
            recording is stored.
          </p>
          <p>
            That is several "ifs" lined up in a row. When any of them is
            missing (admin policy disabled, meeting started without
            transcription on, recording stored in a SharePoint location
            you cannot reach), you still have the MP4. Mictoo turns
            that MP4 into a transcript without any of the Microsoft 365
            permission gates.
          </p>
          <p className="text-sm text-slate-500">
            We do not replace the M365 ecosystem. If your team relies on
            built-in Teams transcripts pushed to OneNote, Loop, or
            Copilot, keep using that. Mictoo is the fallback when the
            built-in path is unavailable, or when you need the
            transcript as a portable file outside the M365 ecosystem.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📥',
          title: 'Download the recording from SharePoint or OneDrive',
          desc: 'Private meeting: OneDrive > My Files > Recordings. Channel meeting: the SharePoint site for that channel, in the Recordings folder. Download the MP4 to your computer.',
        },
        {
          icon: '⚡',
          title: 'Upload to Mictoo, audio extracted',
          desc: 'We strip the video and transcribe just the audio. A 30-minute meeting finishes in 30-50 seconds. Files up to 60 MB on the free tier.',
        },
        {
          icon: '📝',
          title: 'Edit and export',
          desc: 'Fix names, copy summary into a Loop component or OneNote page, download TXT/SRT/VTT/DOCX. Keep the original recording untouched in SharePoint.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Teams meeting recordings',
        bullets: [
          {
            title: 'Works without M365 admin enablement',
            desc: 'Built-in Teams transcription requires admin policy at the tenant level. Mictoo runs on the recording file itself. If your meeting was not transcribed because the policy was off, Mictoo recovers the transcript from the MP4 afterward.',
          },
          {
            title: 'No M365 Copilot license required',
            desc: 'Microsoft 365 Copilot adds AI summaries and meeting insights at $30/user/month. Mictoo gives you transcript plus AI summary for free, no per-seat license to maintain.',
          },
          {
            title: 'Recordings from past meetings (before transcription was on)',
            desc: 'If you have a SharePoint folder full of Teams recordings from before transcription was enabled tenant-wide, Mictoo transcribes them retroactively. The recording is the source of truth, and that source is just an MP4.',
          },
          {
            title: 'Portable transcript outside the M365 ecosystem',
            desc: 'Built-in Teams transcripts live in Stream, Loop, OneNote, or Copilot. Useful inside M365. Awkward when you need to send the transcript to an external client, lawyer, or vendor who does not have M365 access. Mictoo gives you TXT and DOCX that go anywhere.',
          },
          {
            title: 'Compliance-friendly local workflow',
            desc: 'For regulated industries, sending recordings to an external transcription service may be policy-restricted. Mictoo discards the audio after processing (no long-term storage on our side), and you keep the original in your SharePoint with retention policies intact.',
          },
        ],
      }}
      useCases={{
        title: 'Where Teams meeting recordings come from',
        items: [
          {
            title: 'Enterprise standups and project meetings',
            desc: 'Recurring team meetings recorded for absent members. Transcripts become the searchable record without depending on the Teams interface to navigate them.',
          },
          {
            title: 'Sales discovery calls with external prospects',
            desc: 'Sales rep records a discovery on Teams, transcribes for the deal notes, summary becomes the CRM activity log. Stays out of M365 Copilot per-seat cost.',
          },
          {
            title: 'Regulated industry compliance recordings',
            desc: 'Finance, healthcare, legal: meetings recorded for compliance reasons. Mictoo gives you a portable transcript file that you can hash, sign, archive in your compliance system.',
          },
          {
            title: 'Executive briefings and board meetings',
            desc: 'Board calls, exec briefings: recordings stored in restricted SharePoint sites. Once you download the MP4 (with proper access), transcribe and produce minutes faster than typing from the audio.',
          },
          {
            title: 'External vendor and consultant calls',
            desc: 'Calls with vendors who are not on your tenant. Recording lives in your OneDrive, but the vendor does not have access to M365 transcripts. Send them the Mictoo-generated transcript instead.',
          },
          {
            title: 'Training sessions and internal workshops',
            desc: 'L&D recording workshops for future cohorts. Transcript becomes searchable training material that goes alongside the video in the LMS.',
          },
        ],
      }}
      proTips={{
        title: 'Teams-specific tips that save time',
        tips: [
          {
            title: 'Find the recording: OneDrive for private, SharePoint for channel',
            desc: 'Meetings started in a chat or 1:1 save to the organiser OneDrive > My Files > Recordings. Channel meetings save to the SharePoint site backing that channel > Recordings folder. Permission to download follows OneDrive/SharePoint sharing rules.',
          },
          {
            title: 'Extract audio if the MP4 is over 60 MB',
            desc: 'Teams recordings can be large at 1080p. Use ffmpeg to extract just the audio: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. The audio file is roughly 10-20x smaller and transcribes the same.',
          },
          {
            title: 'For sensitive recordings, check tenant DLP before uploading',
            desc: 'Data Loss Prevention policies in M365 may flag certain recordings as cannot leave the tenant. Mictoo processes externally; for highly sensitive content, run transcription on-premises or use M365 native transcription instead.',
          },
          {
            title: 'Speaker identification is not the same as Teams built-in',
            desc: 'M365 Teams transcripts identify speakers by their M365 account. Mictoo does not have access to your Teams metadata, so transcript shows the speech but not who said what. For workflows where that matters, the built-in transcript is the right tool.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Where Teams recordings actually live</h2>
          <p>
            Microsoft Teams stopped using Stream (Classic) in 2021 and
            now stores meeting recordings in OneDrive for Business or
            SharePoint, depending on the meeting type. Private meetings
            (a 1:1, group chat, or channel-less meeting) save to the
            organiser OneDrive at My Files > Recordings. Channel
            meetings save to the SharePoint site that backs the channel,
            inside a Recordings folder created automatically by Teams.
          </p>
          <p>
            Access follows OneDrive and SharePoint sharing rules. The
            organiser gets full access; participants get view-and-
            download access by default. External meeting guests get
            permissions on a per-link basis, often time-limited.
            Downloading the MP4 requires the same access you would need
            to read the file in the browser.
          </p>
          <h3>Built-in transcription requirements</h3>
          <p>
            Teams can transcribe meetings in real time and save the
            transcript alongside the recording. Requirements: tenant
            admin must enable transcription at the policy level, the
            meeting must have transcription enabled at meeting start
            (organiser toggle), and the meeting must be in one of the
            supported languages (around 40 as of 2026). The transcript
            appears in the meeting details and follows the same
            permission rules as the recording.
          </p>
          <h3>M365 Copilot for Meeting Insights</h3>
          <p>
            Microsoft 365 Copilot adds AI features on top of the
            transcript: summaries, action items, decisions extracted,
            follow-up suggestions. Useful if you have a Copilot license
            ($30/user/month as of 2026). Without Copilot, the
            transcript itself is available but the AI layer is not.
            Mictoo gives you the transcript and an AI summary in the
            free tier, regardless of Copilot licensing.
          </p>
          <h3>Compliance and retention</h3>
          <p>
            Teams recordings inherit retention policies from the
            OneDrive or SharePoint location where they are stored. For
            regulated industries, this matters: retention, e-discovery,
            legal hold all flow through M365. Mictoo never persists the
            audio (deleted from memory after transcription), so the
            compliance record stays in M365 where your policies apply.
            For maximum compliance, use M365 native transcription so
            the entire workflow stays in-tenant.
          </p>
          <h3>Stream (Classic) legacy recordings</h3>
          <p>
            Recordings made before Teams switched to OneDrive/SharePoint
            (pre-2021) may still live in the old Stream (Classic)
            service. Microsoft has been migrating these forward, but
            some tenants still have legacy Stream content. Download as
            MP4 from Stream (Classic), then upload here the same way as
            any other Teams recording.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Will Mictoo transcribe a Microsoft Teams recording?',
          a: 'Yes. Download the MP4 from OneDrive (private meetings) or SharePoint (channel meetings), drop it onto this page. The transcript comes back with timestamps, AI summary, and exports as TXT, SRT, VTT, or DOCX. No M365 admin enablement required.',
        },
        {
          q: 'My tenant has Teams transcription enabled. Why use Mictoo?',
          a: 'You probably do not need to, for new meetings. Mictoo is useful when transcription was not enabled for a past meeting, when you need a transcript outside the M365 ecosystem to share with external parties, or when you do not have Copilot for the AI summary layer.',
        },
        {
          q: 'Where do I find my Teams recording?',
          a: 'Private meetings (1:1, group chat) save to OneDrive > My Files > Recordings. Channel meetings save to the SharePoint site backing that channel, inside a Recordings folder. The link is also in the meeting chat and the Teams Recordings tab.',
        },
        {
          q: 'Does Mictoo support speaker labels like Microsoft 365?',
          a: 'No. M365 transcripts identify speakers via Microsoft account context, which Mictoo does not have access to. If speaker attribution matters, use built-in Teams transcription (requires admin enablement) or transcribe each speaker on a separate device.',
        },
        {
          q: 'Can I get an AI summary without paying for M365 Copilot?',
          a: 'Yes. Mictoo includes an AI summary alongside the transcript automatically, no Copilot license required. Useful for meeting recaps without paying $30/user/month for the M365 add-on.',
        },
        {
          q: 'My recording is over 60 MB. What now?',
          a: 'Use ffmpeg to extract just the audio: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. The audio-only file is typically 10-20x smaller than the original MP4 video and transcribes with the same accuracy.',
        },
        {
          q: 'Is uploading a Teams recording compliant with my company policies?',
          a: 'Depends on your DLP and data residency policies. Mictoo processes the audio externally and discards it after transcription, but the upload step itself moves data outside M365. For highly regulated content, use M365 native transcription instead.',
        },
        {
          q: 'What about meetings recorded in Stream (Classic) before 2021?',
          a: 'Download the MP4 from Stream (Classic), then upload to Mictoo. Same workflow. Microsoft has been migrating legacy Stream content to OneDrive over time, but some tenants still have files in the old location.',
        },
        {
          q: 'Can I export the transcript as captions for the recording?',
          a: 'Yes. Download as SRT or VTT after transcription. Both formats include timestamps that align with the original audio timeline. Upload alongside the MP4 to SharePoint or your video player of choice.',
        },
        {
          q: 'Does Mictoo save my recording on its servers?',
          a: 'No. The audio is streamed to the transcription provider, processed once, and dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your Teams MP4, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            From OneDrive, SharePoint, or a saved local copy. No M365 admin enablement, no Copilot license required.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a Teams recording now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'For Zoom Cloud and Local recordings.' },
        { href: '/google-meet-transcription', label: 'Google Meet transcription', desc: 'For Meet recordings from Drive.' },
        { href: '/meeting-transcription', label: 'Meeting transcription', desc: 'Platform-agnostic guide.' },
        { href: '/business-transcription', label: 'Business transcription', desc: 'Internal company use, exec briefings, town halls.' },
      ]}
    />
  )
}
