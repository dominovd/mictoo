import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Video to Text: Free Online Video Transcription for MP4, MOV, WebM | Mictoo',
  description:
    'Upload an MP4, MOV, WebM, AVI, or MKV video and get a transcript with timestamps, AI summary, and SRT subtitles. For screen recordings, tutorials, vlogs, and webinars.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-video-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-video-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
      'de': 'https://mictoo.com/de/transcribe-video-to-text',
      'es': 'https://mictoo.com/es/transcribe-video-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
      'it': 'https://mictoo.com/it/transcribe-video-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
      'x-default': 'https://mictoo.com/transcribe-video-to-text',
    },
  },
  openGraph: {
    title: 'Video to Text: Free Online Video Transcription | Mictoo',
    description: 'MP4, MOV, WebM video transcription with SRT, summary, and translation.',
    url: 'https://mictoo.com/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video to Text: Free Online Video Transcription',
    description: 'MP4, MOV, WebM video transcription with SRT and summary.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscribeVideoToTextPage() {
  return (
    <LandingLayout
      badge="Video files · MP4 · MOV · WebM · Free"
      h1={<>Video to Text<br /><span className="text-brand-600">For screen recordings, tutorials, and vlogs</span></>}
      subtitle="Upload an MP4, MOV, WebM, MKV, or AVI video file. We extract the audio track, transcribe with Whisper large-v3, and return a transcript with timestamps, AI summary, and SRT subtitles ready to drop onto the video."
      enableYouTubeUrl={true}
      valueBlock={
        <article className="prose-content">
          <p>
            Video files combine a visual track and an audio track in a
            single container (MP4, MOV, WebM, etc). For transcription,
            only the audio track matters. We extract it on our side, so
            you do not need to convert your video to audio-only first.
          </p>
          <p>
            This is the right page for screen recordings (Loom, Zoom,
            OBS), tutorials, vlogs, webinars, conference talks, and
            downloaded videos. For audio-only files (MP3, M4A, WAV,
            etc), the
            <a href="/transcribe-audio-to-text" className="text-brand-600 hover:underline ml-1">audio to text</a> page is the right
            entry point. For YouTube URLs (no upload needed), see
            <a href="/youtube-to-text" className="text-brand-600 hover:underline ml-1">YouTube to text</a>.
          </p>
          <p className="text-sm text-slate-500">
            Note: video files are much larger than the audio inside
            them. A 30-minute MP4 can easily be 200-500 MB depending on
            resolution; the audio track is typically 10-30 MB. Tips on
            handling large video files appear below.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎬',
          title: 'Upload your video file',
          desc: 'MP4 (H.264 or H.265 video, AAC audio is most common), MOV (QuickTime), WebM (VP8/VP9 video, Opus or Vorbis audio), MKV, AVI. Free tier accepts files up to 60 MB. For larger videos, the tips below cover audio extraction first.',
        },
        {
          icon: '🔊',
          title: 'We extract the audio track',
          desc: 'On our side, we demux the audio track from the video container, ignore the visual frames, and pass the audio to Whisper large-v3. You do not need to do anything with the video itself.',
        },
        {
          icon: '📝',
          title: 'Transcript, SRT, and summary',
          desc: 'Transcript with timestamps appears alongside an AI summary. Download as TXT, SRT (for video editor captions), VTT (for HTML5 video and YouTube), or DOCX. Translate to 50+ languages with one click.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for video file transcription',
        bullets: [
          {
            title: 'No "extract audio first" detour',
            desc: 'Other tools ask you to convert the video to MP3 before upload. Mictoo accepts the video directly, demuxes the audio track on our side. One step instead of two, no separate ffmpeg or Audacity session.',
          },
          {
            title: 'SRT and VTT ready for video editors',
            desc: 'After transcription, download SRT for Premiere/Final Cut/DaVinci Resolve, or VTT for HTML5 video and YouTube. Timestamps align to the original video timeline, so subtitles drop in correctly without re-syncing.',
          },
          {
            title: 'AI summary for video descriptions',
            desc: 'The AI summary appears alongside the transcript automatically. Useful as the starting point for YouTube descriptions, blog post versions of video tutorials, and meeting recap emails.',
          },
          {
            title: 'Works with most video formats',
            desc: 'MP4 is the universal default. MOV from iPhone/QuickTime. WebM from screen recorders and browser-recorded video. MKV from downloaded media. AVI from older sources. We handle each container without requiring a specific format.',
          },
          {
            title: 'No download or signup required',
            desc: 'Files up to 60 MB on the free tier, no account creation, no watermark on the transcript, no time limit, no daily counter. The first transcription works the same as the hundredth.',
          },
        ],
      }}
      useCases={{
        title: 'Video transcription scenarios',
        items: [
          {
            title: 'Screen recording / Loom transcripts',
            desc: 'You recorded a product demo, tutorial, or async update in Loom or QuickTime. Drop the MP4 here to turn the spoken commentary into searchable text and SRT captions for the embedded version.',
          },
          {
            title: 'Zoom or webinar recordings',
            desc: 'Recorded a webinar, panel, or meeting locally as MP4. Drop the file here, get the transcript with timestamps for show notes, post-event summary, and accessibility captions on the replay.',
          },
          {
            title: 'YouTube video preparation',
            desc: 'About to upload a video to YouTube and want SRT captions ready. Drop the video here, download SRT, upload alongside the video. The auto-generated YouTube captions are usually noticeably worse than Whisper.',
          },
          {
            title: 'Tutorial repurposing as blog post',
            desc: 'You have a video tutorial and want a text article version for SEO and accessibility. Transcript gives you the spoken content; AI summary gives you the structural outline. Use both as the article draft.',
          },
          {
            title: 'Conference talk transcription',
            desc: 'Downloaded video of a talk or presentation. Transcribe to quote in articles, share quoteable excerpts on social, or create a written companion to the talk recording.',
          },
          {
            title: 'Vlog or interview video captioning',
            desc: 'Vlog episodes or recorded interviews destined for YouTube, Instagram Reels, or TikTok. Transcribe for the captions track that boosts watch time on muted-by-default mobile feeds.',
          },
        ],
      }}
      proTips={{
        title: 'Video transcription tips',
        tips: [
          {
            title: 'For videos over 60 MB, extract audio first',
            desc: 'A 30-minute 1080p MP4 can easily be 300 MB. The audio inside is typically 10-30 MB. Run ffmpeg -i video.mp4 -vn -ac 1 -ar 16000 audio.m4a to strip the video, then upload the audio file. Same transcript, much smaller upload.',
          },
          {
            title: 'Screen recordings often have low-quality audio',
            desc: 'Microphone audio captured during screen recording is often quieter and noisier than purpose-recorded podcast audio. Whisper handles it, but if accuracy is poor, consider re-recording the audio with a closer mic for important content.',
          },
          {
            title: 'SRT vs VTT: pick by destination',
            desc: 'SRT is the universal choice for video editors (Premiere, Final Cut, DaVinci Resolve). VTT is the W3C standard for HTML5 video and YouTube. The content is identical, only the format differs. We let you download either.',
          },
          {
            title: 'For YouTube uploads, Whisper beats auto-captions',
            desc: 'YouTube auto-captions are usable but noticeably worse than Whisper, especially for technical terms, proper names, and accented speakers. Transcribe with Mictoo, download SRT, upload manually for cleaner captions.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>How video files work for transcription</h2>
          <p>
            A video file is a container (MP4, MOV, WebM, MKV, AVI)
            holding at least one video track and at least one audio
            track, plus optional subtitle tracks and metadata. The
            container specifies how the tracks are interleaved on disk
            and stamped with timestamps; the actual video and audio
            data are encoded separately with their own codecs.
          </p>
          <p>
            For transcription, the video frames are irrelevant. We
            demux the file (extract individual tracks from the
            container), discard the video track, take the audio
            track, decode it to PCM, and feed it to Whisper. The
            video frames never reach the transcription model.
          </p>
          <h3>The common video containers and their audio codecs</h3>
          <p>
            MP4 (also called .m4v in some contexts) is the H.264 era's
            universal container. Audio inside is almost always AAC,
            occasionally MP3 or AC-3. iPhone video, screen recorders
            on most platforms, YouTube downloads, exported video
            editor projects all default to MP4 with AAC audio. This is
            the format you will encounter most often.
          </p>
          <p>
            MOV is Apple's QuickTime container, very similar to MP4
            internally (both are derived from the ISO Base Media File
            Format). MOV files often hold higher-bitrate or
            higher-resolution content from professional editing
            pipelines. Audio is usually AAC, sometimes ALAC for
            lossless, occasionally PCM for uncompressed.
          </p>
          <p>
            WebM is the open-source video container, originally pushed
            by Google for HTML5 video. Audio inside is Opus or Vorbis;
            video is VP8 or VP9. Browser-recorded video (the
            MediaRecorder API output) is typically WebM. Some screen
            recording tools also default to WebM.
          </p>
          <p>
            MKV (Matroska) is a flexible container that can hold almost
            any codec, common for downloaded media and high-quality
            archives. Audio inside varies: AAC, AC-3, DTS, FLAC, Opus
            are all common.
          </p>
          <p>
            AVI is the older container from Microsoft, less common
            today but still present in older video collections. Audio
            inside is usually MP3 or AC-3.
          </p>
          <h3>Why video files are so much bigger than audio-only equivalents</h3>
          <p>
            A 1080p 30-minute video at typical YouTube quality is
            300-500 MB. The audio track inside is 10-30 MB. The video
            track is 95% of the file size and 0% of what transcription
            needs.
          </p>
          <p>
            If your video file is over the 60 MB free tier limit and
            you have ffmpeg installed, extracting the audio is one
            command: <code>ffmpeg -i video.mp4 -vn -ac 1 -ar 16000
            audio.m4a</code>. The <code>-vn</code> flag drops video,
            <code>-ac 1</code> converts to mono, <code>-ar 16000</code>
            resamples to 16 kHz (the same rate Whisper uses
            internally). The resulting M4A is typically 5-10 MB for a
            30-minute video.
          </p>
          <h3>What about multi-track audio in video files</h3>
          <p>
            Some video files have multiple audio tracks: original
            language plus dubbed versions, dialogue plus separate
            music/effects tracks, or commentary tracks. We currently
            transcribe the default audio track (track 0 in container
            terminology). If your video has a non-default track you
            want transcribed, extract that track first with
            <code>ffmpeg -i video.mp4 -map 0:a:1 -vn audio.m4a</code>
            (where <code>0:a:1</code> selects the second audio track).
          </p>
          <h3>Subtitle tracks vs transcription</h3>
          <p>
            If your video already has burned-in subtitles (rendered
            into the video frames as visible text), they do not help
            transcription. We never look at video frames. If your
            video has a separate subtitle track inside the container
            (sometimes called soft subs, common in MKV), we still
            ignore it during transcription; we transcribe from the
            audio. To extract existing soft subtitles, use a tool like
            MKVToolNix instead of Mictoo.
          </p>
        </article>
      }
      faq={[
        {
          q: 'What video formats does Mictoo accept?',
          a: 'MP4, MOV (QuickTime), WebM, MKV (Matroska), AVI. We accept the most common container formats holding standard codecs (H.264, H.265, VP8, VP9 video; AAC, MP3, Opus, Vorbis, AC-3 audio). Free tier accepts files up to 60 MB.',
        },
        {
          q: 'Do I need to extract audio from the video first?',
          a: 'No. We extract the audio track from the video container on our side and discard the video frames. Upload the video directly. The only reason to extract audio first is if the video file exceeds the 60 MB upload cap.',
        },
        {
          q: 'My 30-minute video is 300 MB, over the cap. What do I do?',
          a: 'Extract just the audio with ffmpeg -i video.mp4 -vn -ac 1 -ar 16000 audio.m4a. The audio file will be 5-15 MB. Upload the audio file instead. Same transcript, smaller upload. Or use the YouTube URL field if the video is on YouTube.',
        },
        {
          q: 'Can I get SRT subtitles back?',
          a: 'Yes. Download as SRT for video editor use (Premiere, Final Cut, DaVinci Resolve), or VTT for HTML5 video and YouTube. Timestamps align to the original video timeline, so subtitles sync correctly without re-alignment.',
        },
        {
          q: 'Are timestamps exact enough for closed captions?',
          a: 'Yes. Whisper produces word-level timestamps that group into segment timestamps suitable for caption files. Cuts typically land within 100-300 ms of the actual sentence boundaries, which is comfortable for caption display timing.',
        },
        {
          q: 'Does Mictoo transcribe video in languages other than English?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short videos or non-English content, set the language explicitly in the dropdown before upload for cleaner first-pass detection.',
        },
        {
          q: 'Can I get the video transcribed and then translated?',
          a: 'Yes. After transcription, pick a target language and click Translate. The translated text appears alongside the original. SRT and VTT downloads also work for the translated version, useful for subtitle versions in multiple languages.',
        },
        {
          q: 'What about screen recordings with multiple speakers?',
          a: 'Whisper does not currently distinguish speakers in the transcript ("speaker 1: ... speaker 2: ..."). Speaker diarisation is on our Pro tier roadmap. For now, the transcript is continuous text without speaker labels.',
        },
        {
          q: 'Does Mictoo handle vertical video (TikTok, Reels) the same as horizontal?',
          a: 'Yes. We only look at the audio track; the video aspect ratio does not matter. Vertical MP4 from TikTok exports, Reels recordings, and Stories transcribe identically to horizontal video.',
        },
        {
          q: 'Will my video file be saved on your servers?',
          a: 'No. The video streams to our processor for audio extraction, the extracted audio goes to the transcription provider, and both are dropped from memory after processing. The video itself is never written to disk on our side.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your video, get the transcript and subtitles
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            MP4, MOV, WebM, MKV, AVI. Or paste a YouTube URL. No conversion step, no signup, no watermark.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload video to transcribe
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to text', desc: 'Format-agnostic, for audio-only files.' },
        { href: '/free-srt-generator', label: 'Free SRT generator', desc: 'When subtitles are the primary deliverable.' },
        { href: '/youtube-to-text', label: 'YouTube to text', desc: 'For YouTube URLs without uploading.' },
        { href: '/mp4-to-mp3', label: 'MP4 to MP3', desc: 'If you need the audio separately for any reason.' },
      ]}
    />
  )
}
