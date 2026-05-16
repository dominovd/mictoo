import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 in testo — Trascrizione MP3 gratis online | Mictoo',
  description: 'Converti MP3 in testo online gratis. Carica il tuo file MP3 e ottieni una trascrizione precisa in pochi secondi. IA. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 in testo — Mictoo',
  url: 'https://mictoo.com/it/transcribe-mp3-to-text',
  description: 'Convertitore MP3-testo online gratis basato su IA.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function ItMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Gratis · Senza registrazione · Istantaneo"
        h1={<>Converti MP3 in testo<br /><span className="text-brand-600">Online, gratis</span></>}
        subtitle="Carica qualsiasi file MP3 e ottieni una trascrizione testuale precisa in pochi secondi. Funziona con interviste, podcast, lezioni, note vocali e altro."
        defaultLanguage="it"
        features={[
          { icon: '🎵', title: 'Qualsiasi file MP3', desc: 'Funziona con registrazioni vocali, episodi di podcast, interviste musicali, lezioni — qualsiasi MP3 fino a 25 MB.' },
          { icon: '🌍', title: '50+ lingue', desc: 'Rilevamento automatico della lingua. Il tuo MP3 può essere in italiano, inglese, spagnolo, francese o altre 47 lingue.' },
          { icon: '📋', title: 'Copia o scarica', desc: 'Ottieni la trascrizione come testo modificabile. Scarica come .txt o .srt (sottotitoli).' },
        ]}
        faq={[
          { q: 'Come converto un MP3 in testo?', a: 'Carica il tuo file MP3 con lo strumento sopra. Mictoo lo trascrive automaticamente con l\'IA e mostra il testo in pochi secondi.' },
          { q: 'La conversione MP3-testo è gratis?', a: 'Sì, completamente gratis. Nessun account richiesto. Carica e trascrivi.' },
          { q: 'Qual è la dimensione massima del file MP3?', a: 'Fino a 25 MB. Per registrazioni più lunghe, comprimi il file o dividilo in segmenti più brevi.' },
          { q: 'Quanto è accurata la trascrizione MP3?', a: 'Mictoo usa l\'IA, che tipicamente raggiunge il 95%+ di precisione su registrazioni chiare. La qualità può variare con molto rumore di fondo o accenti marcati.' },
          { q: 'Posso ottenere i sottotitoli da un file MP3?', a: 'Sì. Dopo la trascrizione, clicca il pulsante .srt per scaricare un file di sottotitoli con timestamp.' },
        ]}
        relatedLinks={[
          { href: '/it/transcribe-audio-to-text', label: 'Audio in testo' },
          { href: '/it/transcribe-video-to-text', label: 'Video in testo' },
          { href: '/it', label: 'Tutti i formati' },
        ]}
      />
    </>
  )
}
