import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'WAV to Text: Free Online WAV Transcription | Mictoo',
  description:
    'Upload a WAV file, get an editable transcript with timestamps in seconds. Built for studio bounces, field recordings, DAW exports. Supports PCM and Broadcast Wave (BWF). Free, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/wav-to-text',
    languages: {
      'en': 'https://mictoo.com/wav-to-text',
      'fr': 'https://mictoo.com/fr/wav-to-text',
      'de': 'https://mictoo.com/de/wav-to-text',
      'es': 'https://mictoo.com/es/wav-to-text',
      'ru': 'https://mictoo.com/ru/wav-to-text',
      'it': 'https://mictoo.com/it/wav-to-text',
      'pt': 'https://mictoo.com/pt/wav-to-text',
      'pl': 'https://mictoo.com/pl/wav-to-text',
      'ja': 'https://mictoo.com/ja/wav-to-text',
      'ko': 'https://mictoo.com/ko/wav-to-text',
      'x-default': 'https://mictoo.com/wav-to-text',
    },
  },

  openGraph: {
    title: "WAV to Text: Free Online WAV Transcription | Mictoo",
    description: "Upload a WAV file, get an editable transcript with timestamps in seconds. Studio bounces, field recordings, DAW exports. PCM and BWF supported.",
    url: "https://mictoo.com/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV to Text: Free Online WAV Transcription",
    description: "Upload a WAV, get an editable transcript with timestamps in seconds. Studio bounces, field recordings, DAW exports.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function WavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · PCM · BWF · Free"
      h1={
        <>
          WAV to Text
          <br />
          <span className="text-brand-600">Transcribe any WAV in seconds</span>
        </>
      }
      subtitle="Drop a WAV from your DAW, field recorder, or interview rig. We turn it into an editable transcript with timestamps and exports for TXT, SRT, VTT, and DOCX."
      valueBlock={
        <article className="prose-content">
          <p>
            WAV files preserve the original audio without compression, which
            is exactly why your recorder, DAW, or studio rig probably saved
            one. That same property is why WAVs get huge fast. Mictoo accepts
            them directly so you do not have to convert before transcribing.
          </p>
          <p>
            Drop the file in, get back an editable transcript with timestamps,
            an AI summary, and one-click exports to TXT, SRT, VTT, or DOCX.
            Useful for interviews, podcast show notes, lecture archives,
            field-recording logs, and DAW-bounce captions.
          </p>
          <p className="text-sm text-slate-500">
            Free for files up to 60 MB. For longer studio bounces or
            multi-hour lectures, see <a href="/how-to-compress-audio" className="text-brand-600 hover:underline">how to compress audio</a> or <a href="/how-to-split-audio" className="text-brand-600 hover:underline">how to split audio</a> before uploading.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📂',
          title: 'Upload your WAV',
          desc: 'PCM 8 to 32-bit float, mono or stereo, sample rates 8 kHz to 192 kHz. Broadcast Wave (BWF) from Sound Devices, Zaxcom, Tascam pro recorders works the same way.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes the speech',
          desc: 'Whisper large-v3 reads the audio and converts speech to text. A 30-minute file usually finishes inside one minute. Upload speed is the bottleneck for large WAVs.',
        },
        {
          icon: '📋',
          title: 'Edit and export',
          desc: 'Fix wrong words inline, then download TXT, SRT, VTT, or DOCX. Copy to clipboard if you just need the text. AI summary appears next to the transcript automatically.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for WAV files',
        bullets: [
          {
            title: 'Direct WAV transcription, no manual conversion',
            desc: 'Some free transcribers reject WAV and tell you to convert to MP3 first. Mictoo accepts standard PCM WAV directly, including 24-bit and 32-bit float. One less step in your workflow.',
          },
          {
            title: 'PCM and Broadcast Wave (BWF) both work',
            desc: 'BWF files from professional field recorders carry timecode and scene metadata in extra chunks. We read the audio, ignore the metadata chunks, and never write your original file back. Your timecode stays intact on your drive.',
          },
          {
            title: 'Sample rates and bit depths we actually handle',
            desc: 'PCM 8-bit, 16-bit, 24-bit, 32-bit integer, and 32-bit float. Mono and stereo. Sample rates from 8 kHz to 192 kHz. Multi-channel WAVs get downmixed automatically before transcription.',
          },
          {
            title: 'Useful exports out of the box',
            desc: 'Download as TXT for plain text, SRT or VTT for subtitles aligned to your timestamps, or DOCX for ready-to-edit Word documents. Copy to clipboard when you just want to paste somewhere.',
          },
          {
            title: 'Practical guidance for large WAV files',
            desc: 'WAV is uncompressed, so files get big quickly. When yours is over our 60 MB cap, we tell you up front and walk you through the standard ffmpeg or Audacity recipe to bring it down without losing transcript quality.',
          },
        ],
      }}
      useCases={{
        title: 'Where WAV files come from',
        items: [
          {
            title: 'Interviews',
            desc: 'Reporters and researchers capture interviews on handheld recorders (Zoom H5, H6, Tascam DR-40X) that default to WAV. Transcript becomes the source of pull quotes, citations, and the article draft.',
          },
          {
            title: 'Podcasts',
            desc: 'When you bounce a finished episode in Logic, Reaper, or Pro Tools the master is usually 24-bit WAV. Upload that WAV (not the MP3 you publish) for the cleanest transcript, which becomes your show notes and SEO-friendly episode page.',
          },
          {
            title: 'Lectures',
            desc: 'Teachers recording into Audacity with a USB mic end up with mono WAV files. Transcribe each lecture to make a searchable archive, give to students as captions, or feed into an LMS.',
          },
          {
            title: 'Field recordings',
            desc: 'Documentary and nature recordists use Sound Devices or Zaxcom rigs that output Broadcast Wave with timecode. Transcript provides scene-level logs you can match against your timecode without touching the original file.',
          },
          {
            title: 'DAW and studio bounces',
            desc: 'Audiobook narrators, voiceover artists, video editors all bounce 24-bit WAV intermediates. Use the WAV transcript to generate matching captions before the file gets compressed for delivery.',
          },
          {
            title: 'Archival audio',
            desc: 'Libraries, museums, and family archive projects standardise on 24-bit WAV for long-term preservation. Run each WAV through transcription once and the archive becomes full-text searchable forever.',
          },
        ],
      }}
      proTips={{
        title: 'Recommended WAV settings for transcription',
        tips: [
          {
            title: 'Aim for 16 kHz mono, 16-bit PCM',
            desc: 'Whisper resamples to 16 kHz mono internally before transcription. Doing it on your side first makes the file about 12 times smaller than the original 48 kHz stereo 24-bit, with no meaningful difference for clean speech. ffmpeg one-liner: ffmpeg -i input.wav -ac 1 -ar 16000 -sample_fmt s16 output.wav.',
          },
          {
            title: 'Trim silence at the start and end',
            desc: 'Field recorders often leave 30-60 seconds of dead air before and after the actual content. Audacity → Effect → Truncate Silence with default settings handles it quickly. Saves your 60 MB budget for words that matter.',
          },
          {
            title: 'Keep the original WAV in your project folder',
            desc: 'The downsampled file is only for upload. Your original 24-bit master stays untouched on your drive for any future re-edit, archive copy, or higher-quality export.',
          },
          {
            title: 'For very long files, use a temporary MP3',
            desc: 'A 90-minute mono 16-bit 16 kHz WAV is still 173 MB. For lectures or long-form podcasts, re-encode to a 64 kbps mono MP3 just for the upload. The MP3 is around 43 MB and transcribes with no meaningful quality difference for clean speech.',
          },
          {
            title: 'For noisy WAVs, denoise before upload',
            desc: 'Background noise (wind, HVAC, room rumble, tape hiss) reduces accuracy more than any setting choice. Run the WAV through Audacity → Effect → Noise Reduction, or use the free Adobe Podcast Enhance web tool. Then upload the cleaned WAV.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>WAV files in plain language</h2>
          <p>
            A WAV file is, in the standard case, raw uncompressed PCM audio
            with a small header on top. There is no codec, no perceptual
            model, no compression. The bytes in the file are the recording.
            That simplicity is why every DAW and field recorder on the planet
            can export WAV without negotiation, and it is also why WAV files
            are so much larger than MP3 or M4A files of the same length.
          </p>
          <h3>Why WAV is so large</h3>
          <p>
            File size is determined almost entirely by three numbers: sample
            rate (how many samples per second), bit depth (how many bits per
            sample), and channel count (mono or stereo). A one-minute stereo
            CD-quality recording (44.1 kHz, 16-bit, two channels) is 10.1 MB.
            A one-minute 24-bit 96 kHz field recording is around 33 MB. A
            one-hour 32-bit float stereo master at 48 kHz can land near
            1.4 GB. WAV does not compress, so those numbers scale linearly
            with duration.
          </p>
          <h3>What this means for speech recognition</h3>
          <p>
            Whisper large-v3 (the model we run) resamples whatever you give
            it to 16 kHz mono before the first inference step. A 192 kHz
            32-bit float multi-channel WAV ends up shaped exactly the same
            as a 16 kHz mono phone call by the time the model sees it. In
            our testing, the transcript quality difference between a 16 kHz
            mono WAV and a 96 kHz 24-bit stereo WAV of the same speech is
            statistically zero. What changes is your upload time and your
            file-size budget.
          </p>
          <h3>When uncompressed actually helps</h3>
          <p>
            There is one situation where WAV beats a low-bitrate MP3 for
            transcription: marginal audio. Very quiet voices, heavy ambient
            noise, dropouts from a flaky lavalier. MP3 encoders at low
            bitrates throw away exactly the high-frequency tail Whisper
            sometimes uses to disambiguate fricatives (s, f, sh sounds). If
            you already have a recording that transcribes poorly as MP3, the
            WAV version sometimes recovers words the compressed copy missed.
            For clean studio audio at any reasonable bitrate, you will not
            see the difference.
          </p>
          <h3>The Broadcast Wave (BWF) variant</h3>
          <p>
            Professional field recorders (Sound Devices, Zaxcom, recent
            Tascam and Zoom pro models) write Broadcast Wave, which is a
            regular WAV with extra metadata chunks: the bext chunk holds
            timecode and originator info, iXML carries scene and take
            numbers, sometimes there is a chna chunk for multi-channel
            naming. Mictoo reads BWF files the same as any other WAV. The
            metadata is ignored for transcription purposes, the audio is
            transcribed, and your original file on your drive is never
            touched or rewritten.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            WAV vs other audio formats for transcription
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            All four formats work in Mictoo. Here is a practical comparison
            so you can pick the right starting format.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">WAV</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Size</dt><dd>Largest</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Quality</dt><dd>Uncompressed</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Best for</dt><dd>Studio, BWF, archival</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Works directly; downsample first if over 60 MB</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Size</dt><dd>Smallest</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Quality</dt><dd>Lossy (good at 128 kbps+)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Best for</dt><dd>Podcasts, long files, uploads</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Same accuracy as WAV for clean speech</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/flac-to-text" className="hover:text-brand-600">FLAC →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Size</dt><dd>About half of WAV</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Quality</dt><dd>Lossless compressed</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Best for</dt><dd>Audiophile archives, CD rips</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Identical to WAV, smaller file</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/m4a-to-text" className="hover:text-brand-600">M4A →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Size</dt><dd>Small</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Quality</dt><dd>Lossy AAC (very efficient)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Best for</dt><dd>iPhone Voice Memos, Apple ecosystem</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Same accuracy as WAV in practice</dd></div>
              </dl>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-6">
            Need to convert before uploading? See <a href="/how-to-compress-audio" className="text-brand-600 hover:underline">how to compress audio</a>.
          </p>
        </>
      }
      faq={[
        {
          q: 'Can I transcribe a WAV for free?',
          a: 'Yes. Mictoo is free for files up to 60 MB. No signup needed, no watermark on exports, no upsell after the first transcription. For long studio bounces or multi-hour recordings, downsample to 16 kHz mono or re-encode to a short MP3 to stay under the cap.',
        },
        {
          q: 'Is WAV better than MP3 for transcription accuracy?',
          a: 'For clean speech at any reasonable MP3 bitrate (128 kbps or above), no meaningful difference. For noisy, low-gain, or otherwise marginal recordings, WAV can sometimes recover words a low-bitrate MP3 would miss. Most podcast and interview audio falls in the first category.',
        },
        {
          q: 'What are the best WAV settings for transcription?',
          a: '16 kHz mono, 16-bit PCM is the practical sweet spot. Whisper resamples to that internally anyway. Higher sample rates and bit depths make the file larger without improving the transcript. Keep your original studio-quality WAV in your project folder, and use the downsampled version only for upload.',
        },
        {
          q: 'Do you support 24-bit and 32-bit float WAV?',
          a: 'Yes. Both work directly. Internally we normalise to 16-bit before sending to the speech model, which matches what Whisper expects. The extra bit depth gives you editing headroom in your DAW, but does not change the transcript.',
        },
        {
          q: 'Do you support Broadcast Wave (BWF) files?',
          a: 'Yes. BWF is a standard WAV with extra metadata chunks (bext, iXML, chna). We read the audio and ignore the metadata. The original file on your drive stays untouched, including all timecode and scene/take info.',
        },
        {
          q: 'Will WAV files from my Zoom, Tascam, or Sound Devices recorder work?',
          a: 'Yes. Zoom H1n, H5, H6, H8, Tascam DR-40X, DR-100mkIII, Portacapture X8, and Sound Devices MixPre / Scorpio all default to standard or Broadcast Wave. Drop the file straight in, no conversion needed.',
        },
        {
          q: 'What about exports from Pro Tools, Logic, Reaper, or Audacity?',
          a: 'All four export standard PCM WAV by default. Pro Tools and Logic typically write 24-bit at session sample rate, Reaper similar, Audacity writes whatever depth you configured. Mictoo accepts all of them as-is.',
        },
        {
          q: 'My WAV is over the 60 MB limit, what do I do?',
          a: "WAV does not compress, so size scales with sample rate, bit depth, channel count, and duration. A 30-minute stereo 24-bit 48 kHz file is around 250 MB. Three fixes, in order: (1) downsample to 16 kHz mono 16-bit, which typically drops the file 10-12x with no transcript quality loss for clean speech; (2) trim leading and trailing silence with Audacity Truncate Silence; (3) for very long files, re-encode to a 64 kbps mono MP3 just for the upload. See our compress-audio and split-audio guides for exact steps.",
        },
        {
          q: 'Can I export SRT or VTT subtitles?',
          a: 'Yes. After transcription finishes you can download SRT or VTT with timestamps every few seconds. Both formats align with your original audio timeline, so they drop straight into your video editor or subtitle workflow.',
        },
        {
          q: 'Can I get timestamps in the transcript?',
          a: 'Yes. The default transcript view shows segment-level timestamps you can click to jump to that moment in the audio. Download as VTT or JSON for word-level granularity, or as SRT for segment-level subtitle format.',
        },
        {
          q: 'How accurate is the transcript for a noisy WAV?',
          a: 'Background noise (wind, HVAC, traffic, tape hiss) reduces accuracy noticeably. Run the WAV through Audacity → Effect → Noise Reduction or the free Adobe Podcast Enhance tool before uploading. The cleaned version typically transcribes much better.',
        },
        {
          q: 'Will my original WAV file be changed in any way?',
          a: 'No. The file you upload is read by our backend, sent to the transcription provider, and discarded after the response comes back. Your original file on your computer is never modified. We never write a transformed copy back to you.',
        },
        {
          q: 'What can I do with the transcript after it is generated?',
          a: 'Edit wrong words inline before exporting. Then download as TXT (plain text), SRT or VTT (subtitle format with timestamps), or DOCX (Word document). Copy directly to clipboard if you just need to paste somewhere. The AI summary appears alongside the transcript automatically.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Upload your WAV and get an editable transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Drop the file, wait under a minute, copy or export the text.
            Free for files up to 60 MB. No signup.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a WAV now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Format-agnostic transcription for any audio file.' },
        { href: '/flac-to-text', label: 'FLAC to Text', desc: 'Lossless compressed, smaller files than WAV.' },
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'iPhone Voice Memos and Apple-ecosystem recordings.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'Walkthrough for shrinking large WAVs before upload.' },
      ]}
    />
  )
}
