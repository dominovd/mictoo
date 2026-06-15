import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'German Audio Transcription: Compound Words, Sie/du, Swiss and Austrian German | Mictoo',
  description:
    'Transcribe German audio with proper handling of compound words, separable verbs, Sie/du register, and regional varieties: Hochdeutsch, Swiss German, Austrian German.',
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
    title: 'German Audio Transcription: Compound Words and Regional Varieties | Mictoo',
    description: 'Transcribe German audio. Hochdeutsch, Swiss German, Austrian German. Compound words handled correctly.',
    url: 'https://mictoo.com/german-audio-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'German Audio Transcription: Compound Words and Regional Varieties',
    description: 'Transcribe German audio across regional varieties.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GermanAudioTranscriptionPage() {
  return (
    <LandingLayout
      badge="German · Hochdeutsch + dialects · Free"
      h1={<>German Audio Transcription<br /><span className="text-brand-600">Compound words and regional varieties handled</span></>}
      subtitle="Drop a German audio file and get a transcript that correctly assembles compound words (Donaudampfschiffahrtsgesellschaft), respects separable verb syntax, and handles regional varieties from Hochdeutsch to Schweizerdeutsch and Austrian German."
      defaultLanguage="en"
      transcriptionLanguage="de"
      valueBlock={
        <article className="prose-content">
          <p>
            German speech recognition has two unusual challenges that
            most other European languages do not. First, compound nouns
            can be arbitrarily long ("Donaudampfschiffahrtsgesellschaft")
            and the model has to assemble them as single words, not as
            three or four separate ones. Second, separable verbs split
            their parts across the sentence ("Ich rufe dich morgen an"),
            and the transcript has to keep them associated correctly.
          </p>
          <p>
            Whisper large-v3 was trained on substantial German audio
            and handles both correctly. Useful for German journalists,
            university professors in DACH countries, podcasters, and
            anyone working with German-language audio that needs to
            become text.
          </p>
          <p className="text-sm text-slate-500">
            The upload form is pre-set to German (Deutsch) for cleanest
            results. For audio in Swiss German (Schweizerdeutsch) or thick
            Austrian dialect, accuracy is lower than for standard Hochdeutsch
            and may need more editing.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Upload your German audio',
          desc: 'MP3, M4A, WAV, FLAC, MP4, MOV, WebM. We strip video and feed audio to Whisper. Anonymous uploads accept files up to 25 MB and 30 minutes.',
        },
        {
          icon: '⚡',
          title: 'Compound words assembled correctly',
          desc: 'Whisper writes "Krankenhausverwaltung" as one word, not "Kranken Haus Verwaltung". Umlauts (ä, ö, ü) and ß render properly. Separable verbs (anrufen, aufstehen) get associated even when split across the sentence.',
        },
        {
          icon: '📝',
          title: 'Edit and export',
          desc: 'Inline editor for proper nouns and technical compound words. Download TXT, SRT, VTT, DOCX. Translate to English or 50+ other languages with one click.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for German audio',
        bullets: [
          {
            title: 'Long compound nouns assembled as one word',
            desc: 'German compound nouns like Geschwindigkeitsbegrenzung, Krankenhausverwaltung, Bundesausbildungsförderungsgesetz come out as single words rather than space-separated fragments. This matters because the compound word is a different word than its parts, and search and translation depend on the right tokenisation.',
          },
          {
            title: 'Separable verbs stay associated',
            desc: 'When a German speaker says "Ich rufe dich morgen an", the verb is "anrufen" split across the sentence. The transcript renders the sentence as written, with both parts visible, so a German reader sees the construction correctly even though the parts are not adjacent.',
          },
          {
            title: 'Umlauts and ß preserved',
            desc: 'ä, ö, ü, and ß all render correctly throughout the transcript. Swiss German conventionally uses ss instead of ß; the transcript follows the speaker variety and the typical spelling for that variety.',
          },
          {
            title: 'Capitalisation of nouns done right',
            desc: 'German capitalises all nouns, not just proper nouns. The transcript follows this convention, so "Das Haus" stays capitalised mid-sentence the way German orthography requires. Saves a tedious manual pass that lazy ASR transcripts often need.',
          },
          {
            title: 'Translation to English in one click',
            desc: 'Once the German transcript is ready, translate to English or 50+ other languages. Useful for DACH companies shipping content to international markets, or for non-German researchers needing to understand source material.',
          },
        ],
      }}
      useCases={{
        title: 'Where German audio comes from',
        items: [
          {
            title: 'German journalism and editorial work',
            desc: 'Journalists at FAZ, Süddeutsche Zeitung, NZZ, Der Standard, ORF, ARD, ZDF recording interviews. Transcript becomes pull quotes and the article draft, with correct German orthography out of the box.',
          },
          {
            title: 'University lectures across DACH',
            desc: 'Professors at TU Munich, ETH Zurich, Universität Wien, Humboldt-Universität recording lectures for asynchronous access. Transcript provides searchable, accessibility-compliant lecture text.',
          },
          {
            title: 'German-language podcasts',
            desc: 'Podcast hosts producing Show Notes, episode pages, and SEO-friendly text. Useful for any podcast targeting German-speaking audiences in Germany, Austria, Switzerland, or German diaspora communities.',
          },
          {
            title: 'Corporate meetings in DACH businesses',
            desc: 'Companies in Germany, Austria, Switzerland recording internal meetings. Transcript becomes the meeting record without paying for a German-specific enterprise transcription contract.',
          },
          {
            title: 'Research interviews in social sciences',
            desc: 'Sociologists, historians, ethnographers working with German-speaking subjects across DACH. Transcript is the primary research artifact for thematic analysis.',
          },
          {
            title: 'Legal and notary recordings',
            desc: 'For first-draft transcription of recorded German-language legal proceedings or notary acts. Always reviewed by a human transcriber for legal use, but useful as a starting point that gets compound words and technical terminology right.',
          },
        ],
      }}
      proTips={{
        title: 'German-specific tips for better accuracy',
        tips: [
          {
            title: 'Set the language to German (Deutsch) explicitly',
            desc: 'Auto-detect can confuse German with Dutch or Yiddish on short clips. The German picker in the dropdown ensures correct decoding from the first word, including proper compound assembly and capitalisation.',
          },
          {
            title: 'For Swiss German, expect lower accuracy and consider Hochdeutsch overdub',
            desc: 'Schweizerdeutsch (Swiss German dialects) differs significantly from written Hochdeutsch and Whisper accuracy drops noticeably for thick dialect. For important Swiss content, consider asking the speaker to use Hochdeutsch, or budget more editing time.',
          },
          {
            title: 'Austrian German is well supported',
            desc: 'Standard Austrian German (Österreichisches Hochdeutsch) and most regional Austrian varieties transcribe well, including Austrian vocabulary differences (Erdäpfel vs Kartoffeln, Jänner vs Januar, Sessel vs Stuhl). Thick rural Austrian dialect is harder.',
          },
          {
            title: 'Long compound nouns: review for splits or joins',
            desc: 'Most compound nouns assemble correctly, but technical or rarely-seen compounds (industry-specific, legal, medical terminology) may need manual joining or splitting in the editor before exporting.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Why German speech recognition is its own thing</h2>
          <p>
            German has a few structural features that make speech
            recognition more interesting than for English or Spanish.
            Compound noun formation is essentially unlimited. Verbal
            morphology can move parts across the sentence. Capitalisation
            rules apply to all nouns. And the regional varieties
            (Hochdeutsch, Schweizerdeutsch, Austrian German, dialects)
            span enough phonetic and grammatical variation that a single
            "German model" has to handle a wide range.
          </p>
          <h3>Compound nouns and where the spaces go</h3>
          <p>
            German freely combines nouns into new compound words.
            "Donaudampfschiffahrtsgesellschaftskapitänsmütze" (the cap
            of the captain of the Danube steamship company) is one word
            in German, all spaces removed. The transcript has to get
            this right because writing "Donau Dampf Schiffahrts
            Gesellschafts Kapitäns Mütze" as separate words breaks the
            meaning entirely. Whisper learns from training data which
            sequences are conventionally written as one word.
          </p>
          <p>
            For most everyday compounds (Krankenhaus, Lebensversicherung,
            Bundeskanzlerin), this works smoothly. For rare or technical
            compounds (industry jargon, legal terminology, scientific
            terms), Whisper may split where a human would join, or join
            where a human would split. The inline editor handles those
            edge cases.
          </p>
          <h3>Separable verbs and their split positions</h3>
          <p>
            Many common German verbs have a prefix that separates from
            the verb stem in present tense and moves to the end of the
            clause. "Anrufen" (to call) splits in "Ich rufe dich morgen
            an" (I call you tomorrow up). "Aufstehen" (to get up) splits
            in "Wir stehen um sieben auf" (we get up at seven up). The
            transcript renders the sentence as written, separated, but
            a German reader recognises the split verb. The point is
            that the transcript should not collapse "an" or "auf" into
            "anrufen" or "aufstehen" inline, because that would change
            the syntax. Whisper handles this correctly.
          </p>
          <h3>Capitalisation of all nouns</h3>
          <p>
            German capitalises every noun, not just proper nouns. "Das
            Haus", "die Stadt", "ein Buch" all stay capitalised
            mid-sentence. Sloppy ASR transcripts often lowercase
            everything except sentence starts and proper nouns, which
            produces text a German reader has to mentally fix.
            Whisper-trained-on-German keeps the conventions, so the
            transcript is publication-ready (or close to it) without a
            manual capitalisation pass.
          </p>
          <h3>Regional varieties: Hochdeutsch, Swiss, Austrian, dialects</h3>
          <p>
            Standard Hochdeutsch is what newsreaders, university
            lecturers, and most business communication uses. Whisper is
            strongest here. Austrian German (Österreichisches
            Hochdeutsch) is mostly Hochdeutsch with some vocabulary
            differences (Erdäpfel for potatoes, Jänner for January,
            Marille for apricot) and some pronunciation differences;
            transcription works well. Swiss German is the hard case:
            spoken Swiss German is sufficiently different from written
            Hochdeutsch that even native speakers of Hochdeutsch often
            struggle to follow. Whisper transcribes Swiss German as
            Hochdeutsch (giving you a "translated" written form), which
            is useful but loses dialect-specific vocabulary.
          </p>
          <h3>The ß question</h3>
          <p>
            Hochdeutsch uses ß (Eszett) in specific positions ("Straße",
            "Fußball"). Swiss German has not used ß for decades, writing
            ss in all positions ("Strasse", "Fussball"). The transcript
            follows the speaker variety: Swiss speakers get ss, German
            speakers get ß. If you need consistency across sources,
            normalise in the editor.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Does Mictoo handle German compound words correctly?',
          a: 'Yes. Compound nouns like Krankenhaus, Lebensversicherung, Bundeskanzlerin come out as single words rather than space-separated fragments. Rare or highly technical compounds may occasionally need manual joining or splitting in the inline editor, but everyday German compounds work out of the box.',
        },
        {
          q: 'What about Swiss German (Schweizerdeutsch)?',
          a: 'Swiss German is significantly harder than Hochdeutsch because the spoken dialect differs substantially from written German. Whisper transcribes Swiss German as Hochdeutsch (a "translation" effect), which is usually what you want for written records but loses dialect-specific vocabulary. For thick dialect content, expect more editing.',
        },
        {
          q: 'Will Austrian German transcribe correctly?',
          a: 'Yes. Standard Austrian German (Österreichisches Hochdeutsch) and most regional varieties work well. Austrian vocabulary differences (Erdäpfel, Jänner, Sessel, Marille) are preserved when the speaker uses them. Thick rural Austrian dialect is harder, similar to Swiss German.',
        },
        {
          q: 'Are umlauts (ä, ö, ü) and ß preserved?',
          a: 'Yes. All umlauts render correctly. ß appears in positions where Hochdeutsch convention requires it. For Swiss German speakers, the transcript uses ss instead of ß (matching Swiss orthography). For German and Austrian speakers, ß appears as appropriate.',
        },
        {
          q: 'Does the transcript capitalise all nouns the way German requires?',
          a: 'Yes. Every noun in the transcript is capitalised mid-sentence, as German orthography requires. "Das Haus", "die Stadt", "ein Buch" stay capitalised. Saves a manual cleanup pass that sloppy ASR transcripts usually need.',
        },
        {
          q: 'How accurate is the transcription for noisy German audio?',
          a: 'Background noise (street ambience, café chatter, office HVAC) reduces accuracy noticeably. For important recordings, clean with Adobe Podcast Enhance or Audacity Noise Reduction first. Clean studio Hochdeutsch with one speaker transcribes at roughly 90-95% word accuracy on first pass.',
        },
        {
          q: 'Can I translate the German transcript to English?',
          a: 'Yes. After transcription finishes, pick English (or any of 50+ other languages) and click Translate. Useful for DACH content creators shipping to international audiences or for non-German readers needing to understand source material.',
        },
        {
          q: 'How long can my German audio file be?',
          a: 'Anonymous uploads accept files up to 25 MB and 30 minutes. For longer files, sign in for the longer duration limit, downsample to 16 kHz mono with ffmpeg (-ac 1 -ar 16000), or split into multiple files and transcribe each separately.',
        },
        {
          q: 'Can I get SRT subtitles for a German video?',
          a: 'Yes. Download as SRT or VTT after transcription. Both formats include timestamps aligned to the original audio. Drop into your German YouTube channel, video editor, or LMS for accessible captions.',
        },
        {
          q: 'Is my German audio file stored anywhere?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to add it to your history.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Transcribe your German audio
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Hochdeutsch, Austrian, Swiss. Interview, lecture, podcast, business call. Compound words and umlauts handled.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe German now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/french-speech-to-text', label: 'French speech to text', desc: 'Hexagonal, Quebec, Belgian, Swiss French.' },
        { href: '/spanish-audio-to-text', label: 'Spanish audio to text', desc: 'Castilian, Mexican, Argentine Spanish.' },
        { href: '/multilingual-transcription', label: 'Multilingual transcription', desc: 'For files with multiple languages mixed in.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For German-language recorded interviews.' },
      ]}
    />
  )
}
