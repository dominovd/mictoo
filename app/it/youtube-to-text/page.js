import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube in testo — Trascrizione gratuita di video YouTube | Mictoo',
  description: "Trascrivi video YouTube in testo e sottotitoli SRT gratis. Scarica prima l'audio e poi caricalo su Mictoo. MP3, MP4, M4A. Senza registrazione.",
  alternates: { canonical: 'https://mictoo.com/it/youtube-to-text', languages: LANGS },
}

export default function ItYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Gratis"
      h1={<>YouTube in testo<br /><span className="text-brand-600">Trascrizione gratuita di video YouTube</span></>}
      subtitle="Trasforma qualsiasi video YouTube in trascrizione o file SRT. Gratis, senza registrazione. Scarica l'audio o il video e poi caricalo su Mictoo."
      defaultLanguage="it"
      features={[
        { icon: '🎬', title: 'Qualsiasi video YouTube', desc: 'Tutorial, podcast, interviste, lezioni, vlog — qualsiasi video in cui la voce è chiara. Lingue rilevate automaticamente, oltre 50 supportate.' },
        { icon: '📺', title: 'SRT per i sottotitoli', desc: 'Dopo la trascrizione, scarica un file .srt pronto all\'uso. Caricalo in YouTube Studio per aggiungere sottotitoli precisi ai tuoi video in pochi secondi.' },
        { icon: '📝', title: 'Riutilizza i tuoi contenuti', desc: 'Trasforma un video in articolo di blog, show notes, citazioni per i social o script per la traduzione. La trascrizione è completamente modificabile nel browser.' },
      ]}
      faq={[
        { q: "Come ottenere l'audio da un video YouTube?", a: "Per i tuoi video: apri YouTube Studio → Contenuti → clicca sul video → Scarica. Per video di terzi, le opzioni dipendono dalla licenza del video e dai Termini di servizio di YouTube. Molti utenti scaricano prima i propri contenuti, poi li caricano qui." },
        { q: 'Mictoo può scaricare direttamente da un URL YouTube?', a: "No — per rispettare i Termini di servizio di YouTube e i diritti dei creator, Mictoo non recupera contenuti tramite URL. Carica un file audio o video che hai il diritto di trascrivere." },
        { q: 'Come aggiungere i sottotitoli Mictoo al mio video YouTube?', a: 'Dopo la trascrizione, clicca su "Scarica .srt" per ottenere il file di sottotitoli. In YouTube Studio: apri il video → Sottotitoli → Aggiungi lingua → Carica file → scegli il .srt. I sottotitoli si sincronizzano automaticamente.' },
        { q: 'La trascrizione funziona per video non in inglese?', a: 'Sì. Mictoo rileva automaticamente la lingua parlata e supporta oltre 50 lingue — italiano, spagnolo, francese, tedesco, russo, giapponese, cinese, arabo, ecc. Imposta la lingua manualmente se il rilevamento sbaglia.' },
        { q: 'Qual è la dimensione massima del video?', a: 'Fino a 25 MB per upload. Un export audio di 25 minuti a 128 kbps entra. Per video più lunghi, estrai la traccia audio (M4A è il più efficiente) o dividi il file in più parti.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-video-to-text', label: 'Video in testo' },
        { href: '/it/free-srt-generator', label: 'Generatore SRT' },
        { href: '/it/podcast-transcription', label: 'Trascrizione di podcast' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
