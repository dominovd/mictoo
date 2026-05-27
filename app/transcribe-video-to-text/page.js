import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Video to Text — Free Online Video Transcription | Mictoo',
  description:
    'Free video to text transcription. Upload MP4, MOV, WEBM, AVI and get an AI transcript or SRT subtitle file. Works with screen recordings, tutorials, vlogs.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-video-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-video-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
      'de': 'https://mictoo.com/de/transcribe-video-to-text',
      'es': 'https://mictoo.com/es/transcribe-video-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
      'it': 'https://mictoo.com/it/transcribe-video-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
      'x-default': 'https://mictoo.com/transcribe-video-to-text',
    },
  },
}

export default function VideoToTextPage() {
  return (
    <LandingLayout
      badge="MP4 · MOV · WEBM · FREE"
      h1={
        <>
          Video to Text
          <br />
          <span className="text-brand-600">Free AI Video Transcription</span>
        </>
      }
      subtitle="Free AI transcription for any video file. We pull the audio out automatically. No account, no per-minute fee, no email required."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Drop the video',
          desc: 'MP4, MOV, WEBM, AVI, or any common video container. Screen recordings, vlogs, webinar exports, Zoom MP4s. Drag the file or click to browse.',
        },
        {
          icon: '⚡',
          title: 'We extract the audio, AI transcribes it',
          desc: 'We pull the audio track out of the video and send only that to Whisper large-v3. No need to convert to MP3 first. A 30-minute video usually finishes in around a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or get subtitles',
          desc: 'Download as TXT for notes, or as SRT to drop into a video editor as subtitles. Edit any wrong words in the browser before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for video',
        bullets: [
          {
            title: 'Direct upload, no YouTube round trip',
            desc: 'A lot of free transcribers tell you to upload your video to YouTube as Unlisted, wait for auto-captions, then copy the text. That is slow and gives you mediocre captions. Skip it.',
          },
          {
            title: 'Audio extraction is automatic',
            desc: 'Drop the MP4. We pull the audio internally and send it to the speech model. No need to run ffmpeg yourself.',
          },
          {
            title: 'Output works in real video editors',
            desc: 'The SRT we generate works in Premiere Pro, DaVinci Resolve, Final Cut, CapCut, and YouTube Studio. Timestamps are frame-accurate.',
          },
          {
            title: 'Bigger video files? Compress the audio, not the video',
            desc: 'A 200 MB video is usually 195 MB of video and 5 MB of audio. You do not need to compress the whole thing, just the audio track.',
          },
          {
            title: 'No file is stored',
            desc: 'The video streams to us, we extract the audio, send to the transcription provider, and discard both. We do not keep your video or your audio on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'What video transcription is good for',
        items: [
          {
            title: 'Adding subtitles to social media video',
            desc: 'TikTok, Instagram Reels, YouTube Shorts all benefit from burned-in captions. Generate the SRT here, then import to CapCut or Premiere and style the captions yourself.',
          },
          {
            title: 'Tutorial and course content',
            desc: 'If you record screencast tutorials, a text version helps with SEO, accessibility, and translation. Paste the transcript into your blog or course platform as a companion to the video.',
          },
          {
            title: 'Webinar follow-ups',
            desc: 'You ran a one-hour webinar. Transcribe the recording, edit lightly, send as a follow-up email to attendees who could not stay until the end.',
          },
          {
            title: 'Interview cuts for editing',
            desc: 'When editing a long video interview, having the transcript on a second monitor lets you do a paper edit first. Mark the lines you want, find them in the timeline, much faster than scrubbing.',
          },
          {
            title: 'Translation and dubbing prep',
            desc: 'Transcribe in the source language, run the text through DeepL or ChatGPT to translate, then use that as the script for dubbing or subtitle translation.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for video transcription',
        tips: [
          {
            title: 'Extract audio first if your video is over 60 MB',
            desc: 'A 1080p video is mostly bytes of pixels we are going to throw away anyway. Pull the audio track only and upload that. ffmpeg one-liner: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. A 500 MB video drops to under 30 MB of audio.',
          },
          {
            title: 'Mute background music in the editor before exporting',
            desc: 'If your video has music under the dialogue (B-roll, intro, transitions), mute or duck the music track in your editor before exporting the version you upload. Whisper sometimes invents words when speech is buried under music.',
          },
          {
            title: 'Screen recordings with no music are easiest',
            desc: 'Loom, Zoom, OBS captures of someone talking over slides give the cleanest transcripts. No music, single voice, clear mic. You will get near-human accuracy on these.',
          },
          {
            title: 'For multi-speaker video, record separate audio tracks if possible',
            desc: 'If you control the recording, capture each speaker on their own track. Transcribe each track separately. Cleaner attribution, fewer mistakes during crosstalk.',
          },
          {
            title: 'Frame rate does not matter, only audio quality does',
            desc: 'Whisper does not look at the video, only the audio. A 4K video with bad audio transcribes worse than a 480p video with a lav mic. Spend your effort on the audio.',
          },
          {
            title: 'SRT timestamps may need a small offset for some editors',
            desc: 'Most video editors line up SRT timestamps perfectly. A few older editors expect the first subtitle to start at 00:00:01,000 instead of 00:00:00,000. If your subtitles appear off by a second, that is usually why.',
          },
        ],
      }}
      faq={[
        {
          q: 'What video formats do you support?',
          a: 'MP4, MOV, WEBM, AVI, MKV, FLV. If your video plays in VLC, it almost certainly works here. We extract the audio internally, so the video codec does not matter much.',
        },
        {
          q: 'My video file is too big to upload. What do I do?',
          a: 'Two options. Extract just the audio first (one ffmpeg command, see Pro tips above) and upload that. Or use a smaller export from your editor (lower resolution or bitrate). For files over 60 MB, audio extraction is faster.',
        },
        {
          q: 'Can I get SRT subtitles, not just plain text?',
          a: 'Yes. After transcription, click Download as SRT. The SRT works in YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut, and any standard video editor.',
        },
        {
          q: 'Does the SRT timing match my video frames exactly?',
          a: 'Yes. SRT timestamps are in milliseconds, which is more precise than video frame rate. They line up correctly at 24, 25, 29.97, 30, 50, and 60 fps.',
        },
        {
          q: 'Can I transcribe a video without sound (just on-screen text)?',
          a: 'No. We transcribe spoken audio. For on-screen text recognition, you need OCR, which is a different tool.',
        },
        {
          q: 'How accurate is video to text?',
          a: 'Depends on the audio. Clean voiceover, near-human accuracy (95 percent or better). Conference video with bad room acoustics, around 85 to 90 percent. Music-heavy video with quiet dialogue, drops further.',
        },
        {
          q: 'Will my video be uploaded to YouTube or third-party services?',
          a: 'No. Your video streams to our transcription provider for processing and is discarded. Nothing is uploaded to YouTube, Google, or anywhere else. We are not in the cloud video storage business.',
        },
        {
          q: 'Can I edit the transcript before downloading?',
          a: 'Yes. Fix any wrong words in the browser before exporting. Useful for fixing proper nouns and technical terms.',
        },
        {
          q: 'Do you support 360 video or VR video formats?',
          a: 'The video codec does not matter to us. As long as the file is a standard container (MP4, MOV) with an audio track, we extract the audio and transcribe.',
        },
        {
          q: 'What if my video has multiple audio tracks (commentary, original, music)?',
          a: 'We use the default audio track only. If you want a specific track, re-export the video with that track as the default, or extract the track you want and upload as audio.',
        },
        {
          q: 'Is there a video length limit?',
          a: '30 minutes per file free, 60 minutes signed in. For longer videos, split into chunks. The transcripts can be concatenated afterwards.',
        },
        {
          q: 'Can I transcribe a live video stream?',
          a: 'No. We work with recorded files only. For live transcription, you need a different category of tool.',
        },
      ]}
      relatedLinks={[
        { href: '/free-srt-generator', label: 'Free SRT Generator', desc: 'The same tool, branded for subtitle-first workflows.' },
        { href: '/youtube-to-text', label: 'YouTube to Text', desc: 'If your video is already on YouTube.' },
        { href: '/how-to-download-youtube-video', label: 'Download YouTube Video', desc: 'How to grab the MP4 (or MP3) from YouTube before uploading it here.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'For videos with audio over the size limit.' },
      ]}
    />
  )
}
