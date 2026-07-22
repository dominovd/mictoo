import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'MP3 to Text: Free Online MP3 Transcription for Podcasts and Voice Recordings | Mictoo',
  description:
    'Transcribe MP3 audio files with timestamps, AI summary, and exports. Optimised for podcasts, voice notes, and downloaded audio. Drop your MP3, get the text in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-mp3-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-mp3-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
      'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
      'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
      'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
      'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
    },
  },
  openGraph: {
    title: 'MP3 to Text: Free Online MP3 Transcription | Mictoo',
    description: 'Drop your MP3 podcast or voice recording, get a transcript with summary in seconds.',
    url: 'https://mictoo.com/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 to Text: Free Online MP3 Transcription',
    description: 'Drop your MP3, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      badge="MP3 · Podcast-friendly · Free"
      h1First="MP3 to Text"
      h1Second="For podcasts, voice notes, and interviews"
      subtitle="MP3 is a common format for podcasts and voice recordings. Drop your episode, voice note, or downloaded interview and get a transcript with timestamps, AI summary, and clean exports for show notes."
      highlightFormat="mp3"
      previewFileName="podcast-episode.mp3"
      previewWordCount={182}
      previewDurationLabel="28:14"
      previewLines={[
        { t: '0:00',  line: 'Welcome back to the show. Today we are talking about the state of independent podcasting in 2026.' },
        { t: '0:07',  line: 'My guest has been running a weekly show for eight years without missing an episode.' },
        { t: '0:14',  line: 'Thanks for having me. It is wild to think we started this back when everyone said audio was already saturated.' },
        { t: '0:22',  line: 'Let us start there. What was different about launching a podcast in 2018 versus now?' },
        { t: '0:30',  line: 'Distribution was harder to break into, but audiences were more patient.' },
        { t: '0:37',  line: 'Today the tools are amazing, transcription in seconds, AI summaries for show notes, but attention is scarcer.' },
        { t: '0:47',  line: 'That is a good segue. What is your show-notes workflow now that transcripts are basically free?' },
        { t: '0:55',  line: 'I export the MP3, drop it into a transcription tool, and use the AI summary as the first draft of the notes.' },
      ]}
      whyTitle="Why Mictoo for MP3 transcription"
      whyCards={[
        {
          icon: 'mic',
          title: 'Built for podcasts and voice',
          desc: 'MP3 is what podcast networks distribute and voice apps export. Tuned for speech content with timestamps ready for show notes and captions.',
        },
        {
          icon: 'gear',
          title: 'Common MP3 settings accepted',
          desc: 'Constant or variable bitrate, mono or stereo. Clear speech matters most; very low bitrates and audible compression artifacts can reduce accuracy.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for show notes',
          desc: 'A summary appears alongside the transcript automatically. Solid first draft for episode notes, descriptions, and SEO-friendly recaps.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT, and 50+ languages',
          desc: 'Export SRT or VTT for the YouTube video version of the episode. Translate to Spanish, French, German, and 45+ other languages in one click.',
        },
      ]}
      scenariosTitle="When MP3 to text is the right fit"
      scenarios={[
        {
          icon: 'mic',
          title: 'Podcast show notes',
          desc: 'You bounced the episode, uploaded to your host. Drop the same MP3 here for the transcript and AI summary that become the show notes.',
        },
        {
          icon: 'layers',
          title: 'Podcast back-catalog',
          desc: 'Years of episodes already published without transcripts. Process them one by one to backfill the archive and make every episode searchable.',
        },
        {
          icon: 'editPen',
          title: 'Voice memo to document',
          desc: 'Voice notes recorded on your phone (many apps export MP3). Turn rambling ideas into searchable, editable text for your notes app.',
        },
        {
          icon: 'clip',
          title: 'Downloaded interviews',
          desc: 'Podcast interview you want to quote in an article, conference talk MP3 you want to reference, downloaded lecture you want to study.',
        },
        {
          icon: 'book',
          title: 'Audiobook chapters',
          desc: 'Audiobook MP3 chapter you want as printed text for note-taking. Large audiobook files often exceed 60 MB and need splitting first.',
        },
        {
          icon: 'video',
          title: 'YouTube-to-MP3 audio',
          desc: 'YouTube audio extractors often output MP3 for compatibility. Drop the extracted file for a clean transcript with timestamps.',
        },
      ]}
      technicalTitle="What matters in an MP3"
      technicalIntro="MP3 settings affect file size and can affect intelligibility at the extremes. These details help you decide whether to upload the file as-is or make a smaller speech copy first."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bitrate and clarity',
          desc: 'Speech at a moderate bitrate is usually suitable. Extremely low bitrate, clipping, or strong artifacts can hide consonants and names.',
        },
        {
          icon: 'gear',
          title: 'CBR and VBR',
          desc: 'Both constant-bitrate and variable-bitrate MP3 files can be uploaded; timestamps follow the decoded audio timeline.',
        },
        {
          icon: 'clip',
          title: 'ID3 tags stay separate',
          desc: 'Artist, title, artwork, and chapter metadata are not inserted into the transcript. Keep that metadata in your publishing system.',
        },
        {
          icon: 'cloud',
          title: 'Long episodes',
          desc: 'If an episode exceeds the upload limit, export a mono speech copy at a lower bitrate or split it at a natural break.',
        },
      ]}
      faq={[
        {
          q: 'Will Mictoo transcribe any MP3 file?',
          a: 'Mictoo accepts common MP3 files with constant or variable bitrate, mono or stereo audio. Damaged files, unsupported variants, or recordings with severe compression artifacts may need re-exporting. The limit is 60 MB when signed in and 25 MB anonymously.',
        },
        {
          q: 'Does the MP3 bitrate affect transcription quality?',
          a: 'Recording clarity matters more than a high bitrate, but bitrate is not irrelevant. A clean voice recording at a moderate bitrate is usually suitable; aggressive compression, clipping, or very low bitrate can remove speech detail and reduce accuracy.',
        },
        {
          q: 'My podcast MP3 is over 60 MB. What now?',
          a: 'Create a smaller mono speech copy with ffmpeg: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Check the result for audible artifacts before uploading, or split the episode at a natural break.',
        },
        {
          q: 'Can I get an AI summary of the episode?',
          a: 'Yes. The AI summary appears alongside the transcript automatically after transcription finishes. It is a solid first draft for podcast show notes, episode descriptions, and SEO-friendly recaps.',
        },
        {
          q: 'Can I download SRT subtitles for the YouTube version?',
          a: 'Yes. Export as SRT or VTT after transcription. Both formats include timestamps aligned to the original MP3 timeline. Drop into your YouTube upload or video editor for captions.',
        },
        {
          q: 'Does Mictoo transcribe non-English MP3 files?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short MP3s or non-English content, set the language explicitly in the dropdown for cleaner first-pass detection.',
        },
        {
          q: 'Can I translate the transcript to another language?',
          a: 'Yes. After transcription finishes, pick a target language and click Translate. The translation is generated by GPT-4o-mini and appears alongside the original transcript.',
        },
        {
          q: 'Will my MP3 file be saved on your servers?',
          a: 'No. The MP3 streams to the transcription provider, gets processed once, and is dropped from memory. We never write the audio to disk. The text transcript is only stored if you sign in and choose to add it to your history.',
        },
        {
          q: 'Will ID3 metadata (artist, title, album) show up in the transcript?',
          a: 'No. The transcript is plain text without MP3 metadata. ID3 tags are ignored during transcription. If you need the transcript matched with episode metadata, keep that mapping in your own archive system.',
        },
        {
          q: 'How long does an MP3 transcription take?',
          a: 'A 30-minute podcast MP3 typically finishes in 30-50 seconds end to end. Larger files near the upload cap take 60-90 seconds. Upload speed is often the longer step of the process.',
        },
      ]}
      ctaHeadline="Drop your MP3, write show notes faster"
      ctaSubtitle="Podcast episode, voice note, downloaded interview, audiobook chapter. Get the text and summary in seconds."
      ctaButton="Upload MP3 to transcribe"
    />
  )
}
