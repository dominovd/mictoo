import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Lecture Transcription — Free Lecture Transcript Generator | Mictoo',
  description:
    'Free lecture transcription. Upload your recorded class, university lecture, or seminar (MP3, M4A, MP4) and get clean text in seconds. Built for students.',
  alternates: {
    canonical: 'https://mictoo.com/lecture-transcription',
    languages: {
      'en': 'https://mictoo.com/lecture-transcription',
      'fr': 'https://mictoo.com/fr/lecture-transcription',
      'de': 'https://mictoo.com/de/lecture-transcription',
      'es': 'https://mictoo.com/es/lecture-transcription',
      'ru': 'https://mictoo.com/ru/lecture-transcription',
      'it': 'https://mictoo.com/it/lecture-transcription',
      'pt': 'https://mictoo.com/pt/lecture-transcription',
      'pl': 'https://mictoo.com/pl/lecture-transcription',
      'ja': 'https://mictoo.com/ja/lecture-transcription',
      'ko': 'https://mictoo.com/ko/lecture-transcription',
      'x-default': 'https://mictoo.com/lecture-transcription',
    },
  },
}

export default function LectureTranscriptionPage() {
  return (
    <LandingLayout
      badge="Students · Academics · Free"
      h1={
        <>
          Lecture Transcription
          <br />
          <span className="text-brand-600">Free Lecture Transcript Tool</span>
        </>
      }
      subtitle="Turn any recorded lecture into clean text for studying. University, online course, conference talk, professional training. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '🎓',
          title: 'Drop the lecture audio or video',
          desc: 'MP3 from a voice recorder, M4A from your phone, MP4 from a Zoom class or screen-captured online lecture. WAV from a research recorder. All work.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the audio. A 60-minute lecture finishes in about a minute.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it, copy it into your notes, or download as TXT or SRT. Fix any wrong technical terms inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for lectures',
        bullets: [
          {
            title: 'Long-form is fine',
            desc: 'Up to 60 minutes per file once you sign in (free). For a 90-minute lecture, split into two 45-minute chunks. The transcript is concatenable.',
          },
          {
            title: 'Handles technical vocabulary better than most',
            desc: 'Whisper was trained on a huge variety of audio including academic lectures. Latin, technical jargon, math terms, code snippets often come out cleaner than expected.',
          },
          {
            title: 'No per-lecture cost',
            desc: 'For students, paying for transcription per class is wasteful. Free with no minute meter means you can transcribe every lecture in a semester.',
          },
          {
            title: 'Privacy and copyright',
            desc: 'The file streams to our transcription provider and is discarded. We do not retain the audio. Useful when you are transcribing material you own (your recordings) but do not want to upload to a third-party storage service.',
          },
          {
            title: '50+ languages',
            desc: 'International students and online courses in non-English languages all work. Auto-detect handles most cases.',
          },
        ],
      }}
      useCases={{
        title: 'What students and academics use lecture transcripts for',
        items: [
          {
            title: 'Searchable study notes',
            desc: 'Drop the transcript into Notion, Obsidian, or a Word doc. Ctrl+F any term the professor mentioned. Better than scrubbing a 90-minute audio file.',
          },
          {
            title: 'Revising for exams',
            desc: 'Skim the transcript while reviewing your handwritten notes. Catches things you missed during the live class.',
          },
          {
            title: 'Translating lectures for non-native speakers',
            desc: 'Transcribe in the source language, then run through DeepL or ChatGPT for translation. Useful for students taking courses in their second language.',
          },
          {
            title: 'Accessibility for hearing-impaired students',
            desc: 'A transcript or SRT file gives the same content in a different modality. Some universities mandate this for recorded course content.',
          },
          {
            title: 'Building flashcards and study materials',
            desc: 'Transcripts feed into Anki cards, summary documents, or AI-assisted study tools.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for lecture transcription',
        tips: [
          {
            title: 'Sit close to the professor for in-person lectures',
            desc: 'Recording from the back row through ambient room noise produces a transcript with a lot of holes. Phone in the front row, screen down, captures clean speech.',
          },
          {
            title: 'Use a dedicated voice recorder for long classes',
            desc: 'Phone recordings have aggressive auto-leveling and noise reduction that hurt transcription. A Zoom H1n or similar entry-level recorder gives much cleaner audio for 80 dollars.',
          },
          {
            title: 'For online lectures, record system audio directly',
            desc: 'OBS Studio on Windows or Mac can record the lecture audio straight from the system. Cleaner than capturing through your laptop mic.',
          },
          {
            title: 'Set the language manually',
            desc: 'Auto-detect is usually right but can be confused by professor warm-up chit-chat in another language. Pick the lecture language explicitly from the dropdown.',
          },
          {
            title: 'Strip the first 5 minutes if it is admin announcements',
            desc: 'Did you finish the homework? Did you read chapter 3? Not useful for the transcript. Trim in Audacity before upload to save your file-size budget.',
          },
          {
            title: 'For STEM lectures with equations, the transcript captures spoken math, not the equations',
            desc: 'Mathematical expressions written on the board are not in the audio, so they will not be in the transcript. You still need to capture those separately (photos of the board, screenshots of slides).',
          },
          {
            title: 'Re-listen to the recording while reading the transcript for the first review',
            desc: 'This is the best way to fix professor-specific terms and equation references. Once cleaned, the transcript stands on its own.',
          },
        ],
      }}
      faq={[
        {
          q: 'Is this accurate enough for university coursework?',
          a: 'For most lecture content, yes. Whisper large-v3 produces 90 to 95 percent accuracy on clean lecture audio. Technical terms and proper nouns often need cleanup. Use the transcript as study notes, not as the canonical source for citations.',
        },
        {
          q: 'My lecture is in a non-English language. Will it work?',
          a: 'Yes. Whisper supports 50+ languages with strong accuracy in major languages and basic support for many more. Pick the language manually from the dropdown for best results.',
        },
        {
          q: 'My lecture is 90 minutes. What do I do?',
          a: 'Split it. Our cap is 60 minutes per file. Cut into two 45-minute chunks at a natural break point (the mid-lecture pause or topic transition).',
        },
        {
          q: 'Is it legal to transcribe lectures?',
          a: 'For personal study use, generally yes in most jurisdictions, as long as you legally have access to the recording. For redistribution (publishing the transcript online, selling study materials), you need the lecturer or institution permission. Some universities have explicit policies on recording and transcribing lectures. Check yours.',
        },
        {
          q: 'Can I transcribe a video lecture from Coursera, edX, or Khan Academy?',
          a: 'Yes, if you can download the video file. Some platforms allow downloads for offline viewing (you get an MP4). Drop it here. For platforms that do not allow downloads, check their terms before scraping.',
        },
        {
          q: 'Will the transcript include slide content?',
          a: 'No. We only transcribe the audio. If the professor reads slides aloud, that text will be in the transcript. If slides have on-screen text the professor did not read, that is not in the transcript. Combine with screenshots of the slides for full notes.',
        },
        {
          q: 'How accurate are technical terms and jargon?',
          a: 'Less accurate than common vocabulary. For Latin medical terms, advanced math symbols, niche acronyms, expect to fix them manually. The general flow of the lecture will be solid.',
        },
        {
          q: 'Can I export the transcript to my note-taking app?',
          a: 'Yes. Download as TXT and paste into Notion, Obsidian, OneNote, Bear, or any text-friendly tool. SRT works in video players if you want subtitles alongside the recording.',
        },
        {
          q: 'Is my lecture audio stored?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not retain the audio.',
        },
        {
          q: 'How long does a lecture take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 60-minute lecture finishes in around 60 seconds. Upload time is usually the longer wait.',
        },
        {
          q: 'Can I get timestamps for jumping back to specific moments?',
          a: 'Yes. Download as SRT. Each line has a timestamp aligned to the original audio. Useful for going back to verify a specific point during exam prep.',
        },
        {
          q: 'What if the lecture has student Q&A at the end?',
          a: 'Q&A transcribes the same way as the main lecture. Audience questions sometimes come out less clearly (audience members are usually further from the mic), but the professor response should be clean. Add a "Q&A" section break in your notes.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'For general audio files.' },
        { href: '/transcribe-video-to-text', label: 'Video to Text', desc: 'For video lectures (MP4, MOV).' },
        { href: '/timestamped-transcription', label: 'Timestamped Transcription', desc: 'For jumping back to specific moments.' },
        { href: '/how-to-split-audio', label: 'How to Split Audio', desc: 'For lectures over 60 minutes.' },
      ]}
    />
  )
}
