import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'French Speech to Text — Free AI Transcription for French Audio | Mictoo',
  description:
    'Free French speech to text transcription. Upload any French audio (MP3, M4A, MP4, WAV) and get an accurate transcript. Handles Metropolitan French, Quebec, African French.',
  alternates: {
    canonical: 'https://mictoo.com/french-speech-to-text',
    languages: {
      'en': 'https://mictoo.com/french-speech-to-text',
      'fr': 'https://mictoo.com/fr/french-speech-to-text',
      'de': 'https://mictoo.com/de/french-speech-to-text',
      'es': 'https://mictoo.com/es/french-speech-to-text',
      'ru': 'https://mictoo.com/ru/french-speech-to-text',
      'it': 'https://mictoo.com/it/french-speech-to-text',
      'pt': 'https://mictoo.com/pt/french-speech-to-text',
      'pl': 'https://mictoo.com/pl/french-speech-to-text',
      'ja': 'https://mictoo.com/ja/french-speech-to-text',
      'ko': 'https://mictoo.com/ko/french-speech-to-text',
      'x-default': 'https://mictoo.com/french-speech-to-text',
    },
  },

  openGraph: {
    title: "French Speech to Text — Free AI Transcription for French Audio | Mictoo",
    description: "Free French speech to text transcription. Upload any French audio (MP3, M4A, MP4, WAV) and get an accurate transcript. Handles Metropolitan French, Quebec, African French.",
    url: "https://mictoo.com/french-speech-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "French Speech to Text — Free AI Transcription for French Audio | Mictoo",
    description: "Free French speech to text transcription. Upload any French audio (MP3, M4A, MP4, WAV) and get an accurate transcript. Handles Metropolitan French, Quebec, African French.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrenchSpeechToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="French · Quebec · African · Free"
      h1={
        <>
          French Speech to Text
          <br />
          <span className="text-brand-600">Free AI Transcription for French Audio</span>
        </>
      }
      subtitle="Free AI transcription for any French audio. Metropolitan French, Quebec French, African French dialects. Drop the file, get the text in seconds."
      howItWorks={[
        {
          icon: '🇫🇷',
          title: 'Drop the French audio',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM. We have pre-selected French as the recognition language, so you do not need to change anything.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes in French',
          desc: 'Whisper large-v3 reads the audio and produces French text with full accents, punctuation, and capitalization. A 30-minute file finishes in around a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript, copy to clipboard, or download as TXT or SRT. Fix any wrong words or proper nouns inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for French audio',
        bullets: [
          {
            title: 'Strong on accented French',
            desc: 'Whisper large-v3 was trained on a lot of French audio across many accents. Metropolitan French (Paris, Lyon, Marseille), Quebec French (with its distinct vocabulary), Belgian French, Swiss French, and African French (Senegal, Cote d\'Ivoire, Cameroon, Morocco) all transcribe well.',
          },
          {
            title: 'Code-switching with English works',
            desc: 'A lot of business French dialogues mix in English terms (le brainstorming, le marketing, le briefing). Whisper handles these without flipping the whole transcript to English.',
          },
          {
            title: 'Punctuation and accents are correct',
            desc: 'Accents (é, è, ê, à, ç, etc.) come back correctly. French punctuation conventions (space before colons and semicolons in Metropolitan French) are usually right but worth a quick check.',
          },
          {
            title: 'Free, no per-minute meter',
            desc: 'Same free tier as the English pages. No "premium tier" gating for non-English languages. The whole engine is the same.',
          },
          {
            title: 'No file is stored',
            desc: 'Your audio streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Common French audio sources',
        items: [
          {
            title: 'French podcasts',
            desc: 'France Inter, France Culture, Choses à Savoir, Transfert, and thousands of indie French podcasts. Drop the MP3 from the podcast host or the M4A from your downloader.',
          },
          {
            title: 'Interviews in French',
            desc: 'Journalism interviews, qualitative research with French-speaking participants, customer interviews for products serving the French market. The transcript becomes the coding dataset.',
          },
          {
            title: 'Lectures and conference talks in French',
            desc: 'University lectures, conference recordings from events like Paris Web, Devoxx France, USI Paris. Transcribe for study notes or accessibility.',
          },
          {
            title: 'Meeting recordings with French-speaking teams',
            desc: 'Internal Zoom, Meet, Teams recordings of French-language meetings. The transcript flows into shared docs for the whole team to skim.',
          },
          {
            title: 'iPhone Voice Memos dictated in French',
            desc: 'Idea capture on the go, draft writing by voice, quick notes after a meeting. M4A from Voice Memos drops in directly.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for French transcription',
        tips: [
          {
            title: 'For Quebec French, expect a few specific vocabulary mismatches',
            desc: "Words like 'char' (car in Quebec, vs 'voiture' in Metropolitan) and 'magasiner' (to shop) sometimes get transcribed using Metropolitan equivalents. Whisper has heard plenty of Quebec French, but the default lexicon leans Metropolitan. Light cleanup may be needed.",
          },
          {
            title: 'For African French, regional names often need fixing',
            desc: 'Senegalese, Ivorian, Cameroonian proper nouns sometimes get rendered with French spelling that does not match. Names of African cities, public figures, and local terms benefit from a manual pass.',
          },
          {
            title: 'For bilingual French-English content, pick French manually',
            desc: 'If the audio is mostly French with English terms mixed in, picking "French" manually gives better results than auto-detect. Whisper will still handle the English insertions.',
          },
          {
            title: 'Numbers and dates follow French convention',
            desc: 'Numbers come back in French digits ("trente-trois" not "33" unless the speaker says digits explicitly). Dates use the day-month-year order. Currency stays in euros or local currency depending on context.',
          },
          {
            title: 'For Belgian and Swiss French, the differences are small',
            desc: 'Septante (Switzerland) and nonante (Belgium and Switzerland) come through as written. Whisper handles these correctly in most cases. Worth double-checking if you are transcribing financial or numeric content.',
          },
          {
            title: 'For audio with French slang, expect informal spellings',
            desc: 'Whisper tends to render slang and verlan (back-slang, common in French youth speech) phonetically or in informal forms. For academic or formal use, plan for cleanup.',
          },
        ],
      }}
      faq={[
        {
          q: 'How accurate is French speech to text?',
          a: 'For clean Metropolitan French audio, 92 to 96 percent accuracy. For Quebec French, similar accuracy with some lexical mismatches. For African French dialects, 85 to 92 percent depending on the regional variety and audio quality.',
        },
        {
          q: 'Does it handle Quebec French?',
          a: 'Yes, and well. Whisper was trained on substantial Quebec French audio. Accent and pronunciation differences are handled correctly. Some Quebec-specific vocabulary may default to Metropolitan equivalents in the transcript, which you can correct in editing.',
        },
        {
          q: 'What about African French (Senegalese, Ivorian, etc.)?',
          a: 'Yes. Whisper handles African French dialects, though accuracy varies by region. The most common accents (West African, Maghrebi) work better than less-represented ones. Local proper nouns and place names often need a manual pass.',
        },
        {
          q: 'Will accents (é, è, à, ç) come back correctly?',
          a: 'Yes. The transcript includes all standard French accents in their proper positions. Capitalization at the start of sentences and on proper nouns is also handled.',
        },
        {
          q: 'Can I transcribe a French audio file from any source?',
          a: 'Yes. Podcast MP3, interview M4A, Zoom MP4, voice memo from your phone. We work with the file regardless of where it came from.',
        },
        {
          q: 'How does this compare to Google Speech-to-Text or Microsoft for French?',
          a: 'Whisper large-v3 is generally on par with or slightly ahead of Google and Microsoft on French audio, especially for accented and less-formal speech. The big advantage for Mictoo specifically is: free, no signup, no per-minute charge.',
        },
        {
          q: 'Will my French audio be stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets processed, then is discarded.',
        },
        {
          q: 'Can I transcribe a French YouTube video?',
          a: 'Yes. Download the video as MP4 or audio-only M4A first (with 4K Video Downloader or similar), then upload here. See our YouTube to Text page for details.',
        },
        {
          q: 'Does Mictoo support French TTS audio (text-to-speech)?',
          a: 'Yes. AI-generated French voice (from ElevenLabs, OpenAI TTS, etc.) usually transcribes cleaner than human speech because there is no background noise.',
        },
        {
          q: 'Can I get SRT subtitles in French?',
          a: 'Yes. Download as SRT. Useful for adding French subtitles to a video that already has French audio, or as a starting point for translating to subtitles in other languages.',
        },
        {
          q: 'Will I get speaker labels for French interviews?',
          a: 'Not automatically. Whisper does not do speaker diarization. Add labels manually based on conversation flow.',
        },
        {
          q: 'My audio mixes French and another language. Will it work?',
          a: 'Yes. For French with English terms mixed in (common in business French), the transcript stays in French with English words preserved. For audio that switches between languages mid-recording, Whisper follows the switches in most cases.',
        },
      ]}
      relatedLinks={[
        { href: '/spanish-audio-to-text', label: 'Spanish Audio to Text', desc: 'For Spanish audio transcription with the same engine.' },
        { href: '/german-audio-transcription', label: 'German Audio Transcription', desc: 'For German audio with similar quality.' },
        { href: '/multilingual-transcription', label: 'Multilingual Transcription', desc: 'For audio with multiple languages mixed.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription page.' },
      ]}
    />
  )
}
