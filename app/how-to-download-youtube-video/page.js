export const metadata = {
  title: 'How to Download YouTube Videos for Transcription — Free Methods (2026) | Mictoo',
  description:
    'Three free desktop tools to download a YouTube video as MP4 or MP3 in 2026: 4K Video Downloader, yt-dlp, ClipGrab. Plus a screen-recording fallback. Honest comparison, no in-browser tools to fail you.',
  alternates: {
    canonical: 'https://mictoo.com/how-to-download-youtube-video',
  },

  openGraph: {
    title: "How to Download YouTube Videos for Transcription — Free Methods (2026) | Mictoo",
    description: "Three free desktop tools to download a YouTube video as MP4 or MP3 in 2026: 4K Video Downloader, yt-dlp, ClipGrab. Plus a screen-recording fallback. Honest comparison, no in-browser tools to fail you.",
    url: "https://mictoo.com/how-to-download-youtube-video",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Download YouTube Videos for Transcription — Free Methods (2026) | Mictoo",
    description: "Three free desktop tools to download a YouTube video as MP4 or MP3 in 2026: 4K Video Downloader, yt-dlp, ClipGrab. Plus a screen-recording fallback. Honest comparison, no in-browser tools to fail you.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function HowToDownloadYouTubeVideoPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to download a YouTube video for transcription</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        You want to transcribe a YouTube video. Most people don&apos;t actually want the video file —
        they want the words inside it. But sometimes you need the file locally first: for offline
        transcription, editing, archival, or because the in-browser URL tools keep failing on you.
        This guide covers the four free methods that actually work in 2026, ranked by how
        non-technical they are.
      </p>

      {/* Why download locally vs URL tools */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>First, the obvious question:</strong> if you just want a transcript, you don&apos;t
          need to download anything. Mictoo accepts uploaded MP4, M4A, MP3 and other audio/video
          files directly and gives you text with timestamps, SRT subtitles, and an AI summary.
        </p>
        <p className="text-sm text-slate-700">
          You only need this guide if (a) the file isn&apos;t already on your computer, or (b)
          you tried a URL-input tool and it failed (most of them break regularly because YouTube
          blocks the data-center IPs they run on).
        </p>
        <a href="/transcribe-video-to-text" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ I already have the file, take me to transcription
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        {/* Method 1: 4K Video Downloader */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — 4K Video Downloader (easiest)</h2>
          <p className="mb-4">
            The most user-friendly option. Installs as a regular app on macOS, Windows or Linux.
            Paste a YouTube URL, pick the quality, click Download. Free tier covers single videos
            (paid tier adds playlists and channel subscriptions, which you probably don&apos;t need).
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Steps</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Download from <a href="https://www.4kdownload.com/products/videodownloader" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">4kdownload.com</a> and install.</li>
            <li>Copy the YouTube video URL from your browser.</li>
            <li>Open 4K Video Downloader. Click <strong>Paste Link</strong>.</li>
            <li>Pick the format: <strong>MP4 1080p</strong> for the video itself, or <strong>Extract Audio → M4A</strong> if you only need the audio for transcription.</li>
            <li>Pick a destination folder. Click <strong>Download</strong>.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            For transcription, M4A (or MP3) is plenty. Mictoo doesn&apos;t need the video. Audio-only
            downloads are five to ten times smaller and finish in seconds.
          </p>
        </div>

        {/* Method 2: yt-dlp */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — yt-dlp (power users)</h2>
          <p className="mb-4">
            Open-source command-line tool, always up to date with YouTube&apos;s changes. The
            preferred option for developers, journalists, archivists, and anyone comfortable in a
            terminal. Free, no ads, no GUI to update.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Install</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`# macOS (Homebrew)
brew install yt-dlp

# Windows (winget)
winget install yt-dlp

# Linux (pipx)
pipx install yt-dlp`}</code></pre>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Download video (MP4)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"`}</code></pre>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Audio only (MP3, fastest for transcription)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`yt-dlp -x --audio-format mp3 "https://www.youtube.com/watch?v=VIDEO_ID"`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-x</code> extracts audio, <code className="font-mono">--audio-format mp3</code> sets the container. Drop the result into Mictoo.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">If you get &quot;Sign in to confirm you&apos;re not a bot&quot;</h3>
          <p>
            YouTube&apos;s 2024 bot-detection sometimes catches yt-dlp. Pass your browser cookies and
            it works again:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs mt-2"><code>{`yt-dlp --cookies-from-browser chrome "https://www.youtube.com/watch?v=VIDEO_ID"`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Works with <code className="font-mono">firefox</code>, <code className="font-mono">safari</code>, <code className="font-mono">edge</code> too.
          </p>
        </div>

        {/* Method 3: ClipGrab */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — ClipGrab (GUI alternative)</h2>
          <p className="mb-4">
            Free GUI app for macOS, Windows, Linux. Lighter than 4K Video Downloader, simpler than
            yt-dlp. Good middle option if 4K Video Downloader&apos;s free-tier limits bother you and
            you don&apos;t want a terminal.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Steps</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Download from <a href="https://clipgrab.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">clipgrab.org</a> and install.</li>
            <li>Copy the YouTube URL.</li>
            <li>Open ClipGrab. Paste the URL into the search box at the top.</li>
            <li>Choose format: <strong>MP4</strong> for video, <strong>MP3</strong> for audio-only.</li>
            <li>Pick quality (720p is usually fine for transcription source material). Click <strong>Grab this clip!</strong></li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            ClipGrab updates less frequently than yt-dlp, so it occasionally lags behind when
            YouTube changes their video delivery format. If a download fails, fall back to Method 2.
          </p>
        </div>

        {/* Method 4: screen recording */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 4 — Screen recording (last resort)</h2>
          <p className="mb-4">
            When nothing else works (private videos, age-restricted content where you don&apos;t want
            to share cookies, or an unusually broken video), screen recording is the universal
            fallback. Quality is lower because you&apos;re re-encoding the browser&apos;s playback,
            but it always works.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime Player</h3>
          <p>
            <strong>File → New Screen Recording</strong>. Record the browser window playing the
            video. Audio comes through if you set the mic input to your system audio (BlackHole or
            Loopback for clean output). Export as MP4.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — OBS Studio</h3>
          <p>
            <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">OBS Studio</a> (free) handles screen + audio recording across all platforms. Set up a Display Capture source and an Audio Output Capture source, click <strong>Start Recording</strong>, play the video, click stop. Output is MP4 or MKV.
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Screen recording is fine for transcription purposes (you only need clear speech, not
            pristine audio) but the file will be larger than a direct download because you&apos;re
            re-encoding playback in real time.
          </p>
        </div>

        {/* Skip the sketchy stuff */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Skip: browser extensions and random websites</h2>
          <p>
            Most browser extensions claiming to download YouTube videos are either dead (Chrome
            removed them from the Web Store years ago for ToS violations) or sketchy (asking for
            permissions they don&apos;t need, injecting ads). And the random &quot;ytmp3.cc&quot;-style
            sites in Google&apos;s top results for &quot;youtube to mp4&quot; are mostly AdSense doorways
            with popup ads, fake virus warnings, and hijacked back buttons. The four desktop methods
            above are the only reliable, ad-free routes.
          </p>
        </div>

        {/* Legal note */}
        <div className="border border-amber-100 bg-amber-50 rounded-2xl p-5">
          <h2 className="text-base font-semibold text-slate-800 mb-2">A note on what&apos;s legal to download</h2>
          <p className="text-sm">
            YouTube&apos;s Terms of Service say users can&apos;t download content unless YouTube
            provides a download button. In practice, the rules people actually follow:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            <li><strong>OK:</strong> downloading your own uploads, public domain content, Creative Commons-licensed videos, and content where the creator has given explicit permission (or used the #nodownload tag&apos;s opposite signal).</li>
            <li><strong>OK in practice:</strong> personal use like transcription, accessibility, language learning, research, education — though technically still against ToS.</li>
            <li><strong>Not OK:</strong> redistributing the video, monetising downloaded content, removing copyright notices, or downloading from creators who&apos;ve marked their videos with <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">#nodownload</code> in the description.</li>
          </ul>
          <p className="text-sm mt-3">
            We are not lawyers. When in doubt, ask the creator or check the video&apos;s license.
          </p>
        </div>

        {/* CTA: transcribe */}
        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">You have the file — now transcribe it</h2>
          <p className="mb-4">
            Drop the MP4 or MP3 into Mictoo for a free transcript with timestamps, SRT subtitles,
            and an AI summary. No signup needed for files up to 25 MB.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/transcribe-video-to-text" className="btn-primary text-base px-6 py-3">
              ↑ Transcribe MP4 video
            </a>
            <a href="/transcribe-mp3-to-text" className="text-base px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 hover:border-brand-400 hover:text-brand-600 transition-colors">
              ↑ Transcribe MP3 audio
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">FAQ</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Which method should a non-technical person use?',
                a: '4K Video Downloader. It has a normal app installer, a simple paste-and-click interface, and works on macOS, Windows, and Linux. The free tier is enough for single videos.',
              },
              {
                q: 'Why not just use an online YouTube-to-MP4 site?',
                a: 'They work intermittently. YouTube blocks the data-center IPs that those sites run on, so any given query fails about half the time. The ones that consistently work tend to be heavily ad-laden (popups, fake virus warnings, redirect chains). Desktop tools run on your home IP and are far more reliable.',
              },
              {
                q: 'Is yt-dlp safe?',
                a: 'Yes. It is open-source, widely audited, and the de facto standard for YouTube downloading. Major archive projects (Internet Archive, Library of Congress) use it. Just make sure you install from the official source (github.com/yt-dlp/yt-dlp or your package manager) — not a random Google result.',
              },
              {
                q: 'How big is a typical download?',
                a: 'A 10-minute YouTube video at 1080p is roughly 100-200 MB as MP4, or 5-10 MB as MP3 audio-only. For transcription you almost always want the smaller audio-only file.',
              },
              {
                q: 'Will the downloaded video have ads embedded?',
                a: 'No. All four methods download the underlying video file directly from YouTube, bypassing the player layer that injects ads. Sponsored segments inside the creator\'s own content stay (those are part of the video itself).',
              },
              {
                q: 'Can I download age-restricted or private videos?',
                a: 'Age-restricted: yes, with yt-dlp + browser cookies (the --cookies-from-browser flag). Private (set to private, not unlisted): only if you have the link AND are signed in as an authorized viewer, then yes with the same cookies flag.',
              },
              {
                q: 'What about livestreams or premieres?',
                a: 'yt-dlp can record live streams in real time with --live-from-start. 4K Video Downloader can also download completed live streams (after the stream ends). Premieres work the same as regular videos once they\'ve aired.',
              },
              {
                q: 'Will Mictoo download YouTube videos for me?',
                a: 'No. We do not run a YouTube downloader on our servers. YouTube\'s Terms of Service prohibit it, and downloader infrastructure (residential proxies, constant yt-dlp updates) is expensive and brittle. We are a transcription tool. Download the file with one of the methods above, then drop it into us for the transcript.',
              },
              {
                q: 'How do I know if a YouTube creator allows downloads?',
                a: 'Look in the video description for #nodownload — that means no. Look in the description or About page for "Creative Commons", "CC-BY", or "public domain" — that means yes. If neither is mentioned, the default is no but personal-use exceptions (transcription, accessibility, study) are widely tolerated.',
              },
              {
                q: 'Can I batch-download a whole playlist?',
                a: '4K Video Downloader paid tier and yt-dlp both support it. yt-dlp: just paste the playlist URL instead of a video URL. ClipGrab and free 4K do single videos.',
              },
              {
                q: 'What if I just want the transcript and never the video?',
                a: 'Skip this guide entirely. Open the video on YouTube, click Show transcript under the video description (the three-dot menu also has it). Copy-paste that. Or, if you want a cleaner transcript with timestamps and SRT export, download the audio with Method 1 or 2 above and drop it into Mictoo.',
              },
              {
                q: 'Is screen recording really worse quality?',
                a: 'For transcription, the difference is negligible. Speech recognition cares about clear voice frequencies, not bitrate. A screen recording of a 1080p YouTube video will transcribe just as accurately as the direct download in 99 percent of cases.',
              },
            ].map(({ q, a }, i) => (
              <details
                key={q}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <span>{q}</span>
                  <svg className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>

      {/* Related */}
      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Related guides</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/youtube-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">YouTube to text</a>
          <a href="/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Video to text</a>
          <a href="/mp4-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP4 to MP3</a>
          <a href="/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compress audio</a>
        </div>
      </div>
    </section>
  )
}
