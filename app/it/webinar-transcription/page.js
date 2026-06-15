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
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Trascrizione di webinar — Transcript gratis per registrazioni | Mictoo',
  description: 'Trascrivi gratis le registrazioni di webinar in testo e sottotitoli SRT. Funziona con Zoom, Webex, GoToWebinar e qualsiasi export MP4 o MP3. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "Trascrizione di webinar — Transcript gratis per registrazioni | Mictoo",
    description: "Trascrivi gratis le registrazioni di webinar in testo e sottotitoli SRT. Funziona con Zoom, Webex, GoToWebinar e qualsiasi export MP4 o MP3. Senza registrazione.",
    url: "https://mictoo.com/it/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trascrizione di webinar — Transcript gratis per registrazioni | Mictoo",
    description: "Trascrivi gratis le registrazioni di webinar in testo e sottotitoli SRT. Funziona con Zoom, Webex, GoToWebinar e qualsiasi export MP4 o MP3. Senza registrazione.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItWebinarPage() {
  return (
    <LandingLayout
      badge="Webinar · MP4 · Gratis"
      h1={<>Trascrizione di webinar<br /><span className="text-brand-600">Generatore gratis di transcript</span></>}
      subtitle="Trasforma la registrazione del tuo webinar in una trascrizione testuale ricercabile o in un file di sottotitoli SRT. Funziona con Zoom, Webex, GoToWebinar e qualsiasi export MP4/MP3."
      defaultLanguage="it"
      valueBlock={
        <>
          <p>Un webinar non finisce quando si chiude la stanza. La registrazione può alimentare articoli, documentazione, follow-up commerciale, knowledge base e sottotitoli.</p>
          <p>Mictoo trasforma audio o video del webinar in testo modificabile da riutilizzare dopo l’evento.</p>
        </>
      }
      howItWorks={[
        { title: 'Scarica la registrazione', desc: 'Esporta il webinar da Zoom, Teams, Meet o un’altra piattaforma.' },
        { title: 'Carica il file', desc: 'Mictoo trascrive presentazione, demo e domande.' },
        { title: 'Riutilizza il contenuto', desc: 'Crea note, clip, articoli, sottotitoli o documentazione interna.' },
      ]}
      whyUse={{
        title: 'Perché trascrivere webinar',
        bullets: [
          { title: 'Ricerca veloce', desc: 'Trova domande, obiezioni e temi senza guardare tutto il video.' },
          { title: 'Contenuto post-evento', desc: 'Trasforma la sessione in riassunto, post o email di follow-up.' },
          { title: 'Sottotitoli', desc: 'Usa la trascrizione come base per captions e accessibilità.' },
          { title: 'Documentazione interna', desc: 'Conserva demo, training e lanci in testo ricercabile.' },
        ],
      }}
      useCases={{
        title: 'Usi di una trascrizione webinar',
        items: [
          { title: 'Marketing', desc: 'Estrai messaggi, domande e clip per campagne.' },
          { title: 'Formazione clienti', desc: 'Trasforma sessioni educative in guide passo passo.' },
          { title: 'Q&A', desc: 'Riutilizza risposte frequenti per supporto e vendite.' },
          { title: 'Demo interne', desc: 'Documenta processi e decisioni di prodotto.' },
        ],
      }}
      proTips={{
        title: 'Consigli per webinar',
        tips: [
          { title: 'Separa le sessioni lunghe', desc: 'Dividi keynote, demo e Q&A per rivedere più velocemente.' },
          { title: 'Rivedi i termini di brand', desc: 'Prodotti, nomi di clienti e sigle spesso richiedono ritocchi.' },
          { title: 'Estrai audio da MP4 grandi', desc: 'Una traccia M4A o MP3 può ridurre il tempo di upload.' },
        ],
      }}
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
