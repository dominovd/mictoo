import LandingLayout from '@/components/LandingLayout'

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
  title: 'Memo vocale in testo — trascrivi Voice Memos iPhone gratis | Mictoo',
  description:
    'Trascrizione gratuita di memo vocali. Rilascia il tuo memo iPhone o la registrazione vocale Android (M4A, MP3) e ottieni testo pulito in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/voice-memo-to-text', languages: LANGS },

  openGraph: {
    title: "Memo vocale in testo — trascrivi Voice Memos iPhone gratis | Mictoo",
    description: "Trascrizione gratuita di memo vocali. Rilascia il tuo memo iPhone o la registrazione vocale Android (M4A, MP3) e ottieni testo pulito in pochi secondi. Senza registrazione.",
    url: "https://mictoo.com/it/voice-memo-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memo vocale in testo — trascrivi Voice Memos iPhone gratis | Mictoo",
    description: "Trascrizione gratuita di memo vocali. Rilascia il tuo memo iPhone o la registrazione vocale Android (M4A, MP3) e ottieni testo pulito in pochi secondi. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="iPhone · Android · Gratis"
      h1={
        <>
          Memo vocale in testo
          <br />
          <span className="text-brand-600">Trascrittore gratuito di memo vocali</span>
        </>
      }
      subtitle="Trasforma i memo vocali in testo pulito. iPhone, Android, registratore dedicato, qualsiasi file vocale. Rilascia, ottieni la trascrizione in pochi secondi. Senza registrazione, senza tariffa al minuto."
      howItWorks={[
        {
          icon: '📱',
          title: 'Porta il memo sul computer (o carica dal telefono)',
          desc: 'iPhone: apri Memo Vocali, tap su Condividi, manda via AirDrop o email a te stesso. Android: trova la registrazione in File o nella cartella della tua app registratore. Oppure usa il browser mobile per caricare direttamente dal telefono.',
        },
        {
          icon: '📂',
          title: 'Rilascia il file',
          desc: 'M4A da iPhone, M4A o MP3 da Android, WAV da alcuni registratori. Tutto va bene.',
        },
        {
          icon: '📋',
          title: 'Prendi la trascrizione',
          desc: 'Leggi nel browser, copia negli appunti o scarica come TXT. Incolla in Notion, Apple Notes, Google Docs o dove vivono i tuoi appunti.',
        },
      ]}
      whyUse={{
        title: 'Perché Mictoo per i memo vocali',
        bullets: [
          {
            title: 'Supporto M4A nativo',
            desc: 'I Memo Vocali iPhone vengono salvati come M4A. Accettiamo M4A direttamente. Nessuna conversione necessaria.',
          },
          {
            title: 'Gratis, nessun contatore al minuto',
            desc: 'I memo vocali sono un formato "uno alla volta". Pagare al minuto per un\'idea di 2 minuti è ridicolo. Gratis senza cap si adatta al caso d\'uso.',
          },
          {
            title: 'Veloce per file corti',
            desc: 'Un memo vocale di 2 minuti si trascrive in circa 5 secondi. Più rapido di scrivere l\'idea a mano.',
          },
          {
            title: 'Privacy',
            desc: 'I memo vocali sono spesso personali. Il tuo audio va al provider di trascrizione, viene processato e scartato. Non lo conserviamo.',
          },
          {
            title: 'Mobile-friendly',
            desc: 'Carica direttamente dal telefono via browser. iOS e Android funzionano entrambi.',
          },
          {
            title: 'Il rilevamento automatico gestisce la tua lingua',
            desc: 'Memo vocali in una delle oltre 50 lingue. Utile se pensi in due lingue e i tuoi memo cambiano.',
          },
        ],
      }}
      useCases={{
        title: 'A cosa serve la gente le trascrizioni di memo vocali',
        items: [
          {
            title: 'Cattura idee in movimento',
            desc: 'Hai avuto un pensiero durante una camminata, l\'hai dettato al telefono. Adesso vuoi agire. Trascrivi, incolla nel tuo task manager o nell\'app appunti.',
          },
          {
            title: 'Dettatura di testi lunghi',
            desc: 'Alcuni abbozzano saggi, post di blog o email parlando. Trascrivi il memo vocale, modifica il testo, manda.',
          },
          {
            title: 'Action item dopo un meeting',
            desc: 'Ti sei dettato un riassunto sulla strada del ritorno dalla sala riunioni. Trascrivi, incolla nel doc di progetto.',
          },
          {
            title: 'Appunti di campo per giornalisti e ricercatori',
            desc: 'Cattura osservazioni e citazioni sul posto. Trascrivi dopo per appunti ordinati.',
          },
          {
            title: 'Liste-promemoria (spesa, packing, piani di progetto)',
            desc: 'I memo vocali sono più rapidi che scrivere su un telefono. Trascrivi per una versione testuale ricercabile e modificabile.',
          },
        ],
      }}
      proTips={{
        title: 'Consigli per la trascrizione di memo vocali',
        tips: [
          {
            title: 'Tieni il telefono vicino, ma non troppo',
            desc: '10-15 cm dalla bocca è il punto dolce. Più vicino e il microfono cattura plosive e respiro. Più lontano e perdi intelligibilità in ambienti rumorosi.',
          },
          {
            title: 'Il vento è il nemico',
            desc: 'Un memo vocale di 10 secondi in una strada ventosa può essere inutilizzabile. Se puoi, fermati, dai le spalle al vento, poi registra. Oppure usa cuffie con microfono resistente al vento.',
          },
          {
            title: 'Pausa prima delle parole chiave',
            desc: 'Quando detti un nome, un indirizzo o un termine tecnico, fai una breve pausa prima. Whisper gestisce parole isolate meglio del parlato rapido per i nomi propri.',
          },
          {
            title: 'I Memo Vocali iPhone sono di default su M4A lossless, ma puoi passare a lossy',
            desc: 'Impostazioni, Memo Vocali, Qualità Audio. Lossless è eccessivo per la trascrizione. Lossy è un terzo della dimensione senza differenza di precisione.',
          },
          {
            title: 'Taglia il silenzio all\'inizio e alla fine prima di caricare',
            desc: 'I memo vocali a volte catturano 3-5 secondi di aria morta. Taglia nell\'app Memo Vocali (tap su Modifica) prima di condividere. File più piccolo, trascritto più rapido.',
          },
          {
            title: 'Per dettature lunghe (scrivere una bozza a voce), dividi in pezzi da 5-10 minuti',
            desc: 'Più facile da modificare. Più facile ri-registrare un singolo pezzo se va male.',
          },
          {
            title: 'Whisper gestisce il tuo accento meglio della funzione dettatura integrata del telefono',
            desc: 'iOS ha la dettatura integrata, ma è inglese-first e più debole sugli accenti. Whisper copre oltre 50 lingue con precisione migliore.',
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo supporta i Memo Vocali iPhone?',
          a: 'Sì. I Memo Vocali iPhone vengono salvati come M4A (a volte lossless come ALAC). L\'M4A funziona direttamente. Per ALAC converti prima in WAV o M4A AAC.',
        },
        {
          q: 'Come porto il memo vocale da iPhone a Mictoo?',
          a: 'Tre opzioni. Apri il memo in Memo Vocali, tap Condividi, scegli AirDrop al Mac (più veloce) o email a te stesso. Oppure usa Safari su iPhone per aprire mictoo.com e caricare direttamente dall\'app File.',
        },
        {
          q: 'E le registrazioni vocali Android?',
          a: 'I registratori vocali Android salvano di solito come M4A o MP3. Entrambi funzionano. Trova il file nell\'app File, condividi al computer o carica dal browser mobile.',
        },
        {
          q: 'Posso caricare direttamente dal telefono?',
          a: 'Sì. La pagina è mobile-friendly. Tap sull\'area di upload, scegli il file dall\'app File del telefono o dalla cartella registrazioni.',
        },
        {
          q: 'Quanto può essere lungo il mio memo vocale?',
          a: 'Fino a 30 minuti per file gratis, 60 minuti con registrazione. La maggior parte dei memo vocali sta sotto i 5 minuti, ben dentro qualsiasi limite.',
        },
        {
          q: 'Quanto è precisa la trascrizione dei memo vocali?',
          a: 'Per voce chiara in ambiente tranquillo: 90-95%. Per parlato biascicato, rumore di fondo (strada, caffè, auto) la precisione cala. I nomi propri spesso hanno bisogno di cleanup.',
        },
        {
          q: 'La trascrizione conterrà punteggiatura?',
          a: 'Sì. Whisper aggiunge la punteggiatura automaticamente. Non sempre perfetta per parlato dettato (che ha confini di frase meno naturali), ma utilizzabile così com\'è.',
        },
        {
          q: 'Funziona per dettare in una lingua non-inglese?',
          a: 'Sì, oltre 50 lingue. Scegli la lingua manualmente dal menu per memo corti (il rilevamento automatico richiede più audio per essere affidabile).',
        },
        {
          q: 'Il mio memo vocale viene conservato?',
          a: 'No. Il file va al nostro provider di trascrizione, viene processato, poi scartato.',
        },
        {
          q: 'Posso modificare la trascrizione prima di scaricare?',
          a: 'Sì. Correggi le parole sbagliate nel browser prima di esportare.',
        },
        {
          q: 'Funziona per registrare telefonate?',
          a: 'Trascriviamo il file che carichi, indipendentemente da come è stato registrato. La registrazione di chiamate in sé richiede consenso nella maggior parte delle giurisdizioni. Ottieni il consenso prima di registrare.',
        },
        {
          q: 'Qual è la differenza con la funzione dettatura integrata di iOS?',
          a: 'La dettatura iOS è in tempo reale mentre parli, limitata a certe lingue e più debole sugli accenti. Mictoo trascrive dopo la registrazione, supporta oltre 50 lingue e usa un modello più preciso (Whisper large-v3).',
        },
      ]}
      relatedLinks={[
        { href: '/it/m4a-to-text', label: 'M4A in testo', desc: 'Specifico per file M4A.' },
        { href: '/it/dictation-to-text', label: 'Dettatura in testo', desc: 'Per bozze testuali dettate e scrittura vocale di formato lungo.' },
        { href: '/it/interview-transcription', label: 'Trascrizione intervista', desc: 'Per interviste registrate al telefono.' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo', desc: 'Per altri formati audio.' },
      ]}
    />
  )
}
