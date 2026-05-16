import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV in testo — Trascrizione WAV gratis online | Mictoo',
  description: 'Converti file WAV in testo online gratis. Carica qualsiasi file audio WAV e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/wav-to-text', languages: LANGS },
}

export default function ItWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Gratis · Istantaneo"
      h1={<>WAV in testo<br /><span className="text-brand-600">Trascrizione WAV gratis online</span></>}
      subtitle="Carica qualsiasi file audio WAV e ottieni una trascrizione testuale precisa in pochi secondi. Supporta tutte le registrazioni WAV — interviste, chiamate, lezioni, note vocali. Senza account."
      defaultLanguage="it"
      features={[
        { icon: '🎙️', title: 'Qualsiasi WAV', desc: 'WAV standard, PCM, broadcast WAV — qualsiasi formato WAV fino a 25 MB.' },
        { icon: '⏱️', title: 'Timestamp inclusi', desc: 'Scarica la trascrizione come .txt o come file di sottotitoli .srt con timecode.' },
        { icon: '🌍', title: '50+ lingue', desc: 'La lingua è rilevata automaticamente. Funziona con italiano, inglese, spagnolo, francese, tedesco, russo e molte altre.' },
      ]}
      faq={[
        { q: 'Come converto un file WAV in testo?', a: 'Carica il tuo file WAV con lo strumento sopra. Mictoo lo trascrive automaticamente con l\'IA e mostra il testo in pochi secondi.' },
        { q: 'La conversione WAV-testo è gratis?', a: 'Sì, completamente gratis. Senza account. Carica i tuoi WAV — nessun tetto mensile, nessuna registrazione.' },
        { q: 'Qual è la dimensione massima del WAV?', a: 'Fino a 25 MB. Per registrazioni più grandi, converti prima in MP3 o dividi la registrazione in segmenti.' },
        { q: 'Posso ottenere una trascrizione con timestamp da un WAV?', a: 'Sì. Dopo la trascrizione, clicca il pulsante .srt per scaricare un file di sottotitoli con timestamp precisi per ogni segmento.' },
        { q: 'Quali altri formati audio sono supportati?', a: 'Mictoo supporta anche MP3, MP4, M4A, OGG, WEBM e FLAC oltre al WAV.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
