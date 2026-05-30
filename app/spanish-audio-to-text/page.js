import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Spanish Audio to Text — Free AI Transcription for Spanish | Mictoo',
  description:
    'Free Spanish audio to text transcription. Upload any Spanish audio (MP3, M4A, MP4, WAV) and get an accurate transcript. Handles Castilian, Mexican, Argentine, all Latin American varieties.',
  alternates: {
    canonical: 'https://mictoo.com/spanish-audio-to-text',
    languages: {
      'en': 'https://mictoo.com/spanish-audio-to-text',
      'fr': 'https://mictoo.com/fr/spanish-audio-to-text',
      'de': 'https://mictoo.com/de/spanish-audio-to-text',
      'es': 'https://mictoo.com/es/spanish-audio-to-text',
      'ru': 'https://mictoo.com/ru/spanish-audio-to-text',
      'it': 'https://mictoo.com/it/spanish-audio-to-text',
      'pt': 'https://mictoo.com/pt/spanish-audio-to-text',
      'pl': 'https://mictoo.com/pl/spanish-audio-to-text',
      'ja': 'https://mictoo.com/ja/spanish-audio-to-text',
      'ko': 'https://mictoo.com/ko/spanish-audio-to-text',
      'x-default': 'https://mictoo.com/spanish-audio-to-text',
    },
  },

  openGraph: {
    title: "Spanish Audio to Text — Free AI Transcription for Spanish | Mictoo",
    description: "Free Spanish audio to text transcription. Upload any Spanish audio (MP3, M4A, MP4, WAV) and get an accurate transcript. Handles Castilian, Mexican, Argentine, all Latin American varieties.",
    url: "https://mictoo.com/spanish-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish Audio to Text — Free AI Transcription for Spanish | Mictoo",
    description: "Free Spanish audio to text transcription. Upload any Spanish audio (MP3, M4A, MP4, WAV) and get an accurate transcript. Handles Castilian, Mexican, Argentine, all Latin American varieties.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function SpanishAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Spanish · LatAm · Castilian · Free"
      h1={
        <>
          Spanish Audio to Text
          <br />
          <span className="text-brand-600">Free AI Transcription for Spanish</span>
        </>
      }
      subtitle="Free AI transcription for any Spanish audio. Castilian, Mexican, Argentine, Colombian, Andean. All regional varieties supported. Drop the file, get the text."
      howItWorks={[
        {
          icon: '🇪🇸',
          title: 'Drop the Spanish audio',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM. We have pre-selected Spanish as the recognition language, no changes needed.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes in Spanish',
          desc: 'Whisper large-v3 reads the audio and produces Spanish text with full accents (á, é, í, ó, ú, ñ) and punctuation (¿, ¡). A 30-minute file finishes in around a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript, copy to clipboard, or download as TXT or SRT. Fix any wrong proper nouns inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for Spanish audio',
        bullets: [
          {
            title: 'Wide regional coverage',
            desc: 'Whisper large-v3 was trained on huge amounts of Spanish audio across all major regions. Castilian (Spain), Mexican, Argentine (including Buenos Aires lunfardo), Colombian, Chilean, Peruvian, Cuban, Venezuelan. All transcribe well.',
          },
          {
            title: 'Inverted punctuation handled',
            desc: 'The opening question mark (¿) and exclamation mark (¡) come back correctly at the start of sentences. Most other speech-to-text tools skip them. Whisper does not.',
          },
          {
            title: 'Code-switching with English (Spanglish) works',
            desc: 'For audio that mixes Spanish and English (common in US Latino media, business calls with bilingual teams), Whisper handles the switches without flipping the whole transcript.',
          },
          {
            title: 'Free, no per-minute meter',
            desc: 'Same free tier as the English pages. Latin American users get the same access as English speakers without paywalls or signup.',
          },
          {
            title: 'No file is stored',
            desc: 'Your audio streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Common Spanish audio sources',
        items: [
          {
            title: 'Spanish-language podcasts',
            desc: 'El Hilo, Radio Ambulante, Nadie Sabe Nada, La Bicicleta. Drop the MP3 from the podcast host or the M4A from your downloader.',
          },
          {
            title: 'Interviews in Spanish',
            desc: 'Journalism interviews with Spanish-speaking sources, qualitative research with LatAm participants, customer interviews for products serving Spanish-speaking markets.',
          },
          {
            title: 'Lectures and academic content in Spanish',
            desc: 'University lectures from Spanish, Mexican, and Argentine universities. Conference recordings from events like FrontFest, Codemotion Madrid, JSConf Colombia.',
          },
          {
            title: 'Meeting recordings with Spanish-speaking teams',
            desc: 'Internal Zoom, Meet, Teams recordings of Spanish-language meetings. The transcript flows into shared docs for the whole team.',
          },
          {
            title: 'WhatsApp voice notes in Spanish',
            desc: 'WhatsApp voice messages are massive in Spanish-speaking countries. Save the OGG Opus file from WhatsApp, drop it here, get the text. See our voice memo page for tips.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for Spanish transcription',
        tips: [
          {
            title: 'Pick "Spanish" manually, not auto-detect, for short audio',
            desc: "Auto-detect can confuse Spanish with Portuguese or Italian on very short clips (under 30 seconds). Picking Spanish manually gives more reliable results.",
          },
          {
            title: 'Regional vocabulary may need light cleanup',
            desc: "Some regional words (Mexican 'chido', Argentine 'che', Colombian 'parce') come through, but their exact spelling sometimes defaults to the most common form. Worth a manual check for content where regional flavor matters.",
          },
          {
            title: 'Numbers and dates follow Spanish convention',
            desc: 'Spelled out in words when spoken that way ("treinta y tres" not "33"). Currency stays in the local currency the speaker mentioned (pesos, euros, dollars).',
          },
          {
            title: 'For lisped vs non-lisped speech, both work',
            desc: 'Castilian distinción (where "z" and "ce/ci" are pronounced like English "th") and Latin American seseo (where they are pronounced like "s") both transcribe correctly. Whisper does not care about the regional phoneme difference.',
          },
          {
            title: 'For voseo (Argentine, parts of Central America), grammar comes through',
            desc: 'Argentine "vos tenés" instead of "tú tienes" comes back correctly in the transcript. Whisper has heard plenty of Argentine speech.',
          },
          {
            title: 'For audio with indigenous language inserts (Quechua, Aymara, Nahuatl), expect lower accuracy on those parts',
            desc: 'Whisper handles primary Spanish well, but inserts in indigenous languages sometimes get transcribed as Spanish-spelling approximations. Plan for manual cleanup on those sections.',
          },
        ],
      }}
      faq={[
        {
          q: 'How accurate is Spanish speech to text?',
          a: 'For clean audio in any major Spanish variety, 92 to 96 percent accuracy. For regional dialects with strong local vocabulary, around 90 to 94 percent. Names, places, and technical terms often need a manual pass.',
        },
        {
          q: 'Does it handle Castilian (Spain) Spanish?',
          a: 'Yes. The Castilian "th" sound for c/z, "vosotros" verb forms, and Spanish-specific vocabulary all come through correctly.',
        },
        {
          q: 'What about Mexican, Argentine, or other Latin American Spanish?',
          a: 'Yes, all major LatAm varieties are supported. Mexican, Argentine (with voseo), Colombian, Chilean, Peruvian, Cuban, Venezuelan all transcribe well.',
        },
        {
          q: 'Will inverted punctuation (¿ and ¡) come back correctly?',
          a: 'Yes. The opening question mark and exclamation mark are included at the start of sentences, as proper Spanish punctuation requires.',
        },
        {
          q: 'Does it handle Spanglish or code-switching?',
          a: 'Yes. For audio that mixes Spanish and English in the same sentence or recording, Whisper handles the switches gracefully. The transcript reflects what was actually said in each language.',
        },
        {
          q: 'Can I transcribe a WhatsApp voice note in Spanish?',
          a: 'Yes. WhatsApp voice messages are OGG Opus. Save the file from WhatsApp, upload it here. See our voice memo and OGG pages for tips.',
        },
        {
          q: 'How does this compare to Google Speech-to-Text or AWS Transcribe for Spanish?',
          a: 'Whisper large-v3 is generally on par with or slightly ahead of Google and AWS on Spanish audio, especially for regional accents and less-formal speech. The big advantage for Mictoo: free, no signup, no per-minute charge.',
        },
        {
          q: 'Will my Spanish audio be stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets processed, then is discarded.',
        },
        {
          q: 'Can I transcribe a Spanish YouTube video?',
          a: 'Yes. Download the video as MP4 or audio-only M4A first (with 4K Video Downloader or similar), then upload here. See our YouTube to Text page for details.',
        },
        {
          q: 'Can I get SRT subtitles in Spanish?',
          a: 'Yes. Download as SRT. Useful for adding Spanish subtitles to Spanish-language video, or as a starting point for translating to other languages.',
        },
        {
          q: 'Will I get speaker labels for Spanish interviews?',
          a: 'Not automatically. Whisper does not do speaker diarization. Add labels manually based on conversation flow.',
        },
        {
          q: 'My audio is in Portuñol (mix of Spanish and Portuguese). Will it work?',
          a: 'It will produce a transcript, but accuracy may be lower for the truly mixed sections. For audio that is mostly Spanish with occasional Portuguese, pick Spanish manually. For mostly Portuguese, use Portuguese.',
        },
      ]}
      relatedLinks={[
        { href: '/french-speech-to-text', label: 'French Speech to Text', desc: 'For French audio with the same engine.' },
        { href: '/german-audio-transcription', label: 'German Audio Transcription', desc: 'For German audio.' },
        { href: '/multilingual-transcription', label: 'Multilingual Transcription', desc: 'For audio with multiple languages.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription page.' },
      ]}
    />
  )
}
