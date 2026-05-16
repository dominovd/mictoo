import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Trascrizione Google Meet — Trascrivi registrazioni Meet gratis | Mictoo',
  description: 'Trascrivi gratis le registrazioni di Google Meet in testo. Funziona con MP4 esportati da Google Drive. Senza registrazione, senza installazione.',
  alternates: { canonical: 'https://mictoo.com/it/google-meet-transcription', languages: LANGS },
}

export default function ItGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Gratis"
      h1={<>Trascrizione Google Meet<br /><span className="text-brand-600">Trasforma le registrazioni Meet in testo</span></>}
      subtitle="Carica l'MP4 esportato da Google Meet e ottieni una trascrizione pulita in pochi secondi. Gratis, senza registrazione. Complementa i sottotitoli live di Google per un verbale post-riunione ordinato."
      defaultLanguage="it"
      features={[
        { icon: '🎬', title: 'Supporto diretto MP4', desc: 'Google Meet esporta le registrazioni in Google Drive come MP4. Scarica il file e caricalo su Mictoo — nessuna conversione o estrazione necessaria.' },
        { icon: '🧾', title: 'Più pulito dei sottotitoli live', desc: 'I sottotitoli live di Google catturano l\'essenziale ma omettono punteggiatura e nomi. Mictoo produce una trascrizione rifinita da incollare in Docs, Notion o un\'email di riepilogo.' },
        { icon: '🔒', title: 'Privato', desc: 'I file vengono elaborati e immediatamente eliminati. Non conserviamo né l\'audio della riunione né la trascrizione.' },
      ]}
      faq={[
        { q: 'Come scarico una registrazione Google Meet?', a: 'Apri Google Drive → Il mio Drive → Meet Recordings (cartella creata automaticamente). Trova la riunione, clicca su ⋮ → Scarica. Il file è un MP4 — caricalo su Mictoo così com\'è.' },
        { q: 'Perché usare Mictoo se Google Meet ha già sottotitoli live?', a: 'I sottotitoli live sono utili durante la riunione, ma non sono salvati di default e mancano di punteggiatura e maiuscole corrette. Mictoo ti dà una trascrizione rifinita ed editabile, pronta da condividere o riutilizzare.' },
        { q: 'Posso ottenere etichette degli speaker (Host, Ospite 1, ecc.)?', a: 'Non automaticamente nel piano gratuito. La trascrizione è un singolo flusso di testo — le etichette possono essere aggiunte manualmente nell\'editor del browser.' },
        { q: 'Qual è la durata massima della registrazione Meet?', a: 'Fino a 25 MB per file. Un MP4 di Google Meet in qualità predefinita occupa circa 50 MB per 30 minuti; considera di estrarre la traccia audio (M4A) o comprimere il video per stare nel limite.' },
        { q: 'Le trascrizioni "Prendi appunti per me" di Google sono la stessa cosa?', a: 'No — la funzione "Prendi appunti per me" di Workspace genera un riassunto IA, non una trascrizione parola per parola. Mictoo ti dà la trascrizione verbatim, che puoi riassumere separatamente se serve.' },
      ]}
      relatedLinks={[
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom' },
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
