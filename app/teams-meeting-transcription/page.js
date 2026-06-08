import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Teams Meeting Transcription: OneDrive / SharePoint Recording to Text (No Teams Premium) | Mictoo',
  description:
    'Drop a Microsoft Teams meeting recording from OneDrive (private meetings) or SharePoint (channel meetings). No Teams Premium license required, no IT ticket, no enterprise admin enablement. Cleaner transcripts than built-in Teams transcripts.',
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
    title: 'Teams Meeting Transcription: No Premium License Required | Mictoo',
    description: 'Drop a Teams recording from OneDrive or SharePoint, get the transcript. Free.',
    url: 'https://mictoo.com/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teams Transcription: No Premium License',
    description: 'Drop a Teams MP4 from OneDrive / SharePoint. Free.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TeamsMeetingTranscriptionPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · OneDrive / SharePoint · M365"
      h1={<>Microsoft Teams Meeting Transcription<br /><span className="text-brand-600">No Teams Premium license needed</span></>}
      subtitle="Microsoft Teams meeting recordings save to OneDrive (private meetings) or SharePoint (channel meetings). Download the MP4, drop here, get a transcript without needing Teams Premium, an admin enablement, or an IT ticket. Better quality than the built-in Teams Premium transcript feature."
      valueBlock={
        <article className="prose-content">
          <p>
            Microsoft moved Teams meeting recordings from Stream
            (legacy) to OneDrive and SharePoint in 2021. Where exactly
            a recording lives depends on whether it was a private
            meeting (1:1, group chat, or scheduled outside a channel)
            or a channel meeting (started from inside a Teams channel).
            That split matters because the download path is different.
          </p>
          <p>
            Built-in Teams transcripts and Copilot meeting summaries
            are real but locked behind Teams Premium ($10/user/month
            on top of regular M365 / Office 365 license) and require
            admin enablement on the tenant. Many M365 deployments do
            not have them. Mictoo gives you a cleaner transcript than
            Teams Premium on the same recording, free, no admin
            involvement.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🗂️',
          title: 'Find the recording (depends on meeting type)',
          desc: 'Private meeting (1:1, group chat, or non-channel scheduled): OneDrive at My Files › Recordings (organiser owns it). Channel meeting: the SharePoint site backing that channel, inside a Recordings folder created automatically by Teams.',
        },
        {
          icon: '⬇️',
          title: 'Download the MP4',
          desc: 'OneDrive: right-click → Download. SharePoint: same right-click → Download (your channel-member permissions are enough). File size is typically 100-500 MB for a 60-minute Teams meeting at 720p; use the audio-extraction tip for the upload cap.',
        },
        {
          icon: '📝',
          title: 'Drop into Mictoo',
          desc: 'Drag the MP4 (or extracted M4A) onto the upload zone. Transcribes in under a minute. Timestamps, AI summary, exports for TXT / SRT / VTT / DOCX. Cleaner than the Teams Premium transcript on proper nouns and accented speakers.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Teams meeting transcription',
        bullets: [
          {
            title: 'No Teams Premium license required',
            desc: 'Teams Premium ($10/user/mo on top of M365) unlocks built-in transcripts and Copilot meeting summaries. Many enterprises do not buy it for everyone. Mictoo is free per file. The contractor without Teams Premium, the small team where only the manager has a license, the new hire still waiting for license provisioning, all can get transcripts immediately.',
          },
          {
            title: 'No IT enablement or admin ticket',
            desc: 'Teams Premium meeting features require tenant-level admin enablement and per-user policy assignment. Mictoo lives entirely outside your M365 tenant. No admin to ask, no ticket to file, no policy change pending review.',
          },
          {
            title: 'Better text accuracy than Teams Premium transcript',
            desc: 'Teams Premium transcript uses Microsoft internal ASR. Mictoo uses Whisper large-v3, which handles proper nouns (people, companies, technical acronyms), domain jargon, and accented speakers noticeably better. Side-by-side on the same recording, the difference is visible.',
          },
          {
            title: 'Works on any meeting type (private and channel)',
            desc: 'Whether your recording is in OneDrive (private) or SharePoint (channel), the download-and-upload workflow is the same. Mictoo does not care about the meeting type, only about getting a file it can read.',
          },
          {
            title: 'Compatible with regulated and Government Cloud environments',
            desc: 'You are responsible for data residency and compliance, of course. But the workflow (export Teams recording to local machine, upload elsewhere for processing) is the same pattern used by many compliance-reviewed third-party tools. The recording itself stays where M365 policy puts it; Mictoo processes a copy you download.',
          },
        ],
      }}
      useCases={{
        title: 'Teams-specific transcription scenarios',
        items: [
          {
            title: 'M365 tenants without Teams Premium',
            desc: 'Most regular M365 / Office 365 subscriptions do not include Teams Premium by default. Recording works (it is in base M365), but transcripts do not. Mictoo fills that gap without the per-user upgrade cost.',
          },
          {
            title: 'Contractors and external participants',
            desc: 'External consultants, contractors, and partner-org participants typically do not have a license in the host M365 tenant. They cannot use tenant-side Teams Premium transcripts on the recording. They can download the shared recording (if granted) and transcribe on their own with Mictoo.',
          },
          {
            title: 'Channel-meeting recordings for asynchronous catch-up',
            desc: 'Teams channel meetings save to the channel SharePoint site. Anyone with channel-member permissions can download. Transcript becomes the asynchronous catch-up artefact for team members who could not attend live.',
          },
          {
            title: 'Customer support escalation calls inside Teams',
            desc: 'Enterprise customer support teams jumping on Teams calls for complex tickets. Transcript becomes the ticket note. Saves the rep from re-typing the customer description.',
          },
          {
            title: 'Recorded all-hands and town halls',
            desc: 'Large all-hands meetings recorded for employees who could not attend live. Mictoo transcript + summary feeds an internal newsletter or recap email without needing Teams Premium across the entire workforce.',
          },
          {
            title: 'Training sessions and recorded onboarding',
            desc: 'L&D teams recording Teams sessions for new-hire onboarding libraries. Transcript becomes the searchable text alongside the video, with SRT captions for accessibility, all without the Teams Premium tier.',
          },
        ],
      }}
      proTips={{
        title: 'Teams-specific tips',
        tips: [
          {
            title: 'Private vs channel meeting: check the chat for the recording link',
            desc: 'Teams posts the recording link in the meeting chat once processing finishes. Click the link to land directly in OneDrive (private) or SharePoint (channel) at the correct file. Saves you the "where exactly is this" hunt.',
          },
          {
            title: 'Strip audio locally for large Teams MP4s',
            desc: 'A 60-minute Teams MP4 at 720p is typically 200-400 MB. Extract just the audio with ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a. Resulting M4A is 5-20 MB and transcribes identically. Under the 60 MB Mictoo cap.',
          },
          {
            title: 'Channel meeting permissions follow SharePoint, not Teams',
            desc: 'If you cannot download a channel meeting recording, the issue is SharePoint site permissions, not Teams. Ask the channel owner to share the Recordings folder or the specific file. Same SharePoint sharing model as any other document.',
          },
          {
            title: 'Tenant retention policy controls how long recordings persist',
            desc: 'Many enterprise tenants apply automatic deletion to Teams recordings (90 days, 180 days, 365 days are common). Download what you need before retention kicks in. The downloaded copy is not subject to the tenant policy.',
          },
          {
            title: 'For frequent transcription, talk to IT about the workflow',
            desc: 'If your team starts transcribing many Teams recordings regularly, mention it to IT / compliance. Some environments restrict export of meeting recordings; some require data classification before processing externally. The default M365 setup usually allows it, but check.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Where Teams recordings actually live, in detail</h2>
          <p>
            Teams moved meeting recordings from Stream (legacy, deprecated
            2024) to OneDrive and SharePoint between 2021 and 2024. The
            current state of where a recording lands depends entirely
            on what type of meeting it was.
          </p>
          <h3>Private meetings (1:1, group chat, scheduled outside channels)</h3>
          <p>
            A private meeting is one started from a 1:1 chat, a group
            chat, or scheduled via Outlook / Teams calendar without
            being attached to a Teams channel. Recordings of these
            meetings save to the organiser OneDrive at:
          </p>
          <p>
            <code>OneDrive › My Files › Recordings</code>
          </p>
          <p>
            File naming: <code>&lt;Meeting subject&gt;-&lt;date&gt;.mp4</code>.
            The organiser is the owner; participants who were in the
            meeting get automatic view + download permission. External
            (non-tenant) participants get a sharing link if the
            organiser grants it.
          </p>
          <h3>Channel meetings (started from a Teams channel)</h3>
          <p>
            A channel meeting is one started from inside a Teams
            channel (the Meet now button on a channel, or scheduled
            with the channel selected as the location). Recordings of
            these save to the SharePoint site that backs that channel:
          </p>
          <p>
            <code>&lt;SharePoint site for the team&gt; › Documents › Recordings</code>
          </p>
          <p>
            Permissions follow the channel: all channel members can
            view and download. The Recordings folder is created
            automatically on first recording. File naming similar to
            private meetings.
          </p>
          <h3>Built-in Teams transcripts (Teams Premium feature)</h3>
          <p>
            Teams Premium is a separately licensed M365 add-on
            ($10/user/month) that unlocks:
          </p>
          <ul>
            <li>Live transcript during the meeting (text appears in the side panel)</li>
            <li>Post-meeting transcript file (saved alongside the recording)</li>
            <li>Copilot meeting summary (using Microsoft 365 Copilot)</li>
            <li>Speaker labels in the transcript (uses M365 identity directory)</li>
          </ul>
          <p>
            Without Teams Premium, the recording still works but no
            built-in transcript is generated. Many enterprise M365
            deployments do not have Teams Premium because of the
            per-user cost; transcript becomes a third-party need.
          </p>
          <h3>Government Cloud (GCC / GCC High / DoD)</h3>
          <p>
            Microsoft Government Cloud tenants have additional
            restrictions on data residency, where recordings and
            transcripts can live, and which Copilot / AI features are
            available. Teams Premium availability in GCC environments
            varies. The recording itself still saves to
            OneDrive/SharePoint within the GCC tenant boundary.
            Processing recordings outside the GCC boundary (including
            with third-party tools) requires careful compliance review.
          </p>
          <h3>Retention policies and recording lifetime</h3>
          <p>
            Teams Admin Center allows tenant admins to set automatic
            retention policies for meeting recordings (delete after 30
            days, 90 days, 365 days, etc). When the policy kicks in,
            the recording is moved to recycle bin and eventually
            permanently deleted. Common patterns: 90-day retention for
            most enterprises, longer for regulated industries.
          </p>
          <p>
            If you need transcripts before retention deletion, download
            the recording locally first. The local copy is outside
            tenant policy. Whether you can keep it locally depends on
            your organisation data handling rules.
          </p>
          <h3>Comparison with Mictoo transcript</h3>
          <p>
            Teams Premium transcript uses Microsoft internal ASR.
            Mictoo uses Whisper large-v3. Text accuracy: Mictoo is
            noticeably better on proper nouns, technical terms, and
            accented speakers. Speaker labels: Teams Premium has them
            (using your M365 identity directory), Mictoo does not.
            Cost: Teams Premium is $10/user/month, Mictoo is free per
            file. For most enterprises, Mictoo on a few representative
            recordings can validate the quality difference before
            making the wider transcription-tool decision.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Do I need Teams Premium to use Mictoo?',
          a: 'No. Teams Premium is required for the built-in Teams transcript feature. Mictoo transcribes any recording you can download from OneDrive or SharePoint, regardless of whether the meeting host has Teams Premium. Free per file under 60 MB.',
        },
        {
          q: 'Where exactly does Teams save the meeting recording?',
          a: 'Depends on the meeting type. Private meetings (1:1, group chat, or non-channel scheduled): organiser OneDrive at My Files › Recordings. Channel meetings (started from inside a Teams channel): the SharePoint site for that channel, in a Recordings folder. The meeting chat usually has the direct link.',
        },
        {
          q: 'How does Mictoo compare to the built-in Teams Premium transcript?',
          a: 'Better text accuracy (Whisper large-v3 vs Microsoft internal ASR) but no speaker labels. Teams Premium has labels using your M365 identity directory, which is useful when knowing who said what matters. For accuracy on proper nouns, technical jargon, and accented speakers, Mictoo wins.',
        },
        {
          q: 'Can I download a channel meeting recording if I am just a channel member?',
          a: 'Yes. Channel members have view + download permission on the Recordings folder of the SharePoint site backing that channel. If download is blocked, it is a SharePoint site permission setting (not a Teams setting). Channel owner or SharePoint admin can adjust.',
        },
        {
          q: 'My Teams MP4 is over 60 MB. What do I do?',
          a: 'Most 60-minute Teams recordings exceed 60 MB at 720p. Extract just the audio with ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a. Resulting M4A is typically 5-20 MB. Same transcript quality, fits under the upload cap.',
        },
        {
          q: 'Does Mictoo work in Government Cloud (GCC / GCC High) environments?',
          a: 'The recording download from your GCC tenant is normal M365 export. Uploading to Mictoo for processing is the moment data crosses the GCC boundary, which is subject to your organisation compliance review. Many GCC environments restrict this; check with your security team. The recording itself stays in GCC; Mictoo processes a downloaded copy.',
        },
        {
          q: 'How long do Teams recordings stay before retention deletes them?',
          a: 'Depends on tenant retention policy. Common values: 30 days, 90 days, 180 days, 365 days. Some tenants have no retention policy (recordings persist indefinitely). Check with IT or look at the file Details panel in OneDrive / SharePoint for the retention label.',
        },
        {
          q: 'Will the Mictoo transcript have speaker labels like Teams Premium?',
          a: 'No. Mictoo does not currently distinguish speakers (continuous text). Teams Premium adds labels using your M365 identity directory. Speaker diarisation is on our Pro tier roadmap. For now, if labels are critical, Teams Premium is the option that has them (with weaker text accuracy).',
        },
        {
          q: 'Can I transcribe Teams Live Events or Webinars?',
          a: 'Yes, as long as you can download the MP4. Teams Live Events save to OneDrive / SharePoint same as regular meetings. Teams Webinars similarly. The transcription does not care about the meeting type.',
        },
        {
          q: 'What about Teams meetings recorded with Stream (legacy)?',
          a: 'Microsoft retired Stream (Classic) in early 2024 and migrated existing recordings to OneDrive / SharePoint. If your old Stream recording still exists, it should now be findable in OneDrive or SharePoint via the M365 Stream app (which now indexes the new storage location). Download the MP4 there and upload to Mictoo.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your Teams recording, no Premium license needed
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Private meeting from OneDrive or channel meeting from SharePoint. Better transcript than Teams Premium, no IT ticket.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload Teams recording
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting transcription (any platform)', desc: 'Umbrella page for any meeting tool.' },
        { href: '/zoom-transcription', label: 'Zoom transcription', desc: 'Cloud Recording and Local Recording paths.' },
        { href: '/google-meet-transcription', label: 'Google Meet transcription', desc: 'Workspace tier matrix.' },
        { href: '/business-transcription', label: 'Business transcription', desc: 'Corporate / regulated workflows.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For 1:1 interview recordings.' },
      ]}
    />
  )
}
