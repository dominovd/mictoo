import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'MP3 to Text — Free AI MP3 Transcription Online | Mictoo',
  description:
    'Free MP3 to text converter. Upload any MP3 file and get a clean AI transcript in seconds. Works with podcasts, interviews, lectures. 50+ languages, no signup.',
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
    title: "MP3 to Text — Free AI MP3 Transcription Online | Mictoo",
    description: "Free MP3 to text converter. Upload any MP3 file and get a clean AI transcript in seconds. Works with podcasts, interviews, lectures. 50+ languages, no signup.",
    url: "https://mictoo.com/transcribe-mp3-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 to Text — Free AI MP3 Transcription Online | Mictoo",
    description: "Free MP3 to text converter. Upload any MP3 file and get a clean AI transcript in seconds. Works with podcasts, interviews, lectures. 50+ languages, no signup.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function Mp3ToTextPage() {
  return (
    <LandingLayout
      badge="MP3 · FREE · NO SIGNUP"
      h1={
        <>
          MP3 to Text
          <br />
          <span className="text-brand-600">Free MP3 Transcription</span>
        </>
      }
      subtitle="Free AI transcription for any MP3 file. Drop the file, get the text in seconds. No account, no per-minute fee, no email required."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the MP3',
          desc: 'Any MP3 file works. Podcast download, voice memo export, ripped audio, AI-generated voice file. Drag the file or click to browse.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the MP3 and converts speech to text. A typical 30-minute podcast finishes in about a minute. A 5-minute voice memo takes around 15 seconds.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read it in the browser, copy to clipboard, or download as TXT or SRT. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for MP3',
        bullets: [
          {
            title: 'Whisper large-v3, not a stripped-down free tier',
            desc: 'We do not run a smaller model "for free users" and a bigger one for paying customers. Same model, same accuracy, every file.',
          },
          {
            title: 'MP3 specifics handled correctly',
            desc: 'MP3 is lossy, so some tools choke on heavily compressed files (32 kbps, mono, low sample rate). Whisper handles those without complaint. We have seen 24 kbps phone-call MP3s come out readable.',
          },
          {
            title: 'No file conversion required',
            desc: 'Some MP3 to text tools secretly want WAV behind the scenes and re-encode your MP3 first. We send the MP3 directly to the speech model. Faster, no quality loss from a second pass.',
          },
          {
            title: 'No per-minute meter',
            desc: 'Some competitors give you 60 free minutes per month, then charge you 25 cents per minute. We are ad-supported and have no minute cap. Transcribe one file or a hundred.',
          },
          {
            title: 'Privacy by default',
            desc: 'The MP3 streams to the speech provider, gets transcribed, then is discarded. We never write your audio to disk on our side.',
          },
        ],
      }}
      useCases={{
        title: 'What people use MP3 to text for',
        items: [
          {
            title: 'Podcast episodes',
            desc: 'Drag the MP3 from your podcast host (Anchor, Buzzsprout, Transistor) and get text for show notes, blog repurposing, or accessibility.',
          },
          {
            title: 'Phone call recordings',
            desc: 'MP3 is the standard export from most call recording apps. Transcribe to skim a long call for the part you actually need.',
          },
          {
            title: 'Voice memos exported from your phone',
            desc: 'iPhone Voice Memos default to M4A, but if you have AirDropped one as MP3 or used an Android app that saves MP3, this is your tool.',
          },
          {
            title: 'Audiobook samples or lecture rips',
            desc: 'For studying, having the text next to the audio doubles retention. Just stay on the right side of copyright.',
          },
          {
            title: 'AI voiceover and TTS output',
            desc: 'If you generated voice with ElevenLabs, OpenAI TTS, or any text-to-speech tool, you might want a clean transcript back for caption or alignment work.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for MP3 transcription',
        tips: [
          {
            title: 'Constant bitrate beats variable bitrate for Whisper',
            desc: 'VBR (variable bitrate) MP3 can confuse some audio decoders during edge cases. If you control the export, pick CBR at 64 or 96 kbps mono. Less work for the model.',
          },
          {
            title: '64 kbps mono is the sweet spot for voice MP3',
            desc: 'Anything higher is wasted on speech. A 60-minute episode at 64 kbps mono is around 28 MB. That fits in the free 25 MB tier easily, or comfortably in the 60 MB signed-in tier.',
          },
          {
            title: 'If your MP3 is huge (over 60 MB), re-encode before splitting',
            desc: 'Splitting first then transcribing two files is more work than re-encoding once at lower bitrate. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. A 200 MB original drops to 25 to 40 MB.',
          },
          {
            title: 'Strip ID3 metadata if the file is borderline',
            desc: 'ID3 tags (album art, lyrics, etc.) can add several MB to an MP3. If you are 1 to 2 MB over the limit, stripping tags with ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 might be enough.',
          },
          {
            title: 'Bad MP3 encoding from old converters can cause silent gaps',
            desc: 'If your transcript skips sections, the MP3 might have actual silent gaps from a buggy encoder. Re-encode from the source if you have it, or use Audacity Find Silence to confirm.',
          },
          {
            title: 'For phone-call MP3s (8 kHz mono), expect slightly lower accuracy',
            desc: 'Phone audio loses high frequencies, which costs you a few percent on word error rate. Still readable, just plan for more cleanup on names and numbers.',
          },
        ],
      }}
      faq={[
        {
          q: 'Is MP3 the best format for transcription?',
          a: 'For most users, yes. MP3 is small, universally supported, and accuracy with Whisper is essentially identical to WAV or FLAC. Only use lossless (WAV, FLAC) if you also need the audio for editing later.',
        },
        {
          q: 'What MP3 bitrates work best?',
          a: 'Anything from 32 kbps mono up to 320 kbps stereo works. For voice, 64 to 96 kbps mono is the practical sweet spot. Higher does not improve transcription, lower starts losing intelligibility for the model.',
        },
        {
          q: 'My MP3 is over 60 MB. What now?',
          a: 'Two options. Either re-encode at a lower bitrate (64 kbps mono cuts most MP3s by 4x or more), or split the file into chunks under 60 MB. We have guides for both.',
        },
        {
          q: 'How long does an MP3 take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 60-minute MP3 finishes in around 60 seconds. A 10-minute MP3 in 10 to 20 seconds. Network upload time is usually the longer wait.',
        },
        {
          q: 'Will my MP3 be stored or shared?',
          a: 'No. The file streams to our speech provider (Groq, with OpenAI as backup), gets transcribed, then is discarded. We do not write it to our servers, and the providers we use do not train on API data.',
        },
        {
          q: 'Can I batch upload multiple MP3s?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the paid Pro tier.',
        },
        {
          q: 'What languages do you support?',
          a: 'Over 50 languages. Auto-detect handles most cases. For files under 5 minutes or files that open with music or silence, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get timestamps from an MP3?',
          a: 'Yes. Download as SRT (subtitle file) and you get timestamps every few seconds. Or use our Timestamped Transcription page for word-level granularity.',
        },
        {
          q: 'Does Mictoo work with podcast MP3s that have chapter markers?',
          a: 'We extract the audio and ignore chapter metadata. You get the full transcript as one document. If you want chapter-aligned transcripts, split the MP3 at the chapter boundaries first.',
        },
        {
          q: 'Will my MP3 transcript have speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization out of the box. If you need speaker labels, upload each speaker track separately (if you have separate tracks) and label them yourself.',
        },
        {
          q: 'Can I transcribe an AI-generated voice MP3?',
          a: 'Yes. TTS audio (ElevenLabs, OpenAI, Murf, etc.) usually transcribes cleaner than human speech because there is no background noise or hesitation.',
        },
        {
          q: 'My MP3 is in a rare language. Will it work?',
          a: 'If Whisper supports the language, yes. The model covers 50+ languages with strong accuracy and basic support for many more. Try it. If the result is unusable, the language is probably outside Whisper training data.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'For non-MP3 formats (WAV, M4A, FLAC, OGG).' },
        { href: '/podcast-transcription', label: 'Podcast Transcription', desc: 'Same engine, podcast-specific tips.' },
        { href: '/free-srt-generator', label: 'Free SRT Generator', desc: 'Need subtitles for video, not just plain text.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When your MP3 is too big.' },
      ]}
    />
  )
}
