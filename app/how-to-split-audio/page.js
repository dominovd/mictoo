export const metadata = {
  title: 'How to Split a Long Audio File for Transcription — Free Methods | Mictoo',
  description: 'Three free ways to split a long recording into shorter parts for transcription: online tools, Audacity, or ffmpeg. Works for MP3, M4A, WAV, MP4 and more.',
  alternates: {
    canonical: 'https://mictoo.com/how-to-split-audio',
    languages: {
      'en': 'https://mictoo.com/how-to-split-audio',
      'fr': 'https://mictoo.com/fr/how-to-split-audio',
      'de': 'https://mictoo.com/de/how-to-split-audio',
      'es': 'https://mictoo.com/es/how-to-split-audio',
      'ru': 'https://mictoo.com/ru/how-to-split-audio',
      'it': 'https://mictoo.com/it/how-to-split-audio',
      'pt': 'https://mictoo.com/pt/how-to-split-audio',
      'pl': 'https://mictoo.com/pl/how-to-split-audio',
      'ja': 'https://mictoo.com/ja/how-to-split-audio',
      'ko': 'https://mictoo.com/ko/how-to-split-audio',
      'x-default': 'https://mictoo.com/how-to-split-audio',
    },
  },
}

export default function HowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to split a long audio file for transcription</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo transcribes files up to <strong>30 minutes</strong> for anonymous users and
        <strong> 60 minutes</strong> when you&apos;re signed in. If your recording is longer, the
        cleanest fix is to split it into two or three shorter parts and transcribe each separately.
        Below are three free ways to do that — pick the one that fits your file and skills.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        {/* Method 1: online tools */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — Online tools (no install)</h2>
          <p className="mb-4">
            We don&apos;t host a browser-based splitter yet — splitting needs heavier processing than our serverless converter has today. For a one-off split the cleanest free routes are Audacity (Method 2) or ffmpeg (Method 3) below. If you don&apos;t want to install anything, splitting in Google&apos;s online Audacity-clone or a local file manager that does &quot;trim&quot; on audio (macOS Files app, Windows Voice Recorder) handles short clips well enough.
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Tip: split at a natural pause (between sentences or speakers) so the transcript reads
            smoothly when you stitch the parts together.
          </p>
        </div>

        {/* Method 2: Audacity */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — Audacity (free desktop app)</h2>
          <p className="mb-4">
            Best for accuracy, especially if your recording has silences or pauses you want to split
            on. Audacity is free and open-source for macOS, Windows and Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Download <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> and open your audio file.</li>
            <li>Use <strong>File → Import → Audio</strong> if needed. Audacity reads MP3, M4A, WAV, FLAC, OGG and more.</li>
            <li>Click on the waveform at the point where you want to split (use Ctrl/Cmd+B to place a label, or drag-select the region for one part).</li>
            <li>Choose <strong>File → Export → Export Selected Audio</strong> and save the first part as MP3 or WAV.</li>
            <li>Select the next region, export, repeat.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            For long recordings, Audacity&apos;s <strong>Analyze → Sound Finder</strong> tool finds
            silent regions automatically — useful for splitting podcasts or interviews on natural
            pauses.
          </p>
        </div>

        {/* Method 3: ffmpeg */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — Command line (ffmpeg)</h2>
          <p className="mb-4">
            One command splits the whole file into equal-length parts. No re-encoding, so it&apos;s
            instant even on a 2-hour recording. Best if you already have ffmpeg installed.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Split into 25-minute parts</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> is the segment length in seconds (25 min).
            Output files will be <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code>, etc. The{' '}
            <code className="font-mono">-c copy</code> flag avoids re-encoding so the split is
            lossless and fast.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Extract a specific time range</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> is the start time, <code className="font-mono">-t</code>{' '}
            is the duration. Works for video files too — the audio track is split exactly the same way.
          </p>

          <p className="mt-3">
            Don&apos;t have ffmpeg yet? Install via{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            or with Homebrew on macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        {/* Stitching the transcripts */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Putting the transcripts back together</h2>
          <p className="mb-3">
            Transcribe each part on Mictoo, then paste the results into one document in order. A few
            quick tips for a clean final transcript:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Split at a pause when possible — words don&apos;t get cut in half.</li>
            <li>If you split mid-sentence, the first word of the next part may end up capitalized in the transcript. Easy to fix in any text editor.</li>
            <li>For SRT or VTT subtitles: add the previous part&apos;s total duration to every timestamp in the next part&apos;s file. A find-and-replace or a small script handles it in seconds.</li>
            <li>Mictoo&apos;s AI summary works best on a single transcript — combine the parts first, then re-run the summary on the joined text.</li>
          </ul>
        </div>

        {/* When you're done */}
        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">All set?</h2>
          <p className="mb-4">
            Once each part is under the duration limit, head back to the home page and drop them in
            one at a time.
          </p>
          <a href="/" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Back to transcription
          </a>
        </div>

      </div>

      {/* Related */}
      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">More transcription guides</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">How to compress audio</a>
          <a href="/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 to Text</a>
          <a href="/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Podcast transcription</a>
          <a href="/" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">All formats</a>
        </div>
      </div>
    </section>
  )
}
