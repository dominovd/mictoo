import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'FLAC to Text: Lossless Transcription for Spoken-Word Archives | Mictoo',
  description:
    'Upload a FLAC oral-history interview, field recording, or preservation copy and get an editable transcript with timestamps.',
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
    description: 'Upload a FLAC oral-history interview, field recording, or preservation copy. Get an editable transcript with timestamps.',
    url: 'https://mictoo.com/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC to Text: Lossless Audio Transcription',
    description: 'Upload a FLAC spoken-word archive or field recording and get an editable transcript with timestamps.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FlacToTextPage() {
  return (
    <FormatPageLayout
      badge="FLAC · Lossless · Free"
      h1First="FLAC to Text"
      h1Second="Lossless audio for spoken-word archives"
      subtitle="FLAC is used by oral history archives, field recorders, and preservation workflows to store audio without lossy compression. Drop the .flac file, keep the lossless master, and get a transcript with timestamps."
      highlightFormat="flac"
      previewFileName="archival-recording.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'This recording was made at the family home in October of nineteen seventy-eight.' },
        { t: '0:07',  line: 'The subject is my grandmother, born in Kraków in nineteen fourteen, immigrated to New York in nineteen thirty-nine.' },
        { t: '0:18',  line: 'The recording quality is limited by the original cassette source. Please keep the interviewer volume in mind.' },
        { t: '0:27',  line: 'Grandma, can you tell me about the day you left Kraków for the last time?' },
        { t: '0:34',  line: 'It was raining. That is what I remember first. Everyone was standing on the platform in the rain.' },
        { t: '0:44',  line: 'My father had two suitcases and my mother had one. I only had a small bag that my aunt had given me.' },
        { t: '0:54',  line: 'The train was supposed to leave at six in the morning but it did not leave until almost ten.' },
        { t: '1:04',  line: 'And when it finally left, nobody on that platform ever saw the city the same way again.' },
      ]}
      whyTitle="Why Mictoo for FLAC transcription"
      whyCards={[
        {
          icon: 'target',
          title: 'No additional lossy compression',
          desc: 'FLAC preserves the recorded signal without MP3-style compression loss. Transcript accuracy still depends on speech clarity and the original capture.',
        },
        {
          icon: 'gear',
          title: 'Any sample rate, any bit depth',
          desc: '44.1 kHz through 192 kHz, 16-bit through 24-bit. Whisper resamples to 16 kHz mono internally, so your source rate does not affect quality.',
        },
        {
          icon: 'book',
          title: 'Preservation-friendly workflow',
          desc: 'Your original FLAC file is never modified. We stream it to the transcription provider, extract audio in memory, and drop it after.',
        },
        {
          icon: 'clip',
          title: 'FLAC-inside-OGG also handled',
          desc: 'Native FLAC (magic bytes fLaC) and FLAC-in-OGG (OggS with a FLAC stream) both work. No manual repackaging.',
        },
      ]}
      scenariosTitle="When FLAC to text is the right fit"
      scenarios={[
        {
          icon: 'book',
          title: 'Oral history archive',
          desc: 'Long-form interview preserved as lossless FLAC for the archive. Transcript makes it searchable, quotable, and citation-ready.',
        },
        {
          icon: 'briefcase',
          title: 'Institutional recording',
          desc: 'Museum, library, or university-recorded lecture or symposium held as FLAC for preservation. Transcript is the access layer.',
        },
        {
          icon: 'mic',
          title: 'CD-ripped interview or podcast',
          desc: 'Older interview or podcast episode you ripped from CD as FLAC. Drop the file for a modern transcript.',
        },
        {
          icon: 'waveform',
          title: 'Field recording, lossless capture',
          desc: 'Field recorder or handheld capture written as FLAC to save card space without losing quality. Full transcription with timestamps.',
        },
        {
          icon: 'sparkles',
          title: 'Restored interview collections',
          desc: 'Digitised tape or disc interviews stored as FLAC after restoration. Add searchable text while retaining the preservation copy.',
        },
        {
          icon: 'users',
          title: 'Deposition preservation copy',
          desc: 'Legal recording preserved as FLAC for archival integrity. Transcript for review, citation, and downstream discovery.',
        },
      ]}
      technicalTitle="What lossless FLAC does—and does not—preserve"
      technicalIntro="FLAC preserves the source signal without lossy compression. It protects an archive copy, but it cannot restore words already obscured by noise, clipping, overlap, or microphone distance."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Lossless source',
          desc: 'Decoding returns the recorded signal without MP3-style compression loss, which is useful for preservation workflows.',
        },
        {
          icon: 'ear',
          title: 'No automatic cleanup',
          desc: 'A lossless copy of a noisy recording is still noisy. Speech clarity at capture remains the main accuracy factor.',
        },
        {
          icon: 'clip',
          title: 'Vorbis comments separate',
          desc: 'Artist, archive ID, and other tags are not inserted into the transcript. Keep that mapping in your archive catalogue.',
        },
        {
          icon: 'cloud',
          title: 'Efficient archive copy',
          desc: 'FLAC is smaller than uncompressed WAV but can still be large for long sessions. Split lengthy recordings if required.',
        },
      ]}
      faq={[
        {
          q: 'What FLAC files does Mictoo accept?',
          a: 'Native FLAC (magic bytes fLaC) and FLAC-in-OGG containers, mono or stereo, any sample rate up to 192 kHz, and 16 or 24-bit depth. We accept the file directly without conversion.',
        },
        {
          q: 'Does lossless input produce a better transcript?',
          a: 'For clean source recordings, lossless input matches the ceiling of what Whisper can extract. For noisy or degraded source (a cassette rip, for example), lossless preserves the degradation faithfully but does not fix it. Recording quality matters more than container.',
        },
        {
          q: 'My FLAC file is over 60 MB. What now?',
          a: 'A stereo 44.1 kHz 16-bit FLAC is around 5 MB per minute, so any recording over about 12 minutes hits the cap. If signed in, we auto-split up to about 3 hours. Otherwise, convert to 16 kHz mono FLAC or MP3 first: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'Can I keep the FLAC metadata (album, artist, year)?',
          a: 'The transcript is plain text without FLAC metadata. Vorbis comment tags are ignored during transcription. Keep the metadata mapping in your archive system if you need it downstream.',
        },
        {
          q: 'Does Mictoo transcribe non-English FLAC?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For unusual accents or older recordings, set the language explicitly for cleaner first-pass detection.',
        },
        {
          q: 'Can I get SRT captions for a video that uses this audio?',
          a: 'Yes. Download SRT or VTT after transcription. Timestamps align to the original FLAC timeline for use in video editors or accessibility tools.',
        },
        {
          q: 'Is my FLAC file kept on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We never write the audio to disk. Transcripts are only stored if you sign in.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original.',
        },
        {
          q: 'How long does a FLAC transcription take?',
          a: 'A 15-minute FLAC typically finishes in 25-45 seconds end to end. Larger files near the upload cap take 45-90 seconds. Upload speed is often the longer step since FLAC files are big.',
        },
        {
          q: 'Do you accept 24-bit hi-res FLAC?',
          a: 'Yes. 24-bit FLAC at 96 kHz or 192 kHz is fully supported. Whisper resamples internally, so hi-res does not improve accuracy over 16-bit 44.1 kHz for clean audio, but it does not hurt either.',
        },
      ]}
      ctaHeadline="Drop your FLAC, get an archive-ready transcript"
      ctaSubtitle="Lossless source in, searchable text out. Oral history, field recordings, and preservation copies."
      ctaButton="Upload FLAC to transcribe"
    />
  )
}
