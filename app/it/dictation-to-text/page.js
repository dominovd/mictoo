import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dettatura in testo — Trascrizione gratis di dettatura vocale | Mictoo',
  description: 'Converti gratis le tue dettature audio in testo. Ideale per scrittori, medici, avvocati e ricercatori. Supporta MP3, M4A, WAV. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/dictation-to-text', languages: LANGS },
}

export default function ItDictationPage() {
  return (
    <LandingLayout
      badge="Dettatura · Voce → Testo · Gratis"
      h1={<>Dettatura in testo<br /><span className="text-brand-600">Trascrizione gratis di dettatura vocale</span></>}
      subtitle="Registra i tuoi pensieri, detta un capitolo o prendi appunti — poi carica il file qui per ottenere una trascrizione testuale precisa. Senza registrazione, senza app da installare."
      defaultLanguage="it"
      features={[
        { icon: '📝', title: 'Per scrittori e ricercatori', desc: 'Detta una bozza di capitolo, una scaletta di articolo o note di intervista. Mictoo converte la tua voce in testo pulito e modificabile in pochi secondi.' },
        { icon: '👨‍⚕️', title: 'Per medici e avvocati', desc: 'Detta note di caso, riassunti pazienti o memo dal tuo telefono e trasformali in testo per i tuoi archivi. I file vengono elaborati ed eliminati all\'istante.' },
        { icon: '🌍', title: '50+ lingue', desc: 'Detta in italiano, inglese, spagnolo, francese, tedesco, giapponese e molte altre. La lingua è rilevata automaticamente; modificabile se necessario.' },
      ]}
      faq={[
        { q: 'Come registrare una dettatura sul telefono?', a: 'iPhone: app Voice Memos — export in .m4a. Android: registratore vocale integrato o Easy Voice Recorder — export in .mp3 o .m4a. Carica il file su Mictoo.' },
        { q: 'Mictoo è uno strumento di dettatura in tempo reale?', a: 'No — Mictoo trascrive file audio esistenti. Per la dettatura in tempo reale (parli e vedi il testo apparire) usa la dettatura integrata del sistema operativo (macOS, Windows, iOS, Android). Usa Mictoo dopo per ripulire registrazioni lunghe.' },
        { q: 'Quanto è accurata la trascrizione della dettatura?', a: 'Una dettatura chiara con un solo speaker viene trascritta tipicamente al 95%+ di precisione. Parla a ritmo naturale, in una stanza silenziosa, e usa cuffie per i migliori risultati.' },
        { q: 'Posso usarlo per dettatura medica o legale?', a: 'Sì, ma verifica la normativa locale sul trattamento IA di dati di pazienti o clienti. Mictoo non memorizza i file — ma l\'audio passa attraverso il nostro provider IA per la trascrizione. Per flussi regolamentati (HIPAA), consulta il tuo team compliance.' },
        { q: 'Qual è la durata massima della dettatura?', a: 'Fino a 25 MB. A 64 kbps mono sono circa 50 minuti di dettatura. Per registrazioni più lunghe, dividi in capitoli o abbassa il bitrate.' },
      ]}
      relatedLinks={[
        { href: '/it/voice-memo-to-text', label: 'Memo vocale in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
