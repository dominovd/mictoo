import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Otter Alternative: Transcribe Recordings Without an AI Bot in Your Meeting | Mictoo',
  description:
    'Replace the Otter bot with self-recorded audio. No OtterPilot joining your calls, no per-seat workspace, no monthly subscription. Drop the recording you already have and get a clean transcript with summary.',
  alternates: {
    canonical: 'https://mictoo.com/otter-alternative',
    languages: {
      'en': 'https://mictoo.com/otter-alternative',
      'fr': 'https://mictoo.com/fr/otter-alternative',
      'de': 'https://mictoo.com/de/otter-alternative',
      'es': 'https://mictoo.com/es/otter-alternative',
      'ru': 'https://mictoo.com/ru/otter-alternative',
      'it': 'https://mictoo.com/it/otter-alternative',
      'pt': 'https://mictoo.com/pt/otter-alternative',
      'pl': 'https://mictoo.com/pl/otter-alternative',
      'ja': 'https://mictoo.com/ja/otter-alternative',
      'ko': 'https://mictoo.com/ko/otter-alternative',
      'x-default': 'https://mictoo.com/otter-alternative',
    },
  },
  openGraph: {
    title: 'Otter Alternative: No Bot in Your Meeting, No Monthly Plan | Mictoo',
    description: 'Skip the OtterPilot meeting bot. Self-record, upload, get the transcript. Free.',
    url: 'https://mictoo.com/otter-alternative',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otter Alternative: No Bot, No Per-Seat Plan',
    description: 'Self-record your meeting, upload, get the transcript. Free.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function OtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Otter Alternative · No meeting bot · No per-seat plan"
      h1="Otter Alternative"
      subtitle="No OtterPilot bot showing up as a visible participant in your client calls. No per-user monthly subscription for the whole team. Self-record the meeting (Zoom, Meet, Teams, OBS, QuickTime), drop the file, get the transcript with summary."
      competitorName="Otter"

      quickFit={{
        mictoo: [
          'Your meeting has external participants (clients, candidates, partners) who notice every bot in the room',
          'You record meetings yourself with Zoom / Teams / Meet built-in recording or a screen recorder',
          'You only need the transcript AFTER the meeting, not live captions during it',
          'You are a solo consultant, journalist, recruiter, or small team without a per-seat budget',
          'You want one tool for meeting recordings AND uploaded interviews, lectures, podcasts',
        ],
        competitor: [
          'You want OtterPilot to auto-join every meeting on your calendar with zero manual capture',
          'Your team is large enough that per-seat pricing is amortised across many users',
          'You need live captions on screen during meetings for accessibility or hearing accommodation',
          'You use Otter Notes as the shared real-time meeting document everyone edits during the call',
          'You depend on Otter integrations with Slack, Salesforce, HubSpot for downstream workflows',
        ],
      }}

      mainAngle={
        <article className="prose-content">
          <h2>The angle: skip the bot, transcribe the recording yourself</h2>
          <p>
            Otter is built around OtterPilot, the assistant bot that
            auto-joins your scheduled Zoom, Google Meet, or Teams meetings,
            transcribes in real time, and produces a shared note. That model
            works when the team is big, everyone uses Otter, and the bot
            in the room is normal.
          </p>
          <p>
            It breaks down in two specific situations. First, calls with
            external participants (clients, candidates, vendors, journalists)
            where a third-party bot listening to the conversation is a trust
            issue or an awkward moment. Second, small teams or solo
            operators where per-seat pricing for the whole org is not
            justified by the actual transcription volume.
          </p>
          <p>
            Mictoo is the alternative for both. You record the meeting
            yourself (most platforms have built-in cloud or local recording;
            QuickTime, OBS, and Zoom local capture all work), then drop
            the file. No bot ever joins the call, no participants ever see
            "Otter has joined the meeting", no monthly per-seat bill.
            Transcript and summary come back in under a minute. The same
            tool also handles non-meeting recordings (interviews,
            lectures, podcasts, voice memos), so you have one workflow
            instead of two.
          </p>
        </article>
      }

      rows={[
        { label: 'AI bot joins your meeting automatically', mictoo: 'No, never', them: 'Yes (OtterPilot)' },
        { label: 'Transcript visible to external participants', mictoo: 'No', them: 'Yes, bot is a visible attendee' },
        { label: 'Upload pre-recorded audio or video', mictoo: 'Yes, primary workflow', them: 'Yes, secondary feature' },
        { label: 'Per-seat monthly subscription', mictoo: 'No, free per file', them: 'Yes' },
        { label: 'Live captions during meeting', mictoo: 'No', them: 'Yes, core feature' },
        { label: 'Shared workspace with team highlights', mictoo: 'No', them: 'Yes, OtterNotes' },
        { label: 'AI summary alongside transcript', mictoo: 'Yes, included', them: 'Yes, depending on plan' },
        { label: 'Slack / Salesforce / HubSpot integrations', mictoo: 'No', them: 'Yes, depending on plan' },
        { label: 'SRT / VTT export for video captions', mictoo: 'Yes', them: 'Depending on plan' },
        { label: 'Required: account / OAuth', mictoo: 'No (optional)', them: 'Yes' },
      ]}

      whyMictoo={[
        {
          icon: '🚫',
          title: 'No bot, no awkward participant',
          desc: 'External-facing calls (sales, client work, journalist interviews, candidate screens) get weird when "Otter has joined" pops up. Mictoo never joins your meeting. You record it yourself with whatever tool is already in your meeting platform, then upload.',
        },
        {
          icon: '💸',
          title: 'No per-seat plan for the whole team',
          desc: 'Otter charges per user per month, which adds up for a team that only occasionally needs transcripts. Mictoo is free per file under 60 MB. The marketing manager who transcribes one podcast a week and the recruiter who reviews one interview a month do not need their own seats.',
        },
        {
          icon: '🎙️',
          title: 'One tool for meetings AND non-meeting recordings',
          desc: 'Otter is meeting-first. Mictoo handles meetings (Zoom recordings, Teams MP4s, Meet downloads) AND interviews, lectures, podcasts, voice memos, downloaded webinars. One upload page covers all your transcription cases.',
        },
        {
          icon: '🔒',
          title: 'Privacy: nothing persists by default',
          desc: 'No workspace storing every meeting transcript indefinitely. You upload, get the transcript back, the audio is dropped. Sign in if you want history; stay anonymous if you do not.',
        },
      ]}

      whenBetter={{
        title: 'When Otter genuinely wins',
        items: [
          'Live captioning during the meeting itself, especially for accessibility or hearing-impaired participants who need real-time word display.',
          'Teams that already operate inside Otter Notes as the shared meeting document, with everyone highlighting, commenting, and adding action items during the call.',
          'Automation-heavy workflows where OtterPilot joins every calendar event and post-meeting summaries flow into Slack/Salesforce/HubSpot without manual upload.',
          'Large orgs (20+ users) where per-seat pricing is justified by the team-wide search across every colleague meeting transcript and the centralised admin/permissions layer.',
        ],
      }}

      workflow={[
        {
          title: 'Self-record the meeting',
          desc: 'Zoom: "Record to this Computer" or "Record to Cloud". Google Meet: requires Workspace plan with recording. Teams: meeting recording goes to OneDrive. No platform recording? Use QuickTime (Mac), Game Bar (Windows), or OBS for any meeting tool.',
        },
        {
          title: 'Download the recording locally',
          desc: 'Zoom Cloud Recording: download MP4 from Zoom web portal. Teams: download from OneDrive/SharePoint. Google Meet: from Drive. Local recordings are already on your machine.',
        },
        {
          title: 'Drop into Mictoo',
          desc: 'Drag the audio or video file onto the upload zone. We extract audio from video files automatically. Whisper large-v3 transcribes a 30-minute meeting in under a minute.',
        },
        {
          title: 'Export and share',
          desc: 'Download TXT for notes, DOCX for a Word document, SRT/VTT if you want captions on the video version. Copy quotes for follow-ups. The AI summary becomes the recap email.',
        },
      ]}

      useCases={{
        title: 'Otter users who switched to Mictoo (the patterns)',
        items: [
          {
            title: 'Client-facing consultants',
            desc: 'Strategy / IT / freelance consultants on weekly client calls. The OtterPilot bot in the meeting was a trust friction with new clients. Self-record + upload to Mictoo keeps the workflow but removes the visible third party.',
          },
          {
            title: 'Recruiters running candidate screens',
            desc: 'Recruiters interviewing candidates do not want "Otter has joined" appearing in a candidate-facing call. Self-record the Zoom, drop into Mictoo for the transcript that feeds candidate notes and feedback.',
          },
          {
            title: 'Journalists conducting source interviews',
            desc: 'Interview subjects often refuse to let a third-party bot record the conversation. Recording on your end (phone, laptop mic, Zoom local) and processing through Mictoo keeps the source comfortable.',
          },
          {
            title: 'Small teams without a per-seat budget',
            desc: '2-5 person teams (early-stage startups, small agencies, research groups) where Otter per-seat pricing means most seats sit unused. Drop files into Mictoo as needed, no monthly bill.',
          },
        ],
      }}

      faq={[
        {
          q: 'Why would I pick Mictoo over Otter?',
          a: 'You meet with external people (clients, candidates, vendors, sources) for whom a third-party AI bot in the room is awkward or a non-starter. Or you are small enough that Otter per-seat pricing for the whole team is wasteful. Or you also need to transcribe non-meeting content (interviews, lectures, podcasts) and want one tool for all of it.',
        },
        {
          q: 'Does Mictoo have a bot like OtterPilot that joins meetings?',
          a: 'No. We deliberately do not. Bots-in-meetings is exactly the pattern Otter dominates, and it has legitimate trade-offs (visibility to participants, consent friction, security review for enterprise). Mictoo is the alternative for people who want to avoid all that and just record + upload themselves.',
        },
        {
          q: 'How do I record a meeting if Mictoo does not have a bot?',
          a: 'Use the platform built-in recording: Zoom (Record button, local or cloud), Google Meet (Workspace plans only, in the More menu), Teams (Record meeting in the toolbar, file goes to OneDrive). For platforms without recording or when you want a backup, QuickTime on Mac, Xbox Game Bar on Windows, or OBS on any OS will capture audio from any meeting app.',
        },
        {
          q: 'Will external participants know Mictoo is transcribing?',
          a: 'No, because Mictoo never joins the meeting. The recording is done by you, with the tool you choose. Whether you tell participants you are recording follows your local laws (consent rules vary) and your professional norms, same as recording any conversation.',
        },
        {
          q: 'Does Mictoo do live captions during the meeting?',
          a: 'No. We transcribe after the meeting is finished. If you need live captions for accessibility or for participants who need real-time word display, Otter live caption mode (or Zoom built-in live captions, Google Meet live captions, Teams live captions) is the right tool. These platforms all offer basic live captioning natively now.',
        },
        {
          q: 'Can I get a meeting summary like Otter Meeting Summary?',
          a: 'Yes. The AI summary appears alongside the transcript automatically after upload. Useful as the foundation for follow-up emails, recap notes, action-item extraction, and CRM entry. Same idea as Otter post-meeting summary, just generated after upload rather than during the call.',
        },
        {
          q: 'How does Mictoo handle multi-speaker conversations?',
          a: 'The transcript is continuous text. We do not currently distinguish speakers ("Speaker 1: ... Speaker 2: ..."). Speaker diarisation is on our Pro tier roadmap. For now, if speaker labels matter, you add them manually or use a tool that includes diarisation (Otter does it; Whisper itself does not without an external diarisation pass).',
        },
        {
          q: 'What if I need integrations with Slack / Salesforce / HubSpot?',
          a: 'Mictoo does not currently push transcripts into other tools automatically. Export TXT/DOCX, paste into your destination, or copy quotes for the CRM activity log. For sales/RevOps teams whose workflow depends on automatic CRM enrichment, Otter (or Fireflies, Gong) handles that integration better.',
        },
        {
          q: 'Does Mictoo handle video files like Zoom Cloud Recording MP4s?',
          a: 'Yes. Upload the MP4 directly. We extract the audio track on our side and transcribe it. Same for Teams meeting recordings (MP4 in OneDrive), Meet recordings (MP4 in Drive), or any screen recorder output.',
        },
        {
          q: 'Is Mictoo really free without a per-seat plan?',
          a: 'Yes, free for files up to 60 MB per upload, no signup, no daily limit, no watermark. A 60-minute Zoom meeting MP4 with typical compression is around 50 MB. For larger files, downsample the audio with ffmpeg or split into chunks. Pro tier (larger files, batch upload) is planned for later, not required for current use.',
        },
      ]}

      cta={{
        title: 'Skip the bot, transcribe the recording yourself',
        text: 'Self-record your next meeting with built-in tools, drop the file here, get the transcript and summary back in under a minute. No bot in the room, no per-seat bill.',
        button: 'Upload a meeting recording',
      }}

      relatedLinks={[
        { href: '/fireflies-alternative', label: 'Fireflies alternative' },
        { href: '/notta-alternative', label: 'Notta alternative' },
        { href: '/descript-alternative', label: 'Descript alternative' },
        { href: '/turboscribe-alternative', label: 'TurboScribe alternative' },
        { href: '/zoom-transcription', label: 'Zoom transcription' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription' },
        { href: '/interview-transcription', label: 'Interview transcription' },
      ]}
    />
  )
}
