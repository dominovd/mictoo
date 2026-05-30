import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'German Audio Transcription — Free AI Speech to Text | Mictoo',
  description:
    'Free German audio transcription. Upload any German audio (MP3, M4A, MP4, WAV). Handles Hochdeutsch, Austrian German, Swiss German. 50+ languages, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/german-audio-transcription',
    languages: {
      'en': 'https://mictoo.com/german-audio-transcription',
      'fr': 'https://mictoo.com/fr/german-audio-transcription',
      'de': 'https://mictoo.com/de/german-audio-transcription',
      'es': 'https://mictoo.com/es/german-audio-transcription',
      'ru': 'https://mictoo.com/ru/german-audio-transcription',
      'it': 'https://mictoo.com/it/german-audio-transcription',
      'pt': 'https://mictoo.com/pt/german-audio-transcription',
      'pl': 'https://mictoo.com/pl/german-audio-transcription',
      'ja': 'https://mictoo.com/ja/german-audio-transcription',
      'ko': 'https://mictoo.com/ko/german-audio-transcription',
      'x-default': 'https://mictoo.com/german-audio-transcription',
    },
  },

  openGraph: {
    title: "German Audio Transcription — Free AI Speech to Text | Mictoo",
    description: "Free German audio transcription. Upload any German audio (MP3, M4A, MP4, WAV). Handles Hochdeutsch, Austrian German, Swiss German. 50+ languages, no signup.",
    url: "https://mictoo.com/german-audio-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "German Audio Transcription — Free AI Speech to Text | Mictoo",
    description: "Free German audio transcription. Upload any German audio (MP3, M4A, MP4, WAV). Handles Hochdeutsch, Austrian German, Swiss German. 50+ languages, no signup.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function GermanAudioTranscriptionPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="German · Austrian · Swiss · Free"
      h1={
        <>
          German Audio Transcription
          <br />
          <span className="text-brand-600">Free AI Speech to Text for German</span>
        </>
      }
      subtitle="Free AI transcription for German audio. Standard Hochdeutsch, Austrian German, Swiss German. Drop the file, get the text in seconds."
      howItWorks={[
        {
          icon: '🇩🇪',
          title: 'Drop the German audio',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM. We have pre-selected German as the recognition language. No changes needed.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes in German',
          desc: 'Whisper large-v3 reads the audio and produces German text with umlauts (ä, ö, ü), eszett (ß), and proper capitalization (German capitalizes all nouns).',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript, copy to clipboard, or download as TXT or SRT. Fix any wrong technical terms inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for German audio',
        bullets: [
          {
            title: 'Standard Hochdeutsch is solid',
            desc: 'Whisper large-v3 handles standard High German (Hochdeutsch) very well. Business meetings, news, podcasts, lectures all transcribe at high accuracy.',
          },
          {
            title: 'Austrian and Swiss variants supported',
            desc: 'Austrian German (Österreichisches Deutsch) and Swiss High German (Schweizerhochdeutsch) both transcribe well. Strong Swiss German dialects (Schwyzerdütsch as spoken locally) are harder, see Pro tips below.',
          },
          {
            title: 'Capitalization handled correctly',
            desc: 'German capitalizes all nouns. Whisper gets this right in most cases without you having to fix capitalization manually. Compound nouns (Donaudampfschifffahrtsgesellschaftskapitän) come through as single words.',
          },
          {
            title: 'Umlauts and eszett are correct',
            desc: 'ä, ö, ü, and ß appear in the right positions. The transcript uses ß (not the alternative "ss" or capital ẞ) by default, matching standard German orthography. Swiss German conventions (no ß) can be applied by find-replace.',
          },
          {
            title: 'Free, no per-minute meter',
            desc: 'Same free tier as English. No upcharge for non-English languages.',
          },
          {
            title: 'No file is stored',
            desc: 'Your audio streams to the transcription provider, gets processed, and is discarded. Nothing kept on our servers.',
          },
        ],
      }}
      useCases={{
        title: 'Common German audio sources',
        items: [
          {
            title: 'German-language podcasts',
            desc: 'Logbuch:Netzpolitik, Lage der Nation, Alles gesagt, Mordlust. Drop the MP3 from the podcast host or M4A from your downloader.',
          },
          {
            title: 'Interviews in German',
            desc: 'Journalism interviews, qualitative research with German-speaking participants, customer interviews for German-market products.',
          },
          {
            title: 'Lectures and academic content',
            desc: 'University lectures (Vorlesungen) from German, Austrian, Swiss universities. Conference recordings from events like re:publica, c\'t webdev, dev/conf.',
          },
          {
            title: 'Meeting recordings with German-speaking teams',
            desc: 'Internal Zoom, Meet, Teams recordings. The transcript flows into shared docs (Confluence, Notion, SharePoint) for the rest of the team.',
          },
          {
            title: 'Audiobooks and Hörspiele for translation prep',
            desc: 'Transcribing German audiobook samples or Hörspiele to translate to another language. Whisper produces the source text, DeepL or ChatGPT translates it.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for German transcription',
        tips: [
          {
            title: 'For strong Swiss dialects (Schwyzerdütsch), accuracy drops',
            desc: 'Swiss High German (used in formal contexts and broadcasting) works well. The local spoken dialects (Bärndütsch, Züritüütsch, Baseldytsch) are much further from Hochdeutsch and Whisper struggles with them. Expect 70 to 80 percent accuracy on heavy Swiss dialect.',
          },
          {
            title: 'For Bavarian and other strong regional dialects, similar pattern',
            desc: 'Bavarian (Bairisch), Saxon (Sächsisch), and other strong regional dialects produce less accurate transcripts than Hochdeutsch. For media content in these dialects, plan for cleanup time.',
          },
          {
            title: 'Long compound nouns come through correctly',
            desc: 'German loves to compound nouns. Whisper handles long compounds (Krankenversicherungsbeitragsanpassung) as single words rather than breaking them up. Helps preserve meaning.',
          },
          {
            title: 'Anglicisms (in business German) come back in English',
            desc: 'Business German is full of English loanwords (das Meeting, der Workflow, das Feedback). Whisper preserves them in English spelling, with German capitalization rules applied.',
          },
          {
            title: 'For audio with English speakers code-switching, the transcript reflects that',
            desc: 'Common in international companies. The transcript captures whichever language the speaker actually used, with no forced translation.',
          },
          {
            title: 'For Austrian German, regional vocabulary may need light cleanup',
            desc: "Words like 'Marillen' (apricots, vs Aprikosen in Germany) or 'Erdäpfel' (potatoes, vs Kartoffeln) come through, but the spelling sometimes defaults to German forms. Quick find-replace pass if you want strict Austrian usage.",
          },
        ],
      }}
      faq={[
        {
          q: 'How accurate is German speech to text?',
          a: 'For clean Hochdeutsch audio, 92 to 96 percent accuracy. For Austrian German, similar. For Swiss High German, also high. For strong regional dialects (Bavarian, heavy Swiss German), 75 to 88 percent depending on the dialect and audio quality.',
        },
        {
          q: 'Does it handle Austrian German?',
          a: 'Yes. Austrian Standard German transcribes at the same accuracy as German Hochdeutsch. Austrian-specific vocabulary may come through with German forms but is easy to correct in editing.',
        },
        {
          q: 'What about Swiss German (Schwyzerdütsch)?',
          a: 'Swiss High German (the written and formal spoken form) works well. Local spoken dialects (Schwyzerdütsch) are harder for Whisper. For media content broadcast in Swiss High German (SRF news, formal interviews), accuracy is high.',
        },
        {
          q: 'Will umlauts (ä, ö, ü) and eszett (ß) come back correctly?',
          a: 'Yes. All German diacritics appear in the right positions. The transcript uses ß by default; for Swiss conventions (no ß, replaced by ss), do a find-replace after.',
        },
        {
          q: 'Are nouns capitalized correctly?',
          a: 'Yes, in most cases. German capitalizes all nouns, and Whisper handles this. Occasional lower-case nouns slip through, usually for less common words. Quick proofread fixes them.',
        },
        {
          q: 'Can I transcribe a German audio file from any source?',
          a: 'Yes. Podcast MP3, interview M4A, Zoom MP4 from a meeting, voice memo from your phone. We work with the file regardless of source.',
        },
        {
          q: 'How does this compare to Google Speech-to-Text or Microsoft for German?',
          a: 'Whisper large-v3 is generally on par with or slightly ahead of Google and Microsoft on German audio, especially for accented speech and dialect. The big advantage for Mictoo: free, no signup, no per-minute charge.',
        },
        {
          q: 'Will my German audio be stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets processed, then is discarded.',
        },
        {
          q: 'Can I transcribe a German YouTube video?',
          a: 'Yes. Download the video as MP4 or audio-only M4A first (with 4K Video Downloader or similar), then upload here.',
        },
        {
          q: 'Can I get SRT subtitles in German?',
          a: 'Yes. Download as SRT. Useful for adding German subtitles to German-language video, or as a starting point for translation.',
        },
        {
          q: 'Will I get speaker labels for German interviews?',
          a: 'Not automatically. Whisper does not do speaker diarization. Add labels manually based on conversation flow.',
        },
        {
          q: 'What about technical German vocabulary (medical, legal, engineering)?',
          a: 'Common technical terms come through. Niche jargon and acronyms specific to your industry may need a manual pass. Plan for 5 to 10 percent cleanup time on highly technical content.',
        },
      ]}
      relatedLinks={[
        { href: '/french-speech-to-text', label: 'French Speech to Text', desc: 'For French audio with the same engine.' },
        { href: '/spanish-audio-to-text', label: 'Spanish Audio to Text', desc: 'For Spanish audio.' },
        { href: '/multilingual-transcription', label: 'Multilingual Transcription', desc: 'For audio with multiple languages.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription page.' },
      ]}
    />
  )
}
