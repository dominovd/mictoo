import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Fireflies Alternative: Meeting Transcripts Without Inviting a Bot | Mictoo',
  description:
    'Transcribe recorded meetings without a bot joining your calls. Upload a Zoom, Teams, or Meet recording and get a clean transcript with summary and exports. Privacy-friendly, no calendar OAuth.',
  alternates: {
    canonical: 'https://mictoo.com/fireflies-alternative',
    languages: {
      'en': 'https://mictoo.com/fireflies-alternative',
      'fr': 'https://mictoo.com/fr/fireflies-alternative',
      'de': 'https://mictoo.com/de/fireflies-alternative',
      'es': 'https://mictoo.com/es/fireflies-alternative',
      'ru': 'https://mictoo.com/ru/fireflies-alternative',
      'it': 'https://mictoo.com/it/fireflies-alternative',
      'pt': 'https://mictoo.com/pt/fireflies-alternative',
      'pl': 'https://mictoo.com/pl/fireflies-alternative',
      'ja': 'https://mictoo.com/ja/fireflies-alternative',
      'ko': 'https://mictoo.com/ko/fireflies-alternative',
      'x-default': 'https://mictoo.com/fireflies-alternative',
    },
  },
  openGraph: {
    title: 'Fireflies Alternative: Meeting Transcripts Without a Bot | Mictoo',
    description: 'Upload a Zoom, Teams, or Meet recording and get a transcript with summary. No bot, no OAuth.',
    url: 'https://mictoo.com/fireflies-alternative',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fireflies Alternative: Meeting Transcripts Without a Bot',
    description: 'Upload your recording, get a transcript. No bot in the meeting.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Fireflies Alternative · No bot · No OAuth"
      h1="Fireflies Alternative"
      subtitle="Transcribe meetings without sending a bot into them. Drop the recording you already have (Zoom, Teams, Meet, Loom) and get a transcript, summary, and exports. No calendar permissions, no auto-join, no third-party participant in your call."
      competitorName="Fireflies"

      quickFit={{
        mictoo: [
          'You record meetings yourself and want to transcribe afterward',
          'You handle sensitive or external calls and prefer no third-party bot to be present',
          'You do not want to grant calendar access or OAuth permissions',
          'You only need transcription occasionally and do not want a per-seat subscription',
          'You want the transcript, summary, and exports without team-collab features',
        ],
        competitor: [
          'You want a bot to join recurring meetings automatically without thinking about it',
          'Your team needs shared meeting notes, action items, and CRM sync (HubSpot, Salesforce)',
          'You want meeting analytics across the whole team (talk time, topics, sentiment)',
          'You rely on Slack and Notion integrations that push meeting outcomes automatically',
          'You need search across all your team meetings in one place',
        ],
      }}

      mainAngle={
        <article className="prose-content">
          <h2>The angle: meeting transcripts without a bot in the room</h2>
          <p>
            Fireflies is built around one core mechanic: a bot named Fred
            joins your meetings as a participant, records them, transcribes
            them, and pushes the result into your CRM and Slack. For teams
            that need this automation across hundreds of meetings a month,
            it works well.
          </p>
          <p>
            But the bot has costs. It shows up in the participant list of
            sensitive calls. It needs calendar OAuth and meeting-platform
            permissions. It is awkward to explain to external clients who
            ask "who is Fred". And for occasional users, you are paying for
            an automation tier you do not actually need.
          </p>
          <p>
            Mictoo flips the model. You record the meeting yourself (or
            export the cloud recording from Zoom, Teams, or Meet
            afterward), then upload the file here. No bot, no OAuth, no
            third party in the call. You get the transcript, summary, and
            exports the same way, just without the bot infrastructure
            wrapped around them.
          </p>
        </article>
      }

      rows={[
        { label: 'Auto-joins meetings via bot', mictoo: 'No', them: 'Yes, core feature' },
        { label: 'Requires calendar / meeting OAuth', mictoo: 'No', them: 'Yes' },
        { label: 'Upload Zoom / Teams / Meet recordings', mictoo: 'Yes, drag-and-drop', them: 'Yes' },
        { label: 'Privacy: third party in call', mictoo: 'No bot, no participant added', them: 'Bot joins as participant' },
        { label: 'AI summary and action items', mictoo: 'Summary included', them: 'Built around it' },
        { label: 'CRM sync (HubSpot, Salesforce)', mictoo: 'No', them: 'Yes, depending on plan' },
        { label: 'Team analytics and talk-time stats', mictoo: 'No', them: 'Yes' },
        { label: 'SRT / VTT subtitle export', mictoo: 'Yes', them: 'Available' },
        { label: 'Slack / Notion automated push', mictoo: 'No', them: 'Yes, depending on plan' },
        { label: 'Signup required', mictoo: 'No', them: 'Yes' },
        { label: 'Best suited for', mictoo: 'Occasional, privacy-sensitive transcripts', them: 'Always-on team meeting automation' },
      ]}

      whyMictoo={[
        {
          icon: '🚫',
          title: 'No bot, no extra participant in your call',
          desc: 'You record the call yourself or use Zoom/Teams/Meet built-in recording. Mictoo never joins the meeting. External clients and sensitive interviews never see a third-party bot in the participant list.',
        },
        {
          icon: '🔐',
          title: 'No calendar OAuth or meeting-platform permissions',
          desc: 'Fireflies needs deep access to your calendar and meeting platform so the bot can auto-join. Mictoo needs none of that. You drag a file onto a page, that is the entire permission model.',
        },
        {
          icon: '📤',
          title: 'Exports go where you want, not where the integration sends them',
          desc: 'Download the transcript as TXT, SRT, VTT, or DOCX. Copy the AI summary. Paste it into Notion, Confluence, an email draft, a Notes app. You decide where the output goes, not a pre-configured automation.',
        },
        {
          icon: '💰',
          title: 'Pay-per-need, not per-seat-per-month',
          desc: 'Mictoo is free for files up to 60 MB. Useful for the journalist transcribing two interviews a month or the founder reviewing one strategy call a week. No per-seat subscription that sits unused on quiet days.',
        },
      ]}

      whenBetter={{
        title: 'When Fireflies is the better fit',
        items: [
          'You run dozens of recurring meetings a week and want one tool to record, transcribe, summarise, and push results to Slack and your CRM without you thinking about it. Mictoo is manual upload by design.',
          'You need a team-wide meeting search and analytics dashboard (talk time per person, topics discussed, sentiment). Fireflies provides this; Mictoo does not.',
          'Your sales or customer success team needs every call automatically captured in HubSpot or Salesforce with action items. Fireflies is built for that workflow.',
          'You are comfortable with the bot model and the OAuth permissions, and prefer the always-on automation to a manual upload step.',
        ],
      }}

      workflow={[
        {
          title: 'Download the recording',
          desc: 'Zoom Cloud Recording, Teams meeting recording, Google Meet record, or Loom download. Save the audio or video file to your computer.',
        },
        {
          title: 'Drop it into Mictoo',
          desc: 'Drag the file onto the page. We accept MP4, M4A, MP3, WAV, WebM, and most other common audio and video formats.',
        },
        {
          title: 'Review transcript and summary',
          desc: 'Read the transcript with timestamps. The AI summary appears alongside. Fix wrong names inline before exporting if needed.',
        },
        {
          title: 'Export or copy where you need it',
          desc: 'Download TXT, SRT, VTT, or DOCX. Or copy the cleaned text directly to Notion, Confluence, Slack, an email draft, or any document.',
        },
      ]}

      useCases={{
        title: 'When people choose Mictoo over Fireflies',
        items: [
          {
            title: 'Privacy-sensitive client calls',
            desc: 'Legal, healthcare, HR, executive coaching, and similar contexts where a third-party bot in the participant list is awkward or against policy. Record locally, transcribe afterward.',
          },
          {
            title: 'External interviews',
            desc: 'Journalists, podcast hosts, recruiters interviewing candidates. The interviewee is not on your team. A bot named Fred in their call is uncomfortable. Record your end, transcribe afterward.',
          },
          {
            title: 'Webinar and event recordings',
            desc: 'You captured a webinar or panel and want a transcript for show notes or accessibility. No reason to set up bot automation for a one-off event.',
          },
          {
            title: 'Single-team meetings that do not need CRM sync',
            desc: 'A founders standup, a design review, a postmortem. Just upload the recording, get the transcript and summary, paste into the team Notion page. No subscription needed.',
          },
        ],
      }}

      faq={[
        {
          q: 'Is Mictoo a good Fireflies alternative?',
          a: 'Yes, if you record meetings yourself and want to transcribe them after the fact. Mictoo accepts the recording, returns a transcript with summary and exports. If you specifically want a bot to auto-join meetings and push to a CRM, stay with Fireflies.',
        },
        {
          q: 'What is the main difference between Mictoo and Fireflies?',
          a: 'Fireflies is built around a bot that auto-joins meetings, transcribes in real time, and pushes results into team tools. Mictoo is post-meeting only: you record the call yourself, upload the file, get the transcript back. No bot, no OAuth, no third party in the call.',
        },
        {
          q: 'Does Mictoo join meetings like Fireflies?',
          a: 'No. Mictoo never joins a meeting or sees your calendar. You record the call yourself (Zoom Cloud Recording, Teams recording, Meet record, or any screen recorder) and upload the file afterward. The trade-off is more manual; the upside is privacy and no third-party participant.',
        },
        {
          q: 'Do I need to invite a meeting bot?',
          a: 'No. Mictoo has no bot. You just need a recording of the meeting, which you make yourself using the host platform (Zoom, Teams, Meet) or any screen recorder.',
        },
        {
          q: 'Can I upload audio and video files?',
          a: 'Yes. MP4, MOV, M4A, MP3, WAV, FLAC, WebM, OGG, AAC. For video files we strip the video track and transcribe just the audio. Free for files up to 60 MB.',
        },
        {
          q: 'Can I summarize the meeting transcript?',
          a: 'Yes. An AI summary appears alongside the transcript as soon as transcription finishes. Useful for meeting recaps, action items, or pasting key points into a team document.',
        },
        {
          q: 'Will Mictoo push the transcript to my CRM or Slack?',
          a: 'No. Mictoo gives you the transcript and exports; you decide where it goes. If automatic CRM and Slack pushes are essential to your workflow, Fireflies is built for that and Mictoo is not.',
        },
        {
          q: 'Can I export subtitles for a recorded webinar?',
          a: 'Yes. SRT and VTT exports with timestamps that align to your original recording. Drop into your video editor or YouTube to add captions automatically.',
        },
        {
          q: 'Is Mictoo free to try?',
          a: 'Yes. Files up to 60 MB transcribe for free, no signup, no watermark on exports. Larger files are on the roadmap for the Pro tier.',
        },
        {
          q: 'Which tool should I choose for meetings?',
          a: 'If your team runs many meetings per week and needs automatic capture plus CRM sync, Fireflies. If you record meetings yourself or work with sensitive recordings, Mictoo. The dividing line is whether you want a bot always on, or manual control over what gets transcribed.',
        },
      ]}

      cta={{
        title: 'Transcribe your next meeting without inviting a bot',
        text: 'Upload a recording you already have. Transcript and summary back in under a minute. No bot, no OAuth, no third party in your call.',
        button: 'Upload a meeting recording',
      }}

      relatedLinks={[
        { href: '/otter-alternative', label: 'Otter alternative' },
        { href: '/notta-alternative', label: 'Notta alternative' },
        { href: '/descript-alternative', label: 'Descript alternative' },
        { href: '/turboscribe-alternative', label: 'TurboScribe alternative' },
        { href: '/zoom-transcription', label: 'Zoom transcription' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription' },
        { href: '/google-meet-transcription', label: 'Google Meet transcription' },
      ]}
    />
  )
}
