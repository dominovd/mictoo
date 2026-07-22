import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG a Testo: Voce Telegram, Audio Linux e Trascrizione Opus/Vorbis | Mictoo',
  description:
    'Carica audio OGG (Vorbis, Opus, FLAC all’interno di OGG) o messaggi vocali Telegram .oga. Trascrizione modificabile con timestamp in secondi, senza registrazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/ogg-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'OGG a Testo: Voce Telegram, Audio Linux, Trascrizione Opus/Vorbis | Mictoo',
    description: 'Carica audio OGG o messaggi vocali Telegram .oga. Trascrizione modificabile in secondi.',
    url: 'https://mictoo.com/it/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG a Testo: Trascrizione Voce Telegram e Audio Linux',
    description: 'Carica audio OGG o messaggi vocali Telegram .oga. Trascrizione modificabile in secondi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItOggToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG a Testo"
      h1Second="Voce Telegram, audio Linux, Opus e Vorbis"
      subtitle="OGG è ciò che utilizza la Voce Telegram (.oga), a cui le app audio Linux si affidano, e ciò che il codec open-source Opus include. Trascina il file, rileviamo automaticamente il flusso audio e trascriviamo con Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Ehi, veloce messaggio vocale sulla chiamata di domani.' },
        { t: '0:03',  line: 'Ho guardato il deck e penso che le diapositive quattro, cinque e sei necessitino di una revisione prima della presentazione.' },
        { t: '0:10',  line: 'Il problema principale è che la storia salta dal problema direttamente al prezzo senza mostrare le schermate della demo.' },
        { t: '0:20',  line: 'Quello che farei è scambiare la diapositiva cinque con il flusso della demo e spostare il prezzo alla fine del deck.' },
        { t: '0:30',  line: 'In questo modo costruiamo la tensione su ciò che il prodotto fa realmente prima di parlare di costi.' },
        { t: '0:39',  line: 'Inoltre, il cliente ha menzionato ieri che vuole vedere la diapositiva di integrazione, che attualmente è nell’appendice.' },
        { t: '0:49',  line: 'Spostala nel flusso principale, magari tra la demo e il prezzo.' },
        { t: '0:56',  line: 'A presto, fammi sapere cosa ne pensi quando hai un momento.' },
      ]}
      whyTitle="Perché Mictoo per la trascrizione OGG"
      whyCards={[
        {
          icon: 'mic',
          title: 'Messaggi vocali Telegram, nativi',
          desc: 'Le note vocali .oga di Telegram si caricano direttamente. Nessun rinominare, nessun ripackaging. Gestiamo il flusso Opus all’interno del contenitore OGG.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus e FLAC-in-OGG',
          desc: 'Qualsiasi codec all’interno del contenitore OGG funziona: Vorbis (più vecchio), Opus (moderno), FLAC-in-OGG (audiophile). Rilevato automaticamente lato server.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per catene di messaggi vocali',
          desc: 'I messaggi vocali tendono a essere prolissi. Il riepilogo AI trasforma un .oga di cinque minuti in un takeaway di due righe che puoi mettere in atto.',
        },
        {
          icon: 'globe',
          title: 'Traduci in oltre 50 lingue',
          desc: 'Messaggio vocale in russo, spagnolo o portoghese da una chat di gruppo. Traduci in inglese (o qualsiasi obiettivo) dopo la trascrizione.',
        },
      ]}
      scenariosTitle="Quando OGG a testo è la scelta giusta"
      scenarios={[
        {
          icon: 'mic',
          title: 'Messaggio vocale Telegram',
          desc: 'Nota vocale inviata da un collega o cliente tramite Telegram. Salva il .oga dalla chat, caricalo qui, ottieni una versione testuale da scorrere.',
        },
        {
          icon: 'gear',
          title: 'Registrazione audio Linux',
          desc: 'Registrazione da Audacity, GNOME Sound Recorder o uno strumento audio KDE che utilizza OGG come predefinito. Completamente supportato, nessuna conversione.',
        },
        {
          icon: 'briefcase',
          title: 'Esportazione da app open-source',
          desc: 'Registratore di podcast o interviste che esporta OGG (molte app FOSS utilizzano Vorbis o Opus per motivi di licenza).',
        },
        {
          icon: 'video',
          title: 'Cattura MediaRecorder di Firefox',
          desc: 'Firefox produce spesso OGG/Opus da app di registrazione del browser. Carica il file per una trascrizione pulita con timestamp.',
        },
        {
          icon: 'editPen',
          title: 'Nota o promemoria dettati',
          desc: 'Nota catturata in un’app che salva come OGG. Trasformala in testo modificabile pronto per il tuo flusso di scrittura.',
        },
        {
          icon: 'users',
          title: 'Registro chat OGG multi-parlante',
          desc: 'Registrazione VOIP da Discord, Mumble o simili esportata in OGG. Trascrizione per riferimento, verbali di riunioni o archiviazione.',
        },
      ]}
      technicalTitle="Cosa può esserci all’interno di un file OGG"
      technicalIntro="OGG è una famiglia di contenitori piuttosto che un singolo codec audio. Conoscere il tipo di flusso e l’estensione aiuta a spiegare da dove proviene una registrazione, ma non è necessario ripackarla prima del caricamento."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus o FLAC',
          desc: 'Il contenitore OGG può contenere diversi codec. I messaggi vocali utilizzano comunemente Opus; l’audio desktop più vecchio utilizza spesso Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga e .ogg',
          desc: '.oga è l’estensione audio-only nella stessa famiglia di contenitori. Le esportazioni vocali di Telegram arrivano spesso con questa estensione.',
        },
        {
          icon: 'mic',
          title: 'Fonte del messaggio vocale',
          desc: 'Messaggi brevi da mobile possono includere rumore ambientale e elaborazione del telefono; una cattura chiara è più importante del nome del contenitore.',
        },
        {
          icon: 'gear',
          title: 'Ispezione basata su header',
          desc: 'La struttura del flusso viene ispezionata durante l’elaborazione, quindi un’estensione insolita non deve essere rinominata prima.',
        },
      ]}
      faq={[
        {
          q: 'Quali tipi di file OGG accetta Mictoo?',
          a: 'Qualsiasi contenitore OGG standard: audio Vorbis (più vecchio, comune su Linux), audio Opus (più recente, usato dalla voce Telegram e app moderne) e FLAC-in-OGG. Anche i file .oga di Telegram, che sono OGG con un’estensione diversa.',
        },
        {
          q: 'Un file .oga è lo stesso di .ogg?',
          a: 'Effettivamente sì. .oga è l’estensione standardizzata per audio-only OGG, usata più comunemente dai messaggi vocali di Telegram che trasportano un flusso Opus. Mictoo tratta .oga e .ogg allo stesso modo.',
        },
        {
          q: 'Il mio file OGG è superiore a 60 MB. E adesso?',
          a: 'Opus e Vorbis sono efficienti, quindi raggiungere 60 MB di solito significa una registrazione molto lunga. Se sei registrato, dividiamo automaticamente fino a circa 3 ore. Altrimenti, riduci prima: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. La voce rimane nitida.',
        },
        {
          q: 'Accettate video OGG (Theora)?',
          a: 'La traccia audio all’interno di un contenitore OGG/Theora viene trascritta. Carica il file .ogv e demuxiamo l’audio proprio come con qualsiasi formato video. I clip Theora silenziosi produrranno trascrizioni vuote.',
        },
        {
          q: 'Mictoo trascrive OGG non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con rilevamento automatico. Per messaggi vocali brevi o contenuti non in inglese, imposta esplicitamente la lingua per risultati iniziali più puliti.',
        },
        {
          q: 'Posso ottenere sottotitoli SRT per una registrazione OGG?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. I timestamp si allineano alla timeline originale OGG per l’uso in editor video o strumenti di accessibilità.',
        },
        {
          q: 'Il mio file OGG viene mantenuto sui vostri server?',
          a: 'No. I flussi audio vengono inviati al fornitore di trascrizione, elaborati una sola volta e rimossi dalla memoria. Non lo scriviamo mai su disco. Le trascrizioni vengono memorizzate solo se ti registri e salvi nella cronologia.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua target e fai clic su Traduci. La traduzione viene eseguita su GPT-4o-mini e appare accanto all’originale.',
        },
        {
          q: 'La qualità OGG influisce sulla trascrizione?',
          a: 'Poco. Opus a 24-32 kbps suona nitido per la voce e trascrive essenzialmente bene come bitrate più elevati. Whisper campiona internamente a 16 kHz mono, quindi il bitrate ha un impatto minimo per la voce chiara.',
        },
        {
          q: 'Quanto tempo ci vuole per una trascrizione OGG?',
          a: 'Una nota vocale Telegram di 2 minuti di solito termina in 5-15 secondi dall’inizio alla fine. File OGG più lunghi (30-45 minuti) richiedono 45-90 secondi. La velocità di caricamento è spesso il passaggio più lungo.',
        },
      ]}
      ctaHeadline="Carica il tuo file vocale Telegram o OGG"
      ctaSubtitle="Opus, Vorbis, FLAC-in-OGG, messaggi vocali .oga. Ogni flusso OGG, gestito nativamente."
      ctaButton="Carica OGG per trascrivere"
    />
  )
}