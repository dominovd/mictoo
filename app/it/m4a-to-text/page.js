import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A in testo — Trascrizione M4A gratis online | Mictoo',
  description: 'Converti file audio M4A in testo gratis. Carica qualsiasi M4A — voice memo iPhone, registrazioni, podcast — e ottieni la trascrizione all\'istante. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/m4a-to-text', languages: LANGS },
}

export default function ItM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Gratis · Istantaneo"
      h1={<>M4A in testo<br /><span className="text-brand-600">Trascrizione M4A gratis online</span></>}
      subtitle="Converti file audio M4A in testo all'istante. Ideale per voice memo iPhone, registrazioni vocali e file podcast. Senza account."
      defaultLanguage="it"
      features={[
        { icon: '📱', title: 'Voice memo iPhone', desc: 'M4A è il formato predefinito per voice memo e registrazioni iPhone. Carica direttamente e ottieni la trascrizione in pochi secondi.' },
        { icon: '🎵', title: 'Qualsiasi M4A', desc: 'File M4A da qualsiasi origine — iPhone, Mac, registratori digitali, app di podcasting — pienamente supportati.' },
        { icon: '📄', title: 'Export in testo o SRT', desc: 'Scarica la trascrizione come .txt semplice o come .srt con timestamp.' },
      ]}
      faq={[
        { q: 'Come converto M4A in testo?', a: 'Carica il tuo file M4A con lo strumento sopra. La trascrizione viene generata automaticamente e mostrata in pochi secondi.' },
        { q: 'Posso trascrivere voice memo iPhone?', a: 'Sì. I voice memo iPhone sono salvati come M4A. Carica il file direttamente dall\'iPhone o dopo averlo trasferito sul computer.' },
        { q: 'M4A in testo è gratis?', a: 'Sì, completamente gratis. Nessun account, nessun abbonamento. Carica e trascrivi.' },
        { q: 'Qual è la dimensione massima dell\'M4A?', a: 'Fino a 25 MB. La maggior parte delle registrazioni vocali e dei clip audio brevi rientrano facilmente in questo limite.' },
        { q: 'Quali altri formati audio sono supportati?', a: 'Oltre a M4A, Mictoo supporta MP3, MP4, WAV, OGG, WEBM e FLAC.' },
      ]}
      relatedLinks={[
        { href: '/it/wav-to-text', label: 'WAV in testo' },
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
