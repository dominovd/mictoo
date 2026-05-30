import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Audio to Text — Free Online Audio Transcription | Mictoo',
  description:
    'Free online audio to text converter. Drop any audio file (MP3, WAV, M4A, FLAC, OGG, AAC) and get a clean transcript in seconds. No signup, 50+ languages.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-audio-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-audio-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
      'de': 'https://mictoo.com/de/transcribe-audio-to-text',
      'es': 'https://mictoo.com/es/transcribe-audio-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
      'it': 'https://mictoo.com/it/transcribe-audio-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
      'x-default': 'https://mictoo.com/transcribe-audio-to-text',
    },
  },

  openGraph: {
    title: "Audio to Text — Free Online Audio Transcription | Mictoo",
    description: "Free online audio to text converter. Drop any audio file (MP3, WAV, M4A, FLAC, OGG, AAC) and get a clean transcript in seconds. No signup, 50+ languages.",
    url: "https://mictoo.com/transcribe-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio to Text — Free Online Audio Transcription | Mictoo",
    description: "Free online audio to text converter. Drop any audio file (MP3, WAV, M4A, FLAC, OGG, AAC) and get a clean transcript in seconds. No signup, 50+ languages.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function AudioToTextPage() {
  return (
    <LandingLayout
      badge="MP3 · WAV · M4A · FLAC · FREE"
      h1={
        <>
          Audio to Text
          <br />
          <span className="text-brand-600">Free AI Transcription</span>
        </>
      }
      subtitle="Free AI transcription that handles any audio file you throw at it. MP3, WAV, M4A, FLAC, OGG, AAC. No account, no per-minute fee."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the audio',
          desc: 'Any common format works. MP3 from your phone, WAV from a field recorder, M4A from iPhone Voice Memos, FLAC from a podcast export. Drag the file or click to browse.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'We run OpenAI Whisper large-v3 on the file. For a 10-minute audio file you usually wait around 20 seconds. A 30-minute file finishes in under a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser. Download as TXT for notes, or as SRT if you also need timestamps. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for audio to text',
        bullets: [
          {
            title: 'One model, the strong one',
            desc: 'We use Whisper large-v3 across the board. No "free tier uses a worse model" trick. The same model that powers expensive enterprise transcription is the one transcribing your file.',
          },
          {
            title: 'Format support is actually wide',
            desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, plus video formats with audio inside (MP4, MOV). No "we only accept MP3, convert your file first" friction.',
          },
          {
            title: '50+ languages, including bilingual files',
            desc: 'Auto-detect picks the language from a short audio sample. If your file switches between languages mid-recording (common in interviews), Whisper follows the switch.',
          },
          {
            title: 'No file is stored',
            desc: 'Your audio streams to the transcription provider, gets processed, and is discarded. We never write your file to our database or object storage. The providers we use (Groq, OpenAI) do not train on API data.',
          },
          {
            title: 'It is free without an asterisk',
            desc: 'Up to 30 minutes per file, no email required. Sign in for free and you get 60 minutes per file. Nothing else gated.',
          },
        ],
      }}
      useCases={{
        title: 'When audio to text saves real time',
        items: [
          {
            title: 'Interview notes',
            desc: 'You sat down with a source for an hour. Instead of scrubbing the recording for that one quote, you Ctrl+F the transcript. Five seconds versus five minutes.',
          },
          {
            title: 'Voice memo cleanup',
            desc: 'You dictated a half-formed idea into your phone on a walk. Now you want it as text. Drop the M4A, get sentences, copy into Notion.',
          },
          {
            title: 'Lecture and webinar review',
            desc: 'A two-hour lecture is hard to review at 2x speed. A text transcript lets you skim section by section and dig into only the parts that matter.',
          },
          {
            title: 'Translation prep',
            desc: 'Whisper transcribes in the source language. From there you can paste into DeepL or ChatGPT and translate cleanly. Better than auto-dubbed translations from raw audio.',
          },
          {
            title: 'Audio search across a back catalog',
            desc: 'Have years of recorded calls, episodes, or meetings? Batch transcribe them and you suddenly have a searchable archive. Cheaper than any AI meeting tool subscription.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for cleaner audio to text results',
        tips: [
          {
            title: 'Mono is fine. Stereo is wasted bandwidth',
            desc: 'Speech does not need two channels. If your file is huge, re-encode to mono and you cut the size in half with no quality loss for transcription. ffmpeg one-liner: ffmpeg -i input.wav -ac 1 output.wav.',
          },
          {
            title: '64 kbps MP3 is plenty for voice',
            desc: 'If you are exporting from a DAW or editor, 64 kbps mono MP3 gives Whisper everything it needs. Higher bitrates do not improve transcript accuracy, they just make the file bigger.',
          },
          {
            title: 'Trim long silence at the start and end',
            desc: 'If your recording has 90 seconds of dead air before the first word, those 90 seconds eat into your file duration limit. Trim them in Audacity (Effect, Truncate Silence) before upload.',
          },
          {
            title: 'Pick the language manually for short files',
            desc: 'Auto-detect samples the first chunk of audio to identify the language. For files under 5 minutes, that sample is small and detection is unreliable. Pick the language explicitly from the dropdown.',
          },
          {
            title: 'Background music makes Whisper hallucinate',
            desc: 'If your audio has music under the speech (sponsor reads, intro beds, b-roll), the model sometimes inserts fake words during the music-only sections. If you have a music-free version of the same audio, use it.',
          },
          {
            title: 'For really noisy files, denoise first',
            desc: 'Free options: Audacity Noise Reduction (built in), or Adobe Podcast Enhance (free web tool, surprisingly good). Run the file through it once, then upload the cleaned version.',
          },
        ],
      }}
      faq={[
        {
          q: 'What is the best free audio to text converter?',
          a: 'We are biased, but here is the honest answer: any tool that runs Whisper large-v3 is at the top of the free tier. Mictoo runs that model with no signup wall. Otter and Trint are good but charge per minute past their free quota. For one-off transcripts, free is the right tier.',
        },
        {
          q: 'How accurate is audio to text?',
          a: 'For clean speech in a major language, expect 5 to 10 percent word error rate. For noisy audio, heavy accents, or specialized vocabulary, accuracy drops. For most use cases (notes, search, drafts), this is plenty. For legal or medical records, hire a human transcriber.',
        },
        {
          q: 'What audio formats do you support?',
          a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. Also video files like MP4 and MOV (we extract the audio automatically). AIFF and ALAC are not supported directly. Convert those to WAV or FLAC first.',
        },
        {
          q: 'How long does it take to transcribe audio?',
          a: 'A 5-minute file usually finishes in 10 to 15 seconds. A 30-minute file takes around 45 to 60 seconds. We process the whole file as one request, no chunking on your end.',
        },
        {
          q: 'Can I transcribe a phone call recording?',
          a: 'Yes. Phone calls are usually 8 kHz mono with some compression. Whisper handles them well, though accuracy is slightly lower than for studio audio. Make sure recording the call is legal in your jurisdiction.',
        },
        {
          q: 'Do I need to select the language?',
          a: 'No, auto-detect is on by default. For audio under 5 minutes or files with a non-speech opening, pick the language manually for more reliable results.',
        },
        {
          q: 'Is there a per-minute charge?',
          a: 'No charges. Transcription is free with no per-minute meter. We make money through display ads and a planned Pro tier for power users.',
        },
        {
          q: 'What is the maximum file size?',
          a: 'Free: 25 MB without an account, 60 MB once you sign in (also free). If your file is bigger, see our compression guide.',
        },
        {
          q: 'Is my audio stored on your servers?',
          a: 'No. We stream the file directly to the transcription provider, get the text back, and discard the audio. Nothing is written to our database or object storage.',
        },
        {
          q: 'Can I edit the transcript before downloading?',
          a: 'Yes. After transcription, you can fix wrong words inline in the result view, then download the cleaned version.',
        },
        {
          q: 'What output formats are available?',
          a: 'Plain text (TXT), subtitle file (SRT) with timestamps, and copy-to-clipboard. The SRT works in YouTube Studio, Premiere Pro, DaVinci Resolve, and any standard video editor.',
        },
        {
          q: 'Does Mictoo work on mobile?',
          a: 'Yes. The site is mobile-friendly. You can upload directly from your phone, including from the iOS Files app or Android downloads folder.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text', desc: 'MP3-specific tips and quirks.' },
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'Same engine, optimized for MP4 and MOV files.' },
        { href: '/timestamped-transcription', label: 'Timestamped Transcription', desc: 'Need word-level or sentence-level timestamps.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When your file is too big to upload.' },
      ]}
    />
  )
}
