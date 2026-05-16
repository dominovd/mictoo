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
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC in testo — Trascrizione audio FLAC gratis online | Mictoo',
  description: 'Converti file FLAC in testo gratis online. Carica qualsiasi registrazione FLAC e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/flac-to-text', languages: LANGS },
}

export default function ItFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Lossless · Gratis"
      h1={<>FLAC in testo<br /><span className="text-brand-600">Trascrizione FLAC gratis online</span></>}
      subtitle="Carica qualsiasi file audio FLAC e convertilo in testo all'istante. La qualità lossless del FLAC garantisce eccellente precisione di trascrizione. Senza account."
      defaultLanguage="it"
      features={[
        { icon: '🎵', title: 'Qualità audio lossless', desc: 'I file FLAC preservano tutta la qualità audio, aiutando l\'IA a raggiungere la massima precisione.' },
        { icon: '⚡', title: 'Risultati istantanei', desc: 'La maggior parte dei file FLAC viene trascritta in meno di 30 secondi, indipendentemente dalla qualità o profondità di bit.' },
        { icon: '📄', title: 'Export .txt e .srt', desc: 'Scarica la trascrizione come testo semplice o come file SRT con timestamp.' },
      ]}
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
