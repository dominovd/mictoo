import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Voice Memo to Text — Transcribe iPhone Voice Memos Free | Mictoo',
  description:
    'Free voice memo transcription. Drop your iPhone Voice Memo or Android voice recorder file (M4A, MP3) and get clean text in seconds. No signup, no per-minute fee.',
  alternates: {
    canonical: 'https://mictoo.com/voice-memo-to-text',
    languages: {
      'en': 'https://mictoo.com/voice-memo-to-text',
      'fr': 'https://mictoo.com/fr/voice-memo-to-text',
      'de': 'https://mictoo.com/de/voice-memo-to-text',
      'es': 'https://mictoo.com/es/voice-memo-to-text',
      'ru': 'https://mictoo.com/ru/voice-memo-to-text',
      'it': 'https://mictoo.com/it/voice-memo-to-text',
      'pt': 'https://mictoo.com/pt/voice-memo-to-text',
      'pl': 'https://mictoo.com/pl/voice-memo-to-text',
      'ja': 'https://mictoo.com/ja/voice-memo-to-text',
      'ko': 'https://mictoo.com/ko/voice-memo-to-text',
      'x-default': 'https://mictoo.com/voice-memo-to-text',
    },
  },
}

export default function VoiceMemoToTextPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Free"
      h1={
        <>
          Voice Memo to Text
          <br />
          <span className="text-brand-600">Free Voice Recording Transcriber</span>
        </>
      }
      subtitle="Turn voice memos into clean text. iPhone, Android, dedicated recorder, any voice file. Drop it, get the transcript in seconds. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '📱',
          title: 'Get the memo onto your computer (or upload from your phone)',
          desc: 'iPhone: open Voice Memos, tap Share, AirDrop or email to yourself. Android: locate the recording in Files or your recorder app folder. Or use the mobile browser to upload directly from your phone.',
        },
        {
          icon: '📂',
          title: 'Drop the file',
          desc: 'M4A from iPhone, M4A or MP3 from Android, WAV from some recorders. All work.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it in the browser, copy to clipboard, or download as TXT. Paste into Notion, Apple Notes, Google Docs, or wherever your notes live.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for voice memos',
        bullets: [
          {
            title: 'Native M4A support',
            desc: 'iPhone Voice Memos save as M4A. We accept M4A directly. No conversion needed.',
          },
          {
            title: 'Free with no minute meter',
            desc: 'Voice memos are a one-at-a-time format. Paying a per-minute fee for a 2-minute idea is silly. Free with no cap fits the use case.',
          },
          {
            title: 'Fast for short files',
            desc: 'A 2-minute voice memo transcribes in about 5 seconds. Faster than typing out the idea yourself.',
          },
          {
            title: 'Privacy',
            desc: 'Voice memos are often personal. Your audio streams to the transcription provider, gets processed, and is discarded. We do not store it.',
          },
          {
            title: 'Mobile-friendly',
            desc: 'Upload directly from your phone using the browser. iOS and Android both work.',
          },
          {
            title: 'Auto-detect handles your language',
            desc: 'Voice memos in any of 50+ languages. Useful if you think in two languages and your memos switch.',
          },
        ],
      }}
      useCases={{
        title: 'What people use voice memo transcripts for',
        items: [
          {
            title: 'Idea capture on the move',
            desc: 'You had a thought during a walk, dictated it into your phone. Now you want to act on it. Transcribe, paste into your task manager or note app.',
          },
          {
            title: 'Dictating long-form writing',
            desc: 'Some people draft essays, blog posts, or emails by talking. Transcribe the voice memo, edit the text, ship.',
          },
          {
            title: 'Action items after a meeting',
            desc: 'You dictated yourself a summary on the walk back from the conference room. Transcribe, paste into the project doc.',
          },
          {
            title: 'Field notes for journalists and researchers',
            desc: 'Capture observations and quotes on location. Transcribe later for organized notes.',
          },
          {
            title: 'Reminder logs (groceries, prep lists, project plans)',
            desc: 'Voice memos are faster than typing on a phone. Transcribe for a searchable, editable text version.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for voice memo transcription',
        tips: [
          {
            title: 'Hold the phone close, but not too close',
            desc: '4 to 6 inches from your mouth is the sweet spot. Closer and the mic picks up plosives and breathing. Further and you lose intelligibility in noisy environments.',
          },
          {
            title: 'Wind is the enemy',
            desc: 'A 10-second voice memo on a windy street can be unusable. If you can, stop, turn your back to the wind, then record. Or use earbuds with a wind-resistant mic.',
          },
          {
            title: 'Pause before key words',
            desc: 'When dictating a name, address, or technical term, pause briefly before saying it. Whisper handles isolated words better than rapid-fire speech for proper nouns.',
          },
          {
            title: 'iPhone Voice Memos defaults to lossless M4A, but you can set lossy',
            desc: 'Settings, Voice Memos, Audio Quality. Lossless is overkill for transcription. Lossy is one-third the file size with no transcription accuracy difference.',
          },
          {
            title: 'Trim silence at the start and end before upload',
            desc: 'Voice Memos sometimes captures 3 to 5 seconds of dead air. Trim in the Voice Memos app (tap Edit) before sharing. Saves your file-size budget for long memos.',
          },
          {
            title: 'For long-form dictation (writing a draft by voice), split into 5 to 10 minute chunks',
            desc: 'Easier to edit. Easier to re-record a single chunk if it goes wrong.',
          },
          {
            title: 'Whisper handles your accent better than your phone built-in transcription',
            desc: 'iOS has built-in dictation, but it is English-first and weaker on accents. Whisper covers 50+ languages with better accuracy.',
          },
        ],
      }}
      faq={[
        {
          q: 'Does Mictoo support iPhone Voice Memos?',
          a: 'Yes. iPhone Voice Memos save as M4A (sometimes lossless ALAC). M4A works directly. For ALAC, convert to WAV or M4A AAC first.',
        },
        {
          q: 'How do I get the voice memo from my iPhone to Mictoo?',
          a: 'Three options. Open the memo in Voice Memos, tap Share, choose AirDrop to Mac (fastest) or email it to yourself. Or, use Safari on the iPhone to open mictoo.com and upload directly from the Files app.',
        },
        {
          q: 'What about Android voice recordings?',
          a: 'Android voice recorders typically save as M4A or MP3. Both work. Locate the file in your Files app, share to your computer or upload from the mobile browser.',
        },
        {
          q: 'Can I upload directly from my phone?',
          a: 'Yes. The site is mobile-friendly. Tap the upload area, pick the file from your phone Files app or recordings folder.',
        },
        {
          q: 'How long can my voice memo be?',
          a: 'Up to 30 minutes per file free, 60 minutes signed in. Most voice memos are under 5 minutes, well within either limit.',
        },
        {
          q: 'How accurate is voice memo transcription?',
          a: 'For clear speech in a quiet environment, 90 to 95 percent. For mumbled speech, background noise (street, cafe, car), accuracy drops. Proper nouns often need cleanup.',
        },
        {
          q: 'Will the transcript include punctuation?',
          a: 'Yes. Whisper adds punctuation automatically. It is not always perfect for dictated speech (which lacks natural sentence boundaries), but it is usable as-is.',
        },
        {
          q: 'Does it work for dictating in a non-English language?',
          a: 'Yes, 50+ languages. Pick the language manually from the dropdown for short memos (auto-detect needs more audio to be reliable).',
        },
        {
          q: 'Is my voice memo stored?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded.',
        },
        {
          q: 'Can I edit the transcript before downloading?',
          a: 'Yes. Fix any wrong words in the browser before exporting.',
        },
        {
          q: 'Does this work for recording phone calls?',
          a: 'We transcribe the file you upload, regardless of how it was recorded. Phone call recording itself requires consent in most jurisdictions. Get consent before you record.',
        },
        {
          q: 'What is the difference between this and iOS built-in dictation?',
          a: 'iOS dictation is real-time as you speak, limited to certain languages, and has weaker accuracy on accents. Mictoo transcribes after the fact, supports 50+ languages, and uses a more accurate model (Whisper large-v3).',
        },
      ]}
      relatedLinks={[
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'For M4A files specifically.' },
        { href: '/dictation-to-text', label: 'Dictation to Text', desc: 'For dictated text drafts and long-form voice writing.' },
        { href: '/interview-transcription', label: 'Interview Transcription', desc: 'For phone-recorded interviews.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'For other audio formats.' },
      ]}
    />
  )
}
