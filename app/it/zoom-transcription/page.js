import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Trascrizione Zoom — Da registrazioni Zoom a testo gratis | Mictoo',
  description: 'Trascrivi gratis registrazioni di riunioni Zoom in testo. Funziona con MP4 e M4A esportati da Zoom Cloud o Local Recording. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/zoom-transcription', languages: LANGS },
}

export default function ItZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · Gratis"
      h1={<>Trascrizione Zoom<br /><span className="text-brand-600">Registrazioni Zoom in testo</span></>}
      subtitle="Carica la registrazione della tua call Zoom e ottieni una trascrizione testuale pulita in pochi secondi. Gratis, senza account. Funziona con MP4 da Cloud Recording o Local Recording."
      defaultLanguage="it"
      features={[
        { icon: '⚡', title: 'Veloce e gratis', desc: 'Una riunione Zoom di 25 minuti viene tipicamente trascritta in meno di 30 secondi. 100% gratis, senza account, senza carta di credito.' },
        { icon: '🎯', title: 'Alta precisione', desc: 'L\'audio di Zoom (di solito chiaro e con un solo speaker per volta) ottiene risultati eccellenti con Whisper — accuratezza tipicamente >95%.' },
        { icon: '📥', title: 'Export .txt o .srt', desc: 'Scarica la trascrizione come testo semplice o come file di sottotitoli SRT con timecode.' },
      ]}
      faq={[
        { q: 'Come abilitare la registrazione su Zoom?', a: 'Nelle impostazioni Zoom: vai in Recording → abilita Local Recording (sul tuo computer) o Cloud Recording (sul cloud Zoom, richiede piano a pagamento). Durante la call, clicca Record.' },
        { q: 'Zoom ha già una trascrizione automatica?', a: 'Sì, Zoom offre live transcription se attivata, ma il file resta nell\'ecosistema Zoom e non è sempre scaricabile come .txt portabile. Mictoo ti dà un .txt o .srt portatile usabile ovunque.' },
        { q: 'Posso ottenere sottotitoli SRT per il video Zoom?', a: 'Sì. Dopo la trascrizione, scarica un file .srt con timecode e usalo come sottotitoli su YouTube, Vimeo o in qualsiasi editor video.' },
        { q: 'Cosa succede con i contenuti confidenziali?', a: 'Mictoo non memorizza i file. L\'audio viene inviato al nostro provider IA per la trascrizione e poi scartato. Per call con dati regolamentati, controlla la policy aziendale sui servizi IA di terze parti.' },
        { q: 'Qual è la durata massima della registrazione Zoom?', a: 'Fino a 25 MB per file. Una call di 30 minuti in mono a 64 kbps entra; per call più lunghe estrai solo l\'audio (M4A) o comprimi il video.' },
      ]}
      relatedLinks={[
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it/google-meet-transcription', label: 'Trascrizione Google Meet' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
