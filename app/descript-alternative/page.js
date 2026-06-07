import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Descript Alternative: Transcription Without the Full Video Editor | Mictoo',
  description:
    'A Descript alternative for people who just want the transcript, summary, SRT, and DOCX export. No project setup, no editing timeline, no monthly plan. Upload your file, get the text.',
  alternates: {
    canonical: 'https://mictoo.com/descript-alternative',
    languages: {
      'en': 'https://mictoo.com/descript-alternative',
      'fr': 'https://mictoo.com/fr/descript-alternative',
      'de': 'https://mictoo.com/de/descript-alternative',
      'es': 'https://mictoo.com/es/descript-alternative',
      'ru': 'https://mictoo.com/ru/descript-alternative',
      'it': 'https://mictoo.com/it/descript-alternative',
      'pt': 'https://mictoo.com/pt/descript-alternative',
      'pl': 'https://mictoo.com/pl/descript-alternative',
      'ja': 'https://mictoo.com/ja/descript-alternative',
      'ko': 'https://mictoo.com/ko/descript-alternative',
      'x-default': 'https://mictoo.com/descript-alternative',
    },
  },
  openGraph: {
    title: 'Descript Alternative: Transcription Without the Editor | Mictoo',
    description: 'Upload your file, get the transcript, summary, and exports. No project setup, no editing timeline. Free.',
    url: 'https://mictoo.com/descript-alternative',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Descript Alternative: Transcription Without the Editor',
    description: 'Upload your file, get the transcript, summary, and exports. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Descript Alternative · Free · No editor"
      h1="Descript Alternative"
      subtitle="A focused transcription tool for people who do not need the full video editor. Drop your audio or video file, get the transcript, summary, and clean exports. No project to set up, no timeline to open."
      competitorName="Descript"

      quickFit={{
        mictoo: [
          'You just need a transcript from a recording you already have',
          'You want SRT, VTT, TXT, or DOCX exports without learning a new tool',
          'You only transcribe occasionally and do not want a monthly subscription',
          'You want an AI summary alongside the transcript',
          'You want to start in 10 seconds without creating a project',
        ],
        competitor: [
          'You need to edit the audio or video itself, not just the transcript',
          'You record podcasts in studio and edit by deleting text in the transcript',
          'You produce video content end-to-end and want one tool for the whole workflow',
          'You need overdub, screen recording, or speaker-replacement features',
          'Your team already lives inside Descript and shares projects daily',
        ],
      }}

      mainAngle={
        <article className="prose-content">
          <h2>The angle: transcription without the video editor</h2>
          <p>
            Descript is fundamentally a video and audio editor with a
            transcription engine built in. The transcript exists so you can
            edit your media by editing text. That is genuinely useful if
            editing is what you do all day. If you only need the text,
            most of Descript is overhead you do not use.
          </p>
          <p>
            Mictoo is the opposite trade-off: a focused transcription tool
            that gives you the transcript, an AI summary, and the exports
            you need (TXT, SRT, VTT, DOCX). There is no project, no
            timeline, no speaker overdub, no screen recorder. Drop the file
            in, get the text back, paste it where you need it. Most people
            finish in under a minute, which is the whole pitch.
          </p>
          <p>
            Use Mictoo when the transcript is the deliverable, not when
            the video is.
          </p>
        </article>
      }

      rows={[
        { label: 'Uploaded audio and video files', mictoo: 'Yes, drag-and-drop', them: 'Yes, inside a project' },
        { label: 'Project / timeline setup required', mictoo: 'No', them: 'Yes' },
        { label: 'Transcript-based media editing', mictoo: 'No', them: 'Yes, core feature' },
        { label: 'AI summary alongside transcript', mictoo: 'Yes, included', them: 'Available, depending on plan' },
        { label: 'Translation', mictoo: 'Yes, GPT-4o-mini', them: 'Depending on plan' },
        { label: 'SRT / VTT subtitle export', mictoo: 'Yes', them: 'Yes' },
        { label: 'TXT and DOCX export', mictoo: 'Yes, one click', them: 'Yes' },
        { label: 'Speaker labels / diarization', mictoo: 'Not yet (roadmap)', them: 'Yes, built around it' },
        { label: 'Screen recording / video editing', mictoo: 'No', them: 'Yes' },
        { label: 'Signup required', mictoo: 'No', them: 'Yes' },
        { label: 'Best suited for', mictoo: 'Quick transcripts and summaries', them: 'Full media production' },
      ]}

      whyMictoo={[
        {
          icon: '⚡',
          title: 'Transcript in one upload, no project',
          desc: 'Drag your file onto the page. Whisper large-v3 returns a transcript with timestamps in under a minute for most files. No project to name, no timeline to load, no workspace to set up first.',
        },
        {
          icon: '📥',
          title: 'Clean exports without learning a new format',
          desc: 'TXT for plain text, DOCX for a Word document, SRT and VTT for subtitles that drop straight into Premiere, DaVinci, Final Cut, or YouTube. Copy to clipboard if you just want to paste somewhere.',
        },
        {
          icon: '🧠',
          title: 'AI summary out of the box',
          desc: 'Once the transcript finishes, an AI summary appears alongside it. Useful for show notes, meeting recaps, or pulling out the action items without rereading 60 minutes of speech.',
        },
        {
          icon: '🌐',
          title: '50+ languages with auto-detect',
          desc: 'Detect the language automatically or pick from a dropdown. Translate the transcript into another language with one click using GPT-4o-mini. Useful when you record in one language and need to share in another.',
        },
      ]}

      whenBetter={{
        title: 'When Descript is the better fit',
        items: [
          'You edit podcasts or videos by deleting words from the transcript. Descript built its entire interface around this and does it better than anything else.',
          'You need overdub (synthesise speech in your own voice) to fix a misspoken word without re-recording. That is a Descript-specific feature with no equivalent in Mictoo.',
          'You record screen captures, do video editing, and ship finished video content all in one tool. Descript is a real video editor; Mictoo only does transcription.',
          'Your team already collaborates inside Descript projects daily. Switching workflows for the sake of switching does not pay off.',
        ],
      }}

      workflow={[
        {
          title: 'Export your media from Descript',
          desc: 'Use Descript Share or Publish to download the source audio or video. Or just upload the original file directly if you still have it on your drive.',
        },
        {
          title: 'Drop it into Mictoo',
          desc: 'Drag the audio or video onto the page. We accept MP3, WAV, M4A, FLAC, MP4, MOV, WebM, and most other common formats.',
        },
        {
          title: 'Review the transcript',
          desc: 'Read the transcript in the browser, fix any wrong names inline, and check the AI summary in the sidebar.',
        },
        {
          title: 'Export or copy',
          desc: 'Download as TXT, SRT, VTT, or DOCX. Or copy the cleaned text directly to clipboard and paste into Notion, Notes, an email, or a CMS.',
        },
      ]}

      useCases={{
        title: 'Where people pick Mictoo for a Descript-style job',
        items: [
          {
            title: 'Quick podcast transcript from a finished MP3',
            desc: 'You have a finished episode and want show notes or quotes for the website. Mictoo gives you the transcript in under a minute without opening a project in Descript first.',
          },
          {
            title: 'Captions for a video that is already edited',
            desc: 'Your video is final, exported, and online. You need SRT subtitles for YouTube or your editor. Mictoo gives you the SRT from the audio without re-importing into a video editor.',
          },
          {
            title: 'Interview transcripts for an article',
            desc: 'You recorded a 45-minute interview. You want a clean text transcript to pull quotes from for an article. Mictoo returns the transcript with the AI summary in one shot, no editing timeline involved.',
          },
          {
            title: 'Summary of a long Zoom or Loom recording',
            desc: 'A 90-minute call you missed. Drop the recording in, get the transcript plus a summary that flags the decisions and action items. Skip the full Descript project setup.',
          },
        ],
      }}

      faq={[
        {
          q: 'Is Mictoo a good Descript alternative?',
          a: 'Yes, if the transcript is what you actually need. Mictoo focuses on uploading a file and getting back a transcript with timestamps, AI summary, and clean exports. No project setup, no editing timeline, no monthly plan. If you also need a video editor or speaker-overdub features, Descript is still the right tool.',
        },
        {
          q: 'What is the main difference between Mictoo and Descript?',
          a: 'Descript is a media editor with transcription inside it. Mictoo is a transcription tool, full stop. Descript is built so you can edit a podcast or video by editing text. Mictoo is built so you can drop a file in and get the text back fast.',
        },
        {
          q: 'Does Mictoo edit video like Descript?',
          a: 'No. Mictoo does not edit video or audio at all. We transcribe what you upload and return the text. If you also need to cut, splice, or overdub the recording, use Descript or a video editor like DaVinci Resolve or Premiere.',
        },
        {
          q: 'Can I upload audio and video files?',
          a: 'Yes. MP3, WAV, M4A, FLAC, OGG, AAC, WebM, MP4, MOV, plus a few more. For video files we strip the video track and transcribe just the audio. Free for files up to 60 MB.',
        },
        {
          q: 'Can I export subtitles for my video?',
          a: 'Yes. Both SRT and VTT formats with timestamps. Drop the SRT straight into Premiere, DaVinci Resolve, Final Cut, or YouTube and the subtitles align with your video automatically.',
        },
        {
          q: 'Can I summarize the transcript?',
          a: 'Yes. An AI summary appears alongside the transcript automatically as soon as transcription finishes. Useful for show notes, meeting recaps, or pulling action items from a long recording without re-reading the whole thing.',
        },
        {
          q: 'Does Mictoo do speaker labels like Descript?',
          a: 'Not yet. Speaker diarization is on the roadmap for the Pro tier. If you have separate per-speaker recordings, transcribe each one separately for now. Descript handles this in its current product.',
        },
        {
          q: 'Is Mictoo free to try?',
          a: 'Yes. Files up to 60 MB transcribe for free, no signup, no watermark on exports. Larger files are on the roadmap for the Pro tier.',
        },
        {
          q: 'Can I use Mictoo without an account?',
          a: 'Yes for the core transcription, summary, and export workflow. Signing in only adds saved history and the chat-with-transcript feature. Everything else works anonymously.',
        },
        {
          q: 'Which tool should I choose for podcast production?',
          a: 'If you record, edit, and produce the podcast yourself end-to-end, Descript is hard to beat. If you already produce the episode in another tool and just want the transcript and show notes, Mictoo is faster and free.',
        },
      ]}

      cta={{
        title: 'Try Mictoo with your next recording',
        text: 'Upload an audio or video file and see if Mictoo fits your workflow. No project setup, no editing timeline, just transcript and exports.',
        button: 'Upload a file to try',
      }}

      relatedLinks={[
        { href: '/otter-alternative', label: 'Otter alternative' },
        { href: '/turboscribe-alternative', label: 'TurboScribe alternative' },
        { href: '/fireflies-alternative', label: 'Fireflies alternative' },
        { href: '/notta-alternative', label: 'Notta alternative' },
        { href: '/podcast-transcription', label: 'Podcast transcription' },
        { href: '/transcribe-video-to-text', label: 'Video to text' },
      ]}
    />
  )
}
