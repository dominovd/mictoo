import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Trascrizione Microsoft Teams — Trascrivi registrazioni Teams | Mictoo',
  description: 'Trascrivi gratis le registrazioni di riunioni Microsoft Teams in testo. Funziona con MP4 da OneDrive o SharePoint. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/teams-meeting-transcription', languages: LANGS },
}

export default function ItTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Gratis"
      h1={<>Trascrizione Microsoft Teams<br /><span className="text-brand-600">Riunioni Teams in testo</span></>}
      subtitle="Trasforma la registrazione della tua riunione Microsoft Teams in una trascrizione testuale pulita o in un file di sottotitoli SRT. Gratis, senza account. Funziona con MP4 da OneDrive o SharePoint."
      defaultLanguage="it"
      features={[
        { icon: '🏢', title: 'Adatto ai flussi Teams', desc: 'Scarica la registrazione da OneDrive o SharePoint — di solito sotto "Recordings" nella chat della riunione — e caricala su Mictoo. L\'MP4 funziona direttamente.' },
        { icon: '📤', title: 'Trascrizioni condivisibili', desc: 'Incolla la trascrizione in una chat Teams, OneNote o componente Loop per condividerla con chi ha perso la riunione.' },
        { icon: '🌐', title: 'Tutte le lingue', desc: 'Trascrive italiano, inglese, spagnolo, francese, tedesco, olandese, polacco, giapponese, cinese e oltre 40 altre. La lingua è rilevata automaticamente.' },
      ]}
      faq={[
        { q: 'Dove Teams salva le mie registrazioni delle riunioni?', a: 'Per la maggior parte delle organizzazioni, Teams salva le registrazioni nel OneDrive di chi ha registrato (chat 1:1 / gruppo) o nella cartella SharePoint del canale (riunioni di canale). Apri la registrazione, clicca su Scarica e ottieni un file MP4.' },
        { q: 'Teams non offre già una trascrizione?', a: 'Microsoft Teams offre la trascrizione live se il tuo admin l\'ha abilitata, ma il file rimane nell\'ecosistema Teams e non è sempre scaricabile. Mictoo ti dà un .txt o .srt portatile usabile ovunque.' },
        { q: 'Posso ottenere sottotitoli SRT per il video Teams?', a: 'Sì. Dopo la trascrizione puoi scaricare un file .srt con timestamp e usarlo come sottotitoli su YouTube, Vimeo o in qualsiasi editor video.' },
        { q: 'E i contenuti confidenziali delle riunioni?', a: 'Mictoo non memorizza i file. L\'audio viene inviato al nostro provider IA solo per la trascrizione e poi scartato. Per riunioni con dati regolamentati, controlla la policy della tua organizzazione sui servizi IA di terze parti.' },
        { q: 'Qual è la durata massima della registrazione Teams?', a: 'Fino a 25 MB per file. La maggior parte degli MP4 di Teams supera questo limite per riunioni oltre i 30 minuti — estrai prima l\'audio (M4A) o usa un compressore video.' },
      ]}
      relatedLinks={[
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom' },
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
