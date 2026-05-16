export const metadata = {
  title: 'How to Compress Audio for Transcription — Free Methods | Mictoo',
  description: 'Three free ways to shrink an audio or video file under 25 MB for transcription: extract audio, lower bitrate, or split the file. No software install needed.',
  alternates: {
    canonical: 'https://mictoo.com/how-to-compress-audio',
    languages: {
      'en': 'https://mictoo.com/how-to-compress-audio',
      'fr': 'https://mictoo.com/fr/how-to-compress-audio',
      'de': 'https://mictoo.com/de/how-to-compress-audio',
      'es': 'https://mictoo.com/es/how-to-compress-audio',
      'ru': 'https://mictoo.com/ru/how-to-compress-audio',
      'it': 'https://mictoo.com/it/how-to-compress-audio',
      'pt': 'https://mictoo.com/pt/how-to-compress-audio',
      'pl': 'https://mictoo.com/pl/how-to-compress-audio',
      'ja': 'https://mictoo.com/ja/how-to-compress-audio',
      'ko': 'https://mictoo.com/ko/how-to-compress-audio',
      'x-default': 'https://mictoo.com/how-to-compress-audio',
    },
  },
}

export default function HowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to compress audio for transcription</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo accepts files up to <strong>25 MB</strong> for free. If your file is larger, here are
        three quick ways to shrink it without losing transcription quality. Pick the one that fits
        your file and skills.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        {/* Method 1: extract audio */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — Extract audio from a video file</h2>
          <p className="mb-4">
            If you have a video file (MP4, WEBM, MOV) that&apos;s mostly speech, the audio track is
            usually 5–10× smaller than the video. Mictoo only needs the audio — the video doesn&apos;t
            help transcription. This is the fastest fix for most users.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online (no install)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://convertio.co/mp4-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — drag MP4, choose MP3 or M4A, download.</li>
            <li><a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — supports MP4 → MP3 / M4A / WAV.</li>
            <li><a href="https://www.media.io/audio-converter.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Media.io</a> — fast in-browser conversion.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Command line (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> strips video, <code className="font-mono">-acodec copy</code> keeps the audio quality intact. Fast — no re-encoding.
          </p>
        </div>

        {/* Method 2: lower bitrate */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — Lower the audio bitrate</h2>
          <p className="mb-4">
            Most podcasts and meetings are recorded at 128–192 kbps. For transcription, 64 kbps mono
            is more than enough — accuracy stays the same and the file becomes 2–3× smaller. This is
            the best method for long audio files.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — set quality slider to 64 kbps, mono.</li>
            <li><a href="https://www.freeconvert.com/audio-compressor" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">FreeConvert Audio Compressor</a> — choose target size.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Command line (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> converts to mono (speech is fine in mono),
            <code className="font-mono">-b:a 64k</code> sets audio bitrate to 64 kbps.
          </p>
          <p className="mt-3"><strong>Rough math:</strong> 64 kbps gives ~28 MB per hour. A 1-hour interview fits in roughly 28 MB — close to the limit. Drop to <code className="font-mono">-b:a 48k</code> for ~21 MB/hour without noticeable accuracy loss.</p>
        </div>

        {/* Method 3: split */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — Split into shorter parts</h2>
          <p className="mb-4">
            If you need to keep the original quality (legal, medical, archival), split the file into
            chunks of 20–25 minutes and transcribe each separately. Then join the transcripts in any
            text editor.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mp3cut.net</a> — drag MP3, set start/end, download.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — clean UI, supports most formats.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Command line (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Splits the input into 20-minute (<code className="font-mono">1200</code> seconds) parts named <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code>, etc. Then upload each to Mictoo.
          </p>
        </div>

        {/* When you're done */}
        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">All set?</h2>
          <p className="mb-4">
            Once your file is under 25 MB, head back to the home page and drop it into the transcription tool.
          </p>
          <a href="/" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Back to transcription
          </a>
        </div>

      </div>

      {/* Related */}
      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">More transcription tools</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 to Text</a>
          <a href="/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Video to Text</a>
          <a href="/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A to Text</a>
          <a href="/" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">All formats</a>
        </div>
      </div>
    </section>
  )
}
