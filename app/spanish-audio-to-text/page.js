import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Spanish Audio to Text: Castilian, Mexican, Argentine, and Caribbean Spanish | Mictoo',
  description:
    'Transcribe Spanish audio across regional varieties: Castilian, Mexican, Rioplatense, Caribbean, Andean. Handles seseo, voseo, ustedeo and dialect-specific vocabulary.',
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
    title: 'Spanish Audio to Text: All Regional Varieties | Mictoo',
    description: 'Transcribe Spanish audio. Castilian, Mexican, Argentine, Caribbean, Andean. Free, no signup.',
    url: 'https://mictoo.com/spanish-audio-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Audio to Text: All Regional Varieties',
    description: 'Transcribe Spanish across regions. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function SpanishAudioToTextPage() {
  return (
    <LandingLayout
      badge="Español · 600M speakers · Free"
      h1={<>Spanish Audio to Text<br /><span className="text-brand-600">Across every regional variety</span></>}
      subtitle="Drop a Spanish audio file from Mexico, Spain, Argentina, Colombia, Puerto Rico, Chile, anywhere Spanish is spoken, and get a clean transcript that respects regional vocabulary, seseo or distinción, and voseo or ustedeo as the speaker actually used them."
      defaultLanguage="es"
      valueBlock={
        <article className="prose-content">
          <p>
            Spanish has 600 million speakers across 20+ countries with
            real differences in pronunciation, vocabulary, and grammar.
            Mexican Spanish is not Castilian Spanish, and Rioplatense
            Spanish (Argentina, Uruguay) sounds different again. Most
            general speech models lean heavily on one variety. Whisper
            large-v3 was trained across the full range and produces
            transcripts that follow whichever variety the speaker used.
          </p>
          <p>
            Useful for journalists across Latin America and Spain,
            content creators producing Spanish-language podcasts,
            educators recording lessons for Hispanic students,
            ethnographers working with Spanish-speaking communities,
            and businesses operating in any Spanish-speaking market.
          </p>
          <p className="text-sm text-slate-500">
            Pick Spanish in the language dropdown for fastest detection.
            Whisper does not force the transcript into one regional
            standard; it follows what the speaker said, so a Mexican
            speaker stays Mexican in the transcript, an Argentine stays
            Argentine.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Upload your Spanish audio',
          desc: 'MP3, M4A, WAV, FLAC, video files (MP4/MOV/WebM). We strip video and feed the audio to Whisper. Files up to 60 MB on the free tier.',
        },
        {
          icon: '⚡',
          title: 'Transcript with regional vocabulary intact',
          desc: 'Whisper preserves the speaker variety: vosotros vs ustedes, vos vs tú, computadora vs ordenador, autobús vs guagua. The transcript follows what was said, not a forced Castilian or Mexican standard.',
        },
        {
          icon: '📝',
          title: 'Edit and export',
          desc: 'Fix proper nouns inline. Download TXT, SRT, VTT, DOCX. Translate to English or 50+ languages with one click. Useful for cross-border Spanish content workflows.',
        },
      ]}
      whyUse={{
        title: 'Why use Mictoo for Spanish audio',
        bullets: [
          {
            title: 'Handles seseo, distinción, and ceceo',
            desc: 'Castilian Spanish distinguishes /θ/ (the z and c-before-i/e sound) from /s/. Most of Latin America uses seseo (only /s/). Andalusia uses ceceo (only /θ/). Whisper writes the transcript with conventional spelling regardless of which pronunciation the speaker uses, so "cinco" is always "cinco" and "zapato" is always "zapato".',
          },
          {
            title: 'Respects voseo and ustedeo',
            desc: 'Rioplatense Spanish (Argentina, Uruguay, Paraguay) uses "vos" instead of "tú" with distinct verb forms (vos tenés, vos hablás). Central American Spanish has both voseo and tuteo. Colombian Spanish has regional ustedeo (using "usted" informally). The transcript reflects whichever form the speaker used.',
          },
          {
            title: 'Regional vocabulary preserved',
            desc: 'A Spanish speaker says "móvil", a Mexican says "celular", a Cuban says "móvil" again. A Spaniard says "patata", a Mexican says "papa". Whisper transcribes whatever the speaker actually said rather than normalising to one variety.',
          },
          {
            title: 'Accent marks (tilde, diéresis) correctly placed',
            desc: 'á, é, í, ó, ú, ñ, ü all render correctly. Question marks and exclamation marks include the opening ¿ and ¡ where appropriate, following Spanish punctuation conventions.',
          },
          {
            title: 'Translation to English or anywhere else',
            desc: 'Once the Spanish transcript is ready, translate to English, Portuguese, French, German with one click. Useful for content creators shipping Spanish content to multilingual audiences, or for non-Spanish readers needing to understand the source.',
          },
        ],
      }}
      useCases={{
        title: 'Spanish audio scenarios',
        items: [
          {
            title: 'Journalism across Latin America and Spain',
            desc: 'Reporters at El País, Clarín, Reforma, El Tiempo, La Nación recording interviews. Transcript becomes the source of pull quotes and the article draft. Regional vocabulary stays intact for accurate quoting.',
          },
          {
            title: 'University lectures and seminars',
            desc: 'Professors at UNAM, Universidad de Buenos Aires, Universidad Complutense recording lessons for asynchronous student access. Transcript provides searchable lecture material.',
          },
          {
            title: 'Spanish-language podcasts',
            desc: 'Podcast hosts producing show notes and SEO-friendly episode pages for shows targeting Mexico, Spain, Latin America, or US Hispanic audiences. Transcript plus AI summary speeds up post-production.',
          },
          {
            title: 'Customer support call recordings',
            desc: 'Businesses with Spanish-speaking customers in any market. Transcribe support calls for quality assurance, training, or to extract recurring customer concerns.',
          },
          {
            title: 'Ethnographic and oral history research',
            desc: 'Researchers working with Spanish-speaking communities. Transcript is the primary research artifact, with regional vocabulary preserved for authentic representation of the source.',
          },
          {
            title: 'Healthcare interpreter training and review',
            desc: 'Healthcare organisations training Spanish-language interpreters. Recorded interactions transcribed for review, training material, and quality benchmarking. Always reviewed by a human for any clinical use.',
          },
        ],
      }}
      proTips={{
        title: 'Spanish-specific tips for better accuracy',
        tips: [
          {
            title: 'Set the language to Spanish explicitly',
            desc: 'Auto-detect can confuse Spanish with Italian, Portuguese, or Catalan on short clips (under 30 seconds). The Spanish picker in the dropdown locks the decoder to Spanish vocabulary and phonology from the first word.',
          },
          {
            title: 'For Rioplatense Spanish, expect "sh" sounds in transcript',
            desc: 'The yeísmo rehilado of Buenos Aires and Montevideo (where ll and y sound like /ʃ/, like English "sh") is preserved phonetically in some Whisper outputs as the conventional ll or y spelling. The transcript reads as standard Spanish even when the audio sounds "Argentine".',
          },
          {
            title: 'Proper nouns may need correction',
            desc: 'Place names (Cusco vs Cuzco, México vs Méjico in older texts), company names, and personal names occasionally get mis-transcribed if Whisper has not seen them often. Use the inline editor before exporting.',
          },
          {
            title: 'Numbers in Spanish are reliable',
            desc: 'Unlike French (where 70-99 has the unusual soixante-dix system), Spanish numbers transcribe cleanly. "Setenta y cinco" comes back as "75" or "setenta y cinco" depending on context, both correct.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>The Spanish-speaking world is not one Spanish</h2>
          <p>
            Linguists describe the major Spanish dialect zones as
            Castilian (Spain, mostly), Mexican, Caribbean (Cuba,
            Puerto Rico, Dominican Republic), Andean (Peru, Bolivia,
            Ecuador), Rioplatense (Argentina, Uruguay, Paraguay),
            Chilean, and Andalusian. These differ in pronunciation,
            grammar, and vocabulary in ways that matter for
            transcription.
          </p>
          <h3>Seseo, distinción, and ceceo</h3>
          <p>
            One of the most distinctive splits. Castilian Spanish in
            northern Spain distinguishes the /θ/ sound (like English
            "th" in "think") from /s/, so "casar" (to marry) and
            "cazar" (to hunt) sound different. Most of Latin America
            uses seseo: both spelled differently but pronounced the
            same as /s/. Some Andalusian speakers use ceceo: both
            pronounced as /θ/. The spelling stays the same in all
            three cases, which is why Whisper transcripts read as
            "standard" Spanish regardless of the pronunciation
            variety.
          </p>
          <h3>Voseo and ustedeo</h3>
          <p>
            The pronoun and verb system for "you (singular informal)"
            varies. Castilian and most Latin American Spanish uses tú
            (tuteo): "tú tienes", "tú hablas". Rioplatense uses vos
            (voseo): "vos tenés", "vos hablás", with distinct verb
            endings. Central American Spanish uses both, sometimes for
            different registers. Colombian Spanish uses usted in some
            informal contexts where Castilian would use tú (ustedeo).
            Whisper transcribes whichever form the speaker used.
          </p>
          <h3>Vosotros vs ustedes</h3>
          <p>
            For "you (plural)", Castilian Spanish uses vosotros (with
            its own verb conjugations: "vosotros tenéis"). All of
            Latin America uses ustedes for both formal and informal
            plural ("ustedes tienen"). Distinctive enough that a
            transcript using "vosotros tenéis" is almost certainly
            from a Spanish speaker, while "ustedes tienen" could be
            from anywhere in the Americas.
          </p>
          <h3>Regional vocabulary that differs notably</h3>
          <p>
            Computer: ordenador (Spain) vs computadora (most Latin
            America). Bus: autobús, camión (Mexico), guagua (Cuba,
            Canary Islands), colectivo (Argentina), micro (Chile).
            Potato: patata (Spain) vs papa (most Latin America). Car:
            coche (Spain) vs carro (most Latin America) vs auto
            (Argentina, Chile). Phone: móvil (Spain) vs celular (most
            Latin America). Cool: guay (Spain) vs chido (Mexico) vs
            bacán (Chile, Peru, Cuba) vs piola (Argentina). The
            transcript reflects what the speaker said; if you need
            consistency across sources, normalise in the editor.
          </p>
          <h3>Code-switching with English (Spanglish)</h3>
          <p>
            US Hispanic and border-region Spanish often mixes English
            words and phrases freely. Whisper handles code-switching
            reasonably well within a single utterance, transcribing
            English words as English and Spanish words as Spanish.
            Long stretches of one language followed by the other work
            best when the language picker is set to the dominant one.
          </p>
        </article>
      }
      faq={[
        {
          q: 'Does Mictoo handle Argentine (Rioplatense) Spanish?',
          a: 'Yes. Whisper large-v3 was trained on Rioplatense audio alongside other varieties. Voseo verb forms (vos tenés, vos hablás), the distinctive /ʃ/ pronunciation of ll and y, and Buenos Aires vocabulary all transcribe correctly. The transcript shows what was said, not a Castilian normalisation.',
        },
        {
          q: 'What about Mexican Spanish?',
          a: 'Yes. Mexican Spanish is probably the best-trained variety in Whisper given its size in the training data. Mexican vocabulary (chido, padre, neta, no manches), ustedes for plural you, and standard Latin American grammar all work. Mexican proper nouns generally transcribe cleanly.',
        },
        {
          q: 'Will the transcript use vosotros or ustedes?',
          a: 'Whichever the speaker used. Castilian Spanish speakers using vosotros get vosotros in the transcript. Latin American speakers using ustedes get ustedes. The transcript reflects the speaker, not a forced standard.',
        },
        {
          q: 'Are accent marks (á, é, í, ó, ú, ñ) preserved?',
          a: 'Yes. All accent marks render correctly, including ñ and ü. Question marks include the opening ¿ where the sentence is genuinely a question (Whisper infers this from intonation and grammar).',
        },
        {
          q: 'How accurate is the transcription for noisy Spanish audio?',
          a: 'Background noise (call centre ambience, café chatter, traffic) reduces accuracy noticeably. For important recordings, clean with Adobe Podcast Enhance or Audacity Noise Reduction first. Clean studio audio with one speaker transcribes at roughly 90-95% word accuracy on first pass.',
        },
        {
          q: 'Can I translate the Spanish transcript to English?',
          a: 'Yes. After transcription finishes, pick English (or any of 50+ other languages) from the dropdown and click Translate. Useful for Spanish content creators shipping to international audiences or for non-Spanish readers needing the source.',
        },
        {
          q: 'Does it work for Catalan, Galician, or Basque?',
          a: 'Catalan and Galician have direct Whisper support; pick them from the language dropdown. Basque (Euskara) has limited support, accuracy is lower than for Romance languages. Set the language explicitly for any of these.',
        },
        {
          q: 'My audio mixes Spanish and English (Spanglish). What happens?',
          a: 'Whisper handles code-switching reasonably within a single utterance. Long stretches of English mixed into Spanish audio work best with the language picker set to the dominant one (usually Spanish in this case). Review the transcript for any English passages that came out garbled.',
        },
        {
          q: 'How long can my Spanish audio file be?',
          a: 'Free tier accepts files up to 60 MB. For Spanish speech at typical podcast bitrates that is roughly 50-60 minutes of mono audio. For longer recordings, downsample to 16 kHz mono with ffmpeg or split into multiple files and transcribe separately.',
        },
        {
          q: 'Is my Spanish audio file stored anywhere?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped from memory. We do not write the audio to disk. The text transcript is only stored if you sign in and choose to add it to your history.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Transcribe your Spanish audio
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            From Mexico to Spain to Buenos Aires. Interview, podcast, lecture, business call. Regional vocabulary preserved.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcribe Spanish now
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/french-speech-to-text', label: 'French speech to text', desc: 'Hexagonal, Quebec, Belgian, Swiss French.' },
        { href: '/german-audio-transcription', label: 'German audio transcription', desc: 'High German, Swiss German, Austrian German.' },
        { href: '/multilingual-transcription', label: 'Multilingual transcription', desc: 'For files with multiple languages mixed in.' },
        { href: '/interview-transcription', label: 'Interview transcription', desc: 'For Spanish-language recorded interviews.' },
      ]}
    />
  )
}
