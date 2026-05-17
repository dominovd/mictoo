export const metadata = {
  title: 'How to Convert AAC to MP3 — Free Methods (2026) | Mictoo',
  description: 'Convert AAC audio files to MP3 for free. Three quick ways — online converter, QuickTime/VLC, or ffmpeg command line. Plus a tip: Mictoo can transcribe most AAC files directly without conversion.',
  alternates: {
    canonical: 'https://mictoo.com/aac-to-mp3',
  },
}

export default function AacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to convert AAC to MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) is the default format for iPhone voice memos, Android voice
        recorders, and audio inside MP4 video. MP3 is more universal and works with every player,
        editor, and transcription tool. Below — three free ways to convert, plus a quick note on
        whether you actually need to.
      </p>

      {/* Skip the conversion entirely? */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Before you convert:</strong> if your goal is transcription, Mictoo accepts most
          AAC files directly — including <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> files
          inside MP4 containers (iPhone Voice Memos, share-sheet exports, most Android recorders).
          Try uploading first; you only need to convert if it rejects the file.
        </p>
        <a href="/" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Try transcribing the .aac directly
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        {/* Method 1: online */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — Online converter (no install)</h2>
          <p className="mb-4">
            Fastest if your file is under ~200 MB. Drop it in a browser, get MP3 back in a few seconds.
            All of these work without registration:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/aac-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — clean UI, supports batch.</li>
            <li><a href="https://convertio.co/aac-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — fast, allows MP3 quality selection.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — lets you pick mono/64 kbps for transcription.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Privacy tip: online converters upload your file to their servers. For sensitive recordings (medical,
            legal, business calls), use a desktop method below.
          </p>
        </div>

        {/* Method 2: desktop */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — Desktop apps (offline)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime can open AAC files. Use <strong>File → Export As → Audio Only</strong> and choose
            MP3 in the dialog. Built into every Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (free)</h3>
          <p>
            Open the AAC file in <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Audacity</a>,
            then <strong>File → Export → Export as MP3</strong>. Choose mono and 64–96 kbps if the audio is voice.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Cross-platform — VLC</h3>
          <p>
            VLC can convert via <strong>Media → Convert / Save</strong>. Add the .aac, pick the profile
            <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>,
            choose destination, click Start.
          </p>
        </div>

        {/* Method 3: ffmpeg */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — Command line (ffmpeg)</h2>
          <p className="mb-4">
            One line if you have <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">ffmpeg</a> installed:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            For voice/transcription, drop to <code className="font-mono">-ab 64k -ac 1</code> for a
            2–3× smaller file with no accuracy loss.
          </p>
        </div>

        {/* All set */}
        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Got your MP3?</h2>
          <p className="mb-4">
            Drop it into Mictoo to get a free transcript with timestamps, SRT subtitles, and an AI summary.
            No signup needed.
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
          <a href="/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA to MP3</a>
          <a href="/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A to MP3</a>
          <a href="/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC to Text</a>
          <a href="/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compress audio</a>
        </div>
      </div>
    </section>
  )
}
