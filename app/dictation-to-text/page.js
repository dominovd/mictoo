import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Dictation to Text — Free Voice Dictation Transcription | Mictoo',
  description:
    'Free dictation to text. Record a draft by voice, drop the file, get clean text. Built for writers, professionals, and anyone who thinks faster than they type.',
  alternates: {
    canonical: 'https://mictoo.com/dictation-to-text',
    languages: {
      'en': 'https://mictoo.com/dictation-to-text',
      'fr': 'https://mictoo.com/fr/dictation-to-text',
      'de': 'https://mictoo.com/de/dictation-to-text',
      'es': 'https://mictoo.com/es/dictation-to-text',
      'ru': 'https://mictoo.com/ru/dictation-to-text',
      'it': 'https://mictoo.com/it/dictation-to-text',
      'pt': 'https://mictoo.com/pt/dictation-to-text',
      'pl': 'https://mictoo.com/pl/dictation-to-text',
      'ja': 'https://mictoo.com/ja/dictation-to-text',
      'ko': 'https://mictoo.com/ko/dictation-to-text',
      'x-default': 'https://mictoo.com/dictation-to-text',
    },
  },
}

export default function DictationToTextPage() {
  return (
    <LandingLayout
      badge="Writers · Professionals · Free"
      h1={
        <>
          Dictation to Text
          <br />
          <span className="text-brand-600">Free Voice Dictation Transcription</span>
        </>
      }
      subtitle="Speak your draft, get clean text. For writers, lawyers, doctors, founders. Anyone who thinks faster by talking than by typing. No signup."
      howItWorks={[
        {
          icon: '🎤',
          title: 'Record your dictation',
          desc: 'Use your phone (iPhone Voice Memos, Android voice recorder), a desktop mic, or any voice recording app. M4A or MP3 are the easiest formats.',
        },
        {
          icon: '⚡',
          title: 'Drop the file',
          desc: 'Whisper large-v3 reads the audio. A 5-minute dictation finishes in around 10 seconds. A 20-minute dictation under 30 seconds.',
        },
        {
          icon: '📋',
          title: 'Edit and ship',
          desc: 'Read the transcript, copy into your writing tool (Notion, Google Docs, Word), polish the dictated draft into final text.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for dictation',
        bullets: [
          {
            title: 'Punctuation comes back automatically',
            desc: 'Whisper adds commas, periods, and paragraph breaks based on your speaking cadence. You do not have to say "comma" or "period" out loud (although you can if you want to be explicit).',
          },
          {
            title: 'Long-form dictation is fine',
            desc: 'Up to 60 minutes per file when you sign in (free). For a typical blog post draft, you might dictate for 10 to 20 minutes. Plenty of room.',
          },
          {
            title: 'Handles your accent',
            desc: 'Whisper large-v3 was trained on 680,000 hours of multilingual audio. Non-native English accents, regional accents, and bilingual dictation all work better than iOS or macOS built-in dictation.',
          },
          {
            title: 'No real-time pressure',
            desc: 'iOS and macOS dictation transcribe as you speak, which can be distracting. Mictoo transcribes after you finish recording, so you can speak freely and edit later.',
          },
          {
            title: 'Privacy',
            desc: 'Your dictation streams to the transcription provider, gets processed, and is discarded. Useful for personal or confidential drafts you do not want sitting on a third-party server forever.',
          },
        ],
      }}
      useCases={{
        title: 'What people dictate',
        items: [
          {
            title: 'Blog posts and articles',
            desc: 'A 1500-word blog post takes 10 to 15 minutes to dictate. Polishing the transcript takes another 30 minutes. Often faster than typing the whole thing from scratch.',
          },
          {
            title: 'Emails and messages on the go',
            desc: 'Long emails that would be painful to type on a phone become easy to dictate. Walk while you talk, transcribe later, edit and send.',
          },
          {
            title: 'Meeting and call notes',
            desc: 'After a call, summarize the key points by talking to your phone. Transcribe later for searchable notes.',
          },
          {
            title: 'Book chapters and long-form writing',
            desc: 'Some authors draft entire books by dictation. Each chapter is a separate file. The transcript is the rough draft for editing.',
          },
          {
            title: 'Doctor and lawyer notes',
            desc: 'Clinical notes, case observations, legal briefings dictated on the way back to the office. The transcript becomes the basis for the formal write-up. Note: for HIPAA or attorney-client privileged dictation, use a local transcription tool, not a cloud service.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for dictation transcription',
        tips: [
          {
            title: 'Speak in complete sentences',
            desc: 'Whisper produces better punctuation when you speak in complete sentences with natural pauses at sentence boundaries. Trailing off mid-thought confuses the punctuation model.',
          },
          {
            title: 'Pause briefly between paragraphs',
            desc: 'A pause of 1 to 2 seconds signals a paragraph break to Whisper. Useful for keeping structure in long dictations.',
          },
          {
            title: 'For lists and structure, say "first ... second ... third"',
            desc: 'Whisper will preserve the words but not auto-format as a list. You can find-replace afterwards in your text editor to convert into bullet points or numbered lists.',
          },
          {
            title: 'For technical writing, expect to fix domain terms manually',
            desc: 'Whisper does not know your specific product names, internal acronyms, or niche vocabulary. Plan for 5 to 10 percent cleanup time on technical content.',
          },
          {
            title: 'Use a real mic for long dictations',
            desc: 'A USB headset or even a wired earbuds mic gives a noticeably cleaner transcript than laptop built-in mics. Whisper handles less-than-perfect audio, but cleaner input is always better.',
          },
          {
            title: 'Record in a quiet environment',
            desc: 'Background music, TV in another room, kids playing, traffic noise. All hurt transcription accuracy. A quiet 5-minute room beats a noisy 20-minute room for dictation.',
          },
          {
            title: 'For dictating in a non-English language, pick it manually',
            desc: 'Auto-detect works for most files, but short dictations or files that open with English chit-chat can confuse it. Pick the language explicitly from the dropdown.',
          },
        ],
      }}
      faq={[
        {
          q: 'Will the transcript include punctuation?',
          a: 'Yes. Whisper adds commas, periods, and capitalization automatically based on your speaking cadence. You do not need to say "comma" or "period" out loud unless you want to override.',
        },
        {
          q: 'How is this different from iOS or macOS built-in dictation?',
          a: 'iOS and macOS dictation are real-time, English-first, and weaker on accents. Mictoo transcribes after recording, supports 50+ languages, and uses a more accurate model (Whisper large-v3). For long-form dictation, recording first and transcribing after is usually less frustrating.',
        },
        {
          q: 'Can I dictate in another language?',
          a: 'Yes. Whisper supports 50+ languages. Pick the language manually from the dropdown for best results, especially for shorter dictations.',
        },
        {
          q: 'How accurate is dictation transcription?',
          a: 'For clear speech in a quiet environment with a decent mic, 95 to 98 percent. Higher than for typical meeting or interview audio, because there is no crosstalk or background noise.',
        },
        {
          q: 'Can I dictate for an hour straight?',
          a: 'Up to 60 minutes per file when signed in (free). For longer continuous dictations, split the file into chunks. Most writers dictate in 10 to 20 minute bursts anyway, which fits comfortably.',
        },
        {
          q: 'Will my dictation be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. Useful for personal drafts or confidential content.',
        },
        {
          q: 'Can I use this for HIPAA-compliant medical dictation?',
          a: 'No. We are not HIPAA compliant. For medical dictation that involves PHI (protected health information), use a local Whisper installation on your own machine or a dedicated HIPAA-compliant transcription service. The same applies to attorney-client privileged dictation.',
        },
        {
          q: 'Will the transcript include filler words (um, uh, like)?',
          a: 'Whisper usually omits common filler words automatically. Occasional "um" makes it through. Clean up during editing if you want a polished version.',
        },
        {
          q: 'Can I dictate a list and have it formatted as a list?',
          a: 'Whisper preserves the words but does not auto-format as bullet points. Say "first ... second ... third" or "bullet point one" if you want clear list markers, then find-replace in your editor after.',
        },
        {
          q: 'Will the transcript be in paragraphs?',
          a: 'Whisper inserts paragraph breaks at long pauses. For predictable paragraph structure, pause for 1 to 2 seconds between paragraphs while dictating. You can also restructure manually after.',
        },
        {
          q: 'Can I dictate from my phone and upload directly?',
          a: 'Yes. Record in iPhone Voice Memos or Android voice recorder, then upload from the same phone using Safari or Chrome. The site is mobile-friendly. Or AirDrop / email the file to a computer first if you prefer.',
        },
        {
          q: 'What is the maximum dictation length?',
          a: '30 minutes per file without an account, 60 minutes when signed in (also free). For longer dictations, split into chunks.',
        },
      ]}
      relatedLinks={[
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'Specifically for iPhone and Android voice memos.' },
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'For M4A files (default iPhone Voice Memos format).' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/interview-transcription', label: 'Interview Transcription', desc: 'For dictating an interview note after the conversation.' },
      ]}
    />
  )
}
