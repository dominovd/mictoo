import ComparisonLayout from '@/components/ComparisonLayout'

export const metadata = {
  title: 'Otter Alternative: Transcribe Recordings, Not Live Meeting Notes | Mictoo',
  description:
    'Transcribe interviews, lectures, podcasts, and uploaded recordings without the live-meeting overhead. Drop the file, get a clean transcript with summary and exports.',
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
    title: 'Otter Alternative: Recording Transcription Without Live-Meeting Overhead | Mictoo',
    description: 'Transcribe interviews, lectures, podcasts, and uploaded recordings. Free, no signup.',
    url: 'https://mictoo.com/otter-alternative',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otter Alternative: Recording Transcription Without Live-Meeting Overhead',
    description: 'Transcribe interviews, lectures, podcasts. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function OtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Otter Alternative · No live notes · No subscription"
      h1="Otter Alternative"
      subtitle="A transcription tool for recordings you already have: interviews, lectures, podcasts, uploaded audio and video. No live meeting notes, no team highlights, no real-time word display. Just upload and get the text."
      competitorName="Otter"

      quickFit={{
        mictoo: [
          'You transcribe interviews, lectures, podcasts, or uploaded recordings',
          'You do not need live captions during a meeting',
          'You want clean exports (TXT, SRT, VTT, DOCX) without a workspace',
          'You are a journalist, researcher, student, or solo content creator',
          'You want a tool you can use occasionally without a subscription',
        ],
        competitor: [
          'You want live captions appearing in real time during your meeting',
          'Your team takes collaborative live notes during calls',
          'You rely on automatic meeting joining via Otter Assistant',
          'You need team-wide search across all colleagues meeting transcripts',
          'You use Otter highlights, comments, and live action items in workflow',
        ],
      }}

      mainAngle={
        <article className="prose-content">
          <h2>The angle: transcribe recordings, do not manage live meetings</h2>
          <p>
            Otter became popular because it transcribes meetings in real
            time and turns them into shared notes a team can highlight and
            comment on. That is a useful product if you spend your day in
            meetings and need live collaborative notes.
          </p>
          <p>
            Most people who land on this page are looking for something
            else. They have a recording: an interview, a recorded lecture, a
            podcast episode, a finished Zoom call. They want a clean
            transcript and maybe a summary. They do not need the live word
            display, the meeting assistant joining calls, or the team
            workspace of highlights and comments.
          </p>
          <p>
            Mictoo handles that simpler case. Drop the recording in, get
            the transcript and an AI summary back, export TXT, SRT, VTT, or
            DOCX. No assistant, no live captions, no workspace setup. If
            you need any of those, Otter still does them better; the rest
            of this page explains exactly when to choose which.
          </p>
        </article>
      }

      rows={[
        { label: 'Transcribe uploaded recordings', mictoo: 'Yes, drag-and-drop', them: 'Yes' },
        { label: 'Live captions during a meeting', mictoo: 'No', them: 'Yes, built around it' },
        { label: 'Meeting assistant auto-joins calls', mictoo: 'No', them: 'Yes, depending on plan' },
        { label: 'AI summary alongside transcript', mictoo: 'Yes, included', them: 'Yes, depending on plan' },
        { label: 'Team workspace with shared notes', mictoo: 'No', them: 'Yes, core feature' },
        { label: 'Highlights, comments, action items', mictoo: 'No', them: 'Yes' },
        { label: 'SRT / VTT subtitle export', mictoo: 'Yes', them: 'Available depending on plan' },
        { label: 'TXT and DOCX export', mictoo: 'Yes, one click', them: 'Available depending on plan' },
        { label: 'Translation', mictoo: 'Yes, GPT-4o-mini', them: 'Depending on plan' },
        { label: 'Signup required', mictoo: 'No', them: 'Yes' },
        { label: 'Best suited for', mictoo: 'Recordings you already have', them: 'Live meeting workflows' },
      ]}

      whyMictoo={[
        {
          icon: '🎙️',
          title: 'Built for recordings, not live meetings',
          desc: 'You arrive with a file already in hand: interview MP3, lecture WAV, podcast bounce, Zoom recording. Drop it in, get the transcript back. No assistant to install, no calendar OAuth, no real-time pipeline to configure.',
        },
        {
          icon: '📝',
          title: 'AI summary and clean exports out of the box',
          desc: 'Transcript and summary both appear automatically. Download TXT, SRT, VTT, or DOCX. Copy to clipboard. Paste into Notion, an article draft, an email, the Notes app. No workspace to file it inside.',
        },
        {
          icon: '🌍',
          title: '50+ languages and built-in translation',
          desc: 'Auto-detect the language or set it manually. Translate the transcript into another language with one click. Useful for multilingual interviews, foreign-language lectures, or shipping content to a different market.',
        },
        {
          icon: '💸',
          title: 'Free for occasional use, no per-seat plan',
          desc: 'Files up to 60 MB transcribe free, no signup. Useful for the journalist with one interview a week or the student with one lecture per course. No monthly subscription that goes unused on quiet days.',
        },
      ]}

      whenBetter={{
        title: 'When Otter is the better fit',
        items: [
          'You need live captions appearing on screen while a meeting is happening, especially for accessibility or hearing-impaired participants.',
          'Your team takes collaborative notes during meetings, highlighting key moments together in real time. That is what Otter Notes was built for.',
          'You want Otter Assistant to join your meetings automatically, capture audio, and produce notes without any manual recording or upload step.',
          'You need team-wide search across every meeting your colleagues have had, with permissions and sharing handled inside Otter.',
        ],
      }}

      workflow={[
        {
          title: 'Get your recording',
          desc: 'Export from your recorder, your meeting platform (Zoom Cloud Recording, Teams, Google Meet), or your phone Voice Memos app.',
        },
        {
          title: 'Drop it into Mictoo',
          desc: 'Drag the audio or video file onto the page. We accept MP3, M4A, WAV, MP4, MOV, WebM, FLAC, OGG, AAC and most other common formats.',
        },
        {
          title: 'Review the transcript and summary',
          desc: 'Read in the browser, fix any wrong names inline, check the AI summary in the sidebar. Use the search box to find specific quotes.',
        },
        {
          title: 'Export or copy',
          desc: 'Download TXT, SRT, VTT, or DOCX. Or copy the cleaned text to clipboard and paste into your CMS, article, or research notes.',
        },
      ]}

      useCases={{
        title: 'When people pick Mictoo over Otter',
        items: [
          {
            title: 'Interviews for an article',
            desc: 'Journalists and researchers recording one or two interviews a week. Upload the recording, get the transcript plus summary, pull quotes for the piece. No meeting workspace needed.',
          },
          {
            title: 'Recorded lectures and seminars',
            desc: 'Students recording lectures on iPhone or laptop, professors archiving their own course content. Transcribe each lecture to a searchable text version without a live-notes infrastructure.',
          },
          {
            title: 'Podcast episodes and show notes',
            desc: 'Solo podcasters and small podcast teams. Upload the finished episode (or the raw recording before editing) and use the transcript plus summary as the basis for show notes and episode pages.',
          },
          {
            title: 'External webinar or panel recordings',
            desc: 'You attended a webinar and have the recording. Transcribe it for personal notes, quotes, or to write a recap article. One-off use, no reason to onboard into a team workspace.',
          },
        ],
      }}

      faq={[
        {
          q: 'Is Mictoo a good Otter alternative?',
          a: 'Yes, if you mainly transcribe recordings you already have rather than capturing live meetings. Mictoo focuses on uploading a file and getting a transcript, summary, and exports. If you need live captions or real-time team notes during meetings, Otter is built for that and Mictoo is not.',
        },
        {
          q: 'What is the main difference between Mictoo and Otter?',
          a: 'Otter is built around live meeting transcription and collaborative notes during calls. Mictoo is post-meeting only: you upload a recording and get a transcript back. No assistant, no live captions, no team workspace. The choice depends on whether your audio is happening now or already finished.',
        },
        {
          q: 'Does Mictoo create live meeting notes like Otter?',
          a: 'No. Mictoo does not transcribe in real time during a meeting and does not produce shared live notes for a team to highlight. If that is your core need, Otter Notes does it well. Mictoo runs after the recording is finished.',
        },
        {
          q: 'Can I upload audio and video files?',
          a: 'Yes. MP3, M4A, WAV, FLAC, OGG, AAC, MP4, MOV, WebM, and most other common formats. For video files we strip the video track and transcribe just the audio. Free for files up to 60 MB.',
        },
        {
          q: 'Can I export subtitles for a recorded lecture or webinar?',
          a: 'Yes. Both SRT and VTT formats with timestamps. Useful for adding captions to a YouTube upload, dropping into a video editor, or sharing as an accessible text alternative alongside the video.',
        },
        {
          q: 'Can I summarize the transcript?',
          a: 'Yes. The AI summary appears alongside the transcript automatically. Useful for pulling out the main points of a long lecture or interview, or generating show notes for a podcast episode.',
        },
        {
          q: 'Do I need to invite a meeting bot?',
          a: 'No. Mictoo has no bot or meeting assistant. You record the call yourself with your meeting platform or any screen recorder, then upload the file. The trade-off is more manual capture; the upside is privacy and no third-party participant.',
        },
        {
          q: 'Is Mictoo free to try?',
          a: 'Yes. Files up to 60 MB transcribe for free without signup. No watermark on exports. Larger files are on the roadmap for the future Pro tier.',
        },
        {
          q: 'Can I use Mictoo without an account?',
          a: 'Yes for the core upload, transcribe, summarize, and export workflow. Signing in adds history and the chat-with-transcript feature. Everything else works anonymously.',
        },
        {
          q: 'Which tool should I choose for lectures and podcasts?',
          a: 'Mictoo, in most cases. Lectures and podcasts are usually recorded and uploaded after the fact, which is what Mictoo is built for. Otter shines when the transcription happens during the live event, which is rarely the constraint for these formats.',
        },
      ]}

      cta={{
        title: 'Transcribe your next recording without the live-meeting overhead',
        text: 'Upload an interview, lecture, podcast, or any audio file. Transcript and summary back in under a minute, no workspace setup.',
        button: 'Upload a recording',
      }}

      relatedLinks={[
        { href: '/fireflies-alternative', label: 'Fireflies alternative' },
        { href: '/notta-alternative', label: 'Notta alternative' },
        { href: '/descript-alternative', label: 'Descript alternative' },
        { href: '/turboscribe-alternative', label: 'TurboScribe alternative' },
        { href: '/interview-transcription', label: 'Interview transcription' },
        { href: '/lecture-transcription', label: 'Lecture transcription' },
        { href: '/podcast-transcription', label: 'Podcast transcription' },
      ]}
    />
  )
}
