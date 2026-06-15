import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A in testo — Trascrizione M4A gratis online | Mictoo',
  description: 'Converti file audio M4A in testo gratis. Carica qualsiasi M4A — voice memo iPhone, registrazioni, podcast — e ottieni la trascrizione all\'istante. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A in testo — Trascrizione M4A gratis online | Mictoo",
    description: "Converti file audio M4A in testo gratis. Carica qualsiasi M4A — voice memo iPhone, registrazioni, podcast — e ottieni la trascrizione all\\'istante. Senza registrazione.",
    url: "https://mictoo.com/it/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A in testo — Trascrizione M4A gratis online | Mictoo",
    description: "Converti file audio M4A in testo gratis. Carica qualsiasi M4A — voice memo iPhone, registrazioni, podcast — e ottieni la trascrizione all\\'istante. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Gratis · Istantaneo"
      h1={<>M4A in testo<br /><span className="text-brand-600">Trascrizione M4A gratis online</span></>}
      subtitle="Converti file audio M4A in testo all'istante. Ideale per voice memo iPhone, registrazioni vocali e file podcast. Senza account."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>M4A è il contenitore tipico di iPhone, Memo Vocali, GarageBand, Logic e molte app di registrazione. Di solito contiene audio AAC o ALAC.</p>
          <p>Mictoo trascrive M4A direttamente, evitando conversioni prima di ottenere testo da note vocali e registrazioni mobili.</p>
        </>
      }
      howItWorks={[
        { title: 'Carica il tuo M4A', desc: 'Aggiungi una nota vocale, un’intervista o un export audio Apple.' },
        { title: 'L’audio viene elaborato', desc: 'Mictoo legge il contenitore e genera una trascrizione modificabile.' },
        { title: 'Rivedi e scarica', desc: 'Correggi i dettagli ed esporta testo o sottotitoli.' },
      ]}
      whyUse={{
        title: 'Perché Mictoo per M4A',
        bullets: [
          { title: 'Perfetto per Memo Vocali', desc: 'Trasforma registrazioni iPhone in testo senza passaggi extra.' },
          { title: 'Più piccolo di WAV', desc: 'M4A è pratico per caricare interviste e note lunghe.' },
          { title: 'Compatibile con fonti comuni', desc: 'Funziona con audio mobile, podcast ed export di app.' },
          { title: 'Non distruttivo', desc: 'Conserva l’audio originale e lavora solo sulla trascrizione.' },
        ],
      }}
      useCases={{
        title: 'Quando trascrivere M4A',
        items: [
          { title: 'Memo Vocali iPhone', desc: 'Converti idee, interviste e promemoria in testo modificabile.' },
          { title: 'GarageBand o Logic', desc: 'Trascrivi bozze, podcast e sessioni esportate.' },
          { title: 'Chiamate registrate', desc: 'Ottieni note da conversazioni salvate come audio mobile.' },
          { title: 'Materiale di studio', desc: 'Trasforma lezioni o audiolibri personali in appunti.' },
        ],
      }}
      proTips={{
        title: 'Consigli per M4A',
        tips: [
          { title: 'Taglia i silenzi lunghi', desc: 'I file si caricano e si rivedono meglio senza minuti vuoti.' },
          { title: 'Non usare Lossless per abitudine', desc: 'Per voce chiara, AAC normale è spesso sufficiente per la trascrizione.' },
          { title: 'Seleziona la lingua se c’è mescolanza', desc: 'In audio brevi o bilingui, fissare la lingua aiuta.' },
        ],
      }}
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
