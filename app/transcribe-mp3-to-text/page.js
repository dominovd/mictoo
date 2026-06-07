import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'MP3 to Text: Free Online MP3 Transcription for Podcasts and Voice Recordings | Mictoo',
  description:
    'Transcribe MP3 audio files with timestamps, AI summary, and exports. Optimised for podcasts, voice notes, and downloaded audio. Drop your MP3, get the text in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-mp3-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-mp3-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
      'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
      'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
      'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
      'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
    },
  },
  openGraph: {
    title: 'MP3 to Text: Free Online MP3 Transcription | Mictoo',
    description: 'Drop your MP3 podcast or voice recording, get a transcript with summary in seconds.',
    url: 'https://mictoo.com/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 to Text: Free Online MP3 Transcription',
    description: 'Drop your MP3, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscribeMp3ToTextPage() {
  return (
    <LandingLayout
      badge="MP3 · Podcast-friendly · Free"
      h1={<>MP3 to Text<br /><span className="text-brand-600">The format every podcast already uses</span></>}
      subtitle="MP3 is the universal podcast and downloaded-audio format. Drop your episode, voice note, downloaded interview, or any MP3 file and get a transcript with timestamps, AI summary, and exports ready for show notes."
      valueBlock={
        <article className="prose-content">
          <p>
            MP3 is the lingua franca of distributed audio. Almost every
            podcast you can download is an MP3. Most voice recording
            apps export MP3 by default. Downloaded YouTube audio often
            arrives as MP3. If you have audio that needs transcribing,
            there is a good chance it is an MP3.
          </p>
          <p>
            Mictoo accepts MP3 directly, no conversion step. Whether
            you uploaded a 64 kbps mono voice note or a 320 kbps stereo
            studio podcast, the transcript comes back with timestamps,
            an AI summary, and clean exports for show notes, captions,
            and Word documents.
          </p>
          <p className="text-sm text-slate-500">
            For format-agnostic uploads (any audio type), use the
            <a href="/transcribe-audio-to-text" className="text-brand-600 hover:underline ml-1">audio to text</a> page. For video files, see
            <a href="/transcribe-video-to-text" className="text-brand-600 hover:underline ml-1">video to text</a>. For YouTube URLs, see
            <a href="/youtube-to-text" className="text-brand-600 hover:underline ml-1">YouTube to text</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎧',
          title: 'Drop your MP3',
          desc: 'Any MP3 bitrate from 32 kbps voice notes up to 320 kbps studio quality. Constant or variable bitrate, mono or stereo. Files up to 60 MB on the free tier (covers about 60-90 minutes of typical podcast MP3).',
        },
        {
          icon: '⚡',
          title: 'Whisper transcribes in seconds',
          desc: 'A 30-minute podcast MP3 finishes in around 30-50 seconds. We route through Whisper large-v3 via Groq with Replicate, Deepgram, and OpenAI as fallback providers for reliability.',
        },
        {
          icon: '📝',
          title: 'Show notes, captions, or doc',
          desc: 'AI summary appears alongside the transcript automatically. Download TXT for plain text, SRT/VTT for episode captions, DOCX for a Word document. Translate to 50+ languages with one click.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for MP3 transcription',
        bullets: [
          {
            title: 'Built for podcast and voice workflows',
            desc: 'MP3 is what podcast networks distribute and voice apps export. Mictoo MP3 transcription is tuned for that exact use case: speech-focused content with timestamps useful for show notes, captions, and time-aligned editing.',
          },
          {
            title: 'No bitrate gotchas',
            desc: 'A 32 kbps mono voice note transcribes essentially as well as a 192 kbps stereo studio MP3, because Whisper resamples to 16 kHz mono internally anyway. Use whatever bitrate your source produces, no need to upsample or downsample first.',
          },
          {
            title: 'AI summary for episode notes',
            desc: 'The AI summary appears alongside the transcript automatically. Useful as the foundation for podcast show notes, episode pages, and SEO-friendly text summaries of each episode.',
          },
          {
            title: 'SRT and VTT for episode video versions',
            desc: 'Many podcasters publish a video version of each episode on YouTube. Download SRT or VTT after transcription to drop as captions on the YouTube upload, with timestamps that align to the original audio.',
          },
          {
            title: 'Translation for international podcast audiences',
            desc: 'After the English transcript is ready, translate to Spanish, French, German, Portuguese, or 45+ other languages with one click. Useful for podcasts shipping to multilingual audiences or international syndication.',
          },
        ],
      }}
      useCases={{
        title: 'MP3 transcription scenarios',
        items: [
          {
            title: 'Podcast show notes generation',
            desc: 'You finished editing the episode, bounced to MP3, uploaded to your host. Drop the same MP3 here for the transcript and AI summary that become the show notes and episode page.',
          },
          {
            title: 'Podcast back-catalog transcription',
            desc: 'Years of episodes already published, no transcripts. Process them one by one to backfill the archive and make every episode searchable and accessible.',
          },
          {
            title: 'Voice-memo-to-document conversion',
            desc: 'Voice notes recorded on your phone (exported as MP3 from many apps). Transcribe to turn rambling ideas into searchable, editable text for your notes app or document.',
          },
          {
            title: 'Downloaded interview transcription',
            desc: 'Podcast interview you want to quote in an article, conference talk MP3 you want to reference, downloaded lecture you want to study. Drop the MP3, get the text.',
          },
          {
            title: 'Music video lyrics extraction (clean vocals)',
            desc: 'For songs with clear vocals over minimal music, Whisper can produce lyric transcripts from MP3. Quality drops with heavy backing instrumentation; works best for spoken-word, folk, and a cappella.',
          },
          {
            title: 'Audiobook chapter transcription',
            desc: 'You have an audiobook MP3 chapter and want a printed text version for note-taking. Drop the MP3, get the text. Note: large audiobook files often exceed 60 MB and need splitting first.',
          },
        ],
      }}
      proTips={{
        title: 'MP3 transcription tips',
        tips: [
          {
            title: 'For long podcast episodes, the 60 MB cap is the limit',
            desc: 'A 60-minute MP3 at 128 kbps stereo is around 55 MB, just under the cap. At 192 kbps stereo it is around 82 MB, over the cap. For files near the limit, downsample to 64 kbps mono with ffmpeg or Audacity (no transcript quality loss for speech).',
          },
          {
            title: 'Voice content can use very low bitrates',
            desc: 'For voice-only content (interviews, lectures, podcasts with no music), 64 kbps mono MP3 sounds clean and transcribes with the same accuracy as 192 kbps stereo. A 90-minute lecture fits in 43 MB this way.',
          },
          {
            title: 'For podcast back-catalog, batch is on the roadmap',
            desc: 'Right now you transcribe one file at a time. For large back-catalog projects, transcribe a few per day rather than all at once. Batch API access is planned for the Pro tier.',
          },
          {
            title: 'Setting the language manually helps short clips',
            desc: 'For voice notes or short MP3s (under 5 minutes), Whisper auto-detection can wobble. Pick the language explicitly in the dropdown for short clips, especially non-English content.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Why MP3 still dominates 30 years after launch</h2>
          <p>
            MP3 was finalised in 1993, became practical for consumer
            distribution in the mid-1990s, and has been "almost replaced
            by newer formats" for the entire time since. AAC sounds
            slightly better at the same bitrate. Opus sounds noticeably
            better for voice. FLAC is lossless. Yet MP3 remains the
            default for podcast distribution, downloadable audio, and
            voice memo apps. The reason is universality: every device,
            every platform, every player plays MP3 without negotiation.
          </p>
          <h3>What makes MP3 well-suited to transcription</h3>
          <p>
            For speech content at reasonable bitrates (96-128 kbps and
            up), MP3 preserves enough acoustic detail that Whisper
            transcribes it essentially as well as uncompressed WAV. The
            perceptual compression model in MP3 discards information
            in frequencies and patterns that humans (and ASR models
            trained on human speech) do not rely on heavily.
          </p>
          <p>
            Where MP3 starts to hurt transcription: very low bitrates
            (32 kbps and below) on noisy audio, where the encoder is
            already throwing away signal-relevant information to fit
            the bitrate budget. For clean voice at low bitrates, even
            32 kbps mono usually transcribes well; for noisy or
            multi-speaker audio at low bitrates, accuracy drops.
          </p>
          <h3>Constant vs variable bitrate</h3>
          <p>
            MP3 supports both Constant Bitrate (CBR, every second uses
            the same number of bits) and Variable Bitrate (VBR, the
            encoder uses more bits for complex passages and fewer for
            quiet ones). For transcription, both work the same. The
            transcript quality depends on the average bitrate, not
            whether it varies. CBR is more predictable for file size
            (useful for podcast hosts with size targets); VBR is more
            efficient for the same quality.
          </p>
          <h3>Where MP3 files come from</h3>
          <p>
            Podcast distribution: every major podcast hosting platform
            (Libsyn, Buzzsprout, Anchor, RSS.com, Megaphone) accepts
            MP3 and most publish as MP3. The episode MP3 in your
            podcast app is the same file you upload here.
          </p>
          <p>
            Voice recording apps: many phone voice recorders default
            to MP3 (Easy Voice Recorder on Android, Voice Recorder
            apps on iPhone), making MP3 a natural transcription input.
          </p>
          <p>
            Web downloads: YouTube audio extractors often produce MP3
            for compatibility, downloadable lectures from learning
            platforms, audiobook samples, music downloads from
            Bandcamp (if you chose MP3), broadcast radio archives.
          </p>
          <h3>ID3 tags and what we do with them</h3>
          <p>
            MP3 files often carry ID3 metadata: title, artist, album,
            year, cover art. We read the audio and ignore the tags
            during transcription. The transcript itself is plain text;
            it does not carry MP3 metadata forward. If you need the
            transcript matched with the original metadata (for example,
            "episode 42 of Show X"), keep that mapping on your side
            when you archive the transcripts.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Will Mictoo transcribe any MP3 file?',
          a: 'Yes, including any bitrate (32 kbps voice notes to 320 kbps studio quality), constant or variable bitrate, mono or stereo, any sample rate. We accept the MP3 directly, no preprocessing required. Free for files up to 60 MB.',
        },
        {
          q: 'Does the MP3 bitrate matter for transcription quality?',
          a: 'Barely. Whisper resamples to 16 kHz mono internally before transcription, so a 64 kbps voice note transcribes essentially as well as a 320 kbps studio MP3 for clean audio. Bitrate only matters at extremes (under 32 kbps starts to lose information).',
        },
        {
          q: 'My podcast MP3 is over 60 MB. What now?',
          a: 'Downsample with ffmpeg -i podcast.mp3 -ab 64k -ac 1 output.mp3 to drop the bitrate and convert to mono. A 60-minute podcast at 64 kbps mono is around 28 MB. Speech quality and transcription accuracy stay the same.',
        },
        {
          q: 'Can I get an AI summary of the podcast episode?',
          a: 'Yes. The AI summary appears alongside the transcript automatically after transcription finishes. Useful as the starting point for podcast show notes, episode descriptions, and SEO-friendly summaries.',
        },
        {
          q: 'Can I download SRT subtitles for the episode video version?',
          a: 'Yes. Download as SRT or VTT after transcription. Both formats include timestamps aligned to the original MP3 timeline. Drop into your YouTube upload or video editor for captions.',
        },
        {
          q: 'Does Mictoo transcribe non-English MP3 files?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short MP3s or non-English content, set the language explicitly in the dropdown for cleaner first-pass detection.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription finishes, pick a target language and click Translate. The translation is generated by GPT-4o-mini and appears alongside the original transcript.',
        },
        {
          q: 'Will my MP3 file be saved on your servers?',
          a: 'No. The MP3 streams to the transcription provider, gets processed once, and is dropped from memory. We never write the audio to disk. The text transcript is only stored if you sign in and choose to add it to your history.',
        },
        {
          q: 'Will ID3 metadata (artist, title, album) be in the transcript?',
          a: 'No. The transcript is plain text without MP3 metadata. ID3 tags are ignored during transcription. If you need the transcript matched with episode metadata, keep that mapping in your own archive system.',
        },
        {
          q: 'How long does an MP3 transcription take?',
          a: 'A 30-minute podcast MP3 typically finishes in 30-50 seconds end to end. Larger files (60-minute podcasts near the upload cap) take 60-90 seconds. Upload speed is often the longer step.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Transcribe your MP3, write the show notes faster
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Podcast episode, voice note, downloaded interview, audiobook chapter. Drop the MP3, get the text and summary.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Upload MP3 to transcribe
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to text', desc: 'Format-agnostic, accepts any audio file.' },
        { href: '/transcribe-video-to-text', label: 'Video to text', desc: 'For MP4, MOV, WebM video files.' },
        { href: '/podcast-transcription', label: 'Podcast transcription', desc: 'Podcast-specific workflows and tips.' },
        { href: '/free-srt-generator', label: 'Free SRT generator', desc: 'When subtitles are the primary deliverable.' },
      ]}
    />
  )
}
