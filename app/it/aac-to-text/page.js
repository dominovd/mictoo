import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC in testo — Trascrizione audio AAC gratis online | Mictoo',
  description: 'Trascrivi file audio AAC in testo gratis. Trascina .aac, .m4a o altri file codificati AAC e ottieni una trascrizione precisa in pochi secondi.',
  alternates: { canonical: 'https://mictoo.com/it/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC in testo — Trascrizione audio AAC gratis online | Mictoo",
    description: "Trascrivi file audio AAC in testo gratis. Trascina .aac, .m4a o altri file codificati AAC e ottieni una trascrizione precisa in pochi secondi.",
    url: "https://mictoo.com/it/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC in testo — Trascrizione audio AAC gratis online | Mictoo",
    description: "Trascrivi file audio AAC in testo gratis. Trascina .aac, .m4a o altri file codificati AAC e ottieni una trascrizione precisa in pochi secondi.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Gratis"
      h1={<>AAC in testo<br /><span className="text-brand-600">Trascrizione AAC gratis online</span></>}
      subtitle="Carica il tuo file audio AAC e ottieni una trascrizione testuale precisa in pochi secondi. Funziona con .aac e .m4a (AAC dentro un contenitore MP4). Senza registrazione."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>AAC è un codec audio, non sempre un formato di file visibile. Può apparire come .aac puro, dentro M4A/MP4 o in export video e podcast.</p>
          <p>Mictoo ti permette di caricare questi file direttamente, trascrivere la voce ed esportare il risultato senza creare una copia WAV intermedia.</p>
        </>
      }
      howItWorks={[
        { title: 'Carica AAC o M4A', desc: 'Aggiungi un file .aac, .m4a o un media che usa audio AAC.' },
        { title: 'La traccia viene elaborata', desc: 'Mictoo legge l’audio e prepara una trascrizione modificabile.' },
        { title: 'Modifica ed esporta', desc: 'Correggi nomi o termini tecnici e scarica TXT o SRT.' },
      ]}
      whyUse={{
        title: 'Perché Mictoo per AAC',
        bullets: [
          { title: 'Caricamento diretto', desc: 'Non serve convertire in WAV o MP3 prima della trascrizione.' },
          { title: 'Buono per voce compressa chiara', desc: 'AAC mantiene una voce comprensibile in file relativamente piccoli.' },
          { title: 'Utile per sorgenti video', desc: 'Molti clip ed export mobili usano AAC internamente.' },
          { title: 'Flusso non distruttivo', desc: 'Lavora da una copia o dal file originale senza modificarlo.' },
        ],
      }}
      useCases={{
        title: 'Usi comuni di AAC',
        items: [
          { title: 'Podcast e CDN', desc: 'Converti episodi o estratti audio codificati in AAC.' },
          { title: 'Estratti YouTube o MP4', desc: 'Trascrivi la traccia vocale dopo aver separato l’audio.' },
          { title: 'App mobili', desc: 'Elabora audio esportati da app che usano AAC di default.' },
          { title: 'Registrazioni leggere', desc: 'Ottieni testo da file piccoli senza gonfiarli in WAV.' },
        ],
      }}
      proTips={{
        title: 'Consigli per AAC',
        tips: [
          { title: 'Non aumentare artificialmente il bitrate', desc: 'Non recupera dettagli persi e crea solo file più grandi.' },
          { title: 'Usa M4A se un’app fallisce', desc: 'Alcuni strumenti gestiscono meglio il contenitore M4A rispetto al flusso .aac puro.' },
          { title: 'Rivedi i nomi propri', desc: 'La compressione può influire su brand, nomi e termini tecnici.' },
        ],
      }}
      faq={[
        { q: 'Cos\'è un file AAC?', a: 'AAC (Advanced Audio Coding) è un formato di compressione audio lossy usato da iTunes, Apple Music, YouTube e dalla maggior parte delle app podcast. I file hanno estensione .aac o .m4a. AAC offre qualità migliore di MP3 allo stesso bitrate.' },
        { q: 'Qual è la differenza tra .aac e .m4a?', a: 'Entrambi contengono audio codificato in AAC. .aac è il flusso audio grezzo; .m4a lo avvolge in un contenitore MP4 (è così che iTunes e i Voice Memos iPhone lo salvano). Mictoo supporta entrambi direttamente.' },
        { q: 'Come converto AAC in testo gratis?', a: 'Trascina il tuo file AAC nell\'area di upload sopra. Mictoo lo trascrive automaticamente con l\'IA e mostra il testo in pochi secondi. Copialo o scaricalo come .txt.' },
        { q: 'Qual è la dimensione massima del file AAC?', a: 'Fino a 25 MB per upload. AAC a 128 kbps dà circa 25 minuti di audio in 25 MB; a 64 kbps quasi un\'ora. Per file più lunghi, abbassa il bitrate o dividi in segmenti.' },
        { q: 'Posso ottenere timestamp per una trascrizione AAC?', a: 'Sì. Dopo la trascrizione puoi scaricare un file .srt con timestamp precisi — utile per sincronizzare la trascrizione con l\'audio o video originale.' },
      ]}
      relatedLinks={[
        { href: '/it/m4a-to-text', label: 'M4A in testo' },
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
