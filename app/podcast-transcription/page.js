import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Podcast Transcription — Free AI Podcast Transcript Generator | Mictoo',
  description:
    'Free podcast transcription with AI. Upload your episode (MP3, MP4, M4A, WAV) and get a clean, timestamped transcript in seconds. No signup, no per-minute fee.',
  alternates: {
    canonical: 'https://mictoo.com/podcast-transcription',
    languages: {
      'en': 'https://mictoo.com/podcast-transcription',
      'fr': 'https://mictoo.com/fr/podcast-transcription',
      'de': 'https://mictoo.com/de/podcast-transcription',
      'es': 'https://mictoo.com/es/podcast-transcription',
      'ru': 'https://mictoo.com/ru/podcast-transcription',
      'it': 'https://mictoo.com/it/podcast-transcription',
      'pt': 'https://mictoo.com/pt/podcast-transcription',
      'pl': 'https://mictoo.com/pl/podcast-transcription',
      'ja': 'https://mictoo.com/ja/podcast-transcription',
      'ko': 'https://mictoo.com/ko/podcast-transcription',
      'x-default': 'https://mictoo.com/podcast-transcription',
    },
  },
}

export default function PodcastTranscriptionPage() {
  return (
    <LandingLayout
      badge="Podcasters · Hosts · Free"
      h1={
        <>
          Podcast Transcription
          <br />
          <span className="text-brand-600">Free Podcast Transcript Generator</span>
        </>
      }
      subtitle="Turn any episode into clean text. Drop your MP3, MP4, or M4A file and get a transcript in seconds. No account, no per-minute fee."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the episode',
          desc: 'Upload your MP3, MP4, M4A, WAV, or FLAC. Cloud Recording from Riverside, exports from Descript, raw Zoom audio, anchor.fm files. All fine.',
        },
        {
          icon: '⚡',
          title: 'AI does the work',
          desc: 'Whisper large-v3 runs on our backend and converts the audio to text. Most 30-minute episodes finish in under a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Grab the text as plain TXT, SRT for subtitles, or paste it straight into your show notes editor. Tweak wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why podcasters use Mictoo',
        bullets: [
          {
            title: 'Long episodes are fine',
            desc: 'Up to 60 minutes per file once you sign in (free). For a two-part split, we keep timestamps relative so you can stitch the SRT files back together without doing math.',
          },
          {
            title: 'Accents and crosstalk hold up',
            desc: 'Whisper large-v3 is the strongest open speech model we know of for non-native English. If you co-host with someone in Berlin or São Paulo, the transcript will not turn into mush.',
          },
          {
            title: 'Music beds do not break it',
            desc: 'Our pipeline runs voice activity detection before transcription. Long instrumental intros get tagged as silence, not invented words. Sponsor reads with bed music underneath still come through clean.',
          },
          {
            title: 'No subscription',
            desc: 'A lot of podcasters transcribe one or two episodes a month. Paying 15 dollars for a monthly seat is wasteful for that. Drop the file when you need it. We make money on ads and a future Pro tier for heavy users.',
          },
          {
            title: 'Your audio is not stored',
            desc: 'Files stream straight to the speech provider, get transcribed, then go away. We do not keep your episodes, and the providers we use (Groq, OpenAI) do not train on API data.',
          },
          {
            title: 'AI summary for free after every episode',
            desc: "Each transcript comes with a GPT-generated summary and key points — exactly the raw material you need for show notes and chapter markers. TurboScribe charges 20 dollars a month for the same feature. We don't.",
          },
        ],
      }}
      useCases={{
        title: 'What podcasters actually do with the transcript',
        items: [
          {
            title: 'Show notes and blog posts',
            desc: 'Paste the transcript into your CMS, mark the chapters, drop in links, ship the blog post. A 45-minute episode gives you 6000 to 8000 words of source material. Three or four lightly edited blog posts out of one recording.',
          },
          {
            title: 'Episode quote cards for social',
            desc: 'Scan the transcript for the line that landed and turn it into a graphic. Much faster than scrubbing the audio file at 1.5x looking for the timestamp.',
          },
          {
            title: 'Searchable archive for your back catalog',
            desc: 'Run your old episodes through batch transcription and you suddenly have a Ctrl+F across years of conversations. Useful when a guest comes back and you want to remember what you talked about last time.',
          },
          {
            title: 'YouTube auto-captions replacement',
            desc: "YouTube's auto-captions are mediocre for podcasts with two voices and any music. Upload a Mictoo SRT instead. Better punctuation, fewer wrong words, better accessibility.",
          },
          {
            title: 'Accessibility transcript link',
            desc: 'A lot of podcasters add a "Read the transcript" link in their RSS show notes. That helps deaf and hard-of-hearing listeners, and it helps search engines find your content.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for cleaner podcast transcripts',
        tips: [
          {
            title: 'Strip the music intro and outro first',
            desc: 'Whisper is good at ignoring music, but a 90-second instrumental cold open sometimes triggers phantom words. If your intro is the same every episode, just trim the first 1:30 in Audacity before upload. Saves a few minutes of cleanup later.',
          },
          {
            title: 'Export at 64 kbps mono if your raw file is huge',
            desc: 'Voice does not need stereo, and 64 kbps is plenty for speech. A two-hour episode at 64 kbps mono is around 55 MB. That fits in the 60 MB signed-in limit without splitting. Use ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.',
          },
          {
            title: 'For interviews with bad guest audio, transcribe each track separately',
            desc: 'If you record on Riverside or SquadCast and have separate audio per speaker, upload each track on its own. Whisper has an easier time with one voice at a time. You get cleaner attribution, fewer dropped words during crosstalk.',
          },
          {
            title: 'Set the language explicitly for short episodes',
            desc: 'Auto-detect samples the first chunk of audio. If you open with a one-word cold open or laugh, detection can fall back to the wrong language. For anything under 5 minutes, pick the language manually.',
          },
          {
            title: 'Punctuation will be imperfect. Fix the first 10 lines, then leave the rest',
            desc: 'Whisper gets most punctuation right, but it sometimes misses semicolons and quoted speech. For show notes, the first 10 lines matter (people skim). Past that, ship it.',
          },
          {
            title: 'Use SRT export even if you do not need subtitles',
            desc: 'SRT gives you timestamps every few seconds. Even if you are pasting into a blog post, those timestamps help you jump back to the audio to verify a quote. We have a free SRT generator on this site.',
          },
        ],
      }}
      faq={[
        {
          q: 'Can I transcribe a 2-hour episode?',
          a: 'Yes, but split it first. Our per-file cap is 30 minutes free, or 60 minutes once you sign in. For a 2-hour episode, split into two or three parts and transcribe each. Our audio splitter guide walks through how to do it in 60 seconds with ffmpeg or Audacity.',
        },
        {
          q: 'Do I get speaker labels (host vs guest)?',
          a: 'Not automatically right now. Whisper itself does not do speaker diarization. If you have separate tracks per speaker (common in Riverside, SquadCast, Zencastr), upload each one separately and label them yourself in the final transcript. We are looking at adding diarization, but only when we can do it well.',
        },
        {
          q: 'How does it handle accents and bilingual podcasts?',
          a: 'Whisper large-v3 was trained on 680,000 hours of multilingual audio. Non-native English, regional accents, and code-switching all work better than smaller models. For a podcast that switches between English and Spanish mid-episode, pick "Auto-detect" as the language and Whisper will follow along.',
        },
        {
          q: 'What audio formats do you support for podcasts?',
          a: 'MP3, M4A, WAV, FLAC, OGG, WEBM, and AAC. Plus video files like MP4 and MOV (we extract the audio). If your podcast host gives you a download in any of these, you are set. AIFF and ALAC are not supported directly, convert to WAV first.',
        },
        {
          q: 'Is there a per-episode word limit?',
          a: 'No word limit. The only limit is the file size (25 MB free, 60 MB signed in) and duration (30 min free, 60 min signed in). A typical 60-minute episode produces around 9000 to 11000 words.',
        },
        {
          q: 'How accurate is podcast transcription compared to human transcribers?',
          a: 'For clean studio audio, Whisper large-v3 typically lands at 5 to 10 percent word error rate. Human transcribers are around 3 to 5 percent. For most show notes and blog repurposing work, AI is good enough. For court testimony or academic citation, hire a human.',
        },
        {
          q: 'Will my episode be stored on your servers?',
          a: 'No. We pipe the audio straight to the transcription provider (Groq, with OpenAI as backup). They process it and we discard it. We never write your podcast file to our database or our object storage.',
        },
        {
          q: 'Can I download as SRT for subtitles?',
          a: 'Yes. After transcription, hit the SRT download button. Use it directly in YouTube Studio, Premiere Pro, DaVinci Resolve, or any video editor.',
        },
        {
          q: 'Do you charge per minute?',
          a: 'No. Transcription on Mictoo is free. We are funded by ads at the moment, with a paid Pro tier coming later for users who need longer files or batch uploads.',
        },
        {
          q: 'My episode has explicit language. Will it get censored?',
          a: 'No filtering. The transcript reflects exactly what was said. If you want to edit profanity for a clean version, do that yourself after download.',
        },
        {
          q: 'Can I edit the transcript before downloading?',
          a: 'Yes. There is a basic editor in the result view. Fix any wrong words, then download the edited version as TXT or SRT.',
        },
        {
          q: 'Is podcast transcription on Mictoo compliant with GDPR?',
          a: 'We do not store the audio or the transcript on our servers after you leave the page. We are based in Europe, and our providers (Groq US, OpenAI US) have DPAs in place. For specific compliance questions, see our Privacy Policy or email info@mictoo.com.',
        },
      ]}
      relatedLinks={[
        {
          href: '/free-srt-generator',
          label: 'Free SRT Generator',
          desc: 'Get podcast-ready subtitle files, not just plain text.',
        },
        {
          href: '/timestamped-transcription',
          label: 'Timestamped Transcription',
          desc: 'For chapter markers, jump-cuts, and quote sourcing.',
        },
        {
          href: '/interview-transcription',
          label: 'Interview Transcription',
          desc: 'Same engine, with notes tuned for the one-on-one format.',
        },
        {
          href: '/youtube-to-text',
          label: 'YouTube to Text',
          desc: 'Already have your episode on YouTube? Pull the audio straight from there.',
        },
      ]}
    />
  )
}
