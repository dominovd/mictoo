import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Trascrizione Podcast con Riepilogo e SRT | Mictoo',
  description:
    'Carica un episodio di podcast e ottieni testo con timestamp, un riepilogo AI e esportazioni per note dello show, sottotitoli e il tuo archivio.',
  alternates: {
    canonical: 'https://mictoo.com/it/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione Podcast: Generatore di Trascrizioni AI Gratuito | Mictoo',
    description: 'Carica il tuo episodio, ottieni una trascrizione pulita con timestamp in pochi secondi.',
    url: 'https://mictoo.com/it/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione Podcast: Generatore Gratuito',
    description: 'Carica il tuo episodio, ottieni una trascrizione pulita.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Podcaster · Ospiti · Gratuito"
      h1First="Trascrizione Podcast"
      h1Second="Trascrizione AI gratuita per ogni episodio"
      subtitle="Carica il tuo episodio da qualsiasi strumento di registrazione. Ottieni una trascrizione pulita con timestamp e un riepilogo AI pronta per le note dello show, il riepilogo SEO e i sottotitoli di YouTube."
      currentHref="/it/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Come funziona la trascrizione dei podcast"
      steps={[
        {
          icon: 'folder',
          title: 'Esporta l’episodio',
          desc: 'Qualsiasi formato prodotto dal tuo DAW o strumento di registrazione. MP3 è il più comune, ma M4A, WAV e FLAC funzionano tutti.',
        },
        {
          icon: 'upload',
          title: 'Carica il file qui',
          desc: 'Carica file fino a 60 MB quando sei connesso. Gli episodi più lunghi vengono automaticamente divisi in segmenti e riuniti.',
        },
        {
          icon: 'editPen',
          title: 'Note dello show, sottotitoli, esportazioni',
          desc: 'Trascrizione, riepilogo AI, SRT per la versione video di YouTube e DOCX per il blog. Il tempo di elaborazione dipende dalla lunghezza dell’episodio e dalla dimensione del file.',
        },
      ]}

      exampleTitle="Esempio di trascrizione podcast"
      exampleFileName="episodio-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Benvenuti di nuovo nello show. Questo è l’episodio quarantadue, e oggi parliamo di podcasting indipendente nel 2026.' },
        { t: '0:10',  line: 'Il mio ospite ha condotto uno show settimanale per otto anni senza mai saltare un episodio. Grazie per essere qui.' },
        { t: '0:20',  line: 'Grazie per avermi invitato. È incredibile pensare che abbiamo iniziato quando tutti dicevano che l’audio era già saturo.' },
        { t: '0:30',  line: 'Iniziamo da qui. Cosa era diverso nel lanciare un podcast nel 2018 rispetto ad ora.' },
        { t: '0:38',  line: 'La distribuzione era più difficile da affrontare, ma il pubblico era più paziente. L’attenzione era essenzialmente più economica.' },
        { t: '0:48',  line: 'Oggi gli strumenti sono incredibili. Trascrizione in pochi secondi, note dello show AI, ma l’attenzione stessa è molto più scarsa.' },
        { t: '0:58',  line: 'Questo è un buon spunto. Qual è il tuo flusso di lavoro per le note dello show ora che le trascrizioni sono praticamente gratuite.' },
      ]}
      summaryPoints={[
        'Episodio 42, focus sul podcasting indipendente nel 2026.',
        'Ospite: conduttore di uno show settimanale da 8 anni.',
        'Discussione: cambiamenti nella distribuzione 2018 vs 2026.',
        'L’economia dell’attenzione è il nuovo collo di bottiglia.',
      ]}
      actionItems={[
        'Redigi le note dello show dal riepilogo',
        'Estrai 3 citazioni per i social',
        'Pubblica SRT nella versione video di YouTube',
      ]}

      whyTitle="Perché Mictoo per la trascrizione dei podcast"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per le note dello show',
          desc: 'Solida prima bozza per le descrizioni degli episodi, riepiloghi del blog e note dello show ottimizzate per SEO.',
        },
        {
          icon: 'clip',
          title: 'SRT per la versione YouTube',
          desc: 'I timestamp si allineano all’audio originale. Inserisci SRT in YouTube Studio e i sottotitoli sono pronti.',
        },
        {
          icon: 'globe',
          title: 'Traduci per il pubblico internazionale',
          desc: 'Traduzione con un clic in oltre 50 lingue. I conduttori solisti si syndicano a livello globale senza un’agenzia di traduzione.',
        },
        {
          icon: 'gear',
          title: 'Qualsiasi bitrate, qualsiasi registratore',
          desc: 'Note vocali a 32 kbps e rimbalzi in studio a 320 kbps si trascrivono in modo identico per un discorso pulito.',
        },
      ]}

      scenariosTitle="Scenari di trascrizione podcast"
      scenarios={[
        { icon: 'chat',      title: 'Note dello show' },
        { icon: 'clip',      title: 'Sottotitoli di YouTube' },
        { icon: 'search',    title: 'Riepilogo SEO' },
        { icon: 'sparkles',  title: 'Clip di citazioni' },
        { icon: 'globe',     title: 'Traduzione' },
        { icon: 'book',      title: 'Archivio' },
      ]}

      tipsTitle="Suggerimenti per trascrizioni podcast più pulite"
      tips={[
        'Rimbalza un stem solo vocale quando il tuo DAW lo consente.',
        'Un MP3 mono ottimizzato per la voce a 64 kbps si trascrive altrettanto bene.',
        'Per episodi di interviste, rimuovi le musiche di sottofondo prima della trascrizione.',
        'Controlla i nomi di conduttori e ospiti una volta, appariranno in modo coerente dopo.',
      ]}

      guidesTitle="Guide di trascrizione correlate"
      guides={[
        { href: '/it/transcribe-mp3-to-text',    icon: 'file',  title: 'Trascrizione MP3',   desc: 'Guida ai formati podcast' },
        { href: '/it/m4a-to-text',               icon: 'file',  title: 'Trascrizione M4A',   desc: 'Esportazioni GarageBand e Apple' },
        { href: '/it/wav-to-text',               icon: 'file',  title: 'Trascrizione WAV',   desc: 'Rimbalzi in studio' },
        { href: '/it/timestamped-transcription', icon: 'file',  title: 'Approfondimento sui timestamp', desc: 'Meccaniche di esportazione SRT / VTT' },
      ]}

      faq={[
        {
          q: 'Con quali piattaforme podcast funziona Mictoo?',
          a: 'Con tutte. Accettiamo qualsiasi file audio o video indipendentemente dall’host. Comuni: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Gratuito per file fino a 60 MB se sei connesso.',
        },
        {
          q: 'Posso ottenere la trascrizione come note dello show automaticamente?',
          a: 'Il riepilogo AI appare automaticamente insieme alla trascrizione. Usalo come prima bozza delle tue note dello show e poi adatta al tuo stile.',
        },
        {
          q: 'Il mio episodio supera i 60 MB. Cosa faccio ora?',
          a: 'Accedi per dividere automaticamente file più lunghi, oppure riduci prima con ffmpeg -i episodio.mp3 -b:a 64k -ac 1 out.mp3. Un podcast di 60 minuti diventa ~28 MB senza perdita di precisione.',
        },
        {
          q: 'Posso scaricare SRT per la versione video di YouTube?',
          a: 'Sì. SRT e VTT includono timestamp allineati all’audio originale. Inserisci direttamente in YouTube Studio.',
        },
        {
          q: 'Mictoo trascrive podcast non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con auto-rilevamento. Per episodi brevi o accenti insoliti, scegli esplicitamente la lingua.',
        },
        {
          q: 'Gli episodi sono memorizzati sui vostri server?',
          a: 'No. L’audio viene inviato al fornitore di trascrizioni, elaborato una sola volta e rimosso dalla memoria. Le trascrizioni sono memorizzate solo se accedi.',
        },
        {
          q: 'Posso identificare chi sta parlando (conduttore vs ospite)?',
          a: 'No. L’attuale trascrizione è testo continuo con timestamp e senza etichette automatiche per i relatori.',
        },
      ]}

      ctaHeadline="Trasforma ogni episodio in testo pubblicabile"
      ctaSubtitle="Note dello show, sottotitoli di YouTube, riepilogo SEO, traduzione. Tutto da un’unica upload."
      ctaButton="Carica un episodio di podcast"

      relatedLinks={[
        { href: '/it/interview-transcription',   label: 'Trascrizione Intervista' },
        { href: '/it/webinar-transcription',     label: 'Trascrizione Webinar' },
        { href: '/it/transcribe-mp3-to-text',    label: 'MP3 a Testo' },
        { href: '/it/free-srt-generator',        label: 'Generatore SRT Gratuito' },
        { href: '/it/meeting-transcription',     label: 'Trascrizione Riunione' },
      ]}
    />
  )
}