import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 to MP3, free online converter | Mictoo',
  description:
    'Convert MP4 to MP3 free online. Drop your video, get a clean 128 kbps MP3 audio file in seconds. No signup, no watermark, no email. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/mp4-to-mp3', languages: LANGS },

  openGraph: {
    title: "MP4 to MP3, free online converter | Mictoo",
    description: "Convert MP4 to MP3 free online. Drop your video, get a clean 128 kbps MP3 audio file in seconds. No signup, no watermark, no email. Up to 25 MB.",
    url: "https://mictoo.com/mp4-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 to MP3, free online converter | Mictoo",
    description: "Convert MP4 to MP3 free online. Drop your video, get a clean 128 kbps MP3 audio file in seconds. No signup, no watermark, no email. Up to 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function Mp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="MP4 → MP3 · Free · No signup"
      h1={<>MP4 to MP3<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop an MP4 video. Get an MP3 audio file. No watermark, no email, no waiting room. Powered by ffmpeg server-side, finished in seconds."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Drop the MP4', desc: 'Drag any MP4 video into the box or click to pick one. Files up to 25 MB go through anonymously; sign in if you need 60 MB.' },
        { icon: '⚡', title: 'We extract the audio', desc: 'ffmpeg runs server-side, strips the video stream, and re-encodes the audio as 128 kbps stereo MP3 at 44.1 kHz. A 25 MB video usually finishes in 5-15 seconds.' },
        { icon: '⬇️', title: 'Download the MP3', desc: 'The download button gives you the file with the original name plus a .mp3 extension. Your upload and result are both deleted from our servers within the hour.' },
      ]}
      whyUse={{ title: 'Why Mictoo for MP4 to MP3', bullets: [
        { title: 'Just the conversion. Nothing else', desc: 'No popups, no countdown timers, no fake "free" tier that nags you to pay. Drop, convert, download.' },
        { title: '128 kbps MP3, small and universal', desc: 'That bitrate is the practical sweet spot for spoken-word audio: ~1 MB per minute, plays everywhere, sounds clean. We do not offer a quality picker because choices add friction without adding value for the typical use case.' },
        { title: 'Files never sit on our servers', desc: 'Your MP4 lands on Vercel Blob storage, gets converted, and is deleted right away. The MP3 itself is purged by our hourly sweep, keep a local copy.' },
        { title: 'No watermark, no audio tag', desc: 'A lot of free converters splice in their own "Converted by FreeMP3.com" intro. We do not touch the audio besides re-encoding it.' },
        { title: 'Most other free converters wrap an ad network', desc: 'Many sites you find on Google for "mp4 to mp3" are AdSense doorways that hijack the back button or trigger fake virus warnings. We are an indie SEO project funded by display ads on the marketing pages, not in the conversion flow.' },
      ]}}
      useCases={{ title: 'When you would convert MP4 to MP3', items: [
        { title: 'Save a podcast you have as a video', desc: 'A lot of podcast feeds also publish as YouTube uploads or Vimeo MP4s. If you only have the video copy, MP3 makes it phone-friendly and ten times smaller.' },
        { title: 'Pull music or audio out of a lecture recording', desc: 'Zoom and Teams export MP4. You only need the audio if you want to listen on commute, transcribe, or feed into editing software.' },
        { title: 'Trim down a 1 GB video so you can email it', desc: 'A 1-hour video at 1080p can easily hit 1 GB. The audio in that same recording is 30-60 MB at full quality, often under 30 MB at 128 kbps. Suddenly emailable.' },
        { title: 'Feed into transcription that expects audio', desc: 'Our own transcribe tool accepts MP4 directly, but third-party tools, audio editors, and DAWs usually want pure audio. MP3 is the lowest-common-denominator format.' },
        { title: 'Background music for a screencast or slideshow', desc: 'Many MP4s on YouTube tutorials contain music or narration you may want as a standalone clip. Convert and drop into iMovie, Audacity, or Logic.' },
      ]}}
      proTips={{ title: 'Tips for clean MP4 to MP3 conversion', tips: [
        { title: 'If the MP4 is huge, trim it first', desc: 'Our cap is 25 MB without signup, 60 MB with. A 1080p video much above ten minutes will not fit. Open it in QuickTime (Mac) or the Photos app (Windows), trim to just the part you need, and re-export.' },
        { title: '128 kbps is overkill for voice, perfect for music', desc: 'For spoken word a 64 kbps MP3 would be half the size with no audible loss. We standardise on 128 kbps because most people are not sure what is in the video and 128 sounds clean for both.' },
        { title: 'If the source video has multiple audio tracks, only the default plays', desc: 'Movies, DVD rips, and some lecture exports embed several language tracks. Our converter takes the default track. If you need the secondary track, change the default in your video editor and re-export the MP4 before uploading.' },
        { title: 'Old MP4s from camcorders may not decode', desc: 'AVCHD and other camcorder-era MP4s sometimes use codecs ffmpeg cannot read without extra libraries. If conversion fails, open the file in HandBrake (free, all platforms), re-export as a standard H.264 MP4, then try again.' },
        { title: 'Need 320 kbps or VBR? Use Audacity after', desc: 'Our MP3 is constant 128 kbps. If you need a higher bitrate or a VBR file, take the MP3, open in Audacity (also free), and re-export with your preferred settings. The quality loss from re-encoding at higher bitrate is negligible.' },
        { title: 'For protected content (iTunes movies, DRM), it will fail', desc: 'DRM-protected MP4s cannot be read by ffmpeg. We never decrypt copyrighted content. If the file came from a streaming service, you probably do not own the right to convert it.' },
      ]}}
      faq={[
        { q: 'Is the MP4 to MP3 converter really free?', a: 'Yes. No account needed for files up to 25 MB, no time limit, no watermark on the output, no "first conversion free then upgrade" trick. We pay for the server costs through display ads on the marketing pages (not in the converter itself).' },
        { q: 'What is the maximum file size?', a: '25 MB without an account, 60 MB if you sign in (free). Vercel\'s function budget is the real limit; we cap below it to keep conversion under 60 seconds for everyone.' },
        { q: 'How long does the conversion take?', a: 'For a typical 10-20 MB MP4 (a few minutes of video) it finishes in 5-15 seconds. The bottleneck is your upload speed, not the conversion itself, ffmpeg cracks through audio re-encoding much faster than realtime.' },
        { q: 'What quality is the MP3?', a: '128 kbps constant bitrate, 44.1 kHz, stereo. This is the universal "good enough for everything" setting: indistinguishable from the original to most ears for voice and music, ~1 MB per minute of audio.' },
        { q: 'Do you keep my files?', a: 'No. Your upload lives on Vercel Blob storage just long enough to be converted, then we delete it. The resulting MP3 is purged within an hour by our cleanup cron. Save the MP3 locally, we cannot re-send it.' },
        { q: 'Will the output have any watermark or audio tag?', a: 'No. We do not splice in "Converted by Mictoo" intros or branded outros. The MP3 is just the original audio re-encoded.' },
        { q: 'Can I convert YouTube videos with this?', a: 'You can convert any MP4 file you have rights to. We do not download videos from YouTube, that would put us on the wrong side of YouTube\'s terms of service. Use a tool like 4K Video Downloader or yt-dlp to save the MP4 locally, then drop it here.' },
        { q: 'Why are the formats limited to MP4 only?', a: 'Each converter is one URL with one job. MP4 to MP3 lives at /mp4-to-mp3, WAV to MP3 lives at /wav-to-mp3, and so on. Picking the right one tells us what to expect and gives Google a clean page to rank.' },
        { q: 'My MP4 failed with "unsupported codec". What now?', a: 'Older camcorder MP4s and some DRM-protected files use codecs ffmpeg cannot decode out of the box. Open the file in HandBrake (free), re-export as a standard H.264 MP4, and try again. If it still fails, the file is probably DRM-locked.' },
        { q: 'Does this work on mobile?', a: 'Yes. The page is mobile-friendly and uploads work from iOS Safari and Android Chrome. On iPhone, you may need to share the video to Files first so the file picker can reach it.' },
        { q: 'Are MP3s lossy? Should I worry?', a: 'Yes, MP3 is lossy. At 128 kbps the loss is inaudible for almost all listeners on almost all source material. If you need lossless, say for music mastering, convert MP4 to WAV instead.' },
        { q: 'Why no batch upload?', a: 'Free tier is one file at a time. Batch is on the roadmap for the Pro plan when it launches. For now you can run several conversions in parallel browser tabs.' },
      ]}
      deepDive={
        <article className="prose-content">
          <h2>Why MP4 to MP3 is the most-searched audio conversion</h2>
          <p>
            MP4 is a video container, but for most uses what people
            actually want is the audio track inside it. The video is
            often filler (a still image, a slideshow, a screen recording
            of just a talking head). The audio carries the meaning. MP3
            is the universal portable audio format that fits on phones,
            in cars, into podcast apps, and through email attachments.
            That mismatch drives millions of searches per year.
          </p>
          <h3>Where your MP4 most likely came from</h3>
          <p>
            Five common sources cover almost all use cases. YouTube
            videos downloaded with a third-party tool: the video is MP4,
            you want only the audio. Phone recordings: iPhone Voice
            Memos in Lossless mode and most Android recorders produce
            MP4. Screen recordings from QuickTime, OBS, or Loom in MP4
            mode. Lecture or webinar exports from Zoom, Teams, or Google
            Meet. Music videos or songs you want as audio for your phone
            library.
          </p>
          <h3>What we actually do under the hood</h3>
          <p>
            We demux the MP4 container, identify the audio track
            (almost always AAC), decode it, and re-encode to 128 kbps
            MP3 at 44.1 kHz. The video portion (H.264, H.265, AV1)
            never touches the audio pipeline. The result fits on every
            device that plays MP3, which in 2026 is every device that
            plays audio at all.
          </p>
          <h3>Lossless extraction vs re-encode trade-off</h3>
          <p>
            If you want the absolute cleanest audio extraction, ffmpeg
            with -c:a copy pulls the AAC track out of the MP4 into an
            M4A container without re-encoding (zero quality loss).
            That gives you an M4A, not an MP3. To get an MP3, the
            re-encode is unavoidable, but the quality hit at 128 kbps
            is inaudible on phones and in cars. For voice content the
            re-encode is invisible; for music with critical listening
            the lossless extraction is the better path.
          </p>
          <h3>When to skip this conversion entirely</h3>
          <p>
            If your end goal is transcription, do not convert. Upload
            the MP4 directly to our <a href="/transcribe-video-to-text" className="text-brand-600 hover:underline">video to text</a> page; we extract the audio
            internally and run it through Whisper. The MP3 step is wasted
            work plus a small quality loss. The same applies if you are
            uploading to a tool that accepts MP4 directly (most modern
            platforms do).
          </p>
        </article>
      }
      relatedLinks={[
        { href: '/wav-to-mp3', label: 'WAV to MP3', desc: 'Shrink lossless WAV files into compact MP3.' },
        { href: '/webm-to-mp3', label: 'WEBM to MP3', desc: 'Pull MP3 out of a WEBM (often what YouTube downloaders give you).' },
        { href: '/transcribe-video-to-text', label: 'Video to text', desc: 'Skip the MP3 step, go straight to a text transcript of the video.' },
        { href: '/how-to-compress-audio', label: 'Compress audio', desc: 'When your MP3 is still too large to share.' },
      ]}
    />
  )
}
