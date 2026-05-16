import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'Alternativa a TurboScribe — Trascrizione Whisper gratis, senza registrazione | Mictoo',
  description: 'TurboScribe è uno strumento popolare basato su Whisper ma richiede account e limita gli utenti gratis a 30 minuti al giorno. Mictoo è totalmente senza registrazione con riassunto IA integrato.',
  alternates: { canonical: 'https://mictoo.com/it/turboscribe-alternative', languages: LANGS },
}

export default function ItTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Confronto · TurboScribe · Gratis"
      h1={<>Alternativa a TurboScribe<br /><span className="text-brand-600">Stesso Whisper, senza registrazione</span></>}
      subtitle="TurboScribe e Mictoo usano entrambi OpenAI Whisper, quindi la qualità della trascrizione è quasi identica. Le differenze principali sono registrazione, limiti file e riassunto IA integrato."
      competitorName="TurboScribe"
      rows={[
        { label: 'Piano gratuito',         mictoo: 'Senza tetto mensile, 25 MB per file', them: '3 file al giorno, 30 min ciascuno' },
        { label: 'Account richiesto',      mictoo: 'No', them: 'Sì (registrazione email)' },
        { label: 'Piani a pagamento',      mictoo: 'Gratis',  them: '20 $ / mese illimitato' },
        { label: 'Dimensione file (gratis)', mictoo: '25 MB per file', them: '~150 MB / 30 min per file' },
        { label: 'Dimensione file (a pagamento)', mictoo: 'Come gratis', them: '5 GB / 10 h per file' },
        { label: 'Upload batch',           mictoo: 'No', them: 'Sì (a pagamento, fino a 50 file)' },
        { label: 'Modello di trascrizione',mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'Riassunto IA',           mictoo: 'Sì, gratis', them: 'Sì (a pagamento)' },
        { label: 'Export SRT',             mictoo: 'Sì, gratis', them: 'Sì' },
        { label: 'Cronologia trascrizioni', mictoo: 'No', them: 'Sì (basata su account)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Davvero senza registrazione', desc: 'TurboScribe richiede email anche nel piano gratis. Mictoo non chiede nulla — carichi file, ottieni testo. Utile per registrazioni singole quando non vuoi un altro account.' },
        { icon: '✨', title: 'Riassunto IA nel piano gratis', desc: 'Mictoo genera automaticamente un riassunto di 2-3 frasi, punti chiave e action item dopo ogni trascrizione. TurboScribe mette il riassunto IA dietro il paywall di 20 $/mese.' },
        { icon: '🔒', title: 'Niente viene memorizzato', desc: 'Nessuna cronologia trascrizioni, nessun workspace cloud, nessun progetto. L\'audio viene inviato a Whisper e scartato immediatamente. TurboScribe memorizza le tue trascrizioni nel tuo account.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Vuoi zero attrito di registrazione',
          'Ti serve riassunto IA nel piano gratis',
          'I tuoi file sono sotto 25 MB (o puoi comprimere)',
          'Apprezzi non avere una cronologia memorizzata',
        ],
        them: [
          'Hai bisogno di file più grandi di 25 MB nel piano gratis',
          'Vuoi una cronologia di tutte le trascrizioni passate',
          'Devi caricare molti file insieme (batch)',
          'Ti va bene pagare 20 $/mese per file grandi illimitati',
        ],
      }}
      faq={[
        { q: 'La qualità di trascrizione è la stessa?', a: 'Sì, essenzialmente. Entrambi gli strumenti usano il modello Whisper di OpenAI. Le differenze vengono da come ogni strumento segmenta l\'audio e gestisce i casi limite, ma l\'accuratezza di base è comparabile.' },
        { q: 'Perché Mictoo ha un limite di file più piccolo?', a: 'Il limite di 25 MB viene dall\'API Whisper di OpenAI. TurboScribe gestisce file più grandi dividendoli sui propri server e riunendo i risultati. Stiamo lavorando sullo stesso approccio.' },
        { q: 'Posso ottenere trascrizioni di file lunghi con Mictoo?', a: 'Per ora i file devono stare sotto i 25 MB. La guida how-to-compress-audio sul nostro sito descrive tre modi rapidi per far stare una registrazione lunga: estrarre l\'audio, abbassare il bitrate o dividere in segmenti.' },
        { q: 'Mictoo prevede di aggiungere account/cronologia?', a: 'Una cronologia locale (nel browser, senza account server) è nella roadmap. La cronologia cloud con registrazione non è intenzionalmente nel prodotto — confligge con il posizionamento senza registrazione.' },
        { q: 'Quale è più veloce?', a: 'TurboScribe pubblicizza ~30 minuti elaborati in meno di un minuto. Mictoo è simile — la maggior parte dei file viene trascritta in 15-30 secondi. Entrambi sembrano quasi istantanei per file sotto i 25 minuti.' },
      ]}
      relatedLinks={[
        { href: '/it/descript-alternative', label: 'Alternativa a Descript' },
        { href: '/it/notta-alternative', label: 'Alternativa a Notta' },
        { href: '/it', label: 'Prova Mictoo' },
      ]}
    />
  )
}
