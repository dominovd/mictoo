import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'AAC to Text: Raw AAC and ADTS Audio Transcription | Mictoo',
  description:
    'Upload raw .aac files (ADTS stream or ADIF), get an editable transcript in seconds. Common for podcast downloads, broadcast archives, ripped iPhone audio.',
  alternates: {
    canonical: 'https://mictoo.com/aac-to-text',
    languages: {
      'en': 'https://mictoo.com/aac-to-text',
      'fr': 'https://mictoo.com/fr/aac-to-text',
      'de': 'https://mictoo.com/de/aac-to-text',
      'es': 'https://mictoo.com/es/aac-to-text',
      'ru': 'https://mictoo.com/ru/aac-to-text',
      'it': 'https://mictoo.com/it/aac-to-text',
      'pt': 'https://mictoo.com/pt/aac-to-text',
      'pl': 'https://mictoo.com/pl/aac-to-text',
      'ja': 'https://mictoo.com/ja/aac-to-text',
      'ko': 'https://mictoo.com/ko/aac-to-text',
      'x-default': 'https://mictoo.com/aac-to-text',
    },
  },
  openGraph: {
    title: 'AAC to Text: Raw AAC and ADTS Audio Transcription | Mictoo',
    description: 'Upload raw .aac files (ADTS stream or ADIF). Editable transcript in seconds.',
    url: 'https://mictoo.com/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC to Text: Raw AAC Stream Transcription',
    description: 'Upload raw .aac (ADTS or ADIF). Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function AacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · ADTS · Raw codec stream"
      h1={
        <>
          AAC to Text
          <br />
          <span className="text-brand-600">Raw AAC streams transcribed cleanly</span>
        </>
      }
      subtitle="Drop a .aac file from a podcast CDN, a broadcast archive, or a ripped iPhone export. We handle ADTS and ADIF stream formats and return an editable transcript with timestamps."
      valueBlock={
        <article className="prose-content">
          <p>
            AAC is the audio codec that quietly powers most modern audio:
            YouTube, Apple Music, podcasts on most networks, broadcast
            radio archives, iPhone Voice Memos at lossy quality. Usually
            AAC lives inside a container like M4A or MP4. But sometimes you
            get a raw .aac file with no container at all, which is what
            this page is for.
          </p>
          <p>
            Drop the raw .aac in. We detect whether it is an ADTS stream
            (the streamable format, most common) or ADIF (the file-only
            format, very rare), decode it, and run it through Whisper. The
            transcript comes back in seconds with timestamps and exports
            for TXT, SRT, VTT, or DOCX.
          </p>
          <p className="text-sm text-slate-500">
            For AAC inside an M4A container (most iPhone Voice Memos), use
            the <a href="/m4a-to-text" className="text-brand-600 hover:underline">M4A to Text</a> page instead, it has more iPhone-specific guidance.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📡',
          title: 'Upload your .aac file',
          desc: 'Raw AAC, usually in ADTS stream format. Common sources: podcast CDN downloads, broadcast radio archives, ripped audio from FaceTime or iPhone, YouTube audio extracts.',
        },
        {
          icon: '🔍',
          title: 'We detect ADTS or ADIF',
          desc: 'The two AAC stream wrappers. ADTS (Audio Data Transport Stream) is what almost all real-world .aac files use. ADIF (Audio Data Interchange Format) is older and rarer. We handle both.',
        },
        {
          icon: '📝',
          title: 'Edit and export the transcript',
          desc: 'Fix words inline, then download TXT, SRT, VTT, or DOCX. Or copy directly to clipboard for pasting into a document or email.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for raw AAC files',
        bullets: [
          {
            title: 'Raw .aac without a container is supported',
            desc: 'Most online transcribers expect a container (MP3, M4A, WAV). If you got a bare .aac file from a podcast CDN or a broadcast archive, they reject it. We accept the raw stream directly, ADTS or ADIF.',
          },
          {
            title: 'AAC-LC, HE-AAC, HE-AAC v2 all work',
            desc: 'AAC-LC (Low Complexity, the standard profile, used by everyone) decodes natively. HE-AAC (High Efficiency, used by some broadcasters) and HE-AAC v2 (with parametric stereo, used at very low bitrates) both decode too. You do not specify which profile.',
          },
          {
            title: 'Bitrate from 32 kbps up to 320 kbps',
            desc: 'Podcast networks usually ship AAC at 64 to 128 kbps. Apple Music uses 256 kbps. Broadcast archives can be down to 32 kbps. All of these transcribe cleanly. Below 32 kbps quality starts to hurt the model.',
          },
          {
            title: 'The decode step is automatic',
            desc: 'Whisper does not read AAC directly. Our backend decodes the AAC stream into raw audio before passing to Whisper. Adds a fraction of a second to processing, you do not see the step.',
          },
          {
            title: 'Source file stays untouched',
            desc: 'We read your AAC once, decode it, transcribe it, then drop the audio from memory. We never write anything back to your file or store it on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Where raw .aac files come from',
        items: [
          {
            title: 'Podcast network CDN downloads',
            desc: 'Some podcast hosts ship the raw .aac stream rather than wrapping in MP3 or M4A, especially when the priority is the smallest possible file. Useful for transcribing for show notes or quoting in articles.',
          },
          {
            title: 'Broadcast radio archives',
            desc: 'Some BBC, NPR, and public-radio archives offer downloads as raw AAC for efficiency. Lower bitrates (32-64 kbps) than typical music distribution, but plenty for spoken-word transcription.',
          },
          {
            title: 'YouTube audio-only extracts',
            desc: 'When tools like yt-dlp extract audio from a YouTube video without re-encoding, the result is sometimes a raw .aac file (because YouTube serves AAC streams for many videos). Drop it here for the transcript.',
          },
          {
            title: 'iPhone audio rips outside an M4A',
            desc: 'Some screen-recorder and audio-rip tools produce raw .aac instead of wrapping in M4A. Common from older third-party iPhone audio capture apps.',
          },
          {
            title: 'In-flight entertainment audio captures',
            desc: 'Some airline entertainment systems stream AAC audio over their networks. People capturing audio from in-flight talks or audiobook material sometimes end up with raw .aac files.',
          },
          {
            title: 'Game and app voice line exports',
            desc: 'Mobile games and apps often ship voice lines as raw AAC streams to save space and licensing. Modders and accessibility researchers occasionally need transcripts of these.',
          },
        ],
      }}
      proTips={{
        title: 'Working with raw AAC',
        tips: [
          {
            title: 'If a player refuses your .aac, the file is probably ADIF (rare)',
            desc: 'Most players expect ADTS and silently fail on ADIF. Mictoo accepts both, so for transcription you do not need to worry. If you also need to play the file in a stubborn player, convert with ffmpeg: ffmpeg -i input.aac -c:a copy -f adts output.aac (which keeps the same codec but ensures ADTS framing).',
            },
          {
            title: 'For long broadcast archives at very low bitrate, expect some accuracy loss',
            desc: 'Below 32 kbps mono, AAC starts to compromise voice clarity. Whisper still tries but accuracy drops noticeably. If you have control over the source, re-encode at 64 kbps or higher before transcribing.',
          },
          {
            title: 'Convert to M4A if you also need to keep the file long-term',
            desc: 'Raw .aac files are awkward to manage on macOS and Windows (poor player support, no metadata). Wrap in M4A with ffmpeg: ffmpeg -i input.aac -c:a copy output.m4a (no re-encoding). The M4A is the same audio with a friendlier container.',
          },
          {
            title: 'Set the language manually for short clips',
            desc: 'Whisper auto-detect can mis-fire on clips under five minutes, especially with silence at the start. Pick the language explicitly in the dropdown for short broadcast clips or voice lines.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>AAC is a codec, not a format</h2>
          <p>
            "What format is this file" gets confusing with AAC because AAC
            is just a codec, not a container. The codec compresses audio.
            The container packages compressed audio with metadata and
            timing information so a player knows how to navigate it. In
            most cases, AAC audio lives inside an M4A or MP4 container,
            which has all the metadata and seekability features modern
            players expect.
          </p>
          <p>
            A raw .aac file has no container. It is just the bare codec
            output, sometimes wrapped in a minimal framing layer called
            ADTS that lets players sync to the start of any frame. Useful
            for streaming (each frame is independent and self-describing),
            inconvenient for offline use (no metadata, no chapter markers,
            no quick seek to a timestamp).
          </p>
          <h3>ADTS vs ADIF, briefly</h3>
          <p>
            ADTS (Audio Data Transport Stream) is the framing used for
            streamable AAC. Each AAC frame has a small header that lets a
            decoder lock on at any point in the stream, which is why ADTS
            is used for broadcast and HTTP streaming. Almost every raw
            .aac file in the wild is ADTS. ADIF (Audio Data Interchange
            Format) is the file-only alternative with a single header at
            the start and no per-frame sync, which makes it slightly
            smaller but unusable for streaming. ADIF is now rare; you
            mostly see it in legacy archives.
          </p>
          <h3>AAC-LC, HE-AAC, HE-AAC v2</h3>
          <p>
            AAC comes in profiles tuned for different bitrates. AAC-LC (Low
            Complexity) is the workhorse, used at 64 kbps and up for most
            modern audio. HE-AAC (High Efficiency) adds Spectral Band
            Replication to make low bitrates sound better, used in some
            broadcast and streaming contexts at 32 to 64 kbps. HE-AAC v2
            adds Parametric Stereo for ultra-low bitrates, used by digital
            radio and some podcast distribution at 24 to 48 kbps. Mictoo
            decodes all three transparently, you do not pick a profile.
          </p>
          <h3>Why podcasts mostly use MP3, not AAC</h3>
          <p>
            AAC is technically better than MP3 at the same bitrate, yet
            most podcast networks still distribute MP3. The reason is
            historical compatibility: every podcast app on every device
            from 2005 onward plays MP3. AAC support is universal now too,
            but the install base of legacy MP3-only podcatchers was
            enough to keep MP3 as the safe choice. Networks that picked
            AAC tend to be newer and more closely tied to the Apple
            ecosystem.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            AAC vs related audio formats
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            AAC the codec lives inside several containers. Pick the page
            that matches your actual file.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">.aac (raw)</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>None (ADTS or ADIF)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Podcast CDN, broadcast, rip</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Metadata support</dt><dd>None</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Direct (this page)</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/m4a-to-text" className="hover:text-brand-600">M4A →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>MP4 (audio-only)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>iPhone Voice Memos, GarageBand</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Metadata support</dt><dd>Full (title, artist, chapters)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Use M4A page</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>None (codec only)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Most podcasts, web audio</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Metadata support</dt><dd>ID3 tags</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Use MP3 page</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/ogg-to-text" className="hover:text-brand-600">OGG (Opus) →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Container</dt><dd>OGG</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Telegram voice, Linux apps</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Metadata support</dt><dd>Vorbis comments</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Use OGG page</dd></div>
              </dl>
            </div>
          </div>
        </>
      }
      faq={[
        {
          q: 'Will a raw .aac file from a podcast CDN work?',
          a: 'Yes. Most podcast CDN .aac files are ADTS streams. Drop the file in directly, we decode the ADTS framing and transcribe the audio inside. No conversion to MP3 or M4A first.',
        },
        {
          q: 'What is the difference between .aac and .m4a?',
          a: '.aac is the raw codec stream with no container around it. .m4a is the same AAC audio wrapped in an MP4 container, which adds metadata support (title, artist, chapters) and easier player compatibility. For transcription, both decode to the same audio. We have separate pages for each because the user-side workflows differ.',
        },
        {
          q: 'Do you support HE-AAC and HE-AAC v2?',
          a: 'Yes. Both High Efficiency AAC profiles decode automatically. You do not specify the profile when uploading. HE-AAC v2 with parametric stereo (used at very low bitrates by digital radio) also works.',
        },
        {
          q: 'My .aac file is from a YouTube audio extract. Does it work?',
          a: 'Yes. Tools like yt-dlp can extract YouTube audio as raw AAC without re-encoding. The result is usually an ADTS stream. Drop it in here as-is, no conversion needed.',
        },
        {
          q: 'What is ADTS vs ADIF?',
          a: 'Two different ways to wrap raw AAC. ADTS (Audio Data Transport Stream) puts a small header on every AAC frame so a player can lock onto the stream at any point, used for broadcast and streaming. ADIF (Audio Data Interchange Format) has a single header at the start of the file, rarer today. We handle both.',
        },
        {
          q: 'Why does my .aac not play in iTunes / Apple Music?',
          a: 'iTunes and Music expect AAC inside an M4A container, not a raw .aac stream. The fix is to wrap in M4A: ffmpeg -i input.aac -c:a copy output.m4a. This is a container change without re-encoding, takes a second. For transcription you do not need this step, we accept raw .aac directly.',
        },
        {
          q: 'Will broadcast radio archives at very low bitrate transcribe well?',
          a: 'Reasonably. At 32 kbps mono and above, accuracy is good. Below 32 kbps the AAC encoder starts removing too much of the high-frequency consonant information Whisper uses, and accuracy drops noticeably. Most modern archives are 64 kbps or above.',
        },
        {
          q: 'Can I get timestamps from a raw .aac file?',
          a: 'Yes. Download as SRT or VTT for timestamps, or JSON for word-level alignment. Even though raw .aac has no native timing metadata, our decoder reconstructs the timeline based on sample positions, so timestamps are accurate against the audio.',
        },
        {
          q: 'Will my .aac file be saved on your servers?',
          a: 'No. The audio streams through to the transcription provider, gets decoded once for inference, and is dropped from memory after the response. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to save it to your history.',
        },
        {
          q: 'Can I transcribe a .aac file in another language?',
          a: 'Yes, over 50 languages with auto-detect. Pick the language manually in the dropdown for short clips (under five minutes) where auto-detect sometimes mis-fires on silence or non-speech intros.',
        },
        {
          q: 'What about ALAC (Apple Lossless)? Same as AAC?',
          a: 'No, despite the similar name. ALAC is a lossless codec, AAC is lossy. ALAC always lives inside an M4A container, never as a raw .alac. If your file has ALAC audio, use the M4A page.',
        },
        {
          q: 'My .aac file has no metadata (artist, title). Is that normal?',
          a: 'Yes, completely. Raw .aac streams have no metadata layer, that is one of the reasons people wrap in M4A. If you need title or artist info, wrap in M4A first (ffmpeg one-liner above) and add tags in iTunes, MusicBrainz Picard, or another tagging tool.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Upload your raw .aac, get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Podcast CDN downloads, broadcast archives, YouTube audio extracts, iPhone rips. Free up to 60 MB.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe an AAC now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'For AAC wrapped in an MP4 container (iPhone Voice Memos).' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text', desc: 'For MP3 files (most podcasts and general audio).' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Format-agnostic if you are unsure what your file is.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'If your AAC stream is too big for direct upload.' },
      ]}
    />
  )
}
