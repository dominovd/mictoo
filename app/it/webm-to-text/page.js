import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM in testo — Trascrizione WEBM gratis online | Mictoo',
  description: 'Converti file audio e video WEBM in testo gratis online. Carica qualsiasi registrazione WEBM e ottieni una trascrizione precisa all\'istante. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM in testo — Trascrizione WEBM gratis online | Mictoo",
    description: "Converti file audio e video WEBM in testo gratis online. Carica qualsiasi registrazione WEBM e ottieni una trascrizione precisa all\\'istante. Senza registrazione.",
    url: "https://mictoo.com/it/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM in testo — Trascrizione WEBM gratis online | Mictoo",
    description: "Converti file audio e video WEBM in testo gratis online. Carica qualsiasi registrazione WEBM e ottieni una trascrizione precisa all\\'istante. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Registrazioni browser · Gratis"
      h1={<>WEBM in testo<br /><span className="text-brand-600">Trascrizione WEBM gratis online</span></>}
      subtitle="Carica qualsiasi file audio o video WEBM e ottieni una trascrizione testuale precisa in pochi secondi. WEBM è comunemente usato da browser, registratori di schermo e strumenti di videocall. Senza account."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>WEBM arriva spesso da registrazioni del browser, screen recording, Loom, OBS o chiamate web. Può contenere video, ma per la trascrizione conta soprattutto la traccia vocale.</p>
          <p>Mictoo estrae l’audio dal WEBM e lo converte in testo con timestamp, senza richiedere un render manuale in un altro formato.</p>
        </>
      }
      howItWorks={[
        { title: 'Carica il WEBM', desc: 'Aggiungi la registrazione da browser, schermo o chiamata.' },
        { title: 'L’audio viene estratto', desc: 'Mictoo elabora la voce e genera una trascrizione modificabile.' },
        { title: 'Esporta testo o sottotitoli', desc: 'Scarica TXT o SRT per note, documentazione o captions.' },
      ]}
      whyUse={{
        title: 'Perché Mictoo per WEBM',
        bullets: [
          { title: 'Meno passaggi tecnici', desc: 'Evita di aprire ffmpeg solo per estrarre l’audio da una registrazione web.' },
          { title: 'Timestamp allineati', desc: 'I riferimenti temporali aiutano a tornare al punto esatto del video.' },
          { title: 'Adatto a Opus', desc: 'WEBM usa spesso Opus, efficiente per la voce.' },
          { title: 'Privacy pratica', desc: 'Trascrivi una registrazione locale senza pubblicarla su una piattaforma video.' },
        ],
      }}
      useCases={{
        title: 'Quando trascrivere WEBM',
        items: [
          { title: 'Registrazioni Loom', desc: 'Trasforma tutorial e demo in note o documentazione.' },
          { title: 'Capture OBS', desc: 'Estrai testo da lezioni, webinar o test di prodotto.' },
          { title: 'Riunioni nel browser', desc: 'Recupera decisioni e domande da registrazioni locali.' },
          { title: 'QA e ricerca', desc: 'Trascrivi sessioni utente per rivedere citazioni e problemi.' },
        ],
      }}
      proTips={{
        title: 'Consigli per WEBM',
        tips: [
          { title: 'Estrai l’audio se il video è enorme', desc: 'Una traccia OPUS o M4A può caricarsi più velocemente del WEBM completo.' },
          { title: 'Cura il microfono', desc: 'Una voce chiara migliora la trascrizione più della risoluzione video.' },
          { title: 'Conserva il WEBM originale', desc: 'Usalo dopo per montare clip o verificare i timestamp.' },
        ],
      }}
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
