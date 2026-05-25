import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'WEBM to Text — Free WEBM Transcription Online | Mictoo',
  description:
    'Free WEBM to text converter. Upload any WEBM audio or video file (Discord recordings, browser MediaRecorder, web app exports). Clean AI transcript in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'ko': 'https://mictoo.com/ko/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
}

export default function WebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Web-native · Free"
      h1={
        <>
          WEBM to Text
          <br />
          <span className="text-brand-600">Free WEBM Transcription</span>
        </>
      }
      subtitle="Free AI transcription for WEBM files. Discord recordings, screen captures from the browser, MediaRecorder API output. Drop the file, get text in seconds."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the WEBM',
          desc: 'Both audio-only WEBM (Opus codec) and video WEBM (with audio inside) work. We pull the audio out of video automatically.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the audio and converts to text. A 5-minute screen recording finishes in around 10 seconds. A 30-minute file takes under a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser, copy to clipboard, or download as TXT or SRT. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for WEBM',
        bullets: [
          {
            title: 'Native WEBM support',
            desc: 'WEBM is the web-native container, but a lot of transcription tools do not accept it directly and ask you to convert to MP4 or MP3 first. We accept WEBM (audio or video) and decode it server-side.',
          },
          {
            title: 'Browser MediaRecorder output works',
            desc: 'When a web app records audio or video from your microphone or screen (Loom alternatives, Riverside fallback recordings, custom recording apps), the output is usually WEBM with Opus audio. Drop it here directly.',
          },
          {
            title: 'Discord call exports work',
            desc: 'Discord saves call recordings (via Craig bot or similar) as WEBM. We handle the file format and pull out the speech.',
          },
          {
            title: 'Smaller than MP4 for the same content',
            desc: 'WEBM with VP9 video and Opus audio is more efficient than MP4 with H.264 and AAC. Useful when you have a 60-minute screen recording and want a smaller file.',
          },
          {
            title: 'No file is stored',
            desc: 'Your WEBM streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Where WEBM files come from',
        items: [
          {
            title: 'Discord voice channel recordings',
            desc: 'Recording bots like Craig save Discord call audio as WEBM. Useful for transcribing community calls, podcast recordings done on Discord, gaming sessions with commentary.',
          },
          {
            title: 'Browser screen recorders',
            desc: 'Loom alternatives, Screencastify, web-based recording tools usually save as WEBM. Common for tutorial creators, customer support video replies, async team updates.',
          },
          {
            title: 'Web app MediaRecorder output',
            desc: 'Custom web apps that record voice from the browser microphone (transcription apps, voice memo web apps, call apps) typically produce WEBM Opus.',
          },
          {
            title: 'OBS Studio recordings (when configured for WEBM)',
            desc: 'OBS can output in several formats. If you configured it for WEBM, drop the file here. The audio gets transcribed regardless of video codec.',
          },
          {
            title: 'YouTube downloads (when delivered as WEBM)',
            desc: 'yt-dlp and some other YouTube downloaders prefer WEBM as the highest-quality format for many videos. Drop the .webm file here directly, no conversion needed.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for WEBM transcription',
        tips: [
          {
            title: 'For Discord recordings, mute non-speaking participants if you can',
            desc: 'Discord recording bots usually capture every participant. Open mics in the background create noise that hurts transcript accuracy. If you have a multi-track export, transcribe each speaker track separately.',
          },
          {
            title: 'Extract audio from video WEBM to save upload time',
            desc: 'A 30-minute screen recording is mostly video bytes. Pull audio only: open in Audacity or any audio app, save as MP3 or OGG. The audio is 10x smaller than the original WEBM video.',
          },
          {
            title: 'WEBM Opus is already a great speech codec',
            desc: 'No need to re-encode. The audio inside Browser MediaRecorder WEBM files is Opus, which Whisper handles natively at high accuracy.',
          },
          {
            title: 'For long screen recordings, the audio is the part that matters',
            desc: 'The video shows what the presenter clicked. The transcript captures what they said. Both are useful. Save the original WEBM for the visual reference, save the transcript for the searchable text.',
          },
          {
            title: 'For web app users: ask before you record',
            desc: 'If you are recording your customers from inside your own web app (UX research, support sessions), legal consent rules apply. Get explicit consent first, especially in EU and California.',
          },
          {
            title: 'WEBM with screen recording often has system audio plus mic mixed',
            desc: 'If your tool captures both the system audio (notifications, app sounds) and your mic, you might get unexpected words from background app sounds in the transcript. Mute system sounds during important recordings.',
          },
        ],
      }}
      faq={[
        {
          q: 'What WEBM formats do you support?',
          a: 'Both audio-only WEBM (typically Opus codec) and video WEBM (with audio inside, usually VP8 or VP9 video plus Opus or Vorbis audio). We extract the audio from video automatically.',
        },
        {
          q: 'Does Mictoo work with Discord call recordings?',
          a: 'Yes. Discord recording bots (Craig, Voice Recorder, etc.) typically save as WEBM. Drop the file here directly. For multi-speaker calls, consider transcribing each speaker track separately if your bot exports per-speaker tracks.',
        },
        {
          q: 'My WEBM is from a browser screen recording. Will it work?',
          a: 'Yes. Browser MediaRecorder output is WEBM with Opus audio. Whisper handles it natively. If the file is just audio (no video), it transcribes faster.',
        },
        {
          q: 'My WEBM is over 60 MB. What do I do?',
          a: 'If it is a video, extract audio-only first. A 1 GB video WEBM usually becomes 30 MB or less as audio-only Opus or MP3. If your audio-only WEBM is over 60 MB, split into chunks. See our compression and splitting guides.',
        },
        {
          q: 'How long does a WEBM take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 30-minute file finishes in around a minute, plus a small overhead if we extract audio from video.',
        },
        {
          q: 'Will my WEBM be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not write the WEBM or the extracted audio to disk.',
        },
        {
          q: 'Can I batch upload multiple WEBM recordings?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the future Pro tier.',
        },
        {
          q: 'What languages do you support for WEBM transcription?',
          a: 'Over 50 languages with auto-detect. For files under 5 minutes or files with non-speech intros, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get SRT subtitles from a video WEBM?',
          a: 'Yes. Download as SRT after transcription. The timestamps line up against the audio in the WEBM video, so you can drop the SRT into any video editor that supports the WEBM as input.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. For multi-speaker WEBMs, add labels manually based on conversation flow. If your recording tool exports per-speaker tracks, transcribe each separately.',
        },
        {
          q: 'My WEBM has audio out of sync with video. Will that affect the transcript?',
          a: 'No. The transcript reflects the audio track, regardless of video sync. The SRT timestamps line up against the audio, which is also what the video player uses for sync.',
        },
        {
          q: 'Can I transcribe WebRTC call recordings (Jitsi, BigBlueButton, etc.)?',
          a: 'Yes, as long as the export is a standard WEBM, MP4, M4A, MP3, WAV, or another supported format. We work with the file, not the source platform.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'Generic video transcription for any format.' },
        { href: '/ogg-to-text', label: 'OGG to Text', desc: 'For OGG files (similar codecs to WEBM Opus).' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/youtube-to-text', label: 'YouTube to Text', desc: 'For YouTube downloads that come as WEBM.' },
      ]}
    />
  )
}
