import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Trascrizione IA Audio e Video in Testo, Gratuita — Mictoo',
  description: "Trascrivi file audio e video in testo gratis. Senza registrazione. Basata su OpenAI Whisper. MP3, MP4, WAV e oltre 50 lingue.",
  alternates: {
    canonical: 'https://mictoo.com/it',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Trascrizione IA Audio & Video Gratuita',
    description: "Carica un file audio o video e ottieni la trascrizione in pochi secondi.",
    url: 'https://mictoo.com/it',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Trascrizione Audio & Video Gratuita' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Trascrizione IA Gratuita',
    description: "Carica un file audio o video e ottieni la trascrizione in pochi secondi.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItalianPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="IA · Gratis · Senza registrazione · 50+ lingue"
      h1={<>Trascrivere Audio e Video in Testo<br /><span className="text-brand-600">con l&apos;IA, Gratis Online</span></>}
      subtitle="Carica qualsiasi file audio o video e ottieni una trascrizione IA precisa in pochi secondi. Nessun account richiesto."
      howItWorks={[
        { icon: '📂', title: 'Carica il file', desc: "Trascina e rilascia oppure clicca per caricare. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Fino a 25 MB in modo anonimo, 60 MB dopo la registrazione." },
        { icon: '⚡', title: "L'IA trascrive", desc: "Whisper di OpenAI converte l'audio in testo con alta precisione in oltre 50 lingue. Un file di 10 minuti di solito è pronto in meno di 30 secondi." },
        { icon: '📋', title: 'Copia o scarica', desc: "Modifica la trascrizione direttamente nel browser. Copia negli appunti oppure esporta in .txt, .srt, .pdf, .docx." },
      ]}
      whyUse={{ title: 'Perché scegliere Mictoo', bullets: [
        { title: '100% gratis', desc: "Niente abbonamenti, niente prove limitate. Mictoo è gratuito, senza tetto mensile né contatore di minuti." },
        { title: 'Riservato di default', desc: "I tuoi file vengono inviati direttamente all'API Whisper (Groq come principale, OpenAI come backup), elaborati e poi eliminati in pochi secondi. Non conserviamo nulla e non addestriamo modelli sui tuoi dati." },
        { title: 'Oltre 50 lingue', desc: "Rilevamento automatico della lingua. Funziona con italiano, inglese, spagnolo, francese, tedesco, russo, giapponese e molte altre." },
        { title: 'Alta precisione', desc: "Basato su Whisper di OpenAI, lo stesso modello di riconoscimento vocale usato in ChatGPT e dai principali servizi di trascrizione." },
        { title: 'Risultati rapidi', desc: "Un file di 10 minuti viene trascritto in meno di 30 secondi. Niente code di attesa, niente pop-up del tipo 'aspetta 30 secondi'." },
        { title: 'Output modificabile', desc: "Rileggi e correggi la trascrizione nel browser, poi copia negli appunti o scarica in .txt, .srt o .pdf." },
      ]}}
      useCases={{ title: 'Chi usa Mictoo', items: [
        { title: 'Studenti', desc: "Trascrivi lezioni, interviste e registrazioni di ricerca. Testo cercabile, più facile da ripassare rispetto a un audio da riascoltare." },
        { title: 'Podcaster', desc: "Trasforma le puntate in articoli del blog, show notes o sottotitoli. Bonus SEO e accessibilità immediata." },
        { title: 'Giornalisti', desc: "Converti le interviste registrate in testo in pochi secondi. Citazioni precise con timestamp per la verifica delle fonti." },
        { title: 'Team aziendali', desc: "Trascrivi riunioni, chiamate con i clienti e presentazioni. Poi cerchi per parola chiave invece di riascoltare tutto." },
        { title: 'Creator di contenuti', desc: "Genera sottotitoli per YouTube, TikTok o Instagram Reels. Export SRT pronto da caricare su YouTube Studio." },
        { title: 'Ambito legale e medico', desc: "Bozze rapide di trascrizioni per appunti e documentazione. Conserva sempre il file originale per la versione definitiva." },
      ]}}
      proTips={{ title: 'Consigli per una trascrizione migliore', tips: [
        { title: 'Audio mono a 64 kbps basta per il parlato', desc: "Mictoo accetta fino a 25 MB. Per la voce, mono 64 kbps dà circa 28 MB per ora senza perdita di precisione percepibile. Vedi la nostra guida per comprimere l'audio." },
        { title: 'Se il file supera i 30 minuti, registrati', desc: "Anonimo: massimo 30 minuti. Registrazione gratuita: 60 minuti. Oltre questo: dividi il file in parti e poi unisci le trascrizioni." },
        { title: 'Specifica la lingua se il rilevamento automatico sbaglia', desc: "Whisper indovina bene nel 99% dei casi. Su file molto brevi (meno di 10 secondi) o molto multilingue, il selettore manuale della lingua mette al sicuro il risultato." },
        { title: "Per trascrivere un video, basta l'audio", desc: "Mictoo accetta MP4 direttamente, ma puoi anche estrarre l'audio (col nostro convertitore MP4 in MP3) per caricare un file 10 volte più piccolo." },
        { title: 'Riassunto IA incluso nel risultato', desc: "Dopo la trascrizione, Mictoo genera automaticamente un riassunto del contenuto, i punti chiave e le azioni da fare. Utile per riunioni lunghe e podcast." },
        { title: 'Traduci la trascrizione in 28 lingue', desc: "Una volta pronta la trascrizione, clicca su Traduci nella vista Lettore. Whisper trascrive la lingua originale, poi GPT-4o-mini traduce nella lingua di destinazione." },
      ]}}
      faq={[
        {
          q: 'Come trascrivere un file audio in testo gratis?',
          a: "Carica il tuo file audio qui sopra. Mictoo lo trascrive automaticamente con Whisper di OpenAI e mostra il testo in pochi secondi. Nessuna registrazione richiesta per file fino a 25 MB.",
        },
        {
          q: "Mictoo funziona bene con l'italiano?",
          a: "Sì. Whisper, il modello di OpenAI su cui si basa Mictoo, è stato addestrato su molte ore di audio in italiano e offre un'ottima precisione, inclusi accenti regionali e lessico tecnico.",
        },
        {
          q: 'I miei file vengono conservati?',
          a: "No. I tuoi file vengono inviati direttamente all'API di trascrizione, elaborati e poi eliminati in pochi secondi. Non conserviamo nulla sui nostri server e non li usiamo per addestrare modelli.",
        },
        {
          q: 'Qual è la dimensione massima del file?',
          a: "25 MB per utenti anonimi, 60 MB dopo una registrazione gratuita. Un MP3 mono a 64 kbps equivale a circa un'ora di audio in 25 MB.",
        },
        {
          q: 'Quanto tempo richiede la trascrizione?',
          a: "Un file di 10 minuti viene tipicamente trascritto in meno di 30 secondi. I file più lunghi impiegano proporzionalmente più tempo, ma restano molto più veloci del tempo reale.",
        },
        {
          q: 'Quali formati audio e video sono supportati?',
          a: "MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG. Per i file video, Mictoo estrae automaticamente la traccia audio. Se il tuo formato non è supportato, convertilo prima in MP3 o WAV con i nostri convertitori integrati.",
        },
        {
          q: 'Posso scaricare i sottotitoli in formato SRT?',
          a: "Sì. Dopo la trascrizione, clicca sul pulsante .srt per scaricare un file di sottotitoli con timestamp, pronto da caricare su YouTube Studio, Premiere o Final Cut.",
        },
        {
          q: 'Mictoo genera un riassunto del contenuto?',
          a: "Sì. Dopo ogni trascrizione, Mictoo crea automaticamente un riassunto IA con i punti chiave e le azioni da fare. Molto utile per podcast lunghi, riunioni e lezioni.",
        },
        {
          q: 'Posso trascrivere un video di YouTube?',
          a: "Non direttamente da URL, YouTube blocca i server di terze parti. Scarica prima il video localmente con uno strumento come 4K Video Downloader, poi carica qui il file MP4. La nostra guida sul download di YouTube spiega la procedura.",
        },
        {
          q: "Mictoo ha un'app per smartphone?",
          a: "Non ancora un'app nativa, ma il sito funziona perfettamente su iOS Safari e Android Chrome. Carica dalla galleria o da un memo vocale direttamente dal telefono.",
        },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo', desc: 'Trascrivi specificamente file MP3, podcast, memo vocali, chiamate registrate.' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: "Trascrivi MP4, MOV, WEBM, per registrazioni Zoom, video YouTube, screencast." },
        { href: '/it/podcast-transcription', label: 'Trascrizione podcast', desc: 'Stesso motore con consigli specifici per podcast lunghi e montaggio.' },
        { href: '/it/free-srt-generator', label: 'Generatore SRT gratis', desc: 'Sottotitoli con timestamp pronti per YouTube Studio, Premiere, DaVinci Resolve.' },
      ]}
    />
  )
}
