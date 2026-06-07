import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Free SRT Generator: Make SRT Subtitle Files Online from Audio or Video | Mictoo',
  description:
    'Generate clean SRT subtitle files from any audio or video. Whisper-quality timestamps, ready for YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Free, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/free-srt-generator',
    languages: {
      'en': 'https://mictoo.com/free-srt-generator',
      'fr': 'https://mictoo.com/fr/free-srt-generator',
      'de': 'https://mictoo.com/de/free-srt-generator',
      'es': 'https://mictoo.com/es/free-srt-generator',
      'ru': 'https://mictoo.com/ru/free-srt-generator',
      'it': 'https://mictoo.com/it/free-srt-generator',
      'pt': 'https://mictoo.com/pt/free-srt-generator',
      'pl': 'https://mictoo.com/pl/free-srt-generator',
      'ja': 'https://mictoo.com/ja/free-srt-generator',
      'ko': 'https://mictoo.com/ko/free-srt-generator',
      'x-default': 'https://mictoo.com/free-srt-generator',
    },
  },
  openGraph: {
    title: 'Free SRT Generator | Mictoo',
    description: 'Generate SRT subtitle files from audio or video. YouTube, Premiere, Final Cut ready. Free.',
    url: 'https://mictoo.com/free-srt-generator',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SRT Generator',
    description: 'Generate SRT subtitles from audio or video. Free.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FreeSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · VTT · Free · No signup"
      h1={<>Free SRT Generator<br /><span className="text-brand-600">For YouTube, Premiere, Final Cut, DaVinci, CapCut</span></>}
      subtitle="Upload audio or video, get a clean .srt file with Whisper-quality timestamps in seconds. Ready to drop into your YouTube upload, NLE timeline, or web player. VTT also available."
      enableYouTubeUrl={true}
      valueBlock={
        <article className="prose-content">
          <p>
            SRT (SubRip Subtitle) is the most widely supported subtitle
            format in 2026. YouTube accepts it on every upload. Every
            major video editor (Premiere, Final Cut, DaVinci Resolve,
            CapCut, Vegas Pro) imports it as a captions track. Web
            video players accept either SRT or VTT, and Mictoo
            generates both from the same transcription.
          </p>
          <p>
            This page is dedicated to the subtitle workflow: get a
            clean .srt file as the primary deliverable, with timing
            tight enough for caption display and formatting that drops
            straight into the destination without manual cleanup.
          </p>
          <p className="text-sm text-slate-500">
            If you need the transcript as plain text or a doc, the
            <a href="/transcribe-audio-to-text" className="text-brand-600 hover:underline ml-1">audio to text</a> page is the right
            entry. For video files specifically, see
            <a href="/transcribe-video-to-text" className="text-brand-600 hover:underline ml-1">video to text</a>. For YouTube URLs,
            see <a href="/youtube-to-text" className="text-brand-600 hover:underline ml-1">YouTube to text</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎬',
          title: 'Upload audio or video',
          desc: 'Audio (MP3, M4A, WAV, FLAC, OGG, AAC) or video (MP4, MOV, WebM, MKV, AVI). Or paste a YouTube URL. We extract the audio track if it is a video file. Free tier up to 60 MB per upload.',
        },
        {
          icon: '⏱️',
          title: 'Whisper produces timestamped segments',
          desc: 'Word-level timestamps grouped into caption-sized segments (2-7 seconds each, max 84 characters per line). Cuts land on sentence and clause boundaries so subtitles read naturally rather than mid-word.',
        },
        {
          icon: '📥',
          title: 'Download .srt or .vtt',
          desc: 'SRT for video editors and YouTube uploads. VTT for HTML5 video and WebVTT-compliant players. Both formats hold the same content; pick whichever your destination needs.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for SRT generation',
        bullets: [
          {
            title: 'Whisper-quality captions, not auto-transcribed slop',
            desc: 'YouTube auto-captions and many quick caption tools use older, weaker ASR. Mictoo uses Whisper large-v3, the same model used by professional caption services. Proper nouns, technical terms, and accented speakers transcribe noticeably better.',
          },
          {
            title: 'Tight timing aligned to caption display conventions',
            desc: 'Caption segments are sized 2-7 seconds and break on natural pause boundaries. Lines stay under 42 characters where possible (the BBC/Netflix caption standard). Reads cleanly on screen without manual re-segmentation.',
          },
          {
            title: 'SRT or VTT, your choice',
            desc: 'Same source transcription, two output formats. SRT is the universal video editor format. VTT is the W3C standard for HTML5 video and the only format YouTube returns for the WebVTT-style "user captions" API. We provide both.',
          },
          {
            title: 'Free with no signup and no watermark',
            desc: 'The .srt file is plain text with no watermark, no "generated by" tag, no embedded ad. The transcript inside is yours to use however you like, with no attribution requirement.',
          },
          {
            title: 'Translation to 50+ languages for multi-language subtitles',
            desc: 'After the original SRT generates, translate the transcript to another language and download a translated SRT. Useful for creating subtitle tracks in multiple languages from one source recording.',
          },
        ],
      }}
      useCases={{
        title: 'When you need an SRT specifically',
        items: [
          {
            title: 'YouTube uploads with manual captions',
            desc: 'YouTube auto-captions are visibly worse than Whisper. Generate the SRT here, upload as "manual captions" alongside the video. Cleaner text, fewer cringe-worthy proper-name errors.',
          },
          {
            title: 'Premiere Pro / Final Cut / DaVinci Resolve captions',
            desc: 'Import the .srt as a captions track in your NLE. Adjust timing or styling inside the editor, burn into the video or export as a separate captions file alongside the master.',
          },
          {
            title: 'CapCut and mobile video editor subtitles',
            desc: 'CapCut, InShot, and similar mobile editors import SRT subtitles. Generate the SRT here on a laptop or desktop, transfer to the phone, drop into the project as a subtitle track.',
          },
          {
            title: 'HTML5 video on your own website',
            desc: 'For self-hosted video, use the VTT download (the spec-defined format for HTML5 <track> elements). Drop into your video player and the captions render natively in browsers.',
          },
          {
            title: 'Accessibility compliance (WCAG / ADA)',
            desc: 'Captions are a baseline accessibility requirement for video content. Generate accurate SRT captions for every published video to meet WCAG and similar accessibility standards.',
          },
          {
            title: 'Translated subtitle tracks for international audience',
            desc: 'Generate original-language SRT, translate to target language, download translated SRT. Drop both into your video as alternative subtitle tracks for viewers in different languages.',
          },
        ],
      }}
      proTips={{
        title: 'SRT generation tips',
        tips: [
          {
            title: 'For YouTube, upload manually rather than auto-translate',
            desc: 'YouTube can auto-translate captions, but the result is inferior to running Mictoo translation first and uploading the translated SRT manually. Auto-translate works from YouTube auto-captions (already weaker), compounding errors.',
          },
          {
            title: 'For NLEs that support styled subtitles, plain SRT is fine',
            desc: 'SRT does not encode styling (color, font, position). Most NLEs (Premiere, Final Cut, DaVinci Resolve, CapCut) apply their own styling on import. You set color and font inside the editor; the SRT just provides text and timing.',
          },
          {
            title: 'For longer captions, edit segment lengths post-generation',
            desc: 'Whisper segments default to 2-7 seconds. If you need shorter (TikTok/Reels style, often 1-2 seconds) or longer (lecture replay, 8-15 seconds), open the .srt in any text editor and adjust the timestamps directly. Simple SubRip format.',
          },
          {
            title: 'Validate the SRT before uploading to YouTube',
            desc: 'YouTube silently rejects subtly malformed SRT. Run the downloaded file through an SRT validator (free web tools) to catch missing blank lines between segments or malformed timestamps before the upload.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>What an SRT file actually contains</h2>
          <p>
            SubRip (.srt) is one of the simplest possible subtitle
            formats: a plain text file with numbered segments, each
            containing a start timestamp, an end timestamp, and one
            or two lines of caption text. A single segment looks like:
          </p>
          <pre><code>{`1
00:00:01,000 --> 00:00:03,500
Welcome to the show.

2
00:00:03,600 --> 00:00:06,200
Today we talk about
the subtitle generator workflow.`}</code></pre>
          <p>
            That is the whole format. No styling, no positioning, no
            font specification. The simplicity is why it works
            everywhere: parsing SRT is trivial enough that even
            indie video tools implement it without fuss.
          </p>
          <h3>SRT vs VTT: what is the actual difference</h3>
          <p>
            VTT (WebVTT) is the W3C standard for HTML5 video captions.
            It adds optional styling (positioning, colors, classes),
            multi-line cues, and metadata. For the basic case (text
            with timestamps), VTT is almost the same as SRT with a
            different header and a different timestamp separator
            (period instead of comma for fractional seconds).
          </p>
          <p>
            Practical choice: use SRT if your target is a video editor
            or YouTube. Use VTT if your target is HTML5 video on your
            own website (the standard HTML <code>&lt;track&gt;</code>
            element expects VTT). Mictoo offers both downloads from
            the same source transcription.
          </p>
          <h3>How Whisper produces caption timing</h3>
          <p>
            Whisper outputs word-level timestamps for the whole
            transcription. We group consecutive words into caption
            segments using a few rules: keep segments under ~84
            characters (so they fit on two lines of typical caption
            display), break at sentence and clause boundaries where
            possible, keep individual segments between 2 and 7
            seconds. The resulting segments read naturally on screen
            rather than ending mid-clause.
          </p>
          <p>
            Timestamp accuracy is typically within 100-300 ms of the
            actual word boundaries, which is comfortable for caption
            display (viewers tolerate small drift, especially when
            captions appear slightly before the speech).
          </p>
          <h3>Why "burned-in" captions are different</h3>
          <p>
            SRT files are external captions: the .srt file lives
            alongside the video, and the player or editor renders the
            text on top. Burned-in captions are pixels baked into the
            video frames during render. Burned-in captions cannot be
            turned off, cannot be translated, cannot be re-edited.
            External captions (SRT or VTT) can be toggled, replaced
            with translated versions, or edited without re-rendering.
          </p>
          <p>
            For most use cases (YouTube, web video, NLE projects),
            external SRT captions are preferred for the flexibility.
            For platforms that do not support uploadable captions
            (some social platforms, downloaded video for offline
            viewing), burn the captions in during the video editor
            export, using the SRT as the source for caption text.
          </p>
          <h3>Common SRT pitfalls and how to avoid them</h3>
          <p>
            Missing blank line between segments: SRT requires a single
            blank line between numbered segments. Some tools omit it
            and the file silently fails to parse in strict players.
            Mictoo emits properly formatted SRT with blank lines.
          </p>
          <p>
            Wrong line ending convention (CRLF vs LF): SRT specs
            tolerate either. YouTube and most NLEs handle both. Some
            older Windows-only tools require CRLF. Mictoo emits LF by
            default; convert with a text editor if your target tool
            needs CRLF.
          </p>
          <p>
            Encoding: SRT files should be UTF-8 for non-ASCII
            characters (accented letters, non-Latin scripts, emoji).
            Mictoo emits UTF-8. If you see "garbled accents" in your
            destination tool, it is reading the file as Latin-1 or
            Windows-1252 instead of UTF-8.
          </p>
        </article>
      }
      faq={[
        {
          q: 'What input formats does the SRT generator accept?',
          a: 'Audio (MP3, M4A, WAV, FLAC, OGG, AAC) or video (MP4, MOV, WebM, MKV, AVI). For video, we extract the audio track on our side. You can also paste a YouTube URL instead of uploading. Free tier up to 60 MB per file.',
        },
        {
          q: 'What is the difference between SRT and VTT?',
          a: 'SRT is the universal subtitle format for video editors and YouTube. VTT is the W3C standard for HTML5 video on the web. Content is nearly identical; VTT supports optional styling and positioning. Mictoo provides both from the same source transcription.',
        },
        {
          q: 'Can I upload the SRT directly to YouTube?',
          a: 'Yes. In YouTube Studio, open the video, go to Subtitles, click Add, pick "Upload file", choose "With timing", and select the .srt. The captions appear within a few minutes. Higher quality than the YouTube auto-captions.',
        },
        {
          q: 'Will the SRT import into Premiere or Final Cut?',
          a: 'Yes. Both Premiere Pro and Final Cut Pro import SRT as a captions track. In Premiere: File > Import > select .srt. In Final Cut: drag the .srt onto the timeline. DaVinci Resolve and CapCut work similarly.',
        },
        {
          q: 'Are the timestamps frame-accurate?',
          a: 'They are within 100-300 ms of word boundaries, which is comfortable for caption display. For frame-accurate sync (broadcast captioning standard), edit the timestamps inside your NLE after import. For YouTube, web video, and most production use, the default timing is tight enough.',
        },
        {
          q: 'Can I generate SRT in languages other than English?',
          a: 'Yes. Whisper large-v3 supports 50+ languages for transcription. For short files, set the language manually in the dropdown for cleaner first-pass detection. The .srt output uses UTF-8 encoding so non-Latin scripts render correctly.',
        },
        {
          q: 'Can I generate translated SRT for multilingual subtitles?',
          a: 'Yes. Generate the original-language SRT first. Click Translate, pick a target language, and download the translated SRT. Useful for adding alternative subtitle tracks in multiple languages from one source recording.',
        },
        {
          q: 'Does the SRT contain speaker labels?',
          a: 'No. Whisper does not currently distinguish speakers in the transcript. Speaker diarisation is on our Pro tier roadmap. For now, captions are continuous text without "Speaker 1: ..." prefixes.',
        },
        {
          q: 'What if YouTube rejects my uploaded SRT?',
          a: 'Usually a formatting issue. Open the .srt in a text editor; check that segments are numbered sequentially, separated by blank lines, with timestamps in HH:MM:SS,mmm format. Run through a free SRT validator if the file looks fine to you but YouTube still rejects.',
        },
        {
          q: 'Will my uploaded audio or video be saved?',
          a: 'No. The file streams to the transcription provider, gets processed once, and is dropped from memory. We do not store the audio or video. The text transcript and SRT are downloaded directly to your browser and never written to disk on our side.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Generate clean SRT subtitles in seconds
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Upload audio or video, paste a YouTube URL. Get .srt or .vtt ready for YouTube, your NLE, or your web player.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Generate SRT now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to text', desc: 'For full transcript plus optional SRT.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to text', desc: 'When the deliverable is plain text, not subtitles.' },
        { href: '/youtube-to-text', label: 'YouTube to text', desc: 'Paste a YouTube URL for the transcript and captions.' },
        { href: '/timestamped-transcription', label: 'Timestamped transcription', desc: 'For inline timestamps in the main transcript.' },
      ]}
    />
  )
}
