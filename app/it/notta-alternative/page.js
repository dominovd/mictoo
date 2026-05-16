import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'ja': 'https://mictoo.com/ja/notta-alternative',
  'ko': 'https://mictoo.com/ko/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Alternativa a Notta — Trascrizione gratis senza limiti mensili | Mictoo',
  description: 'Notta limita gli utenti gratis a 120 minuti al mese e ogni trascrizione a 3 minuti. Mictoo è gratis, senza registrazione, senza quota mensile di minuti — basato su OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/it/notta-alternative', languages: LANGS },
}

export default function ItNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Confronto · Notta · Gratis"
      h1={<>Alternativa a Notta<br /><span className="text-brand-600">Senza tetto mensile di 120 minuti</span></>}
      subtitle="Notta è uno strumento di trascrizione all-in-one popolare, ma il piano gratis ti limita a 120 minuti al mese e 3 minuti per file. Mictoo non ha quota mensile e solo un limite per dimensione file — gratis, senza registrazione."
      competitorName="Notta"
      rows={[
        { label: 'Piano gratuito',         mictoo: 'Senza tetto mensile, 25 MB per file', them: '120 min/mese, 3 min per file' },
        { label: 'Account richiesto',      mictoo: 'No', them: 'Sì (registrazione email)' },
        { label: 'Piani a pagamento',      mictoo: 'Gratis',  them: '9 - 25 $ / utente / mese' },
        { label: 'Durata per file',        mictoo: '~25 min (limite dimensione)', them: '3 min (gratis) / 5 h (a pagamento)' },
        { label: 'Trascrizione live',      mictoo: 'No', them: 'Sì (Notta Bot in riunioni)' },
        { label: 'Riassunto IA',           mictoo: 'Sì, gratis', them: 'Sì (a pagamento)' },
        { label: 'Modello di trascrizione',mictoo: 'OpenAI Whisper', them: 'Proprietario' },
        { label: 'Etichette speaker',      mictoo: 'Modifica manuale', them: 'Automatico (a pagamento)' },
        { label: 'Lingue',                 mictoo: '50+', them: '100+ (piani a pagamento)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'Niente limite di 3 minuti per file', desc: 'Il limite di 3 minuti per file di Notta è troppo breve per podcast, lezioni o interviste. Mictoo gestisce file audio di ~25 minuti gratis.' },
        { icon: '🆓', title: 'Niente quota minuti mensile', desc: 'Notta conta ogni minuto contro una quota di 120 min/mese. Mictoo limita solo la dimensione del singolo file — carica un file o più, senza conteggio minuti.' },
        { icon: '✨', title: 'Riassunto IA nel piano gratis', desc: 'Notta mette i riassunti IA nei piani a pagamento. Mictoo genera un riassunto con punti chiave e action item gratis, ogni volta.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Devi trascrivere gratis file più lunghi di 3 minuti',
          'Non vuoi sbattere contro il tetto mensile di 120 minuti',
          'Vuoi riassunto IA senza pagare',
          'Non ti serve la diarizzazione automatica degli speaker',
        ],
        them: [
          'Ti serve un Notta Bot che si unisca alle riunioni live',
          'Ti servono etichette speaker automatiche',
          'Vuoi un flusso integrato con CRM',
          'Ti va bene pagare per funzionalità illimitate',
        ],
      }}
      faq={[
        { q: 'Mictoo è davvero gratis senza quota minuti?', a: 'Sì. L\'unico limite è la dimensione per file (25 MB, che equivalgono a circa 25 minuti a un bitrate podcast tipico). Nessun tracking mensile dei minuti e nessun limite di numero file.' },
        { q: 'Perché Notta limita così pesantemente gli utenti gratis?', a: 'Notta usa un modello freemium dove il piano gratis è intenzionalmente limitato per incentivare upgrade a pagamento. Il modello di Mictoo è ad-supported, quindi il piano gratis è generoso by design.' },
        { q: 'Come guadagna Mictoo se è gratis?', a: 'Annunci display (Google AdSense), mostrati durante lo stato di caricamento mentre un file viene trascritto. La trascrizione stessa e l\'area di upload sono senza pubblicità.' },
        { q: 'Mictoo supporta la trascrizione live di riunioni?', a: 'No — Mictoo lavora solo su file registrati. Per la cattura live, usa i sottotitoli integrati della tua piattaforma (Zoom, Google Meet, Teams) e carica la registrazione su Mictoo dopo per una trascrizione rifinita.' },
        { q: 'Quali lingue supporta Mictoo?', a: 'OpenAI Whisper gestisce oltre 50 lingue con rilevamento automatico — italiano, inglese, spagnolo, francese, tedesco, russo, ucraino, giapponese, cinese, arabo, hindi, coreano e molti altri. Non c\'è bisogno di selezionare la lingua a meno che il rilevamento automatico sbagli.' },
      ]}
      relatedLinks={[
        { href: '/it/turboscribe-alternative', label: 'Alternativa a TurboScribe' },
        { href: '/it/otter-alternative', label: 'Alternativa a Otter' },
        { href: '/it/podcast-transcription', label: 'Trascrizione di podcast' },
        { href: '/it', label: 'Prova Mictoo' },
      ]}
    />
  )
}
