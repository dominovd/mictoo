import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'FLAC to Text: Lossless Audio Transcription for Archives and Hi-Res Sources | Mictoo',
  description:
    'Upload a FLAC file from a CD rip, Tidal download, oral history archive, or hi-res audiophile source, get an editable transcript with timestamps in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/flac-to-text',
    languages: {
      'en': 'https://mictoo.com/flac-to-text',
      'fr': 'https://mictoo.com/fr/flac-to-text',
      'de': 'https://mictoo.com/de/flac-to-text',
      'es': 'https://mictoo.com/es/flac-to-text',
      'ru': 'https://mictoo.com/ru/flac-to-text',
      'it': 'https://mictoo.com/it/flac-to-text',
      'pt': 'https://mictoo.com/pt/flac-to-text',
      'pl': 'https://mictoo.com/pl/flac-to-text',
      'ja': 'https://mictoo.com/ja/flac-to-text',
      'ko': 'https://mictoo.com/ko/flac-to-text',
      'x-default': 'https://mictoo.com/flac-to-text',
    },
  },
  openGraph: {
    title: 'FLAC to Text: Lossless Audio Transcription | Mictoo',
    description: 'Upload FLAC from CD rips, Tidal/Qobuz, oral history archives, hi-res sources. Editable transcript in seconds.',
    url: 'https://mictoo.com/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC to Text: Lossless Audio Transcription',
    description: 'Upload FLAC from CD rips, Tidal/Qobuz, archives, hi-res sources. Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Lossless · Free"
      h1={
        <>
          FLAC to Text
          <br />
          <span className="text-brand-600">Lossless, smaller than WAV, same quality</span>
        </>
      }
      subtitle="Built for archival work and audiophile sources: CD rips, library oral histories, Tidal and Qobuz downloads, hi-res masters. Drop the FLAC in, transcript comes back fast."
      valueBlock={
        <article className="prose-content">
          <p>
            FLAC is lossless compression. Same audio as WAV bit-for-bit,
            file roughly half the size. It is what serious archives and
            audiophile workflows standardise on, because you preserve the
            original recording exactly while staying under storage budgets.
          </p>
          <p>
            For transcription that matters mostly in two scenarios: long
            oral history projects where preserving the master is part of the
            point, and recordings sourced from CD or hi-res streaming where
            FLAC is the native format. We accept FLAC directly, no MP3
            round-trip in the middle.
          </p>
          <p className="text-sm text-slate-500">
            60 MB upload limit, which covers about 30 minutes of CD-quality
            FLAC. For longer archival pieces, see <a href="/how-to-split-audio" className="text-brand-600 hover:underline">how to split audio</a> or convert a temporary mono copy with <a href="/how-to-compress-audio" className="text-brand-600 hover:underline">how to compress audio</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '💿',
          title: 'Upload your FLAC',
          desc: 'CD rip, archival master, Tidal or Qobuz download, hi-res audiophile source. Standard FLAC, also FLAC inside an OGG container (.oga or .ogg). Both work.',
        },
        {
          icon: '🔊',
          title: 'We decode FLAC server-side',
          desc: 'Whisper does not read FLAC natively, but we decode it on our backend before sending the raw audio to the model. You do not see the decode step, it just adds a second or two.',
        },
        {
          icon: '📜',
          title: 'Editable transcript + exports',
          desc: 'Get TXT, SRT, VTT, or DOCX. For oral history projects, the editable view lets you fix proper names before exporting the final searchable archive copy.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for FLAC',
        bullets: [
          {
            title: 'Direct FLAC decoding',
            desc: 'Most free transcribers will ask you to convert FLAC to MP3 or WAV first. We decode FLAC on the server before sending to Whisper, so you skip the conversion step entirely and avoid the small quality drop a re-encode introduces.',
          },
          {
            title: 'Same transcript as WAV, half the upload',
            desc: 'FLAC is lossless. The decoded audio is bit-for-bit identical to the original WAV. Transcription accuracy is the same. The only difference is file size: FLAC at maximum compression is typically 45-60% of the equivalent WAV.',
          },
          {
            title: 'Works with FLAC inside OGG containers',
            desc: 'Some archives ship FLAC inside an OGG container (file extension .oga or .ogg with FLAC codec). We detect the container automatically and decode appropriately. Same workflow either way.',
          },
          {
            title: 'Suited to long-form archival work',
            desc: 'For projects where the FLAC master is the long-term preservation copy (oral history, library digitisation, ethnomusicology recordings), transcribe directly from the master rather than from a degraded derivative.',
          },
          {
            title: 'Metadata is read, never rewritten',
            desc: 'Your FLAC Vorbis comments (title, artist, performer, archival catalog numbers) stay exactly as they are. We read the audio, ignore the tags, never write the file back. The master copy on your drive is untouched.',
          },
        ],
      }}
      useCases={{
        title: 'Where FLAC files actually come from',
        items: [
          {
            title: 'CD rips for archive',
            desc: 'When digitising a CD collection, the standard practice is to rip to FLAC (rather than MP3 or AAC). Audiobooks, recorded lectures distributed on CD, interview compilations, all common archive sources.',
          },
          {
            title: 'Tidal HiFi and Qobuz downloads',
            desc: 'Audiophile streaming services serve lossless FLAC. Useful when you have downloaded a long-form interview or podcast for offline listening and want a searchable text version.',
          },
          {
            title: 'Library and museum oral histories',
            desc: 'Oral history programs at universities, libraries, museums almost always standardise on FLAC for the master files. Transcripts make these collections searchable, citable, and accessible.',
          },
          {
            title: 'Audiobook production masters',
            desc: 'Narrators delivering finished audiobooks to publishers often hand over FLAC masters. Transcribing the FLAC lets you generate a matching ebook text or printable script.',
          },
          {
            title: 'Field recordings in FLAC mode',
            desc: 'Newer Tascam, Zoom, and Sound Devices recorders can write directly to FLAC for longer recording time on the same card vs WAV. Naturalist recordings, ethnographic fieldwork, conservation studies.',
          },
          {
            title: 'Personal archive projects',
            desc: 'Family voice recordings preserved in FLAC for the next generation. Transcribe the FLAC once, store the text alongside, the archive becomes searchable forever even if a future grandchild cannot play the audio.',
          },
        ],
      }}
      proTips={{
        title: 'FLAC-specific recommendations',
        tips: [
          {
            title: 'FLAC compression level does not affect quality',
            desc: 'FLAC has compression levels from -0 (fastest, larger file) to -8 (slowest, smallest file). All levels produce identical decoded audio. For archives, use -8 to minimise storage. For working files where re-encoding speed matters, -5 (the default) is fine.',
          },
          {
            title: 'Keep the FLAC master, upload a derivative for transcription only',
            desc: 'Your 24-bit 96 kHz archival FLAC is twice the size of the same content at 16-bit 44.1 kHz with zero benefit for transcription. Use ffmpeg or Audacity to make a 16-bit 16 kHz mono FLAC derivative just for the upload, keep the master on your drive.',
          },
          {
            title: 'For hi-res audiophile sources (24-bit 192 kHz), downsample first',
            desc: 'Hi-res sources can produce huge FLAC files (200+ MB for 30 minutes). Whisper resamples to 16 kHz internally, so the extra resolution is discarded anyway. ffmpeg one-liner: ffmpeg -i input.flac -ac 1 -ar 16000 -sample_fmt s16 output.flac.',
          },
          {
            title: 'Preserve archival metadata before re-encoding',
            desc: 'If you re-encode the FLAC for upload, the Vorbis comments (catalog numbers, archive IDs, performer notes) may not survive the re-encode. Either keep the original on your drive separately, or use ffmpeg -map_metadata 0 to copy tags.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>How FLAC compression actually works</h2>
          <p>
            FLAC stands for Free Lossless Audio Codec. The trick that makes
            it useful is that it compresses audio without throwing anything
            away. After decoding, the output is the same as the original
            uncompressed audio, sample for sample. Compare that to MP3 or
            AAC, which discard frequency content they predict you will not
            notice.
          </p>
          <p>
            FLAC achieves smaller files in two stages. First, linear
            prediction estimates each sample from the recent past samples
            and stores only the prediction error (usually a small number).
            Then entropy coding (Rice coding, similar to Huffman in spirit)
            packs those small numbers into fewer bits. Music with predictable
            waveforms compresses well, very noisy material compresses less.
          </p>
          <h3>FLAC vs ALAC vs Apple Lossless</h3>
          <p>
            ALAC (Apple Lossless Audio Codec) is the same idea as FLAC,
            done independently by Apple. Both achieve similar compression
            ratios (usually within a few percent of each other on the same
            source). FLAC has wider tooling support outside the Apple
            ecosystem; ALAC dominates inside iTunes, Apple Music, Voice
            Memos Lossless mode. We accept both, the transcript is the same.
          </p>
          <h3>Why FLAC did not win consumer adoption</h3>
          <p>
            FLAC was published in 2001, free and open-source. Yet most
            consumer streaming runs on AAC, MP3, or Opus, not FLAC. The
            short reason: for ordinary listening on phones and laptops,
            lossy formats sound identical to most people while being a
            fraction of the size. FLAC wins where the listener can actually
            tell the difference (high-end home audio) or where preservation
            matters (libraries, archives), neither of which is the consumer
            mass market.
          </p>
          <h3>FLAC for speech recognition: helpful or unnecessary?</h3>
          <p>
            For most speech recordings, FLAC vs MP3 makes no measurable
            difference to Whisper accuracy. Where lossless starts to help
            is at the edges: very quiet voices, heavy background noise, or
            recordings that are already marginal. In those cases the
            high-frequency tail FLAC preserves can carry the consonant
            information Whisper uses to disambiguate similar words. Most
            podcast and interview audio sits well inside the comfort zone
            where MP3 and FLAC produce identical transcripts.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            FLAC vs other audio formats
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            All four work in Mictoo. FLAC is the right choice when
            preservation matters more than the smallest file.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">FLAC</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Compression</dt><dd>Lossless</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>CD rips, archives, hi-res</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>About half of WAV</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Direct, same accuracy as WAV</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/wav-to-text" className="hover:text-brand-600">WAV →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Compression</dt><dd>None (uncompressed PCM)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>DAW, field recorders, BWF</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Largest</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Identical to FLAC</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Compression</dt><dd>Lossy</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>Podcasts, downloads, web audio</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Smallest</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Same accuracy at 128 kbps+</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/m4a-to-text" className="hover:text-brand-600">M4A →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Compression</dt><dd>Lossy AAC (or lossless ALAC)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Typical source</dt><dd>iPhone, Apple ecosystem</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">File size</dt><dd>Small</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">For transcription</dt><dd>Same accuracy as FLAC</dd></div>
              </dl>
            </div>
          </div>
        </>
      }
      faq={[
        {
          q: 'Will my FLAC file work without converting to WAV first?',
          a: 'Yes. We decode FLAC on the server before sending to Whisper. You upload the FLAC directly, no manual conversion step. The decoded audio is bit-for-bit identical to what you would get from the original WAV, so transcription quality is the same.',
        },
        {
          q: 'Is FLAC actually better than MP3 for transcription accuracy?',
          a: 'For clean speech recordings, no. Whisper transcribes 128 kbps MP3 and FLAC of the same source with the same accuracy. FLAC starts to matter for marginal audio: very quiet voices, heavy background noise, or already-degraded sources where every bit of detail helps.',
        },
        {
          q: 'How much smaller is FLAC than WAV?',
          a: 'Typically 45-60% of the WAV size, depending on the audio content. Predictable waveforms (clean speech) compress more than chaotic ones (noise, music). A 30-minute stereo CD-quality WAV is around 300 MB, the FLAC of the same source is usually 130-180 MB.',
        },
        {
          q: 'Do you support FLAC inside an OGG container?',
          a: 'Yes. FLAC inside OGG (extensions .oga or .ogg with FLAC codec) is detected and decoded the same way as a regular .flac file. Some Linux audio tools and archival workflows ship FLAC this way.',
        },
        {
          q: 'My FLAC has detailed Vorbis comments (catalog data, performer notes). Will they survive?',
          a: 'We never write your original file back, so the metadata in your master FLAC on your drive stays exactly as it was. The transcript download is plain text (or SRT/VTT/DOCX), it does not carry FLAC tags. Match the transcript against your catalog metadata on your side if you need to.',
        },
        {
          q: 'Can I transcribe a hi-res 24-bit 192 kHz FLAC directly?',
          a: 'You can, but Whisper resamples to 16 kHz mono internally anyway, so the extra resolution is discarded. For files near the 60 MB cap, downsampling to 16-bit 16 kHz mono before upload makes the file roughly 12x smaller with no transcript quality loss.',
        },
        {
          q: 'What about FLAC ripped from a noisy vinyl or cassette source?',
          a: 'Surface noise (tape hiss, vinyl crackle, wow and flutter) reduces transcription accuracy. Run the FLAC through a noise reduction pass first (Audacity Effect, Noise Reduction with a noise-only sample, or Adobe Podcast Enhance free web tool), then upload the cleaned version.',
        },
        {
          q: 'My library oral history archive is in FLAC. Can I batch transcribe everything?',
          a: 'Not in one click yet. Right now you transcribe one file at a time through the web interface. Batch transcription via the API is on the roadmap for the Pro tier. For now, transcribe files one at a time and save each transcript alongside its source FLAC.',
        },
        {
          q: 'Will the transcript have speaker labels (interviewer vs interviewee)?',
          a: 'Not automatically. Whisper does not separate speakers out of the box. If you have separate channels for each speaker (multitrack FLAC, one channel per speaker), transcribe each channel separately and label by hand. Speaker diarization is planned for the Pro tier.',
        },
        {
          q: 'Does FLAC compression level affect transcription quality?',
          a: 'No. FLAC compression levels (-0 through -8) all produce identical decoded audio. They only affect encoding speed and final file size. Use level -8 for archive masters (smallest file, slowest encode), level -5 (default) for working copies.',
        },
        {
          q: 'How long does a FLAC transcription take?',
          a: 'A 30-minute FLAC usually finishes in 45-70 seconds end to end. The decode step adds 5-15 seconds compared to a WAV of the same audio. Upload time is the larger factor for big files: 100 MB on typical home upload speeds (50 Mbps) takes around 16 seconds.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Drop your FLAC and get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            CD rips, archival masters, hi-res streaming downloads. Free for files up to 60 MB.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a FLAC now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/wav-to-text', label: 'WAV to Text', desc: 'Uncompressed PCM if you have the source as WAV.' },
        { href: '/ogg-to-text', label: 'OGG to Text', desc: 'For OGG containers with Vorbis, Opus, or FLAC codec.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Format-agnostic transcription for any audio file.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When your FLAC is too big for direct upload.' },
      ]}
    />
  )
}
