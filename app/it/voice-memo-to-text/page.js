import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Trascrizione di Memo Vocali per iPhone e Android | Mictoo',
  description:
    'Carica una registrazione vocale di iPhone o Android e ottieni testo con timestamp, un riepilogo AI e esportazioni modificabili.',
  alternates: {
    canonical: 'https://mictoo.com/it/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione di Memo Vocali: Gratuito | Mictoo',
    description: 'Carica la tua registrazione vocale di iPhone o Android, ottieni testo pulito.',
    url: 'https://mictoo.com/it/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione di Memo Vocali',
    description: 'Trascrizione gratuita per registrazioni vocali telefoniche.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="iPhone · Android · Gratuito"
      h1First="Trascrizione di Memo Vocali"
      h1Second="Trascrizione gratuita per registrazioni vocali telefoniche"
      subtitle="Carica il tuo Memo Vocale di iPhone, registrazione vocale Android, nota vocale WhatsApp o messaggio vocale Telegram. Ottieni una trascrizione pulita in pochi secondi. Nessuna registrazione, nessun costo al minuto."
      currentHref="/it/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Come funziona la trascrizione dei memo vocali"
      steps={[
        {
          icon: 'folder',
          title: 'Condividi la registrazione',
          desc: 'iPhone: foglio di condivisione da Memo Vocali. Android: file dall’app File. WhatsApp: inoltra come file.',
        },
        {
          icon: 'upload',
          title: 'Carica il file qui',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) funzionano direttamente.',
        },
        {
          icon: 'editPen',
          title: 'Trascrizione in pochi secondi',
          desc: 'Un memo di 5 minuti si completa in circa 10 secondi. Il riepilogo AI trasforma idee confuse in un elenco di azioni chiaro.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di un memo vocale"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Okay, veloce memo vocale prima di dimenticare l’idea.' },
        { t: '0:04',  line: 'Quindi l’idea è di prendere il flusso di checkout e dividerlo in due passaggi chiari invece di un lungo modulo.' },
        { t: '0:13',  line: 'Passo uno, solo email e carta. Passo due, dettagli di spedizione dopo che vedono il numero di conferma.' },
        { t: '0:22',  line: 'Il motivo per cui questo è importante è che l’abbandono nel modulo attuale a pagina singola è intorno al trentaotto percento.' },
        { t: '0:32',  line: 'La maggior parte di quell’abbandono avviene nella sezione di spedizione, non nell’inserimento della carta, il che è controintuitivo.' },
        { t: '0:42',  line: 'Se spostiamo la spedizione dopo l’acquisto, probabilmente possiamo recuperare il dodici al quindici percento di quel traffico.' },
        { t: '0:52',  line: 'In termini di tempistiche, penso che siano due settimane di frontend, una settimana di backend, forse una settimana di test.' },
      ]}
      summaryPoints={[
        'Idea: dividere il flusso di checkout in due passaggi.',
        'Passo 1: email + carta. Passo 2: spedizione dopo conferma.',
        'Abbandono attuale: 38%, principalmente nella sezione di spedizione.',
        'Recupero stimato: 12-15% del traffico.',
      ]}
      actionItems={[
        'Bozza di mockup per checkout a due passaggi',
        'Verifica il 38% di abbandono nelle analisi',
        'Definisci ingegneria (~4 settimane totali)',
      ]}

      whyTitle="Perché scegliere Mictoo per i memo vocali"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per memo confusi',
          desc: 'I memo vocali sono disordinati per natura. Il riepilogo trasforma un flusso di pensieri di cinque minuti in un takeaway di due righe.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a nativo',
          desc: 'Apple Voice Memos scrive .m4a (AAC in MP4). Lo accettiamo direttamente, senza conversione.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga nativo',
          desc: 'Salva il messaggio vocale di Telegram dalla chat e carica il file .oga. Opus in OGG, gestito nativamente.',
        },
        {
          icon: 'globe',
          title: 'Traduci per note multilingue',
          desc: 'Memo nella tua lingua nativa, note in inglese per il team. Un clic.',
        },
      ]}

      scenariosTitle="Scenari comuni per i memo vocali"
      scenarios={[
        { icon: 'sparkles', title: 'Cattura idee' },
        { icon: 'chat',     title: 'Note di riunione' },
        { icon: 'editPen',  title: 'Scrittura di bozze' },
        { icon: 'book',     title: 'Diario' },
        { icon: 'phone',    title: 'Messaggio vocale' },
        { icon: 'globe',    title: 'Multilingue' },
      ]}

      tipsTitle="Suggerimenti per memo vocali più puliti"
      tips={[
        'Tieni il telefono vicino per ridurre il rumore ambientale.',
        'Per memo lunghi oltre 60 MB, accedi per la suddivisione automatica.',
        'Parla in una lingua per memo per la rilevazione più pulita.',
        'Dì "nuovo paragrafo" se vuoi che la trascrizione si interrompa lì.',
      ]}

      guidesTitle="Strumenti correlati"
      guides={[
        { href: '/it/m4a-to-text',        icon: 'file',  title: 'Formato M4A',       desc: 'Approfondimento su iPhone / GarageBand' },
        { href: '/it/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Approfondimento su messaggi vocali Telegram' },
        { href: '/it/dictation-to-text',  icon: 'editPen', title: 'Dettatura',      desc: 'Flusso di scrittura vocale' },
        { href: '/it/interview-transcription', icon: 'chat', title: 'Intervista',    desc: 'Intervista telefonica o di persona' },
      ]}

      faq={[
        {
          q: 'Posso trascrivere direttamente i Memo Vocali di iPhone?',
          a: 'Sì. Condividi il memo dall’app Memo Vocali (foglio di condivisione → salva in File o invia a te stesso) e carica il .m4a in Mictoo. Nessuna conversione necessaria.',
        },
        {
          q: 'Mictoo trascrive messaggi vocali di WhatsApp o Telegram?',
          a: 'Sì. Salva il messaggio vocale dalla chat (inoltra → salva come file) e caricalo. Le note vocali di WhatsApp sono .opus, le note vocali di Telegram sono .oga (entrambi sono contenitori OGG). Entrambi funzionano direttamente.',
        },
        {
          q: 'Qual è il limite di dimensione del file?',
          a: '25 MB in modo anonimo, 60 MB quando sei registrato. Un memo vocale di 60 minuti a bitrate tipico è di circa 20-30 MB, quindi la maggior parte rientra sotto il limite gratuito.',
        },
        {
          q: 'Mictoo trascrive memo vocali non in inglese?',
          a: 'Sì. Whisper large-v3 supporta più di 50 lingue. Per memo brevi o contenuti non in inglese, imposta esplicitamente la lingua per una rilevazione più pulita al primo passaggio.',
        },
        {
          q: 'Posso ottenere un riepilogo di un memo di brainstorming confuso?',
          a: 'Sì. Il riepilogo AI appare automaticamente accanto alla trascrizione. Ottimo per trasformare memo di flusso di coscienza in elenchi di azioni chiari.',
        },
        {
          q: 'I memo vocali sono memorizzati sui vostri server?',
          a: 'No. L’audio viene inviato al fornitore di trascrizione, elaborato una volta e scartato. Solo la trascrizione persiste se ti registri e la salvi.',
        },
        {
          q: 'Posso tradurre il mio memo vocale in un’altra lingua?',
          a: 'Sì. Scegli una lingua di destinazione e fai clic su Traduci dopo la trascrizione. GPT-4o-mini gestisce la traduzione e appare accanto all’originale.',
        },
      ]}

      ctaHeadline="Trasforma i memo vocali in testo e azioni"
      ctaSubtitle="iPhone, Android, note vocali WhatsApp, Telegram. Tutti i formati, un caricamento."
      ctaButton="Carica un memo vocale"

      relatedLinks={[
        { href: '/it/dictation-to-text',       label: 'Dettatura a Testo' },
        { href: '/it/interview-transcription', label: 'Trascrizione di Interviste' },
        { href: '/it/m4a-to-text',             label: 'M4A a Testo' },
        { href: '/it/ogg-to-text',             label: 'OGG a Testo' },
        { href: '/it/meeting-transcription',   label: 'Trascrizione di Riunioni' },
      ]}
    />
  )
}