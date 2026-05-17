export const metadata = {
  title: 'How to Convert M4A to MP3 — Free Methods (Or Skip It) | Mictoo',
  description: 'Convert M4A to MP3 in seconds with free online tools, QuickTime, VLC, or ffmpeg. Plus a heads-up: most apps (including Mictoo transcription) accept M4A directly — you may not need to convert at all.',
  alternates: {
    canonical: 'https://mictoo.com/m4a-to-mp3',
  },
}

export default function M4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to convert M4A to MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A is the default audio format for iPhone Voice Memos, Apple Podcasts downloads, and most
        macOS recording apps. MP3 is more universal, but in 2026 a surprising number of tools accept
        M4A directly — including most browsers, audio editors, podcast apps, and transcription
        services. Here&apos;s when you actually need to convert, and the fastest free ways to do it.
      </p>

      {/* The "do you actually need to?" angle */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>You probably don&apos;t need to convert.</strong> M4A and MP3 use very similar audio
          quality. Modern apps that read MP3 almost always read M4A too. Specifically:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Transcription:</strong> Mictoo accepts <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> directly — just drop the file and get text. No conversion needed.</li>
          <li><strong>Audio editing:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve all read M4A.</li>
          <li><strong>Streaming/playback:</strong> Spotify, Apple Music, YouTube Music, every modern browser and OS plays M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          You only really need MP3 when the target app explicitly says &quot;MP3 only&quot; — some
          older car stereos, fitness equipment, basic voice recorders, or legacy software.
        </p>
        <a href="/" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Try transcribing the .m4a directly with Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Still need MP3?</strong> Pick whichever method below fits your setup. All free.
        </p>

        {/* Method 1: online */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — Online converter</h2>
          <p className="mb-4">
            Drag, drop, download — usually under 10 seconds for a typical voice memo:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/m4a-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — clean UI, supports big files.</li>
            <li><a href="https://convertio.co/m4a-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — fast, MP3 quality selectable.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — fine-grained quality controls.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Privacy: online tools upload your file. Skip for confidential recordings — use a desktop method.
          </p>
        </div>

        {/* Method 2: macOS native */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — macOS (no install)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="macOS Music app: click File in the menu bar, hover Convert in the dropdown, then choose Create MP3 Version from the submenu."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>Music app:</strong> Drag the <code className="font-mono">.m4a</code> into Music,
            select it, then <strong>File → Convert → Create MP3 Version</strong>. The MP3 appears
            alongside the original.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Open the file → <strong>File → Export As → Audio Only</strong>.
            QuickTime exports as M4A by default, but pair it with VLC or Audacity below if you need MP3 specifically.
          </p>
        </div>

        {/* Method 3: VLC */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — VLC (cross-platform)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> on Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open VLC → <strong>Media → Convert / Save</strong>.</li>
            <li>Add the <code className="font-mono">.m4a</code> file, click <strong>Convert / Save</strong>.</li>
            <li>Choose profile <code className="font-mono">Audio - MP3</code>.</li>
            <li>Pick destination filename ending in <code className="font-mono">.mp3</code>, click <strong>Start</strong>.</li>
          </ol>
        </div>

        {/* Method 4: ffmpeg */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 4 — Command line (ffmpeg)</h2>
          <p className="mb-4">
            One line with <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            For voice/transcription use <code className="font-mono">-ab 64k -ac 1</code> for a 2–3× smaller file
            with no quality loss on speech.
          </p>
        </div>

        {/* All set */}
        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Need a transcript?</h2>
          <p className="mb-4">
            Both M4A and MP3 work directly in Mictoo. Drop the file, get text with timestamps, SRT
            subtitles, and an AI summary — free, no signup.
          </p>
          <a href="/" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcribe audio to text free
          </a>
        </div>

      </div>

      {/* Related */}
      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Related guides</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC to MP3</a>
          <a href="/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA to MP3</a>
          <a href="/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A to Text</a>
          <a href="/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compress audio</a>
        </div>
      </div>
    </section>
  )
}
