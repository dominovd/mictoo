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
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV in testo — Trascrizione WAV gratis online | Mictoo',
  description: 'Converti file WAV in testo online gratis. Carica qualsiasi file audio WAV e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV in testo — Trascrizione WAV gratis online | Mictoo",
    description: "Converti file WAV in testo online gratis. Carica qualsiasi file audio WAV e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.",
    url: "https://mictoo.com/it/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV in testo — Trascrizione WAV gratis online | Mictoo",
    description: "Converti file WAV in testo online gratis. Carica qualsiasi file audio WAV e ottieni una trascrizione precisa in pochi secondi. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Gratis · Istantaneo"
      h1={<>WAV in testo<br /><span className="text-brand-600">Trascrizione WAV gratis online</span></>}
      subtitle="Carica qualsiasi file audio WAV e ottieni una trascrizione testuale precisa in pochi secondi. Supporta tutte le registrazioni WAV — interviste, chiamate, lezioni, note vocali. Senza account."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>WAV è spesso audio non compresso da studi, registratori, DAW, interviste e archivi. La qualità è alta, ma i file possono essere grandi.</p>
          <p>Mictoo trasforma WAV in una trascrizione modificabile e consente di esportare testo o sottotitoli senza digitare manualmente la registrazione.</p>
        </>
      }
      howItWorks={[
        { title: 'Carica il WAV', desc: 'Aggiungi un’intervista, una lezione, un podcast, un bounce DAW o una registrazione sul campo.' },
        { title: 'L’IA trascrive la voce', desc: 'Mictoo elabora l’audio e crea testo con timestamp.' },
        { title: 'Modifica ed esporta', desc: 'Copia il testo o scarica formati utili come TXT o SRT.' },
      ]}
      whyUse={{
        title: 'Perché Mictoo per WAV',
        bullets: [
          { title: 'Caricamento WAV diretto', desc: 'Evita conversioni per registrazioni da studio o registratore quando il file rientra nel limite.' },
          { title: 'Utile per fonti professionali', desc: 'Funziona per interviste, podcast, lezioni, archivi e DAW.' },
          { title: 'Timestamp per revisione', desc: 'Torna all’audio originale quando correggi citazioni o nomi.' },
          { title: 'Guida per file grandi', desc: 'Puoi creare una copia mono più leggera se il WAV completo è troppo pesante.' },
        ],
      }}
      useCases={{
        title: 'Quando trascrivere WAV',
        items: [
          { title: 'Interviste', desc: 'Estrai citazioni e domande da registrazioni pulite.' },
          { title: 'Podcast', desc: 'Crea show notes, captions e contenuti riutilizzabili.' },
          { title: 'Lezioni e conferenze', desc: 'Trasforma sessioni lunghe in appunti ricercabili.' },
          { title: 'Archivi', desc: 'Rendi consultabili registrazioni vecchie o istituzionali.' },
        ],
      }}
      proTips={{
        title: 'Consigli per WAV',
        tips: [
          { title: 'Usa una copia 16 kHz mono se pesa molto', desc: 'Per la voce, una copia di lavoro più leggera è spesso sufficiente.' },
          { title: 'Taglia i silenzi', desc: 'Riduci dimensioni e tempo di revisione senza toccare il contenuto parlato.' },
          { title: 'Conserva il WAV originale', desc: 'Mantieni il master e usa una versione compressa solo se devi caricare più velocemente.' },
        ],
      }}
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
