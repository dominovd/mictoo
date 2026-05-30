import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'OGG to Text — Free OGG Audio Transcription Online | Mictoo',
  description:
    'Free OGG to text converter. Upload any OGG file (Vorbis, Opus, FLAC inside OGG, Telegram .oga voice notes). Clean AI transcript in seconds, 50+ languages.',
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
    title: "OGG to Text — Free OGG Audio Transcription Online | Mictoo",
    description: "Free OGG to text converter. Upload any OGG file (Vorbis, Opus, FLAC inside OGG, Telegram .oga voice notes). Clean AI transcript in seconds, 50+ languages.",
    url: "https://mictoo.com/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG to Text — Free OGG Audio Transcription Online | Mictoo",
    description: "Free OGG to text converter. Upload any OGG file (Vorbis, Opus, FLAC inside OGG, Telegram .oga voice notes). Clean AI transcript in seconds, 50+ languages.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function OggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Opus · Vorbis · Free"
      h1={
        <>
          OGG to Text
          <br />
          <span className="text-brand-600">Free OGG Audio Transcription</span>
        </>
      }
      subtitle="Free AI transcription for OGG files. Vorbis, Opus, FLAC-in-OGG, Telegram voice notes (.oga). Drop the file, get text in seconds."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the OGG',
          desc: 'Any OGG file works. .ogg, .oga, or Opus-in-OGG. We auto-detect the codec inside the container. Telegram voice notes are supported directly.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the OGG and converts speech to text. Telegram voice notes (usually 1 to 3 minutes) finish in around 5 seconds. Longer files scale linearly.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser, copy to clipboard, or download as TXT or SRT. Fix wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for OGG',
        bullets: [
          {
            title: 'All OGG codecs work',
            desc: 'OGG is a container, not a codec. Inside it can be Vorbis (older, common in games and open-source apps), Opus (modern, used by WhatsApp and Telegram), or FLAC. We handle all three.',
          },
          {
            title: 'Telegram voice notes work directly',
            desc: 'Telegram saves voice messages as OGG Opus, with the .oga extension. Save a voice note from Telegram, drop the .oga file here, get the transcript. No conversion needed.',
          },
          {
            title: 'Small files, fast turnaround',
            desc: 'OGG Opus is the most efficient audio codec for speech. A typical voice note is under 100 KB per minute. A 10-minute recording is around 1 MB. Uploads in seconds.',
          },
          {
            title: 'Common in open-source and gaming ecosystems',
            desc: 'If you record on Linux, in Audacity with OGG export, or from a game using OGG audio, this is the right page.',
          },
          {
            title: 'No file is stored',
            desc: 'Your OGG streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Where OGG files come from',
        items: [
          {
            title: 'Telegram voice messages',
            desc: 'Telegram saves voice notes as OGG Opus (.oga extension). Save the voice note from Telegram (right-click, Save As on desktop; or share to Files on mobile) and drop it here.',
          },
          {
            title: 'WhatsApp voice notes',
            desc: 'WhatsApp also uses OGG Opus for voice messages. Export the voice note from WhatsApp via "Share to" Files or email, then upload the file here.',
          },
          {
            title: 'Audacity OGG exports',
            desc: 'Audacity has OGG Vorbis as one of its default export formats. If your podcast or interview was exported as OGG, drop it in directly.',
          },
          {
            title: 'Game and indie media OGG audio',
            desc: 'Many open-source games and indie projects use OGG Vorbis for cutscene audio and voice acting. Useful for fan transcripts or accessibility subtitles for indie games.',
          },
          {
            title: 'Wikimedia and Creative Commons OGG audio',
            desc: 'Wikipedia and Wikimedia Commons distribute audio in OGG Vorbis for license reasons. Useful for transcribing public-domain or CC speeches and lectures.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for OGG transcription',
        tips: [
          {
            title: 'Telegram .oga files are already optimized for voice',
            desc: 'No need to convert. OGG Opus at the bitrate Telegram uses is essentially the ideal format for speech transcription. Just upload the .oga file.',
          },
          {
            title: 'For long OGG recordings, mono is enough',
            desc: 'OGG Opus stereo files transcribe the same as mono. If you have a long stereo recording, convert to mono before upload to cut file size. Audacity can re-export as mono OGG in two clicks.',
          },
          {
            title: 'OGG Vorbis at 96 kbps is the sweet spot for voice',
            desc: 'Anything higher is wasted for transcription. If you control the export, pick 96 kbps OGG Vorbis or 64 kbps OGG Opus. Both produce identical transcript accuracy with minimal file size.',
          },
          {
            title: 'For very short voice notes, pick the language manually',
            desc: 'Auto-detect needs a few seconds of audio to be reliable. A 5-second Telegram voice note often confuses auto-detect. Pick the language from the dropdown before upload.',
          },
          {
            title: 'For mass-transcribing your voice note history, sign in',
            desc: 'Signed-in accounts keep a history of past transcripts. Useful if you have a folder of Telegram voice notes you want to convert to searchable text over time.',
          },
          {
            title: 'OGG metadata (artist, title) does not affect the transcript',
            desc: 'Whisper transcribes the audio, ignores the tags. Useful to know if you are wondering why the transcript does not include the song title from the metadata.',
          },
        ],
      }}
      faq={[
        {
          q: 'What OGG codecs do you support?',
          a: 'All three common codecs in the OGG container: Vorbis (older, common in Audacity exports), Opus (modern, used by Telegram and WhatsApp), and FLAC-in-OGG. We auto-detect the codec from the file.',
        },
        {
          q: 'Does Mictoo work with Telegram voice notes?',
          a: 'Yes. Telegram voice notes are OGG Opus with the .oga extension. Save the voice note from Telegram (Desktop: right-click, Save As; Mobile: tap and hold, Share to Files), then upload the .oga file here.',
        },
        {
          q: 'What about WhatsApp voice messages?',
          a: 'Same format (OGG Opus). Export from WhatsApp via "Share to" your file manager or email, then upload here.',
        },
        {
          q: 'My OGG is over 60 MB. What now?',
          a: 'OGG files are usually small for speech. If yours is over 60 MB, it is probably a long stereo recording at high bitrate. Convert to mono and pick a lower bitrate (96 kbps Vorbis or 64 kbps Opus). Or split into chunks. See our compression guide.',
        },
        {
          q: 'How long does an OGG take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 5-minute file finishes in around 10 to 15 seconds. Most voice notes (under 3 minutes) come back in under 5 seconds.',
        },
        {
          q: 'Will my OGG be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not write the OGG to our servers.',
        },
        {
          q: 'Can I batch upload multiple voice notes?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the future Pro tier.',
        },
        {
          q: 'What languages do you support?',
          a: 'Over 50 languages. Auto-detect handles most cases. For very short voice notes (under 30 seconds), pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get timestamps from an OGG?',
          a: 'Yes. Download as SRT and you get timestamps every few seconds.',
        },
        {
          q: 'My OGG has multiple speakers. Will I get speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization out of the box. Add labels manually based on conversation flow.',
        },
        {
          q: 'Is OGG accuracy worse than MP3 or WAV?',
          a: 'No. OGG Vorbis and Opus are modern codecs that handle speech very well. Transcript accuracy is the same as MP3 or WAV at comparable bitrates.',
        },
        {
          q: 'Can I transcribe game audio in OGG format?',
          a: 'Yes, if the audio is mostly speech. Whisper transcribes spoken dialogue from games or cutscenes. Background music and sound effects can occasionally trigger hallucinated words.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'For phone voice notes (iPhone and Android).' },
        { href: '/webm-to-text', label: 'WEBM to Text', desc: 'For WEBM files (similar use case, web-native).' },
        { href: '/flac-to-text', label: 'FLAC to Text', desc: 'For pure FLAC files (without OGG container).' },
      ]}
    />
  )
}
