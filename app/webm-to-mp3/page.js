import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM to MP3 — free online converter | Mictoo',
  description:
    'Convert WEBM to MP3 free online. Pull MP3 audio out of any WEBM video or audio file in seconds. No signup, no watermark. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/webm-to-mp3', languages: LANGS },

  openGraph: {
    title: "WEBM to MP3 — free online converter | Mictoo",
    description: "Convert WEBM to MP3 free online. Pull MP3 audio out of any WEBM video or audio file in seconds. No signup, no watermark. Up to 25 MB.",
    url: "https://mictoo.com/webm-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM to MP3 — free online converter | Mictoo",
    description: "Convert WEBM to MP3 free online. Pull MP3 audio out of any WEBM video or audio file in seconds. No signup, no watermark. Up to 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function WebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="WEBM → MP3 · Free · No signup"
      h1={<>WEBM to MP3<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop a WEBM file (the format browser recorders, YouTube downloaders, and screen capture tools love to save). Get a clean MP3. No watermark, no email."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Drop the WEBM', desc: 'Audio-only or video WEBM, both work. Up to 25 MB anonymously, 60 MB after signup.' },
        { icon: '⚡', title: 'We extract and re-encode', desc: 'ffmpeg pulls the audio stream (Opus or Vorbis) out of the WEBM container and re-encodes to 128 kbps MP3 at 44.1 kHz. Typically 3-10 seconds.' },
        { icon: '⬇️', title: 'Download the MP3', desc: 'Output keeps the original name with .mp3. Files are wiped from our servers within the hour.' },
      ]}
      whyUse={{ title: 'Why convert WEBM to MP3', bullets: [
        { title: 'WEBM is great for the browser, awful for everything else', desc: 'iPhones do not play WEBM. Most car stereos do not. A lot of older Bluetooth speakers do not. MP3 plays on everything you can think of.' },
        { title: 'Voice memo apps and browser recorders save WEBM', desc: 'Web-based recording tools (Loom, the MDN MediaRecorder API, browser audio recorders) default to WEBM because Chrome and Firefox support it natively. If you want to send the recording somewhere, MP3 is the safer format.' },
        { title: 'YouTube downloaders give you WEBM by default', desc: 'When you pick "audio only" in 4K Video Downloader or yt-dlp without specifying a format, you often get a WEBM Opus file. Converting to MP3 makes it playable on iOS and in audio editing apps.' },
        { title: 'Opus is technically better, but compatibility wins', desc: 'The Opus codec inside a WEBM container is better than MP3 byte-for-byte. But if your audience cannot play it, that does not matter. MP3 is the lingua franca.' },
        { title: 'No watermark, no upsell', desc: 'The MP3 is just the audio re-encoded. We do not add an intro, a tag, or a "buy Pro" overlay on the result page.' },
      ]}}
      useCases={{ title: 'When you would convert WEBM to MP3', items: [
        { title: 'Browser audio recording → portable file', desc: 'You used a web-based recorder (built-in microphone tool, online voice recorder, etc.) and got a WEBM. Convert to MP3 to drop into your podcast editor or send to a transcriber.' },
        { title: 'Loom or Vidyard download → audio-only clip', desc: 'Loom downloads can be WEBM. If you only need the audio of the recording, convert and save the smaller file.' },
        { title: 'YouTube audio download → universal format', desc: 'When you download audio-only from YouTube with a downloader that defaults to Opus/WEBM, MP3 conversion makes the file playable everywhere.' },
        { title: 'Screen recording → just the narration', desc: 'OBS, Chrome\'s built-in screen recorder, and similar tools often output WEBM. If you want only the voiceover for transcription or a podcast, convert.' },
        { title: 'WebRTC call recordings', desc: 'Some video conferencing tools record to WEBM. Convert before sending to clients or storing in a CRM that expects MP3.' },
      ]}}
      proTips={{ title: 'Tips for clean WEBM to MP3 conversion', tips: [
        { title: 'WEBM with VP9 video is fine — we ignore the video stream', desc: 'You can drop a video WEBM (VP9 + Opus) into the converter. We strip the video and keep only audio. The result is the same size as if you had given us audio-only.' },
        { title: 'Opus audio decodes losslessly inside ffmpeg', desc: 'There is no second-loss issue going Opus → MP3. The perceptual encoding of MP3 at 128 kbps is the only thing that affects the result, not the input being a lossy format.' },
        { title: 'For voice, mono is enough but we keep stereo', desc: 'Our converter preserves the source channel layout. If your WEBM is mono (typical for voice recordings), the MP3 is mono. We do not upmix.' },
        { title: 'If conversion fails, the WEBM is probably partial', desc: 'WEBM streams sometimes get cut off mid-recording, leaving the container half-broken. Open in VLC and re-export as a new WEBM, or in a video editor, then try again.' },
        { title: 'For YouTube downloads, prefer M4A directly if your downloader supports it', desc: 'If you control the download, picking M4A (AAC inside an MP4 container) skips this whole step — M4A plays everywhere MP3 does. Use 4K Video Downloader\'s "M4A" format option.' },
        { title: 'Encrypted WEBMs from DRM will fail', desc: 'Some streaming services use WEBM with DRM. ffmpeg cannot decrypt those, and neither do we. The original WEBM has to be unprotected.' },
      ]}}
      faq={[
        { q: 'Is WEBM to MP3 conversion really free?', a: 'Yes. No account up to 25 MB, no watermark, no time-limited "trial". Display ads on the marketing pages cover server cost.' },
        { q: 'What is the maximum file size?', a: '25 MB anonymously, 60 MB with a free account. WEBM is efficient — 25 MB usually represents 20-40 minutes of audio.' },
        { q: 'Can I convert WEBM video to MP3?', a: 'Yes. We strip the video stream and output only the audio. The MP3 is the same size whether the source was video or audio-only WEBM.' },
        { q: 'Does the MP3 sound worse than the WEBM?', a: 'Theoretically, slightly. Opus at the same bitrate is better than MP3. At 128 kbps the difference is inaudible for nearly all listeners on nearly all material.' },
        { q: 'How long does it take?', a: 'Seconds. A 25 MB WEBM file converts in 3-10 seconds. Upload speed is the bottleneck.' },
        { q: 'What MP3 settings do you use?', a: '128 kbps constant bitrate, 44.1 kHz, preserves source channel layout (mono in → mono out, stereo in → stereo out).' },
        { q: 'Do you keep my files?', a: 'No. Upload is deleted after conversion. Output is purged within the hour. Save it locally.' },
        { q: 'My WEBM from Loom failed. Why?', a: 'Some Loom downloads use a fragmented MP4 inside a WEBM container or have non-standard headers. Try opening in VLC, exporting again, then retry. Or download from Loom as MP4 directly if the option is there.' },
        { q: 'Does this work for Opus files specifically?', a: 'If your file ends in .opus rather than .webm, rename it to .webm first. The container is functionally the same and ffmpeg reads them identically.' },
        { q: 'Can I download YouTube videos with this?', a: 'No. We do not fetch URLs. Use a downloader app (4K Video Downloader, yt-dlp, ClipGrab) to save the WEBM locally first, then drop it here.' },
        { q: 'Will iPhone or iTunes play the output?', a: 'Yes. MP3 plays everywhere, including all Apple devices and software.' },
        { q: 'Why convert instead of just keeping WEBM?', a: 'WEBM is fine on Chrome and Firefox, but iOS, many car stereos, older Bluetooth speakers, and a lot of professional audio software do not handle it. MP3 is universal.' },
      ]}
      relatedLinks={[
        { href: '/mp4-to-mp3', label: 'MP4 to MP3', desc: 'Same idea, MP4 source instead of WEBM.' },
        { href: '/wav-to-mp3', label: 'WAV to MP3', desc: 'Lossless WAV down to portable MP3.' },
        { href: '/webm-to-text', label: 'WEBM to text', desc: 'Skip the MP3 — go straight to a transcript.' },
        { href: '/how-to-compress-audio', label: 'Compress audio', desc: 'If the MP3 is still too big to share.' },
      ]}
    />
  )
}
