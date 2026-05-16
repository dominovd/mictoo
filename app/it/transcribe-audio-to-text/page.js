import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio in testo — Trascrizione audio gratis online | Mictoo',
  description: 'Trascrivi audio in testo online gratis. Carica qualsiasi file audio e ottieni una trascrizione precisa all\'istante. 50+ lingue. IA.',
  alternates: { canonical: 'https://mictoo.com/it/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Audio in testo — Mictoo',
  url: 'https://mictoo.com/it/transcribe-audio-to-text',
  description: 'Convertitore audio-testo online gratis. Supporta MP3, WAV, M4A, OGG, FLAC e altri.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function ItAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Gratis"
        h1={<>Audio in testo<br /><span className="text-brand-600">Trascrizione IA gratis</span></>}
        subtitle="Il modo più veloce per convertire qualsiasi registrazione audio in testo. Carica il tuo file — senza account, senza abbonamento, senza attese."
        defaultLanguage="it"
        features={[
          { icon: '🎙️', title: 'Tutti i formati audio', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — qualsiasi file audio fino a 25 MB.' },
          { icon: '🧠', title: 'Precisione IA', desc: 'La nostra IA è addestrata su centinaia di migliaia di ore di audio multilingua, garantendo precisione di livello industriale.' },
          { icon: '🔒', title: 'Privato e sicuro', desc: 'Il tuo audio non viene mai memorizzato. I file vengono elaborati una volta e immediatamente eliminati.' },
        ]}
        faq={[
          { q: 'Qual è il miglior convertitore audio-testo gratis?', a: 'Mictoo usa l\'IA, considerata uno dei modelli di riconoscimento vocale gratuiti più precisi disponibili. Supporta oltre 50 lingue e non richiede account.' },
          { q: 'Quanto è accurata la trascrizione audio?', a: 'La nostra IA raggiunge il 95%+ di precisione su registrazioni chiare. Rumore di fondo o accenti marcati possono ridurla leggermente.' },
          { q: 'Quali formati audio sono supportati?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Anche i file video (MP4) sono accettati.' },
          { q: 'Quanto tempo richiede la trascrizione audio?', a: 'Una registrazione di 10 minuti viene tipicamente trascritta in 15-30 secondi. Nessuna coda — il tuo file è elaborato immediatamente.' },
          { q: 'Posso trascrivere la registrazione di una telefonata?', a: 'Sì. Le registrazioni di chiamate in MP3, WAV o M4A funzionano bene. L\'audio multi-speaker viene trascritto come un singolo blocco di testo (le etichette degli speaker richiedono uno strumento pro).' },
          { q: 'Devo selezionare la lingua?', a: 'No — la lingua è rilevata automaticamente. Se il rilevamento produce risultati scarsi, puoi selezionare la lingua manualmente dal menu a tendina.' },
        ]}
        relatedLinks={[
          { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
          { href: '/it/transcribe-video-to-text', label: 'Video in testo' },
          { href: '/it', label: 'Tutti i formati' },
        ]}
      />
    </>
  )
}
