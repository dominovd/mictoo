import FormatPageLayout from '@/components/FormatPageLayout'

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
  title: 'MP3 a Testo: Trascrizione MP3 Online Gratuita per Podcast e Registrazioni Vocali | Mictoo',
  description:
    'Trascrivi file audio MP3 con timestamp, riepilogo AI e esportazioni. Ottimizzato per podcast, note vocali e audio scaricati. Carica il tuo MP3, ottieni il testo in pochi secondi.',
  alternates: {
    canonical: 'https://mictoo.com/it/transcribe-mp3-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP3 a Testo: Trascrizione MP3 Online Gratuita | Mictoo',
    description: 'Carica il tuo podcast MP3 o registrazione vocale, ottieni una trascrizione con riepilogo in pochi secondi.',
    url: 'https://mictoo.com/it/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 a Testo: Trascrizione MP3 Online Gratuita',
    description: 'Carica il tuo MP3, ottieni una trascrizione.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItTranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="MP3 · Adatto ai podcast · Gratuito"
      h1First="MP3 a Testo"
      h1Second="Per podcast, note vocali e interviste"
      subtitle="L’MP3 è un formato comune per podcast e registrazioni vocali. Carica il tuo episodio, nota vocale o intervista scaricata e ottieni una trascrizione con timestamp, riepilogo AI ed esportazioni pulite per le note dello show."
      highlightFormat="mp3"
      previewFileName="podcast-episode.mp3"
      previewWordCount={182}
      previewDurationLabel="28:14"
      previewLines={[
        { t: '0:00',  line: 'Ben tornati allo show. Oggi parliamo dello stato del podcasting indipendente nel 2026.' },
        { t: '0:07',  line: 'Il mio ospite ha condotto uno show settimanale per otto anni senza mai saltare un episodio.' },
        { t: '0:14',  line: 'Grazie per avermi invitato. È incredibile pensare che abbiamo iniziato quando tutti dicevano che l’audio era già saturo.' },
        { t: '0:22',  line: 'Iniziamo da qui. Cosa era diverso nel lanciare un podcast nel 2018 rispetto ad ora?' },
        { t: '0:30',  line: 'La distribuzione era più difficile, ma il pubblico era più paziente.' },
        { t: '0:37',  line: 'Oggi gli strumenti sono fantastici, trascrizione in pochi secondi, riepiloghi AI per le note dello show, ma l’attenzione è più scarsa.' },
        { t: '0:47',  line: 'Questo è un buon collegamento. Qual è il tuo flusso di lavoro per le note dello show ora che le trascrizioni sono praticamente gratuite?' },
        { t: '0:55',  line: 'Esporto l’MP3, lo carico in uno strumento di trascrizione e utilizzo il riepilogo AI come prima bozza delle note.' },
      ]}
      whyTitle="Perché scegliere Mictoo per la trascrizione MP3"
      whyCards={[
        {
          icon: 'mic',
          title: 'Creato per podcast e voce',
          desc: 'L’MP3 è ciò che le reti di podcast distribuiscono e le app vocali esportano. Ottimizzato per contenuti vocali con timestamp pronti per le note dello show e i sottotitoli.',
        },
        {
          icon: 'gear',
          title: 'Impostazioni MP3 comuni accettate',
          desc: 'Bitrate costante o variabile, mono o stereo. La chiarezza del parlato è la cosa più importante; bitrate molto bassi e artefatti di compressione udibili possono ridurre l’accuratezza.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per le note dello show',
          desc: 'Un riepilogo appare automaticamente accanto alla trascrizione. Una solida prima bozza per le note degli episodi, descrizioni e riepiloghi ottimizzati per SEO.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT e oltre 50 lingue',
          desc: 'Esporta SRT o VTT per la versione video su YouTube dell’episodio. Traduci in spagnolo, francese, tedesco e oltre 45 altre lingue con un clic.',
        },
      ]}
      scenariosTitle="Quando l’MP3 a testo è la scelta giusta"
      scenarios={[
        {
          icon: 'mic',
          title: 'Note degli episodi del podcast',
          desc: 'Hai caricato l’episodio, caricato sul tuo host. Carica lo stesso MP3 qui per la trascrizione e il riepilogo AI che diventeranno le note dello show.',
        },
        {
          icon: 'layers',
          title: 'Archivio di podcast',
          desc: 'Anni di episodi già pubblicati senza trascrizioni. Processali uno alla volta per riempire l’archivio e rendere ogni episodio ricercabile.',
        },
        {
          icon: 'editPen',
          title: 'Nota vocale in documento',
          desc: 'Note vocali registrate sul tuo telefono (molte app esportano MP3). Trasforma idee confuse in testo ricercabile e modificabile per la tua app di note.',
        },
        {
          icon: 'clip',
          title: 'Interviste scaricate',
          desc: 'Intervista di podcast che vuoi citare in un articolo, MP3 di conferenza che vuoi menzionare, lezione scaricata che vuoi studiare.',
        },
        {
          icon: 'book',
          title: 'Capitoli di audiolibri',
          desc: 'Capitolo di audiolibro MP3 che vuoi come testo stampato per prendere appunti. Grandi file di audiolibri spesso superano i 60 MB e devono essere divisi prima.',
        },
        {
          icon: 'video',
          title: 'Audio YouTube-to-MP3',
          desc: 'Gli estrattori audio di YouTube spesso producono MP3 per compatibilità. Carica il file estratto per una trascrizione pulita con timestamp.',
        },
      ]}
      technicalTitle="Cosa conta in un MP3"
      technicalIntro="Le impostazioni MP3 influenzano la dimensione del file e possono influenzare l’intelligibilità agli estremi. Questi dettagli ti aiutano a decidere se caricare il file così com’è o creare prima una copia audio più piccola."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bitrate e chiarezza',
          desc: 'Il parlato a un bitrate moderato è solitamente adatto. Bitrate estremamente bassi, clipping o forti artefatti possono nascondere consonanti e nomi.',
        },
        {
          icon: 'gear',
          title: 'CBR e VBR',
          desc: 'Sia i file MP3 a bitrate costante che variabile possono essere caricati; i timestamp seguono la timeline audio decodificata.',
        },
        {
          icon: 'clip',
          title: 'I tag ID3 rimangono separati',
          desc: 'Artista, titolo, copertina e metadati dei capitoli non vengono inseriti nella trascrizione. Tieni quei metadati nel tuo sistema di pubblicazione.',
        },
        {
          icon: 'cloud',
          title: 'Episodi lunghi',
          desc: 'Se un episodio supera il limite di caricamento, esporta una copia audio mono a un bitrate inferiore o dividilo in un punto naturale.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo trascrive qualsiasi file MP3?',
          a: 'Mictoo accetta file MP3 comuni con bitrate costante o variabile, audio mono o stereo. File danneggiati, varianti non supportate o registrazioni con gravi artefatti di compressione potrebbero necessitare di un nuovo export. Il limite è di 60 MB quando si è registrati e 25 MB in modo anonimo.',
        },
        {
          q: 'Il bitrate MP3 influisce sulla qualità della trascrizione?',
          a: 'La chiarezza della registrazione è più importante di un bitrate elevato, ma il bitrate non è irrilevante. Una registrazione vocale pulita a un bitrate moderato è solitamente adatta; compressione aggressiva, clipping o bitrate molto bassi possono rimuovere dettagli del parlato e ridurre l’accuratezza.',
        },
        {
          q: 'Il mio MP3 del podcast è oltre 60 MB. Cosa faccio ora?',
          a: 'Crea una copia audio mono più piccola con ffmpeg: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Controlla il risultato per artefatti udibili prima di caricare, o dividi l’episodio in un punto naturale.',
        },
        {
          q: 'Posso ottenere un riepilogo AI dell’episodio?',
          a: 'Sì. Il riepilogo AI appare automaticamente accanto alla trascrizione dopo che la trascrizione è completata. È una solida prima bozza per le note del podcast, descrizioni degli episodi e riepiloghi ottimizzati per SEO.',
        },
        {
          q: 'Posso scaricare sottotitoli SRT per la versione YouTube?',
          a: 'Sì. Esporta come SRT o VTT dopo la trascrizione. Entrambi i formati includono timestamp allineati alla timeline originale dell’MP3. Carica nel tuo upload su YouTube o nel tuo editor video per i sottotitoli.',
        },
        {
          q: 'Mictoo trascrive file MP3 non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con auto-rilevamento. Per MP3 brevi o contenuti non in inglese, imposta esplicitamente la lingua nel menu a discesa per una rilevazione più pulita al primo passaggio.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo che la trascrizione è completata, scegli una lingua di destinazione e fai clic su Traduci. La traduzione è generata da GPT-4o-mini e appare accanto alla trascrizione originale.',
        },
        {
          q: 'Il mio file MP3 sarà salvato sui vostri server?',
          a: 'No. L’MP3 viene trasmesso al fornitore di trascrizione, elaborato una sola volta e rimosso dalla memoria. Non scriviamo mai l’audio su disco. La trascrizione testuale è memorizzata solo se accedi e scegli di aggiungerla alla tua cronologia.',
        },
        {
          q: 'I metadati ID3 (artista, titolo, album) appariranno nella trascrizione?',
          a: 'No. La trascrizione è testo semplice senza metadati MP3. I tag ID3 vengono ignorati durante la trascrizione. Se hai bisogno che la trascrizione sia abbinata ai metadati dell’episodio, mantieni quella mappatura nel tuo sistema di archiviazione.',
        },
        {
          q: 'Quanto tempo ci vuole per una trascrizione MP3?',
          a: 'Un MP3 di podcast di 30 minuti di solito finisce in 30-50 secondi dall’inizio alla fine. File più grandi vicino al limite di caricamento impiegano 60-90 secondi. La velocità di caricamento è spesso il passaggio più lungo del processo.',
        },
      ]}
      ctaHeadline="Carica il tuo MP3, scrivi note dello show più velocemente"
      ctaSubtitle="Episodio di podcast, nota vocale, intervista scaricata, capitolo di audiolibro. Ottieni il testo e il riepilogo in pochi secondi."
      ctaButton="Carica MP3 per trascrivere"
    />
  )
}