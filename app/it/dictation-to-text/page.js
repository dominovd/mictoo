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
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dettatura in testo — Trascrizione gratis di dettatura vocale | Mictoo',
  description: 'Converti gratis le tue dettature audio in testo. Ideale per scrittori, medici, avvocati e ricercatori. Supporta MP3, M4A, WAV. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "Dettatura in testo — Trascrizione gratis di dettatura vocale | Mictoo",
    description: "Converti gratis le tue dettature audio in testo. Ideale per scrittori, medici, avvocati e ricercatori. Supporta MP3, M4A, WAV. Senza registrazione.",
    url: "https://mictoo.com/it/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dettatura in testo — Trascrizione gratis di dettatura vocale | Mictoo",
    description: "Converti gratis le tue dettature audio in testo. Ideale per scrittori, medici, avvocati e ricercatori. Supporta MP3, M4A, WAV. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItDictationPage() {
  return (
    <LandingLayout
      badge="Dettatura · Voce → Testo · Gratis"
      h1={<>Dettatura in testo<br /><span className="text-brand-600">Trascrizione gratis di dettatura vocale</span></>}
      subtitle="Registra i tuoi pensieri, detta un capitolo o prendi appunti — poi carica il file qui per ottenere una trascrizione testuale precisa. Senza registrazione, senza app da installare."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>La dettatura registrata non è una riunione. Contiene spesso idee lunghe, pause, correzioni e frasi che poi vuoi trasformare in bozza.</p>
          <p>Mictoo ti permette di registrare prima, pensare senza pressione e convertire dopo l’audio in testo modificabile.</p>
        </>
      }
      howItWorks={[
        { title: 'Registra la dettatura', desc: 'Usa telefono, registratore o qualsiasi app vocale.' },
        { title: 'Carica l’audio', desc: 'Mictoo lo trascrive e mantiene una struttura facile da rivedere.' },
        { title: 'Trasforma in bozza', desc: 'Modifica frasi, titoli, liste e note fino a ottenere un testo utilizzabile.' },
      ]}
      whyUse={{
        title: 'Perché Mictoo per la dettatura',
        bullets: [
          { title: 'Senza pressione in tempo reale', desc: 'Puoi parlare, fermarti e riprendere prima di editare.' },
          { title: 'Buono per idee lunghe', desc: 'Trasforma pensieri completi in una prima bozza.' },
          { title: 'Utile con accenti e lingue', desc: 'Seleziona la lingua quando il rilevamento automatico ha poco contesto.' },
          { title: 'Revisione semplice', desc: 'Correggi punteggiatura, nomi e sezioni nel testo.' },
        ],
      }}
      useCases={{
        title: 'Cosa dettare',
        items: [
          { title: 'Articoli', desc: 'Parla seguendo una scaletta e trasformala in prima bozza.' },
          { title: 'Note di chiamata', desc: 'Riassumi decisioni subito dopo una conversazione.' },
          { title: 'Capitoli o idee per libri', desc: 'Cattura testo lungo quando scrivere rallenta il ritmo.' },
          { title: 'Note professionali', desc: 'Documenta visite, task o report mentre sono ancora freschi.' },
        ],
      }}
      proTips={{
        title: 'Consigli per dettare meglio',
        tips: [
          { title: 'Parla in frasi complete', desc: 'Punteggiatura e revisione funzionano meglio con idee chiuse.' },
          { title: 'Fai pause tra le sezioni', desc: 'Sarà più facile separare paragrafi e titoli.' },
          { title: 'Pronuncia i marcatori', desc: 'Frasi come “punto uno” o “nuova sezione” aiutano durante l’editing.' },
        ],
      }}
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
