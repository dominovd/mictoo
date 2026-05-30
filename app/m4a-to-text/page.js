import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'M4A to Text — Free M4A Transcription Online | Mictoo',
  description:
    'Free M4A to text converter. Upload iPhone Voice Memos, Apple Music recordings, podcast M4As. Clean AI transcript in seconds, 50+ languages, no signup.',
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
    title: "M4A to Text — Free M4A Transcription Online | Mictoo",
    description: "Free M4A to text converter. Upload iPhone Voice Memos, Apple Music recordings, podcast M4As. Clean AI transcript in seconds, 50+ languages, no signup.",
    url: "https://mictoo.com/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A to Text — Free M4A Transcription Online | Mictoo",
    description: "Free M4A to text converter. Upload iPhone Voice Memos, Apple Music recordings, podcast M4As. Clean AI transcript in seconds, 50+ languages, no signup.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function M4aToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Apple · Free"
      h1={
        <>
          M4A to Text
          <br />
          <span className="text-brand-600">Free M4A Audio Transcription</span>
        </>
      }
      subtitle="Free AI transcription for any M4A file. iPhone Voice Memos, Apple Music recordings, podcast exports. Drop the file, get text in seconds."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the M4A',
          desc: 'iPhone Voice Memos export, M4A from QuickTime, AAC-in-MP4 from your podcast host, GarageBand bounces. All work directly.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the M4A and converts speech to text. A 5-minute voice memo finishes in around 10 seconds. A 30-minute recording takes under a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser, copy it, or download as TXT or SRT. Fix wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for M4A',
        bullets: [
          {
            title: 'Native M4A support',
            desc: 'No need to convert M4A to MP3 first. We accept it directly. Saves you a step and avoids quality loss from a second encoding pass.',
          },
          {
            title: 'Handles iPhone Voice Memos out of the box',
            desc: 'Voice Memos saves in M4A format by default (AAC codec in an MP4 container). Both standard quality and lossless versions work. ALAC inside M4A also works since recent versions of iOS.',
          },
          {
            title: 'Small files, fast upload',
            desc: 'M4A at typical voice memo settings is around 1 MB per minute. A 30-minute interview fits comfortably under our 60 MB cap with no compression needed.',
          },
          {
            title: '50+ languages including bilingual M4As',
            desc: 'iPhone records in whatever language you speak. If your memo switches between two languages, Whisper follows the switch in most cases.',
          },
          {
            title: 'No file is stored',
            desc: 'Your M4A streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Where M4A files come from',
        items: [
          {
            title: 'iPhone Voice Memos',
            desc: 'The default Voice Memos app saves as M4A. Quick capture of ideas on the move, dictation, on-the-go interview notes. Share to AirDrop or email, then upload here.',
          },
          {
            title: 'Mac QuickTime audio recording',
            desc: 'File > New Audio Recording in QuickTime saves as M4A by default. Useful for clean voice-over and dictation when you do not want to fire up a full DAW.',
          },
          {
            title: 'GarageBand and Logic Pro bounces',
            desc: 'Apple audio apps export as M4A AAC by default. Podcast hosts on Mac often have their working files in M4A.',
          },
          {
            title: 'Podcast hosts that serve M4A',
            desc: 'Some podcast hosts (Apple Podcasts feeds in particular) serve episodes as M4A. Drop the downloaded file straight into Mictoo.',
          },
          {
            title: 'Zoom local audio recordings',
            desc: 'Zoom local recordings save the audio track as M4A alongside the MP4 video. Smaller than the video, transcribes just as accurately. Use the M4A.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for M4A transcription',
        tips: [
          {
            title: 'For iPhone, switch Voice Memos to lossy quality',
            desc: 'Settings, Voice Memos, Audio Quality. Default is "Compressed" which is lossy M4A. If you set it to "Lossless", you get ALAC files that are 5x larger with no transcription benefit. Lossy is the right choice.',
          },
          {
            title: 'AirDrop is the fastest way from iPhone to Mac',
            desc: 'Tap the memo in Voice Memos, tap Share, pick AirDrop, send to your Mac. Faster and easier than emailing. From the Mac, drag the file into mictoo.com.',
          },
          {
            title: 'You can upload directly from your iPhone too',
            desc: 'Safari on iOS opens mictoo.com fine. Tap the upload area, the iOS file picker opens, choose your M4A from the Voice Memos folder or Files app. Done without a Mac.',
          },
          {
            title: 'For long interviews, the M4A is usually small enough already',
            desc: 'iPhone Voice Memos at default quality are around 1 MB per minute. A 30-minute interview is 30 MB. That fits in the free 25 MB tier if you trim a bit of silence, or comfortably in the 60 MB signed-in tier.',
          },
          {
            title: 'Trim silence at the start and end in Voice Memos before exporting',
            desc: 'Voice Memos has a built-in trim editor. Tap a memo, hit the trim button, drag the handles to cut dead air. Smaller file, transcribed faster.',
          },
          {
            title: 'For sermon-quality M4A (long, music intro, multi-speaker), still works',
            desc: 'A 60-minute sermon with hymns at the start transcribes fine if you sign in for the 60 MB cap. We have a dedicated sermon transcription page with format-specific tips.',
          },
        ],
      }}
      faq={[
        {
          q: 'Does Mictoo support iPhone Voice Memos M4A?',
          a: 'Yes. Both the standard lossy M4A (AAC) and the lossless M4A (ALAC) versions work. The lossy version is much smaller and just as accurate for transcription.',
        },
        {
          q: 'What is the difference between M4A and MP3?',
          a: 'M4A is AAC audio inside an MP4 container. AAC is a more modern codec than MP3, with better quality at the same bitrate. Most modern devices and apps prefer M4A. Both work equally well for Mictoo transcription.',
        },
        {
          q: 'Can I transcribe M4A from Apple Music?',
          a: 'Apple Music tracks are DRM-protected and cannot be transcribed by third-party tools. We are not able to bypass DRM. If you have unprotected M4A audio (own recordings, podcast downloads, ripped from CD), those work fine.',
        },
        {
          q: 'My M4A is over 60 MB. What do I do?',
          a: 'Either trim silence (Voice Memos has a built-in trimmer), or re-encode to a lower bitrate. A 64 kbps mono MP3 is one-third the size of a typical M4A at no transcription quality loss. See our compression guide.',
        },
        {
          q: 'How long does an M4A take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 5-minute voice memo finishes in around 5 to 10 seconds. A 30-minute recording in around a minute.',
        },
        {
          q: 'Will my M4A be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not write the M4A to disk on our side.',
        },
        {
          q: 'Can I batch upload multiple M4As?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the future Pro tier.',
        },
        {
          q: 'What languages do you support?',
          a: 'Over 50 languages with auto-detect. For voice memos under 5 minutes, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get timestamps from an M4A?',
          a: 'Yes. Download as SRT and you get timestamps every few seconds. Useful for jumping back to a specific moment in the original recording.',
        },
        {
          q: 'My M4A has speakers in two languages. Will it handle that?',
          a: 'In most cases yes. Whisper supports code-switching mid-recording. Pick "Auto-detect" for the language and Whisper will follow the switch. For very short recordings (under a minute), pick the dominant language manually.',
        },
        {
          q: 'How accurate is M4A transcription compared to WAV?',
          a: 'Essentially identical. M4A at typical quality (96 kbps and up) and WAV produce the same transcript accuracy. Only very low-quality M4A (below 32 kbps) shows accuracy loss.',
        },
        {
          q: 'Will the transcript include emotion or pauses?',
          a: 'No. The transcript is plain text. Pauses, sighs, laughs, and tone are not represented. For text that needs to convey delivery, you have to add direction yourself.',
        },
      ]}
      relatedLinks={[
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'Specifically branded for iPhone and Android voice memo workflows.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/aac-to-text', label: 'AAC to Text', desc: 'For bare AAC files (without the MP4 container).' },
        { href: '/m4a-to-mp3', label: 'M4A to MP3 Converter', desc: 'If you need MP3 for compatibility with older tools.' },
      ]}
    />
  )
}
