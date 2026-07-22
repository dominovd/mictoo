import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'AAC to Text: Raw AAC and ADTS Audio Transcription | Mictoo',
  description:
    'Upload raw .aac files (ADTS stream or ADIF), get an editable transcript in seconds. Common for podcast downloads, broadcast archives, ripped iPhone audio.',
  alternates: {
    canonical: 'https://mictoo.com/aac-to-text',
    languages: {
      'en': 'https://mictoo.com/aac-to-text',
      'fr': 'https://mictoo.com/fr/aac-to-text',
      'de': 'https://mictoo.com/de/aac-to-text',
      'es': 'https://mictoo.com/es/aac-to-text',
      'ru': 'https://mictoo.com/ru/aac-to-text',
      'it': 'https://mictoo.com/it/aac-to-text',
      'pt': 'https://mictoo.com/pt/aac-to-text',
      'pl': 'https://mictoo.com/pl/aac-to-text',
      'ja': 'https://mictoo.com/ja/aac-to-text',
      'ko': 'https://mictoo.com/ko/aac-to-text',
      'x-default': 'https://mictoo.com/aac-to-text',
    },
  },
  openGraph: {
    title: 'AAC to Text: Raw AAC and ADTS Audio Transcription | Mictoo',
    description: 'Upload raw .aac files (ADTS stream or ADIF). Editable transcript in seconds.',
    url: 'https://mictoo.com/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC to Text: Raw AAC Stream Transcription',
    description: 'Upload raw .aac (ADTS or ADIF). Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function AacToTextPage() {
  return (
    <FormatPageLayout
      badge="AAC · ADTS · Raw codec stream"
      h1First="AAC to Text"
      h1Second="Raw ADTS streams, broadcast archives, ripped audio"
      subtitle="Raw .aac files often come from broadcast streams, radio captures, and extracted media tracks. Drop the file and Mictoo inspects its structure before transcribing the spoken audio with Whisper large-v3."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9:44"
      previewLines={[
        { t: '0:00',  line: 'You are listening to the morning show. It is seven fifteen and we are back with our lead story.' },
        { t: '0:08',  line: 'Overnight the city council passed the new transit expansion after almost three years of debate.' },
        { t: '0:17',  line: 'The plan will add two new light-rail lines and extend the existing one by roughly eight miles.' },
        { t: '0:27',  line: 'To break down what this means for daily commuters we are joined in the studio by our transit reporter.' },
        { t: '0:37',  line: 'Thanks for having me. The headline is that the eastbound corridor finally gets a rail option after twenty years.' },
        { t: '0:47',  line: 'For anyone who currently drives that stretch during rush hour, this is genuinely transformative.' },
        { t: '0:56',  line: 'Construction starts next spring and the first new line is expected to open in twenty twenty-nine.' },
        { t: '1:06',  line: 'The council estimates that roughly forty thousand daily riders will use the new segments once they open.' },
      ]}
      whyTitle="Why Mictoo for AAC transcription"
      whyCards={[
        {
          icon: 'waveform',
          title: 'Raw ADTS handled natively',
          desc: 'Most raw .aac files are ADTS-framed (Audio Data Transport Stream). We detect the sync word 0xFFF and hand the stream to Whisper.',
        },
        {
          icon: 'gear',
          title: 'ADIF and LATM also supported',
          desc: 'Less common ADIF (Audio Data Interchange Format) and LATM framings also work. No manual repackaging or ffmpeg step needed.',
        },
        {
          icon: 'clip',
          title: 'No container required',
          desc: 'AAC usually lives inside M4A or MP4, but sometimes the raw stream lands on your disk. Mictoo accepts either without asking.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for archive segments',
          desc: 'Broadcast segment, radio archive clip, or streaming dump. The AI summary lets you triage archives faster.',
        },
      ]}
      scenariosTitle="When AAC to text is the right fit"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Broadcast radio archive',
          desc: 'Segment recorded off HLS or Icecast stream that ships as raw AAC. Transcript makes the archive searchable.',
        },
        {
          icon: 'video',
          title: 'HLS livestream capture',
          desc: 'YouTube Live, Twitch, or radio HLS stream captured as an .aac chunk sequence. Drop the file, get the text.',
        },
        {
          icon: 'mic',
          title: 'Ripped iPhone audio',
          desc: 'Audio extracted from an iPhone recording or shared file that lost its M4A container and came out as raw AAC.',
        },
        {
          icon: 'gear',
          title: 'Streaming service export',
          desc: 'Podcast platform or streaming app that provides raw AAC downloads. Skip the conversion and drop the file directly.',
        },
        {
          icon: 'users',
          title: 'Broadcast interview',
          desc: 'Radio-hosted interview archived as raw AAC. Transcript is the citation-ready copy for articles or shows.',
        },
        {
          icon: 'editPen',
          title: 'FFmpeg intermediate output',
          desc: 'You extracted the audio track with ffmpeg -c:a copy and got a .aac. Drop it here instead of re-muxing to M4A first.',
        },
      ]}
      technicalTitle="Raw AAC compared with M4A"
      technicalIntro="AAC is an audio codec. A file ending in .aac is often a raw framed stream, while M4A usually wraps AAC audio in an MP4 container with seeking and metadata."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS is common',
          desc: 'Raw AAC is commonly stored as ADTS frames, especially when audio has been extracted from a stream or broadcast workflow.',
        },
        {
          icon: 'layers',
          title: 'M4A adds a container',
          desc: 'M4A can carry the same AAC codec with timing, indexing, and metadata supplied by an MP4-based container.',
        },
        {
          icon: 'search',
          title: 'Extension is only a clue',
          desc: 'The file structure is inspected during processing, so a misleading extension does not become transcript text.',
        },
        {
          icon: 'briefcase',
          title: 'Broadcast workflows',
          desc: 'Raw AAC often appears after HLS capture or audio extraction. Keep the original source reference for archival context.',
        },
      ]}
      faq={[
        {
          q: 'What kind of AAC files does Mictoo accept?',
          a: 'Raw AAC in ADTS framing (most common), ADIF, and LATM framings. We detect the sync word server-side and hand the stream to Whisper. AAC inside M4A (see the M4A page) also works but is a different intake path.',
        },
        {
          q: 'What is the difference between .aac and .m4a?',
          a: '.aac is typically a raw ADTS bitstream: AAC frames with tiny 7-byte headers, no container. .m4a is AAC audio wrapped in an MP4 container with metadata and seek indexing. Both use the AAC codec, but the file structure differs.',
        },
        {
          q: 'My AAC file is over 60 MB. What now?',
          a: 'AAC at typical broadcast bitrates (128 kbps) is around 1 MB per minute, so 60 MB is roughly a one-hour recording. If you are signed in, we auto-split up to about 3 hours. Otherwise, downsample: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: 'Does raw AAC produce worse transcripts than M4A?',
          a: 'No. The audio stream is identical; only the container differs. Whisper resamples to 16 kHz mono internally either way. Accuracy depends on the underlying recording quality, not on whether it is ADTS-framed or MP4-wrapped.',
        },
        {
          q: 'Does Mictoo transcribe non-English AAC?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For unusual accents or short broadcast clips, set the language explicitly for cleaner first-pass results.',
        },
        {
          q: 'Can I get SRT captions for the broadcast clip?',
          a: 'Yes. Download SRT or VTT after transcription. Timestamps align to the original AAC stream timeline for use in video editors, accessibility overlays, or archival indexing.',
        },
        {
          q: 'Is my AAC file kept on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We never write it to disk. Transcripts are only stored if you sign in and save to history.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original.',
        },
        {
          q: 'What if the file has a .aac extension but is actually M4A?',
          a: 'We inspect the magic bytes, not the extension. If the file starts with ftyp (M4A/MP4 signature), we treat it as M4A. If it starts with ADTS sync bytes, we treat it as raw AAC. Either way, transcription works.',
        },
        {
          q: 'How long does an AAC transcription take?',
          a: 'A 10-minute AAC typically finishes in 15-30 seconds end to end. Larger files near the upload cap take 45-80 seconds. Upload speed is often the longer step.',
        },
      ]}
      ctaHeadline="Drop your raw AAC and get the transcript"
      ctaSubtitle="ADTS, ADIF, and LATM framings. Broadcast archives, HLS captures, ripped audio."
      ctaButton="Upload AAC to transcribe"
    />
  )
}
