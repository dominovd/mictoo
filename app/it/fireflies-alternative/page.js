import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'pl': 'https://mictoo.com/pl/fireflies-alternative',
  'ja': 'https://mictoo.com/ja/fireflies-alternative',
  'ko': 'https://mictoo.com/ko/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Alternativa a Fireflies — Trascrivi riunioni senza bot | Mictoo',
  description: 'Fireflies si unisce alle tue riunioni come bot per registrare e trascrivere. Mictoo trascrive le registrazioni che hai già — niente bot, niente registrazione, niente OAuth. Gratis con OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/it/fireflies-alternative', languages: LANGS },

  openGraph: {
    title: "Alternativa a Fireflies — Trascrivi riunioni senza bot | Mictoo",
    description: "Fireflies si unisce alle tue riunioni come bot per registrare e trascrivere. Mictoo trascrive le registrazioni che hai già — niente bot, niente registrazione, niente OAuth. Gratis con OpenAI Whisper.",
    url: "https://mictoo.com/it/fireflies-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alternativa a Fireflies — Trascrivi riunioni senza bot | Mictoo",
    description: "Fireflies si unisce alle tue riunioni come bot per registrare e trascrivere. Mictoo trascrive le registrazioni che hai già — niente bot, niente registrazione, niente OAuth. Gratis con OpenAI Whisper.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Confronto · Fireflies · Gratis"
      h1={<>Alternativa a Fireflies<br /><span className="text-brand-600">Trascrivi riunioni senza bot</span></>}
      subtitle="Fireflies si unisce alle tue riunioni come bot IA per registrare e trascrivere in tempo reale. Mictoo funziona al contrario — carica la registrazione che hai già e ottieni la trascrizione. Niente bot, niente integrazione calendario, niente registrazione."
      competitorName="Fireflies"
      rows={[
        { label: 'Piano gratuito',         mictoo: 'Senza tetto mensile, 25 MB per file', them: '800 minuti / utente / mese' },
        { label: 'Account richiesto',      mictoo: 'No', them: 'Sì (email + OAuth)' },
        { label: 'Piani a pagamento',      mictoo: 'Gratis',  them: '10-19 $ / utente / mese' },
        { label: 'Metodo di registrazione',mictoo: 'Carichi tu la registrazione', them: 'Il bot si unisce alla call in diretta' },
        { label: 'Trascrizione live',      mictoo: 'No', them: 'Sì (durante la chiamata)' },
        { label: 'Integrazione calendario',mictoo: 'No', them: 'Google / Outlook / Zoom' },
        { label: 'Riassunto IA',           mictoo: 'Sì, gratis', them: 'Sì (a pagamento)' },
        { label: 'Integrazione CRM',       mictoo: 'No', them: 'Salesforce, HubSpot, ecc.' },
        { label: 'Modello di trascrizione',mictoo: 'OpenAI Whisper', them: 'Proprietario' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Nessun bot nelle tue riunioni', desc: 'Alcuni partecipanti sono a disagio con un bot IA che registra la chiamata. Con Mictoo registri localmente con Zoom/Meet/Teams e trascrivi dopo.' },
        { icon: '🆓', title: 'Senza registrazione, senza quota', desc: 'Il piano gratis di Fireflies ti limita a 800 minuti per utente al mese e richiede OAuth. Mictoo funziona senza account e senza conteggio minuti mensili.' },
        { icon: '🌍', title: 'Migliore per audio non-inglese', desc: 'OpenAI Whisper gestisce oltre 50 lingue con alta precisione. Fireflies è ottimizzato per chiamate business in inglese ed è più debole su lingue come russo, ucraino, polacco o coreano.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Registri tu le riunioni e vuoi una trascrizione dopo',
          'Non vuoi un bot IA nelle tue chiamate',
          'Hai bisogno di trascrizione per riunioni non in inglese',
          'Vuoi un\'opzione gratis senza registrazione per registrazioni singole',
        ],
        them: [
          'Vuoi la trascrizione live durante la riunione',
          'Hai bisogno di logging CRM delle conversazioni di vendita',
          'Il tuo team vuole registrazione automatica di tutte le chiamate',
          'Hai bisogno di analytics conversazione (tempo di parola, sentiment, ecc.)',
        ],
      }}
      faq={[
        { q: 'Mictoo può unirsi alla mia riunione Zoom o Teams come Fireflies?', a: 'No. Mictoo non si unisce alle riunioni. Registri la chiamata con la registrazione integrata di Zoom/Teams/Meet, poi carichi il file. Questo evita il bot nelle tue riunioni e le preoccupazioni di privacy associate.' },
        { q: 'Come ottengo una registrazione da caricare?', a: 'In Zoom: abilita Local Recording o Cloud Recording nella riunione. Dopo la riunione, scarica l\'MP4 o M4A da Zoom e caricalo su Mictoo.' },
        { q: 'Mictoo fa action item e riassunto come Fireflies?', a: 'Sì. Dopo la trascrizione, il Riassunto IA di Mictoo mostra una panoramica di 2-3 frasi, punti chiave e action item — tutto nel piano gratis. Fireflies offre funzionalità simili solo nei piani a pagamento.' },
        { q: 'E gli analytics di riunione?', a: 'Mictoo non fa tempo di parola, sentiment o analytics speaker. Se ti serve conversation intelligence per coaching vendite, Fireflies (o Gong) è più adatto.' },
        { q: 'Mictoo è sicuro per riunioni confidenziali?', a: 'I file vengono inviati direttamente all\'API Whisper di OpenAI e scartati. Mictoo non memorizza nulla. Secondo la policy dati API di OpenAI, il tuo audio non è usato per training ed è eliminato dopo massimo 30 giorni di monitoraggio anti-abuso.' },
      ]}
      relatedLinks={[
        { href: '/it/otter-alternative', label: 'Alternativa a Otter' },
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom' },
        { href: '/it', label: 'Prova Mictoo' },
      ]}
    />
  )
}
