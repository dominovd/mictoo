import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC a Testo: Trascrizione Senza Perdite per Archivi di Parole Parlate | Mictoo',
  description:
    'Carica un’intervista orale in FLAC, una registrazione sul campo o una copia di conservazione e ottieni una trascrizione modificabile con timestamp.',
  alternates: {
    canonical: 'https://mictoo.com/it/flac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'FLAC a Testo: Trascrizione Audio Senza Perdite | Mictoo',
    description: 'Carica un’intervista orale in FLAC, una registrazione sul campo o una copia di conservazione. Ottieni una trascrizione modificabile con timestamp.',
    url: 'https://mictoo.com/it/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC a Testo: Trascrizione Audio Senza Perdite',
    description: 'Carica un archivio di parole parlate in FLAC o una registrazione sul campo e ottieni una trascrizione modificabile con timestamp.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="FLAC · Senza Perdite · Gratuito"
      h1First="FLAC a Testo"
      h1Second="Audio senza perdite per archivi di parole parlate"
      subtitle="FLAC è utilizzato da archivi di storia orale, registratori sul campo e flussi di lavoro di conservazione per memorizzare audio senza compressione lossy. Carica il file .flac, conserva il master senza perdite e ottieni una trascrizione con timestamp."
      highlightFormat="flac"
      previewFileName="registrazione-archivistica.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'Questa registrazione è stata effettuata presso la casa di famiglia nell’ottobre del millenovecentosettantotto.' },
        { t: '0:07',  line: 'Il soggetto è mia nonna, nata a Cracovia nel millenovecentoquattordici, immigrata a New York nel millenovecentotrentanove.' },
        { t: '0:18',  line: 'La qualità della registrazione è limitata dalla fonte originale della cassetta. Si prega di tenere a mente il volume dell’intervistatore.' },
        { t: '0:27',  line: 'Nonna, puoi raccontarmi del giorno in cui hai lasciato Cracovia per l’ultima volta?' },
        { t: '0:34',  line: 'Stava piovendo. Questo è ciò che ricordo per primo. Tutti stavano in piedi sulla piattaforma sotto la pioggia.' },
        { t: '0:44',  line: 'Mio padre aveva due valigie e mia madre ne aveva una. Io avevo solo una piccola borsa che mia zia mi aveva dato.' },
        { t: '0:54',  line: 'Il treno doveva partire alle sei del mattino, ma non è partito fino a quasi dieci.' },
        { t: '1:04',  line: 'E quando finalmente è partito, nessuno su quella piattaforma ha mai visto la città allo stesso modo.' },
      ]}
      whyTitle="Perché scegliere Mictoo per la trascrizione FLAC"
      whyCards={[
        {
          icon: 'target',
          title: 'Nessuna compressione lossy aggiuntiva',
          desc: 'FLAC preserva il segnale registrato senza perdita di compressione in stile MP3. L’accuratezza della trascrizione dipende ancora dalla chiarezza del parlato e dalla cattura originale.',
        },
        {
          icon: 'gear',
          title: 'Qualsiasi frequenza di campionamento, qualsiasi profondità di bit',
          desc: '44.1 kHz fino a 192 kHz, 16-bit fino a 24-bit. Whisper ricampiona internamente a 16 kHz mono, quindi la tua frequenza sorgente non influisce sulla qualità.',
        },
        {
          icon: 'book',
          title: 'Flusso di lavoro amico della conservazione',
          desc: 'Il tuo file FLAC originale non viene mai modificato. Lo trasmettiamo al fornitore di trascrizione, estraiamo l’audio in memoria e lo eliminiamo dopo.',
        },
        {
          icon: 'clip',
          title: 'FLAC dentro OGG gestito',
          desc: 'FLAC nativo (byte magici fLaC) e FLAC-in-OGG (OggS con uno stream FLAC) funzionano entrambi. Nessun ripackaging manuale.',
        },
      ]}
      scenariosTitle="Quando FLAC a testo è la scelta giusta"
      scenarios={[
        {
          icon: 'book',
          title: 'Archivio di storia orale',
          desc: 'Intervista a lungo termine preservata come FLAC senza perdite per l’archivio. La trascrizione la rende ricercabile, citabile e pronta per la citazione.',
        },
        {
          icon: 'briefcase',
          title: 'Registrazione istituzionale',
          desc: 'Lezione o simposio registrato da museo, biblioteca o università conservato come FLAC. La trascrizione è il livello di accesso.',
        },
        {
          icon: 'mic',
          title: 'Intervista o podcast estratti da CD',
          desc: 'Intervista o episodio di podcast più vecchio che hai estratto da CD come FLAC. Carica il file per una trascrizione moderna.',
        },
        {
          icon: 'waveform',
          title: 'Registrazione sul campo, cattura senza perdite',
          desc: 'Registratore sul campo o cattura portatile scritta come FLAC per risparmiare spazio su scheda senza perdere qualità. Trascrizione completa con timestamp.',
        },
        {
          icon: 'sparkles',
          title: 'Collezioni di interviste restaurate',
          desc: 'Interviste digitalizzate su nastro o disco memorizzate come FLAC dopo il restauro. Aggiungi testo ricercabile mantenendo la copia di conservazione.',
        },
        {
          icon: 'users',
          title: 'Copia di conservazione di deposizione',
          desc: 'Registrazione legale preservata come FLAC per integrità archivistica. Trascrizione per revisione, citazione e scoperta successiva.',
        },
      ]}
      technicalTitle="Cosa preserva e non preserva FLAC senza perdite"
      technicalIntro="FLAC preserva il segnale sorgente senza compressione lossy. Protegge una copia di archivio, ma non può ripristinare parole già oscurate da rumore, clipping, sovrapposizione o distanza del microfono."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Sorgente senza perdite',
          desc: 'La decodifica restituisce il segnale registrato senza perdita di compressione in stile MP3, utile per flussi di lavoro di conservazione.',
        },
        {
          icon: 'ear',
          title: 'Nessuna pulizia automatica',
          desc: 'Una copia senza perdite di una registrazione rumorosa è ancora rumorosa. La chiarezza del parlato al momento della cattura rimane il principale fattore di accuratezza.',
        },
        {
          icon: 'clip',
          title: 'Commenti Vorbis separati',
          desc: 'Artista, ID archivio e altri tag non vengono inseriti nella trascrizione. Mantieni quella mappatura nel tuo catalogo di archivi.',
        },
        {
          icon: 'cloud',
          title: 'Copia di archivio efficiente',
          desc: 'FLAC è più piccolo di WAV non compresso ma può comunque essere grande per sessioni lunghe. Dividi registrazioni lunghe se necessario.',
        },
      ]}
      faq={[
        {
          q: 'Quali file FLAC accetta Mictoo?',
          a: 'FLAC nativo (byte magici fLaC) e contenitori FLAC-in-OGG, mono o stereo, qualsiasi frequenza di campionamento fino a 192 kHz e profondità di 16 o 24 bit. Accettiamo il file direttamente senza conversione.',
        },
        {
          q: 'L’input senza perdite produce una trascrizione migliore?',
          a: 'Per registrazioni sorgente pulite, l’input senza perdite corrisponde al limite di ciò che Whisper può estrarre. Per sorgenti rumorose o degradate (un’estrazione da cassetta, ad esempio), senza perdite preserva la degradazione fedelmente ma non la ripara. La qualità della registrazione è più importante del contenitore.',
        },
        {
          q: 'Il mio file FLAC è superiore a 60 MB. E adesso?',
          a: 'Un FLAC stereo a 44.1 kHz 16-bit è circa 5 MB al minuto, quindi qualsiasi registrazione superiore a circa 12 minuti raggiunge il limite. Se sei registrato, dividiamo automaticamente fino a circa 3 ore. Altrimenti, converti prima in FLAC mono a 16 kHz o MP3: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'Posso mantenere i metadati FLAC (album, artista, anno)?',
          a: 'La trascrizione è testo semplice senza metadati FLAC. I tag dei commenti Vorbis vengono ignorati durante la trascrizione. Mantieni la mappatura dei metadati nel tuo sistema di archiviazione se ne hai bisogno in seguito.',
        },
        {
          q: 'Mictoo trascrive FLAC non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con auto-rilevamento. Per accenti insoliti o registrazioni più vecchie, imposta esplicitamente la lingua per una rilevazione più pulita al primo passaggio.',
        },
        {
          q: 'Posso ottenere sottotitoli SRT per un video che usa questo audio?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. I timestamp si allineano alla timeline originale FLAC per l’uso in editor video o strumenti di accessibilità.',
        },
        {
          q: 'Il mio file FLAC viene mantenuto sui vostri server?',
          a: 'No. L’audio viene trasmesso al fornitore di trascrizione, elaborato una sola volta e rimosso dalla memoria. Non scriviamo mai l’audio su disco. Le trascrizioni vengono memorizzate solo se ti registri.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua di destinazione e fai clic su Traduci. La traduzione viene eseguita su GPT-4o-mini e appare accanto all’originale.',
        },
        {
          q: 'Quanto tempo richiede una trascrizione FLAC?',
          a: 'Un FLAC di 15 minuti di solito termina in 25-45 secondi dall’inizio alla fine. File più grandi vicino al limite di caricamento richiedono 45-90 secondi. La velocità di caricamento è spesso il passaggio più lungo poiché i file FLAC sono grandi.',
        },
        {
          q: 'Accettate FLAC hi-res a 24-bit?',
          a: 'Sì. FLAC a 24-bit a 96 kHz o 192 kHz è completamente supportato. Whisper ricampiona internamente, quindi l’hi-res non migliora l’accuratezza rispetto a 16-bit 44.1 kHz per audio pulito, ma non danneggia nemmeno.',
        },
      ]}
      ctaHeadline="Carica il tuo FLAC, ottieni una trascrizione pronta per l’archivio"
      ctaSubtitle="Sorgente senza perdite in, testo ricercabile fuori. Storia orale, registrazioni sul campo e copie di conservazione."
      ctaButton="Carica FLAC per trascrivere"
    />
  )
}