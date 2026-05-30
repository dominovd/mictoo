import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 in testo — trascrizione MP3 gratuita con IA | Mictoo',
  description: 'Convertitore gratuito MP3 in testo. Carica qualsiasi MP3 e ottieni una trascrizione IA in pochi secondi. Funziona con podcast, interviste, lezioni. Oltre 50 lingue, senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/transcribe-mp3-to-text', languages: LANGS },

  openGraph: {
    title: "MP3 in testo — trascrizione MP3 gratuita con IA | Mictoo",
    description: "Convertitore gratuito MP3 in testo. Carica qualsiasi MP3 e ottieni una trascrizione IA in pochi secondi. Funziona con podcast, interviste, lezioni. Oltre 50 lingue, senza registrazione.",
    url: "https://mictoo.com/it/transcribe-mp3-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 in testo — trascrizione MP3 gratuita con IA | Mictoo",
    description: "Convertitore gratuito MP3 in testo. Carica qualsiasi MP3 e ottieni una trascrizione IA in pochi secondi. Funziona con podcast, interviste, lezioni. Oltre 50 lingue, senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="MP3 · GRATIS · SENZA REGISTRAZIONE"
      h1={<>MP3 in testo<br /><span className="text-brand-600">Trascrizione MP3 gratuita</span></>}
      subtitle="Trascrizione IA gratuita per qualsiasi MP3. Rilascia il file, ottieni il testo in pochi secondi. Senza account, senza tariffa al minuto, senza email."
      howItWorks={[
        { icon: '📂', title: 'Rilascia l\'MP3', desc: 'Qualsiasi MP3 funziona. Download di podcast, export di memo vocale, rip audio, file di voce generata da IA. Trascina o clicca per scegliere.' },
        { icon: '⚡', title: 'L\'IA trascrive', desc: 'Whisper large-v3 legge l\'MP3 e converte la voce in testo. Un podcast tipico da 30 minuti finisce in circa un minuto. Un memo vocale da 5 minuti in circa 15 secondi.' },
        { icon: '📋', title: 'Copia, scarica o modifica', desc: 'Leggilo nel browser, copia negli appunti o scarica come TXT o SRT. Correggi le parole sbagliate inline prima di esportare.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per MP3', bullets: [
        { title: 'Whisper large-v3, non un modello sfoltito per i gratuiti', desc: 'Non gestiamo un modello più piccolo "per utenti free" e uno più grosso per i paganti. Stesso modello, stessa precisione, ogni file.' },
        { title: 'Specificità MP3 gestite bene', desc: 'MP3 è lossy, e alcuni strumenti si strozzano su file molto compressi (32 kbps, mono, sample rate basso). Whisper li gestisce senza lamentele. Abbiamo visto trascrizioni leggibili da MP3 di telefonate a 24 kbps.' },
        { title: 'Nessuna conversione di file richiesta', desc: 'Alcuni strumenti "MP3 in testo" vogliono WAV in segreto e ri-codificano il tuo MP3 prima. Noi mandiamo l\'MP3 direttamente al modello. Più veloce, senza la perdita di una seconda codifica.' },
        { title: 'Nessun contatore al minuto', desc: 'Alcuni concorrenti ti danno 60 minuti gratis al mese, poi addebitano 25 centesimi al minuto. Noi siamo finanziati dalla pubblicità, senza limite di minuti. Trascrivi un file o cento.' },
        { title: 'Privacy di default', desc: 'L\'MP3 va al provider di voce, viene trascritto, poi scartato. Non scriviamo mai il tuo audio su disco dalla nostra parte.' },
      ]}}
      useCases={{ title: 'A cosa serve la gente "MP3 in testo"', items: [
        { title: 'Episodi di podcast', desc: 'Trascina l\'MP3 dal tuo hosting podcast (Anchor, Buzzsprout, Transistor) e ottieni il testo per show notes, riuso in blog o accessibilità.' },
        { title: 'Registrazioni di telefonate', desc: 'MP3 è l\'export standard della maggior parte delle app di registrazione chiamate. Trascrivi per scorrere velocemente una chiamata lunga e trovare la parte che conta.' },
        { title: 'Memo vocali esportati dal telefono', desc: 'I Memo Vocali iPhone sono M4A di default, ma se ne hai inviato uno via AirDrop come MP3 o usato un\'app Android che salva in MP3, questo è il tuo strumento.' },
        { title: 'Estratti di audiolibri o rip di lezioni', desc: 'Per studiare, avere il testo accanto all\'audio raddoppia la memorizzazione. Resta solo dal lato giusto del copyright.' },
        { title: 'Voci IA e output TTS', desc: 'Se hai generato voce con ElevenLabs, OpenAI TTS, Murf o qualsiasi altro strumento di sintesi, potresti volere una trascrizione pulita di ritorno per lavoro su sottotitoli o allineamento.' },
      ]}}
      proTips={{ title: 'Consigli per la trascrizione MP3', tips: [
        { title: 'Bitrate costante meglio di variabile per Whisper', desc: 'MP3 VBR (variable bitrate) può confondere alcuni decoder audio in casi limite. Se controlli l\'export, scegli CBR a 64 o 96 kbps mono. Meno lavoro per il modello.' },
        { title: '64 kbps mono è il punto dolce per voce in MP3', desc: 'Più alto è spreco per la voce. Un episodio da 60 minuti a 64 kbps mono è circa 28 MB. Sta comodo nel tier gratuito da 25 MB, o comodamente nel tier da 60 MB con login.' },
        { title: 'Se l\'MP3 è enorme (oltre 60 MB), ri-codifica prima di dividere', desc: 'Dividere e poi trascrivere due file è più lavoro che ri-codificare una volta a bitrate più basso. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. Un originale di 200 MB scende a 25-40 MB.' },
        { title: 'Togli i metadati ID3 se il file è al limite', desc: 'I tag ID3 (cover, testi, ecc.) possono aggiungere diversi MB a un MP3. Se sei 1-2 MB sopra il limite, togliere i tag con ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 può bastare.' },
        { title: 'Codifica MP3 cattiva di vecchi convertitori causa gap silenziosi', desc: 'Se la trascrizione salta sezioni, l\'MP3 potrebbe avere effettivi gap silenziosi da un encoder buggato. Ri-codifica dalla sorgente se ce l\'hai, o usa Find Silence di Audacity per confermare.' },
        { title: 'Per MP3 di telefonate (8 kHz mono), aspettati precisione leggermente più bassa', desc: 'L\'audio telefonico perde le alte frequenze, il che ti costa qualche punto di precisione. Resta leggibile, pianifica solo più pulizia su nomi e numeri.' },
      ]}}
      faq={[
        { q: 'MP3 è il formato migliore per la trascrizione?', a: 'Per la maggior parte degli utenti, sì. MP3 è piccolo, supportato ovunque, e la precisione con Whisper è essenzialmente identica a WAV o FLAC. Usa lossless (WAV, FLAC) solo se hai bisogno dell\'audio anche per editing dopo.' },
        { q: 'Quali bitrate MP3 funzionano meglio?', a: 'Qualsiasi da 32 kbps mono a 320 kbps stereo. Per la voce, 64-96 kbps mono è il punto dolce pratico. Più alto non migliora la trascrizione, più basso inizia a perdere intelligibilità per il modello.' },
        { q: 'Il mio MP3 supera i 60 MB. E ora?', a: 'Due opzioni. Ri-codificare a bitrate più basso (64 kbps mono divide la maggior parte degli MP3 per 4 o più), o dividere il file in pezzi sotto i 60 MB. Abbiamo guide per entrambi.' },
        { q: 'Quanto ci mette a trascrivere un MP3?', a: 'Circa l\'1-2% della durata audio. Un MP3 da 60 minuti finisce in circa 60 secondi. Uno da 10 minuti in 10-20 secondi. L\'upload di rete è di solito l\'attesa più lunga.' },
        { q: 'Il mio MP3 verrà salvato o condiviso?', a: 'No. Il file va al nostro provider di voce (Groq, con OpenAI come backup), viene trascritto, poi scartato. Non lo scriviamo sui nostri server, e i provider che usiamo non si addestrano sui dati API.' },
        { q: 'Posso caricare più MP3 in batch?', a: 'Non in un click per ora. Adesso trascrivi un file alla volta. L\'upload batch è nella roadmap per il piano Pro a pagamento.' },
        { q: 'Quali lingue supportate?', a: 'Oltre 50 lingue. Il rilevamento automatico gestisce la maggior parte dei casi. Per file sotto i 5 minuti o file che iniziano con musica o silenzio, scegli la lingua manualmente.' },
        { q: 'Posso ottenere timecode da un MP3?', a: 'Sì. Scarica come SRT (file sottotitoli) e ottieni timecode ogni pochi secondi. Oppure usa la nostra pagina Trascrizione con timecode per granularità a livello di parola.' },
        { q: 'Mictoo funziona con MP3 di podcast con marker di capitoli?', a: 'Estraiamo l\'audio e ignoriamo i metadati dei capitoli. Ottieni la trascrizione completa come un documento. Se vuoi trascrizioni allineate ai capitoli, dividi l\'MP3 ai confini dei capitoli prima.' },
        { q: 'La trascrizione del mio MP3 avrà etichette dei parlanti?', a: 'Non automaticamente. Whisper non fa diarizzazione di default. Se servono etichette, carica la traccia di ogni parlante separatamente (se le hai) e etichettale tu.' },
        { q: 'Posso trascrivere un MP3 di voce generata da IA?', a: 'Sì. L\'audio TTS (ElevenLabs, OpenAI, Murf, ecc.) di solito si trascrive più pulito della voce umana perché non c\'è rumore di fondo o esitazione.' },
        { q: 'Il mio MP3 è in una lingua rara. Funzionerà?', a: 'Se Whisper supporta la lingua, sì. Il modello copre oltre 50 lingue con buona precisione e supporto base per molte altre. Prova. Se il risultato è inutilizzabile, la lingua è probabilmente fuori dai dati di training.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo', desc: 'Per formati non-MP3 (WAV, M4A, FLAC, OGG).' },
        { href: '/it/podcast-transcription', label: 'Trascrizione podcast', desc: 'Stesso motore, consigli specifici per podcast.' },
        { href: '/it/free-srt-generator', label: 'Generatore SRT', desc: 'Quando servono sottotitoli per video, non solo testo.' },
        { href: '/it/how-to-compress-audio', label: 'Come comprimere l\'audio', desc: 'Quando l\'MP3 è troppo grande.' },
      ]}
    />
  )
}
