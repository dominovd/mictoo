import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'YouTube to Text — Transcribe YouTube Videos Free | Mictoo',
  description:
    'Free YouTube to text transcription. Download the video, drop the file, get an accurate AI transcript. Better than YouTube auto-captions, with timestamps and SRT export.',
  alternates: {
    canonical: 'https://mictoo.com/youtube-to-text',
    languages: {
      'en': 'https://mictoo.com/youtube-to-text',
      'fr': 'https://mictoo.com/fr/youtube-to-text',
      'de': 'https://mictoo.com/de/youtube-to-text',
      'es': 'https://mictoo.com/es/youtube-to-text',
      'ru': 'https://mictoo.com/ru/youtube-to-text',
      'it': 'https://mictoo.com/it/youtube-to-text',
      'pt': 'https://mictoo.com/pt/youtube-to-text',
      'pl': 'https://mictoo.com/pl/youtube-to-text',
      'ja': 'https://mictoo.com/ja/youtube-to-text',
      'ko': 'https://mictoo.com/ko/youtube-to-text',
      'x-default': 'https://mictoo.com/youtube-to-text',
    },
  },
}

export default function YouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · FREE"
      h1={
        <>
          YouTube to Text
          <br />
          <span className="text-brand-600">Free YouTube Transcript Tool</span>
        </>
      }
      subtitle="Get a clean, accurate transcript from any YouTube video. Download the file, drop it here, AI does the rest. Better than YouTube auto-captions, with proper punctuation and timestamps."
      howItWorks={[
        {
          icon: '⬇️',
          title: 'Download the video or audio',
          desc: 'Use yt-dlp, a browser extension, or any reputable YouTube downloader. Save as MP4, M4A, or MP3. For long videos, audio-only (M4A) gives you a smaller file. Check the legal section in the FAQ before downloading.',
        },
        {
          icon: '📂',
          title: 'Drop the file',
          desc: 'Drag the downloaded file into Mictoo. We handle MP4, M4A, MP3, WAV, FLAC, OGG, WEBM. The audio gets sent to Whisper large-v3.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it in the browser, copy to clipboard, or download as TXT or SRT. The SRT works as YouTube subtitles, way better than auto-captions.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo instead of YouTube auto-captions',
        bullets: [
          {
            title: 'Auto-captions miss punctuation and proper nouns',
            desc: "YouTube's captions are stream-of-consciousness with no commas, no periods, and a tendency to mangle names. Whisper large-v3 gives you proper sentences, capitalization, and recognizable proper nouns.",
          },
          {
            title: 'Auto-captions are not always available',
            desc: 'Smaller channels, private videos, livestreams that have ended, or videos in less common languages often have no captions or low-quality machine captions. Whisper works on all of them.',
          },
          {
            title: 'Better accuracy on music and accents',
            desc: 'YouTube auto-captions struggle with music interludes and non-native English. Whisper handles both better, with fewer hallucinated words and stronger accent coverage.',
          },
          {
            title: 'You get a clean SRT, not a YouTube XML format',
            desc: "YouTube's caption track downloads in XML or VTT format with odd timestamps. Our SRT is standard, drop-in compatible with any video editor.",
          },
          {
            title: 'Works on videos you do not own',
            desc: "You can transcribe lectures, interviews, podcasts on YouTube for personal study or research use without needing channel-owner access (subject to copyright and YouTube's terms, see FAQ).",
          },
        ],
      }}
      useCases={{
        title: 'What people use YouTube transcripts for',
        items: [
          {
            title: 'Studying long lectures and tutorials',
            desc: 'A 90-minute MIT lecture is easier to study with a text version. Skim for the part you need, jump to the timestamp in the video for the live explanation.',
          },
          {
            title: 'Citing in academic or journalistic work',
            desc: 'When you reference what someone said in a video, having the transcript with timestamps lets you cite the exact moment. Much faster than re-watching to find the quote.',
          },
          {
            title: 'Repurposing your own YouTube content',
            desc: 'Turn a YouTube video into a blog post, a newsletter, an X thread, or a LinkedIn article. The transcript is the starting draft.',
          },
          {
            title: 'Translating videos for personal use',
            desc: 'Get the transcript in the source language, drop into DeepL or ChatGPT, get a translation. Useful for foreign-language tutorials or interviews.',
          },
          {
            title: 'Replacing bad auto-captions on your own channel',
            desc: 'Generate a clean SRT here, upload it to YouTube Studio as the official subtitle track. Better viewer experience, better SEO.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for YouTube transcription',
        tips: [
          {
            title: 'Download audio-only for transcription',
            desc: 'You do not need video for transcription. Audio-only M4A is a tenth of the size and downloads in seconds. With yt-dlp: yt-dlp -x --audio-format m4a https://youtube.com/watch?v=XXXX. The M4A is usually under 25 MB even for 30-minute videos.',
          },
          {
            title: 'For videos over 30 minutes, download in audio-only and split',
            desc: 'Audio-only avoids the size limit on most videos. If a 90-minute talk still goes over 60 MB, split with ffmpeg into three 30-minute chunks.',
          },
          {
            title: 'Skip the intro music and outro',
            desc: 'YouTube tutorials often have 15 seconds of theme music at the start and end. Trim those in Audacity before upload. Whisper sometimes invents words during music-only sections.',
          },
          {
            title: 'For tutorial channels with on-screen code, you still need the audio version',
            desc: 'OCR for on-screen text is a different tool. If the tutorial relies on showing code, you will need to grab screenshots separately for the visual part.',
          },
          {
            title: 'Live captions from YouTube can be a sanity check',
            desc: 'If you have auto-captions on YouTube, you can compare them to your Whisper transcript to spot disagreements. Usually Whisper wins, but on rare slang or proper nouns YouTube might catch something Whisper missed.',
          },
          {
            title: 'Channel name and video title go in the file metadata',
            desc: 'When you batch-download multiple videos, yt-dlp can save the title as the filename: yt-dlp -o "%(title)s.%(ext)s" -x --audio-format m4a URL. That keeps your transcripts organized later.',
          },
        ],
      }}
      faq={[
        {
          q: 'Can I paste a YouTube URL directly into Mictoo?',
          a: 'Not currently. YouTube actively blocks third-party servers from fetching videos. You need to download the video or audio first with a tool like yt-dlp, then upload the file to Mictoo. Adding URL support would require us to host video fetching infrastructure that YouTube routinely breaks.',
        },
        {
          q: 'Is it legal to transcribe YouTube videos?',
          a: 'For personal study, research, journalism, accessibility, and fair-use purposes, generally yes in most jurisdictions. For republishing the transcript commercially, you usually need the video creator permission. YouTube Terms of Service prohibit downloading content unless YouTube explicitly allows it (the Download button) or you have the creator permission. Check the terms in your situation. This is not legal advice.',
        },
        {
          q: 'Will my transcript match YouTube auto-captions?',
          a: 'No, ours will be better. Auto-captions have no punctuation and weaker accuracy. Whisper large-v3 produces full sentences with proper punctuation, capitalization, and stronger accuracy on music, accents, and proper nouns.',
        },
        {
          q: 'What is the best YouTube downloader to use?',
          a: 'yt-dlp is the most reliable open-source option. It works on Mac, Linux, and Windows. Avoid sketchy "online YouTube downloader" sites, many of them serve malware ads. If you do not want a command-line tool, the official YouTube Premium download (for your own viewing) is fine.',
        },
        {
          q: 'How do I download just the audio?',
          a: 'With yt-dlp: yt-dlp -x --audio-format m4a "URL". The -x flag extracts audio only, much faster and smaller than downloading video. Output is M4A by default, which we accept directly.',
        },
        {
          q: 'What if my YouTube video is in a language I do not speak?',
          a: 'Whisper auto-detects the language and transcribes in the source language. Then you can paste the result into DeepL or ChatGPT for translation. Two steps, but the result is usually better than YouTube auto-translated captions.',
        },
        {
          q: 'How long does a YouTube video take to transcribe?',
          a: 'Just the transcription step takes about 1 to 2 percent of the audio length. A 30-minute talk finishes in around a minute. Download time depends on your connection and yt-dlp speed.',
        },
        {
          q: 'Will I get speaker labels for multi-speaker YouTube videos?',
          a: 'No, Whisper does not do speaker diarization by default. For interviews and panels with multiple speakers, you will need to add speaker labels manually based on the conversation flow.',
        },
        {
          q: 'Can I generate YouTube-ready captions?',
          a: 'Yes. Download as SRT after transcription, then upload the SRT in YouTube Studio under Subtitles. Replaces the auto-captions with a clean version.',
        },
        {
          q: 'Does Mictoo store the YouTube video I upload?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not retain the video or the audio.',
        },
        {
          q: 'My YouTube video has chapters. Will the transcript reflect them?',
          a: 'We do not extract YouTube chapter metadata. The transcript comes as one continuous document. If you want chapter-aligned transcripts, split the audio file at the chapter timestamps before upload.',
        },
        {
          q: 'Can I transcribe a YouTube livestream after it ends?',
          a: 'Yes, as long as the livestream is archived as a regular video. Download it the same way (yt-dlp), then upload. Live transcription during the stream itself is not supported.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'For non-YouTube video files (Zoom, screen recordings, vlogs).' },
        { href: '/free-srt-generator', label: 'Free SRT Generator', desc: 'For uploading clean captions back to YouTube Studio.' },
        { href: '/podcast-transcription', label: 'Podcast Transcription', desc: 'For podcast-style audio uploaded to YouTube.' },
        { href: '/how-to-split-audio', label: 'How to Split Audio', desc: 'For long videos that exceed our 60-minute file limit.' },
      ]}
    />
  )
}
