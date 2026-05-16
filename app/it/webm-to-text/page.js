import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM in testo — Trascrizione WEBM gratis online | Mictoo',
  description: 'Converti file audio e video WEBM in testo gratis online. Carica qualsiasi registrazione WEBM e ottieni una trascrizione precisa all\'istante. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/webm-to-text', languages: LANGS },
}

export default function ItWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Registrazioni browser · Gratis"
      h1={<>WEBM in testo<br /><span className="text-brand-600">Trascrizione WEBM gratis online</span></>}
      subtitle="Carica qualsiasi file audio o video WEBM e ottieni una trascrizione testuale precisa in pochi secondi. WEBM è comunemente usato da browser, registratori di schermo e strumenti di videocall. Senza account."
      defaultLanguage="it"
      features={[
        { icon: '🖥️', title: 'Browser e schermo', desc: 'WEBM è il formato predefinito per le registrazioni schermo di Chrome e Firefox, per i clip Loom e per le registrazioni WebRTC.' },
        { icon: '🎬', title: 'WEBM audio e video', desc: 'Supporta sia WEBM solo audio sia WEBM video. L\'audio viene estratto automaticamente.' },
        { icon: '📄', title: 'Export .txt e .srt', desc: 'Scarica la trascrizione come testo semplice o come file SRT con timestamp.' },
      ]}
      faq={[
        { q: 'Come converto WEBM in testo?', a: 'Carica il tuo file WEBM sopra. La trascrizione viene generata automaticamente in pochi secondi.' },
        { q: 'La conversione WEBM-testo è gratis?', a: 'Sì, completamente gratis. Nessun account o registrazione richiesti.' },
        { q: 'Posso trascrivere registrazioni schermo Chrome?', a: 'Sì. Il registratore schermo integrato di Chrome salva il video come WEBM. Carica il file direttamente per ottenere una trascrizione.' },
        { q: 'Qual è la dimensione massima del WEBM?', a: 'Fino a 25 MB. Per registrazioni più grandi, estrai prima la traccia audio per ridurre la dimensione.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-video-to-text', label: 'Video in testo' },
        { href: '/it/wav-to-text', label: 'WAV in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
