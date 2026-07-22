import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Trascrizione Zoom per registrazioni cloud e locali | Mictoo',
  description:
    'Carica una registrazione MP4/M4A cloud o locale di Zoom e ottieni una trascrizione con timestamp, un riepilogo AI e file di esportazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione registrazione Zoom | Mictoo',
    description: 'Carica un MP4/M4A cloud o locale di Zoom e ottieni una trascrizione, un riepilogo e esportazioni.',
    url: 'https://mictoo.com/it/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione Zoom: Gratuita',
    description: 'Carica una registrazione Zoom e ottieni una trascrizione con timestamp.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Zoom · Cloud / Locale / Audio M4A · Gratuito"
      h1First="Trascrizione Zoom"
      h1Second="Registrazioni cloud e locali in testo"
      subtitle="Carica una registrazione MP4 di Zoom Cloud, un M4A solo audio o una registrazione locale. Ottieni una trascrizione con timestamp, un riepilogo AI, traduzione e file di esportazione in un unico flusso di lavoro."
      currentHref="/it/zoom-transcription"

      platforms={[
        { name: 'Cloud MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'Audio M4A',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Local MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/it/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/it/teams-meeting-transcription' },
        { name: 'Meeting hub',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/it/meeting-transcription' },
      ]}

      howItWorksTitle="Come funziona la trascrizione di Zoom"
      steps={[
        {
          icon: 'folder',
          title: 'Scarica da Zoom',
          desc: 'Cloud: zoom.us → Registrazioni → scarica MP4 o la versione "Audio Only (M4A)". Locale: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'L\'M4A solo audio è solitamente molto più piccolo dell\'MP4 ed evita di caricare la traccia video. Gratuito fino a 25 MB in modo anonimo, 60 MB se registrato.',
        },
        {
          icon: 'editPen',
          title: 'Rivedi ed esporta',
          desc: 'Il tempo di elaborazione dipende dalla durata, dalla dimensione del file e dalla domanda. Quando è completo, rivedi la trascrizione ed esporta un riepilogo, sottotitoli o un riepilogo DOCX.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di una riunione Zoom"
      exampleFileName="registrazione-cloud-zoom.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'Va bene, scusate per il ritardo a tutti. Zoom si è rifiutato di farmi entrare fino a quando non ho aggiornato. Iniziamo.' },
        { t: '0:10',  line: 'Oggi stiamo rivedendo il feedback sul prototipo della settimana scorsa e decidendo cosa dare priorità per lo sprint.' },
        { t: '0:22',  line: 'In generale, il feedback è stato positivo. Dodici su quindici partecipanti hanno capito il flusso senza aiuto.' },
        { t: '0:33',  line: 'I tre che si sono bloccati hanno tutti riscontrato lo stesso problema nella schermata delle impostazioni. Dobbiamo risolverlo per primo.' },
        { t: '0:45',  line: 'D\'accordo. Ho già una revisione del design in lavorazione. Dovrebbe essere pronta per la revisione entro giovedì.' },
        { t: '0:56',  line: 'In secondo luogo, a tutti è piaciuto il nuovo stato vuoto, ma nessuno ha trovato il pulsante di importazione. È sepolto troppo in profondità.' },
        { t: '1:08',  line: 'Spostiamo l\'importazione all\'azione principale nello stato vuoto. È una modifica di una riga per l\'ingegneria.' },
      ]}
      summaryPoints={[
        'Feedback sul prototipo: 12/15 hanno completato il flusso senza aiuto.',
        'Blocco: la schermata delle impostazioni ha confuso 3/15 partecipanti.',
        'Lo stato vuoto è stato ben accolto, ma il pulsante di importazione è difficile da trovare.',
        'Revisione del design entro giovedì.',
      ]}
      actionItems={[
        'Correggi la schermata delle impostazioni (revisione del design giovedì)',
        'Promuovi l\'importazione ad azione principale nello stato vuoto',
        'Condividi il prototipo rivisto nella riunione di venerdì',
      ]}

      whyTitle="Perché usare Mictoo con una registrazione Zoom"
      whyCards={[
        {
          icon: 'target',
          title: 'Una seconda trascrizione da rivedere',
          desc: 'Usa Mictoo quando desideri una trascrizione aggiuntiva e testo con timestamp per controllare nomi, terminologia e citazioni chiave.',
        },
        {
          icon: 'lock',
          title: 'Elabora file scaricati',
          desc: 'Mictoo non si connette al tuo account Zoom. Carica una registrazione cloud o locale per cui hai già il permesso di utilizzare.',
        },
        {
          icon: 'gear',
          title: 'Funziona anche con registrazioni locali',
          desc: 'La trascrizione integrata di Zoom è solo per il cloud. La registrazione locale non ottiene nulla. Mictoo funziona con entrambi.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo + Traduzione inclusi',
          desc: 'Il riepilogo AI appare automaticamente accanto alla trascrizione. Traduci in oltre 50 lingue con un clic.',
        },
      ]}

      scenariosTitle="Scenari comuni di Zoom"
      scenarios={[
        { icon: 'chat',      title: 'Chiamata con il cliente' },
        { icon: 'users',     title: 'Standup del team' },
        { icon: 'briefcase', title: 'Demo di vendita' },
        { icon: 'search',    title: 'Intervista con l\'utente' },
        { icon: 'book',      title: 'Webinar' },
        { icon: 'globe',     title: 'Chiamata multilingue' },
      ]}

      tipsTitle="Suggerimenti per le registrazioni Zoom"
      tips={[
        'Scarica la versione M4A "Audio Only". Stessa precisione, 10 volte più piccola.',
        'Il limite di registrazione cloud non viene speso per la nostra trascrizione (funzioniamo esternamente).',
        'La registrazione locale funziona anche. Cerca sotto ~/Documents/Zoom/.',
        'Per chiamate lunghe oltre 60 MB, accedi per la suddivisione automatica.',
      ]}

      guidesTitle="Piattaforme di riunione con guide proprie"
      guides={[
        { href: '/it/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + soluzione gratuita' },
        { href: '/it/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Percorsi OneDrive + SharePoint' },
        { href: '/it/meeting-transcription',       icon: 'video', title: 'Meeting hub', desc: 'Qualsiasi piattaforma, un caricamento' },
        { href: '/it/webinar-transcription',       icon: 'monitor', title: 'Webinar',  desc: 'Zoom Webinars, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Quali tipi di registrazione Zoom funzionano?',
          a: 'Registrazione cloud MP4 (video), registrazione cloud M4A (solo audio) e registrazione locale MP4. Anche l\'esportazione chat.txt se desideri il registro della chat, anche se non trascriviamo la chat.',
        },
        {
          q: 'Ho bisogno di Zoom Pro o superiore?',
          a: 'No. Qualsiasi registrazione Zoom funziona, anche da registrazione locale gratuita. La registrazione cloud di Zoom richiede Pro+, ma se hai già il file, a Mictoo non importa il tuo livello Zoom.',
        },
        {
          q: 'La mia registrazione cloud MP4 è superiore a 60 MB. E adesso?',
          a: 'Se la tua registrazione include un download Audio Only (M4A), usalo per evitare di caricare la traccia video. Disponibilità e dimensione del file dipendono dalle impostazioni di registrazione e dalla durata.',
        },
        {
          q: 'Dovrei usare la trascrizione audio di Zoom o Mictoo?',
          a: 'La trascrizione audio di Zoom è comoda quando la registrazione cloud e la trascrizione sono abilitate sul tuo account. Mictoo è utile per file locali, formati di esportazione aggiuntivi, traduzione o per produrre un\'altra trascrizione da rivedere. L\'accuratezza varia con la registrazione.',
        },
        {
          q: 'Mictoo identifica gli oratori di Zoom?',
          a: 'No. L\'attuale trascrizione è testo continuo con timestamp per riga e senza etichette automatiche "Oratore 1 / Oratore 2".',
        },
        {
          q: 'Dove salva la registrazione locale?',
          a: 'Per impostazione predefinita, ~/Documents/Zoom/ su Mac e %USERPROFILE%\\Documents\\Zoom\\ su Windows. Ogni riunione ottiene la propria cartella con l\'MP4 e l\'audio.m4a separato.',
        },
        {
          q: 'La mia registrazione Zoom è memorizzata sui vostri server?',
          a: 'No. Il file viene trasmesso al fornitore di trascrizione, elaborato una volta e rimosso dalla memoria. Solo la trascrizione persiste se accedi.',
        },
      ]}

      ctaHeadline="Trasforma le registrazioni Zoom in testo pulito"
      ctaSubtitle="Cloud MP4 o M4A, registrazione locale, qualsiasi livello Zoom. Gratuito per file."
      ctaButton="Carica registrazione Zoom"

      relatedLinks={[
        { href: '/it/meeting-transcription',       label: 'Trascrizione Riunioni' },
        { href: '/it/google-meet-transcription',   label: 'Trascrizione Google Meet' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams' },
        { href: '/it/webinar-transcription',       label: 'Trascrizione Webinar' },
        { href: '/it/interview-transcription',     label: 'Trascrizione Intervista' },
      ]}
    />
  )
}