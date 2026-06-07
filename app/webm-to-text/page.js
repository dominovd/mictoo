import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'WebM to Text: Loom, OBS, and Browser Screen-Recording Transcription | Mictoo',
  description:
    'Upload WebM screen recordings from Loom, OBS, or browser MediaRecorder API. We strip the video and transcribe the audio. Editable transcript with timestamps in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'ko': 'https://mictoo.com/ko/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
  openGraph: {
    title: 'WebM to Text: Loom, OBS, Browser Recording Transcription | Mictoo',
    description: 'Upload a WebM screen recording. We extract the audio and return an editable transcript with timestamps.',
    url: 'https://mictoo.com/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM to Text: Loom, OBS, Browser Recording Transcription',
    description: 'Upload a WebM screen recording. We extract the audio and return an editable transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WebmToTextPage() {
  return (
    <LandingLayout
      badge="WebM · Loom · OBS · Screen recording"
      h1={
        <>
          WebM to Text
          <br />
          <span className="text-brand-600">Screen recordings into searchable transcripts</span>
        </>
      }
      subtitle="Loom and OBS exports, Chrome screen captures, browser MediaRecorder downloads. We strip the video, transcribe the audio, return a transcript you can search and quote."
      valueBlock={
        <article className="prose-content">
          <p>
            WebM is the format your browser writes when you record audio or
            video natively. Loom uses it. OBS can. Chrome extensions for
            screen capture default to it. The audio inside is almost always
            Opus, which transcribes well, but the video track makes the file
            big and complicates upload.
          </p>
          <p>
            Drop the WebM in. We extract the audio server-side and discard
            the video. The transcript comes back with timestamps that match
            your original recording, so when you paste a quote back into
            Loom or your video editor, the time stamps still line up.
          </p>
          <p className="text-sm text-slate-500">
            Free for files up to 60 MB. Screen recordings often exceed that;
            see the deep-dive below for an ffmpeg one-liner that extracts
            audio only and produces a tiny file in seconds.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📹',
          title: 'Upload your WebM',
          desc: 'Loom downloads, OBS exports, Chrome screen recordings, browser MediaRecorder dumps. Audio-only or audio-plus-video both work.',
        },
        {
          icon: '✂️',
          title: 'We pull just the audio',
          desc: 'On the server, we demux the WebM to extract the Opus or Vorbis audio track. The video portion (VP8, VP9, or AV1) is ignored entirely. Whisper only ever sees the audio.',
        },
        {
          icon: '🎯',
          title: 'Timestamped transcript ready',
          desc: 'Get TXT for the plain text, SRT or VTT to drop straight into your video editor as captions, DOCX for documentation, JSON for word-level alignment.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for WebM recordings',
        bullets: [
          {
            title: 'No need to extract audio yourself first',
            desc: 'Some transcription tools demand an audio-only file (MP3 or WAV). They will reject a video WebM and tell you to extract the audio in some other app first. We do that step for you, on the server, before transcription.',
          },
          {
            title: 'Timestamps match your original recording',
            desc: 'When you download the SRT or VTT, the timestamps line up with your original WebM video timeline. Drop the subtitle file straight into Loom, YouTube, Premiere, DaVinci Resolve, or Final Cut without any time-offset work.',
          },
          {
            title: 'Works with any WebM audio codec',
            desc: 'WebM audio is almost always Opus (modern), occasionally Vorbis (older files). Both decode automatically. Video codec (VP8, VP9, AV1) does not matter for transcription, we discard it.',
          },
          {
            title: 'Loom-style recordings transcribe cleanly',
            desc: 'Loom records voice from your microphone at the front of the audio mix. That kind of close-mic clean voice is exactly what Whisper handles best, so transcripts of Loom recordings are usually very accurate.',
          },
          {
            title: 'The video stays on your computer',
            desc: 'We do not save or share the video portion. The audio is decoded once for transcription and dropped. Your original WebM on your drive is untouched.',
          },
        ],
      }}
      useCases={{
        title: 'Where WebM files come from',
        items: [
          {
            title: 'Loom screen recordings',
            desc: 'Loom is the dominant async-video tool, especially for SaaS teams. When you click Download on a Loom recording, the file is a WebM. Transcribe it for searchable text of your tutorial, bug report, or design walkthrough.',
          },
          {
            title: 'OBS Studio screencasts',
            desc: 'OBS defaults to MP4 but is commonly configured to record WebM (especially on Linux). Useful for streamers, tutorial creators, and game developers who want a text version of their commentary.',
          },
          {
            title: 'Browser MediaRecorder API exports',
            desc: 'When a web app records audio or video in your browser (interview tool, school assignment recorder, language-learning app), the output is almost always WebM. Drop the downloaded file here.',
          },
          {
            title: 'Chrome and Firefox screen-recorder extensions',
            desc: 'Most browser screen-recorder extensions write WebM because it is the format the browser can produce natively. Smaller and faster than running a separate app like OBS.',
          },
          {
            title: 'Riverside, Riverfm, and async-podcast tools',
            desc: 'Several async-podcast platforms produce WebM for the local backup recording. Useful when the cloud upload failed and you have only the local-file fallback.',
          },
          {
            title: 'Google Meet recordings (in some cases)',
            desc: 'Google Meet usually saves to MP4, but in some configurations (browser-side fallback, specific Workspace setups) the export is WebM. Both work here.',
          },
        ],
      }}
      proTips={{
        title: 'WebM tips that save bandwidth',
        tips: [
          {
            title: 'For large screen recordings, extract audio with ffmpeg first',
            desc: 'A 30-minute Loom recording is often 200+ MB because of the video. Extracting just the audio drops it under 10 MB and uploads in seconds. One-liner: ffmpeg -i input.webm -vn -c:a copy audio.webm (no re-encoding). Upload the audio.webm here.',
          },
          {
            title: 'If the audio codec is Opus, you can also convert to .ogg for compatibility',
            desc: 'ffmpeg -i input.webm -vn -c:a copy audio.ogg also works and may be more compatible with players you also need to use. Mictoo accepts both.',
          },
          {
            title: 'Microphone placement matters more than codec',
            desc: 'Screen recordings often have great visuals but terrible audio because the microphone was 1 meter away from the speaker. For important recordings, use a headset mic or a close mic. Cleaner audio means more accurate transcripts, regardless of WebM vs MP4 vs anything else.',
          },
          {
            title: 'If you need the video separately, keep your WebM around',
            desc: 'We only return the text transcript. If you also want to clip the video, do that with your video editor against the original WebM file. The transcript SRT timestamps will line up with your edits.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>What WebM actually is</h2>
          <p>
            WebM is a container format Google released in 2010 as an
            explicitly open, royalty-free alternative to MP4. It is built on
            a subset of the Matroska (MKV) container, restricted to specific
            video codecs (VP8, VP9, more recently AV1) and audio codecs
            (Vorbis originally, Opus mostly today). The point was to give
            browsers a format they could play natively without licensing
            MPEG patents.
          </p>
          <p>
            It worked. Today every major browser ships with native WebM
            playback, and the format is the default for video APIs built
            into the browser itself. When your web app records audio or
            video using MediaRecorder, WebM is what comes out.
          </p>
          <h3>Why audio-only WebM is rare in the wild</h3>
          <p>
            Most people get a WebM file from a screen recording, a video
            call, or a video upload. Audio-only WebM exists (some podcast
            tools use it) but is much less common. So in practice, when you
            arrive at this page with a WebM in hand, it almost always has
            video inside, which is why we lead with "we strip the video".
          </p>
          <p>
            The audio codec inside is the same Opus codec Telegram uses for
            voice messages: small, clear, voice-friendly. Whisper handles
            Opus at 64 to 96 kbps stereo (typical for screen recordings)
            very well. Your transcript quality depends on microphone
            placement and room noise, not on Opus vs anything else.
          </p>
          <h3>Stripping the video saves a lot of bandwidth</h3>
          <p>
            A typical Loom recording at 720p uses 80 to 95% of its bytes for
            video, and only 5 to 20% for audio. So a 200 MB Loom screen
            recording usually has only 10 to 40 MB of actual audio. The
            ffmpeg one-liner in the Pro tips section extracts that audio
            without re-encoding, in seconds, on any laptop. Drop the
            extracted audio file here and the upload completes much faster
            than uploading the original 200 MB video.
          </p>
          <h3>WebM vs MP4 for the same recording</h3>
          <p>
            Both work in Mictoo. WebM uses Opus audio (slightly more
            efficient at the same bitrate), MP4 uses AAC audio (better
            tool support across legacy software). Transcript quality is
            identical between the two if the source recording quality is
            the same. The choice between them comes down to what your
            recording tool happens to export by default.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            WebM vs other formats for screen recordings
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            All four work in Mictoo. WebM is what your browser writes
            natively, but you can transcribe any of these.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">WebM</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>Matroska subset</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Audio codec</dt><dd>Opus (or Vorbis)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Source</dt><dd>Loom, OBS, browser</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Strip video</dt><dd>Yes, server-side</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-video-to-text" className="hover:text-brand-600">MP4 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>MP4</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Audio codec</dt><dd>AAC</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Source</dt><dd>Phones, cameras, most editors</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Strip video</dt><dd>Yes, server-side</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/ogg-to-text" className="hover:text-brand-600">OGG →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>OGG</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Audio codec</dt><dd>Opus, Vorbis, or FLAC</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Source</dt><dd>Telegram voice, Linux apps</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Strip video</dt><dd>N/A (audio-only)</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>None (codec only)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Audio codec</dt><dd>MP3</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Source</dt><dd>Podcasts, general audio</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Strip video</dt><dd>N/A (audio-only)</dd></div>
              </dl>
            </div>
          </div>
        </>
      }
      faq={[
        {
          q: 'My Loom recording is a WebM. Can I transcribe it directly?',
          a: 'Yes. Download the recording from Loom (it will be a .webm), drop it in here. We extract the audio server-side, transcribe with Whisper, and return the transcript. No need to install any audio extraction tool yourself.',
        },
        {
          q: 'Will the timestamps match my original Loom or video editor timeline?',
          a: 'Yes. SRT and VTT timestamps reference the original WebM timeline, starting at 00:00:00. Drop the SRT into Loom, YouTube, Premiere, DaVinci Resolve, or Final Cut and it lines up automatically.',
        },
        {
          q: 'My WebM is too big (200+ MB). What is the fastest fix?',
          a: 'Extract audio only with ffmpeg, no re-encoding required: ffmpeg -i input.webm -vn -c:a copy audio.webm. The audio-only file is typically 5-20% the size of the full video. Upload the audio.webm here, transcription proceeds normally.',
        },
        {
          q: 'Will OBS WebM recordings work?',
          a: 'Yes, both audio-only and video-plus-audio OBS WebMs. OBS sometimes uses Vorbis for audio (older config) or Opus (newer config). We detect and decode both. If your OBS WebM is over 60 MB, extract audio with the ffmpeg one-liner first.',
        },
        {
          q: 'What audio codecs inside WebM do you support?',
          a: 'Both Opus (the modern default, almost all new WebM files) and Vorbis (the older codec, still present in some older recordings). Detection is automatic from the file headers, you do not specify which one.',
        },
        {
          q: 'What about the video codec (VP8, VP9, AV1) inside WebM?',
          a: 'Irrelevant for transcription. We discard the video track entirely before transcription. Whisper only sees the audio. So you can upload WebM with any video codec without affecting the transcript at all.',
        },
        {
          q: 'Can I upload a recording from a browser app like Riverside?',
          a: 'Yes. Browser-based recording apps (Riverside, Riverfm, Squadcast in some configs) output WebM as the local-backup file. Drop it here for a clean transcript.',
        },
        {
          q: 'My WebM has only audio, no video. Will it still work?',
          a: 'Yes. Audio-only WebM is rarer in the wild but absolutely supported. We handle the file exactly the same way, just without the video-stripping step.',
        },
        {
          q: 'Will the transcript include speaker labels for a multi-person recording?',
          a: 'Not automatically. Whisper does not separate speakers in mixed-audio WebMs. If your recording app gave you separate per-speaker tracks (Riverside, for example), transcribe each speaker track separately and label by hand. Speaker diarization is on the roadmap for the Pro tier.',
        },
        {
          q: 'Does the video portion go anywhere when I upload?',
          a: 'No. We demux the WebM on the server, send only the audio to the transcription model, and drop the rest from memory. We do not save the video, we do not analyse the video frames, we do not share anything with third parties.',
        },
        {
          q: 'Can I get the transcript synced to the video for captions?',
          a: 'Yes. Download as SRT or VTT and drop into your video editor or directly into the Loom playback page (if it supports subtitle import). The timestamps reference the original audio timeline, so they align frame-accurate with the video.',
        },
        {
          q: 'How long does a 30-minute WebM screen recording take to transcribe?',
          a: 'If you upload the full video (200+ MB), upload time dominates: usually 30-60 seconds on a typical home connection plus 30-50 seconds of transcription. If you extract audio first (10-15 MB), the whole thing finishes inside 30 seconds end to end.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your screen recording, get a transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Loom downloads, OBS exports, browser-recorded video. We strip the video and transcribe the voice.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a WebM now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'For MP4, MOV, AVI and other video containers.' },
        { href: '/ogg-to-text', label: 'OGG to Text', desc: 'For audio-only Opus or Vorbis files outside WebM.' },
        { href: '/youtube-to-text', label: 'YouTube to Text', desc: 'Paste a video URL instead of uploading a file.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'Shrinking screen recordings before upload.' },
      ]}
    />
  )
}
