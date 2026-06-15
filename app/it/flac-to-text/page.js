import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC in testo — Trascrizione audio FLAC gratis online | Mictoo',
  description: 'Converti file FLAC in testo gratis online. Carica qualsiasi registrazione FLAC e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC in testo — Trascrizione audio FLAC gratis online | Mictoo",
    description: "Converti file FLAC in testo gratis online. Carica qualsiasi registrazione FLAC e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.",
    url: "https://mictoo.com/it/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC in testo — Trascrizione audio FLAC gratis online | Mictoo",
    description: "Converti file FLAC in testo gratis online. Carica qualsiasi registrazione FLAC e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Lossless · Gratis"
      h1={<>FLAC in testo<br /><span className="text-brand-600">Trascrizione FLAC gratis online</span></>}
      subtitle="Carica qualsiasi file audio FLAC e convertilo in testo all'istante. La qualità lossless del FLAC garantisce eccellente precisione di trascrizione. Senza account."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>FLAC comprime l’audio senza perdita, quindi compare in archivi, master, interviste sul campo, collezioni musicali e materiale storico.</p>
          <p>Mictoo decodifica FLAC direttamente e genera una trascrizione senza chiederti di convertire prima in WAV o MP3.</p>
        </>
      }
      howItWorks={[
        { title: 'Carica il FLAC', desc: 'Aggiungi una registrazione lossless, un’intervista o un archivio audio.' },
        { title: 'Mictoo decodifica la voce', desc: 'L’audio viene elaborato mantenendo le informazioni utili al riconoscimento del parlato.' },
        { title: 'Esporta la trascrizione', desc: 'Copia il testo o scarica TXT/SRT per archivio, note o sottotitoli.' },
      ]}
      whyUse={{
        title: 'Perché Mictoo per FLAC',
        bullets: [
          { title: 'Nessuna perdita accumulata', desc: 'Evita conversioni in formati lossy prima della trascrizione.' },
          { title: 'Ottimo per archivi', desc: 'FLAC conserva materiale vecchio o sensibile con dimensioni ragionevoli.' },
          { title: 'Utile per audio difficile', desc: 'Una sorgente pulita aiuta quando ci sono rumore, eco o voci basse.' },
          { title: 'Flusso semplice', desc: 'Carica il file e lavora sul testo senza versioni intermedie.' },
        ],
      }}
      useCases={{
        title: 'Quando trascrivere FLAC',
        items: [
          { title: 'Storia orale', desc: 'Converti lunghe interviste in archivi ricercabili.' },
          { title: 'Master e sessioni', desc: 'Estrai testo da materiale di studio o registrazioni editate.' },
          { title: 'Registrazioni sul campo', desc: 'Trascrivi fonti preservate in formato lossless.' },
          { title: 'Archivi familiari', desc: 'Crea testo per memorie, citazioni e ricerca.' },
        ],
      }}
      proTips={{
        title: 'Consigli per FLAC',
        tips: [
          { title: 'Non convertire in MP3 se non serve', desc: 'Usa il FLAC quando rientra nel limite di upload.' },
          { title: 'Dividi le sessioni lunghe', desc: 'Blocchi più brevi sono più facili da rivedere e correggere.' },
          { title: 'Conserva il master', desc: 'Crea una copia di lavoro se devi ridurre le dimensioni.' },
        ],
      }}
      faq={[
        { q: 'Come converto un file FLAC in testo?', a: 'Carica il tuo file FLAC con lo strumento sopra. L\'IA lo trascrive e mostra il testo in pochi secondi.' },
        { q: 'Il FLAC si trascrive più accuratamente dell\'MP3?', a: 'La qualità lossless del FLAC può marginalmente migliorare la precisione su audio a basso volume o complessi rispetto a formati molto compressi.' },
        { q: 'La conversione FLAC-testo è gratis?', a: 'Sì, completamente gratis. Nessun account o registrazione richiesti.' },
        { q: 'Qual è la dimensione massima del FLAC?', a: 'Fino a 25 MB. I FLAC sono grandi a causa della compressione lossless — considera la conversione in un formato lossy se il file supera il limite.' },
      ]}
      relatedLinks={[
        { href: '/it/wav-to-text', label: 'WAV in testo' },
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
