import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Video a Testo: Trascrizione Video Online Gratuita per MP4, MOV, WebM | Mictoo',
  description:
    'Carica un video MP4, MOV, WebM, AVI o MKV e ottieni una trascrizione con timestamp, riepilogo AI e sottotitoli SRT. Per registrazioni dello schermo, tutorial, vlog e webinar.',
  alternates: {
    canonical: 'https://mictoo.com/it/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Video a Testo: Trascrizione Video Online Gratuita | Mictoo',
    description: 'Trascrizione video MP4, MOV, WebM con SRT, riepilogo e traduzione.',
    url: 'https://mictoo.com/it/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video a Testo: Trascrizione Video Online Gratuita',
    description: 'Trascrizione video MP4, MOV, WebM con SRT e riepilogo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="File video · MP4 · MOV · WebM · Gratuito"
      h1First="Video a Testo"
      h1Second="Per registrazioni dello schermo, tutorial e vlog"
      subtitle="Carica un file MP4, MOV, WebM, MKV o AVI. Estraiamo la traccia audio, trascriviamo con Whisper large-v3 e restituiamo una trascrizione con timestamp, riepilogo AI e sottotitoli SRT pronti da riutilizzare nel video."
      highlightFormat="video"
      relatedFormatsTitle="Contenitori video che puoi caricare"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/it/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Buongiorno a tutti, e grazie per essere venuti qui oggi.' },
        { t: '0:06',  line: 'Trascorreremo i prossimi trenta minuti a parlare di come il video è cambiato nel 2026 e cosa significa per i creatori.' },
        { t: '0:15',  line: 'Tre numeri rapidi prima di iniziare. Novantadue percento degli utenti di internet guarda video ogni settimana.' },
        { t: '0:24',  line: 'Il formato breve ora rappresenta più tempo di visualizzazione rispetto al formato lungo su ogni piattaforma principale.' },
        { t: '0:32',  line: 'E le ricerche che portano a un risultato video sono cresciute due e mezzo volte anno dopo anno.' },
        { t: '0:41',  line: 'Quindi le piattaforme stanno spingendo il video. Il pubblico sta guardando più video. Questa parte non è controversa.' },
        { t: '0:50',  line: 'Ciò che è controverso è ciò che effettivamente attira attenzione in quell’oceano di video.' },
        { t: '0:58',  line: 'Lasciami spiegare i tre modelli che abbiamo visto funzionare per i creatori che pubblicano ogni settimana.' },
      ]}
      whyTitle="Perché Mictoo per la trascrizione video"
      whyCards={[
        {
          icon: 'video',
          title: 'Ogni contenitore video comune',
          desc: 'MP4, MOV, WebM, MKV, AVI. Demuxiamo la traccia audio lato server, quindi carichi il video così com’è senza passaggi di conversione.',
        },
        {
          icon: 'clip',
          title: 'SRT e VTT pronti per la timeline',
          desc: 'I timestamp si allineano alla timeline originale del video. Scarica SRT o VTT e inseriscili direttamente in Premiere, DaVinci, CapCut o nel tuo caricamento su YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per descrizioni',
          desc: 'Riepilogo generato automaticamente insieme alla trascrizione. Una solida prima bozza per descrizioni video, riepiloghi di blog e titoli di capitoli.',
        },
        {
          icon: 'globe',
          title: 'Traduci i sottotitoli in oltre 50 lingue',
          desc: 'Dopo che la trascrizione è pronta, traduci i sottotitoli in spagnolo, francese, tedesco, portoghese e oltre 45 altre lingue con un clic.',
        },
      ]}
      scenariosTitle="Quando la trascrizione video è la scelta giusta"
      scenarios={[
        {
          icon: 'video',
          title: 'Sottotitoli video di YouTube',
          desc: 'Registrato, modificato ed esportato in MP4. Carica il file per i sottotitoli SRT e un riepilogo pronto per la descrizione.',
        },
        {
          icon: 'briefcase',
          title: 'Registrazioni Loom e dello schermo',
          desc: 'WebM o MP4 da Loom, OBS o cattura dello schermo del browser. Ottieni una versione testuale pulita del walkthrough.',
        },
        {
          icon: 'users',
          title: 'Registrazioni di webinar e workshop',
          desc: 'Registrazione di eventi a lungo termine. La trascrizione diventa il post di follow-up del blog, il riepilogo di LinkedIn e l’archivio ricercabile.',
        },
        {
          icon: 'editPen',
          title: 'Contenuti di vlog e tutorial',
          desc: 'Taglio di vlog, spiegazione tutorial o demo di prodotto. La trascrizione alimenta le note, i sottotitoli e il riutilizzo sui social.',
        },
        {
          icon: 'book',
          title: 'Archivio delle lezioni del corso',
          desc: 'Lezione o conferenza registrata in MP4. Fornisci agli studenti una versione testuale ricercabile e blocca i sottotitoli per l’accessibilità.',
        },
        {
          icon: 'mic',
          title: 'Video di interviste e testimonianze',
          desc: 'Intervista a sedere o testimonianza di un cliente. La trascrizione rende molto più facile citare, modificare e tradurre.',
        },
      ]}
      technicalTitle="Cosa succede al file video"
      technicalIntro="Mictoo utilizza la traccia audio parlata per la trascrizione. Il contenitore e la qualità dell’immagine non migliorano il riconoscimento vocale, ma influenzano la dimensione del caricamento e se è disponibile un flusso audio."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Traccia audio estratta',
          desc: 'La traccia vocale è decodificata dal contenitore video. Non è necessario esportare un MP3 separato prima di caricare.',
        },
        {
          icon: 'clip',
          title: 'Timeline originale mantenuta',
          desc: 'I segmenti della trascrizione e le esportazioni dei sottotitoli utilizzano la timeline originale dei media in modo che possano essere abbinati di nuovo al video.',
        },
        {
          icon: 'layers',
          title: 'Il contenitore non è il codec',
          desc: 'MP4, MOV, WebM, MKV e AVI possono contenere diversi codec audio. Il file viene ispezionato quando viene elaborato.',
        },
        {
          icon: 'ear',
          title: 'È richiesta la voce',
          desc: 'Clip silenziose e video solo musicali non hanno una trascrizione parlata affidabile. Controlla che la traccia audio prevista sia udibile prima.',
        },
      ]}
      faq={[
        {
          q: 'Quali formati video accetta Mictoo?',
          a: 'MP4, MOV, WebM, MKV, AVI e la maggior parte degli altri contenitori comuni. Demuxiamo la traccia audio lato server, quindi puoi caricare direttamente uno di questi senza convertire prima in audio.',
        },
        {
          q: 'Quanto può essere grande un file video che posso caricare?',
          a: 'Fino a 25 MB in modo anonimo, 60 MB quando sei connesso. Per video più lunghi, dividiamo automaticamente i file fino a circa 3 ore se sei connesso. Per esportazioni molto grandi, riduci la dimensione del video prima o estrai la traccia audio e carica l’audio.',
        },
        {
          q: 'Posso incollare un URL di YouTube invece?',
          a: 'Sì. Su questa pagina puoi incollare un URL di video di YouTube e Mictoo recupererà i sottotitoli quando disponibili. Quando non esistono sottotitoli, carica il file video o l’audio estratto per una trascrizione completa con Whisper.',
        },
        {
          q: 'I timestamp si allineano con il video originale?',
          a: 'Sì. I timestamp della trascrizione e SRT/VTT utilizzano la timeline originale del video. Forniscono una traccia di sottotitoli utile come prima bozza, ma dovresti rivedere i tempi e i ritorni di linea nel tuo editor prima di pubblicare.',
        },
        {
          q: 'Posso ottenere sottotitoli SRT per il video?',
          a: 'Sì. Scarica come SRT o VTT dopo la trascrizione. Entrambi i formati funzionano in Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio e nella maggior parte dei moderni lettori video.',
        },
        {
          q: 'Estrai audio da clip video silenziosi?',
          a: 'No. Se il video non ha discorsi udibili, non c’è nulla da trascrivere. Per clip con solo musica, la trascrizione sarà tipicamente vuota o con brevi frammenti di testo.',
        },
        {
          q: 'Posso tradurre i sottotitoli in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua di destinazione e fai clic su Traduci. La traduzione funziona su GPT-4o-mini e appare insieme all’originale. Esporta l’SRT tradotto per i sottotitoli in lingua straniera.',
        },
        {
          q: 'Il mio file video sarà salvato sui vostri server?',
          a: 'No. Il video viene trasmesso al fornitore di trascrizione, estraiamo l’audio in memoria, trascriviamo una volta e cancelliamo tutto dalla memoria. La trascrizione viene memorizzata solo se accedi e scegli di salvarla nella cronologia.',
        },
        {
          q: 'Mictoo trascrive video non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con auto-rilevamento. Per video brevi o contenuti non in inglese, imposta esplicitamente la lingua nel menu a discesa per una rilevazione più pulita al primo passaggio.',
        },
        {
          q: 'Quanto tempo ci vuole per una trascrizione video?',
          a: 'Un MP4 di 30 minuti di solito termina in 40-70 secondi da inizio a fine. Il tempo di caricamento e la dimensione del file video sono di solito il passaggio più lungo perché dobbiamo ricevere il file prima di demuxare l’audio.',
        },
      ]}
      ctaHeadline="Carica il tuo video, ottieni sottotitoli e una trascrizione"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX e un riepilogo in pochi secondi."
      ctaButton="Carica video per trascrivere"
    />
  )
}