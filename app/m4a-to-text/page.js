import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'M4A to Text: Free iPhone Voice Memo and Apple Audio Transcription | Mictoo',
  description:
    'Upload an M4A file from iPhone Voice Memos, GarageBand, Apple Podcasts, or FaceTime, and get an editable transcript in seconds. AAC inside MP4, no conversion needed.',
  alternates: {
    canonical: 'https://mictoo.com/m4a-to-text',
    languages: {
      'en': 'https://mictoo.com/m4a-to-text',
      'fr': 'https://mictoo.com/fr/m4a-to-text',
      'de': 'https://mictoo.com/de/m4a-to-text',
      'es': 'https://mictoo.com/es/m4a-to-text',
      'ru': 'https://mictoo.com/ru/m4a-to-text',
      'it': 'https://mictoo.com/it/m4a-to-text',
      'pt': 'https://mictoo.com/pt/m4a-to-text',
      'pl': 'https://mictoo.com/pl/m4a-to-text',
      'ja': 'https://mictoo.com/ja/m4a-to-text',
      'ko': 'https://mictoo.com/ko/m4a-to-text',
      'x-default': 'https://mictoo.com/m4a-to-text',
    },
  },
  openGraph: {
    title: 'M4A to Text: iPhone Voice Memo and Apple Audio Transcription | Mictoo',
    description: 'Upload M4A from Voice Memos, GarageBand, Apple Podcasts, or FaceTime. Editable transcript in seconds.',
    url: 'https://mictoo.com/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A to Text: Free iPhone Voice Memo Transcription',
    description: 'Upload M4A from Voice Memos, GarageBand, Apple Podcasts. Editable transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function M4aToTextPage() {
  return (
    <FormatPageLayout
      badge="M4A · AAC · iPhone · Free"
      h1First="M4A to Text"
      h1Second="For iPhone Voice Memos and Apple audio"
      subtitle="M4A is what your iPhone Voice Memos app writes, what GarageBand exports, and what Apple Podcasts distributes. Drop the file straight from your device, keep the AAC, get a transcript with timestamps in seconds."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6:18"
      previewLines={[
        { t: '0:00',  line: 'Okay, quick voice memo before I forget the whole idea.' },
        { t: '0:04',  line: 'So the pitch is that we take the checkout flow and split it into two clear steps instead of one long form.' },
        { t: '0:13',  line: 'Step one, just email and card. Step two, shipping details after they see the confirmation number.' },
        { t: '0:22',  line: 'The reason this matters is that the drop-off on the current single-page form is around thirty-eight percent.' },
        { t: '0:32',  line: 'Most of that drop-off happens at the shipping section, not at the card entry, which is counterintuitive.' },
        { t: '0:42',  line: 'If we shift shipping to after purchase, we can probably recover twelve to fifteen percent of that traffic.' },
        { t: '0:52',  line: 'Timeline-wise, I think this is two weeks of frontend, one week of backend, maybe a week of testing.' },
        { t: '1:02',  line: 'Follow up with the checkout team tomorrow to see if there is anything they already tried that failed.' },
      ]}
      whyTitle="Why Mictoo for M4A transcription"
      whyCards={[
        {
          icon: 'mic',
          title: 'Built for iPhone Voice Memos',
          desc: 'Drop the .m4a straight from your Voice Memos share sheet or from iCloud. No format nagging, no conversion step.',
        },
        {
          icon: 'gear',
          title: 'AAC inside MP4, handled natively',
          desc: 'M4A is AAC audio in an MP4 container. We parse the ftyp box, extract the AAC track, and hand it to Whisper without re-encoding.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for voice-memo ideas',
          desc: 'The summary appears alongside the transcript. Turns rambling brainstorm memos into a tight action list.',
        },
        {
          icon: 'globe',
          title: 'Translate to 50+ languages',
          desc: 'Voice memo in Spanish, note recorded during a French meeting, dictation in Japanese. Translate to English (or any target) after transcription.',
        },
      ]}
      scenariosTitle="When M4A to text is the right fit"
      scenarios={[
        {
          icon: 'mic',
          title: 'iPhone Voice Memos',
          desc: 'Every recording from the built-in Voice Memos app on iPhone or iPad. Ideas, meeting notes, interview clips, lectures.',
        },
        {
          icon: 'briefcase',
          title: 'FaceTime and call recordings',
          desc: 'Audio exported from FaceTime, WhatsApp calls, or Zoom sessions often lands as M4A. Drop the file for a clean text version.',
        },
        {
          icon: 'sparkles',
          title: 'GarageBand and Logic exports',
          desc: 'Vocal-only bounce, podcast episode, or interview edit from GarageBand or Logic Pro. Get a transcript to build show notes from.',
        },
        {
          icon: 'video',
          title: 'Apple Podcasts episodes',
          desc: 'Downloaded episode from Apple Podcasts (M4A on iOS by default). Transcript for quoting, referencing, or repurposing.',
        },
        {
          icon: 'editPen',
          title: 'Dictation and long-form notes',
          desc: 'You dictated a chapter, a memo, or a journal entry into Voice Memos. Turn it into editable text ready for your writing app.',
        },
        {
          icon: 'users',
          title: 'Field interview',
          desc: 'Journalism, research, or oral history interview recorded on iPhone. Transcript is the raw material for the story or paper.',
        },
      ]}
      technicalTitle="What to know about M4A"
      technicalIntro="M4A describes an MP4-based audio container, not one single codec. Most voice recordings use AAC, while some files use lossless ALAC."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Container and codec',
          desc: 'An .m4a file commonly contains AAC or ALAC audio. The container provides timing and metadata around that audio stream.',
        },
        {
          icon: 'mic',
          title: 'Voice Memos workflow',
          desc: 'You can share the original recording from an iPhone or Mac and upload it without first renaming it to MP3.',
        },
        {
          icon: 'clip',
          title: 'Metadata is separate',
          desc: 'Titles, artwork, and Apple metadata are not inserted into transcript text. Keep them in your notes or publishing system.',
        },
        {
          icon: 'cloud',
          title: 'Long recordings',
          desc: 'M4A is usually compact, but long Voice Memos can still exceed upload limits. Split or export a smaller speech copy when needed.',
        },
      ]}
      faq={[
        {
          q: 'Do you accept M4A from iPhone Voice Memos directly?',
          a: 'Yes. Voice Memos writes standard M4A (AAC in MP4 container). Share the file from the app, save to iCloud or Files, and drop it here. No conversion required.',
        },
        {
          q: 'What is the difference between M4A and MP4?',
          a: 'M4A is the audio-only version of the MP4 container. Both use the ftyp header and AAC codec. .m4a signals audio-only content while .mp4 typically implies video. Mictoo accepts both directly.',
        },
        {
          q: 'My iPhone recording is over 60 MB. What now?',
          a: 'A 90-minute Voice Memo can exceed 60 MB. If you are signed in we auto-split up to about 3 hours. For anonymous users, downsample first: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. Speech quality stays clean.',
        },
        {
          q: 'Will iPhone metadata (title, location, date) show up?',
          a: 'No. The transcript is plain text without device metadata. If you rely on the recording date or location, keep that mapping in your notes.',
        },
        {
          q: 'Does Mictoo transcribe non-English M4A files?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short voice memos or non-English accents, set the language explicitly for cleaner first-pass results.',
        },
        {
          q: 'Can I download SRT captions for a video that uses this M4A?',
          a: 'Yes. Download SRT or VTT after transcription. Timestamps align to the original M4A timeline, so if you sync the M4A to a video track, the captions match frame-accurately.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original.',
        },
        {
          q: 'Is my M4A file kept on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We never write it to disk. Transcripts are only stored if you sign in and save to history.',
        },
        {
          q: 'Does M4A quality affect the transcript?',
          a: 'Barely. iPhone Voice Memos records at around 32-64 kbps AAC, which is plenty for Whisper. Whisper resamples to 16 kHz mono internally, so codec bitrate has minimal impact for clean speech.',
        },
        {
          q: 'How long does an M4A transcription take?',
          a: 'A 10-minute Voice Memo typically finishes in 15-30 seconds end to end. A 60-minute interview finishes in 60-90 seconds. Upload speed is often the longer step.',
        },
      ]}
      ctaHeadline="Drop your Voice Memo, get a clean transcript"
      ctaSubtitle="iPhone Voice Memos, GarageBand, FaceTime, Apple Podcasts. AAC in MP4, no conversion needed."
      ctaButton="Upload M4A to transcribe"
    />
  )
}
