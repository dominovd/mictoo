import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Trascrizione lezione — generatore gratuito IA | Mictoo',
  description:
    'Trascrizione gratuita di lezioni. Carica la registrazione di una lezione, un corso o un seminario (MP3, M4A, MP4) e ottieni testo pulito in pochi secondi. Costruito per studenti.',
  alternates: { canonical: 'https://mictoo.com/it/lecture-transcription', languages: LANGS },

  openGraph: {
    title: "Trascrizione lezione — generatore gratuito IA | Mictoo",
    description: "Trascrizione gratuita di lezioni. Carica la registrazione di una lezione, un corso o un seminario (MP3, M4A, MP4) e ottieni testo pulito in pochi secondi. Costruito per studenti.",
    url: "https://mictoo.com/it/lecture-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trascrizione lezione — generatore gratuito IA | Mictoo",
    description: "Trascrizione gratuita di lezioni. Carica la registrazione di una lezione, un corso o un seminario (MP3, M4A, MP4) e ottieni testo pulito in pochi secondi. Costruito per studenti.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="Studenti · Accademici · Gratis"
      h1={
        <>
          Trascrizione lezione
          <br />
          <span className="text-brand-600">Strumento gratuito per trascrizioni di lezioni</span>
        </>
      }
      subtitle="Trasforma qualsiasi lezione registrata in testo pulito per studiare. Università, corso online, talk a una conferenza, formazione professionale. Senza registrazione, senza tariffa al minuto."
      howItWorks={[
        {
          icon: '🎓',
          title: 'Rilascia l\'audio o il video della lezione',
          desc: 'MP3 da un registratore vocale, M4A dal tuo telefono, MP4 da una lezione su Zoom o da una registrazione schermo di una lezione online. WAV da un registratore da campo. Tutto va bene.',
        },
        {
          icon: '⚡',
          title: 'L\'IA trascrive',
          desc: 'Whisper large-v3 legge l\'audio. Una lezione di 60 minuti finisce in circa un minuto.',
        },
        {
          icon: '📋',
          title: 'Prendi la trascrizione',
          desc: 'Leggi, copia nei tuoi appunti o scarica come TXT o SRT. Sistema i termini tecnici sbagliati inline prima di esportare.',
        },
      ]}
      whyUse={{
        title: 'Perché Mictoo per le lezioni',
        bullets: [
          {
            title: 'Formato lungo va bene',
            desc: 'Fino a 60 minuti per file dopo registrazione gratuita. Per una lezione di 90 minuti, dividila in due pezzi da 45 minuti. La trascrizione è ricomponibile.',
          },
          {
            title: 'Gestisce il vocabolario tecnico meglio della maggior parte',
            desc: 'Whisper è stato addestrato su una vasta varietà di audio, comprese lezioni accademiche. Latino, gergo specialistico, termini matematici, frammenti di codice spesso escono più puliti del previsto.',
          },
          {
            title: 'Nessun costo per lezione',
            desc: 'Per uno studente è uno spreco pagare la trascrizione per corso. Gratis senza contatore al minuto significa che puoi trascrivere ogni lezione in un semestre.',
          },
          {
            title: 'Privacy e copyright',
            desc: 'Il file va al provider di trascrizione ed è scartato. Non conserviamo l\'audio. Utile quando trascrivi materiale che è tuo (le tue registrazioni) ma non vuoi caricare su un servizio di archiviazione di terze parti.',
          },
          {
            title: 'Oltre 50 lingue',
            desc: 'Studenti internazionali e corsi online in lingue diverse dall\'inglese funzionano tutti. Il rilevamento automatico copre la maggior parte dei casi.',
          },
        ],
      }}
      useCases={{
        title: 'A cosa servono le trascrizioni di lezioni per studenti e accademici',
        items: [
          {
            title: 'Appunti di studio ricercabili',
            desc: 'Metti la trascrizione in Notion, Obsidian o un documento Word. Ctrl+F su qualsiasi termine che il professore ha citato. Meglio di scorrere 90 minuti di audio.',
          },
          {
            title: 'Preparazione esami',
            desc: 'Scorri la trascrizione mentre rivedi i tuoi appunti scritti a mano. Cattura cose che hai perso durante la lezione dal vivo.',
          },
          {
            title: 'Tradurre lezioni per non madrelingua',
            desc: 'Trascrivi nella lingua di partenza, poi passa per DeepL o ChatGPT per tradurre. Utile per studenti che seguono corsi nella loro seconda lingua.',
          },
          {
            title: 'Accessibilità per studenti sordi e ipoudenti',
            desc: 'Una trascrizione o un file SRT fornisce lo stesso contenuto in un\'altra modalità. Alcune università lo richiedono per contenuto didattico registrato.',
          },
          {
            title: 'Creare flashcard e materiali di studio',
            desc: 'Le trascrizioni alimentano carte Anki, documenti di riepilogo o strumenti di studio assistiti dall\'IA.',
          },
        ],
      }}
      proTips={{
        title: 'Consigli per la trascrizione di lezioni',
        tips: [
          {
            title: 'Per le lezioni in presenza, siediti vicino al professore',
            desc: 'Registrare dall\'ultima fila attraverso il rumore di sala produce una trascrizione con molte lacune. Telefono in prima fila, schermo verso il basso, cattura voce pulita.',
          },
          {
            title: 'Per lezioni lunghe usa un registratore vocale dedicato',
            desc: 'Le registrazioni telefoniche hanno auto-leveling aggressivo e riduzione del rumore, che danneggia la trascrizione. Uno Zoom H1n o registratore entry-level simile dà audio molto più pulito per 80 euro.',
          },
          {
            title: 'Per lezioni online registra l\'audio di sistema direttamente',
            desc: 'OBS Studio su Windows o Mac può registrare l\'audio della lezione direttamente dal sistema. Più pulito che registrare attraverso il microfono del laptop.',
          },
          {
            title: 'Imposta la lingua manualmente',
            desc: 'Il rilevamento automatico di solito è corretto, ma può essere confuso dal warmup del professore in un\'altra lingua. Scegli la lingua della lezione esplicitamente dal menu.',
          },
          {
            title: 'Taglia i primi 5 minuti se sono annunci amministrativi',
            desc: '"Avete fatto i compiti? Avete letto il capitolo 3?" non è utile per la trascrizione. Taglialo via in Audacity prima dell\'upload per risparmiare il budget di dimensione file.',
          },
          {
            title: 'Per lezioni STEM con equazioni, la trascrizione cattura la matematica parlata, non le equazioni',
            desc: 'Le espressioni matematiche alla lavagna non sono nell\'audio, quindi non nella trascrizione. Devi catturarle comunque separatamente (foto della lavagna, screenshot delle slide).',
          },
          {
            title: 'Alla prima revisione, riascolta la registrazione mentre leggi la trascrizione',
            desc: 'È il modo migliore per correggere termini specifici del professore e riferimenti a equazioni. Una volta ripulita, la trascrizione regge da sola.',
          },
        ],
      }}
      faq={[
        {
          q: 'È abbastanza preciso per compiti universitari?',
          a: 'Per la maggior parte del contenuto di una lezione, sì. Whisper large-v3 produce 90-95% di precisione su audio lezione pulito. Termini tecnici e nomi propri spesso richiedono cleanup. Usa la trascrizione come appunti di studio, non come fonte canonica per citazioni.',
        },
        {
          q: 'La mia lezione non è in inglese. Funzionerà?',
          a: 'Sì. Whisper supporta oltre 50 lingue con buona precisione nelle lingue maggiori e supporto base per molte altre. Scegli la lingua manualmente dal menu per i migliori risultati.',
        },
        {
          q: 'La mia lezione dura 90 minuti. Cosa faccio?',
          a: 'Dividila. Il nostro cap è 60 minuti per file. Tagliala in due pezzi da 45 minuti a un punto di pausa naturale (pausa pranzo o cambio argomento).',
        },
        {
          q: 'È legale trascrivere lezioni?',
          a: 'Per uso personale di studio in genere sì nella maggior parte delle giurisdizioni, purché tu abbia accesso legale alla registrazione. Per ridistribuzione (pubblicare la trascrizione online, vendere materiali di studio) ti serve il permesso del docente o dell\'istituzione. Alcune università hanno politiche esplicite sulla registrazione e trascrizione delle lezioni. Controlla la tua.',
        },
        {
          q: 'Posso trascrivere una video-lezione di Coursera, edX o Khan Academy?',
          a: 'Sì, se puoi scaricare il file video. Alcune piattaforme permettono download per visione offline (ottieni un MP4). Caricalo qui. Per piattaforme che non permettono il download, verifica i loro termini prima di fare scraping.',
        },
        {
          q: 'La trascrizione conterrà il contenuto delle slide?',
          a: 'No. Trascriviamo solo l\'audio. Se il professore legge le slide ad alta voce, quel testo è nella trascrizione. Se le slide hanno testo a schermo che il professore non ha letto, quello non è nella trascrizione. Combina con screenshot delle slide per appunti completi.',
        },
        {
          q: 'Quanto sono precisi termini tecnici e gergo?',
          a: 'Meno precisi del vocabolario comune. Per termini medici latini, simboli matematici avanzati, acronimi di nicchia aspettati di correggerli manualmente. Il flusso generale della lezione sarà solido.',
        },
        {
          q: 'Posso esportare la trascrizione nella mia app di appunti?',
          a: 'Sì. Scaricala come TXT e incollala in Notion, Obsidian, OneNote, Bear o qualsiasi strumento text-friendly. SRT funziona nei video player se vuoi sottotitoli accanto alla registrazione.',
        },
        {
          q: 'L\'audio della mia lezione viene conservato?',
          a: 'No. Il file va al nostro provider di trascrizione, viene processato, poi scartato. Non conserviamo l\'audio.',
        },
        {
          q: 'Quanto ci mette a trascrivere una lezione?',
          a: 'Circa l\'1-2% della durata audio. Una lezione di 60 minuti finisce in circa 60 secondi. L\'upload di solito è l\'attesa più lunga.',
        },
        {
          q: 'Posso ottenere timecode per saltare a momenti specifici?',
          a: 'Sì. Scarica come SRT. Ogni riga ha un timecode allineato all\'audio originale. Utile per tornare a un punto preciso durante la preparazione esame.',
        },
        {
          q: 'E se la lezione ha un Q&A alla fine?',
          a: 'Il Q&A si trascrive proprio come la lezione principale. Le domande dal pubblico a volte arrivano meno chiare (chi è in sala di solito è più lontano dal microfono), ma la risposta del professore dovrebbe essere pulita. Aggiungi una sezione "Q&A" nei tuoi appunti.',
        },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo', desc: 'Per file audio generici.' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: 'Per video-lezioni (MP4, MOV).' },
        { href: '/it/timestamped-transcription', label: 'Trascrizione con timecode', desc: 'Per saltare a momenti specifici.' },
        { href: '/it/how-to-split-audio', label: 'Dividere l\'audio', desc: 'Per lezioni oltre 60 minuti.' },
      ]}
    />
  )
}
