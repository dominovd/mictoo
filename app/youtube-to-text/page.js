import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'YouTube to Text: Free YouTube Video Transcription Online | Mictoo',
  description:
    'Paste a YouTube URL or upload an audio file and get a clean transcript with timestamps, AI summary, and SRT subtitles. Better than YouTube auto-captions for proper nouns and accents.',
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
    title: 'YouTube to Text: Free YouTube Video Transcription | Mictoo',
    description: 'Paste a YouTube URL, get a clean transcript with timestamps, summary, and SRT subtitles.',
    url: 'https://mictoo.com/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube to Text: Free YouTube Transcription',
    description: 'Paste a YouTube URL or upload audio, get a transcript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function YouTubeToTextPage() {
  return (
    <LandingLayout
      enableYouTubeUrl
      badge="YouTube URL or upload · Free · No signup"
      h1={
        <>
          YouTube to Text
          <br />
          <span className="text-brand-600">Paste a URL, get a clean transcript</span>
        </>
      }
      subtitle="Paste a YouTube link and the transcript appears in seconds. Or upload the audio file for full Whisper-quality transcription. Cleaner than YouTube auto-captions, with full punctuation, AI summary, and SRT subtitles."
      valueBlock={
        <article className="prose-content">
          <p>
            YouTube transcription on Mictoo works two ways. The fast
            path: paste a YouTube URL, we pull the existing captions
            from YouTube in a few seconds. The Whisper path: download
            the audio from YouTube yourself, upload the file, we run
            Whisper large-v3 for fresh high-accuracy transcription.
          </p>
          <p>
            For most public YouTube videos with creator-uploaded or
            auto-generated captions, the URL path is fastest and
            usually accurate enough. For videos without captions, for
            cleaner punctuation, or for stronger accuracy on technical
            terms and accented speakers, the upload path with Whisper
            is the better choice.
          </p>
          <p className="text-sm text-slate-500">
            For non-YouTube videos (Zoom, screen recordings, vlogs),
            see <a href="/transcribe-video-to-text" className="text-brand-600 hover:underline ml-1">video to text</a>. For audio
            files specifically, see <a href="/transcribe-audio-to-text" className="text-brand-600 hover:underline ml-1">audio to text</a>.
            For subtitle-focused workflows, see
            <a href="/free-srt-generator" className="text-brand-600 hover:underline ml-1">SRT generator</a>.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🔗',
          title: 'Paste a YouTube URL',
          desc: 'Drop the YouTube link into the field above. We fetch existing captions in a few seconds. Works for most public videos with creator-uploaded or auto-generated captions. No download step, no waiting for Whisper re-transcription.',
        },
        {
          icon: '📂',
          title: 'Or upload the audio file',
          desc: 'For videos with no captions, or when you want fresh Whisper-quality transcription, download the audio with a free desktop app (4K Video Downloader, ClipGrab, yt-dlp), then upload here. Whisper large-v3 produces cleaner punctuation than YouTube auto-captions.',
        },
        {
          icon: '📋',
          title: 'Read, edit, export, translate',
          desc: 'Transcript with timestamps appears alongside an AI summary. Download TXT, SRT, VTT, or DOCX. Translate to 50+ languages with one click. Chat with the transcript to ask questions about the content.',
        },
      ]}
      whyUse={{
        title: 'Why people use Mictoo for YouTube',
        bullets: [
          {
            title: 'Two paths for two situations',
            desc: 'URL path is fastest when the video has captions; upload path produces Whisper-quality text when captions are missing or unreliable. You pick which fits, no forced workflow.',
          },
          {
            title: 'Better punctuation than YouTube auto-captions',
            desc: 'YouTube auto-captions are unpunctuated streams of text. Mictoo (both paths) returns properly punctuated sentences with capitalisation, which is essential for readability when you actually want to use the transcript.',
          },
          {
            title: 'Whisper-quality on accents and proper nouns',
            desc: 'For tech tutorials, foreign-language speakers, technical jargon, or unusual proper names, Whisper large-v3 is noticeably more accurate than YouTube auto-captions. The upload path uses Whisper directly.',
          },
          {
            title: 'AI summary, chat, and translation built in',
            desc: 'After transcription, an AI summary appears alongside automatically. Chat with the transcript using RAG to ask questions. Translate to 50+ languages with one click. SRT and VTT for re-uploading clean captions to your own channel.',
          },
          {
            title: 'No signup, no watermark, no time limits',
            desc: 'Anonymous use up to 60 MB per file on the upload path. URL path has no file size at all (we pull existing captions, not the video). No daily counter, no "premium" gate on the core features.',
          },
        ],
      }}
      useCases={{
        title: 'What people use YouTube transcripts for',
        items: [
          {
            title: 'Studying long lectures and tutorials',
            desc: 'A 90-minute MIT lecture or conference talk is easier to study with a text version. Skim for the part you need, jump to the timestamp in the video for the live explanation. Search the text for the exact concept.',
          },
          {
            title: 'Citing in academic or journalistic work',
            desc: 'When you reference what someone said in a video, having the transcript with timestamps lets you cite the exact moment. Much faster than re-watching to find the quote, and more accurate than reconstructing from memory.',
          },
          {
            title: 'Repurposing your own YouTube content',
            desc: 'Turn a YouTube video you made into a blog post, newsletter, X thread, or LinkedIn article. The transcript is the starting draft for the written version of your spoken content.',
          },
          {
            title: 'Translating videos for personal use',
            desc: 'Get the transcript in the source language, click Translate, get the translated text. Useful for foreign-language tutorials, interviews, or news segments where you do not speak the source language fluently.',
          },
          {
            title: 'Replacing bad auto-captions on your own channel',
            desc: 'Generate a clean SRT here from your own video, upload it to YouTube Studio as the official subtitle track. Better viewer experience, better SEO, fewer cringe-worthy auto-caption errors.',
          },
          {
            title: 'Accessibility: making spoken content readable',
            desc: 'For viewers who prefer reading to watching, or who use screen readers, the transcript makes spoken-only content accessible. The Chat feature lets viewers ask questions about the video without watching the full runtime.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for YouTube transcription',
        tips: [
          {
            title: 'For best speed, try the URL path first',
            desc: 'If the video has any captions (creator-uploaded or auto-generated), the URL path returns the transcript in 3-5 seconds with no download. The upload path takes longer because you have to download the audio first, then upload it.',
          },
          {
            title: 'For best quality, use the upload path with audio-only download',
            desc: 'YouTube auto-captions are convenient but visibly weaker than Whisper. For content where transcript quality matters (citing in writing, accessibility on your own channel), download the audio-only with 4K Video Downloader or ClipGrab and upload here for Whisper transcription.',
          },
          {
            title: 'Always pick "audio only" in the downloader',
            desc: 'You do not need video for transcription. An audio-only M4A is about a tenth of the size of the video and downloads in seconds. Both 4K Video Downloader and ClipGrab have an "audio only" option in the format dropdown. The M4A is usually under 30 MB even for 60-minute videos.',
          },
          {
            title: 'For videos over 60 minutes, split the audio first',
            desc: 'Audio-only avoids the size limit on most videos. If a long talk still goes over 60 MB, split it into 30-minute pieces in Audacity, transcribe each, concatenate the transcripts. Our splitting guide has step-by-step instructions.',
          },
          {
            title: 'Skip the intro music and outro',
            desc: 'YouTube tutorials often have 15 seconds of theme music at the start and end. Trim those in Audacity before upload (Effect, Truncate Silence works for silence; for music intros, just select and delete). Whisper sometimes invents words during music-only sections.',
          },
          {
            title: 'For your own channel, upload the clean SRT back to YouTube',
            desc: 'Generate the SRT here from your own video, upload to YouTube Studio under Subtitles to replace the auto-captions. Improves SEO (YouTube indexes manual captions more heavily than auto) and accessibility for viewers who depend on captions.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>How YouTube transcription works under the hood</h2>
          <p>
            YouTube videos have three potential sources of text data:
            creator-uploaded subtitles (the highest quality, manually
            written and timed by the channel owner), auto-generated
            captions (YouTube ASR processes every public video that
            has speech), and no captions at all (rare for popular
            videos, common for private uploads and very new content).
          </p>
          <p>
            When you paste a URL into Mictoo, we ask YouTube for the
            best available captions track. Creator-uploaded subtitles
            come back if present; otherwise YouTube returns auto-
            generated captions. We re-format the timed captions into a
            readable transcript with proper punctuation and download-
            friendly exports (TXT, SRT, VTT, DOCX).
          </p>
          <p>
            When you upload the audio file directly, we skip YouTube
            entirely and run the audio through Whisper large-v3
            ourselves. This is slower but produces noticeably better
            text for hard cases: accented English, technical jargon,
            proper names, multi-language audio, music-heavy intros.
          </p>
          <h3>URL path vs upload path: when to pick each</h3>
          <p>
            URL path is the right choice when speed matters and the
            video is well-known (popular educational content, mainstream
            English-language tutorials, viral talks). YouTube auto-
            captions on these tend to be acceptable for skimming and
            casual citing. The whole flow takes 5-10 seconds.
          </p>
          <p>
            Upload path is the right choice when accuracy matters: you
            are quoting in a published article, providing captions on
            your own channel, transcribing a foreign-language video,
            or working with content that has unusual proper nouns.
            Whisper large-v3 is several years newer than YouTube's
            production ASR and noticeably more accurate on the same
            audio. The flow is slower (you download then upload) but
            the text quality justifies it for serious use.
          </p>
          <h3>Where Whisper beats YouTube auto-captions specifically</h3>
          <p>
            Proper names: brand names, person names, place names. YouTube
            ASR often inserts a phonetically similar common word
            instead of the correct proper noun. Whisper does this much
            less often.
          </p>
          <p>
            Technical jargon: programming terms, medical vocabulary,
            scientific terminology. Whisper was trained on a corpus
            that included more technical content; YouTube ASR is tuned
            for general conversation.
          </p>
          <p>
            Accents: non-native English speakers, regional dialects,
            and African / Indian / Australian English varieties.
            Whisper handles these significantly better than YouTube
            auto-captions, which tend to be tuned toward American
            English.
          </p>
          <p>
            Punctuation: YouTube auto-captions are unpunctuated. Whisper
            returns sentences with periods, commas, capitalisation, and
            question marks, which is essential for readability.
          </p>
          <h3>YouTube's terms and what is acceptable</h3>
          <p>
            YouTube Terms of Service prohibit downloading content
            unless YouTube explicitly allows it (the Download button
            inside the YouTube app on certain content) or you have
            permission from the video creator. Reading the existing
            captions from YouTube's caption endpoint (what our URL
            path does) is in a grayer area: the captions are publicly
            served by YouTube for the video player to display, and
            many third-party tools have read them for years.
          </p>
          <p>
            For personal use (study, research, journalism,
            accessibility), most jurisdictions tolerate transcription
            of YouTube content as fair use or fair dealing. For
            republishing transcripts commercially, you usually need
            the creator's permission. None of this is legal advice;
            check the rules in your situation.
          </p>
          <h3>Chat with the transcript: what it does and what it cannot</h3>
          <p>
            After transcription, the Chat feature lets you ask
            questions about the video content in natural language.
            Under the hood, it uses retrieval-augmented generation
            (RAG): the transcript is chunked and indexed, your
            question retrieves relevant chunks, and a language model
            answers using those chunks as context.
          </p>
          <p>
            Useful for: "What did the speaker say about X?", "Summarise
            the section about Y in 3 bullets", "Find the timestamp
            where Z is mentioned". Less useful for: questions about
            on-screen visual content (we only see the audio), questions
            requiring knowledge outside the video, or questions about
            the speaker's tone or visual demeanor.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Can I paste a YouTube URL directly into Mictoo?',
          a: 'Yes. Paste the YouTube link in the URL field at the top of the page. We fetch existing captions from YouTube in a few seconds. Works for most public videos with creator-uploaded or auto-generated captions. For videos without captions, switch to the upload path.',
        },
        {
          q: 'What is the difference between the URL path and the upload path?',
          a: 'URL path: fast (3-5 seconds), pulls existing YouTube captions, quality depends on the captions YouTube provides. Upload path: slower (you download the audio then upload), runs Whisper large-v3 for fresh high-accuracy transcription with proper punctuation. Pick URL for speed, upload for quality.',
        },
        {
          q: 'Is the URL path or upload path more accurate?',
          a: 'For most videos, the upload path with Whisper is noticeably more accurate, especially for accents, technical terms, proper nouns, and punctuation. The URL path is usually acceptable for skimming and casual reference. For citing in published work or captioning your own content, use the upload path.',
        },
        {
          q: 'Is it legal to transcribe YouTube videos?',
          a: 'For personal study, research, journalism, accessibility, and fair-use purposes, generally yes in most jurisdictions. For republishing transcripts commercially, you usually need the video creator permission. YouTube Terms of Service prohibit downloading content unless explicitly allowed. Check the rules in your situation. This is not legal advice.',
        },
        {
          q: 'What is the best YouTube downloader for the upload path?',
          a: 'For most people: 4K Video Downloader or ClipGrab. Both are free, both have a clean desktop app for Mac, Windows, and Linux, both let you grab audio-only with one click. Avoid the "online YouTube downloader" websites that show up in Google results; most are buried in malware ads. If you are comfortable with the command line, yt-dlp is the most reliable option.',
        },
        {
          q: 'How do I download just the audio from a YouTube video?',
          a: 'In 4K Video Downloader: paste the YouTube link, when the format dialog opens, pick "Extract Audio" and choose M4A or MP3. In ClipGrab: paste the link, in the "Format" dropdown pick MP3 or "Original audio". Both produce a single audio file ready to upload here. See our /how-to-download-youtube-video guide for step by step.',
        },
        {
          q: 'What if my YouTube video is in a language I do not speak?',
          a: 'Whisper auto-detects the language and transcribes in the source language. Then click Translate, pick a target language, and the translated text appears alongside the original. Works for 50+ languages. Usually better than YouTube auto-translated captions because we translate from a cleaner source.',
        },
        {
          q: 'How long does a YouTube video take to transcribe?',
          a: 'URL path: 3-5 seconds. Upload path: Whisper transcription itself takes 1-2 percent of audio length (30-minute video takes about 1 minute on Whisper), plus your download and upload time. The download step depends on your internet connection; audio-only is usually under a minute.',
        },
        {
          q: 'Will I get speaker labels for multi-speaker YouTube videos?',
          a: 'No. Whisper does not currently do speaker diarisation. For interviews and panels with multiple speakers, the transcript is continuous text without "Speaker 1: ..." prefixes. Speaker labels are on our Pro tier roadmap.',
        },
        {
          q: 'Can I generate YouTube-ready captions to upload to my own video?',
          a: 'Yes. Run your video through Mictoo (upload path for best quality), download as SRT, then upload the SRT in YouTube Studio under Subtitles. Replaces the auto-captions with a clean version. Also improves SEO because YouTube indexes manual captions more heavily than auto.',
        },
        {
          q: 'Does Mictoo store the YouTube video I transcribe?',
          a: 'No. For URL path: we fetch captions text from YouTube and never store the video. For upload path: the audio streams to our transcription provider, gets processed, and is discarded. We do not retain video or audio files.',
        },
        {
          q: 'Can I transcribe a YouTube livestream after it ends?',
          a: 'Yes, as long as the livestream is archived on the channel as a regular video. URL path works on archived livestreams that have captions. Upload path works on any archived stream you can download. Live transcription during the stream itself is not supported.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Paste a YouTube URL and get the transcript
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Or upload the audio for Whisper-quality transcription. Free, no signup, no watermark, with summary, translation, and chat.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe a YouTube video
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/how-to-download-youtube-video', label: 'How to download YouTube video', desc: 'Step by step for 4K Video Downloader, ClipGrab, yt-dlp.' },
        { href: '/transcribe-video-to-text', label: 'Video to text', desc: 'For non-YouTube video files (Zoom, screen recordings, vlogs).' },
        { href: '/free-srt-generator', label: 'Free SRT generator', desc: 'For uploading clean captions back to YouTube Studio.' },
        { href: '/transcripts', label: 'Popular video transcripts', desc: 'Pre-built transcripts for popular educational and tech talks.' },
      ]}
    />
  )
}
