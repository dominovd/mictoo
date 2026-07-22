import FormatPageLayout from '@/components/FormatPageLayout'

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
    <FormatPageLayout
      badge="WAV · PCM · BWF · Free"
      h1First="WAV to Text"
      h1Second="Studio bounces, field recordings, DAW exports"
      subtitle="WAV is the format your DAW bounces, your field recorder writes to card, and broadcast studios standardise on. Drop a PCM or BWF WAV and get a transcript with timestamps in seconds. Free, no signup."
      highlightFormat="wav"
      previewFileName="field-recording.wav"
      previewWordCount={166}
      previewDurationLabel="14:22"
      previewLines={[
        { t: '0:00',  line: 'Location scout, day three. We are set up on the east side of the ridge at about six thousand feet.' },
        { t: '0:09',  line: 'Wind is coming in gusts from the west, so I have the blimp on and rolled off at eighty hertz.' },
        { t: '0:18',  line: 'Levels are peaking around minus twelve on the interview mic, which feels right for this ambience.' },
        { t: '0:28',  line: 'Standing next to me is the ranger who has worked this section of the park for twenty-two years.' },
        { t: '0:37',  line: 'When people ask what changed the most out here, I always start with the fires in the summer of 2020.' },
        { t: '0:47',  line: 'The forest never looked quite the same after that, and the wildlife patterns took years to reset.' },
        { t: '0:57',  line: 'Can you walk me through what those first weeks after the fires were like on the ground?' },
        { t: '1:05',  line: 'Sure. The smoke stayed for about six weeks total, and visibility never got above a half mile.' },
      ]}
      whyTitle="Why Mictoo for WAV transcription"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM and BWF, no conversion',
          desc: 'Standard 16/24/32-bit PCM WAV and Broadcast Wave (BWF) with metadata. We accept the file as-is with no conversion step required.',
        },
        {
          icon: 'target',
          title: 'No lossy codec artifacts',
          desc: 'Uncompressed PCM does not add lossy compression artifacts. A clean recording can be a strong source, but room noise and mic placement still matter.',
        },
        {
          icon: 'gear',
          title: 'Any sample rate, any bit depth',
          desc: '44.1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper resamples to 16 kHz mono internally, so your source rate does not affect quality.',
        },
        {
          icon: 'clip',
          title: 'BWF metadata is preserved on your side',
          desc: 'We ignore the iXML/bext metadata blocks during transcription. Your original WAV file (and its metadata) is never modified.',
        },
      ]}
      scenariosTitle="When WAV to text is the right fit"
      scenarios={[
        {
          icon: 'mic',
          title: 'Field recorder capture',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. Whatever the field kit writes to card, drop the WAV for a clean transcript.',
        },
        {
          icon: 'waveform',
          title: 'DAW bounce for reference',
          desc: 'Rough mix or vocal-only bounce from Logic, Pro Tools, or Ableton. Get a text version of the lyrics or dialogue for reference.',
        },
        {
          icon: 'briefcase',
          title: 'Broadcast interview',
          desc: 'BWF recording from a radio interview or podcast studio. Transcript feeds show notes, quotes, and archival documentation.',
        },
        {
          icon: 'book',
          title: 'Oral history archive',
          desc: 'Long-form oral history recording captured to WAV for preservation. Transcript makes the archive searchable and quotable.',
        },
        {
          icon: 'users',
          title: 'Deposition and legal recording',
          desc: 'Recorded proceedings captured as uncompressed WAV for evidentiary quality. Transcript for review and citation.',
        },
        {
          icon: 'sparkles',
          title: 'Voiceover work',
          desc: 'ADR pass, narration recording, or voiceover session bounced to WAV. Transcript confirms the read matches the script.',
        },
      ]}
      technicalTitle="What is inside a WAV file"
      technicalIntro="WAV is a container commonly used for uncompressed PCM audio. Its extra resolution is useful for production and archiving, while recording conditions still determine how intelligible the speech is."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM and Broadcast Wave',
          desc: 'Standard PCM WAV and BWF recordings can carry the same spoken audio; BWF adds production metadata around it.',
        },
        {
          icon: 'gear',
          title: 'Sample rate and bit depth',
          desc: 'High sample rates and bit depths preserve production headroom, but they cannot repair noise, clipping, or a distant microphone.',
        },
        {
          icon: 'cloud',
          title: 'Large by design',
          desc: 'Uncompressed WAV grows quickly. For long interviews, split the recording or make a smaller mono speech copy if needed.',
        },
        {
          icon: 'clip',
          title: 'Metadata stays outside',
          desc: 'BWF, iXML, and cue metadata are not added to the transcript, and the original source file is not modified.',
        },
      ]}
      faq={[
        {
          q: 'What kinds of WAV files does Mictoo accept?',
          a: 'Standard PCM WAV at 16-bit, 24-bit, or 32-bit float, any sample rate (44.1 kHz through 192 kHz), mono or stereo. Broadcast Wave (BWF) is also fully supported with iXML/bext metadata preserved in your original file.',
        },
        {
          q: 'Does higher bit depth or sample rate improve the transcript?',
          a: 'No. Whisper resamples all audio to 16 kHz mono internally before transcription, so bit depth and sample rate beyond that ceiling do not affect accuracy. Recording quality (mic choice, room, noise floor) matters much more than the container spec.',
        },
        {
          q: 'My studio WAV is over 60 MB. What now?',
          a: 'A stereo 24-bit 48 kHz WAV is around 17 MB per minute, so any recording over about 3 minutes hits the cap. Convert to 16 kHz mono WAV (or 128 kbps MP3) with ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. Transcription quality is identical.',
        },
        {
          q: 'Do you keep my WAV file?',
          a: 'No. The file streams to the transcription provider, gets processed once, and is dropped from memory. We never write it to disk. The transcript is only stored if you sign in and add it to your history.',
        },
        {
          q: 'Can I keep the original BWF timestamps in the transcript?',
          a: 'The transcript uses relative timestamps from the start of the file (0:00 baseline). BWF absolute-time metadata is not carried into the text output. Match the two on your side if you need scene-timecode alignment.',
        },
        {
          q: 'Does Mictoo transcribe non-English WAV?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short recordings or unusual accents, set the language explicitly in the dropdown for cleaner first-pass detection.',
        },
        {
          q: 'Can I get SRT captions for a WAV recording?',
          a: 'Yes. Download SRT or VTT after transcription. Both formats include timestamps aligned to the original WAV timeline for use in video editors or accessibility tools.',
        },
        {
          q: 'How long does a WAV transcription take?',
          a: 'A 15-minute WAV typically finishes in 20-40 seconds end to end. Larger files near the upload cap take 40-80 seconds. Upload speed is often the longer step since WAV files are big.',
        },
        {
          q: 'Do you support 32-bit float recordings from Sound Devices?',
          a: 'Yes. 32-bit float WAV files from MixPre, F-series, or Zoom F-series recorders are accepted and transcribed the same way as standard PCM.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original transcript.',
        },
      ]}
      ctaHeadline="Drop your WAV, get a clean transcript"
      ctaSubtitle="PCM, BWF, any sample rate. Studio bounces, field recordings, DAW exports."
      ctaButton="Upload WAV to transcribe"
    />
  )
}
