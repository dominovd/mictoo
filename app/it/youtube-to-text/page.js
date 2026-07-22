import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube a Testo: Trascrizione, Riepilogo e SRT | Mictoo',
  description:
    'Incolla un URL di YouTube per utilizzare le didascalie disponibili, oppure carica audio per una nuova trascrizione con timestamp, riepilogo ed esportazione SRT.',
  alternates: {
    canonical: 'https://mictoo.com/it/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube a Testo: Trascrizione Gratuita di Video YouTube | Mictoo',
    description: 'Incolla un URL di YouTube, ottieni una trascrizione pulita con timestamp, riepilogo ed SRT sottotitoli.',
    url: 'https://mictoo.com/it/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube a Testo: Trascrizione Gratuita di YouTube',
    description: 'Incolla un URL di YouTube o carica audio, ottieni una trascrizione.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="URL di YouTube o carica · Gratuito · Nessuna registrazione"
      h1First="YouTube a Testo"
      h1Second="Incolla un URL, ottieni una trascrizione pulita"
      subtitle="Incolla un link di YouTube per utilizzare le didascalie già disponibili, oppure carica audio per creare una nuova trascrizione Whisper. Rivedi il testo, genera un riepilogo ed esporta sottotitoli SRT."
      currentHref="/it/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/transcribe-video-to-text' },
      ]}

      howItWorksTitle="Come funziona la trascrizione di YouTube"
      steps={[
        {
          icon: 'folder',
          title: 'Incolla un URL o carica audio',
          desc: 'Percorso veloce: incolla il link di YouTube, recuperiamo le didascalie esistenti. Percorso Whisper: carica l’audio per una trascrizione fresca.',
        },
        {
          icon: 'upload',
          title: 'Didascalie o trascrizione fresca',
          desc: 'Il percorso URL restituisce le didascalie disponibili. Il percorso di caricamento esegue Whisper large-v3; il tempo di elaborazione dipende dalla lunghezza e dalla dimensione del media.',
        },
        {
          icon: 'editPen',
          title: 'Riepilogo, SRT, traduzione',
          desc: 'Riepilogo AI insieme alla trascrizione. Scarica SRT per il video, traduci in oltre 50 lingue, esporta come DOCX o PDF.',
        },
      ]}

      exampleTitle="Esempio di trascrizione YouTube"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Bentornati sul canale. Oggi esaminiamo i tre cambiamenti più grandi nell’analisi dei prodotti nel 2026.' },
        { t: '0:12',  line: 'Cambiamento uno, la riproduzione delle sessioni è praticamente un requisito ora. Ogni strumento serio lo include nel livello base.' },
        { t: '0:24',  line: 'Cambiamento due, il passaggio dai dashboard SQL personalizzati all’interrogazione in linguaggio naturale sta avvenendo rapidamente.' },
        { t: '0:37',  line: 'Cambiamento tre, gli strumenti nativi del magazzino stanno sostituendo il vecchio stack di analisi basato su eventi.' },
        { t: '0:50',  line: 'Lasciami spiegare cosa significa ciascun cambiamento per gli strumenti che dovresti valutare quest’anno.' },
        { t: '1:02',  line: 'Riproduzione delle sessioni prima. Se il tuo strumento attuale addebita un costo extra per questo, è un segnale per cercare altrove.' },
        { t: '1:14',  line: 'Gli strumenti moderni raggruppano la riproduzione con eventi, funnel e coorti come un unico prodotto, non come un componente aggiuntivo a pagamento.' },
      ]}
      summaryPoints={[
        '3 cambiamenti più grandi nell’analisi dei prodotti nel 2026.',
        'La riproduzione delle sessioni è ora un requisito in tutti gli strumenti seri.',
        'Passaggio dai dashboard SQL all’interrogazione in linguaggio naturale.',
        'Strumenti nativi del magazzino che sostituiscono gli stack basati su eventi.',
      ]}
      actionItems={[
        'Valuta lo strumento attuale per la riproduzione inclusa',
        'Prova 1 strumento di analisi nativo del magazzino questo trimestre',
        'Redigi un riepilogo del blog sui 3 cambiamenti',
      ]}

      whyTitle="Perché Mictoo per la trascrizione di YouTube"
      whyCards={[
        {
          icon: 'target',
          title: 'Scegli il percorso di trascrizione giusto',
          desc: 'Usa le didascalie esistenti per velocità, oppure carica audio quando desideri una trascrizione fresca da rivedere per nomi, punteggiatura e termini specialistici.',
        },
        {
          icon: 'clip',
          title: 'SRT per la descrizione del video',
          desc: 'Scarica SRT e ricarica su YouTube Studio per didascalie modificate, oppure usalo altrove nel tuo flusso di lavoro.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per le note degli episodi',
          desc: 'Solida prima bozza per la descrizione del video, riepilogo del blog e titoli dei capitoli. Trasforma un podcast di 60 minuti in 200 parole.',
        },
        {
          icon: 'globe',
          title: 'Traduci le didascalie in oltre 50 lingue',
          desc: 'Pubblico internazionale? Traduci la trascrizione e poi ricarica come SRT tradotto al tuo video.',
        },
      ]}

      scenariosTitle="Scenari comuni di YouTube"
      scenarios={[
        { icon: 'search',    title: 'Ricerca di un video' },
        { icon: 'editPen',   title: 'Riepilogo del blog' },
        { icon: 'clip',      title: 'Didascalie SRT' },
        { icon: 'chat',      title: 'Citazione' },
        { icon: 'globe',     title: 'Traduci didascalie' },
        { icon: 'headset',   title: 'Podcast su YT' },
      ]}

      tipsTitle="Suggerimenti per le trascrizioni di YouTube"
      tips={[
        'Il percorso più veloce è l’URL quando il video ha già didascalie.',
        'Per video tecnici o non in inglese, preferisci il percorso di caricamento audio.',
        'Flussi molto lunghi: scarica l’audio e dividilo prima del caricamento.',
        'Per i tuoi video, carica l’audio sorgente per la massima accuratezza.',
      ]}

      guidesTitle="Strumenti correlati"
      guides={[
        { href: '/it/transcribe-video-to-text',      icon: 'video', title: 'Video a Testo',       desc: 'Non-YouTube MP4, MOV, WebM' },
        { href: '/it/transcribe-audio-to-text',      icon: 'file',  title: 'Audio a Testo',       desc: 'Qualsiasi formato audio' },
        { href: '/it/free-srt-generator',            icon: 'file',  title: 'Generatore SRT',       desc: 'Esportazione focalizzata sui sottotitoli' },
        { href: '/it/how-to-download-youtube-video', icon: 'video', title: 'Scarica da YT',    desc: 'Guida: come ottenere l’audio' },
      ]}

      faq={[
        {
          q: 'Posso semplicemente incollare un URL di YouTube?',
          a: 'Sì. Quando il video ha didascalie (caricate dal creatore o generate automaticamente), le recuperiamo in pochi secondi. Se non ci sono didascalie, carica invece il file audio per una trascrizione completa di Whisper.',
        },
        {
          q: 'In cosa differisce il percorso di caricamento dalle didascalie di YouTube?',
          a: 'Il percorso URL restituisce le didascalie già disponibili per il video. Il percorso di caricamento crea una trascrizione Whisper separata dall’audio. Entrambe le versioni possono contenere errori, quindi rivedi nomi, numeri e tempistiche prima di pubblicare.',
        },
        {
          q: 'Come posso estrarre l’audio da un video di YouTube?',
          a: 'Usa uno strumento del browser o un estrattore desktop a tua scelta, quindi carica l’MP3 o l’M4A. Non ospitiamo uno strumento di download per motivi di copyright, ma consulta la nostra guida "Come scaricare un video di YouTube" per opzioni comuni.',
        },
        {
          q: 'Mictoo trascrive video di YouTube non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con rilevamento automatico. Per clip brevi o accenti insoliti, imposta esplicitamente la lingua nel menu a discesa.',
        },
        {
          q: 'Posso ottenere un riepilogo AI del video?',
          a: 'Sì. Il riepilogo AI appare automaticamente insieme alla trascrizione. Solida prima bozza per una descrizione video, riepilogo del blog o note degli episodi.',
        },
        {
          q: 'Posso scaricare SRT per aggiungere didascalie al mio video?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. Entrambi i formati funzionano con YouTube Studio, Premiere, DaVinci, Final Cut, CapCut e la maggior parte dei lettori moderni.',
        },
        {
          q: 'Posso tradurre una trascrizione di YouTube?',
          a: 'Sì. Scegli una lingua target e fai clic su Traduci. Utile per pubblici internazionali o pagine di riproduzione non in inglese.',
        },
        {
          q: 'I miei dati di YouTube vengono conservati sui vostri server?',
          a: 'No. Le didascalie recuperate e l’audio caricato vengono elaborati una sola volta e scartati. Solo la trascrizione persiste se accedi e la salvi nella cronologia.',
        },
      ]}

      ctaHeadline="Trasforma qualsiasi video di YouTube in testo"
      ctaSubtitle="Incolla un URL per il percorso veloce, carica audio per il percorso completo di Whisper. Gratuito per video."
      ctaButton="Incolla un URL di YouTube o carica"

      relatedLinks={[
        { href: '/it/transcribe-video-to-text', label: 'Video a Testo' },
        { href: '/it/podcast-transcription',    label: 'Trascrizione Podcast' },
        { href: '/it/lecture-transcription',    label: 'Trascrizione Lezione' },
        { href: '/it/free-srt-generator',       label: 'Generatore SRT Gratuito' },
        { href: '/it/webinar-transcription',    label: 'Trascrizione Webinar' },
      ]}
    />
  )
}