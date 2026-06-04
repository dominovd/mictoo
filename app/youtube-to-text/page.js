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

  openGraph: {
    title: "YouTube to Text — Transcribe YouTube Videos Free | Mictoo",
    description: "Free YouTube to text transcription. Download the video, drop the file, get an accurate AI transcript. Better than YouTube auto-captions, with timestamps and SRT export.",
    url: "https://mictoo.com/youtube-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube to Text — Transcribe YouTube Videos Free | Mictoo",
    description: "Free YouTube to text transcription. Download the video, drop the file, get an accurate AI transcript. Better than YouTube auto-captions, with timestamps and SRT export.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function YouTubeToTextPage() {
  return (
    <LandingLayout
      enableYouTubeUrl
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
          icon: '🔗',
          title: 'Paste a YouTube link',
          desc: "Drop any YouTube URL into the field above. We pull the existing captions in a couple of seconds — no download, no waiting for Whisper to re-transcribe. Works for most public videos with auto-captions or creator-uploaded subtitles.",
        },
        {
          icon: '📂',
          title: 'Or upload a file',
          desc: "No captions on the video, private upload, or you just want fresh Whisper quality? Download the audio with a free desktop app (see our download guide below), drop it into the same page, and we'll run it through Whisper large-v3.",
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it in the browser, copy to clipboard, or export as TXT, SRT, VTT, or DOCX. Translate to 28 languages in one click. Free AI summary at the top.',
        },
      ]}
      whyUse={{
        title: 'What you get on Mictoo',
        bullets: [
          {
            title: 'No download step needed',
            desc: 'Paste a YouTube URL and the transcript comes back in seconds. No desktop app, no file management, no waiting for a long video to upload.',
          },
          {
            title: 'Fresh Whisper transcription as fallback',
            desc: "If the video has no captions, upload the audio. Whisper large-v3 handles accents, music, and proper nouns better than YouTube's auto-captions — fewer hallucinated words, full punctuation.",
          },
          {
            title: 'Clean SRT, ready for editing',
            desc: 'Standard SRT format that imports directly into Premiere, DaVinci Resolve, Final Cut, CapCut. No XML, no odd timestamps, no manual cleanup.',
          },
          {
            title: 'Free AI summary on every transcript',
            desc: 'Key insights and action items at the top of every result, without an extra click. Competitors typically charge $15–20/month for this.',
          },
          {
            title: 'Translate to 28 languages',
            desc: 'One click after transcription. Original timestamps are preserved, so the translated SRT stays in sync with the audio.',
          },
          {
            title: 'No signup, no watermark, no time limits',
            desc: 'Anonymous use up to 25 MB. Sign up free for 60 MB files and a private history of your transcripts.',
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
            title: 'Always pick "audio only" in the downloader',
            desc: 'You do not need video for transcription. An audio-only M4A is about a tenth of the size of the video and downloads in seconds. Both 4K Video Downloader and ClipGrab have an "audio only" option in the format dropdown. The M4A is usually under 25 MB even for 30-minute videos.',
          },
          {
            title: 'For videos over 30 minutes, audio-only usually fits without splitting',
            desc: 'Audio-only avoids the size limit on most videos. If a 90-minute talk still goes over 60 MB, split it into three 30-minute pieces. Our splitting guide has step-by-step instructions for Audacity, no command line needed.',
          },
          {
            title: 'Skip the intro music and outro',
            desc: 'YouTube tutorials often have 15 seconds of theme music at the start and end. Trim those in Audacity (Effect, Truncate Silence works for the silence parts; for music intros, just select and delete) before upload. Whisper sometimes invents words during music-only sections.',
          },
          {
            title: 'For tutorial channels with on-screen code, you still need the audio version',
            desc: 'On-screen text recognition is a different category of tool (OCR). If the tutorial relies on showing code, you will need to grab screenshots separately for the visual part. The transcript captures everything the presenter says out loud.',
          },
          {
            title: 'Live captions from YouTube can be a sanity check',
            desc: 'If the video has YouTube auto-captions, you can compare them side by side with your Whisper transcript to spot disagreements. Usually Whisper wins, but on rare slang or proper nouns YouTube might catch something Whisper missed.',
          },
          {
            title: 'Use a downloader that keeps the video title as the filename',
            desc: '4K Video Downloader and ClipGrab both let you set the output filename to the YouTube title by default. That keeps your transcripts organized later instead of ending up with a folder full of "video.mp4", "video (1).mp4", "video (2).mp4".',
          },
        ],
      }}
      faq={[
        {
          q: 'Can I paste a YouTube URL directly into Mictoo?',
          a: 'Not currently. YouTube actively blocks third-party servers from fetching videos. You have to download the video or audio first on your own computer (a free desktop app like 4K Video Downloader or ClipGrab does this in two clicks), then upload the file to Mictoo. Adding URL support would mean we run server-side downloading infrastructure that YouTube routinely breaks.',
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
          a: 'For most people: 4K Video Downloader or ClipGrab. Both are free, both have a clean desktop app for Mac, Windows, and Linux, both let you grab audio-only with one click. Avoid the "online YouTube downloader" websites that show up in Google results, most of them are buried in malware ads and break every few months. If you are comfortable with the command line, yt-dlp is the most reliable option (it is the engine that powers a lot of the GUI apps under the hood).',
        },
        {
          q: 'How do I download just the audio?',
          a: 'In 4K Video Downloader: paste the YouTube link, when the format dialog opens, pick "Extract Audio" and choose M4A or MP3. In ClipGrab: paste the link, in the "Format" dropdown pick MP3 or "Original audio". Both produce a single audio file ready to upload here.',
        },
        {
          q: 'What if my YouTube video is in a language I do not speak?',
          a: 'Whisper auto-detects the language and transcribes in the source language. Then you can paste the result into DeepL or ChatGPT for translation. Two steps, but the result is usually better than YouTube auto-translated captions.',
        },
        {
          q: 'How long does a YouTube video take to transcribe?',
          a: 'Just the transcription step takes about 1 to 2 percent of the audio length. A 30-minute talk finishes in around a minute. The download step (before you upload here) depends on your internet connection. A 30-minute audio-only download is usually well under a minute on a normal home connection.',
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
          a: 'Yes, as long as the livestream is archived on the channel as a regular video. Download the archive the same way you would any other YouTube video, then upload here. Live transcription during the stream itself is not supported.',
        },
      ]}
      relatedLinks={[
        { href: '/how-to-download-youtube-video', label: 'Download YouTube Video', desc: 'Step-by-step guide to grabbing the MP4 or MP3 with free tools, before you upload it here.' },
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'For non-YouTube video files (Zoom, screen recordings, vlogs).' },
        { href: '/free-srt-generator', label: 'Free SRT Generator', desc: 'For uploading clean captions back to YouTube Studio.' },
        { href: '/how-to-split-audio', label: 'How to Split Audio', desc: 'For long videos that exceed our 60-minute file limit.' },
      ]}
    />
  )
}
