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
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG in testo — Trascrizione audio OGG gratis online | Mictoo',
  description: 'Converti file audio OGG in testo gratis online. Carica qualsiasi registrazione OGG Vorbis e ottieni una trascrizione precisa all\'istante. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/ogg-to-text', languages: LANGS },
}

export default function ItOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Gratis · Istantaneo"
      h1={<>OGG in testo<br /><span className="text-brand-600">Trascrizione OGG gratis online</span></>}
      subtitle="Carica qualsiasi file audio OGG e convertilo in testo in pochi secondi. Supporta OGG Vorbis e OGG Opus. Senza account."
      defaultLanguage="it"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis & Opus', desc: 'Supporta file OGG da qualsiasi origine — registratori vocali, browser web, app di comunicazione.' },
        { icon: '🌍', title: '50+ lingue', desc: 'Lingua rilevata automaticamente. Funziona con italiano, inglese, spagnolo, francese e altri.' },
        { icon: '📄', title: 'Export .txt e .srt', desc: 'Scarica come testo semplice o come file SRT con timestamp.' },
      ]}
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
