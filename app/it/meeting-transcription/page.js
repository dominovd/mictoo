import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Trascrizione delle riunioni per qualsiasi piattaforma registrata | Mictoo',
  description:
    'Carica una registrazione autorizzata di una riunione da Zoom, Teams, Meet, Webex, Loom o Riverside per testo, riepilogo ed esportazioni.',
  alternates: {
    canonical: 'https://mictoo.com/it/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione delle riunioni: qualsiasi piattaforma, qualsiasi registrazione | Mictoo',
    description: 'Carica qualsiasi registrazione di riunione, ottieni una trascrizione. Gratuito.',
    url: 'https://mictoo.com/it/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione delle riunioni: qualsiasi piattaforma',
    description: 'Carica qualsiasi registrazione di riunione, ottieni una trascrizione.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Qualsiasi piattaforma · Gratuito · Nessuna registrazione"
      h1First="Trascrizione delle riunioni"
      h1Second="Una pagina di caricamento per qualsiasi piattaforma"
      subtitle="Carica una registrazione da Zoom, Teams, Google Meet, Webex, Loom o qualsiasi cattura dello schermo. Ottieni una trascrizione pulita con timestamp, riepilogo AI ed esportazioni."
      currentHref="/it/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/it/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/it/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="Come funziona la trascrizione delle riunioni"
      steps={[
        {
          icon: 'folder',
          title: 'Trova la registrazione della tua riunione',
          desc: 'Esporta o scarica la registrazione da qualsiasi piattaforma.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'Carica il tuo file in MP3, MP4, WAV o altri formati supportati.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione, riepilogo, esportazioni',
          desc: 'Ottieni una trascrizione con timestamp, riepilogo AI ed esporta file.',
        },
      ]}

      exampleTitle="Esempio di trascrizione e riepilogo"
      exampleFileName="registrazione-riunione.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Grazie a tutti per essere intervenuti. Rivediamo rapidamente i progressi della settimana scorsa prima di passare all’agenda di oggi.' },
        { t: '0:12',  line: 'Abbiamo lanciato il flusso di onboarding e abbiamo visto un aumento del dodici percento nell’attivazione rispetto alla baseline precedente.' },
        { t: '0:28',  line: 'Ottimo. Prossimo passo, dobbiamo risolvere il bug del checkout su mobile prima che colpisca altri clienti paganti.' },
        { t: '0:36',  line: 'Creerò un ticket e lo assegnerò al team entro la fine della giornata. Dovrebbe essere risolto entro lo sprint.' },
        { t: '0:44',  line: 'Dobbiamo anche discutere gli aggiornamenti della pagina dei prezzi. La versione attuale non sta convertendo come ci aspettavamo.' },
        { t: '0:55',  line: 'Condividerò una bozza entro la fine della giornata e possiamo rivederla insieme domani prima del meeting.' },
      ]}
      summaryPoints={[
        'Flusso di onboarding lanciato con aumento del 12% nell’attivazione.',
        'Bug del checkout su mobile da risolvere.',
        'Aggiornamenti della pagina dei prezzi da discutere.',
        'Bozza da condividere entro la fine della giornata e rivedere domani.',
      ]}
      actionItems={[
        'Creare ticket per il bug del checkout su mobile',
        'Condividere la bozza della pagina dei prezzi',
        'Rivedere la bozza domani',
      ]}

      whyTitle="Perché un caricamento indipendente dalla piattaforma aiuta"
      whyCards={[
        {
          icon: 'globe',
          title: 'Funziona su ogni piattaforma di riunione',
          desc: 'Carica da Zoom, Teams, Google Meet, Webex, Loom e altro.',
        },
        {
          icon: 'target',
          title: 'Un unico flusso di revisione',
          desc: 'Usa lo stesso layout con timestamp e opzioni di esportazione indipendentemente dalla piattaforma che ha creato la registrazione.',
        },
        {
          icon: 'lock',
          title: 'Funziona da un file autorizzato',
          desc: 'Mictoo elabora una registrazione per cui hai già il permesso di utilizzare; le politiche di accesso e download appartengono ancora alla piattaforma sorgente.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo e traduzione inclusi',
          desc: 'Ottieni riepiloghi AI e traduci le trascrizioni in oltre 50 lingue.',
        },
      ]}

      scenariosTitle="Scenari comuni di trascrizione delle riunioni"
      scenarios={[
        { icon: 'chat',      title: 'Email di riepilogo per i clienti' },
        { icon: 'search',    title: 'Note di ricerca utenti' },
        { icon: 'users',     title: 'Selezioni dei reclutatori' },
        { icon: 'briefcase', title: 'Archivi delle riunioni di team' },
        { icon: 'headset',   title: 'Escalation del supporto' },
        { icon: 'globe',     title: 'Riunioni multilingue' },
      ]}

      practicalTitle="Dove trovare una registrazione di riunione"
      practicalIntro="La posizione esatta dipende dalla piattaforma e dal tuo ruolo nella riunione. Scarica solo le registrazioni a cui sei autorizzato ad accedere e segui le politiche di consenso dei partecipanti e dell’organizzazione prima di caricare."
      practicalItems={[
        {
          title: 'Registrazione cloud o locale di Zoom',
          desc: 'Le registrazioni cloud sono disponibili dal portale web di Zoom su account a pagamento idonei. Le registrazioni sul computer sono normalmente salvate nella cartella locale di Zoom.',
        },
        {
          title: 'Registrazione di Google Meet',
          desc: 'Le registrazioni di Meet idonee sono salvate nella cartella Il mio Drive › Registrazioni di Meet dell’organizzatore. La disponibilità dipende dall’edizione e dalle impostazioni dell’amministratore.',
        },
        {
          title: 'Registrazione di Microsoft Teams',
          desc: 'Trova la registrazione nella chat della riunione, in OneDrive o nel sito SharePoint del canale. I permessi di download possono essere limitati dalla politica.',
        },
        {
          title: 'Webex, Loom e Riverside',
          desc: 'Usa il controllo di esportazione o download della piattaforma per ottenere un file audio o video, quindi conferma che il file venga riprodotto correttamente prima del caricamento.',
        },
      ]}

      tipsTitle="Suggerimenti per migliori trascrizioni delle riunioni"
      tips={[
        'Preferisci esportazioni solo audio quando desideri un caricamento più piccolo.',
        'Registra in uno spazio tranquillo e riduci il rumore di fondo.',
        'Usa il rilevamento automatico per chiamate multilingue o in lingue miste.',
        'Rivedi nomi e terminologia dopo la trascrizione.',
      ]}

      guidesTitle="Guida per scegliere la piattaforma giusta"
      guides={[
        { href: '/it/zoom-transcription',          icon: 'video', title: 'Riunioni Zoom',    desc: 'Guida al download passo-passo' },
        { href: '/it/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Guida al download passo-passo' },
        { href: '/it/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Guida al download passo-passo' },
        { href: '/it/meeting-transcription#tool',  icon: 'file',  title: 'Altre piattaforme',  desc: 'Guarda tutte le guide e i suggerimenti' },
      ]}

      faq={[
        {
          q: 'Posso trascrivere una registrazione di Zoom, Meet o Teams?',
          a: 'Sì. Qualsiasi file audio o video da qualsiasi piattaforma di riunione funziona. Basta scaricare la registrazione e trascinarla qui. Accettiamo MP3, MP4, WAV, M4A, WEBM, FLAC e altro.',
        },
        {
          q: 'La trascrizione delle riunioni è gratuita?',
          a: 'Sì. File fino a 25 MB in modo anonimo, 60 MB quando si è registrati. Le riunioni più lunghe possono essere suddivise automaticamente per gli utenti registrati. Nessuna carta di credito richiesta.',
        },
        {
          q: 'Mictoo identifica i diversi relatori?',
          a: 'No. L’attuale trascrizione è testo continuo con timestamp per riga e senza etichette automatiche "Relatore 1 / Relatore 2".',
        },
        {
          q: 'Le registrazioni delle riunioni vengono memorizzate?',
          a: 'No. Il file viene trasmesso al fornitore di trascrizioni, elaborato una sola volta e rimosso dalla memoria. La trascrizione viene salvata solo se accedi e la aggiungi alla tua cronologia.',
        },
        {
          q: 'Quali formati di esportazione sono disponibili?',
          a: 'TXT (testo semplice), SRT e VTT (sottotitoli con timestamp allineati alla registrazione), e DOCX (documento Word). Gli utenti registrati ottengono anche PDF e JSON.',
        },
        {
          q: 'Posso tradurre la trascrizione?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua di destinazione e fai clic su Traduci. Utile per inviare email di riepilogo ai partecipanti nella loro lingua preferita, o per archiviare riunioni tra lingue in una singola lingua di lavoro.',
        },
      ]}

      ctaHeadline="Trasforma la tua prossima riunione in note chiare"
      ctaSubtitle="Carica una registrazione da qualsiasi piattaforma e ottieni una trascrizione, un riepilogo e esportazioni in pochi secondi."
      ctaButton="Carica una registrazione di riunione"

      relatedLinks={[
        { href: '/it/interview-transcription',  label: 'Trascrizione di interviste' },
        { href: '/it/podcast-transcription',    label: 'Trascrizione di podcast' },
        { href: '/it/lecture-transcription',    label: 'Trascrizione di lezioni' },
        { href: '/it/business-transcription',   label: 'Trascrizione aziendale' },
        { href: '/it/voice-memo-to-text',       label: 'Memo vocali in testo' },
      ]}
    />
  )
}