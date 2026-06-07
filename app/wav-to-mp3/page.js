import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV to MP3, free online converter | Mictoo',
  description:
    'Convert WAV to MP3 free online. Shrink lossless WAV files to portable 128 kbps MP3 in seconds. No signup, no watermark. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/wav-to-mp3', languages: LANGS },

  openGraph: {
    title: "WAV to MP3, free online converter | Mictoo",
    description: "Convert WAV to MP3 free online. Shrink lossless WAV files to portable 128 kbps MP3 in seconds. No signup, no watermark. Up to 25 MB.",
    url: "https://mictoo.com/wav-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV to MP3, free online converter | Mictoo",
    description: "Convert WAV to MP3 free online. Shrink lossless WAV files to portable 128 kbps MP3 in seconds. No signup, no watermark. Up to 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function WavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="WAV → MP3 · Free · No signup"
      h1={<>WAV to MP3<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop a WAV file. Get a compact MP3 ten times smaller, near-identical sound for spoken word or casual listening. No watermark, no email."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Drop the WAV', desc: 'Drag any WAV (16-bit, 24-bit, mono, stereo) into the box. Files up to 25 MB go through anonymously, 60 MB with signup.' },
        { icon: '⚡', title: 'We re-encode to MP3', desc: 'ffmpeg server-side, 128 kbps constant bitrate, 44.1 kHz, stereo. A 25 MB WAV (about 2 minutes at 24-bit/96 kHz, or 5 minutes at 16-bit/44.1) finishes in a few seconds.' },
        { icon: '⬇️', title: 'Download the MP3', desc: 'Result is named after the original with .mp3 swapped in. Both upload and output are deleted from our servers within the hour.' },
      ]}
      whyUse={{ title: 'Why convert WAV to MP3', bullets: [
        { title: 'WAV files are huge', desc: 'A 5-minute 16-bit/44.1 kHz WAV is about 50 MB. The same audio as 128 kbps MP3 is 5 MB. For emailing, uploading to a podcast host, or sticking on a phone, MP3 is the format you want.' },
        { title: 'MP3 plays everywhere', desc: 'WAV is fine on desktop but flaky on older car stereos, some Bluetooth speakers, and a lot of web players. MP3 just works.' },
        { title: 'Quality loss at 128 kbps is inaudible for most listening', desc: 'You will not hear the difference between a 128 kbps MP3 and the original WAV unless you are mastering music on studio monitors. For voice, podcast, or casual listening it is the obvious tradeoff.' },
        { title: 'No watermark, no popups', desc: 'The MP3 is just your audio re-encoded. We do not add an intro saying "Converted by..." and we do not show a fake popup that you need to wait 30 seconds.' },
        { title: 'Privacy by default', desc: 'WAVs from a field recording can be sensitive. The file lands on Vercel Blob storage, gets converted, and is wiped. We do not look at it, we do not keep it.' },
      ]}}
      useCases={{ title: 'When you would convert WAV to MP3', items: [
        { title: 'Field recording → email-ready clip', desc: 'A Zoom H1n or similar recorder usually saves to WAV by default. Convert to MP3 before sharing with a producer, journalist, or transcriber.' },
        { title: 'Studio export → phone-friendly listen', desc: 'Audacity, Reaper, Logic, they all default to WAV. Export the rough mix as MP3 to share with collaborators or listen on the move.' },
        { title: 'Podcast prep', desc: 'Most podcast hosts (Anchor, Buzzsprout, Transistor) accept WAV but recommend MP3 because the upload is faster and the bandwidth charges are lower.' },
        { title: 'Voice memo cleanup', desc: 'If your phone or recorder saved to WAV, convert to MP3 before sticking it in your Notion or Notes archive, saves storage on the cheap.' },
        { title: 'Audio cleanup pipeline', desc: 'You recorded in WAV for editing, did your edits, and now want the final to be a smaller MP3 for distribution. This is the last step.' },
      ]}}
      proTips={{ title: 'Tips for clean WAV to MP3 conversion', tips: [
        { title: '24-bit WAV converts the same as 16-bit', desc: 'MP3 does not preserve bit depth above what perceptual coding needs anyway. A 24-bit WAV gives you no audible advantage over 16-bit when re-encoded to 128 kbps MP3.' },
        { title: 'If the WAV is bigger than 25 MB, trim it first', desc: 'Open in Audacity (free) or QuickTime, cut to the part you actually need, export as a smaller WAV, then convert. Or sign in for the 60 MB cap.' },
        { title: 'Mono in, mono out', desc: 'If your source WAV is mono (typical for voice recordings), the resulting MP3 will be mono too. Mono MP3 at 128 kbps is overkill, but our converter standardises on 128 for simplicity.' },
        { title: 'For mastering or archival, do not use MP3', desc: 'If you are keeping the file as a master copy for future re-mastering, stay in WAV (or FLAC). MP3 is a distribution format, not an archival one.' },
        { title: '320 kbps or VBR? Open the MP3 in Audacity after', desc: 'We export at constant 128 kbps. For a higher bitrate or VBR, take the MP3 to Audacity and re-export, the quality loss from one extra encode is small.' },
        { title: 'WAVs with weird headers fail silently', desc: 'Some BWF (broadcast WAV) files have headers ffmpeg cannot read. Open them in Audacity, save as a standard WAV, and try again.' },
      ]}}
      faq={[
        { q: 'Is WAV to MP3 conversion really free?', a: 'Yes. No account needed up to 25 MB, no time limit, no watermark on the output. Display ads on the marketing pages pay for the server.' },
        { q: 'What is the maximum file size?', a: '25 MB anonymously, 60 MB with a free account. A 25 MB WAV is about 5 minutes at 16-bit/44.1 kHz stereo, or about 2 minutes at 24-bit/96 kHz.' },
        { q: 'How long does it take?', a: 'Seconds. The conversion itself is far faster than realtime, a 25 MB WAV finishes in 3-8 seconds. Upload speed is the bottleneck.' },
        { q: 'What MP3 quality do you output?', a: '128 kbps constant bitrate, 44.1 kHz, matches the source channel count (mono in → mono out, stereo in → stereo out). This is the universal "good enough for everything" setting.' },
        { q: 'Do you keep my files?', a: 'No. Upload is deleted right after conversion. Result is purged within the hour by our cleanup cron. Save it locally.' },
        { q: 'Will the MP3 sound different from the WAV?', a: 'On most playback systems and most source material, no. Mastering on studio monitors with fresh ears, maybe, but at that point you would not be using a web converter.' },
        { q: 'Can I get a higher bitrate (256 or 320 kbps)?', a: 'Not directly here. Take our 128 kbps MP3 to Audacity and re-export at the bitrate you want. The double encode adds negligible audible loss.' },
        { q: 'What about FLAC instead of MP3?', a: 'FLAC is lossless compression, half the WAV size, no quality loss. For archival use it is the better choice. We do not output FLAC from this converter, but our /flac-to-mp3 page handles the other direction.' },
        { q: 'My WAV is 32-bit float. Will it convert?', a: 'Yes. ffmpeg handles 32-bit float WAV without issue. The MP3 output is the same regardless of input bit depth.' },
        { q: 'Why is mono audio getting a stereo MP3?', a: 'We keep the source channel layout. A mono WAV → mono MP3. A stereo WAV → stereo MP3. We do not upmix or downmix.' },
        { q: 'Does this work for music or just voice?', a: 'Both. 128 kbps MP3 is a slight perceptual compromise for music, fine for car listening, headphones in noisy environments, casual playback. For critical music listening keep the WAV or use FLAC.' },
        { q: 'Can I batch convert?', a: 'Not yet. One file at a time on the free tier. Batch is planned for a future Pro plan.' },
      ]}
      deepDive={
        <article className="prose-content">
          <h2>WAV to MP3 is the standard "studio to distribution" step</h2>
          <p>
            WAV is what your DAW writes when you bounce a finished mix.
            The session was at 24-bit 48 kHz, the master export is the
            same, and the file is large because it preserves every sample
            of the recording without compression. That is the right
            format for archive and re-editing.
          </p>
          <p>
            It is the wrong format for distribution. Uploading a 350 MB
            WAV to a podcast host, attaching it to an email, putting it
            on a USB stick for a car stereo: all hit the same wall.
            People stop downloading at 50 MB. Email caps at 25 MB.
            Car stereos run out of memory. MP3 at 128 kbps fits the
            distribution side of that workflow cleanly.
          </p>
          <h3>The studio bounce → publish workflow</h3>
          <p>
            The standard pattern: bounce to WAV (the master, archive
            copy), then encode to MP3 (the distribution copy). Many
            podcasters do exactly this every episode: Reaper or Logic
            mixes the episode, exports the master as 24-bit WAV for the
            archive, then encodes a 128 kbps MP3 for the host upload.
            The WAV stays on your project drive; the MP3 ships.
          </p>
          <h3>Why we default to 128 kbps</h3>
          <p>
            For voice content, 128 kbps mono or stereo is the sweet spot
            between file size and perceived quality. Going higher (192,
            256, 320 kbps) makes the file 50-150% bigger with no
            audible improvement on consumer playback. Going lower
            (64-96 kbps) starts to introduce artifacts even non-trained
            listeners notice on music, though voice tolerates it well.
          </p>
          <h3>If your source WAV is huge, downsample before upload</h3>
          <p>
            A 60-minute stereo 24-bit 48 kHz WAV is around 650 MB. Past
            our upload cap. The conversion still works if you first
            shrink the source: ffmpeg -i input.wav -ac 1 -ar 16000
            -sample_fmt s16 small.wav produces a roughly 110 MB version
            with identical voice quality. Or skip the conversion entirely
            and re-encode the source WAV directly to MP3 with ffmpeg
            -i input.wav -ab 128k output.mp3.
          </p>
        </article>
      }
      relatedLinks={[
        { href: '/mp4-to-mp3', label: 'MP4 to MP3', desc: 'Pull MP3 audio out of a video file.' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3', desc: 'Convert lossless FLAC to portable MP3.' },
        { href: '/mp3-to-wav', label: 'MP3 to WAV', desc: 'The reverse direction, uncompressed WAV from MP3.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to text', desc: 'Need the words, not the audio? Skip the MP3 and transcribe directly.' },
      ]}
    />
  )
}
