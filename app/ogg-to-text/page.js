import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'OGG to Text: Telegram Voice, Linux Audio, and Opus/Vorbis Transcription | Mictoo',
  description:
    'Upload OGG audio (Vorbis, Opus, FLAC inside OGG) or Telegram .oga voice messages. Editable transcript with timestamps in seconds, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/ogg-to-text',
    languages: {
      'en': 'https://mictoo.com/ogg-to-text',
      'fr': 'https://mictoo.com/fr/ogg-to-text',
      'de': 'https://mictoo.com/de/ogg-to-text',
      'es': 'https://mictoo.com/es/ogg-to-text',
      'ru': 'https://mictoo.com/ru/ogg-to-text',
      'it': 'https://mictoo.com/it/ogg-to-text',
      'pt': 'https://mictoo.com/pt/ogg-to-text',
      'pl': 'https://mictoo.com/pl/ogg-to-text',
      'ja': 'https://mictoo.com/ja/ogg-to-text',
      'ko': 'https://mictoo.com/ko/ogg-to-text',
      'x-default': 'https://mictoo.com/ogg-to-text',
    },
  },
  openGraph: {
    title: 'OGG to Text: Telegram Voice, Linux Audio, Opus/Vorbis Transcription | Mictoo',
    description: 'Upload OGG audio or Telegram .oga voice messages. Editable transcript in seconds.',
    url: 'https://mictoo.com/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG to Text: Telegram Voice and Linux Audio Transcription',
    description: 'Upload OGG audio or Telegram .oga voice messages. Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function OggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Opus · .oga"
      h1={
        <>
          OGG to Text
          <br />
          <span className="text-brand-600">Telegram voice and open-source audio</span>
        </>
      }
      subtitle="Drag a Telegram voice export, a Linux desktop recording, or any OGG file with Vorbis, Opus, or FLAC inside. We figure out the codec and return an editable transcript."
      valueBlock={
        <article className="prose-content">
          <p>
            OGG is a container that can hold several different audio codecs.
            Vorbis is the classic. Opus is the modern voice-friendly one
            that powers Telegram voice messages and most WebRTC calls. FLAC
            also lives inside OGG sometimes. We detect what is in the file
            automatically and decode the right way.
          </p>
          <p>
            Most people who land here are transcribing a Telegram voice
            message (usually saved with a .oga extension) or audio from a
            Linux recording app. Both work directly, no conversion to MP3
            first. The transcript comes back with timestamps and exports as
            TXT, SRT, VTT, or DOCX.
          </p>
          <p className="text-sm text-slate-500">
            Free for files up to 60 MB. Opus voice messages are very small
            (a 10-minute Telegram voice memo is around 1 MB), so the cap is
            rarely an issue here.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🐧',
          title: 'Drop the OGG (any codec)',
          desc: 'Vorbis, Opus, or FLAC inside an OGG container, file extensions .ogg, .oga, or .opus. We sniff the actual codec from the file headers, you do not need to know in advance.',
        },
        {
          icon: '🎤',
          title: 'We decode and transcribe',
          desc: 'Our backend pulls the audio out of the OGG container, decodes the codec (Vorbis or Opus is most common), and feeds the raw audio to Whisper. Adds a second or two over a WAV.',
        },
        {
          icon: '💬',
          title: 'Read, edit, share',
          desc: 'Open the transcript inline, fix any wrong names, copy the cleaned text into Telegram, email, or Notes. Export TXT, SRT, VTT, or DOCX when you need a file.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for OGG and .oga files',
        bullets: [
          {
            title: 'Telegram voice messages work directly',
            desc: 'When you export a Telegram voice message from the desktop or web client, the file extension is usually .oga (Ogg Audio). The codec inside is Opus. Drop the .oga file here as-is. No rename to .ogg needed, no conversion to MP3 needed.',
          },
          {
            title: 'All three OGG codecs supported',
            desc: 'Vorbis (the original, late 90s), Opus (2012, voice-optimised, what Telegram and WebRTC use), and FLAC inside OGG (sometimes used in archival workflows). We detect the codec and decode appropriately.',
          },
          {
            title: 'Opus voice quality is genuinely good',
            desc: 'Opus at the bitrates Telegram uses (~32 kbps for voice) sounds clean and transcribes well. Whisper handles Opus as accurately as it handles uncompressed audio of the same speech.',
          },
          {
            title: 'Plays nice with Linux audio workflows',
            desc: 'Many Linux desktop recording apps, podcast publishing tools, and Mastodon voice posts use OGG. We accept all of them. Same for KDE Connect audio shares, Wikipedia audio samples, and free-software podcast networks.',
          },
          {
            title: 'No tracking, no signup',
            desc: 'Upload, transcribe, copy. The file is decoded on the server, the audio is dropped from memory after transcription. We do not log the audio or save it to disk.',
          },
        ],
      }}
      useCases={{
        title: 'Where OGG and .oga files come from',
        items: [
          {
            title: 'Telegram voice messages',
            desc: 'By far the most common source landing on this page. Telegram Desktop and Web save voice messages as .oga (Opus inside OGG). Useful for keeping a written record of long voice notes from friends, family, or work groups.',
          },
          {
            title: 'Linux audio recordings',
            desc: 'GNOME Sound Recorder, KDE Audiotube, and similar Linux desktop apps default to OGG (usually Opus or Vorbis). Common for free-software-aligned podcasters, journalists, researchers.',
          },
          {
            title: 'Mastodon and Fediverse voice posts',
            desc: 'Some Fediverse audio posting apps use OGG Opus for compatibility with the broader free-software ecosystem. Drop the file here to transcribe for accessibility or your own archive.',
          },
          {
            title: 'Wikipedia and archive.org audio samples',
            desc: 'Wikipedia pronunciation guides, IPA samples, and short historic recordings are usually OGG Vorbis (sometimes FLAC inside OGG). Useful for researchers and language students transcribing reference audio.',
          },
          {
            title: 'Discord voice on certain platforms',
            desc: 'Discord chose AAC for its mobile voice messages but uses Opus for live voice channels. Older or third-party Discord export tools sometimes produce OGG files.',
          },
          {
            title: 'WebRTC call recordings',
            desc: 'Many browser-based meeting and call recorders save audio as Opus inside OGG (or WebM, see below). Mictoo handles both directly.',
          },
        ],
      }}
      proTips={{
        title: 'OGG and Opus tips worth knowing',
        tips: [
          {
            title: 'Rename .oga to .ogg only if a player complains',
            desc: 'Both extensions are valid OGG containers. Some media players insist on .ogg for legacy reasons. Mictoo accepts both, so no rename needed for transcription. Only rename if you also need to play the file in a stubborn third-party app.',
          },
          {
            title: 'For Telegram exports, use Desktop or Web, not mobile',
            desc: 'Mobile Telegram does not always expose voice messages as downloadable files. Telegram Desktop and Telegram Web both let you right-click a voice message and save it. From there, drop directly here.',
          },
          {
            title: 'Opus already optimises for voice, no pre-processing needed',
            desc: 'Unlike WAV or MP3 where downsampling helps, Opus is already engineered for voice at low bitrates. The file is small (10-minute voice memo is around 1 MB), the audio is clear, just upload and go.',
          },
          {
            title: 'If your OGG is actually a video container, see /webm-to-text',
            desc: 'Some screen recorder tools confusingly save audio-plus-video files with .ogg or .ogv extension. If your file has video, use the WebM page instead, we extract just the audio there too.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>OGG is a container, not a codec (and why that matters)</h2>
          <p>
            A common confusion: "OGG audio quality" does not really exist as
            a single thing. OGG is a container, like MP4 or WebM. The
            quality depends on what codec is packed inside. Three codecs
            account for almost every OGG file in the wild: Vorbis (the
            original lossy audio codec, late 1990s), Opus (the modern
            voice-and-music codec, 2012), and FLAC (lossless, sometimes
            shipped inside OGG instead of bare).
          </p>
          <p>
            That is why your friend can send you a "voice message OGG file"
            from Telegram and it is dramatically smaller than the OGG audio
            sample you download from Wikipedia: Telegram is using Opus at
            32 kbps, Wikipedia is using Vorbis at 128 kbps or FLAC inside
            OGG. Same container, different codec, very different file sizes.
          </p>
          <h3>The Xiph.org and open-source story</h3>
          <p>
            OGG and its codecs were created by Xiph.Org Foundation as an
            explicit open-source alternative to the patent-encumbered MP3
            and AAC formats that dominated the early 2000s. The original
            promise: high-quality audio nobody owes royalties on. Vorbis
            shipped in 2000 and quickly became the de-facto choice for
            free-software desktops, games, and projects allergic to MPEG
            patents.
          </p>
          <p>
            By 2012 the world had moved on. Patents on MP3 expired, AAC
            became universal in mobile, and Xiph released Opus as a new
            general-purpose codec, this time co-designed with the IETF
            specifically for low-latency voice. Opus replaced Vorbis in
            most new applications. Today, almost any new OGG file you
            encounter contains Opus, not Vorbis.
          </p>
          <h3>Why Telegram chose .oga and Opus</h3>
          <p>
            Telegram needed a voice codec that was small enough to send
            quickly on slow networks, clear enough to be useful for spoken
            words, and free of patent claims they would have to license.
            Opus inside OGG was the obvious pick. The .oga extension (Ogg
            Audio) is the official IANA-registered file extension for
            OGG files containing only audio (vs .ogv for video or .ogg
            historically for either). In practice, most players treat .oga
            and .ogg as the same thing for audio-only files.
          </p>
          <h3>FLAC inside OGG: an unusual but real combination</h3>
          <p>
            FLAC is normally shipped as bare .flac. But the FLAC
            specification also defines a way to pack the same lossless audio
            inside an OGG container (file extension .oga or .ogg). Some
            archival workflows prefer this because OGG containers are
            seekable in a slightly different way that some legacy archival
            tools handle better. Mictoo decodes FLAC inside OGG the same
            way as bare FLAC, no extra step needed.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            OGG vs other audio formats
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            OGG is the container most associated with open-source and
            Telegram voice. Here is how it stacks up.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">OGG (Opus)</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Codec</dt><dd>Opus (or Vorbis/FLAC)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Telegram voice, Linux apps</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Very small (~1 MB / 10 min)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Direct, clean accuracy</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/m4a-to-text" className="hover:text-brand-600">M4A →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Codec</dt><dd>AAC (or ALAC)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>iPhone Voice Memos, Apple</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Small</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Same accuracy as OGG</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Codec</dt><dd>MP3 (no container)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Podcasts, general audio</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Small</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Same accuracy at 128 kbps+</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/webm-to-text" className="hover:text-brand-600">WebM →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Codec</dt><dd>Opus + VP8/VP9 video</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Loom, OBS, browser recording</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Bigger (often contains video)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>We strip video, decode audio</dd></div>
              </dl>
            </div>
          </div>
        </>
      }
      faq={[
        {
          q: 'My Telegram voice export has .oga extension, will it work?',
          a: 'Yes. .oga is the official extension for OGG files that contain only audio (Telegram voice messages, podcasts shipped as audio-only OGG). No rename to .ogg needed. We accept the .oga file as-is and decode the Opus codec inside.',
        },
        {
          q: 'How do I save a Telegram voice message to a file?',
          a: 'Easiest path is Telegram Desktop or Web (not mobile). Right-click the voice message in the chat and choose Save As. The saved file is an .oga (Opus inside OGG). Drop it in here. Mobile Telegram does not expose voice messages as files reliably.',
        },
        {
          q: 'What codecs inside OGG do you support?',
          a: 'All three common ones: Vorbis (the original, used in older OGG files and Wikipedia samples), Opus (modern, used by Telegram and most new OGG files), and FLAC inside OGG (sometimes used in archival workflows). We detect the codec from the file header automatically.',
        },
        {
          q: 'Is Opus better than MP3 for voice quality?',
          a: 'At the same bitrate, yes, especially at low bitrates. Opus at 32 kbps mono sounds noticeably better than MP3 at the same bitrate, which is why voice apps standardised on Opus. For transcription specifically, Whisper handles both with similar accuracy.',
        },
        {
          q: 'Why is my Telegram voice file so small (under 1 MB)?',
          a: 'Telegram uses Opus voice mode at very low bitrates (~32 kbps mono) because voice messages need to send quickly on slow mobile networks. A 10-minute voice memo lands around 1 MB. Quality is fine for transcription, no pre-processing needed.',
        },
        {
          q: 'Can I transcribe OGG files from Wikipedia or other reference sources?',
          a: 'Yes. Wikipedia pronunciation samples, IPA reference recordings, and archive.org audio are typically OGG Vorbis or FLAC inside OGG. All work. Useful for language students, researchers, and people building speech datasets.',
        },
        {
          q: 'My OGG plays in VLC but not in iPhone Voice Memos, why?',
          a: 'iPhone Music and Voice Memos do not include OGG codecs by default. The file is fine, it just needs a player that knows OGG (VLC on iOS works, free). For transcription this does not matter, we decode OGG ourselves on the server.',
        },
        {
          q: 'What is the difference between .ogg, .oga, .opus, and .ogv?',
          a: 'All four are OGG containers. .ogg is the historical generic extension (audio or video). .oga is the modern extension for audio-only OGG. .opus is a special case for Opus-codec-only OGG files. .ogv is for video. Mictoo accepts .ogg, .oga, and .opus directly. For .ogv with audio inside, see our WebM page.',
        },
        {
          q: 'Will my Telegram voice message be deleted after upload?',
          a: 'No. We never modify or delete the file you uploaded. Your original Telegram voice message stays in the chat, your saved .oga copy stays on your computer. We only read a copy to transcribe it, then drop it from memory.',
        },
        {
          q: 'Can I transcribe a long Telegram voice message in another language?',
          a: 'Yes, over 50 languages with auto-detect. For very short voice messages (under five minutes) where detection sometimes mis-fires on the first few seconds of silence, set the language manually in the dropdown.',
        },
        {
          q: 'Does the transcript come back instantly for a small Opus file?',
          a: 'Almost. A 10-minute Telegram Opus voice message (around 1 MB) usually finishes transcribing in 5-15 seconds total, including upload. The OGG decode step adds maybe a second over a WAV of the same audio.',
        },
        {
          q: 'I have an OGG file with FLAC codec inside. Does that work?',
          a: 'Yes. FLAC inside OGG is detected automatically and decoded the same way as a bare .flac file. Most users will not have this combination unless they came from an archival workflow that prefers OGG-wrapped FLAC.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Send your OGG or .oga, get the text
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Telegram voice messages, Linux recordings, Wikipedia samples. Free up to 60 MB.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe an OGG now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'For iPhone voice memos in M4A format.' },
        { href: '/webm-to-text', label: 'WebM to Text', desc: 'For browser screen recordings (Loom, OBS) with Opus audio.' },
        { href: '/flac-to-text', label: 'FLAC to Text', desc: 'For bare FLAC files outside an OGG container.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Format-agnostic if you are not sure what your file is.' },
      ]}
    />
  )
}
