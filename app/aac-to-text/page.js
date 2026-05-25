import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'AAC to Text — Free AAC Audio Transcription Online | Mictoo',
  description:
    'Free AAC to text converter. Upload any AAC audio file (.aac, .adts, AAC-in-MP4). Clean AI transcript in seconds, 50+ languages, no signup.',
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
}

export default function AacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · ADTS · Free"
      h1={
        <>
          AAC to Text
          <br />
          <span className="text-brand-600">Free AAC Audio Transcription</span>
        </>
      }
      subtitle="Free AI transcription for AAC files. Apple device exports, streaming media downloads, YouTube audio rips. Drop the file, get the text in seconds."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the AAC',
          desc: 'Both bare AAC (.aac, ADTS stream) and AAC-in-MP4 container (.m4a) work. We auto-detect the wrapper and decode accordingly.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the audio and converts to text. A 10-minute file takes around 15 seconds. A 30-minute file finishes under a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser, copy to clipboard, or download as TXT or SRT. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for AAC',
        bullets: [
          {
            title: 'Both AAC wrappers work',
            desc: 'AAC audio comes in two main containers. Bare ADTS stream (.aac extension) and MP4 container (.m4a, also used for video). We support both. Most other transcribers only accept one of them.',
          },
          {
            title: 'Default codec for streaming and Apple',
            desc: 'AAC is the audio codec for YouTube, Spotify, iTunes, Apple Music exports, and most modern streaming. If you have an audio file from any of these (your own content, not DRM-protected), AAC is the most likely format.',
          },
          {
            title: 'Smaller than MP3 at the same quality',
            desc: 'AAC is a more modern codec than MP3, with better quality at the same bitrate. A 64 kbps AAC file is roughly equivalent to a 96 kbps MP3.',
          },
          {
            title: 'No quality loss in our pipeline',
            desc: 'We send AAC straight to the transcription provider without re-encoding to MP3 first. Faster and avoids the slight quality hit of a second encoding pass.',
          },
          {
            title: 'No file is stored',
            desc: 'Your AAC streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Where AAC files come from',
        items: [
          {
            title: 'iPhone and Apple device recordings',
            desc: 'iPhone Voice Memos defaults to M4A (AAC inside MP4). iPad GarageBand exports, Mac QuickTime audio recordings, all AAC by default.',
          },
          {
            title: 'YouTube audio downloads',
            desc: 'When you download audio-only from YouTube (via 4K Video Downloader, ClipGrab, or similar), AAC in M4A is the most common output format. Drop the file here directly.',
          },
          {
            title: 'Streaming service audio (non-DRM)',
            desc: 'Free preview clips, podcast audio from streaming services, and other non-protected audio downloads often come as AAC. If the file is unprotected, it transcribes here.',
          },
          {
            title: 'AAC-LC, HE-AAC, and other AAC profiles',
            desc: 'Web video and IP TV streams often use HE-AAC for the audio track. We support all common AAC profiles.',
          },
          {
            title: 'Broadcast and IPTV audio',
            desc: 'Many digital radio and IPTV streams use AAC for audio. Recordings from these sources transcribe directly.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for AAC transcription',
        tips: [
          {
            title: 'For iPhone Voice Memos, leave the default quality',
            desc: 'iPhone defaults to "Compressed" which is AAC at a good bitrate for voice. Switching to "Lossless" gives you huge ALAC files with no transcription benefit. Compressed is the right choice.',
          },
          {
            title: 'AAC-in-MP4 (.m4a) and bare AAC (.aac) both work',
            desc: 'You do not need to convert between them. We decode the audio out of either wrapper. If your file is m4a, use it. If it is bare aac (less common), still works.',
          },
          {
            title: 'For huge AAC files, transcode to 64 kbps mono first',
            desc: 'A 60-minute stereo AAC at high bitrate can be 80 MB or more. Re-encode to 64 kbps mono and the file drops to around 28 MB. Audacity does this with File, Export, choose AAC (M4A).',
          },
          {
            title: 'For YouTube AAC downloads, audio-only is much smaller',
            desc: 'If you download a YouTube video as audio-only AAC, you get a small file (usually under 25 MB for 30 minutes). Faster upload than the full video.',
          },
          {
            title: 'For phone-call AAC (low bitrate, mono), expect lower accuracy',
            desc: 'AAC at very low bitrates (16 kbps, 24 kbps) is sometimes used for phone-line audio. Whisper handles these, but proper nouns and rapid speech are harder. Fix names and numbers manually.',
          },
          {
            title: 'ADTS-AAC (.aac) works, but be careful with edited files',
            desc: 'Bare AAC streams cannot be safely cut at arbitrary points. If you trimmed an ADTS .aac in a basic editor that does not handle the frame boundaries, the cut points might have audible glitches. Convert to M4A first if you need to edit.',
          },
        ],
      }}
      faq={[
        {
          q: 'What AAC formats do you support?',
          a: 'Both bare AAC (ADTS stream with .aac extension) and AAC inside an MP4 container (.m4a). All common AAC profiles: AAC-LC, HE-AAC, HE-AAC v2. Sample rates from 8 kHz to 48 kHz, mono or stereo.',
        },
        {
          q: 'What is the difference between AAC and M4A?',
          a: 'AAC is the codec (the actual audio encoding algorithm). M4A is the file format (a container that holds AAC audio inside an MP4 wrapper). Most AAC audio you encounter is in an M4A container. Bare AAC files (.aac) are less common, mostly seen in broadcast or streaming contexts.',
        },
        {
          q: 'Is AAC better than MP3?',
          a: 'For the same bitrate, AAC has better audio quality. A 96 kbps AAC sounds noticeably better than a 96 kbps MP3. For transcription, the difference is minimal at normal bitrates.',
        },
        {
          q: 'Can I transcribe AAC audio from Apple Music?',
          a: 'Apple Music tracks are DRM-protected and cannot be transcribed by third-party tools. If you have unprotected AAC (your own recordings, free podcast downloads, your own iTunes purchases that are DRM-free), those work.',
        },
        {
          q: 'My AAC is over 60 MB. What do I do?',
          a: 'Transcode to 64 kbps mono AAC or MP3. Audacity does this in two clicks. Or split into chunks under 60 MB. See our compression and splitting guides.',
        },
        {
          q: 'How long does an AAC take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 30-minute file finishes in around 30 to 60 seconds.',
        },
        {
          q: 'Will my AAC be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not write the AAC to disk.',
        },
        {
          q: 'What languages do you support?',
          a: 'Over 50 languages with auto-detect. For files under 5 minutes or files with non-speech intros, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get timestamps from an AAC?',
          a: 'Yes. Download as SRT (subtitle file) and you get timestamps every few seconds.',
        },
        {
          q: 'My AAC came from a YouTube download. Will it work?',
          a: 'Yes. yt-dlp and similar downloaders often save audio as AAC in M4A. Drop the file here directly.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization out of the box. Add labels manually based on the conversation flow.',
        },
        {
          q: 'Can I transcribe AAC with very low bitrate (broadcast quality)?',
          a: 'Yes. Whisper handles low-bitrate AAC (down to around 16 kbps) but accuracy drops a few percent compared to higher-bitrate audio. Names and technical terms often need cleanup.',
        },
      ]}
      relatedLinks={[
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'For AAC in M4A container, specifically branded.' },
        { href: '/aac-to-mp3', label: 'AAC to MP3 Converter', desc: 'If you need MP3 for compatibility with older tools.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'For iPhone Voice Memo workflows.' },
      ]}
    />
  )
}
