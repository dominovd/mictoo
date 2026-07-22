import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Trascrizione Interviste per Audio e Video | Mictoo',
  description:
    'Carica una registrazione di un’intervista e ottieni testo con timestamp, un riepilogo AI e esportazioni per report, ricerche o revisione.',
  alternates: {
    canonical: 'https://mictoo.com/it/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Strumento di Trascrizione Interviste Gratuito | Mictoo',
    description: 'Trascrizione interviste gratuita con AI. Carica audio o video, ottieni una trascrizione pulita in pochi minuti.',
    url: 'https://mictoo.com/it/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione Interviste Gratuita',
    description: 'Carica audio o video, ottieni una trascrizione pulita in pochi minuti.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Giornalisti · Ricercatori · UX · Gratuito"
      h1First="Trascrizione Interviste"
      h1Second="Strumento gratuito per giornalisti, ricercatori e team UX"
      subtitle="Carica un’intervista 1:1 o di gruppo da qualsiasi registratore o app di riunione. Ottieni una trascrizione pulita con timestamp, riepilogo AI ed esportazioni pronte per l’articolo, il documento o il repository di ricerca."
      currentHref="/it/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/it/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/it/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/it/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="Come funziona la trascrizione delle interviste"
      steps={[
        {
          icon: 'folder',
          title: 'Esporta la tua intervista',
          desc: 'Qualsiasi registrazione va bene. Memo vocale, registrazione cloud di Zoom, traccia audio di Riverside, esportazione di una telefonata.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'Carica MP3, MP4, M4A, WAV, MOV o qualsiasi formato audio e video comune fino a 60 MB.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione, citazioni, esportazioni',
          desc: 'Trascrizione con timestamp, riepilogo AI, esportazioni TXT / SRT / VTT / DOCX. Pronto per l’articolo o il documento di ricerca.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di un’intervista"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Grazie per aver dedicato del tempo. Potresti iniziare descrivendo il tuo ruolo e da quanto tempo sei in questo.' },
        { t: '0:08',  line: 'Certo. Guida il team di analisi in una fintech di medie dimensioni, e sono in questo ruolo da poco più di due anni.' },
        { t: '0:20',  line: 'Prima di questo ero in una banca più grande, lavorando principalmente sulla fidelizzazione dei clienti e sulla modellazione del valore nel tempo.' },
        { t: '0:32',  line: 'Quindi il passaggio da una grande banca a una fintech riguardava principalmente il ritmo e la libertà di provare cose nuove.' },
        { t: '0:44',  line: 'E gli strumenti sono migliorati notevolmente. Ciò che prima richiedeva una settimana nel vecchio stack ora richiede un pomeriggio.' },
        { t: '0:56',  line: 'Puoi darmi un esempio di quel tipo di cambiamento? Qualcosa di concreto che non avresti tentato prima.' },
        { t: '1:04',  line: 'Il più ovvio è la sperimentazione di coorti in tempo reale. Lanciamo un’idea al mattino e vediamo dati significativi entro quella sera.' },
      ]}
      summaryPoints={[
        'Responsabile analisi in fintech, oltre 2 anni in ruolo.',
        'Ruolo precedente in una grande banca focalizzato sulla modellazione della fidelizzazione.',
        'Passaggio a fintech guidato da ritmo e libertà di sperimentazione.',
        'Sperimentazioni di coorti in tempo reale possibili con strumenti moderni.',
      ]}
      actionItems={[
        'Segui il confronto sulla modellazione della fidelizzazione',
        'Chiedi un esempio di esperimento di coorte in tempo reale',
        'Ottieni un’introduzione al contatto del precedente datore di lavoro',
      ]}

      whyTitle="Perché Mictoo per la trascrizione delle interviste"
      whyCards={[
        {
          icon: 'target',
          title: 'Controlla nomi e nomi propri',
          desc: 'Usa i timestamp per controllare nomi, città, organizzazioni e termini specialistici rispetto alla registrazione originale dell’intervista.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI ed estrazione di citazioni',
          desc: 'Il riepilogo AI è una solida prima bozza per l’elenco delle citazioni, il memo di ricerca o l’introduzione dell’articolo.',
        },
        {
          icon: 'lock',
          title: 'Modello di elaborazione chiaro',
          desc: 'La registrazione viene inviata a un fornitore di trascrizione per l’elaborazione e non viene conservata da Mictoo dopo il completamento del lavoro.',
        },
        {
          icon: 'globe',
          title: 'Traduci per lavoro multilingue',
          desc: 'Intervista condotta in spagnolo, tedesco o giapponese. Traduci nella tua lingua di lavoro con un clic.',
        },
      ]}

      scenariosTitle="Scenari comuni di interviste"
      scenarios={[
        { icon: 'chat',      title: 'Giornalismo' },
        { icon: 'search',    title: 'Ricerca UX' },
        { icon: 'users',     title: 'Reclutamento' },
        { icon: 'book',      title: 'Storia orale' },
        { icon: 'briefcase', title: 'Deposizione legale' },
        { icon: 'globe',     title: 'Multilingue' },
      ]}

      tipsTitle="Suggerimenti per trascrizioni di interviste più pulite"
      tips={[
        'Registra con un microfono a clip o portatile vicino al soggetto.',
        'Chiedi al soggetto di fare una breve pausa tra risposte lunghe.',
        'Imposta esplicitamente la lingua per accenti forti o non inglesi.',
        'Controlla nomi e termini insoliti dopo la trascrizione.',
      ]}

      guidesTitle="Scegli la guida giusta per il registratore"
      guides={[
        { href: '/it/zoom-transcription',        icon: 'video', title: 'Intervista Zoom',    desc: 'Registrazione cloud MP4 o M4A' },
        { href: '/it/google-meet-transcription', icon: 'video', title: 'Intervista Meet',    desc: 'Download registrazione da Drive' },
        { href: '/it/voice-memo-to-text',        icon: 'mic',   title: 'Memo Vocale iPhone', desc: 'Qualsiasi registrazione vocale M4A' },
        { href: '/it/podcast-transcription',     icon: 'headset', title: 'Stile Podcast',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Quali formati di file accetta Mictoo per le interviste?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC e la maggior parte degli altri formati audio e video comuni. I file video vengono demuxati automaticamente lato server.',
        },
        {
          q: 'Mictoo identifica chi sta parlando?',
          a: 'No. L’attuale trascrizione è testo continuo con timestamp per riga e senza etichette automatiche "Intervistatore / Soggetto".',
        },
        {
          q: 'La trascrizione delle interviste è gratuita?',
          a: 'Sì. Gratuita per file fino a 25 MB in modo anonimo, 60 MB per utenti registrati. Interviste più lunghe possono essere suddivise automaticamente per utenti registrati.',
        },
        {
          q: 'Posso oscurare i nomi prima di pubblicare la trascrizione?',
          a: 'Sì. Passa alla modalità Editor dopo la trascrizione per modificare qualsiasi parola o riga. Salva la versione modificata ed esporta.',
        },
        {
          q: 'Le registrazioni vengono conservate sui vostri server?',
          a: 'No. I flussi audio vengono inviati al fornitore di trascrizione, elaborati una sola volta e poi scartati. Le trascrizioni vengono memorizzate solo se accedi.',
        },
        {
          q: 'Posso tradurre la trascrizione dell’intervista?',
          a: 'Sì. Scegli una lingua di destinazione e fai clic su Traduci. Utile per ricerche sul campo multilingue o reporting multilingue.',
        },
        {
          q: 'Quali formati di esportazione sono disponibili?',
          a: 'TXT, SRT, VTT, DOCX. Gli utenti registrati ottengono anche PDF e JSON. I timestamp in SRT e VTT si allineano alla registrazione originale.',
        },
      ]}

      ctaHeadline="Trasforma le interviste in testo pubblicabile"
      ctaSubtitle="Carica la tua registrazione e ottieni una trascrizione, un riepilogo e esportazioni pronte per l’articolo o il repository di ricerca."
      ctaButton="Carica un’intervista"

      relatedLinks={[
        { href: '/it/meeting-transcription',      label: 'Trascrizione Riunioni' },
        { href: '/it/podcast-transcription',      label: 'Trascrizione Podcast' },
        { href: '/it/voice-memo-to-text',         label: 'Memo Vocale in Testo' },
        { href: '/it/business-transcription',     label: 'Trascrizione Aziendale' },
        { href: '/it/lecture-transcription',      label: 'Trascrizione Lezioni' },
      ]}
    />
  )
}