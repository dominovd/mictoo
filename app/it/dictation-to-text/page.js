import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dettatura a Testo per Bozze Vocali Registrate | Mictoo',
  description:
    'Registra una bozza vocale, carica il file e ottieni testo modificabile con timestamp e opzioni di esportazione per il tuo flusso di lavoro di scrittura.',
  alternates: {
    canonical: 'https://mictoo.com/it/dictation-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Dettatura a Testo: Gratuito | Mictoo',
    description: 'Registra una bozza a voce, carica il file, ottieni testo pulito.',
    url: 'https://mictoo.com/it/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dettatura a Testo',
    description: 'Scrittura vocale per professionisti.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Scrittori · Professionisti · Gratuito"
      h1First="Dettatura a Testo"
      h1Second="Scrittura vocale per chiunque pensi più velocemente di quanto scriva"
      subtitle="Registra una bozza con il tuo telefono, laptop o qualsiasi registratore vocale. Carica il file. Ottieni testo pulito e punteggiato pronto da incollare nel tuo editor. Maggiore accuratezza rispetto alla dettatura integrata del telefono per contenuti lunghi."
      currentHref="/it/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="Come funziona la dettatura a testo"
      steps={[
        {
          icon: 'folder',
          title: 'Registra la tua bozza',
          desc: 'Qualsiasi registratore: memo vocali del telefono, registratore vocale del laptop o un’app di dettatura dedicata.',
        },
        {
          icon: 'upload',
          title: 'Carica il file qui',
          desc: 'M4A (iPhone), MP3 (Android), WAV (registratore). Gratuito fino a 25 MB in modo anonimo, 60 MB se registrato.',
        },
        {
          icon: 'editPen',
          title: 'Testo pulito, pronto da incollare',
          desc: 'Punteggiatura automatica, interruzioni di frase e formattazione. Passa alla modalità Editor per modifiche prima dell’esportazione.',
        },
      ]}

      exampleTitle="Esempio di bozza dettata"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Capitolo tre. La mattina del processo.' },
        { t: '0:06',  line: 'Alex aveva dormito a malapena. Non per ansia, esattamente, ma per la strana calma che segue una lunga preparazione.' },
        { t: '0:20',  line: 'Per sei mesi, ogni ora di veglia era stata consumata dal caso. E ora, all’improvviso, non c’era più nulla da fare se non presentarsi.' },
        { t: '0:36',  line: 'Il tribunale era a tre isolati dal suo appartamento. Camminò lentamente, lasciando che il freddo dell’aria di marzo le attraversasse.' },
        { t: '0:50',  line: 'Quando raggiunse i gradini, i giornalisti erano già radunati, in attesa di un volto che riconoscessero.' },
        { t: '1:04',  line: 'Tenne la testa bassa e li superò. Ci sarebbe stato tempo per le domande dopo. Non prima.' },
        { t: '1:18',  line: 'Dentro, la hall era per lo più vuota. Alcuni impiegati, un custode e la guardia di sicurezza che aveva visto ogni giorno questa settimana.' },
      ]}
      summaryPoints={[
        'Apertura del capitolo 3: mattina del processo.',
        'Personaggio: Alex, protagonista, insonne non ansioso.',
        'Ambientazione: fredda mattina di marzo, tribunale a tre isolati di distanza.',
        'Presenza dei media all’esterno; hall vuota all’interno.',
      ]}
      actionItems={[]}

      whyTitle="Perché Mictoo per la dettatura"
      whyCards={[
        {
          icon: 'target',
          title: 'Progettato per bozze registrate',
          desc: 'Registra prima una bozza completa, poi trascrivi come un unico file. Questo mantiene l’audio originale disponibile mentre rivedi e modifichi il testo.',
        },
        {
          icon: 'editPen',
          title: 'Editor per la pulizia post-dettatura',
          desc: 'Passa alla modalità Editor, correggi nomi, aggiungi interruzioni di paragrafo ed esporta come DOCX pronto per la tua app di scrittura.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per estrazione di contorni',
          desc: 'Solida prima bozza per i punti salienti del capitolo, punti di memo o struttura dell’articolo.',
        },
        {
          icon: 'globe',
          title: 'Dettatura in qualsiasi lingua',
          desc: '50+ lingue con auto-rilevamento. Gli scrittori multilingue possono cambiare lingua tra le registrazioni senza cambiare impostazioni.',
        },
      ]}

      scenariosTitle="Scenari comuni di dettatura"
      scenarios={[
        { icon: 'editPen', title: 'Prima bozza' },
        { icon: 'book',    title: 'Dettatura del capitolo' },
        { icon: 'briefcase', title: 'Memo / email' },
        { icon: 'chat',    title: 'Diario' },
        { icon: 'search',  title: 'Note di ricerca' },
        { icon: 'globe',   title: 'Multilingue' },
      ]}

      tipsTitle="Suggerimenti per una dettatura più pulita"
      tips={[
        'Dì "virgola", "punto", "nuovo paragrafo" se vuoi punteggiatura esplicita.',
        'Registra in una stanza silenziosa così le parole sono più facili da distinguere.',
        'Per capitoli lunghi oltre 60 MB, registrati per la suddivisione automatica.',
        'Rivedi la modalità Editor prima dell’esportazione per nomi e termini tecnici.',
      ]}

      guidesTitle="Strumenti correlati"
      guides={[
        { href: '/it/voice-memo-to-text',      icon: 'mic',    title: 'Memo vocale',   desc: 'Cattura idee, non scrittura di bozze' },
        { href: '/it/m4a-to-text',             icon: 'file',   title: 'Formato M4A',   desc: 'Esportazioni iPhone / Apple' },
        { href: '/it/transcribe-mp3-to-text',  icon: 'file',   title: 'Formato MP3',   desc: 'Esportazioni registratore Android' },
        { href: '/it/interview-transcription', icon: 'chat',   title: 'Intervista',    desc: 'Conversazione registrata tra due persone' },
      ]}

      faq={[
        {
          q: 'In cosa è diverso Mictoo dalla dettatura telefonica dal vivo?',
          a: 'Mictoo funziona da una registrazione salvata piuttosto che ascoltando dal vivo mentre scrivi. Questo lo rende utile per rivedere bozze più lunghe rispetto all’audio originale, soggetto ai limiti attuali di dimensione e durata del file.',
        },
        {
          q: 'Posso dettare termini tecnici o medici?',
          a: 'Whisper gestisce bene il vocabolario tecnico comune. Per termini rari o proprietari, usa la modalità Editor dopo la trascrizione per correggere eventuali errori. Più veloce che dettare e correggere inline.',
        },
        {
          q: 'Qual è il limite di dimensione del file per la dettatura?',
          a: '25 MB in modo anonimo, 60 MB quando registrato. Una registrazione vocale di 60 minuti a bitrate tipico è di 20-30 MB, quindi la maggior parte delle sessioni di dettatura rientra sotto il limite gratuito.',
        },
        {
          q: 'Mictoo aggiunge automaticamente la punteggiatura?',
          a: 'Sì. Le frasi e i paragrafi vengono rilevati dal ritmo del discorso. Dì "virgola" o "punto" se vuoi punteggiatura esplicita in un punto specifico.',
        },
        {
          q: 'Posso modificare la trascrizione prima di esportarla?',
          a: 'Sì. Passa alla modalità Editor per modificare qualsiasi parola o riga inline. Salva le modifiche ed esporta come TXT, DOCX o PDF (se registrato).',
        },
        {
          q: 'Posso tradurre la mia bozza dettata?',
          a: 'Sì. Scegli una lingua target e clicca su Traduci. Utile per scrittori che producono in una seconda lingua, o traduttori che redigono una versione di lavoro.',
        },
        {
          q: 'Le dettature vengono memorizzate sui vostri server?',
          a: 'No. L’audio viene inviato al fornitore di trascrizione, elaborato una sola volta e poi eliminato. Solo la trascrizione persiste se ti registri e la salvi.',
        },
      ]}

      ctaHeadline="Trasforma le bozze parlate in testo"
      ctaSubtitle="Capitolo, memo, articolo, voce di diario. Più veloce che digitare quando sai già cosa vuoi dire."
      ctaButton="Carica una dettatura"

      relatedLinks={[
        { href: '/it/voice-memo-to-text',      label: 'Voice Memo to Text' },
        { href: '/it/interview-transcription', label: 'Intervista Trascrizione' },
        { href: '/it/lecture-transcription',   label: 'Trascrizione Lezione' },
        { href: '/it/m4a-to-text',             label: 'M4A a Testo' },
        { href: '/it/transcribe-mp3-to-text',  label: 'MP3 a Testo' },
      ]}
    />
  )
}