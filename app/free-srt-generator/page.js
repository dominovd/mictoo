import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Free SRT Generator — Create SRT Subtitle Files Online | Mictoo',
  description:
    'Free SRT subtitle generator. Upload your audio or video file and get a clean .srt file with timestamps in seconds. Works with YouTube, Premiere, DaVinci, CapCut.',
  alternates: {
    canonical: 'https://mictoo.com/free-srt-generator',
    languages: {
      'en': 'https://mictoo.com/free-srt-generator',
      'fr': 'https://mictoo.com/fr/free-srt-generator',
      'de': 'https://mictoo.com/de/free-srt-generator',
      'es': 'https://mictoo.com/es/free-srt-generator',
      'ru': 'https://mictoo.com/ru/free-srt-generator',
      'it': 'https://mictoo.com/it/free-srt-generator',
      'pt': 'https://mictoo.com/pt/free-srt-generator',
      'pl': 'https://mictoo.com/pl/free-srt-generator',
      'ja': 'https://mictoo.com/ja/free-srt-generator',
      'ko': 'https://mictoo.com/ko/free-srt-generator',
      'x-default': 'https://mictoo.com/free-srt-generator',
    },
  },
}

export default function SrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Subtitles · Free"
      h1={
        <>
          Free SRT Generator
          <br />
          <span className="text-brand-600">AI Subtitle File from Any Audio or Video</span>
        </>
      }
      subtitle="Generate subtitle files from any audio or video. Get a clean .srt with accurate timestamps in seconds. Drop-in for YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the audio or video',
          desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. We extract audio from video automatically.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes and aligns',
          desc: 'Whisper large-v3 transcribes the audio and generates timestamps for each line. A 10-minute video usually takes 15 seconds. A 30-minute video, about a minute.',
        },
        {
          icon: '💾',
          title: 'Download the .srt',
          desc: 'Click "Download as SRT". The file is standard format, drop-in compatible with every major video editor and YouTube Studio.',
        },
      ]}
      whyUse={{
        title: 'Why this SRT generator',
        bullets: [
          {
            title: 'Whisper large-v3 timestamps are frame-accurate',
            desc: 'Timestamps are in milliseconds, which is more precise than any common video frame rate. They line up correctly at 24, 25, 29.97, 30, 50, and 60 fps without offset adjustment.',
          },
          {
            title: 'Free with no per-minute meter',
            desc: 'Transcribe 10 minutes or 60. Same price (free). No "upgrade to Pro" gate after the first file.',
          },
          {
            title: '50+ languages',
            desc: 'Generate subtitles for content in any major language. Useful for international YouTube channels and translated subtitle tracks.',
          },
          {
            title: 'Standard .srt format',
            desc: 'No proprietary extensions, no funky encoding. Works in Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.',
          },
          {
            title: 'No file is stored',
            desc: 'The audio streams to the transcription provider and is discarded after processing. We do not retain your video.',
          },
        ],
      }}
      useCases={{
        title: 'What people generate SRT files for',
        items: [
          {
            title: 'YouTube uploads',
            desc: 'Replace YouTube auto-captions with a clean .srt. Better punctuation, fewer wrong words, better accessibility for hearing-impaired viewers. Bonus: YouTube search indexes uploaded captions more reliably than auto-generated ones.',
          },
          {
            title: 'Social video captions (TikTok, Reels, Shorts)',
            desc: 'Generate the .srt here, import into CapCut or Premiere, style the captions to taste, burn them into the video. Most viewers watch with sound off, so captions are not optional anymore.',
          },
          {
            title: 'Subtitling for accessibility',
            desc: 'Conference talk recordings, internal training videos, online courses. Captions make them usable for deaf and hard-of-hearing viewers and for anyone in a noisy environment.',
          },
          {
            title: 'Translation pipeline',
            desc: 'Generate the .srt in the source language, paste it into DeepL or ChatGPT for translation, save as a target-language .srt. Result: dubbed-quality captions in another language without paying for human translation.',
          },
          {
            title: 'Video editing on a deadline',
            desc: 'When you need captions yesterday and cannot wait for a human transcriber, AI captions are good enough for the first cut. Polish later.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for SRT generation',
        tips: [
          {
            title: 'For long videos, generate .srt for 10-minute chunks and concatenate',
            desc: 'Easier to fix wrong timestamps in the middle if any drift happens. Most editors let you import multiple .srt files and stitch them together.',
          },
          {
            title: 'Audio-only upload is faster than video upload for the same content',
            desc: 'Extract audio first: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. The .srt you get back works against the original video, since timestamps are timestamps.',
          },
          {
            title: 'Burn captions only after editing',
            desc: 'If you burn captions into the video before you make edits, you have to re-do the captions when you cut. Burn at the end, after the video is locked.',
          },
          {
            title: 'Keep .srt line length manageable',
            desc: 'Whisper sometimes produces long single-line captions for long sentences. Most editors let you split long lines automatically, or you can manually split for better readability.',
          },
          {
            title: 'For multilingual videos, generate .srt in one language at a time',
            desc: 'If your video has English and Spanish sections, generate .srt for each section separately (set the language manually each time), then merge into one .srt file.',
          },
          {
            title: 'Edit the .srt in a text editor, not a video editor',
            desc: 'A .srt is just plain text with timestamps. Open in VS Code, Notepad++, or BBEdit to fix typos quickly. Re-import into the video editor when done.',
          },
          {
            title: 'For TikTok and Reels, manually shorten captions to one short line per caption',
            desc: 'Whisper natural sentences are longer than TikTok punchy caption style. Edit the .srt to match the platform style.',
          },
        ],
      }}
      faq={[
        {
          q: 'What is an SRT file?',
          a: 'SRT (SubRip Subtitle) is the most common subtitle file format. Plain text with timestamps and the subtitle text. Every major video player and editor reads .srt files.',
        },
        {
          q: 'How do I generate an SRT file from a video?',
          a: 'Upload the video here. We extract audio, transcribe, and generate the .srt. Click "Download as SRT" when ready.',
        },
        {
          q: 'How do I add SRT captions to a YouTube video?',
          a: 'In YouTube Studio, open your video, go to Subtitles, click Add Languages, upload the .srt file. YouTube will use it as the official captions for that language.',
        },
        {
          q: 'Does the SRT file work in Premiere Pro and DaVinci Resolve?',
          a: 'Yes. In Premiere, File, Import, select the .srt. In DaVinci, drag the .srt into the project bin. Both treat it as a subtitle track you can edit further on the timeline.',
        },
        {
          q: 'Does it work in CapCut and Final Cut?',
          a: 'Yes. CapCut: tap Captions, Import SRT. Final Cut: File, Import, Captions, select the .srt. Both place captions on the timeline at the correct times.',
        },
        {
          q: 'Is the SRT generator really free?',
          a: 'Yes. No per-file fee, no per-minute meter, no email required for files under 25 MB. Files between 25 MB and 60 MB need a free signed-in account.',
        },
        {
          q: 'What is the maximum file size for SRT generation?',
          a: '25 MB without an account, 60 MB with a free account.',
        },
        {
          q: 'Can I generate SRT from audio files (MP3, WAV)?',
          a: 'Yes. Drop the audio file directly. We generate the .srt with timestamps as if it were video audio. Useful for adding captions when you sync the audio to images or slides later.',
        },
        {
          q: 'Will the timestamps drift over a long video?',
          a: 'Whisper timestamps are aligned to the actual audio, so drift is rare. For very long files (60 minutes), sub-second drift on the last few captions can happen. If you spot it, fix the affected captions manually.',
        },
        {
          q: 'Can I edit the subtitles before downloading?',
          a: 'Yes. After transcription, fix any wrong words in the result view, then download the .srt with your edits.',
        },
        {
          q: 'What languages does the SRT generator support?',
          a: 'Over 50 languages with auto-detect. For shorter videos or non-English content, pick the language manually for more reliable results.',
        },
        {
          q: 'Is the audio stored?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not retain the audio or the generated .srt.',
        },
        {
          q: 'Can I generate SRT in a language other than the audio language?',
          a: 'Not directly. Generate the .srt in the source language, then translate the .srt text using DeepL or ChatGPT. The timestamps stay the same, only the text changes.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'Same engine, branded for plain-text output.' },
        { href: '/timestamped-transcription', label: 'Timestamped Transcription', desc: 'For sentence-level or word-level timestamps in other formats.' },
        { href: '/youtube-to-text', label: 'YouTube to Text', desc: 'For replacing YouTube auto-captions.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'For pure audio transcription.' },
      ]}
    />
  )
}
