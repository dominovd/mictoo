import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Trascrizione di Riunioni Aziendali e Riepilogo AI | Mictoo',
  description:
    'Trasforma le registrazioni autorizzate delle riunioni interne in trascrizioni con timestamp, riepiloghi AI e documenti di riepilogo esportabili.',
  alternates: {
    canonical: 'https://mictoo.com/it/business-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione Aziendale: Riunioni Interne in Testo | Mictoo',
    description: 'Trascrivi le riunioni interne dell’azienda senza configurazione IT.',
    url: 'https://mictoo.com/it/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione Aziendale',
    description: 'Riunioni 1:1 tra fondatori, riunioni generali, briefing esecutivi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Fondatori · Esecutivi · Piccole squadre · Gratuito"
      h1First="Trascrizione Aziendale"
      h1Second="Riunioni 1:1 tra fondatori, riunioni generali, briefing esecutivi"
      subtitle="Uno strumento pratico di trascrizione per riunioni interne autorizzate. Carica la registrazione, rivedi la trascrizione e il riepilogo AI, quindi esporta un riepilogo per il tuo team."
      currentHref="/it/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/it/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/it/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="Come funziona la trascrizione aziendale"
      steps={[
        {
          icon: 'folder',
          title: 'Esporta la registrazione',
          desc: 'Da Zoom, Teams, Meet, Webex, o qualsiasi cosa utilizzi la tua azienda. MP4 o M4A audio solo funzionano entrambi.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'Carica una registrazione che la tua organizzazione ti consente di elaborare. Non è necessaria alcuna installazione software o integrazione di directory.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione, riepilogo, azioni',
          desc: 'Trascrizione con timestamp, riepilogo AI, esportazione DOCX pronta per l’email di riepilogo.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di una riunione aziendale"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Grazie a tutti per aver trovato il tempo. Questo è il nostro check-in strategico Q3, e abbiamo circa un’ora bloccata.' },
        { t: '0:10',  line: 'Iniziamo con l’aggiornamento generale. I ricavi sono superiori dell’otto percento rispetto al piano, principalmente grazie all’espansione nel mercato medio.' },
        { t: '0:22',  line: 'Il nuovo movimento enterprise è più lento di quanto avevamo previsto. Due affari sono slittati dal Q2 al Q3.' },
        { t: '0:35',  line: 'Dobbiamo discutere se raddoppiare gli sforzi sul mercato medio o spingere di più sulla prontezza enterprise questo trimestre.' },
        { t: '0:48',  line: 'La mia opinione: il mercato medio sta funzionando, e non dovremmo distrarre il team inseguendo ancora il segmento enterprise.' },
        { t: '1:02',  line: 'D’accordo. Fissiamo un obiettivo di trenta nuovi account nel mercato medio entro la fine del Q3 e rivalutiamo l’enterprise nella pianificazione del Q4.' },
        { t: '1:14',  line: 'Un altro argomento prima di concludere. La roadmap ingegneristica per lo stesso trimestre, che colleghiamo a questi impegni dei clienti.' },
      ]}
      summaryPoints={[
        'Ricavi superiori dell’8% rispetto al piano, guidati dal mercato medio.',
        'Movimento enterprise in calo (2 affari spostati dal Q2 al Q3).',
        'Decisione: raddoppiare gli sforzi sul mercato medio questo trimestre.',
        'Obiettivo: 30 nuovi account nel mercato medio entro la fine del Q3.',
      ]}
      actionItems={[
        'Fissare obiettivo di 30 account nel mercato medio',
        'Rivalutare il movimento enterprise nella pianificazione del Q4',
        'Allineare la roadmap ingegneristica agli impegni dei clienti',
      ]}

      whyTitle="Perché Mictoo per la trascrizione aziendale"
      whyCards={[
        {
          icon: 'lock',
          title: 'Nessuna installazione software',
          desc: 'Il flusso di lavoro del browser non richiede un client desktop o integrazione di directory. Le politiche della tua organizzazione si applicano comunque.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo pronto per l’email',
          desc: 'Il riepilogo AI fornisce la bozza del riepilogo in pochi secondi. Riduci ciò a cui ti sei già impegnato, mantieni ciò che necessita di escalation.',
        },
        {
          icon: 'shield',
          title: 'Registrazioni non memorizzate',
          desc: 'I flussi audio vengono inviati al fornitore di trascrizione e vengono eliminati dopo l’elaborazione. Solo la trascrizione persiste sugli account con accesso effettuato.',
        },
        {
          icon: 'globe',
          title: 'Traduci per team internazionali',
          desc: 'Riunione in inglese ma il riepilogo deve andare a una filiale tedesca? Un clic.',
        },
      ]}

      scenariosTitle="Scenari aziendali comuni"
      scenarios={[
        { icon: 'briefcase', title: 'Briefing esecutivo' },
        { icon: 'users',     title: 'Riunioni generali' },
        { icon: 'chat',      title: 'Riunioni 1:1 tra fondatori' },
        { icon: 'target',    title: 'Strategia fuori sede' },
        { icon: 'search',    title: 'Aggiornamento del consiglio' },
        { icon: 'headset',   title: 'Escalation cliente' },
      ]}

      tipsTitle="Suggerimenti per registrazioni interne"
      tips={[
        'Preferisci esportazioni audio solo quando la tua piattaforma le offre.',
        'Per video riunioni MP4 oltre 60 MB, estrai prima l’audio con ffmpeg.',
        'Usa il rilevamento automatico per chiamate di leadership multilingue.',
        'Salva la trascrizione nella cronologia per costruire un archivio ricercabile.',
      ]}

      guidesTitle="Guida per scegliere la piattaforma giusta"
      guides={[
        { href: '/it/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Registrazione Cloud, audio M4A solo' },
        { href: '/it/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Percorso OneDrive o SharePoint' },
        { href: '/it/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Registrazione Drive, soluzione gratuita' },
        { href: '/it/meeting-transcription#tool',  icon: 'file',  title: 'Altro',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: 'La registrazione della mia azienda viene inviata ai vostri server?',
          a: 'I flussi audio vengono inviati al fornitore di trascrizione (Groq/Replicate/Deepgram/OpenAI a seconda del routing), vengono elaborati una sola volta e vengono eliminati dalla memoria. Non scriviamo mai l’audio su disco. Solo la trascrizione di testo persiste, e solo se accedi e la salvi.',
        },
        {
          q: 'Ho bisogno di approvazione per caricare una registrazione aziendale?',
          a: 'Dipende dalle politiche della tua organizzazione e dalle informazioni nella registrazione. Mictoo non richiede installazione software, ma dovresti ottenere qualsiasi autorizzazione necessaria prima di inviare media aziendali a un fornitore di trascrizione esterno.',
        },
        {
          q: 'Posso usare Mictoo per settori regolamentati?',
          a: 'Controlla i tuoi requisiti specifici di conformità. Non offriamo un BAA firmato o un rapporto SOC 2. Per ambienti rigorosamente regolamentati, usa uno strumento di trascrizione completamente auto-ospitato.',
        },
        {
          q: 'Posso ottenere un riepilogo AI per l’email di riepilogo?',
          a: 'Sì. Il riepilogo AI appare automaticamente insieme alla trascrizione. Una solida prima bozza per l’email di follow-up o il documento Notion.',
        },
        {
          q: 'Cosa succede se la riunione supera i 60 MB?',
          a: 'Accedi per abilitare l’auto-split (fino a circa 3 ore). Oppure estrai l’audio dal video con ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, riduce la dimensione del file di 5-15 volte.',
        },
        {
          q: 'Posso tradurre la trascrizione per un team internazionale?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua di destinazione e fai clic su Traduci. Utile per filiali in lingue diverse.',
        },
        {
          q: 'Quali formati di esportazione funzionano per un’email di riepilogo?',
          a: 'TXT per incollare nel corpo dell’email, DOCX per un allegato appropriato, PDF (accesso effettuato) per archiviare. Il riepilogo è disponibile separatamente.',
        },
      ]}

      ctaHeadline="Trasforma le riunioni interne in documenti di riepilogo"
      ctaSubtitle="Riunioni 1:1 tra fondatori, riunioni generali e briefing esecutivi. Carica media autorizzati per una trascrizione e un riepilogo."
      ctaButton="Carica una riunione aziendale"

      relatedLinks={[
        { href: '/it/meeting-transcription',       label: 'Trascrizione di Riunioni' },
        { href: '/it/zoom-transcription',          label: 'Trascrizione Zoom' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams' },
        { href: '/it/google-meet-transcription',   label: 'Trascrizione Google Meet' },
        { href: '/it/interview-transcription',     label: 'Trascrizione di Interviste' },
      ]}
    />
  )
}