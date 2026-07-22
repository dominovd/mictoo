import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Trascrizione delle registrazioni di Google Meet in testo | Mictoo',
  description:
    'Carica una registrazione autorizzata di Google Meet da Drive o una cattura dello schermo locale e ottieni una trascrizione, un riepilogo AI e esportazioni.',
  alternates: {
    canonical: 'https://mictoo.com/it/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione di Google Meet: Account Workspace o Gratuito | Mictoo',
    description: 'Registrazione da Drive o cattura dello schermo da Meet gratuito. Entrambi funzionano.',
    url: 'https://mictoo.com/it/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione di Google Meet',
    description: 'Qualsiasi livello di account, una pagina di caricamento.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Google Meet · Cattura da Drive o locale · Gratuito"
      h1First="Trascrizione di Google Meet"
      h1Second="Registrazioni da Drive e catture locali in testo"
      subtitle="Carica una registrazione di Google Meet da Drive o una cattura locale che sei autorizzato a fare. La disponibilità della registrazione dipende dall’edizione Workspace dell’host, dalle autorizzazioni e dalle impostazioni dell’amministratore."
      currentHref="/it/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/it/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/it/meeting-transcription' },
      ]}

      howItWorksTitle="Come funziona la trascrizione di Google Meet"
      steps={[
        {
          icon: 'folder',
          title: 'Ottieni la registrazione',
          desc: 'Registrazione Workspace idonea: Drive › Il mio Drive › Registrazioni di Meet. In alternativa, utilizza una cattura locale autorizzata che rispetti le regole di consenso dei partecipanti.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'MP4 o M4A funzionano entrambi. Per MP4 di grandi dimensioni, estrai prima l’audio con ffmpeg o accedi per la suddivisione automatica.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione, riepilogo, esportazioni',
          desc: 'Ottieni una trascrizione con timestamp, un riepilogo AI e esportazioni in TXT/SRT/VTT/DOCX. Il tempo di elaborazione dipende dalla durata e dalla dimensione del file.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di Google Meet"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Ciao team, grazie per essere qui. Breve aggiornamento sul piano di lancio del Q3 prima di andare all’offsite la prossima settimana.' },
        { t: '0:10',  line: 'Il marketing ha finalizzato il testo della pagina di destinazione. L’ingegneria è in linea per il blocco delle funzionalità di venerdì.' },
        { t: '0:22',  line: 'I documenti di supporto sono l’elemento a rischio. Siamo indietro di circa tre giorni e dobbiamo recuperare prima del lancio.' },
        { t: '0:33',  line: 'Posso spostare Anna dai documenti di onboarding per aiutare questa settimana. Dovrebbe colmare il divario.' },
        { t: '0:44',  line: 'Ottimo. Secondo argomento, le modifiche alla pagina dei prezzi di cui abbiamo discusso. Qualcuno ha preoccupazioni prima di pubblicarle?' },
        { t: '0:56',  line: 'L’unica cosa che segnalo è la presentazione del livello enterprise. Sembra un po’ sottile per il prezzo.' },
        { t: '1:08',  line: 'Punto giusto. Lasciami rivedere quella sezione questa settimana e condividere una versione rivista venerdì.' },
      ]}
      summaryPoints={[
        'Il lancio del Q3 sta procedendo bene, blocco delle funzionalità venerdì.',
        'I documenti di supporto sono indietro di 3 giorni (rischio).',
        'Anna riassegnata per chiudere il divario nei documenti.',
        'La presentazione del livello enterprise necessita di revisione.',
      ]}
      actionItems={[
        'Riassegnare Anna ai documenti di supporto questa settimana',
        'Rivedere la presentazione del livello enterprise entro venerdì',
        'Confermare il blocco delle funzionalità nella riunione di venerdì',
      ]}

      whyTitle="Perché Mictoo per la trascrizione di Google Meet"
      whyCards={[
        {
          icon: 'lock',
          title: 'Funziona con un file multimediale',
          desc: 'Carica una registrazione da Drive o una cattura locale autorizzata senza collegare Mictoo al tuo account Google.',
        },
        {
          icon: 'target',
          title: 'Testo con timestamp per revisione',
          desc: 'Controlla nomi e termini tecnici rispetto alla registrazione, quindi esporta la trascrizione corretta nel formato di cui hai bisogno.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI sempre incluso',
          desc: 'Il riepilogo della trascrizione AI di Workspace è una funzione a pagamento separata. Il nostro è incluso con ogni trascrizione.',
        },
        {
          icon: 'globe',
          title: 'Traduci in oltre 50 lingue',
          desc: 'Riepilogo della riunione in diverse lingue senza un fornitore di traduzione.',
        },
      ]}

      scenariosTitle="Scenari comuni di Meet"
      scenarios={[
        { icon: 'chat',      title: 'Standup / sincronizzazione' },
        { icon: 'briefcase', title: 'Revisione del cliente' },
        { icon: 'search',    title: 'Intervista utente' },
        { icon: 'users',     title: 'Tutti insieme' },
        { icon: 'headset',   title: 'Chiamata di supporto' },
        { icon: 'globe',     title: 'Multilingue' },
      ]}

      tipsTitle="Suggerimenti per le registrazioni di Google Meet"
      tips={[
        'Le registrazioni di Meet di Workspace vengono salvate in Drive › Registrazioni di Meet.',
        'Livello gratuito: QuickTime (Mac) o OBS (Win/Linux) funzionano bene.',
        'MP4 di grandi dimensioni? Estrai l’audio: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Accedi per la suddivisione automatica di riunioni lunghe.',
      ]}

      guidesTitle="Altre piattaforme di riunione"
      guides={[
        { href: '/it/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Cloud + Locale + M4A' },
        { href: '/it/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'Percorsi OneDrive + SharePoint' },
        { href: '/it/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Qualsiasi piattaforma, un caricamento' },
        { href: '/it/webinar-transcription',       icon: 'monitor', title: 'Webinar',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Ho bisogno di Google Workspace per registrare una chiamata di Meet?',
          a: 'La disponibilità della registrazione di Google dipende dall’edizione dell’account host, dal ruolo nella riunione, dalle impostazioni dell’amministratore e dalle autorizzazioni. Le registrazioni idonee vengono salvate in Drive. Se fai una cattura locale, ottieni il consenso dei partecipanti richiesto e segui le politiche applicabili.',
        },
        {
          q: 'Dove vengono salvate le registrazioni di Meet di Workspace?',
          a: 'Nel Drive dell’organizzatore della riunione: Il mio Drive › Registrazioni di Meet. L’MP4 di solito appare entro pochi minuti dalla fine della riunione. Viene inviata una notifica via email quando è pronta.',
        },
        {
          q: 'Dovrei usare la trascrizione di Meet o caricare la registrazione?',
          a: 'Usa la trascrizione di Meet quando è disponibile e soddisfa le tue esigenze. Caricare il media è utile quando desideri esportazioni da Mictoo, traduzione o una trascrizione aggiuntiva da rivedere. L’accuratezza varia con l’audio.',
        },
        {
          q: 'La mia registrazione di Meet è superiore a 60 MB. Cosa faccio ora?',
          a: 'Estrai solo l’audio con ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. Oppure accedi per la suddivisione automatica di file lunghi fino a circa 3 ore.',
        },
        {
          q: 'Posso ottenere un riepilogo AI della chiamata di Meet?',
          a: 'Sì. Il riepilogo AI appare automaticamente accanto alla trascrizione. Ottima prima bozza per l’email di riepilogo o il documento di follow-up.',
        },
        {
          q: 'Mictoo identifica chi sta parlando in Meet?',
          a: 'No. L’attuale trascrizione è testo continuo con timestamp per riga e senza etichette automatiche per gli oratori.',
        },
        {
          q: 'Le registrazioni di Meet vengono conservate sui vostri server?',
          a: 'No. I flussi audio vengono inviati al fornitore di trascrizione, elaborati una sola volta e scartati. Solo la trascrizione persiste sugli account con accesso.',
        },
      ]}

      ctaHeadline="Trasforma le chiamate di Meet in testo pulito"
      ctaSubtitle="Carica una registrazione autorizzata di Drive o una cattura locale per testo, riepilogo ed esportazioni."
      ctaButton="Carica registrazione di Meet"

      relatedLinks={[
        { href: '/it/meeting-transcription',       label: 'Trascrizione di Meeting' },
        { href: '/it/zoom-transcription',          label: 'Trascrizione di Zoom' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione di Teams' },
        { href: '/it/webinar-transcription',       label: 'Trascrizione di Webinar' },
        { href: '/it/business-transcription',      label: 'Trascrizione di Business' },
      ]}
    />
  )
}