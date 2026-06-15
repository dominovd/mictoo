import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG in testo — Trascrizione audio OGG gratis online | Mictoo',
  description: 'Converti file audio OGG in testo gratis online. Carica qualsiasi registrazione OGG Vorbis e ottieni una trascrizione precisa all\'istante. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG in testo — Trascrizione audio OGG gratis online | Mictoo",
    description: "Converti file audio OGG in testo gratis online. Carica qualsiasi registrazione OGG Vorbis e ottieni una trascrizione precisa all\\'istante. Senza registrazione.",
    url: "https://mictoo.com/it/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG in testo — Trascrizione audio OGG gratis online | Mictoo",
    description: "Converti file audio OGG in testo gratis online. Carica qualsiasi registrazione OGG Vorbis e ottieni una trascrizione precisa all\\'istante. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Gratis · Istantaneo"
      h1={<>OGG in testo<br /><span className="text-brand-600">Trascrizione OGG gratis online</span></>}
      subtitle="Carica qualsiasi file audio OGG e convertilo in testo in pochi secondi. Supporta OGG Vorbis e OGG Opus. Senza account."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>OGG è un contenitore: può includere audio Vorbis, Opus o altre varianti. È comune nei messaggi vocali, negli strumenti open source, negli export Linux e in alcune applicazioni web.</p>
          <p>Mictoo estrae la traccia audio, rileva il codec e crea una trascrizione leggibile con timestamp, senza obbligarti a convertire prima il file.</p>
        </>
      }
      howItWorks={[
        { title: 'Carica il file OGG', desc: 'Aggiungi un .ogg o .oga da Telegram, browser, registratore o strumento Linux.' },
        { title: 'Mictoo rileva il codec', desc: 'Il sistema legge il contenitore ed elabora la traccia Vorbis o Opus corretta.' },
        { title: 'Scarica il testo', desc: 'Copia la trascrizione o esportala come TXT/SRT con timestamp.' },
      ]}
      whyUse={{
        title: 'Perché usare Mictoo per OGG',
        bullets: [
          { title: 'Supporto OGG e OGA', desc: 'Utile per file che molti strumenti generici rifiutano ancora.' },
          { title: 'Nessuna conversione preventiva', desc: 'Evita di passare da MP3 solo per ottenere rapidamente il testo.' },
          { title: 'Timestamp pratici', desc: 'Torna al messaggio o alla registrazione originale con riferimenti temporali chiari.' },
          { title: 'Adatto all’audio Opus del web', desc: 'Funziona bene con audio da chiamate, browser e app di messaggistica.' },
        ],
      }}
      useCases={{
        title: 'Quando trascrivere un OGG',
        items: [
          { title: 'Messaggi Telegram', desc: 'Trasforma brevi file .oga in note ricercabili.' },
          { title: 'Registrazioni Linux', desc: 'Trascrivi capture prodotte da strumenti audio open source.' },
          { title: 'Chiamate WebRTC', desc: 'Recupera il contenuto di riunioni o test registrati in Opus.' },
          { title: 'Archivi audio', desc: 'Rendi consultabili vecchi OGG senza ricodificarli.' },
        ],
      }}
      proTips={{
        title: 'Consigli per i file OGG',
        tips: [
          { title: 'Prova anche .oga', desc: 'Molti messaggi vocali usano questa estensione con audio simile.' },
          { title: 'Estrai solo l’audio se il file è pesante', desc: 'Nelle registrazioni grandi, caricare la sola voce può essere più veloce.' },
          { title: 'Imposta la lingua nei clip brevi', desc: 'Il rilevamento automatico ha meno contesto in messaggi di pochi secondi.' },
        ],
      }}
      faq={[
        { q: 'Come converto OGG in testo?', a: 'Carica il tuo file OGG sopra. La trascrizione viene generata automaticamente in pochi secondi.' },
        { q: 'La conversione OGG-testo è gratis?', a: 'Sì, completamente gratis. Nessuna registrazione o account richiesti.' },
        { q: 'Qual è la dimensione massima del file OGG?', a: 'Fino a 25 MB.' },
        { q: 'Quali altri formati audio sono supportati?', a: 'Sono supportati anche MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/it/wav-to-text', label: 'WAV in testo' },
        { href: '/it/flac-to-text', label: 'FLAC in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
