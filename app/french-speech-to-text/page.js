import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'French Speech to Text: Liaisons, Accents, and Quebec French Transcription | Mictoo',
  description:
    'Transcribe French audio with proper handling of liaisons, nasal vowels, e-élision, and regional accents. Hexagonal, Quebec, Belgian, and Swiss French all supported.',
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
    title: 'French Speech to Text: Liaisons, Accents, Quebec French | Mictoo',
    description: 'Transcribe French audio accurately. Hexagonal, Quebec, Belgian, Swiss French supported.',
    url: 'https://mictoo.com/french-speech-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'French Speech to Text: Liaisons, Accents, Quebec French',
    description: 'Transcribe French audio accurately across regional varieties.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrenchSpeechToTextPage() {
  return (
    <LandingLayout
      badge="Français · Whisper large-v3 · Free"
      h1={<>French Speech to Text<br /><span className="text-brand-600">Liaisons, accents, and Quebec French</span></>}
      subtitle="Drop a French audio file (Hexagonal, Quebec, Belgian, Swiss, or African French) and get a clean transcript with proper handling of liaisons, élisions, nasal vowels, and accent marks. No language picker hunting, no surprise spelling."
      defaultLanguage="fr"
      valueBlock={
        <article className="prose-content">
          <p>
            French transcription is hard for general speech recognition
            models because so much of the language depends on context:
            the same sound can be three different words (vert / verre /
            vers), liaisons connect words across boundaries
            (les-z-amis), and dropped e and t markers carry grammatical
            meaning. Whisper large-v3, which Mictoo runs, was trained on
            a substantial French corpus and handles these patterns well.
          </p>
          <p>
            Useful for French journalists transcribing interviews,
            university professors recording lectures, content creators
            shipping French-language podcasts, businesses operating in
            Quebec or France, and anyone working with French audio
            content that needs to become text.
          </p>
          <p className="text-sm text-slate-500">
            Set the language to French in the dropdown above the upload
            zone for the cleanest first attempt. Auto-detect works for
            files longer than 30 seconds, but explicit French picker is
            more reliable for short clips or files that open with music
            or silence.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Upload your French audio',
          desc: 'MP3, M4A, WAV, FLAC, video files with audio. We strip video and feed audio to Whisper. Free for files up to 60 MB, which covers about 60 minutes of mono speech.',
        },
        {
          icon: '⚡',
          title: 'Whisper transcribes with French accents intact',
          desc: 'Accent marks (é, è, ê, à, â, ç, î, ï, ô, û, ÿ), liaisons treated as separate words (not lazily concatenated), proper question and quotation punctuation in French style.',
        },
        {
          icon: '📝',
          title: 'Edit and export',
          desc: 'Inline editor for fixing proper nouns and technical terms. Export TXT, SRT, VTT, DOCX. Translate to English or 50+ other languages with one click.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for French audio',
        bullets: [
          {
            title: 'Trained on diverse French varieties',
            desc: 'Whisper large-v3 saw audio from France, Quebec, Belgium, Switzerland, and West/Central African French during training. The transcript adapts to regional vocabulary (char vs voiture, fin de semaine vs week-end) rather than forcing a single regional standard.',
          },
          {
            title: 'Accent marks are not lost',
            desc: 'A common failure mode in lazy speech recognition: words come back as "ecole" instead of "école", "etre" instead of "être". Mictoo preserves accent marks correctly because they are part of the trained French vocabulary, not an afterthought.',
          },
          {
            title: 'French punctuation conventions',
            desc: 'French uses non-breaking spaces before ?, !, :, ;, and guillemets «» for quotes. Our transcription follows these conventions for files explicitly set to French, so the text reads natively rather than looking like English-style French.',
          },
          {
            title: 'Translation to English (and 50+ others) in one click',
            desc: 'Once the French transcript is ready, click Translate, pick a target language. Useful for French content creators shipping to international audiences, or for non-French readers needing to understand the source.',
          },
          {
            title: 'No upload of sensitive audio to advertising-heavy networks',
            desc: 'Audio is processed in memory and discarded. We never write the file to disk. The transcript is only stored if you sign in and choose to. Useful for journalists working on sensitive French-language interviews or business calls.',
          },
        ],
      }}
      useCases={{
        title: 'French audio that lands here',
        items: [
          {
            title: 'Interviews for French publications',
            desc: 'Journalists at Le Monde, Libération, La Presse, Le Devoir, RTBF, RTS recording interviews for articles. Transcript becomes the source of pull quotes and the article draft.',
          },
          {
            title: 'University lectures in French',
            desc: 'Professors at Sorbonne, Université de Montréal, ULB, EPFL recording lectures for asynchronous student access. Transcript provides searchable lecture text and accessibility-compliant alternative.',
          },
          {
            title: 'Podcasts and audio shows',
            desc: 'French-language podcast hosts producing show notes, episode pages, and SEO-friendly text for each episode. Useful for shows targeting France, Quebec, Belgium, Switzerland, or pan-Francophone audiences.',
          },
          {
            title: 'Business meetings in Francophone markets',
            desc: 'Companies operating in France, Quebec, Belgium, or Francophone Africa recording internal meetings. Transcript becomes the meeting record without paying for a French-specific enterprise transcription contract.',
          },
          {
            title: 'Research interviews and ethnographic recordings',
            desc: 'Social scientists, ethnographers, and oral historians working with French-speaking subjects. Transcript is the primary research artifact for thematic coding and analysis.',
          },
          {
            title: 'Court hearings and legal recordings',
            desc: 'For first-draft transcription of recorded French-language proceedings (with proper court permission). Always reviewed by a human transcriber for legal use, but useful as a starting point.',
          },
        ],
      }}
      proTips={{
        title: 'French-specific tips for better accuracy',
        tips: [
          {
            title: 'Set the language to French explicitly',
            desc: 'Auto-detect can mistake French for Italian or Romanian on short clips (under 30 seconds), or pick the wrong dialect for accent-heavy regional speech. The French picker in the dropdown ensures correct decoding from the first word.',
          },
          {
            title: 'For Quebec French, expect some vocabulary differences',
            desc: 'Whisper handles Quebec French (joual, regional vocabulary) but may default to Hexagonal spelling in ambiguous cases. Review the transcript for terms like "fin de semaine" vs "week-end", "magasiner" vs "faire les courses", "char" vs "voiture".',
          },
          {
            title: 'Proper nouns may need correction',
            desc: 'French place names, company names, and personal names often get mistranscribed if Whisper has not seen them often. Use the inline editor to fix Nantes vs Nant, Wattignies vs Watignies, regional politician names, etc. before exporting.',
          },
          {
            title: 'Long elision sequences can confuse short clips',
            desc: 'French connected speech (j-aime, n-est-ce-pas, qu-est-ce-que) gets correctly transcribed in longer files where Whisper has context. For very short clips with heavy connected speech, accuracy improves if you add 5-10 seconds of clear introduction before the target content.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>What makes French speech recognition difficult</h2>
          <p>
            French is harder than English or Spanish for generic speech
            models because of three patterns that English-trained
            architectures historically struggled with: liaisons,
            élisions, and the e-muet (silent e). All three move
            phonological boundaries away from word boundaries, which is
            the opposite of what a naive word-segmentation model expects.
          </p>
          <h3>Liaisons</h3>
          <p>
            A liaison is when the normally-silent final consonant of one
            word becomes audible to link with the vowel that starts the
            next word. "Les amis" pronounced /le.za.mi/, with the s of
            "les" appearing as a z linking into "amis". "Vous avez"
            pronounced /vu.za.ve/. There are obligatory liaisons (after
            determiners), forbidden liaisons (across major syntactic
            breaks), and optional liaisons (depending on register).
            Whisper large-v3 was trained on enough French speech to
            learn which sounds belong to which words even when the
            phonological break is in the middle of an apparent syllable.
          </p>
          <h3>Élisions</h3>
          <p>
            Élision is when a vowel drops to avoid hiatus. "Je aime"
            becomes "j-aime", "le ami" becomes "l-ami", "que est-ce que"
            becomes "qu-est-ce que". Spelled with an apostrophe, the
            audio just sounds like one fused syllable. Whisper correctly
            renders these as the conventional apostrophe forms rather
            than as concatenated single words.
          </p>
          <h3>The e-muet (silent e)</h3>
          <p>
            The letter e at the end of words is mostly silent in
            standard French ("table" pronounced /tabl/). But in poetry,
            songs, and some southern French varieties (Marseille,
            Toulouse), the e is pronounced ("table" pronounced
            /tablə/). The transcription has to render "table" both
            times even though the audio is different. Whisper does this
            correctly because the training data covered both varieties.
          </p>
          <h3>Regional varieties of French</h3>
          <p>
            Hexagonal French (the variety spoken in France) is what
            most ASR training data leans toward. Quebec French has
            different vowel inventories (more diphthongs, the
            distinctive ɛɪ̯ in "fait"), different vocabulary, and the
            tu-vous register shifted toward more "tu" use. Belgian
            French uses "septante" and "nonante" for 70 and 90 (vs
            Hexagonal soixante-dix and quatre-vingt-dix). Swiss French
            mostly aligns with Hexagonal. African French varieties
            (Senegal, Côte d-Ivoire, DRC) bring additional vocabulary
            and prosody.
          </p>
          <p>
            Whisper large-v3 handles all of these, with occasional
            quirks: Quebec-specific vocabulary may get rendered in
            Hexagonal equivalents, very thick regional accents (rural
            southern France, deep Quebec joual) may have lower
            accuracy. For these cases, the inline editor lets you fix
            terms before exporting.
          </p>
          <h3>Numbers, dates, and times in French</h3>
          <p>
            Numbers are an area where French varies regionally and
            where transcription accuracy matters for journalists and
            researchers. Hexagonal French uses "soixante-dix" for 70,
            "quatre-vingts" for 80, "quatre-vingt-dix" for 90. Belgian
            and Swiss French use "septante" and "nonante" (and
            "huitante" in some Swiss regions for 80). Whisper handles
            both, but the transcript follows whichever variety the
            speaker used. If you need consistency across sources, fix
            in the editor before exporting.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Does Mictoo handle Quebec French?',
          a: 'Yes. Whisper large-v3 was trained on Quebec French audio alongside Hexagonal French. Accent and vocabulary differences are preserved in most cases, though Quebec-specific words may occasionally render in their Hexagonal equivalent. Review the transcript for terms like "char" vs "voiture" or "fin de semaine" vs "week-end".',
        },
        {
          q: 'Will accent marks be in the transcript?',
          a: 'Yes. é, è, ê, à, â, ç, î, ï, ô, û, and ÿ all appear correctly. Set the language to French explicitly in the dropdown for the cleanest first-pass accent rendering. Files left on auto-detect can occasionally miss accents on short clips where the language detector picks the wrong language.',
        },
        {
          q: 'How accurate is the transcription for French interviews?',
          a: 'For clean studio audio with one or two clear speakers, accuracy is typically 90-95% word-level correct on first pass. Background noise, heavy regional accent, or multiple overlapping speakers reduce this. The inline editor lets you fix proper nouns and any mis-transcribed words before exporting.',
        },
        {
          q: 'Can I translate the French transcript into English?',
          a: 'Yes. After transcription finishes, pick the target language (English, or any of 50+ others) and click Translate. Useful for shipping French content to international audiences or for non-French readers needing to understand the source.',
        },
        {
          q: 'What about Belgian French numbers (septante, nonante)?',
          a: 'They transcribe correctly. Whisper renders the number system the speaker used. If your audio has a mix of Belgian and Hexagonal speakers, the transcript reflects each speaker individual usage. Normalise in the editor if you need consistency.',
        },
        {
          q: 'Does it work for African French (Senegal, Cote d-Ivoire, DRC)?',
          a: 'Yes, with reasonable accuracy. Whisper saw African French during training, though less than Hexagonal or Quebec French. Heavy regional accents and code-switching with local languages (Wolof, Lingala) may reduce accuracy. Set the language to French explicitly.',
        },
        {
          q: 'How long can my French audio file be?',
          a: 'Free tier accepts files up to 60 MB. For French speech at typical podcast bitrates that is roughly 50-60 minutes of mono audio. For longer recordings, use ffmpeg to downsample (-ac 1 -ar 16000) or split the file in two and transcribe each part separately.',
        },
        {
          q: 'Can I get SRT subtitles for a French video?',
          a: 'Yes. Download as SRT or VTT after transcription. Both formats include timestamps aligned to the original audio timeline. Drop into your French YouTube channel, Vimeo, or video editor for accessibility-compliant captions in French.',
        },
        {
          q: 'Is my French audio file stored anywhere?',
          a: 'No. The audio is streamed to the transcription provider, processed once, and dropped from memory. We never write the audio to disk. The text transcript is only stored if you sign in and choose to add it to your history.',
        },
        {
          q: 'Does Mictoo work for French Sign Language video transcription?',
          a: 'No. Mictoo transcribes spoken audio, not Sign Language video. For LSF or any other sign language transcription you need a specialised tool that processes visual content, which we do not currently offer.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Transcribe your French audio
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Interview, lecture, podcast, business call. Hexagonal, Quebec, Belgian, Swiss French. Set the language to French and drop the file.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe French now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/spanish-audio-to-text', label: 'Spanish audio to text', desc: 'Castilian, Mexican, Argentine Spanish.' },
        { href: '/german-audio-transcription', label: 'German audio transcription', desc: 'High German, Swiss German, Austrian German.' },
        { href: '/multilingual-transcription', label: 'Multilingual transcription', desc: 'For files with multiple languages mixed in.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For French-language recorded interviews.' },
      ]}
    />
  )
}
