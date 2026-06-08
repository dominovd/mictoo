import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Zoom Transcription: Cloud Recording & Local MP4 to Text (Better than Zoom Pro Transcripts) | Mictoo',
  description:
    'Drop a Zoom Cloud Recording MP4 or M4A audio-only download and get cleaner text than Zoom built-in transcripts. No Pro+ tier required, no AI Companion license, no cloud quota burned on transcription overhead.',
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
    title: 'Zoom Transcription: Better than Zoom Built-In Transcripts | Mictoo',
    description: 'Drop Zoom Cloud Recording MP4 or M4A. Cleaner than Zoom transcripts, no Pro tier required.',
    url: 'https://mictoo.com/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoom Transcription: No Pro Tier Required',
    description: 'Better than Zoom built-in transcripts. Free.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ZoomTranscriptionPage() {
  return (
    <LandingLayout
      badge="Zoom · Cloud Recording / Local MP4 / M4A audio"
      h1={<>Zoom Transcription<br /><span className="text-brand-600">Better than Zoom built-in transcripts</span></>}
      subtitle="Drop a Zoom Cloud Recording MP4 (or the M4A audio-only download) and get a cleaner transcript than Zoom audio transcript feature, without needing a Pro+ license, AI Companion add-on, or cloud quota spent on transcription overhead."
      valueBlock={
        <article className="prose-content">
          <p>
            Zoom has its own audio-transcript feature inside Cloud
            Recording (Pro and higher) and a newer AI Companion that
            generates summaries. They work, but the ASR underneath is
            noticeably weaker than Whisper large-v3 for proper names,
            technical jargon, and accented speakers, and both features
            require specific paid tiers.
          </p>
          <p>
            Mictoo gives you the transcript on top of the recording
            you already have, regardless of your Zoom plan. Free Zoom
            account with Local Recording? Works. Pro account with
            Cloud Recording but no AI Companion license? Works.
            Recording that someone shared with you? Works. Drop the
            MP4 or M4A, get the text in under a minute.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '☁️',
          title: 'Get the recording (Cloud or Local)',
          desc: 'Cloud Recording: zoom.us → Recordings → click the meeting → Download. You get both the MP4 (full video) and an M4A audio-only file. Local Recording: under Documents/Zoom/ on Mac and Linux, Documents\\Zoom\\ on Windows. The audio file is named audio_only.m4a inside the meeting folder.',
        },
        {
          icon: '🎵',
          title: 'Prefer M4A audio-only (10× smaller)',
          desc: 'Zoom Cloud Recording exports an M4A audio-only file alongside the MP4. The M4A is roughly 10× smaller (60-minute meeting: ~25 MB vs ~300 MB MP4) and transcribes identically. Use the MP4 only if you need the video for something else.',
        },
        {
          icon: '⚡',
          title: 'Drop into Mictoo',
          desc: 'Drag the M4A or MP4 onto the upload zone. A 30-minute Zoom meeting transcribes in 30-50 seconds with timestamps, AI summary, and exports for TXT, SRT, VTT, DOCX.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo over Zoom built-in transcripts',
        bullets: [
          {
            title: 'Whisper large-v3 vs older Zoom ASR',
            desc: 'Zoom audio transcripts use an older speech-recognition stack. Whisper large-v3 handles proper nouns (people, companies, products), technical jargon, and accented speakers noticeably better. The difference shows on the first real meeting you compare.',
          },
          {
            title: 'No Zoom Pro+ tier required for transcription',
            desc: 'Zoom audio transcript feature requires Pro, Business, or higher tier. Zoom AI Companion (for summaries) requires the AI Companion add-on license. Mictoo is free per file. Run it on recordings from any Zoom account, including Free.',
          },
          {
            title: 'No cloud quota spent on transcription metadata',
            desc: 'Zoom Cloud Recording storage is metered. Audio transcripts and AI summaries add to that storage budget on your Zoom account. Mictoo transcription happens entirely off Zoom, so your Zoom cloud quota goes to the recordings themselves, not transcription artefacts.',
          },
          {
            title: 'Works on shared / inherited recordings',
            desc: 'Someone shared a Zoom Cloud Recording link with you. You can download the MP4 even on a Free account. Drop into Mictoo for the transcript. No need for the recording owner to enable transcripts on their account or to have a specific tier.',
          },
          {
            title: 'Same tool for Local Recording (no cloud at all)',
            desc: 'Zoom Local Recording (the Record button → To this Computer option) saves directly to disk on any account tier including Free. Drop those files in the same way. No cloud step in the pipeline at all if you do not want one.',
          },
        ],
      }}
      useCases={{
        title: 'Zoom-specific transcription scenarios',
        items: [
          {
            title: 'Client calls and consulting sessions',
            desc: 'Recorded Zoom calls with clients. Transcript becomes the input for the follow-up email, project notes, and the deliverable doc. AI summary saves the "what did we agree on" recap step.',
          },
          {
            title: 'Recruiter and candidate screens',
            desc: 'Zoom interviews recorded for the hiring team to review asynchronously. Transcript helps the next-stage interviewer prep without re-watching the full 45 minutes.',
          },
          {
            title: 'Webinar recordings (Zoom Webinar product)',
            desc: 'Recorded webinars from Zoom Webinar product. Transcript becomes the SEO-friendly text companion to the video replay. Summary feeds the recap blog post or email to non-attendees.',
          },
          {
            title: 'Podcast guests recorded over Zoom',
            desc: 'Many indie podcasts record on Zoom. The audio-only M4A from Cloud Recording (or Local Recording) becomes the input for both the episode edit and the transcript for show notes.',
          },
          {
            title: 'User research interviews on Zoom',
            desc: 'PMs and researchers running customer interviews on Zoom. Transcript IS the research data. Drop into research repo with the recording link for source.',
          },
          {
            title: 'Recorded meetings for team members who could not attend',
            desc: 'Async-friendly culture: record the meeting, transcribe, share the summary + transcript link. Saves a 60-minute meeting watch for someone who just needs the highlights.',
          },
        ],
      }}
      proTips={{
        title: 'Zoom-specific tips',
        tips: [
          {
            title: 'Always download the M4A audio-only, not the MP4 video',
            desc: 'Cloud Recording portal offers separate downloads: Shared Screen with Speaker View (MP4 video), Audio Only (M4A), Chat File (TXT). Pick Audio Only. The MP4 is 10× bigger and transcribes the same.',
          },
          {
            title: 'For Local Recording, look in the audio_only.m4a file',
            desc: 'Zoom Local Recording produces several files: zoom_0.mp4 (video), audio_only.m4a (audio), chat.txt (chat). Upload audio_only.m4a directly. Smaller, faster, same transcript.',
          },
          {
            title: 'Speaker view vs gallery view: no transcript difference',
            desc: 'The video layout you choose (gallery, speaker, side-by-side) affects only the video. The audio track is identical. So the layout you recorded with does not change transcription quality.',
          },
          {
            title: 'For multi-speaker meetings, expect continuous text',
            desc: 'Mictoo does not currently distinguish speakers ("Speaker 1: ... Speaker 2: ..."). Zoom built-in transcript does add speaker labels but with lower text accuracy. Trade-off; for now, choose accuracy. Diarisation is on our Pro roadmap.',
          },
          {
            title: 'Cloud Recording quota cleanup: keep raw, delete transcripts',
            desc: 'If you keep your Zoom Cloud Recording but want to reduce quota, deleting the auto-generated audio transcript file inside the recording reduces storage. The MP4/M4A stays; the JSON transcript Zoom generated goes. Then run Mictoo on the audio for a better transcript on your side.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Zoom recording mechanics, in detail</h2>
          <p>
            Zoom has two recording modes with quite different file
            outputs and storage paths. Understanding which one your
            meeting used is the only friction step in getting the
            recording to Mictoo.
          </p>
          <h3>Cloud Recording (Pro and higher)</h3>
          <p>
            When a meeting is recorded to Cloud, Zoom stores the
            recording on its own servers under your account quota. To
            download: log in to zoom.us, open Recordings in the left
            menu, find the meeting (sorted by date), click the title,
            and the file list appears. You will see:
          </p>
          <ul>
            <li><strong>Shared Screen with Speaker View / Gallery View</strong>: MP4 video, typically 100-500 MB per hour</li>
            <li><strong>Audio Only</strong>: M4A file, typically 15-30 MB per hour</li>
            <li><strong>Chat File</strong>: TXT of the in-meeting chat</li>
            <li><strong>Closed Caption / Transcript</strong>: VTT or TXT if Zoom audio transcript is enabled on your account</li>
            <li><strong>Audio Transcript</strong>: separate JSON if AI Companion summaries are enabled</li>
          </ul>
          <p>
            For Mictoo, download the Audio Only M4A. It is by far the
            smallest file and transcribes with identical quality.
          </p>
          <h3>Local Recording (any account, including Free)</h3>
          <p>
            Free Zoom accounts can record locally to the host machine
            with the Record button → Record on this Computer option.
            File path:
          </p>
          <ul>
            <li>Mac: <code>~/Documents/Zoom/&lt;date&gt; &lt;meeting-name&gt;/</code></li>
            <li>Windows: <code>Documents\Zoom\&lt;date&gt; &lt;meeting-name&gt;\</code></li>
            <li>Linux: <code>~/Documents/Zoom/&lt;date&gt; &lt;meeting-name&gt;/</code></li>
          </ul>
          <p>
            Inside that folder: <code>zoom_0.mp4</code> (video),
            <code>audio_only.m4a</code> (audio extracted), and
            <code>chat.txt</code>. Upload the M4A directly.
          </p>
          <h3>Cloud Recording quota and what to delete</h3>
          <p>
            Zoom Cloud Recording storage is metered per tier (Pro: 5
            GB; Business: 5 GB per user; Enterprise: 10 GB+ per user
            depending on contract; unlimited cloud storage is an add-on).
            When you hit quota, new recordings either replace old ones
            or fail to save depending on settings.
          </p>
          <p>
            If quota matters: download the M4A, transcribe with
            Mictoo, then either keep the M4A locally (no cloud quota)
            or delete the entire Cloud Recording (it is now redundant
            with your local copy + Mictoo transcript). The Zoom
            auto-transcript JSON / VTT files inside the recording also
            count toward quota; deleting them reduces footprint
            without losing the recording itself.
          </p>
          <h3>Built-in Zoom audio transcript vs Whisper</h3>
          <p>
            Zoom audio transcript (the VTT inside Cloud Recording) is
            generated by Zoom internal ASR pipeline. It includes
            speaker labels (a meaningful advantage) but is noticeably
            weaker than Whisper large-v3 on proper nouns, technical
            terms, and accented speakers. For a quick scan with
            speaker labels, the built-in transcript is fine. For
            accuracy when the transcript is the actual deliverable
            (article, citation, training material), Whisper output is
            cleaner.
          </p>
          <h3>Zoom AI Companion summary vs Mictoo AI summary</h3>
          <p>
            Zoom AI Companion is a separately licensed add-on that
            generates meeting summaries inside Zoom. The quality is
            reasonable for the most common meeting shape (status
            check-ins, project syncs). Mictoo AI summary runs over the
            Whisper transcript and tends to be more detailed because
            the underlying transcript is cleaner. The trade-off: Zoom
            AI Companion appears inside your Zoom workflow
            automatically; Mictoo requires the upload step.
          </p>
          <h3>Speaker layout and audio quality</h3>
          <p>
            The recording layout you picked (Speaker View, Gallery
            View, side-by-side) affects the video composition only.
            The audio track is the same across layouts. Audio quality
            in Zoom is constrained by the original mic setup, network
            conditions, and Zoom Original Sound for Musicians option
            (which preserves higher-fidelity audio if enabled before
            recording).
          </p>
        </article>
      }
      faq={[
        {
          q: 'Do I need Zoom Pro or higher to use Mictoo?',
          a: 'No. Mictoo transcribes any recording you can download to your computer. Free Zoom with Local Recording works. Pro Zoom with Cloud Recording works. Recording shared with you also works (anyone can download a shared Cloud Recording even on a Free account).',
        },
        {
          q: 'Is Mictoo better than Zoom built-in audio transcript?',
          a: 'On text accuracy, yes, noticeably. Zoom audio transcript uses older ASR; Mictoo uses Whisper large-v3. The difference shows on proper nouns, technical jargon, and accented speakers. The one thing Zoom built-in transcript has that Mictoo currently does not is speaker labels (diarisation). For us, that is on the Pro tier roadmap.',
        },
        {
          q: 'Should I download MP4 or M4A from Cloud Recording?',
          a: 'M4A. The M4A audio-only file is roughly 10x smaller than the MP4 (60-minute meeting: ~25 MB M4A vs ~300 MB MP4) and transcribes identically. Download MP4 only if you also need the video for something else (re-watching, captioning the video itself).',
        },
        {
          q: 'Where does Zoom save Local Recording files?',
          a: 'Mac: ~/Documents/Zoom/<date> <meeting-name>/. Windows: Documents\\Zoom\\<date> <meeting-name>\\. Linux: ~/Documents/Zoom/<date> <meeting-name>/. Inside that folder: audio_only.m4a is what you upload to Mictoo. zoom_0.mp4 is the video version (also works but bigger).',
        },
        {
          q: 'My Zoom meeting is over 60 MB. What do I do?',
          a: 'You probably downloaded the MP4 instead of the M4A. Go back to zoom.us → Recordings → your meeting and grab the Audio Only file instead. If you only have the MP4, run ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a to strip just the audio (file becomes ~10-25 MB).',
        },
        {
          q: 'Can I transcribe a Zoom meeting where I was a participant, not the host?',
          a: 'Only if the host shared the Cloud Recording with you (download link) or you separately recorded locally on your machine (which requires host permission via Allow Participants to Record). Without one of those, you do not have the file.',
        },
        {
          q: 'Does Mictoo affect my Zoom Cloud Recording storage quota?',
          a: 'No. Mictoo transcription runs entirely off Zoom infrastructure. Nothing gets written back to your Zoom account. Your cloud quota only stores what Zoom itself produces (MP4, M4A, optional Zoom audio transcript, optional AI Companion summary).',
        },
        {
          q: 'Can I get the AI summary like Zoom AI Companion?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Works on any recording regardless of whether Zoom AI Companion is licensed on the meeting host account. Often more detailed than Zoom AI Companion summary because the underlying transcript (Whisper) is cleaner.',
        },
        {
          q: 'What about Zoom Webinar product recordings?',
          a: 'Same as regular Zoom Meeting recordings. The MP4 and M4A files come out of zoom.us Recordings the same way. Drop into Mictoo for the transcript. Useful for SEO-friendly text companion to your webinar replay page.',
        },
        {
          q: 'Does Mictoo work for non-English Zoom meetings?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For meetings under 5 minutes or non-English content, set the language explicitly in the dropdown for cleaner first-pass detection. Translation to another language is one click after transcription.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your Zoom recording, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            M4A audio-only from Cloud Recording, MP4 from Local Recording, or anything in between. Better quality than Zoom built-in transcripts.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload Zoom recording
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting transcription (any platform)', desc: 'Umbrella page for any meeting tool.' },
        { href: '/google-meet-transcription', label: 'Google Meet transcription', desc: 'Workspace tier matrix.' },
        { href: '/teams-meeting-transcription', label: 'Teams transcription', desc: 'OneDrive / SharePoint paths.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For 1:1 interview recordings.' },
        { href: '/webinar-transcription', label: 'Webinar transcription', desc: 'For one-to-many presentations.' },
      ]}
    />
  )
}
