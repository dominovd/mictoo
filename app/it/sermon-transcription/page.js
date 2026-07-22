import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Trascrizione dei Sermoni per Servizi e Studio | Mictoo',
  description:
    'Carica una registrazione di un sermone o servizio e ottieni testo ricercabile, timestamp, un riepilogo AI e file di esportazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione dei Sermoni: Gratuita | Mictoo',
    description: 'Carica la registrazione del tuo servizio, ottieni una trascrizione pulita.',
    url: 'https://mictoo.com/it/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione dei Sermoni',
    description: 'Trascrizioni gratuite per chiese e studio.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Chiese · Pastori · Studio · Gratuito"
      h1First="Trascrizione dei Sermoni"
      h1Second="Trascrizione gratuita per servizi e studio"
      subtitle="Carica una registrazione del servizio domenicale, una lezione serale o una sessione di studio biblico. Ottieni una trascrizione pulita con timestamp per il sito web della chiesa, appunti di studio e note per episodi di podcast."
      currentHref="/it/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="Come funziona la trascrizione dei sermoni"
      steps={[
        {
          icon: 'folder',
          title: 'Esporta la registrazione del servizio',
          desc: 'MP4 del livestream domenicale, WAV della console audio, o l’MP3 del podcast che pubblichi già.',
        },
        {
          icon: 'upload',
          title: 'Carica il file qui',
          desc: 'MP3, MP4, WAV, M4A funzionano tutti. I servizi lunghi beneficiano dell’auto-split se si è registrati.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione per il sito web',
          desc: 'Testo pulito pronto per il sito web della chiesa, appunti di studio, descrizione del podcast e archivio ricercabile.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di un sermone"
      exampleFileName="sunday-service-jan-14.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Buongiorno chiesa. Per favore, aprite con me il Vangelo di Matteo, capitolo cinque, versetto tre.' },
        { t: '0:12',  line: 'Questa mattina iniziamo una nuova serie su ciò che Gesù chiamava la vita benedetta, le Beatitudini.' },
        { t: '0:24',  line: 'Beati i poveri in spirito, perché di essi è il regno dei cieli. Questo è il nostro testo per questa settimana.' },
        { t: '0:38',  line: 'La parola che Gesù usa qui per beati non significa felice in un senso superficiale o circostanziale.' },
        { t: '0:51',  line: 'Significa essere profondamente e fondamentalmente contenti a causa della tua relazione con Dio, indipendentemente dalle circostanze.' },
        { t: '1:04',  line: 'E essere poveri in spirito non riguarda la povertà materiale. È una postura di dipendenza da Dio.' },
        { t: '1:18',  line: 'È sapere che qualunque cosa tu costruisca, qualunque cosa tu realizzi, alla fine si basa sulla grazia, non sul merito.' },
      ]}
      summaryPoints={[
        'Nuova serie sulle Beatitudini (Matteo 5).',
        'Focus: "Beati i poveri in spirito."',
        'Beati = profondo contentamento attraverso la relazione con Dio.',
        'Poveri in spirito = postura di dipendenza, non povertà materiale.',
      ]}
      actionItems={[
        'Pubblica la trascrizione sul sito web della chiesa',
        'Taglia un clip di 60 secondi per i social',
        'Includi nella guida di studio settimanale',
      ]}

      whyTitle="Perché scegliere Mictoo per la trascrizione dei sermoni"
      whyCards={[
        {
          icon: 'search',
          title: 'Archivio di sermoni ricercabile',
          desc: 'Pubblica le trascrizioni sul sito della chiesa. I membri trovano gli insegnamenti per argomento o versetto, mesi o anni dopo.',
        },
        {
          icon: 'sparkles',
          title: 'Appunti di studio e guide per piccoli gruppi',
          desc: 'Il riepilogo AI è il punto di partenza per la guida di studio settimanale o le domande di discussione per piccoli gruppi.',
        },
        {
          icon: 'clip',
          title: 'Sottotitoli per la riproduzione del livestream',
          desc: 'SRT per la versione video su YouTube o Facebook. Accessibilità per i membri con problemi di udito.',
        },
        {
          icon: 'globe',
          title: 'Traduci per congregazioni multilingue',
          desc: 'Sermone in inglese ma parte della congregazione preferisce lo spagnolo o il coreano. Traduzione con un clic.',
        },
      ]}

      scenariosTitle="Scenari comuni di sermoni"
      scenarios={[
        { icon: 'church',    title: 'Servizio domenicale' },
        { icon: 'book',      title: 'Studio biblico' },
        { icon: 'chat',      title: 'Gruppo piccolo' },
        { icon: 'sparkles',  title: 'Devozionale' },
        { icon: 'globe',     title: 'Missioni' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Consigli per le registrazioni dei sermoni"
      tips={[
        'WAV o M4A dalla console audio forniscono un input più pulito rispetto al microfono della stanza.',
        'Per servizi lunghi oltre 60 MB, registrati per l’auto-split.',
        'Per congregazioni con termini scripturali pesanti, rivedi le parole chiave.',
        'Includi il titolo del sermone nel nome del file per l’ordinamento dell’archivio.',
      ]}

      guidesTitle="Strumenti correlati"
      guides={[
        { href: '/it/transcribe-mp3-to-text',    icon: 'file',  title: 'Formato MP3',        desc: 'Esportazione adatta ai podcast' },
        { href: '/it/wav-to-text',               icon: 'file',  title: 'Formato WAV',        desc: 'Registrazione dalla console audio' },
        { href: '/it/lecture-transcription',     icon: 'book',  title: 'Trascrizione di Lezioni',   desc: 'Contenuto ricco di insegnamenti' },
        { href: '/it/free-srt-generator',        icon: 'file',  title: 'Sottotitoli SRT',      desc: 'Riproduzione del livestream' },
      ]}

      faq={[
        {
          q: 'Posso trascrivere una registrazione del livestream domenicale?',
          a: 'Sì. Scarica l’MP4 da YouTube Live, Facebook Live, o dal tuo fornitore di streaming della chiesa e caricalo qui. Il video viene demuxato automaticamente sul server.',
        },
        {
          q: 'Mictoo gestisce con precisione i riferimenti scripturali e i termini teologici?',
          a: 'Whisper large-v3 gestisce bene il vocabolario scripturale e teologico comune in inglese. Per nomi propri insoliti (traslitterazioni più vecchie, termini di traduzione specifici), rivedi dopo la trascrizione.',
        },
        {
          q: 'Mictoo è gratuito per le chiese?',
          a: 'Sì. Gratuito per file fino al limite di dimensione. Nessun livello o licenza specifica per le chiese.',
        },
        {
          q: 'La mia registrazione del servizio è oltre 60 MB. Cosa faccio?',
          a: 'Registrati per l’auto-split (fino a circa 3 ore). Oppure riduci: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. Stessa precisione, 3-5 volte più piccolo.',
        },
        {
          q: 'Posso ottenere sottotitoli per la riproduzione del livestream?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. I timestamp si allineano alla registrazione originale per YouTube, Facebook, o il tuo hosting video.',
        },
        {
          q: 'Posso tradurre il sermone per il team delle missioni?',
          a: 'Sì. Scegli una lingua target e clicca su Traduci. Utile per congregazioni multilingue, missioni e ministero della diaspora.',
        },
        {
          q: 'Le registrazioni vengono mantenute sui vostri server?',
          a: 'No. L’audio viene inviato al fornitore di trascrizione, elaborato una sola volta e poi eliminato. Solo la trascrizione persiste sugli account registrati.',
        },
      ]}

      ctaHeadline="Trasforma ogni sermone in una risorsa ricercabile"
      ctaSubtitle="Trascrizione per il sito web, sottotitoli per la riproduzione, appunti per i gruppi di studio."
      ctaButton="Carica un sermone"

      relatedLinks={[
        { href: '/it/lecture-transcription',     label: 'Trascrizione di Lezioni' },
        { href: '/it/podcast-transcription',     label: 'Trascrizione di Podcast' },
        { href: '/it/webinar-transcription',     label: 'Trascrizione di Webinar' },
        { href: '/it/free-srt-generator',        label: 'Generatore di SRT Gratuito' },
        { href: '/it/interview-transcription',   label: 'Trascrizione di Interviste' },
      ]}
    />
  )
}