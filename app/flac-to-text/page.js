import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'FLAC to Text — Free FLAC Audio Transcription Online | Mictoo',
  description:
    'Free FLAC to text converter. Upload any FLAC audio file and get a clean AI transcript in seconds. Lossless compressed audio, 50+ languages, no signup.',
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
    title: "FLAC to Text — Free FLAC Audio Transcription Online | Mictoo",
    description: "Free FLAC to text converter. Upload any FLAC audio file and get a clean AI transcript in seconds. Lossless compressed audio, 50+ languages, no signup.",
    url: "https://mictoo.com/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC to Text — Free FLAC Audio Transcription Online | Mictoo",
    description: "Free FLAC to text converter. Upload any FLAC audio file and get a clean AI transcript in seconds. Lossless compressed audio, 50+ languages, no signup.",
    images: ["https://mictoo.com/opengraph-image"],
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
          <span className="text-brand-600">Free FLAC Transcription</span>
        </>
      }
      subtitle="Free AI transcription for FLAC files. Lossless audio, smaller than WAV, identical accuracy. Drop the file, get the text in seconds."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the FLAC',
          desc: 'Any FLAC file works. 16-bit, 24-bit, any common sample rate, mono or stereo. CD rips, archival recordings, audiophile masters, lossless podcast downloads.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the FLAC and converts speech to text. A 30-minute file finishes in around a minute. We decode FLAC server-side, no client conversion needed.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser, copy to clipboard, or download as TXT or SRT. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for FLAC transcription',
        bullets: [
          {
            title: 'Native FLAC support',
            desc: 'A lot of free transcribers reject FLAC and tell you to convert to MP3 first. We decode FLAC directly on our backend, so you save a step.',
          },
          {
            title: 'Lossless quality, smaller files than WAV',
            desc: 'FLAC is lossless compressed audio. Identical quality to WAV, but typically 50 to 60 percent of the file size. So a 30-minute file that would be 300 MB as WAV is around 150 MB as FLAC.',
          },
          {
            title: 'Accuracy matches WAV',
            desc: 'Both lossless. Both produce identical transcripts. The only difference is file size and the bit of CPU we spend decoding the FLAC before passing it to Whisper.',
          },
          {
            title: 'Common in archival and audiophile workflows',
            desc: 'If you store your audio library in FLAC for preservation reasons, transcribing directly from FLAC saves you from creating duplicate MP3 copies just for the transcription step.',
          },
          {
            title: 'No file is stored',
            desc: 'Your FLAC streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Where FLAC files come from',
        items: [
          {
            title: 'CD rips and archival audio',
            desc: 'CDs are typically ripped to FLAC for long-term preservation. If you have an audiobook, lecture series, or interview archived from CD, the source files are probably FLAC.',
          },
          {
            title: 'Audiophile podcast and interview hosts',
            desc: 'Some shows distribute their highest-quality files in FLAC for hi-fi listeners. If you grabbed one and want to transcribe it, drop it in directly.',
          },
          {
            title: 'Field recorders that support FLAC',
            desc: 'Newer Tascam, Zoom, and Sound Devices recorders support FLAC mode for longer recording on the same card (vs WAV). Useful for nature recording, ethnographic field work, or long lectures.',
          },
          {
            title: 'Audio preservation projects',
            desc: 'Libraries, museums, and family archive projects often standardize on FLAC for the master files. Transcribe directly from the master.',
          },
          {
            title: 'High-quality voice over and audiobook production',
            desc: 'Some narrators deliver lossless masters. FLAC keeps the audio editable while being smaller than WAV. Useful for transcribing the read text or generating SRT subtitles for an audiobook video version.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for FLAC transcription',
        tips: [
          {
            title: 'Mono FLAC is half the size, identical for speech',
            desc: 'If your FLAC is stereo and you only have one voice, convert to mono before upload. In Audacity: Tracks, Mix, Mix Stereo Down to Mono, then Export as FLAC. File size drops by half with no transcription difference.',
          },
          {
            title: '16-bit is enough for transcription',
            desc: 'Whisper internally resamples to 16 kHz mono. If your FLAC is 24-bit or 32-bit, downconverting to 16-bit before upload saves space with no accuracy loss for transcription. The extra bit depth is for editing headroom, not for the transcript.',
          },
          {
            title: 'For really big FLACs (over 60 MB), just transcode to MP3',
            desc: 'A 60-minute FLAC at full quality can easily hit 200 MB. For transcription, a 64 kbps mono MP3 of the same audio is around 28 MB with identical transcript accuracy. Use Audacity or any audio app to make the MP3 just for the upload.',
          },
          {
            title: 'Lossless does not mean noise-free',
            desc: 'FLAC preserves whatever was in the original recording, including tape hiss, vinyl crackle, room noise. If your FLAC was made from a noisy source, denoise before upload (Audacity Noise Reduction or Adobe Podcast Enhance).',
          },
          {
            title: 'For archival projects, transcribe the FLAC, store the transcript next to it',
            desc: 'Plain TXT files take up almost no space. Storing the transcript alongside the FLAC makes the archive searchable forever. We have customers using this workflow for university lecture archives and oral history projects.',
          },
          {
            title: 'FLAC metadata (tags) does not affect transcription',
            desc: 'Vorbis comments and other FLAC metadata are ignored by Whisper. Album art and other embedded data also do not matter. Only the audio content gets transcribed.',
          },
        ],
      }}
      faq={[
        {
          q: 'What FLAC formats do you support?',
          a: 'Any standard FLAC. 16-bit, 24-bit, mono or stereo, sample rates from 8 kHz to 192 kHz. Embedded metadata (Vorbis comments, album art) is ignored.',
        },
        {
          q: 'Is FLAC better than MP3 for transcription?',
          a: 'Only marginally, and only for very low-quality MP3s. For normal-quality MP3 (128 kbps and up), transcript accuracy is the same. FLAC is better if you also want to keep the audio for editing or archival.',
        },
        {
          q: 'My FLAC is over 60 MB. What now?',
          a: 'Two options. Convert to mono and 16-bit if it is not already (FLAC supports both, and most audio apps export FLAC). Or transcode to a 64 kbps mono MP3 for the smallest possible upload with no accuracy loss.',
        },
        {
          q: 'How long does a FLAC take to transcribe?',
          a: 'About 1 to 2 percent of the audio length, plus a small overhead for decoding FLAC. A 30-minute FLAC finishes in around 45 to 70 seconds.',
        },
        {
          q: 'Will my FLAC be stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets transcribed, then is discarded. The providers we use do not train on API data.',
        },
        {
          q: 'What languages do you support for FLAC?',
          a: 'Over 50 languages with auto-detect. For files under 5 minutes or files that open with silence or music, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get timestamps from a FLAC?',
          a: 'Yes. Download as SRT (subtitle file) and you get timestamps every few seconds. Useful for archival recordings where you want to jump back to a specific moment.',
        },
        {
          q: 'Does FLAC compress the audio in a lossy way?',
          a: 'No. FLAC is lossless. It uses prediction and entropy coding to make the file smaller, but the decoded audio is bit-for-bit identical to the original WAV. Quality is preserved exactly.',
        },
        {
          q: 'Can I transcribe a FLAC of a vinyl rip or tape recording?',
          a: 'Yes, but expect lower accuracy due to background noise. Run the FLAC through a noise reduction pass first (Audacity Noise Reduction, iZotope RX, or Adobe Podcast Enhance) before uploading.',
        },
        {
          q: 'Will my FLAC transcript have speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization out of the box. Add labels manually based on conversation flow, or upload separate FLAC tracks per speaker if you have them.',
        },
        {
          q: 'Can I use the SRT to add subtitles to a video that uses this FLAC?',
          a: 'Yes. The SRT timestamps are in absolute time (milliseconds), so they align correctly against any video that uses the same audio.',
        },
        {
          q: 'What about FLAC inside an OGG container (.oga)?',
          a: 'We support OGG with various codecs (Vorbis, Opus, FLAC). Drop the .oga file directly. We decode it server-side.',
        },
      ]}
      relatedLinks={[
        { href: '/wav-to-text', label: 'WAV to Text', desc: 'For uncompressed WAV files.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/ogg-to-text', label: 'OGG to Text', desc: 'For OGG container files (Vorbis, Opus, FLAC inside OGG).' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When your FLAC is too big for direct upload.' },
      ]}
    />
  )
}
