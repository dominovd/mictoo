import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'M4A to Text: Free iPhone Voice Memo and Apple Audio Transcription | Mictoo',
  description:
    'Upload an M4A file from iPhone Voice Memos, GarageBand, Apple Podcasts, or FaceTime, and get an editable transcript in seconds. AAC inside MP4, no conversion needed.',
  alternates: {
    canonical: 'https://mictoo.com/m4a-to-text',
    languages: {
      'en': 'https://mictoo.com/m4a-to-text',
      'fr': 'https://mictoo.com/fr/m4a-to-text',
      'de': 'https://mictoo.com/de/m4a-to-text',
      'es': 'https://mictoo.com/es/m4a-to-text',
      'ru': 'https://mictoo.com/ru/m4a-to-text',
      'it': 'https://mictoo.com/it/m4a-to-text',
      'pt': 'https://mictoo.com/pt/m4a-to-text',
      'pl': 'https://mictoo.com/pl/m4a-to-text',
      'ja': 'https://mictoo.com/ja/m4a-to-text',
      'ko': 'https://mictoo.com/ko/m4a-to-text',
      'x-default': 'https://mictoo.com/m4a-to-text',
    },
  },
  openGraph: {
    title: 'M4A to Text: iPhone Voice Memo and Apple Audio Transcription | Mictoo',
    description: 'Upload M4A from Voice Memos, GarageBand, Apple Podcasts, or FaceTime. Editable transcript in seconds.',
    url: 'https://mictoo.com/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A to Text: Free iPhone Voice Memo Transcription',
    description: 'Upload M4A from Voice Memos, GarageBand, Apple Podcasts. Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function M4aToTextPage() {
  return (
    <LandingLayout
      badge="M4A · AAC · iPhone · Free"
      h1={
        <>
          M4A to Text
          <br />
          <span className="text-brand-600">iPhone Voice Memos and Apple audio</span>
        </>
      }
      subtitle="AirDrop a Voice Memo, drop a GarageBand bounce, share an Apple Podcasts download. We turn M4A files into editable transcripts with timestamps and clean exports."
      valueBlock={
        <article className="prose-content">
          <p>
            Almost every audio file your iPhone, iPad, or Mac creates is an
            M4A: Voice Memos, GarageBand bounces, FaceTime audio exports,
            podcasts saved for offline listening. Drop one in here and the
            transcript comes back in seconds, with timestamps you can click
            to jump into the audio.
          </p>
          <p>
            No need to convert to MP3 first. We accept the M4A directly, the
            way Apple wrote it. Works just as well with M4A files produced
            outside the Apple ecosystem, like recordings from Discord, some
            Android apps, or web-recorder tools that pick AAC.
          </p>
          <p className="text-sm text-slate-500">
            Free for files up to 60 MB, which covers most Voice Memos
            (typical 30-minute Voice Memo is around 15 MB). Long recordings?
            See <a href="/how-to-compress-audio" className="text-brand-600 hover:underline">how to compress audio</a> or <a href="/how-to-split-audio" className="text-brand-600 hover:underline">how to split audio</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📱',
          title: 'AirDrop or upload your M4A',
          desc: 'From the Voice Memos app share sheet, AirDrop the file to your Mac and drag it in. Or upload directly from iPhone Safari by tapping the share icon next to the memo.',
        },
        {
          icon: '⚡',
          title: 'Whisper reads the AAC track',
          desc: 'We decode the AAC audio inside the MP4 container directly. No re-encoding step. A 20-minute Voice Memo usually transcribes in 15-30 seconds end to end.',
        },
        {
          icon: '✍️',
          title: 'Edit and send',
          desc: 'Fix names Whisper misheard, then export as TXT, SRT, VTT, or DOCX. Most people copy the cleaned text straight into Notes, Slack, or an email draft.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for M4A files',
        bullets: [
          {
            title: 'iPhone Voice Memos work without exporting first',
            desc: 'You do not need to open Files, convert to MP3, or send to a different app. Share the Voice Memo to Safari, drop it on this page, done. The original Voice Memo stays in your iPhone library.',
          },
          {
            title: 'Handles all the M4A relatives',
            desc: 'Standard .m4a from Voice Memos and GarageBand, .m4b audiobook variant, .m4r ringtone variant, and .mp4 files that contain only audio. Same AAC codec under different file extensions, same workflow.',
          },
          {
            title: 'Stereo or mono, any AAC bitrate',
            desc: 'iPhone Voice Memos default to mono at 32 kbps in Lossy mode and stereo PCM in Lossless mode. GarageBand exports usually stereo at 256 kbps. Both transcribe with the same accuracy.',
          },
          {
            title: 'Works on M4A from outside Apple too',
            desc: 'Discord voice notes saved as M4A on Android, web recorder tools that pick AAC for compatibility, audiobooks downloaded from libraries in M4B. All accepted.',
          },
          {
            title: 'Files are processed and discarded',
            desc: 'Your M4A streams to the transcription provider, gets read once, gets dropped from memory. We do not save the audio to disk. The text transcript is only stored if you sign in and choose to.',
          },
        ],
      }}
      useCases={{
        title: 'Where M4A files come from',
        items: [
          {
            title: 'iPhone Voice Memos',
            desc: 'Far and away the most common source. Interview recordings, song idea memos, lecture captures, voice notes to yourself. Default format is M4A, exact codec depends on your Voice Memos settings (Compressed AAC by default, Lossless ALAC if enabled).',
          },
          {
            title: 'GarageBand and Logic exports',
            desc: 'When you export a project from GarageBand on iPhone or Mac, the default share format is M4A AAC at 256 kbps. Useful for transcribing podcast episodes you recorded in GarageBand before sending to a host.',
          },
          {
            title: 'Apple Podcasts offline downloads',
            desc: 'Podcasts you have downloaded for offline listening in the Apple Podcasts app are stored as M4A. You can transcribe them for show notes, study material, or to search a specific quote.',
          },
          {
            title: 'FaceTime audio call exports',
            desc: 'If you record a FaceTime audio call (through QuickTime Audio Recording or a third-party screen recorder), the audio export is M4A. Useful for transcribing remote interviews or family memory recordings.',
          },
          {
            title: 'Discord voice notes',
            desc: 'Discord saves voice messages as M4A by default on iOS and Android. Right-click in the desktop client to download the file, then transcribe to keep a text record of important messages.',
          },
          {
            title: 'Web recorder tools and meeting exports',
            desc: 'Many browser-based recording apps pick AAC inside MP4 (so .m4a) for cross-platform compatibility. If you exported a recording from a meeting tool and got an M4A, it works the same way as a Voice Memo here.',
          },
          {
            title: 'M4B audiobooks and downloaded study material',
            desc: 'M4B is the audiobook variant of M4A, with chapter markers. We treat it like any M4A, transcribe the audio, ignore the chapter metadata. Useful for creating searchable text versions of educational audiobooks.',
          },
        ],
      }}
      proTips={{
        title: 'M4A tips that save time',
        tips: [
          {
            title: 'Use Voice Memos at Lossy quality, not Lossless',
            desc: 'Voice Memos has a Lossless setting hidden in Settings, Voice Memos, Audio Quality. Lossless writes ALAC inside an M4A and triples the file size with zero transcription benefit. Lossy AAC at 32 kbps mono is plenty for clean speech recognition.',
          },
          {
            title: 'Trim silence in Voice Memos before exporting',
            desc: 'Open the recording in Voice Memos, tap the waveform, tap the trim icon at the top right. Drag the handles to cut leading and trailing dead air. The trimmed memo is smaller and uploads faster, with no transcript content lost.',
          },
          {
            title: 'For multi-hour interviews, share via Files not AirDrop',
            desc: 'AirDrop times out on files over about 500 MB on slow connections. Save the M4A from Voice Memos to Files (iCloud Drive or local), then upload from your laptop. More reliable for long recordings.',
          },
          {
            title: 'If transcription returns the wrong language, set it manually',
            desc: 'Whisper auto-detects language, but for files under five minutes or files where the speaker pauses a lot at the start, detection can mis-fire. Set the language explicitly in the language dropdown before upload.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>What an M4A file actually is</h2>
          <p>
            M4A is, technically, a regular MP4 file that happens to contain
            only an audio track. The file extension is just a convention
            (Apple started using .m4a to distinguish audio-only MP4s from
            video MP4s, so iTunes and Music could filter properly). Open the
            same file with the .mp4 extension and most players will treat it
            identically.
          </p>
          <p>
            The audio inside an M4A is almost always AAC (Advanced Audio
            Coding), the codec that succeeded MP3 in efficiency. Sometimes
            it is ALAC (Apple Lossless), which preserves audio bit-for-bit
            like FLAC does. Voice Memos picks based on your Audio Quality
            setting. GarageBand always writes AAC for shared exports. Apple
            Music streaming uses AAC.
          </p>
          <h3>The .m4a, .m4b, .m4r, .mp4 family</h3>
          <p>
            Same container, different file extensions, different intent.
            .m4a is plain audio. .m4b adds chapter markers for audiobooks.
            .m4r is the same as .m4a but Apple uses the extension to mark a
            file as a ringtone (so iTunes and Music would put it in the
            right place). .mp4 with only an audio track is what some
            non-Apple tools write instead of .m4a. Mictoo treats them all as
            M4A and decodes the audio normally.
          </p>
          <h3>Why your iPhone Voice Memo is so small</h3>
          <p>
            iPhone Voice Memos default to AAC at 32 kbps mono. That works
            out to roughly 240 KB per minute, so a one-hour interview is
            about 14 MB. The same hour as WAV would be 600 MB or more. AAC
            achieves this by removing audio information humans cannot
            perceive: very high frequencies, masked sounds, redundant
            information across channels.
          </p>
          <p>
            For transcription this almost never matters. Whisper transcribes
            32 kbps mono AAC about as well as it transcribes uncompressed
            WAV of the same speech. Where AAC compression starts to lose
            words is in heavy background noise or very quiet speech, where
            the encoder may have already removed the signal Whisper needed.
          </p>
          <h3>AAC vs ALAC inside the M4A container</h3>
          <p>
            If you have Voice Memos set to Lossless, the audio inside the
            M4A is ALAC instead of AAC. We handle both. Transcription
            quality is the same. The only practical difference is file size:
            an ALAC Voice Memo is roughly 10-15 times larger than the AAC
            equivalent. For everyday voice work, stick with Lossy (AAC).
            For situations where the audio will be processed further later
            (DAW import, restoration, archival), Lossless is fine but
            unnecessary for transcription.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            M4A vs other audio formats
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            All four work here. Pick the page that matches the file you
            actually have.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">M4A</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">What it is</dt><dd>AAC audio in MP4 container</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>iPhone, Apple ecosystem</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Small (efficient AAC)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Direct, no conversion needed</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">What it is</dt><dd>Older lossy codec, no container</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Podcast distribution, legacy files</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Slightly larger than M4A</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Same accuracy as M4A in practice</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/wav-to-text" className="hover:text-brand-600">WAV →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">What it is</dt><dd>Uncompressed PCM</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>DAW, field recorders</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Largest by far</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Use only if you already have it</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/flac-to-text" className="hover:text-brand-600">FLAC →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">What it is</dt><dd>Lossless compressed audio</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Audiophile or archive workflows</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>About half of WAV</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Same accuracy as WAV</dd></div>
              </dl>
            </div>
          </div>
        </>
      }
      faq={[
        {
          q: 'How do I send an iPhone Voice Memo to Mictoo?',
          a: 'Open the Voice Memos app, tap the recording, tap the share icon (square with up arrow), then tap Safari. Safari opens mictoo.com and the M4A is attached to the share. Drop it in the upload zone. Alternatively, AirDrop the file to a Mac and upload from there.',
        },
        {
          q: 'Will M4A files from GarageBand work?',
          a: 'Yes. GarageBand on iPhone and Mac exports finished projects as M4A AAC at 256 kbps by default. Drop the file in, the transcript comes back in seconds. Useful for podcast hosts who record in GarageBand before sending the file to a podcast host.',
        },
        {
          q: 'My Voice Memo is in Lossless mode (ALAC). Does that work?',
          a: 'Yes. We accept ALAC inside M4A the same way we accept AAC. Transcription quality is identical between the two. The Lossless file is just 10-15 times larger, which only matters if you are near the 60 MB upload limit.',
        },
        {
          q: 'What is the difference between .m4a, .m4b, .m4r, and .mp4?',
          a: 'They are all the same container (MP4) with different extensions to signal intent. .m4a is plain audio. .m4b is an audiobook with chapter markers. .m4r is a ringtone. .mp4 with only an audio track is what some tools write instead. We handle all four the same way.',
        },
        {
          q: 'Can I transcribe a podcast I downloaded in the Apple Podcasts app?',
          a: 'In principle yes, but extracting the file is the catch. Apple Podcasts stores downloaded episodes in a protected location and the in-app share sheet does not always expose them as M4A. Easiest path: re-download the episode directly from the podcast feed URL in Safari, then upload here.',
        },
        {
          q: 'Why does my M4A not play on Windows?',
          a: 'Older Windows versions do not include an AAC codec by default. The M4A itself is fine, you just need a player that can decode AAC (VLC works everywhere, free). For transcription this does not matter, we decode the AAC ourselves on the server.',
        },
        {
          q: 'Will Discord voice messages work?',
          a: 'Yes. Discord saves voice messages as M4A on iOS and Android. In the Discord desktop client, right-click the voice message and choose Download. Then upload the saved file here. Mobile Discord lets you forward the file to a notes or files app, then upload.',
        },
        {
          q: 'My recording is too long for the 60 MB limit, what now?',
          a: 'Three options, in order of effort. (1) Trim leading or trailing silence in Voice Memos using the trim handles. (2) Re-export at Lossy quality (Settings, Voice Memos, Audio Quality) if it is currently Lossless. (3) Split the file in two using the Voice Memos edit feature and upload each half separately.',
        },
        {
          q: 'How accurate is the transcription for a noisy Voice Memo?',
          a: 'Background noise (cafe chatter, car interior, wind) hurts accuracy noticeably. For important recordings, use the Adobe Podcast Enhance free web tool to clean the audio before uploading. Set the iPhone microphone close to the speaker (under 30 cm) for cleaner recordings to start with.',
        },
        {
          q: 'Will my iPhone Voice Memo be deleted from my phone?',
          a: 'No. Uploading a Voice Memo here only sends a copy to the transcription service. Your original recording stays in the Voice Memos app on your iPhone, in iCloud sync if you have that enabled, and nowhere else changes.',
        },
        {
          q: 'Can I get the transcript with speaker labels (interviewer vs guest)?',
          a: 'Not yet in the free tool. Whisper does not separate speakers out of the box. If you have separate Voice Memo recordings for each speaker (each person recorded on their own iPhone), transcribe them separately and label by hand. Speaker diarization is on the roadmap for the future Pro tier.',
        },
        {
          q: 'What languages does M4A transcription support?',
          a: 'Over 50 languages with automatic detection. For short Voice Memos (under five minutes) where detection sometimes wobbles, pick the language explicitly in the dropdown before uploading. Common picks: English, Spanish, French, German, Portuguese, Italian, Russian, Polish, Japanese, Korean.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop an M4A and get the text back
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            iPhone Voice Memos, GarageBand exports, FaceTime recordings, Apple Podcasts downloads. All work.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe an M4A now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'Focused on iPhone Voice Memos specifically.' },
        { href: '/aac-to-text', label: 'AAC to Text', desc: 'For raw .aac files outside an M4A container.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Format-agnostic if your file is something other than M4A.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'For when your M4A is over the 60 MB upload cap.' },
      ]}
    />
  )
}
