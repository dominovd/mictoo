import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Audio to Text: Free Online Transcription for Any Audio Format | Mictoo',
  description:
    'A format-agnostic transcription tool. Drop any audio file (MP3, M4A, WAV, FLAC, OGG, AAC, WebM) and get an editable transcript with timestamps, AI summary, and exports.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-audio-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-audio-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
      'de': 'https://mictoo.com/de/transcribe-audio-to-text',
      'es': 'https://mictoo.com/es/transcribe-audio-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
      'it': 'https://mictoo.com/it/transcribe-audio-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
      'x-default': 'https://mictoo.com/transcribe-audio-to-text',
    },
  },
  openGraph: {
    title: 'Audio to Text: Free Online Transcription | Mictoo',
    description: 'Drop any audio file and get a transcript. MP3, M4A, WAV, FLAC, OGG, AAC. Free, no signup.',
    url: 'https://mictoo.com/transcribe-audio-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audio to Text: Free Online Transcription',
    description: 'Drop any audio file, get a transcript. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscribeAudioToTextPage() {
  return (
    <LandingLayout
      badge="Any audio format · Free · No signup"
      h1={<>Audio to Text<br /><span className="text-brand-600">One page for any audio format</span></>}
      subtitle="The format-agnostic entry point. Drop an MP3, M4A, WAV, FLAC, OGG, AAC, WebM, or any other common audio file and get a clean transcript with timestamps, AI summary, and exports for TXT, SRT, VTT, and DOCX."
      valueBlock={
        <article className="prose-content">
          <p>
            Most transcription services nudge you to convert your audio
            to one specific format first ("upload an MP3", "use WAV
            only"). Mictoo does not. We accept whatever your recorder,
            DAW, phone, or download tool produced and handle the format
            details on our side.
          </p>
          <p>
            Useful when you have a folder of mixed formats (Voice
            Memos in M4A, GarageBand bounces in WAV, downloaded
            podcasts in MP3) and just want to transcribe them without
            running each through a converter first.
          </p>
          <p className="text-sm text-slate-500">
            If you know your format and want format-specific guidance:
            <a href="/wav-to-text" className="text-brand-600 hover:underline ml-1">WAV</a>,
            <a href="/m4a-to-text" className="text-brand-600 hover:underline ml-1">M4A</a>,
            <a href="/flac-to-text" className="text-brand-600 hover:underline ml-1">FLAC</a>,
            <a href="/ogg-to-text" className="text-brand-600 hover:underline ml-1">OGG</a>,
            <a href="/aac-to-text" className="text-brand-600 hover:underline ml-1">AAC</a>,
            <a href="/webm-to-text" className="text-brand-600 hover:underline ml-1">WebM</a> pages cover the specifics.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop any audio file',
          desc: 'MP3, M4A, WAV, FLAC, OGG, AAC, WebM, AIFF, AU, plus several rarer formats. We auto-detect what you uploaded from the file header, no manual format picker needed.',
        },
        {
          icon: '⚡',
          title: 'Whisper transcribes the audio',
          desc: 'A 30-minute file usually finishes in 30-60 seconds. We route through Whisper large-v3 via Groq, with Replicate, Deepgram, and OpenAI as fallback providers for reliability.',
        },
        {
          icon: '📝',
          title: 'Edit, export, share',
          desc: 'Inline editor for fixing wrong names. Download TXT, SRT, VTT, or DOCX. Translate to 50+ languages with one click. AI summary appears alongside automatically.',
        },
      ]}
      whyUse={{
        title: 'Why a format-agnostic transcription tool helps',
        bullets: [
          {
            title: 'No "convert first" step in your workflow',
            desc: 'You have an iPhone Voice Memo (M4A), a GarageBand bounce (WAV), and a podcast download (MP3). Three different formats, one upload page. No detour through a format converter, no decision about which input is "correct".',
          },
          {
            title: 'Automatic format detection from file headers',
            desc: 'We read the file header to determine the actual format, not just the extension. A file someone renamed .mp3 that is actually AAC inside still works. Files with no extension still work as long as the header is intact.',
          },
          {
            title: 'Same accuracy regardless of source format',
            desc: 'Whisper resamples everything to 16 kHz mono internally before transcription. WAV, MP3, M4A, FLAC, all produce the same transcript quality for clean audio. Format only matters for upload size and storage convenience, not for transcription accuracy.',
          },
          {
            title: 'AI summary, translation, and exports built in',
            desc: 'Once the transcript finishes, an AI summary appears alongside. Translate to another language with one click. Download as TXT, SRT, VTT, or DOCX. Everything in one workflow, no plan tier to unlock features.',
          },
          {
            title: 'Free for files up to 60 MB',
            desc: 'No signup, no watermark, no daily file counter. 60 MB covers most everyday recordings (60 minutes of mono speech, 30 minutes of typical stereo podcast, 15 minutes of high-quality WAV). For larger files, see the Pro tips section.',
          },
        ],
      }}
      useCases={{
        title: 'When the format-agnostic page is the right fit',
        items: [
          {
            title: 'Mixed-format archive cleanup',
            desc: 'Inherited a folder of old recordings in mixed formats (.wav from one device, .m4a from another, .mp3 downloads). Process them through one page without sorting by format first.',
          },
          {
            title: 'Quick transcription, format unknown',
            desc: 'Someone sent you an audio file and you have not checked what format it is. Drop here, find out as it processes. Saves the "open in QuickTime, check Inspector" step.',
          },
          {
            title: 'Cross-tool workflows',
            desc: 'Recording in Audacity (WAV), exporting from GarageBand (M4A), downloading from Bandcamp (FLAC). Different tools produce different formats. One transcription page handles them all.',
          },
          {
            title: 'First-time transcription users',
            desc: 'New to transcription tools and unsure which "format-specific" page to use. The audio-to-text page is the safe default for any audio file.',
          },
          {
            title: 'Quick test of an unknown audio quality',
            desc: 'Got a recording from someone with no context about quality or format. Drop here for a fast transcript that tells you whether the audio is clean enough to be useful.',
          },
          {
            title: 'Integration testing with multiple audio sources',
            desc: 'Building a workflow that ingests audio from many sources (phone calls, recordings, downloads). Validate transcription works for each source format without setting up format-specific routes.',
          },
        ],
      }}
      proTips={{
        title: 'Format-agnostic tips that save time',
        tips: [
          {
            title: 'For very large files, prefer audio-only formats',
            desc: 'Video files (MP4, MOV, WebM) work, but they are much bigger than audio-only equivalents. If your source is a video, extract just the audio first with ffmpeg -i video.mp4 -vn -ac 1 -ar 16000 audio.m4a. The audio is typically 10-20x smaller.',
          },
          {
            title: 'Set the language manually for short files or non-English audio',
            desc: 'Whisper auto-detects language but can mis-fire on clips under 30 seconds or files that open with music. For short clips or any non-English audio, pick the language explicitly in the dropdown before upload.',
          },
          {
            title: 'For format-specific gotchas, check the dedicated page',
            desc: 'This page is the universal entry point. For format-specific advice (WAV settings, FLAC compression, M4A iPhone Voice Memo specifics), the individual format pages have deeper guidance.',
          },
          {
            title: 'Audio quality matters more than format choice',
            desc: 'A clean MP3 at 64 kbps transcribes better than a noisy WAV at studio quality. Clean the audio (denoise, set mic close to speaker) before recording rather than picking a format and hoping it compensates.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>What "audio format" actually means here</h2>
          <p>
            An audio format is a combination of a container (the file
            wrapper) and a codec (the algorithm that compresses or stores
            the audio inside). Most people use "format" loosely to mean
            both. WAV is a container with PCM codec (uncompressed). MP3
            is a codec with no container (just the raw stream). M4A is
            an MP4 container with AAC codec inside. FLAC is both a codec
            and a container that share the same name. OGG is a container
            that usually holds Opus or Vorbis.
          </p>
          <p>
            For transcription, what matters is that the audio data
            inside can be decoded to raw PCM samples that the Whisper
            model reads. We handle the container and codec details on
            our side, you just upload the file.
          </p>
          <h3>Why format choice almost never affects transcript quality</h3>
          <p>
            Whisper large-v3 resamples whatever audio it gets to 16 kHz
            mono before the first inference step. A 192 kHz 24-bit
            stereo studio recording gets crushed down to the same input
            shape as a 16 kHz mono phone call. The model never sees the
            "fancy" version of the audio.
          </p>
          <p>
            What this means in practice: a 128 kbps MP3 of your podcast
            transcribes essentially the same as the original 24-bit WAV
            master. A 32 kbps Opus voice message from Telegram
            transcribes essentially the same as if you had recorded the
            same voice in WAV. The format only matters at the edges:
            very low bitrate compressed audio (under 32 kbps) starts to
            lose information Whisper needs.
          </p>
          <h3>When format actually does matter</h3>
          <p>
            For upload size and storage. A one-hour recording is around
            14 MB as 32 kbps mono AAC, 30 MB as 64 kbps mono MP3, 300+
            MB as CD-quality WAV. The transcript is the same; the upload
            time and storage cost are very different. For everyday use,
            small lossy formats (MP3, M4A, OGG) are the practical
            choice. For archival or editing, keep the original lossless
            format (WAV, FLAC, ALAC) on your drive.
          </p>
          <h3>How we handle format detection</h3>
          <p>
            On upload, we read the first few bytes of the file to
            identify the container and codec. Most audio formats have
            distinctive magic numbers in their headers: WAV starts with
            "RIFF", MP3 starts with "ID3" or specific frame sync
            patterns, M4A/MP4 starts with "ftyp", FLAC starts with
            "fLaC", OGG starts with "OggS". We use the header rather
            than the file extension because extensions can lie (a
            renamed file, a system that stripped the extension).
          </p>
          <h3>What we do not currently accept</h3>
          <p>
            Proprietary or encrypted formats with DRM. Some old WMA
            files from the Microsoft DRM era cannot be decoded by any
            current open-source tool. Apple-Lossless ALAC files inside
            DRM-protected M4P containers (legacy iTunes Store purchases
            before 2009) similarly cannot be decoded. For these cases,
            you need to find or generate an unprotected copy.
          </p>
        </article>
      }
      faq={[
        {
          q: 'What audio formats does Mictoo accept?',
          a: 'MP3, M4A, WAV, FLAC, OGG (with Vorbis or Opus codec), AAC, WebM, AIFF, AU, and several rarer formats. For video files (MP4, MOV, WebM video), we strip the video and transcribe just the audio. Free for files up to 60 MB.',
        },
        {
          q: 'Does the format affect transcript quality?',
          a: 'Almost never. Whisper resamples to 16 kHz mono internally before transcription, so format choice (MP3 vs WAV vs M4A) makes essentially no difference for clean audio. Format matters at extremes: very low bitrate (under 32 kbps) lossy formats can lose audio information Whisper needs.',
        },
        {
          q: 'Do I need to know my file format before uploading?',
          a: 'No. We detect the format from the file header during upload, not from the extension. Even a file with a wrong extension or no extension works as long as the header bytes identify a supported format.',
        },
        {
          q: 'What is the largest file I can upload?',
          a: 'Free tier: 60 MB per file. That covers 60 minutes of mono speech at typical bitrates, 30 minutes of typical stereo podcast, or about 15 minutes of CD-quality WAV. For larger files, use format-specific compression tips on the individual format pages.',
        },
        {
          q: 'Can I get the transcript in multiple formats?',
          a: 'Yes. TXT for plain text, SRT or VTT for subtitle files with timestamps, DOCX for a Word document. Or copy directly to clipboard. The transcript itself is the same; the export format just affects how it lands in your destination.',
        },
        {
          q: 'Does Mictoo transcribe non-English audio?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short files or files that open with non-speech audio, set the language explicitly in the dropdown for cleaner first-pass detection.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription finishes, pick a target language from the dropdown and click Translate. The translation is generated by GPT-4o-mini and appears alongside the original transcript.',
        },
        {
          q: 'Does my audio file get stored?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to save it to your history.',
        },
        {
          q: 'How long does transcription take?',
          a: 'Upload time plus processing time. A 30-minute audio-only file typically finishes in 30-60 seconds end to end on a normal home connection. Larger files (near the 60 MB cap) take 1-2 minutes total.',
        },
        {
          q: 'What if my file format is rejected?',
          a: 'Most likely the file is either DRM-protected (rare for audio in 2026), corrupted (header missing or partial), or a format we do not yet support. Check the file plays in a normal media player first; if it does, contact us with the file details so we can add support.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop any audio file and get the text
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            MP3, M4A, WAV, FLAC, OGG, AAC, WebM. No format picker, no conversion step, no signup.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload audio to transcribe
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 to text', desc: 'MP3-specific guidance.' },
        { href: '/transcribe-video-to-text', label: 'Video to text', desc: 'For MP4, MOV, WebM video files.' },
        { href: '/youtube-to-text', label: 'YouTube to text', desc: 'Paste a YouTube URL instead of uploading.' },
        { href: '/free-srt-generator', label: 'Free SRT generator', desc: 'When you need subtitles as the primary deliverable.' },
      ]}
    />
  )
}
