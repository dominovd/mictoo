import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Trascrizione di podcast — Generatore gratuito di transcript | Mictoo',
  description: 'Trascrivi gratis i tuoi episodi di podcast in testo. Carica il file audio e ottieni la trascrizione istantaneamente. MP3, M4A, WAV. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/podcast-transcription', languages: LANGS },
}

export default function ItPodcastPage() {
  return (
    <LandingLayout
      badge="Podcaster · YouTube · Gratis"
      h1={<>Trascrizione di podcast<br /><span className="text-brand-600">Generatore gratuito di transcript</span></>}
      subtitle="Trasforma qualsiasi episodio di podcast in trascrizione testuale in pochi secondi. Ideale per show notes, articoli di blog, SEO e accessibilità. MP3, M4A o WAV, senza account."
      defaultLanguage="it"
      features={[
        { icon: '🎙️', title: 'Tutti i formati podcast', desc: 'Carica i tuoi file MP3, M4A, WAV, OGG o FLAC. Funziona con tutti gli export degli hosting di podcast.' },
        { icon: '📝', title: 'Show notes e articoli', desc: 'Trasforma la trascrizione in contenuti ottimizzati SEO, show notes o archivio consultabile.' },
        { icon: '♿', title: 'Accessibilità', desc: 'Offri la trascrizione per rendere il tuo podcast accessibile a chi è sordo o ipoudente.' },
      ]}
      faq={[
        { q: 'Come trascrivere un episodio di podcast gratis?', a: 'Scarica il tuo episodio in formato MP3 o M4A, caricalo sopra e ottieni la trascrizione completa in pochi secondi.' },
        { q: 'Posso trascrivere un podcast Spotify?', a: 'Se hai accesso al file audio (ad esempio il tuo show), caricalo direttamente. Per podcast di terzi, scarica l\'episodio tramite un\'app che permette l\'ascolto offline, poi importa il file.' },
        { q: 'Perché creare una trascrizione del proprio podcast?', a: 'Le trascrizioni migliorano il SEO (Google indicizza il testo), rendono il contenuto accessibile alle persone sorde, possono essere riutilizzate come articoli o newsletter e aiutano gli ascoltatori a sfogliare l\'episodio.' },
        { q: 'La trascrizione è accurata?', a: 'Per un podcast registrato bene con un singolo speaker o un duo chiaro, la precisione supera generalmente il 95%. Cala in caso di voci sovrapposte, accenti marcati o qualità audio scarsa.' },
        { q: 'Posso trascrivere un\'intervista a due voci?', a: 'Sì. La trascrizione cattura tutto il parlato. Le etichette dello speaker (Host / Ospite) si aggiungono manualmente nell\'editor del browser.' },
        { q: 'Qual è la dimensione massima?', a: 'Fino a 25 MB. La maggior parte degli MP3 a 128 kbps rientra in questo limite per 25 minuti. Per episodi più lunghi, abbassa il bitrate o dividi il file.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it/m4a-to-text', label: 'M4A in testo' },
        { href: '/it/interview-transcription', label: 'Trascrizione di interviste' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
