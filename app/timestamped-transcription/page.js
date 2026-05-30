import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Timestamped Transcription — Free Time-Coded Transcript Generator | Mictoo',
  description:
    'Free timestamped transcription. Get word-level or sentence-level timestamps for any audio or video. Perfect for journalism, research, podcasting, video editing.',
  alternates: {
    canonical: 'https://mictoo.com/timestamped-transcription',
    languages: {
      'en': 'https://mictoo.com/timestamped-transcription',
      'fr': 'https://mictoo.com/fr/timestamped-transcription',
      'de': 'https://mictoo.com/de/timestamped-transcription',
      'es': 'https://mictoo.com/es/timestamped-transcription',
      'ru': 'https://mictoo.com/ru/timestamped-transcription',
      'it': 'https://mictoo.com/it/timestamped-transcription',
      'pt': 'https://mictoo.com/pt/timestamped-transcription',
      'pl': 'https://mictoo.com/pl/timestamped-transcription',
      'ja': 'https://mictoo.com/ja/timestamped-transcription',
      'ko': 'https://mictoo.com/ko/timestamped-transcription',
      'x-default': 'https://mictoo.com/timestamped-transcription',
    },
  },

  openGraph: {
    title: "Timestamped Transcription — Free Time-Coded Transcript Generator | Mictoo",
    description: "Free timestamped transcription. Get word-level or sentence-level timestamps for any audio or video. Perfect for journalism, research, podcasting, video editing.",
    url: "https://mictoo.com/timestamped-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timestamped Transcription — Free Time-Coded Transcript Generator | Mictoo",
    description: "Free timestamped transcription. Get word-level or sentence-level timestamps for any audio or video. Perfect for journalism, research, podcasting, video editing.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function TimestampedTranscriptionPage() {
  return (
    <LandingLayout
      badge="Timestamps · Citation · Free"
      h1={
        <>
          Timestamped Transcription
          <br />
          <span className="text-brand-600">Free Time-Coded Transcripts</span>
        </>
      }
      subtitle="Get accurate timestamps for every line or word in your audio. Jump back to exact moments, cite specific quotes, build chapter markers. Free, no signup."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the file',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. We handle audio and video formats.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes and timestamps',
          desc: 'Whisper large-v3 generates the transcript with millisecond-precision timestamps for each segment (and optionally each word).',
        },
        {
          icon: '💾',
          title: 'Pick your granularity and download',
          desc: 'Choose sentence-level timestamps (most common) or word-level (for precise alignment work). Download as TXT with timestamps inline, SRT for subtitle workflows, or copy to clipboard.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for timestamped transcription',
        bullets: [
          {
            title: 'Timestamps to the millisecond',
            desc: 'Whisper outputs timestamps with millisecond precision. More precise than any common video frame rate, more than enough for citation work.',
          },
          {
            title: 'Sentence-level by default, word-level when you need it',
            desc: 'Sentence-level keeps transcripts readable. Word-level is overkill for note-taking but essential for video editing and music alignment.',
          },
          {
            title: 'Free',
            desc: 'No per-minute meter. No "timestamps cost extra" tier. Same price as plain transcription (free).',
          },
          {
            title: 'SRT export for video workflows',
            desc: 'Timestamps in SRT format work directly in Premiere, DaVinci, CapCut, and YouTube Studio as subtitle tracks.',
          },
          {
            title: 'Inline timestamps in TXT for citation',
            desc: 'Plain text with [00:01:23] markers at the start of each segment. Easy to paste into research notes, blog posts, or journalism drafts.',
          },
          {
            title: 'No file is stored',
            desc: 'The audio streams to the transcription provider and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'What people use timestamped transcripts for',
        items: [
          {
            title: 'Journalism and citation',
            desc: 'Quoting a source from an interview? Put the timestamp next to the quote in your notes. When the editor or fact-checker asks "where did they say that exactly", you have the answer in two seconds.',
          },
          {
            title: 'Podcast chapter markers',
            desc: 'Generate the transcript, scan for natural section breaks, copy the timestamps into your podcast host chapter feature. Modern players show chapters in the playback bar.',
          },
          {
            title: 'Video editing rough cuts',
            desc: 'Get the transcript, mark the lines you want to keep, find them on the timeline by timestamp. "Paper editing" is much faster than scrubbing.',
          },
          {
            title: 'Academic research and qualitative coding',
            desc: 'Researchers using NVivo, Atlas.ti, or MAXQDA tag transcript segments with codes. Timestamps let you jump back to the audio for the exact moment when coding ambiguous passages.',
          },
          {
            title: 'Music alignment for sing-along videos',
            desc: 'Word-level timestamps for karaoke-style or lyric-video projects. Each word lights up at the exact moment it is sung.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for timestamped transcription',
        tips: [
          {
            title: 'Sentence-level timestamps work for 95 percent of use cases',
            desc: 'Unless you are doing music alignment or per-word video captioning, sentence-level is what you want. More readable, easier to edit.',
          },
          {
            title: 'Word-level timestamps blow up file size and complexity',
            desc: 'A word-level SRT for a 30-minute talk has thousands of entries. Use it only when you actually need per-word precision.',
          },
          {
            title: 'For podcasts, generate chapter markers from natural breaks',
            desc: 'Look at the transcript for topic transitions, agenda changes, or guest intros. Copy those timestamps into your podcast host as chapter markers.',
          },
          {
            title: 'For journalism, save the timestamp with every quote you might use',
            desc: 'Future you, 3 weeks later, will not remember which interview a quote came from, let alone where in the interview. The timestamp solves that.',
          },
          {
            title: 'SRT timestamps are zero-padded, TXT timestamps are not',
            desc: 'SRT uses 00:01:23,456. TXT typically uses [1:23]. If you are pasting into a CMS that expects one format, convert before pasting.',
          },
          {
            title: 'For video editing, the timestamp in our SRT lines up against the audio in the original file',
            desc: 'If you re-export your video at a different frame rate, the timestamps still match because they are in absolute time (milliseconds), not frames.',
          },
          {
            title: 'Timestamps drift on bad audio',
            desc: 'When Whisper hallucinates words during music or silence, the timestamps for those phantom words are best-guess. Real speech timestamps remain accurate. Just trust speech sections, ignore music sections.',
          },
        ],
      }}
      faq={[
        {
          q: 'What is the difference between sentence-level and word-level timestamps?',
          a: 'Sentence-level: one timestamp per line of text (usually a sentence). Word-level: one timestamp per word. Sentence-level is readable and good for citation, podcasting, and most video work. Word-level is for music alignment, karaoke videos, and per-word caption animations.',
        },
        {
          q: 'How precise are the timestamps?',
          a: 'Whisper outputs timestamps in milliseconds. They line up correctly at every common video frame rate (24, 25, 29.97, 30, 50, 60 fps) without offset.',
        },
        {
          q: 'Will timestamps drift over a long file?',
          a: 'Rare. Whisper aligns timestamps to the actual audio, so they stay accurate even for 60-minute files. Sub-second drift can happen on the last few segments of very long files. If you notice it, adjust manually.',
        },
        {
          q: 'Can I get a TXT file with inline timestamps, like [00:01:23] before each line?',
          a: 'Yes. Download as TXT and we include sentence-level timestamps inline. Format: [00:01:23] Sentence text here.',
        },
        {
          q: 'Does the SRT include timestamps?',
          a: 'Yes, that is the entire point of SRT format. Each subtitle entry has a start and end timestamp.',
        },
        {
          q: 'How does this compare to YouTube auto-captions with timestamps?',
          a: 'YouTube auto-captions have timestamps but no punctuation and lower accuracy. Ours have full punctuation, better accuracy, and standard SRT output that works in any video editor.',
        },
        {
          q: 'Can I jump to a specific timestamp in the audio from the transcript?',
          a: 'In our result view, click any timestamp to seek the audio player to that moment. After download, you would need a separate audio player to do this.',
        },
        {
          q: 'Will the timestamps work in Premiere or DaVinci Resolve?',
          a: 'Yes. Import the SRT into the timeline. Captions appear at the correct moments automatically.',
        },
        {
          q: 'What languages are supported for timestamped transcription?',
          a: 'The same 50+ languages as plain transcription. Timestamps come automatically with every transcript regardless of language.',
        },
        {
          q: 'Is the audio stored?',
          a: 'No. The file streams to the transcription provider and is discarded after processing.',
        },
        {
          q: 'Can I use word-level timestamps to make a karaoke video?',
          a: 'Yes, but you will need video software that can render per-word highlighting from a JSON or SRT format. Some tools (Premiere, After Effects, specialized karaoke software) support this directly.',
        },
        {
          q: 'How long does it take to generate timestamped transcripts?',
          a: 'The same as plain transcription, about 1 to 2 percent of audio length. Timestamps come automatically, no extra processing time.',
        },
      ]}
      relatedLinks={[
        { href: '/free-srt-generator', label: 'Free SRT Generator', desc: 'Same timestamps, branded for subtitle workflows.' },
        { href: '/podcast-transcription', label: 'Podcast Transcription', desc: 'Timestamps for show notes and chapter markers.' },
        { href: '/interview-transcription', label: 'Interview Transcription', desc: 'Timestamps for citation and quote sourcing.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'For plain-text output without timestamps.' },
      ]}
    />
  )
}
