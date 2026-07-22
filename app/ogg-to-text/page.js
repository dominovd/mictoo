import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'OGG to Text: Telegram Voice, Linux Audio, and Opus/Vorbis Transcription | Mictoo',
  description:
    'Upload OGG audio (Vorbis, Opus, FLAC inside OGG) or Telegram .oga voice messages. Editable transcript with timestamps in seconds, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/ogg-to-text',
    languages: {
      'en': 'https://mictoo.com/ogg-to-text',
      'fr': 'https://mictoo.com/fr/ogg-to-text',
      'de': 'https://mictoo.com/de/ogg-to-text',
      'es': 'https://mictoo.com/es/ogg-to-text',
      'ru': 'https://mictoo.com/ru/ogg-to-text',
      'it': 'https://mictoo.com/it/ogg-to-text',
      'pt': 'https://mictoo.com/pt/ogg-to-text',
      'pl': 'https://mictoo.com/pl/ogg-to-text',
      'ja': 'https://mictoo.com/ja/ogg-to-text',
      'ko': 'https://mictoo.com/ko/ogg-to-text',
      'x-default': 'https://mictoo.com/ogg-to-text',
    },
  },
  openGraph: {
    title: 'OGG to Text: Telegram Voice, Linux Audio, Opus/Vorbis Transcription | Mictoo',
    description: 'Upload OGG audio or Telegram .oga voice messages. Editable transcript in seconds.',
    url: 'https://mictoo.com/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG to Text: Telegram Voice and Linux Audio Transcription',
    description: 'Upload OGG audio or Telegram .oga voice messages. Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function OggToTextPage() {
  return (
    <FormatPageLayout
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG to Text"
      h1Second="Telegram voice, Linux audio, Opus and Vorbis"
      subtitle="OGG is what Telegram Voice uses (.oga), what Linux audio apps default to, and what the open-source Opus codec ships inside. Drop the file, we auto-detect the audio stream and transcribe with Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Hey, quick voice message about the call tomorrow.' },
        { t: '0:03',  line: 'I looked at the deck and I think slides four through six need a rethink before we present.' },
        { t: '0:10',  line: 'The main issue is that the story jumps from the problem straight to the pricing without showing the demo screenshots.' },
        { t: '0:20',  line: 'What I would do is swap slide five for the demo flow and push the pricing to the end of the deck.' },
        { t: '0:30',  line: 'That way we build the tension around what the product actually does before we talk about cost.' },
        { t: '0:39',  line: 'Also, the client mentioned yesterday that they want to see the integration slide, which is currently in the appendix.' },
        { t: '0:49',  line: 'Move it into the main flow, maybe between the demo and the pricing.' },
        { t: '0:56',  line: 'Talk soon, let me know what you think when you get a chance.' },
      ]}
      whyTitle="Why Mictoo for OGG transcription"
      whyCards={[
        {
          icon: 'mic',
          title: 'Telegram voice messages, native',
          desc: 'Telegram .oga voice notes drop straight in. No renaming, no repackaging. We handle the Opus stream inside the OGG container.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus, and FLAC-in-OGG',
          desc: 'Any codec inside the OGG container works: Vorbis (older), Opus (modern), FLAC-in-OGG (audiophile). Auto-detected server-side.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for voice-note chains',
          desc: 'Voice messages tend to be rambling. The AI summary turns a five-minute .oga into a two-line takeaway you can action.',
        },
        {
          icon: 'globe',
          title: 'Translate to 50+ languages',
          desc: 'Voice message in Russian, Spanish, or Portuguese from a group chat. Translate to English (or any target) after transcription.',
        },
      ]}
      scenariosTitle="When OGG to text is the right fit"
      scenarios={[
        {
          icon: 'mic',
          title: 'Telegram voice message',
          desc: 'Voice note sent by a colleague or client via Telegram. Save the .oga from the chat, drop here, get a text version to skim.',
        },
        {
          icon: 'gear',
          title: 'Linux audio recording',
          desc: 'Recording from Audacity, GNOME Sound Recorder, or a KDE audio tool that defaults to OGG. Fully supported, no conversion.',
        },
        {
          icon: 'briefcase',
          title: 'Open-source app export',
          desc: 'Podcast or interview recorder that exports OGG (many FOSS apps default to Vorbis or Opus for licensing reasons).',
        },
        {
          icon: 'video',
          title: 'Firefox MediaRecorder capture',
          desc: 'Firefox often produces OGG/Opus from browser recording apps. Drop the file for a clean transcript with timestamps.',
        },
        {
          icon: 'editPen',
          title: 'Dictated note or memo',
          desc: 'Voice-first note captured in an app that saves as OGG. Turn it into editable text ready for your writing workflow.',
        },
        {
          icon: 'users',
          title: 'Multi-speaker OGG chat log',
          desc: 'Discord, Mumble, or similar VOIP recording exported to OGG. Transcript for reference, meeting minutes, or archive.',
        },
      ]}
      technicalTitle="What can be inside an OGG file"
      technicalIntro="OGG is a container family rather than a single audio codec. Knowing the stream type and extension helps explain where a recording came from, but you do not need to repack it before upload."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus, or FLAC',
          desc: 'The OGG container can carry several codecs. Voice messages commonly use Opus; older desktop audio often uses Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga and .ogg',
          desc: '.oga is the audio-only extension in the same container family. Telegram voice exports often arrive with this extension.',
        },
        {
          icon: 'mic',
          title: 'Voice-message source',
          desc: 'Short mobile messages may include room noise and phone processing; clear capture matters more than the container name.',
        },
        {
          icon: 'gear',
          title: 'Header-based inspection',
          desc: 'The stream structure is inspected during processing, so an unusual extension does not need to be renamed first.',
        },
      ]}
      faq={[
        {
          q: 'What kinds of OGG files does Mictoo accept?',
          a: 'Any standard OGG container: Vorbis audio (older, common on Linux), Opus audio (newer, used by Telegram voice and modern apps), and FLAC-in-OGG. Also Telegram .oga files, which are OGG with a different extension.',
        },
        {
          q: 'Is a .oga file the same as .ogg?',
          a: 'Effectively yes. .oga is the standardized extension for audio-only OGG, most commonly used by Telegram voice messages carrying an Opus stream. Mictoo treats .oga and .ogg the same way.',
        },
        {
          q: 'My OGG file is over 60 MB. What now?',
          a: 'Opus and Vorbis are efficient, so hitting 60 MB usually means a very long recording. If you are signed in, we auto-split up to about 3 hours. Otherwise, downsample first: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. Speech stays crisp.',
        },
        {
          q: 'Do you accept OGG video (Theora)?',
          a: 'The audio track inside an OGG/Theora container transcribes. Upload the .ogv file and we demux the audio just like with any video format. Silent Theora clips will produce empty transcripts.',
        },
        {
          q: 'Does Mictoo transcribe non-English OGG?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short voice messages or non-English content, set the language explicitly for cleaner first-pass results.',
        },
        {
          q: 'Can I get SRT captions for an OGG recording?',
          a: 'Yes. Download SRT or VTT after transcription. Timestamps align to the original OGG timeline for use in video editors or accessibility tools.',
        },
        {
          q: 'Is my OGG file kept on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We never write it to disk. Transcripts are only stored if you sign in and save to history.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original.',
        },
        {
          q: 'Does OGG quality affect the transcript?',
          a: 'Barely. Opus at 24-32 kbps sounds crisp for voice and transcribes essentially as well as higher bitrates. Whisper resamples to 16 kHz mono internally, so bitrate has minimal impact for clean speech.',
        },
        {
          q: 'How long does an OGG transcription take?',
          a: 'A 2-minute Telegram voice note typically finishes in 5-15 seconds end to end. Longer OGG files (30-45 minutes) take 45-90 seconds. Upload speed is often the longer step.',
        },
      ]}
      ctaHeadline="Drop your Telegram voice or OGG file"
      ctaSubtitle="Opus, Vorbis, FLAC-in-OGG, .oga voice messages. Every OGG stream, handled natively."
      ctaButton="Upload OGG to transcribe"
    />
  )
}
