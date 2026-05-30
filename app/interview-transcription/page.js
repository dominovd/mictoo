import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Interview Transcription — Free Interview Transcript Generator | Mictoo',
  description:
    'Free interview transcription with AI. Drop your interview recording (MP3, M4A, MP4, WAV) and get a clean, timestamped transcript in seconds. Built for journalists and researchers.',
  alternates: {
    canonical: 'https://mictoo.com/interview-transcription',
    languages: {
      'en': 'https://mictoo.com/interview-transcription',
      'fr': 'https://mictoo.com/fr/interview-transcription',
      'de': 'https://mictoo.com/de/interview-transcription',
      'es': 'https://mictoo.com/es/interview-transcription',
      'ru': 'https://mictoo.com/ru/interview-transcription',
      'it': 'https://mictoo.com/it/interview-transcription',
      'pt': 'https://mictoo.com/pt/interview-transcription',
      'pl': 'https://mictoo.com/pl/interview-transcription',
      'ja': 'https://mictoo.com/ja/interview-transcription',
      'ko': 'https://mictoo.com/ko/interview-transcription',
      'x-default': 'https://mictoo.com/interview-transcription',
    },
  },

  openGraph: {
    title: "Interview Transcription — Free Interview Transcript Generator | Mictoo",
    description: "Free interview transcription with AI. Drop your interview recording (MP3, M4A, MP4, WAV) and get a clean, timestamped transcript in seconds. Built for journalists and researchers.",
    url: "https://mictoo.com/interview-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview Transcription — Free Interview Transcript Generator | Mictoo",
    description: "Free interview transcription with AI. Drop your interview recording (MP3, M4A, MP4, WAV) and get a clean, timestamped transcript in seconds. Built for journalists and researchers.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function InterviewTranscriptionPage() {
  return (
    <LandingLayout
      badge="Journalism · Research · Free"
      h1={
        <>
          Interview Transcription
          <br />
          <span className="text-brand-600">Free Interview Transcripts</span>
        </>
      }
      subtitle="Turn any interview recording into clean, citable text. For journalists, researchers, podcasters, hiring teams. No signup, no per-minute fee, no email required."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Drop the interview audio',
          desc: 'MP3 from a voice recorder, M4A from a phone, MP4 from a video call, WAV from a field recorder. All work.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the audio. A 30-minute interview usually finishes in about a minute.',
        },
        {
          icon: '📋',
          title: 'Read, edit, export',
          desc: 'Browse the transcript with timestamps. Fix any wrong names or jargon inline. Download as TXT for notes, SRT for video, or copy to your coding software.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for interview transcription',
        bullets: [
          {
            title: 'Whisper handles interviews well',
            desc: 'Single recordings with two voices and clear back-and-forth are the cleanest case for speech recognition. Most interviews come out at 90 to 95 percent accuracy on the first pass.',
          },
          {
            title: 'Timestamps for citation and quote sourcing',
            desc: 'Every line in the SRT export has a timestamp. When you need to verify a quote or jump back to a specific moment in the recording, the timestamp tells you exactly where.',
          },
          {
            title: 'No per-interview cost',
            desc: 'Some transcription services charge per-minute or per-interview. We do not. Transcribe one or fifty, the price is the same (free).',
          },
          {
            title: '50+ languages, including bilingual interviews',
            desc: 'Cross-language interviews are common in research and journalism. Whisper handles code-switching better than most services.',
          },
          {
            title: 'Privacy and source protection',
            desc: 'The file streams to the transcription provider and is discarded. We do not retain the audio. For sensitive source material, this matters.',
          },
          {
            title: 'Free AI summary with key takeaways',
            desc: 'After every interview transcript we generate a GPT-powered summary with key points and action items. Useful for skimming a 60-minute interview before drafting. Competitors typically put the same feature behind a 15-20 dollar a month plan.',
          },
        ],
      }}
      useCases={{
        title: 'Who uses interview transcripts',
        items: [
          {
            title: 'Journalism and feature writing',
            desc: 'Reporters transcribe their interviews to quote accurately and to skim long conversations for the most useful material. A 60-minute interview often becomes 3 to 5 key quotes for the published piece.',
          },
          {
            title: 'Qualitative research and academic studies',
            desc: 'Researchers transcribe semi-structured interviews to code and analyze in tools like NVivo, Atlas.ti, or MAXQDA. The transcript is the dataset.',
          },
          {
            title: 'Podcasting interviews',
            desc: 'Show hosts transcribe guest interviews for show notes, episode blog posts, and quote graphics for social media. The audio reaches one audience; the text reaches a different one through search.',
          },
          {
            title: 'Hiring and candidate screening',
            desc: 'Recruiters and hiring managers transcribe interviews to share with the team. Easier than a video for cross-time-zone reviewers. Easier to compare notes when everyone has the same text.',
          },
          {
            title: 'User research and customer interviews',
            desc: 'Product teams transcribe customer conversations to find patterns. The transcript goes into the research repository (Dovetail, Marvin, or a shared Notion).',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for interview transcription',
        tips: [
          {
            title: 'Use a real microphone, even for the phone interview',
            desc: 'A lavalier or USB mic for the in-person interviewee, and a decent headset for the interviewer on the phone. Quality of the recording is the biggest single factor in transcript accuracy.',
          },
          {
            title: 'Record in a quiet space',
            desc: 'Coffee shop interviews look great on camera and transcribe poorly. Background music and chatter degrade accuracy more than people expect.',
          },
          {
            title: 'For two-speaker interviews, transcribe the whole recording then add speaker labels manually',
            desc: 'Whisper does not do speaker diarization. For a clean back-and-forth interview, adding "Interviewer:" and "Source:" labels takes about 5 minutes per 30-minute interview.',
          },
          {
            title: 'If you have separate audio tracks, transcribe each separately',
            desc: 'Then you get clean attribution without any guesswork. Some research-grade recorders capture two mics into two channels of one stereo file. You can split that into two mono files first.',
          },
          {
            title: 'Save the transcript with the date and source name',
            desc: 'A transcript file called 2026-05-24-jane-smith.txt is easier to find six months later than transcript-final-v2.txt.',
          },
          {
            title: 'Edit the first 50 lines for accuracy, leave the rest as-is',
            desc: 'People skim transcripts. The first part matters most. Past that, fix only the quotes you plan to use.',
          },
          {
            title: 'Set the language manually if the interview is not in English',
            desc: 'Auto-detect works for most files, but a 5-second false-start at the beginning can mislead it. Picking the language explicitly is more reliable.',
          },
        ],
      }}
      faq={[
        {
          q: 'Is this accurate enough for journalism quotes?',
          a: 'For verbatim quoting, you should always verify against the audio. Whisper gets 90 to 95 percent of words right on clean interview audio. The 5 to 10 percent it misses often includes names, technical terms, and overlapping speech. Use the SRT timestamps to jump back to the recording for any quote you want to publish.',
        },
        {
          q: 'Will I get speaker labels?',
          a: 'Not automatically. You add them based on the conversation flow. For a 2-speaker interview this is fast. For panels or focus groups, plan extra time or upload each speaker track separately if you have them.',
        },
        {
          q: 'Can I transcribe an interview in another language?',
          a: 'Yes, 50+ languages with auto-detect. For interviews under 5 minutes or non-English interviews that start with English chit-chat, pick the language manually.',
        },
        {
          q: 'My interview is 90 minutes. What do I do?',
          a: 'Split it into chunks under our 60-minute cap. The natural break is wherever the conversation pauses (mid-interview coffee, topic change).',
        },
        {
          q: 'How accurate are technical terms and proper nouns?',
          a: 'Less accurate than common vocabulary. Whisper does not know your source company name, the medical term they used, or the specific software they referenced. Expect to fix these manually. The rest of the transcript will be solid.',
        },
        {
          q: 'Is the audio stored?',
          a: 'No. The file streams to the transcription provider (Groq, with OpenAI as backup), gets processed, then is discarded. We do not retain the audio on our servers.',
        },
        {
          q: 'Is this compliant with research ethics policies?',
          a: 'Most IRB-approved research protocols require knowing where audio is processed. Our providers process in the US. We do not retain. For specific IRB compliance, document the workflow and check with your IRB. For maximum control, use a local Whisper installation on your own machine instead.',
        },
        {
          q: 'Can I import the transcript into NVivo, Atlas.ti, or Dedoose?',
          a: 'Yes. Download as TXT and import into your qualitative analysis tool. The transcript is plain text, no special format needed.',
        },
        {
          q: 'How long does transcription take?',
          a: 'About 1 to 2 percent of the audio length. A 30-minute interview finishes in around 60 seconds.',
        },
        {
          q: 'What if the interview has poor audio quality?',
          a: 'Run it through a denoise tool first (Audacity Noise Reduction or Adobe Podcast Enhance). Then upload the cleaned version. Better input gives noticeably better output.',
        },
        {
          q: 'Can I transcribe an interview that I recorded on my phone?',
          a: 'Yes. iPhone Voice Memos save as M4A, Android voice recorders usually save as M4A or MP3. Both work. AirDrop or email the file to your computer, then upload here.',
        },
        {
          q: 'Will the timestamps in the SRT match the original recording exactly?',
          a: 'Yes, to the millisecond. The SRT timestamps reflect the actual time in the audio file. They work for jumping back to a specific moment in any audio or video player.',
        },
      ]}
      relatedLinks={[
        { href: '/podcast-transcription', label: 'Podcast Transcription', desc: 'For podcast interviews and host conversations.' },
        { href: '/timestamped-transcription', label: 'Timestamped Transcription', desc: 'For word-level or sentence-level timestamps.' },
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'For phone-recorded interviews.' },
        { href: '/business-transcription', label: 'Business Transcription', desc: 'For sales calls, customer calls, focus groups.' },
      ]}
    />
  )
}
