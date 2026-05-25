import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Multilingual Transcription — Free AI Tool for 50+ Languages | Mictoo',
  description:
    'Free multilingual transcription. Auto-detect across 50+ languages. Code-switching, bilingual interviews, mid-recording language changes all handled. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/multilingual-transcription',
    languages: {
      'en': 'https://mictoo.com/multilingual-transcription',
      'fr': 'https://mictoo.com/fr/multilingual-transcription',
      'de': 'https://mictoo.com/de/multilingual-transcription',
      'es': 'https://mictoo.com/es/multilingual-transcription',
      'ru': 'https://mictoo.com/ru/multilingual-transcription',
      'it': 'https://mictoo.com/it/multilingual-transcription',
      'pt': 'https://mictoo.com/pt/multilingual-transcription',
      'pl': 'https://mictoo.com/pl/multilingual-transcription',
      'ja': 'https://mictoo.com/ja/multilingual-transcription',
      'ko': 'https://mictoo.com/ko/multilingual-transcription',
      'x-default': 'https://mictoo.com/multilingual-transcription',
    },
  },
}

export default function MultilingualTranscriptionPage() {
  return (
    <LandingLayout
      badge="50+ Languages · Auto-detect · Free"
      h1={
        <>
          Multilingual Transcription
          <br />
          <span className="text-brand-600">Free AI Tool for 50+ Languages</span>
        </>
      }
      subtitle="Free AI transcription for any of 50+ languages. Auto-detect picks the language for you. Bilingual recordings, code-switching, mid-file language changes all handled."
      howItWorks={[
        {
          icon: '🌐',
          title: 'Drop the audio in any supported language',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM. Leave the language picker on Auto-detect, or pick the dominant language manually if you know it.',
        },
        {
          icon: '⚡',
          title: 'AI detects and transcribes',
          desc: 'Whisper large-v3 identifies the language from a few seconds of audio and transcribes in that language. For files that switch between languages, it follows the switch.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the original language, copy to clipboard, or download as TXT or SRT. For translation, run the transcript through DeepL or ChatGPT.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for multilingual audio',
        bullets: [
          {
            title: '50+ languages, all the same engine',
            desc: 'No "premium tier for non-English". The same Whisper large-v3 model that handles English handles Spanish, Mandarin, Japanese, Arabic, Russian, Hindi, Korean, Portuguese, and 40+ others.',
          },
          {
            title: 'Auto-detect handles most cases',
            desc: 'Whisper samples the first chunk of audio to identify the language. Works for almost all audio that has speech in the first 30 seconds. For shorter or unusual clips, pick the language manually.',
          },
          {
            title: 'Code-switching is supported',
            desc: 'For bilingual recordings (English with Spanish, French with Arabic, Mandarin with English), Whisper follows the language switches and transcribes each segment in the right language.',
          },
          {
            title: 'Right-to-left scripts work',
            desc: 'Arabic, Hebrew, Persian all come back in the correct script, written right-to-left. The transcript editor and downloaded file preserve the script direction.',
          },
          {
            title: 'Diacritics, tones, and CJK characters all correct',
            desc: 'Vietnamese tone marks, Mandarin and Cantonese characters, Japanese hiragana/katakana/kanji, Korean hangul, Greek polytonic. All come back in the proper script and orthography.',
          },
          {
            title: 'No file is stored',
            desc: 'Your audio streams to the transcription provider, gets processed, and is discarded.',
          },
        ],
      }}
      useCases={{
        title: 'Where multilingual transcription helps',
        items: [
          {
            title: 'International interviews and ethnographic research',
            desc: 'Researchers interviewing in multiple languages get one consistent transcription pipeline. Each interview transcribed in its native language. Translation happens as a separate step.',
          },
          {
            title: 'Cross-border business calls',
            desc: 'Sales calls that open in English and slip into the customer native language. Internal meetings where two regions of a company speak different languages.',
          },
          {
            title: 'Bilingual podcasts',
            desc: 'Shows that mix English with another language (Spanish-English, Mandarin-English, Korean-English) all work. The transcript reflects what was actually said.',
          },
          {
            title: 'Conference recordings with international speakers',
            desc: 'A panel where one speaker is in English, the next in French, the next in German. Whisper transcribes each in their respective language without manual intervention.',
          },
          {
            title: 'Documentation of immigrant communities and minority languages',
            desc: 'Oral history projects, family archive recordings, community storytelling. If the language is one of the 50+ Whisper supports, you get a usable transcript without paying for human transcription per minute per language.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for multilingual transcription',
        tips: [
          {
            title: 'For short audio (under 30 seconds), pick the language manually',
            desc: 'Auto-detect needs enough audio to be reliable. Very short clips can be misidentified, especially between similar languages (Spanish vs Portuguese, Danish vs Norwegian, Hindi vs Urdu).',
          },
          {
            title: 'For audio that opens with non-speech (music, silence), pick the language manually',
            desc: 'A 30-second musical intro pushes auto-detect into guessing. Manual selection is more reliable.',
          },
          {
            title: 'For predominantly one language with foreign-word inserts, pick the dominant language',
            desc: 'A French podcast with English terms mixed in transcribes best when you pick French manually. Auto-detect might choose English if the opening line has English words.',
          },
          {
            title: 'For audio that genuinely switches between two languages, auto-detect handles it',
            desc: 'Whisper has been trained on code-switching audio. For interviews where the speaker switches halfway through, leave auto-detect on.',
          },
          {
            title: 'Translation is a separate step',
            desc: 'Whisper transcribes in the source language. For translation, paste the transcript into DeepL, ChatGPT, or Google Translate. Two-step workflow, but each step is reliable on its own.',
          },
          {
            title: 'For rare or low-resource languages, accuracy varies',
            desc: 'Whisper is strongest in the major world languages (English, Mandarin, Spanish, French, German, Japanese, Russian, Portuguese, Arabic). For less common languages (Welsh, Maltese, Basque), accuracy is lower. Worth a test before committing to a large transcription project.',
          },
        ],
      }}
      faq={[
        {
          q: 'What languages does Mictoo support?',
          a: '50+ languages including (alphabetical): Afrikaans, Arabic, Bulgarian, Catalan, Chinese (Mandarin and Cantonese), Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Latvian, Lithuanian, Malay, Norwegian, Persian (Farsi), Polish, Portuguese, Romanian, Russian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, Welsh.',
        },
        {
          q: 'How does auto-detect work?',
          a: 'Whisper samples the first few seconds of speech to identify the language, then transcribes the whole file in that language. Works for most audio. For very short clips, audio with long non-speech intros, or files that switch languages early, picking the language manually is more reliable.',
        },
        {
          q: 'Does Mictoo handle code-switching (multiple languages in one recording)?',
          a: 'Yes. Whisper was trained on a lot of code-switching audio, especially Spanish-English, Mandarin-English, French-Arabic. For audio that switches mid-recording, leave auto-detect on and Whisper will follow.',
        },
        {
          q: 'Will the transcript translate the audio to English?',
          a: 'No, by default. Whisper transcribes in the source language (a French audio gives you French text). For translation, paste the transcript into DeepL or ChatGPT.',
        },
        {
          q: 'Does Whisper have a "translate to English" mode?',
          a: 'Yes, the underlying Whisper model supports translation, but Mictoo currently only exposes transcription in the source language. We are evaluating whether to add a translation toggle to the UI.',
        },
        {
          q: 'How accurate is non-English transcription?',
          a: "For the major world languages (Spanish, French, German, Mandarin, Japanese, Portuguese, Arabic, Russian), 90 to 96 percent accuracy on clean audio, similar to English. For less common languages (Welsh, Maltese, Basque, Swahili), accuracy drops to 80 to 90 percent.",
        },
        {
          q: 'Will diacritics, accents, and non-Latin scripts come back correctly?',
          a: 'Yes. French accents, German umlauts, Spanish ñ, Vietnamese tones, Mandarin characters, Japanese hiragana/katakana/kanji, Korean hangul, Arabic right-to-left script, Cyrillic, Devanagari, Thai script. All in their proper forms.',
        },
        {
          q: 'My audio is in a language not on your list. Will it work?',
          a: 'Probably, with reduced accuracy. Whisper has basic support for many more languages than the 50+ that are fully covered. Try it. If the result is unusable, the language is outside the model training.',
        },
        {
          q: 'Can I transcribe a podcast that switches between English and another language each segment?',
          a: 'Yes. Auto-detect handles segment-by-segment language changes well, especially between languages Whisper has seen often together.',
        },
        {
          q: 'Will I get speaker labels for multilingual interviews?',
          a: 'Not automatically. Whisper does not do speaker diarization. Add speaker labels manually based on conversation flow.',
        },
        {
          q: 'How do I download a multilingual transcript?',
          a: 'Same as for any transcript. TXT for plain text, SRT for subtitles. Both formats preserve the original script and direction (right-to-left for Arabic, Hebrew, Persian).',
        },
        {
          q: 'Will multilingual audio be stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets processed, then is discarded.',
        },
      ]}
      relatedLinks={[
        { href: '/french-speech-to-text', label: 'French Speech to Text', desc: 'French-specific transcription tips.' },
        { href: '/spanish-audio-to-text', label: 'Spanish Audio to Text', desc: 'Spanish-specific transcription tips.' },
        { href: '/german-audio-transcription', label: 'German Audio Transcription', desc: 'German-specific transcription tips.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription page.' },
      ]}
    />
  )
}
