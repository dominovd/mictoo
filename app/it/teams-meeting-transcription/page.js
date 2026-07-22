import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Trascrizione delle riunioni di Teams da registrazioni MP4 | Mictoo',
  description:
    'Carica un MP4 di Microsoft Teams da OneDrive o SharePoint e ottieni una trascrizione con timestamp, un riepilogo AI e file di esportazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione delle riunioni di Teams da MP4 | Mictoo',
    description: 'Carica una registrazione di Teams da OneDrive o SharePoint e ottieni testo, riepilogo ed esportazioni.',
    url: 'https://mictoo.com/it/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione delle riunioni di Teams',
    description: 'Carica un MP4 da OneDrive o SharePoint e ottieni una trascrizione.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Teams · OneDrive / SharePoint · M365 · Gratuito"
      h1First="Trascrizione delle riunioni di Teams"
      h1Second="Da MP4 di OneDrive o SharePoint a testo"
      subtitle="Scarica la registrazione di Teams a cui hai accesso, quindi carica l’MP4 per una trascrizione con timestamp, un riepilogo AI e file di esportazione. La disponibilità della registrazione dipende dalla tua licenza Microsoft 365 e dalle politiche dell’organizzazione."
      currentHref="/it/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/it/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/it/meeting-transcription' },
      ]}

      howItWorksTitle="Come funziona la trascrizione delle riunioni di Teams"
      steps={[
        {
          icon: 'folder',
          title: 'Trova la registrazione',
          desc: 'Riunione privata: OneDrive › I miei file › Registrazioni. Riunione di canale: il sito SharePoint del canale.',
        },
        {
          icon: 'upload',
          title: 'Trascina l’MP4 qui',
          desc: 'Scarica da OneDrive o SharePoint e trascina qui. Per file superiori a 60 MB, estrai l’audio o accedi per la divisione automatica.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione, riepilogo, esportazioni',
          desc: 'Trascrizione con timestamp, riepilogo AI, TXT/SRT/VTT/DOCX. Una chiamata di Teams di 30 minuti si conclude in circa un minuto.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di una riunione di Teams"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Bene, benvenuti alla revisione dello sprint. Cammineremo attraverso ciò che è stato rilasciato, ciò che non lo è stato e perché.' },
        { t: '0:11',  line: 'Il team pagamenti ha rilasciato il nuovo flusso di rimborso martedì. L’adozione è superiore alle aspettative, circa il quaranta percento dei biglietti idonei.' },
        { t: '0:24',  line: 'Il team di ricerca ha incontrato una pipeline di indicizzazione più lunga del previsto. Rilascio spostato al prossimo sprint.' },
        { t: '0:35',  line: 'Va bene, ma dobbiamo comunicare il ritardo al team di customer success in modo che possano gestire le aspettative.' },
        { t: '0:47',  line: 'Invierò una nota nel canale condiviso oggi con la timeline rivista e il motivo.' },
        { t: '0:58',  line: 'In terzo luogo, il tasso di crash mobile è leggermente aumentato. Ancora entro SLA, ma vale la pena monitorarlo in questo sprint.' },
        { t: '1:09',  line: 'Il team dispositivi è già al lavoro. Dovremmo avere una causa principale entro mercoledì e una soluzione entro la fine dello sprint.' },
      ]}
      summaryPoints={[
        'Flusso di rimborso rilasciato martedì, 40% di adozione.',
        'Il team di ricerca ha ritardato di uno sprint (pipeline di indicizzazione).',
        'Il tasso di crash mobile è aumentato ma rimane entro SLA.',
        'Causa principale per il crash mobile entro mercoledì.',
      ]}
      actionItems={[
        'Invia nota di ritardo al canale di customer success',
        'Indaga sulla causa principale del crash mobile (mercoledì)',
        'Conferma la nuova data di rilascio del team di ricerca',
      ]}

      whyTitle="Perché Mictoo per le registrazioni di Teams"
      whyCards={[
        {
          icon: 'folder',
          title: 'Funziona con registrazioni scaricate',
          desc: 'Utilizza un MP4 di cui hai già il permesso di scaricare da OneDrive o dal sito SharePoint del canale.',
        },
        {
          icon: 'target',
          title: 'Controlla nomi e terminologia',
          desc: 'L’output con timestamp rende più facile trovare e correggere nomi di prodotto, acronimi e termini specialistici.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo accanto alla trascrizione',
          desc: 'Genera una bozza di riepilogo e conservala accanto al testo completo per la revisione prima della condivisione.',
        },
        {
          icon: 'globe',
          title: 'Traduci registrazioni in lingue diverse',
          desc: 'Registrazione in una lingua, riepilogo necessario in un’altra. Un clic, oltre 50 lingue.',
        },
      ]}

      scenariosTitle="Scenari comuni di Teams"
      scenarios={[
        { icon: 'chat',      title: 'Revisione dello sprint' },
        { icon: 'briefcase', title: 'Sincronizzazione del consiglio' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'Revisione OKR' },
        { icon: 'headset',   title: 'Escalation di supporto' },
        { icon: 'globe',     title: 'Chiamata internazionale' },
      ]}

      tipsTitle="Suggerimenti per le registrazioni di Teams"
      tips={[
        'Le riunioni private vengono salvate su OneDrive (account dell’organizzatore).',
        'Le riunioni di canale vengono salvate sul sito SharePoint del canale.',
        'I tenant GCC / enterprise potrebbero limitare i download: chiedi a IT.',
        'Per riunioni lunghe, estrai l’audio con ffmpeg per ridurre il file.',
      ]}

      guidesTitle="Altre piattaforme di riunione"
      guides={[
        { href: '/it/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Cloud + Locale + M4A' },
        { href: '/it/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + gratuito' },
        { href: '/it/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Qualsiasi piattaforma, un caricamento' },
        { href: '/it/business-transcription',    icon: 'briefcase', title: 'Business', desc: 'Registrazioni interne autorizzate' },
      ]}

      faq={[
        {
          q: 'Dove vengono salvate le registrazioni di Teams?',
          a: 'Riunioni private: nel OneDrive dell’organizzatore sotto I miei file › Registrazioni. Riunioni di canale: nel sito SharePoint che supporta quel canale, sotto la cartella del canale in Documenti.',
        },
        {
          q: 'Ho bisogno di Teams Premium per caricare una registrazione?',
          a: 'Mictoo elabora il file multimediale scaricato piuttosto che connettersi al tuo account Teams. La tua capacità di registrare, trascrivere o scaricare all’interno di Teams dipende ancora dalla tua licenza Microsoft 365, dal ruolo nella riunione e dalle politiche dell’organizzazione.',
        },
        {
          q: 'Dovrei usare la trascrizione di Teams o caricare la registrazione?',
          a: 'Usa la trascrizione di Teams quando è disponibile e soddisfa le tue esigenze. Caricare la registrazione è utile quando desideri esportazioni Mictoo, traduzione o una trascrizione aggiuntiva da rivedere. L’accuratezza varia con la registrazione.',
        },
        {
          q: 'Il mio MP4 di Teams è superiore a 60 MB. Cosa faccio?',
          a: 'Estrai l’audio: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Oppure accedi per la divisione automatica di file fino a circa 3 ore.',
        },
        {
          q: 'Posso usare Mictoo per tenant GCC / enterprise?',
          a: 'Alcuni tenant enterprise e governativi limitano i download o l’elaborazione esterna. Segui la politica della tua organizzazione e verifica con IT o con il proprietario della registrazione prima di scaricare o caricare i media della riunione.',
        },
        {
          q: 'Mictoo identifica i relatori di Teams?',
          a: 'No. L’attuale trascrizione è testo continuo con timestamp per riga e senza etichette automatiche per i relatori.',
        },
        {
          q: 'Le registrazioni di Teams sono memorizzate sui vostri server?',
          a: 'No. Il file viene trasmesso al fornitore di trascrizione, elaborato una sola volta e poi eliminato. Solo la trascrizione persiste sugli account effettuati accesso.',
        },
      ]}

      ctaHeadline="Trasforma le riunioni di Teams in testo pulito"
      ctaSubtitle="Carica una registrazione autorizzata di OneDrive o SharePoint e ottieni testo, riepilogo ed esportazioni."
      ctaButton="Carica registrazione di Teams"

      relatedLinks={[
        { href: '/it/meeting-transcription',       label: 'Trascrizione delle riunioni' },
        { href: '/it/zoom-transcription',          label: 'Trascrizione di Zoom' },
        { href: '/it/google-meet-transcription',   label: 'Trascrizione di Google Meet' },
        { href: '/it/business-transcription',      label: 'Trascrizione Business' },
        { href: '/it/webinar-transcription',       label: 'Trascrizione di Webinar' },
      ]}
    />
  )
}