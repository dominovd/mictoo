import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'pl': 'https://mictoo.com/pl/descript-alternative',
  'ja': 'https://mictoo.com/ja/descript-alternative',
  'ko': 'https://mictoo.com/ko/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Alternativa a Descript — Trascrizione gratis senza registrazione | Mictoo',
  description: 'Cerchi un\'alternativa a Descript solo per la trascrizione? Mictoo offre trascrizione IA gratuita senza registrazione, basata su OpenAI Whisper. Senza editor, senza abbonamento.',
  alternates: { canonical: 'https://mictoo.com/it/descript-alternative', languages: LANGS },
}

export default function ItDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Confronto · Descript · Gratis"
      h1={<>Alternativa a Descript<br /><span className="text-brand-600">Trascrizione gratis senza l'editor</span></>}
      subtitle="Descript è un editor audio/video completo con trascrizione integrata. Se ti serve solo la parte di trascrizione, Mictoo è l'opzione gratis senza registrazione, basata su OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Piano gratuito',         mictoo: 'Senza tetto mensile, 25 MB per file', them: '1 ora di trascrizione al mese' },
        { label: 'Account richiesto',      mictoo: 'No', them: 'Sì (registrazione email)' },
        { label: 'Piani a pagamento',      mictoo: 'Gratis',  them: '12-24 $ / mese' },
        { label: 'Editor audio/video',     mictoo: 'No',  them: 'Sì (completo)' },
        { label: 'Modello di trascrizione',mictoo: 'OpenAI Whisper', them: 'Proprietario + opzione Whisper' },
        { label: 'Riassunto IA',           mictoo: 'Sì, gratis', them: 'Sì (a pagamento)' },
        { label: 'Export SRT',             mictoo: 'Sì, gratis', them: 'Sì (a pagamento)' },
        { label: 'Etichette speaker',      mictoo: 'Modifica manuale', them: 'Automatico' },
        { label: 'Lingue',                 mictoo: '50+', them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Gratis, senza registrazione', desc: 'Carica un file e ottieni una trascrizione senza account, carta o email. Descript richiede registrazione anche nel piano gratis.' },
        { icon: '⚡', title: 'Più veloce per casi singoli', desc: 'Nessuna app da installare, nessun editor da imparare. Una pagina, un drop, risultati in pochi secondi. Pensato per trascrizione rapida, non per produzione completa.' },
        { icon: '🔒', title: 'Privacy prima di tutto', desc: 'L\'audio viene inviato direttamente all\'API Whisper di OpenAI e non viene memorizzato sui server di Mictoo. Nessun progetto, nessuna libreria cloud, nessuno spazio team by design.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Ti serve solo la trascrizione, non l\'editing',
          'Vuoi qualcosa di gratis senza registrazione',
          'Stai trascrivendo un\'intervista, podcast o riunione singola',
          'Non vuoi un\'app desktop o spazio team',
        ],
        them: [
          'Produci podcast o video e ti serve un editor vero',
          'Vuoi il workflow "modifica l\'audio modificando il testo"',
          'Hai bisogno di etichette speaker automatiche ogni volta',
          'Lavori in team con libreria condivisa di progetti',
        ],
      }}
      faq={[
        { q: 'Mictoo è un sostituto completo di Descript?', a: 'Non per l\'editing. Descript è un editor audio/video con trascrizione integrata — Mictoo è solo la parte di trascrizione. Se ti serve solo testo o sottotitoli da una registrazione, Mictoo sostituisce quel flusso gratis.' },
        { q: 'La qualità della trascrizione è la stessa?', a: 'Entrambi gli strumenti possono usare OpenAI Whisper. Mictoo usa Whisper esclusivamente, quindi la precisione è comparabile. Descript offre un modello proprietario aggiuntivo in alcuni piani.' },
        { q: 'Mictoo ha etichette degli speaker?', a: 'Mictoo restituisce una singola trascrizione senza etichette automatiche nel piano gratis. Puoi aggiungere Speaker 1 / Speaker 2 manualmente nell\'editor del browser prima del download. Descript etichetta automaticamente.' },
        { q: 'Posso modificare la trascrizione in Mictoo?', a: 'Sì — la trascrizione appare in una casella di testo modificabile. Puoi correggere nomi, punteggiatura o paragrafi prima di copiare o scaricare come .txt o .srt.' },
        { q: 'E l\'export in Word o DOCX?', a: 'Mictoo attualmente esporta .txt e .srt. Copia la trascrizione e incollala in Word per un DOCX rapido. L\'export DOCX nativo è nella roadmap.' },
      ]}
      relatedLinks={[
        { href: '/it/turboscribe-alternative', label: 'Alternativa a TurboScribe' },
        { href: '/it/otter-alternative', label: 'Alternativa a Otter' },
        { href: '/it/notta-alternative', label: 'Alternativa a Notta' },
        { href: '/it', label: 'Prova Mictoo' },
      ]}
    />
  )
}
