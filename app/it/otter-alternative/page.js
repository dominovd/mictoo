import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Alternativa a Otter — Trascrivi registrazioni, non riunioni live | Mictoo',
  description: 'Otter è pensato per la trascrizione live di riunioni con sottotitoli in tempo reale. Mictoo trascrive le registrazioni che hai già — gratis, senza registrazione, senza bot. Basato su OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/it/otter-alternative', languages: LANGS },
}

export default function ItOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Confronto · Otter · Gratis"
      h1={<>Alternativa a Otter<br /><span className="text-brand-600">Per registrazioni, non riunioni live</span></>}
      subtitle="Otter è famoso per la trascrizione live di riunioni — i sottotitoli appaiono mentre le persone parlano. Mictoo risolve l'altra metà del problema: una registrazione che hai già, trascritta in testo in pochi secondi. Gratis, senza registrazione, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Piano gratuito',         mictoo: 'Senza tetto mensile, 25 MB per file', them: '300 minuti / mese, 30 min per registrazione' },
        { label: 'Account richiesto',      mictoo: 'No', them: 'Sì (registrazione email)' },
        { label: 'Piani a pagamento',      mictoo: 'Gratis',  them: '8.33 - 30 $ / utente / mese' },
        { label: 'Trascrizione live',      mictoo: 'No', them: 'Sì (sottotitoli in tempo reale)' },
        { label: 'Upload registrazione',   mictoo: 'Sì (drag-n-drop)', them: 'Sì (import a pagamento)' },
        { label: 'Riassunto IA',           mictoo: 'Sì, gratis', them: 'Sì (a pagamento)' },
        { label: 'Modello di trascrizione',mictoo: 'OpenAI Whisper', them: 'Proprietario' },
        { label: 'Etichette speaker',      mictoo: 'Modifica manuale', them: 'Automatico (a pagamento)' },
        { label: 'Lingue',                 mictoo: '50+', them: '3 (inglese, francese, spagnolo)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ lingue contro 3', desc: 'Otter supporta solo inglese, francese e spagnolo. Mictoo usa Whisper, che gestisce oltre 50 lingue con rilevamento automatico — italiano, tedesco, russo, giapponese, arabo, ucraino e altri.' },
        { icon: '🆓', title: 'Niente tetto di 300 minuti', desc: 'Il piano gratis di Otter ti limita a 300 minuti al mese. Mictoo non ha quota minuti — solo il limite di 25 MB per file.' },
        { icon: '🚫', title: 'Niente bot nelle tue riunioni', desc: 'Il valore di Otter è il bot live che si unisce alle chiamate. Se preferisci registrare localmente senza bot IA nella riunione, Mictoo si adatta a quel flusso.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Hai una registrazione e vuoi una trascrizione veloce e gratis',
          'Lavori con audio non inglese (italiano, russo, tedesco, giapponese, ecc.)',
          'Non vuoi un bot IA nelle tue chiamate',
          'Trascrivi podcast, lezioni, voice memo, non solo riunioni',
        ],
        them: [
          'Vuoi sottotitoli live durante le riunioni',
          'Sei in un team che ha bisogno di note di riunione condivise',
          'L\'integrazione Otter Assistant con Zoom/Google Meet è critica',
          'La diarizzazione degli speaker è un requisito (piano a pagamento)',
        ],
      }}
      faq={[
        { q: 'Mictoo fa trascrizione live come Otter?', a: 'No. Mictoo lavora solo su file registrati. Per la trascrizione in tempo reale durante una riunione, usa Otter, i sottotitoli integrati di Zoom o Google Meet. Usa Mictoo dopo se vuoi un file di trascrizione rifinito.' },
        { q: 'Mictoo sostituisce Otter per i podcaster?', a: 'Specificamente per la trascrizione di podcast, sì. Carica il tuo MP3/M4A, ottieni la trascrizione, scaricala come .txt o .srt. Il valore di Otter è la cattura live; quello di Mictoo è la trascrizione veloce post-registrazione.' },
        { q: 'E i riassunti delle riunioni?', a: 'Entrambi gli strumenti generano riassunti IA con punti chiave e action item. Otter li mette nei piani a pagamento; Mictoo li offre gratis su ogni trascrizione.' },
        { q: 'Mictoo è accurato con audio non inglese?', a: 'Sì — OpenAI Whisper è uno dei modelli vocali multilingua più forti disponibili. Otter è limitato a inglese, francese e spagnolo; Mictoo gestisce oltre 50 lingue con rilevamento automatico.' },
        { q: 'Mictoo ha un\'app mobile?', a: 'Nessuna app nativa, ma il sito funziona nei browser mobili. Apri mictoo.com su iPhone o Android, scegli un file dal dispositivo, ottieni la trascrizione.' },
      ]}
      relatedLinks={[
        { href: '/it/fireflies-alternative', label: 'Alternativa a Fireflies' },
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it/voice-memo-to-text', label: 'Memo vocale in testo' },
        { href: '/it', label: 'Prova Mictoo' },
      ]}
    />
  )
}
