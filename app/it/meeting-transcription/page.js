import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Trascrizione riunioni — trascript IA gratuito per call e meeting | Mictoo',
  description: 'Trascrizione IA gratuita per riunioni. Carica qualsiasi registrazione (da qualunque piattaforma) e ottieni testo pulito in pochi secondi. Senza registrazione, oltre 50 lingue.',
  alternates: { canonical: 'https://mictoo.com/it/meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Trascrizione riunioni — trascript IA gratuito per call e meeting | Mictoo",
    description: "Trascrizione IA gratuita per riunioni. Carica qualsiasi registrazione (da qualunque piattaforma) e ottieni testo pulito in pochi secondi. Senza registrazione, oltre 50 lingue.",
    url: "https://mictoo.com/it/meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trascrizione riunioni — trascript IA gratuito per call e meeting | Mictoo",
    description: "Trascrizione IA gratuita per riunioni. Carica qualsiasi registrazione (da qualunque piattaforma) e ottieni testo pulito in pochi secondi. Senza registrazione, oltre 50 lingue.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="Qualsiasi piattaforma · Gratis · 50+ lingue"
      h1={<>Trascrizione riunioni<br /><span className="text-brand-600">Trascript IA gratuiti per riunioni</span></>}
      subtitle="Trasforma qualsiasi registrazione riunione in testo pulito. Funziona con Zoom, Meet, Teams, Webex, Discord, Skype, registratori vocali, qualsiasi cosa. Senza registrazione, senza tariffa al minuto."
      howItWorks={[
        { icon: '🎙️', title: 'Procurati la registrazione', desc: 'Qualunque piattaforma tu abbia usato (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, registratore in presenza), esporta la registrazione come MP4, MP3, M4A, WAV, FLAC o OGG.' },
        { icon: '⚡', title: 'Rilascia il file', desc: 'Estraiamo l\'audio se serve e lo mandiamo a Whisper large-v3. Una riunione di 30 minuti finisce in circa un minuto.' },
        { icon: '📋', title: 'Ottieni la trascrizione', desc: 'Leggi, copia o scarica come TXT o SRT. Sistema parole o gergo sbagliati nell\'editor prima dell\'export.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per le riunioni', bullets: [
        { title: 'La piattaforma di origine non conta', desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, registratori in presenza. Se hai il file, trascriviamo.' },
        { title: 'Un solo modello per tutte le tue riunioni', desc: 'Lo stesso Whisper large-v3 per la call vendita registrata su Zoom e la retro di team catturata su Teams. Precisione costante, formato output costante.' },
        { title: 'Gratis senza contatore al minuto', desc: 'La maggior parte delle trascrizioni integrate negli strumenti di riunione viene con un tier licenza che ha un suo costo. La nostra è davvero gratis, senza cap mensile.' },
        { title: 'Oltre 50 lingue', desc: 'Riunioni transfrontaliere, conversazioni bilingui, team internazionali. Whisper le gestisce tutte, con rilevamento automatico o selezione manuale della lingua.' },
        { title: 'Niente viene conservato', desc: 'Il file va al provider di trascrizione ed è scartato. Non scriviamo l\'audio della tua riunione sui nostri server.' },
      ]}}
      useCases={{ title: 'Tipi di riunioni che la gente trascrive', items: [
        { title: 'Standup e retro di team', desc: 'I team asincroni trascrivono gli standup perché chi è in altri fusi orari possa recuperare. Le retro beneficiano di un record scritto per il follow-up sulle azioni.' },
        { title: 'Call client e customer', desc: 'Call vendita, check-in account, customer interview. Salva la trascrizione nel CRM accanto al deal o contatto.' },
        { title: 'Sessioni di formazione interna e onboarding', desc: 'I nuovi assunti leggono la trascrizione mentre guardano il video. Migliore memorizzazione, cercabile dopo quando dimenticano un passaggio.' },
        { title: 'Riunioni board, offsite leadership, all-hands', desc: 'Le trascrizioni rendono le comunicazioni corporate più accessibili. Utile per i dipendenti che non hanno potuto partecipare, e per il record-keeping.' },
        { title: 'Interviste e ricerca qualitativa', desc: 'Che sia screening candidati, user interview o giornalismo, la trascrizione è il vero prodotto di lavoro.' },
      ]}}
      proTips={{ title: 'Consigli per trascrivere riunioni', tips: [
        { title: 'Estrai l\'audio se la sorgente è video', desc: 'Le piattaforme riunioni esportano MP4 con audio e video. Ci serve solo l\'audio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 porta un MP4 da 1 GB a 25 MB o meno. Upload più veloce, stessa trascrizione.' },
        { title: 'Assicurati che tutti abbiano un microfono vero', desc: 'I microfoni integrati dei laptop su una call Wi-Fi producono audio rumoroso e con eco. Cuffie USB con cavo da 20 dollari per ogni partecipante si ripagano in precisione trascrizione.' },
        { title: 'Silenzia i partecipanti che non parlano', desc: 'I microfoni aperti durante una presentazione catturano battitura tastiera, rumore di fondo stanza e conversazioni laterali. Whisper a volte le trascrive come parole sensa senso.' },
        { title: 'Per riunioni con parlanti non nativi inglese, non dividere inutilmente', desc: 'Whisper beneficia di contesto più lungo per frasi meno comuni. Un file continuo di 30 minuti si trascrive meglio di tre pezzi da 10 minuti se hai scelta.' },
        { title: 'Le riunioni lunghe si dividono meglio su pause naturali', desc: 'Se devi dividere una riunione di 90 minuti in pezzi, cerca pause naturali (un caffè, una transizione agenda) e dividi lì. Meno rischio di tagliare una frase a metà.' },
        { title: 'Scegli la lingua manualmente per riunioni corte o insolite', desc: 'Il rilevamento automatico campiona il primo chunk audio. Per riunioni che iniziano con musica d\'attesa, un breve saluto o silenzio, la selezione manuale è più affidabile.' },
      ]}}
      faq={[
        { q: 'Quali piattaforme di riunione supportate?', a: 'Tutte. Lavoriamo col file registrazione, non con la piattaforma. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, registratori vocali in presenza. Se il file è MP4, MP3, M4A, WAV, FLAC, OGG o WEBM, trascriviamo.' },
        { q: 'La mia riunione era su Zoom (o Meet, o Teams). Uso questa pagina o quella specifica?', a: 'Stesso motore, stessa precisione. Le pagine specifiche per piattaforma danno consigli più mirati. Usa quella che ti sembra più facile.' },
        { q: 'Avrò etichette dei parlanti?', a: 'Non automaticamente. Whisper non fa diarizzazione di default. Per una riunione con voci distinte, aggiungi etichette manualmente in base alla conversazione. Per riunioni con tracce audio separate per parlante (Riverside, SquadCast, a volte Zoom), trascrivi ogni traccia separatamente.' },
        { q: 'La mia registrazione riunione supera i 60 MB. Cosa faccio?', a: 'Due opzioni. Estrai solo l\'audio dal video (un comando ffmpeg), o dividi la riunione in pezzi.' },
        { q: 'Quanto è precisa la trascrizione riunioni?', a: 'Per audio pulito (buoni microfoni, niente rumore di fondo), 90-95%. Per microfoni di sala o speakerphone, 80-90%. Nomi e termini tecnici spesso richiedono pulizia.' },
        { q: 'La mia riunione sarà conservata sui vostri server?', a: 'No. Il file va al provider di trascrizione ed è scartato dopo elaborazione. Non scriviamo l\'audio della tua riunione né la trascrizione nel database.' },
        { q: 'La trascrizione riunioni su Mictoo è conforme GDPR?', a: 'Non conserviamo audio o trascrizione dopo che chiudi la pagina. Siamo in Europa, e i nostri provider (Groq US, OpenAI US) hanno DPA firmati. Per domande specifiche vedi la Privacy Policy.' },
        { q: 'Posso ottenere un riassunto della riunione, non solo la trascrizione?', a: 'Al momento forniamo la trascrizione completa. Per riassunti, incolla la trascrizione in ChatGPT o Claude con un prompt tipo "Riassumi questa trascrizione riunione in decisioni chiave e action item".' },
        { q: 'Quali lingue sono supportate?', a: 'Oltre 50, con rilevamento automatico. Per riunioni sotto i 5 minuti o file con intro non vocali, scegli la lingua manualmente per risultati più affidabili.' },
        { q: 'Posso trascrivere una riunione in tempo reale?', a: 'No. Lavoriamo con file registrati. Per real-time, usa la funzione di trascrizione nativa della piattaforma riunione o un assistente riunione dedicato.' },
        { q: 'Come ottengo il file SRT allineato col mio video riunione?', a: 'Scarica l\'SRT dopo la trascrizione. La maggior parte degli editor video (Premiere, DaVinci, CapCut, Final Cut) importa SRT che si allineano automaticamente finché l\'audio nel video corrisponde a quello che hai trascritto.' },
        { q: 'Posso trascrivere riunioni confidenziali?', a: 'Per riunioni confidenziali (HR, legali, M&A, board), sii cauto con qualsiasi servizio trascrizione cloud, incluso il nostro. Il nostro file non viene conservato, ma passa attraverso un provider di voce terzo per l\'elaborazione. Per privacy massima, usa un\'installazione locale di Whisper.' },
      ]}
      relatedLinks={[
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom', desc: 'Consigli e workflow specifici Zoom.' },
        { href: '/it/google-meet-transcription', label: 'Trascrizione Google Meet', desc: 'Per registrazioni Google Meet.' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams', desc: 'Per registrazioni Microsoft Teams.' },
        { href: '/it/business-transcription', label: 'Trascrizione business', desc: 'Per call client, conferenze e call vendita.' },
      ]}
    />
  )
}
