import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Trascrizione di webinar — Transcript gratis per registrazioni | Mictoo',
  description: 'Trascrivi gratis le registrazioni di webinar in testo e sottotitoli SRT. Funziona con Zoom, Webex, GoToWebinar e qualsiasi export MP4 o MP3. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/webinar-transcription', languages: LANGS },
}

export default function ItWebinarPage() {
  return (
    <LandingLayout
      badge="Webinar · MP4 · Gratis"
      h1={<>Trascrizione di webinar<br /><span className="text-brand-600">Generatore gratis di transcript</span></>}
      subtitle="Trasforma la registrazione del tuo webinar in una trascrizione testuale ricercabile o in un file di sottotitoli SRT. Funziona con Zoom, Webex, GoToWebinar e qualsiasi export MP4/MP3."
      defaultLanguage="it"
      features={[
        { icon: '🎥', title: 'Qualsiasi export di piattaforma', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — esportano tutti in MP4 o M4A. Carica il file direttamente, senza conversione.' },
        { icon: '📝', title: 'Riutilizza il tuo webinar', desc: 'Trasforma un webinar in articolo di blog, post per i social, newsletter e documento di follow-up per i partecipanti.' },
        { icon: '📺', title: 'SRT per replay on-demand', desc: 'Scarica il file .srt e usalo come sottotitoli quando pubblichi il replay su YouTube, Vimeo o sul tuo sito.' },
      ]}
      faq={[
        { q: 'Come scaricare la registrazione del mio webinar Zoom o Webex?', a: 'In Zoom: portale web → Registrazioni → clicca sul webinar → Scarica. In Webex: apri la registrazione in Le mie registrazioni → Scarica. Entrambi esportano in MP4 di default.' },
        { q: 'Posso ottenere una trascrizione mentre il webinar è in diretta?', a: 'Mictoo lavora su file registrati, non su stream live. Per sottotitoli in tempo reale usa la funzione live captions della piattaforma, poi carica la registrazione dopo per una trascrizione rifinita.' },
        { q: 'E con più speaker e sessioni Q&A?', a: 'Mictoo genera una singola trascrizione con tutto il parlato. Le etichette degli speaker (Host, Panelista 1, Pubblico) possono essere aggiunte manualmente nell\'editor del browser prima del download.' },
        { q: 'Qual è la durata massima del webinar?', a: 'Fino a 25 MB per file. Un webinar di 60 minuti in audio mono a 64 kbps entra facilmente; esporta a bitrate più basso o estrai l\'audio M4A per sessioni più lunghe.' },
        { q: 'La trascrizione è precisa per termini tecnici o di settore?', a: 'La precisione è alta per audio chiari. Nomi di brand, acronimi e terminologia inusuale sono talvolta sbagliati — facili da correggere nell\'editor del browser prima dell\'export.' },
      ]}
      relatedLinks={[
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom' },
        { href: '/it/free-srt-generator', label: 'Generatore SRT' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
