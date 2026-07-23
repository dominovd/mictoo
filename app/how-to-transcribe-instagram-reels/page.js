import { howToSchema, jsonLdScript } from '@/lib/schema-org'

export const metadata = {
  title: 'How to Transcribe Instagram Reels — Free, in 3 Steps (2026) | Mictoo',
  description:
    'Three free ways to turn an Instagram Reel into a text transcript: save the Reel, drop it into Mictoo, copy the text. Works for your own Reels and (with caveats) public ones. No app install, no subscription.',
  alternates: {
    canonical: 'https://mictoo.com/how-to-transcribe-instagram-reels',
  },

  openGraph: {
    title: "How to Transcribe Instagram Reels — Free, in 3 Steps (2026) | Mictoo",
    description: "Three free ways to turn an Instagram Reel into a text transcript: save the Reel, drop it into Mictoo, copy the text. Works for your own Reels and (with caveats) public ones. No app install, no subscription.",
    url: "https://mictoo.com/how-to-transcribe-instagram-reels",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Transcribe Instagram Reels — Free, in 3 Steps (2026) | Mictoo",
    description: "Three free ways to turn an Instagram Reel into a text transcript: save the Reel, drop it into Mictoo, copy the text. Works for your own Reels and (with caveats) public ones. No app install, no subscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

const HOWTO_SCHEMA = howToSchema({
  name: 'How to transcribe Instagram Reels',
  description: 'Two free ways to get a text transcript of an Instagram Reel: screen-record on iPhone or Android, then upload to Mictoo. Includes when to use the built-in captions instead.',
  url: '/how-to-transcribe-instagram-reels',
  totalTime: 'PT3M',
  tools: ['iPhone or Android screen recorder', 'Mictoo (free)'],
  steps: [
    { name: 'Start a screen recording', text: 'iPhone: Control Center > screen record button. Android: pull down > Screen Recorder tile. Record with audio on.' },
    { name: 'Play the Reel', text: 'Open Instagram, play the Reel from the start with sound on. Wait until it finishes, then stop the recording.' },
    { name: 'Save and upload to Mictoo', text: 'Save the video (MP4) to your device. Drop it into mictoo.com. Get the transcript in seconds.' },
    { name: 'Skip steps 1-3 if there are baked-in captions', text: 'If the creator added captions on-screen, you can screenshot the video and OCR the text instead. Faster for short Reels.' },
  ],
})

export default function HowToTranscribeInstagramReelsPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(HOWTO_SCHEMA)} />
      <h1 className="text-3xl font-bold text-slate-900 mb-3">How to transcribe Instagram Reels</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Reels do not have a built-in transcript feature you can copy out. The captions Instagram
        auto-generates for accessibility are not exposed as text either. So if you want the words
        from a Reel (yours or someone else&apos;s, with permission) as a clean transcript, the
        workflow is always the same: get the video file onto your device, then run it through a
        transcription tool. Below are the only three methods that actually work in 2026, the right
        one for each situation, and what to do once you have the text.
      </p>

      {/* The two-line summary */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Fast path:</strong> save the Reel as an MP4 (Method 1 below for your own Reels,
          Method 2 for someone else&apos;s with permission), drop it into Mictoo, get text with
          timestamps in seconds.
        </p>
        <a href="/transcribe-video-to-text" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Already have the Reel saved? Skip ahead to transcription
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        {/* Method 1: your own Reels */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 1 — Save your own Reel (easiest, 100% legitimate)</h2>
          <p className="mb-4">
            If the Reel is on your own account, Instagram lets you download it directly. No
            third-party tool, no legal gray area, full quality.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">From the Instagram app (iOS or Android)</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open the Reel on your profile.</li>
            <li>Tap the three-dot menu (•••) at the bottom right of the Reel.</li>
            <li>Tap <strong>Save to camera roll</strong> (iOS) or <strong>Save to device</strong> (Android).</li>
            <li>The MP4 lands in Photos (iOS) or Gallery (Android). AirDrop or sync to your computer.</li>
          </ol>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">From Instagram on the web (faster if you are on a desktop)</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Go to <strong>Settings → Your activity → Download your information</strong>.</li>
            <li>Request a download of <em>Some of your information → Photos and videos → Reels</em>.</li>
            <li>Instagram emails you a ZIP within a few hours containing the original MP4s.</li>
            <li>Unzip and pick the Reel you want.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            The Download Your Information path is slower but gives you the original-quality files,
            which is useful if you plan to repurpose the Reel into a TikTok, YouTube Short, or blog
            post.
          </p>
        </div>

        {/* Method 2: someone else's Reels - screen recording */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 2 — Screen record (works on any Reel, anywhere)</h2>
          <p className="mb-4">
            The universal fallback. Works for any Reel you can play, including someone else&apos;s
            public Reels and Reels you do not have the original of. Quality is slightly lower than
            the original MP4 because you are re-encoding playback, but transcription accuracy is
            not affected.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">iPhone — built-in Screen Recording</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Open <strong>Settings → Control Center</strong>, add <strong>Screen Recording</strong> to Included Controls.</li>
            <li>Swipe down from the top-right to open Control Center.</li>
            <li>Long-press the red record button, toggle <strong>Microphone</strong> ON (so Reel audio is captured), tap <strong>Start Recording</strong>.</li>
            <li>Open Instagram, play the Reel from the start. Let it finish.</li>
            <li>Stop recording from Control Center. The MP4 is in Photos.</li>
          </ol>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Android — Quick Settings Screen Recorder</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Swipe down twice to open Quick Settings, tap <strong>Screen Record</strong> (add it from the edit pencil if it is not visible).</li>
            <li>Choose <strong>Media sounds</strong> (or Media sounds + mic) for audio.</li>
            <li>Tap Start. Play the Reel. Tap the stop notification when done.</li>
            <li>MP4 is in the Movies or Screen Recordings folder.</li>
          </ol>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Desktop — QuickTime (Mac) / OBS (any platform)</h3>
          <p>
            Open instagram.com in a browser, start a screen recording with QuickTime
            (<strong>File → New Screen Recording</strong>) or <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">OBS Studio</a>, play the Reel, stop the recording. Crop to the Reel area in the same app or in iMovie if needed.
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Reels are short (typically 30 to 90 seconds), so screen recording finishes quickly and
            the file is small. The reduced quality versus the original MP4 does not matter for
            transcription, which only needs clear speech.
          </p>
        </div>

        {/* Method 3: yt-dlp */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Method 3 — yt-dlp (power users only)</h2>
          <p className="mb-4">
            <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">yt-dlp</a> is best known as a YouTube downloader, but it also handles Instagram public posts and Reels. Best for journalists, researchers, and anyone batch-downloading multiple Reels.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Install (once)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`# macOS
brew install yt-dlp

# Windows
winget install yt-dlp

# Linux
pipx install yt-dlp`}</code></pre>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Download a Reel</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`yt-dlp "https://www.instagram.com/reel/REEL_ID/"`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Replace <code className="font-mono">REEL_ID</code> with the slug from the Reel&apos;s URL. The MP4 saves to your current folder.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">If you get &quot;Login required&quot; or empty media</h3>
          <p>
            Pass your browser cookies. yt-dlp will read your Instagram login from the browser you
            specify:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs mt-2"><code>{`yt-dlp --cookies-from-browser chrome "https://www.instagram.com/reel/REEL_ID/"`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Works with <code className="font-mono">firefox</code>, <code className="font-mono">safari</code>, <code className="font-mono">edge</code> too. The Reel must be public, or you must be logged in as a follower.
          </p>
        </div>

        {/* Skip the sketchy stuff */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Skip: random &quot;Instagram Reels downloader&quot; sites</h2>
          <p>
            The top Google results for &quot;download instagram reels&quot; are mostly ad-laden web
            tools (snapinsta, savefrom, etc.). They work intermittently, bury you in popups, often
            try to install browser hijackers, and break every few weeks when Instagram changes its
            API. The three methods above are slower to set up but reliable and ad-free.
          </p>
        </div>

        {/* The transcription step */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Now transcribe the Reel</h2>
          <p className="mb-4">
            Drop the MP4 into Mictoo. The Reel will be under 25 MB in nearly every case (Reels are
            typically 5 to 20 MB), so no signup needed. The transcript is back in a few seconds
            with timestamps, an AI summary, and a one-click SRT download for subtitles.
          </p>

          <a href="/transcribe-video-to-text" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcribe the Reel
          </a>

          <h3 className="font-semibold text-slate-700 mt-6 mb-2">What you get back</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Plain-text transcript</strong> with punctuation and capitalisation.</li>
            <li><strong>Per-line timestamps</strong> so you can jump to specific moments.</li>
            <li><strong>SRT and VTT subtitle files</strong> ready to embed back as captions if you re-upload the Reel elsewhere.</li>
            <li><strong>AI summary</strong> for long Reels (over 60 seconds) where you want the gist before reading the whole transcript.</li>
            <li><strong>50+ language support</strong> — Whisper handles Reels in Spanish, French, Russian, Japanese, Korean and others without extra setup.</li>
          </ul>
        </div>

        {/* Use cases */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Why people transcribe Reels</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Repurpose your own content.</strong> Turn a viral Reel into a blog post, LinkedIn article, Twitter thread, or YouTube Short caption. The transcript is the raw material.</li>
            <li><strong>Add proper captions.</strong> Instagram&apos;s auto-captions are usable but often miss names, technical terms, and proper nouns. A clean transcript plus the SRT lets you upload a polished caption track.</li>
            <li><strong>Translate to another language.</strong> Get the English transcript, run it through DeepL or ChatGPT, generate SRT in the target language, upload as a translated caption.</li>
            <li><strong>Research and study.</strong> Academics, journalists, and language learners often work from transcripts of social-media content. Searchable text is more useful than scrubbing through a video.</li>
            <li><strong>Accessibility.</strong> Some viewers prefer reading. A text version of your Reels broadens your audience and improves the experience for hard-of-hearing followers.</li>
            <li><strong>Content audit.</strong> If you post a lot of Reels, a folder of transcripts is searchable in seconds. Finding &quot;that Reel where I said X&quot; becomes trivial.</li>
          </ul>
        </div>

        {/* Legal note */}
        <div className="border border-amber-100 bg-amber-50 rounded-2xl p-5">
          <h2 className="text-base font-semibold text-slate-800 mb-2">A note on what is OK to transcribe</h2>
          <p className="text-sm mb-2">
            Instagram&apos;s Terms of Use say users cannot collect, copy, or download content from
            Instagram unless given express permission. In practice, the rules people follow:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Always OK:</strong> your own Reels. Transcribe freely.</li>
            <li><strong>Generally OK:</strong> personal use such as accessibility, language study, journalism, research, or fair-use commentary. Tolerated though technically against the TOS.</li>
            <li><strong>Not OK:</strong> republishing someone else&apos;s Reel as your own content, monetising it, or removing creator attribution.</li>
          </ul>
          <p className="text-sm mt-3">
            We are not lawyers. When in doubt, ask the creator. A polite DM asking for permission
            usually works.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">FAQ</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Can Mictoo transcribe an Instagram URL directly?',
                a: 'No. Instagram blocks server-side fetching, so any tool offering URL-direct Reel transcription is either using a fragile workaround or scraping unreliably. The two-step flow (save the Reel, then upload) is the only reliable path in 2026. Saving takes ten seconds.',
              },
              {
                q: 'How accurate is the transcript for short, punchy Reels?',
                a: 'Very. Whisper (the model behind Mictoo) handles fast speech, slang, background music, and informal language well. Accuracy on a typical Reel runs 92 to 98 percent. Names, technical terms, and very rare words are the usual failure modes — easy to spot-fix in any text editor.',
              },
              {
                q: 'My Reel is in Spanish (or French, Japanese, etc.). Will Mictoo handle it?',
                a: 'Yes. Whisper supports 50+ languages and auto-detects the input. You do not need to specify the language unless the Reel has multiple languages mixed together.',
              },
              {
                q: 'Can I get the captions Instagram already generated, without re-transcribing?',
                a: 'Not directly. Instagram does not expose auto-captions as plain text through any public API. The closest workaround is to copy them manually from the Reel\'s share-sheet caption sticker if the creator used one. Re-transcribing with Whisper is faster and gives you much better quality.',
              },
              {
                q: 'What about Reels with background music or sound effects?',
                a: 'Whisper is good at separating spoken voice from music. Heavy bass or constant music with talking can still cause some mistakes — fewer than YouTube auto-captions but not zero. For musical Reels with talking, expect 88 to 95 percent accuracy.',
              },
              {
                q: 'How small are typical Reels?',
                a: 'A 30-second Reel is roughly 5 to 10 MB. A 90-second Reel is 15 to 25 MB. All fit comfortably under our 25 MB anonymous limit. No need to compress before uploading.',
              },
              {
                q: 'Can I batch-transcribe a folder of Reels?',
                a: 'On the free tier, one at a time. yt-dlp users can batch-download a whole folder of Reels, then upload each to Mictoo in a new browser tab. Batch upload is on the roadmap for the Pro plan.',
              },
              {
                q: 'Will the transcript include the music lyrics if the Reel uses a song?',
                a: 'Yes, Whisper will transcribe any clear vocals including song lyrics. If you only want the speech, edit the transcript afterwards to remove the lyrics, or mute the music track in the source video before uploading.',
              },
              {
                q: 'Can I transcribe Stories or other Instagram videos the same way?',
                a: 'Yes. The methods above work for Stories, IGTV (now folded into Reels), and any video posted on Instagram. Stories disappear after 24 hours so save them quickly. For your own Stories, the Archive feature stores them automatically.',
              },
              {
                q: 'Is screen recording really good enough quality for transcription?',
                a: 'Yes. Speech recognition cares about clear voice frequencies, not bitrate. A phone screen recording of a Reel will transcribe just as accurately as the original MP4 in 99 percent of cases.',
              },
              {
                q: 'What if the Reel is from a private account I follow?',
                a: 'Methods 1 and 2 still work (your own Reels via Save, or screen recording while logged in as a follower). yt-dlp also works with --cookies-from-browser. For accounts you do not follow, you cannot access the content at all, which is the correct privacy outcome.',
              },
              {
                q: 'Does Mictoo keep the Reel file after transcribing?',
                a: 'No. Upload is deleted right after the transcript is generated. The transcript is yours to keep, copy, download, or share — we do not store it longer than the session.',
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
          <a href="/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Video to text</a>
          <a href="/how-to-download-youtube-video" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Download YouTube video</a>
          <a href="/youtube-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">YouTube to text</a>
          <a href="/mp4-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP4 to MP3</a>
        </div>
      </div>
    </section>
  )
}
