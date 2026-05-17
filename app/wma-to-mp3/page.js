export const metadata = {
  title: 'How to Convert WMA to MP3 — Free Methods (2026) | Mictoo',
  description: 'Convert WMA (Windows Media Audio) to MP3 free. Online converters, VLC, Audacity, and ffmpeg — pick what fits. Then transcribe the MP3 to text with Mictoo.',
  alternates: {
    canonical: 'https://mictoo.com/wma-to-mp3',
  },
}

export default function WmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to convert WMA to MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) was Microsoft&apos;s default format in the 2000s for Windows
        recorders and Windows Media Player rips. It works on Windows but is awkward almost
        everywhere else — modern phones, web tools, and transcription engines mostly don&apos;t
        accept it. MP3 is the universal replacement. Here are four free ways to convert.
      </p>

      {/* Heads-up box */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Why convert:</strong> Mictoo (and most modern transcription tools) cannot read WMA
          directly — it uses a proprietary codec. You&apos;ll need to convert to MP3, M4A, or WAV first.
          The MP3 result will be slightly smaller and play on anything.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        {/* Method 1: online */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — Online converter (no install)</h2>
          <p className="mb-4">
            Easiest path if your file is under ~200 MB and the recording isn&apos;t sensitive.
            Drag, drop, download — usually 5–15 seconds:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/wma-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — supports up to 1 GB free.</li>
            <li><a href="https://convertio.co/wma-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — batch upload, MP3 quality selectable.</li>
            <li><a href="https://www.freeconvert.com/wma-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">FreeConvert</a> — advanced options for bitrate and channels.</li>
            <li><a href="https://www.media.io/convert/wma-to-mp3.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Media.io</a> — fast, clean interface.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Privacy: for confidential recordings (interviews, business calls, medical) prefer the desktop
            methods below — your audio never leaves your computer.
          </p>
        </div>

        {/* Method 2: VLC */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="VLC Convert dialog: source set to recording.wma, profile dropdown set to Audio – MP3, destination filename ending in .mp3, with a Start button."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> is
            free and reads WMA natively on all systems. Convert in four clicks:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open VLC. Click <strong>Media → Convert / Save</strong>.</li>
            <li>Add your <code className="font-mono">.wma</code> file, click <strong>Convert / Save</strong> again.</li>
            <li>In <strong>Profile</strong>, choose <code className="font-mono">Audio - MP3</code>.</li>
            <li>Pick a destination filename ending in <code className="font-mono">.mp3</code> and click <strong>Start</strong>.</li>
          </ol>
          <p className="mt-3">Done. The progress bar at the bottom of VLC turns into the conversion meter.</p>
        </div>

        {/* Method 3: Audacity */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — Audacity (free, all platforms)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> works
            if you also want to clean up the audio (trim silence, boost quiet voice, remove background hum)
            before transcribing.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>File → Import → Audio</strong> → pick the <code className="font-mono">.wma</code></li>
            <li>(Optional) edit, normalize, denoise.</li>
            <li><strong>File → Export → Export as MP3</strong>. Choose mono and 64–96 kbps for speech.</li>
          </ol>
        </div>

        {/* Method 4: ffmpeg */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 4 — Command line (ffmpeg)</h2>
          <p className="mb-4">
            One line with <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            For voice/transcription drop to <code className="font-mono">-ab 64k -ac 1</code> (mono, 64 kbps) —
            same accuracy at ~2–3× smaller size.
          </p>
        </div>

        {/* All set */}
        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Got your MP3?</h2>
          <p className="mb-4">
            Drop it into Mictoo for a free transcript — works with 50+ languages, returns timestamps,
            SRT subtitles, and an AI summary. No signup.
          </p>
          <a href="/" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcribe MP3 to text free
          </a>
        </div>

      </div>

      {/* Related */}
      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Related guides</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC to MP3</a>
          <a href="/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A to MP3</a>
          <a href="/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcribe audio</a>
          <a href="/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compress audio</a>
        </div>
      </div>
    </section>
  )
}
