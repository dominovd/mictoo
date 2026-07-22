import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Trascrizione Webinar con Riepilogo e Sottotitoli | Mictoo',
  description:
    'Carica una registrazione del webinar e ottieni testo con timestamp, un riepilogo AI e sottotitoli SRT/VTT per la riproduzione.',
  alternates: {
    canonical: 'https://mictoo.com/it/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione Webinar: Gratuita | Mictoo',
    description: 'Carica la tua registrazione del webinar, ottieni una trascrizione pulita.',
    url: 'https://mictoo.com/it/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione Webinar',
    description: 'Trascrizione gratuita per qualsiasi piattaforma di webinar.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Webinar · Long-form · Gratuito"
      h1First="Trascrizione Webinar"
      h1Second="Trascrizione gratuita per qualsiasi registrazione di webinar"
      subtitle="Carica da Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar o Restream. Ottieni una trascrizione completa, un riepilogo AI e sottotitoli pronti per la pagina di riproduzione on-demand."
      currentHref="/it/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="Come funziona la trascrizione dei webinar"
      steps={[
        {
          icon: 'folder',
          title: 'Esporta la registrazione del webinar',
          desc: 'La maggior parte delle piattaforme fornisce un download MP4 dopo l’evento. Alcune forniscono anche M4A solo audio.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'I webinar lunghi (60+ minuti) beneficiano dell’auto-split con accesso. Fino a 25 MB anonimamente, 60 MB con accesso.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione, riepilogo, sottotitoli',
          desc: 'Trascrizione con timestamp per la pagina di riproduzione, riepilogo AI come riepilogo del blog, SRT per i sottotitoli sul video on-demand.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di un webinar"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Benvenuti a tutti e grazie per essere qui. Mi chiamo Sam e sono il responsabile del marketing prodotto dell’azienda.' },
        { t: '0:12',  line: 'Oggi stiamo ufficialmente lanciando la versione cinque della piattaforma e voglio mostrarvi le novità.' },
        { t: '0:25',  line: 'Tre cambiamenti principali: reporting ricostruito, integrazioni native con i primi dieci CRM e un nuovo modello di prezzo.' },
        { t: '0:40',  line: 'Inizio con il reporting perché è il cambiamento che molti di voi chiedono da due anni.' },
        { t: '0:52',  line: 'I vecchi report erano lenti, si bloccavano su grandi set di dati e erano difficili da personalizzare. Tutti e tre i problemi sono stati risolti.' },
        { t: '1:07',  line: 'Ecco una demo dal vivo del nuovo costruttore di report. Mentre clicco, tenete d’occhio quanto velocemente si aggiornano le anteprime.' },
        { t: '1:22',  line: 'Ogni campo è drag-and-drop, i filtri sono impilabili e puoi salvare qualsiasi report come modello condiviso.' },
      ]}
      summaryPoints={[
        'Lancio della versione 5 con 3 cambiamenti principali.',
        'Reporting ricostruito (risolve velocità, dimensione del set di dati, personalizzazione).',
        'Integrazioni native con i primi 10 CRM.',
        'Nuovo modello di prezzo.',
      ]}
      actionItems={[
        'Bozza di riepilogo del blog dalla trascrizione',
        'Taglia un clip dimostrativo per i social',
        'Pubblica la riproduzione con sottotitoli on-demand',
      ]}

      whyTitle="Perché scegliere Mictoo per la trascrizione dei webinar"
      whyCards={[
        {
          icon: 'clip',
          title: 'Sottotitoli SRT per la riproduzione',
          desc: 'I timestamp si allineano al video originale. Inserisci SRT nel tuo lettore di riproduzione on-demand o nel caricamento su YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per il riepilogo del blog',
          desc: 'Trasforma un webinar di 60 minuti in un riepilogo di 200 parole. Una solida prima bozza per l’email di follow-up o il post del blog.',
        },
        {
          icon: 'search',
          title: 'Trascrizione ricercabile sulla pagina di atterraggio',
          desc: 'Pubblica la trascrizione sulla pagina di atterraggio on-demand. I partecipanti possono scorrere, SEO migliora, nessuno deve guardare 60 minuti.',
        },
        {
          icon: 'globe',
          title: 'Traduci per i partecipanti internazionali',
          desc: 'Traduzione con un clic in oltre 50 lingue per email di follow-up e pagine di riproduzione non in inglese.',
        },
      ]}

      scenariosTitle="Scenari comuni di webinar"
      scenarios={[
        { icon: 'broadcast', title: 'Lancio di prodotto' },
        { icon: 'book',      title: 'Formazione / accademia' },
        { icon: 'briefcase', title: 'Abilitazione alle vendite' },
        { icon: 'target',    title: 'Educazione del cliente' },
        { icon: 'users',     title: 'Briefing per analisti' },
        { icon: 'globe',     title: 'Evento multilingue' },
      ]}

      tipsTitle="Consigli per le registrazioni dei webinar"
      tips={[
        'Preferisci l’esportazione solo audio quando la tua piattaforma lo offre.',
        'Per webinar di 60+ minuti, accedi per l’auto-split fino a 3 ore.',
        'Includi il nome dell’host nel file in modo che l’intestazione della trascrizione mantenga il contesto.',
        'Estrai citazioni chiave dalla trascrizione per clip social.',
      ]}

      guidesTitle="Strumenti correlati"
      guides={[
        { href: '/it/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Registrazione Cloud MP4 / M4A' },
        { href: '/it/free-srt-generator',        icon: 'file',  title: 'Generatore SRT',     desc: 'Sottotitoli video on-demand' },
        { href: '/it/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Riutilizza l’audio del webinar' },
        { href: '/it/timestamped-transcription', icon: 'file',  title: 'Timestamped',       desc: 'Esportazione adatta alla lettura' },
      ]}

      faq={[
        {
          q: 'Con quali piattaforme di webinar funziona Mictoo?',
          a: 'Con tutte. Accettiamo qualsiasi file audio o video indipendentemente dalla piattaforma. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio e altro.',
        },
        {
          q: 'La mia registrazione del webinar è superiore a 60 MB. Cosa faccio?',
          a: 'Accedi per l’auto-split (fino a circa 3 ore). Oppure esporta solo audio dalla piattaforma, o estrai audio: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Posso pubblicare la trascrizione sulla pagina di riproduzione on-demand?',
          a: 'Sì. Copia la trascrizione nel tuo HTML della pagina di atterraggio on-demand. Aggiunge contenuti ricercabili, migliora il SEO, offre ai partecipanti che non possono guardare un modo per scorrere.',
        },
        {
          q: 'Posso ottenere sottotitoli per il video registrato del webinar?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. Entrambi funzionano con YouTube, Vimeo, Wistia, Descript e ogni lettore video moderno.',
        },
        {
          q: 'Mictoo identifica i presentatori rispetto ai relatori delle domande e risposte?',
          a: 'No. L’attuale trascrizione è testo continuo con timestamp per riga e senza etichette automatiche per i relatori.',
        },
        {
          q: 'Posso tradurre la trascrizione del webinar?',
          a: 'Sì. Scegli una lingua di destinazione e fai clic su Traduci. Utile per i partecipanti internazionali o per le pagine di riproduzione non in inglese.',
        },
        {
          q: 'Le registrazioni dei webinar vengono mantenute sui vostri server?',
          a: 'No. Il file viene trasmesso al fornitore di trascrizioni, elaborato una sola volta e poi eliminato. Solo la trascrizione persiste sugli account con accesso.',
        },
      ]}

      ctaHeadline="Trasforma il tuo webinar in un asset pronto per la riproduzione"
      ctaSubtitle="Trascrizione completa, sottotitoli SRT, riepilogo AI e testo ricercabile per la pagina di atterraggio."
      ctaButton="Carica una registrazione del webinar"

      relatedLinks={[
        { href: '/it/meeting-transcription',   label: 'Trascrizione Meeting' },
        { href: '/it/zoom-transcription',      label: 'Trascrizione Zoom' },
        { href: '/it/podcast-transcription',   label: 'Trascrizione Podcast' },
        { href: '/it/lecture-transcription',   label: 'Trascrizione Lezione' },
        { href: '/it/free-srt-generator',      label: 'Generatore SRT Gratuito' },
      ]}
    />
  )
}