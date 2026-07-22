import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WebM a Testo: Trascrizione di Loom, OBS e Registrazioni dello Schermo del Browser | Mictoo',
  description:
    'Carica registrazioni dello schermo WebM da Loom, OBS o dall’API MediaRecorder del browser. Rimuoviamo il video e trascriviamo l’audio. Trascrizione modificabile con timestamp in secondi.',
  alternates: {
    canonical: 'https://mictoo.com/it/webm-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'WebM a Testo: Trascrizione di Loom, OBS, Registrazioni del Browser | Mictoo',
    description: 'Carica una registrazione dello schermo WebM. Estraiamo l’audio e restituiamo una trascrizione modificabile con timestamp.',
    url: 'https://mictoo.com/it/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM a Testo: Trascrizione di Loom, OBS, Registrazioni del Browser',
    description: 'Carica una registrazione dello schermo WebM. Estraiamo l’audio e restituiamo una trascrizione modificabile.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="WebM · Loom · OBS · Registrazione dello schermo"
      h1First="WebM a Testo"
      h1Second="Per Loom, OBS e registrazioni dello schermo del browser"
      subtitle="WebM è ciò che Loom esporta, ciò che OBS registra per impostazione predefinita nelle versioni più recenti, e ciò che i browser scrivono quando la tua app utilizza l’API MediaRecorder. Trascina il file, rimuoviamo il video e trascriviamo l’audio in secondi."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Ciao team, volevo esaminare il nuovo flusso di onboarding prima di lanciarlo giovedì.' },
        { t: '0:07',  line: 'Questa è la mia schermata. Ciò che vedete è la pagina di atterraggio dopo una nuova registrazione.' },
        { t: '0:14',  line: 'La prima cosa da notare è che il modulo di benvenuto ora si trova sopra il dashboard invece di bloccare l’intera area visiva.' },
        { t: '0:23',  line: 'Questo è intenzionale. Gli utenti si confondevano quando il dashboard era completamente nascosto dal tour.' },
        { t: '0:32',  line: 'In secondo luogo, i tre passaggi del tour sono più brevi. Abbiamo ridotto il testo di circa la metà in base all’ultimo giro di feedback.' },
        { t: '0:41',  line: 'Se clicco su Salta Tour qui, il modulo si chiude e portiamo l’utente direttamente in un coach mark di stato vuoto.' },
        { t: '0:51',  line: 'Quel coach mark punta al pulsante di caricamento principale, che è l’unica azione che ogni utente deve fare per prima.' },
        { t: '1:00',  line: 'Fate sapere cosa ne pensate. Problemi bloccanti da spedire entro mercoledì mattina, se possibile.' },
      ]}
      whyTitle="Perché Mictoo per la trascrizione WebM"
      whyCards={[
        {
          icon: 'video',
          title: 'Video WebM gestito lato server',
          desc: 'Registrazione dello schermo WebM con la traccia video intatta. Demuxiamo, rimuoviamo il video e trascriviamo l’audio. Nessuna estrazione locale necessaria.',
        },
        {
          icon: 'gear',
          title: 'Supporto per Opus e Vorbis',
          desc: 'La maggior parte dei file WebM contiene audio Opus (più recente) o Vorbis (più vecchio). Gestiamo entrambi i codec, senza necessità di conversione manuale.',
        },
        {
          icon: 'clip',
          title: 'Sottotitoli SRT per il walkthrough',
          desc: 'Scarica SRT o VTT dopo la trascrizione. I timestamp si allineano all’originale WebM, quindi i sottotitoli corrispondono alla registrazione dello schermo con precisione fotogramma per fotogramma.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per le note di rilascio',
          desc: 'Il riepilogo AI è una solida prima bozza per la descrizione del ticket, la nota di rilascio o l’aggiornamento asincrono che un walkthrough è stato creato per sostituire.',
        },
      ]}
      scenariosTitle="Quando WebM a testo è la scelta giusta"
      scenarios={[
        {
          icon: 'video',
          title: 'Walkthrough di Loom',
          desc: 'Demo del prodotto, revisione del codice o aggiornamento asincrono registrato in Loom. La trascrizione alimenta il ticket, il documento di Notion o l’email di follow-up.',
        },
        {
          icon: 'briefcase',
          title: 'Registrazione dello schermo OBS',
          desc: 'Tutorial o cattura di gameplay registrata con OBS Studio. La trascrizione diventa la descrizione di YouTube o un articolo del blog.',
        },
        {
          icon: 'gear',
          title: 'Output MediaRecorder del browser',
          desc: 'Audio registrato dall’app tramite l’API MediaRecorder. Trascina il .webm prodotto dalla tua app senza alcun passaggio di conversione.',
        },
        {
          icon: 'users',
          title: 'Registrazione di Google Meet o Firefox',
          desc: 'Alcuni strumenti di riunione e browser registrano in WebM per impostazione predefinita. Trascina il file per una versione testuale ricercabile della conversazione.',
        },
        {
          icon: 'editPen',
          title: 'Revisione del design asincrona',
          desc: 'Il designer registra un WebM mentre esamina un mockup. I revisori ricevono una trascrizione scritta in modo da poter scorrere prima di guardare.',
        },
        {
          icon: 'book',
          title: 'Cattura dello schermo della lezione',
          desc: 'L’istruttore ha registrato le diapositive con narrazione e condiviso come WebM. Gli studenti ricevono una trascrizione ricercabile insieme al video.',
        },
      ]}
      technicalTitle="Cosa sapere sulle registrazioni WebM"
      technicalIntro="WebM è un contenitore compatibile con i browser che può contenere video più audio o solo audio. Le impostazioni del browser e del registratore determinano quali tracce e codec sono presenti."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Audio Opus o Vorbis',
          desc: 'Le registrazioni vocali WebM più recenti utilizzano Opus; i file più vecchi possono utilizzare Vorbis. Entrambi si trovano all’interno del contenitore WebM.',
        },
        {
          icon: 'video',
          title: 'Solo audio o con video',
          desc: 'Un WebM può contenere una registrazione dello schermo o solo una traccia del microfono. La trascrizione utilizza il flusso di voce udibile.',
        },
        {
          icon: 'clip',
          title: 'Esportazioni basate sulla timeline',
          desc: 'I timestamp della trascrizione seguono la timeline della registrazione decodificata per un lavoro successivo di sottotitoli o editing.',
        },
        {
          icon: 'gear',
          title: 'Output del registratore del browser',
          desc: 'Le impostazioni di MediaRecorder variano in base al browser. Se una cattura non ha il permesso del microfono, potrebbe non contenere voce da trascrivere.',
        },
      ]}
      faq={[
        {
          q: 'Quali tipi di file WebM accetta Mictoo?',
          a: 'Qualsiasi WebM standard: video con audio Opus o Vorbis (Loom, OBS, MediaRecorder del browser), o WebM solo audio. Demuxiamo la traccia audio lato server e trascriviamo con Whisper large-v3.',
        },
        {
          q: 'Devo estrarre prima io l’audio?',
          a: 'No. Carica il video WebM così com’è. Gestiamo il demux lato server e trascriviamo solo la traccia audio. Se hai già estratto l’audio (Opus o Vorbis), va bene lo stesso.',
        },
        {
          q: 'Il mio Loom supera i 60 MB. E adesso?',
          a: 'Un Loom di 20-30 minuti spesso supera i 60 MB. Se sei connesso, suddividiamo automaticamente i file lunghi fino a circa 3 ore. Altrimenti, utilizza le impostazioni di download di Loom per ridurre la qualità, oppure esporta l’audio e carica quello.',
        },
        {
          q: 'I timestamp corrispondono alla mia registrazione dello schermo?',
          a: 'Sì. I timestamp nella trascrizione e nelle esportazioni SRT/VTT si allineano alla timeline originale di WebM, quindi i sottotitoli corrispondono alla registrazione dello schermo con precisione fotogramma per fotogramma quando vengono ripristinati sul video.',
        },
        {
          q: 'Posso ottenere sottotitoli SRT per il walkthrough?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. Inserisci nel tuo editor video, caricamento su YouTube, o flusso di lavoro di ri-rendering di Loom.',
        },
        {
          q: 'Mictoo trascrive WebM non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con rilevamento automatico. Per registrazioni brevi o contenuti non in inglese, imposta esplicitamente la lingua per risultati più puliti al primo passaggio.',
        },
        {
          q: 'E se il WebM non ha traccia audio?',
          a: 'La trascrizione sarà vuota. I file WebM senza traccia audio (registrazioni silenziose dello schermo, catture in stile GIF) non hanno nulla da trascrivere per Whisper.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua target e clicca su Traduci. La traduzione viene eseguita su GPT-4o-mini e appare accanto all’originale.',
        },
        {
          q: 'Il mio file WebM è salvato sui vostri server?',
          a: 'No. Il WebM viene inviato al fornitore di trascrizione, demuxiamo e trascriviamo in memoria, poi eliminiamo tutto. La trascrizione è memorizzata solo se ti registri e salvi nella cronologia.',
        },
        {
          q: 'Quanto tempo richiede una trascrizione WebM?',
          a: 'Un Loom di 10 minuti di solito termina in 20-40 secondi dall’inizio alla fine. I file WebM più lunghi (30-45 minuti) richiedono 60-90 secondi. La velocità di caricamento è spesso il passaggio più lungo per grandi registrazioni dello schermo.',
        },
      ]}
      ctaHeadline="Carica la tua registrazione Loom o OBS"
      ctaSubtitle="Registrazioni dello schermo WebM, output MediaRecorder del browser. Video demuxato lato server."
      ctaButton="Carica WebM per trascrivere"
    />
  )
}