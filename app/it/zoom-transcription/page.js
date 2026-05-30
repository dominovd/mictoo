import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Trascrizione Zoom — trascrivi le registrazioni Zoom gratis | Mictoo',
  description: 'Trascrizione Zoom gratis. Carica la tua Cloud Recording (MP4) o registrazione locale (M4A) e ottieni una trascrizione IA precisa in pochi secondi. Senza registrazione, senza tariffa al minuto.',
  alternates: { canonical: 'https://mictoo.com/it/zoom-transcription', languages: LANGS },

  openGraph: {
    title: "Trascrizione Zoom — trascrivi le registrazioni Zoom gratis | Mictoo",
    description: "Trascrizione Zoom gratis. Carica la tua Cloud Recording (MP4) o registrazione locale (M4A) e ottieni una trascrizione IA precisa in pochi secondi. Senza registrazione, senza tariffa al minuto.",
    url: "https://mictoo.com/it/zoom-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trascrizione Zoom — trascrivi le registrazioni Zoom gratis | Mictoo",
    description: "Trascrizione Zoom gratis. Carica la tua Cloud Recording (MP4) o registrazione locale (M4A) e ottieni una trascrizione IA precisa in pochi secondi. Senza registrazione, senza tariffa al minuto.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="ZOOM · MP4 · M4A · GRATIS"
      h1={<>Trascrizione Zoom<br /><span className="text-brand-600">Trasforma le registrazioni Zoom in testo</span></>}
      subtitle="Trasforma la tua registrazione Zoom in testo pulito. Cloud Recording MP4 o M4A locale, entrambi vanno bene. Rilascia il file, ottieni la trascrizione in pochi secondi."
      howItWorks={[
        { icon: '🎬', title: 'Esporta la registrazione Zoom', desc: 'Le cloud recording si scaricano come MP4 (video più audio) o M4A (solo audio). Le registrazioni locali sono salvate sulla tua macchina come MP4 più M4A. Entrambi i formati funzionano qui.' },
        { icon: '⚡', title: 'Rilascia il file', desc: 'Trascinalo. Estraiamo l\'audio (se è video) e lo mandiamo a Whisper large-v3. Una riunione di 30 minuti finisce di solito in meno di un minuto.' },
        { icon: '📋', title: 'Ottieni la trascrizione', desc: 'Leggi, copia o scarica come TXT o SRT. Sistema nomi o gergo sbagliati nell\'editor prima dell\'export.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per le registrazioni Zoom', bullets: [
        { title: 'Funziona su ogni piano Zoom, anche gratuito', desc: 'La trascrizione di Zoom è limitata a certi piani a pagamento. La nostra non ha requisiti di piano Zoom. Registra, scarica, carica, fatto.' },
        { title: 'Migliore con inglese non nativo e code-switching', desc: 'Whisper large-v3 gestisce accenti e riunioni bilingui meglio della trascrizione nativa di Zoom, che storicamente è english-first.' },
        { title: 'L\'M4A solo audio è abbastanza piccolo per caricamento diretto', desc: 'La maggior parte delle riunioni Zoom da 30 minuti finisce tra 15 e 25 MB come M4A. Sta comodamente nel nostro tier gratuito senza compressione.' },
        { title: 'Nessuna preoccupazione di retention 14 giorni', desc: 'Le Zoom Cloud Recording possono sparire dopo 14-30 giorni a seconda del piano. Una volta scaricato e trascritto qui, è tuo per sempre.' },
        { title: 'Privacy', desc: 'Il file va al provider di trascrizione ed è scartato. Non scriviamo la registrazione Zoom nel nostro database o archivio.' },
      ]}}
      useCases={{ title: 'Per cosa la gente trascrive registrazioni Zoom', items: [
        { title: 'Verbali di riunioni interne', desc: 'Passa la registrazione, ottieni il testo, incolla in Notion o Confluence. Chi si è perso la riunione recupera in cinque minuti di lettura invece di un\'ora di video.' },
        { title: 'Chiamate client e vendita', desc: 'Salva la trascrizione nel CRM accanto al deal. Il te futuro, sei mesi dopo, ti ringrazierà.' },
        { title: 'Standup asincroni per team distribuiti', desc: 'Alcuni team registrano standup asincroni invece di fare riunioni live. Le trascrizioni li rendono cercabili e scorribili.' },
        { title: 'Interviste di ricerca', desc: 'Ricerca qualitativa, user interview, call di screening candidati. Quello che codifichi e tagghi è il testo, non il video.' },
        { title: 'Trascrizioni di webinar e panel', desc: 'Pubblica la trascrizione accanto alla registrazione per accessibilità e SEO. I motori di ricerca indicizzano il testo, non il video.' },
      ]}}
      proTips={{ title: 'Consigli per trascrivere Zoom', tips: [
        { title: 'Scarica l\'M4A solo audio, non l\'MP4', desc: 'Zoom Cloud Recording offre entrambi. L\'M4A è un decimo della dimensione dell\'MP4 con qualità audio identica. Upload più veloce, ben sotto il cap di 60 MB per la maggior parte delle riunioni.' },
        { title: 'Attiva "Record a separate audio file for each participant" per riunioni multi-parlante', desc: 'In Impostazioni Zoom, Recording. Ti dà un M4A per parlante. Trascrivi ognuno separatamente per attribuzione pulita, senza diarizzazione necessaria.' },
        { title: 'Silenzia i partecipanti che non parlano', desc: 'Il rumore di fondo dai microfoni aperti durante una presentazione produce parole fantasma nella trascrizione. Vale la pena imporlo nelle call grandi.' },
        { title: 'Registrazione locale e cloud hanno la stessa qualità', desc: 'Entrambe registrano con le stesse impostazioni audio di default. Locale è più veloce (niente upload a Zoom prima) ma occupa spazio disco.' },
        { title: 'Per contenuti sensibili, usa registrazione locale', desc: 'La cloud salva la riunione sui server Zoom. La locale resta sulla tua macchina finché non scegli dove inviarla. Per conversazioni confidenziali con client o HR, locale e poi direttamente da noi è il percorso che preserva la privacy.' },
        { title: 'Riunioni Zoom lunghe (oltre 60 minuti) vanno divise', desc: 'Il nostro cap per file è 60 minuti con login. Per una call di 90 minuti dividi in due pezzi da 45. Facile in Audacity (File, Export, Multiple) o con ffmpeg.' },
      ]}}
      faq={[
        { q: 'Mictoo funziona con Zoom Cloud Recording?', a: 'Sì. Scarica l\'MP4 o M4A dalla tua libreria di registrazioni Zoom, poi carica su Mictoo. L\'export M4A solo audio è più veloce e più piccolo.' },
        { q: 'Funziona con le registrazioni Zoom Phone?', a: 'Sì. Zoom Phone registra come MP3 o M4A. Entrambi funzionano. L\'audio qualità telefonica (8 kHz mono) si trascrive leggermente meno preciso dell\'audio video riunione, ma il risultato è comunque leggibile.' },
        { q: 'E le registrazioni Zoom locali?', a: 'Stessa storia. Zoom le salva come MP4 più M4A nella tua cartella Zoom di default. Rilascia l\'M4A qui.' },
        { q: 'Avrò etichette dei parlanti?', a: 'Non automaticamente. Se hai attivato "Record a separate audio file for each participant" nelle impostazioni Zoom, puoi trascrivere il file di ogni parlante separatamente. Altrimenti dovrai aggiungere le etichette manualmente in base al flusso conversazione.' },
        { q: 'La mia registrazione Zoom supera i 60 MB. Cosa faccio?', a: 'Usa il download solo audio M4A invece dell\'MP4. Se è ancora troppo grande, dividi in pezzi o ri-codifica a bitrate più basso.' },
        { q: 'Come si confronta Mictoo con la trascrizione nativa di Zoom?', a: 'Siamo migliori sulla precisione per inglese non nativo, migliori sugli accenti, e con copertura linguistica più ampia (50+). La trascrizione nativa Zoom è più comoda se paghi già il piano Zoom giusto. La nostra è gratis e funziona indipendentemente dal tier Zoom.' },
        { q: 'La mia registrazione Zoom è conservata sui vostri server?', a: 'No. Il file va al provider di trascrizione (Groq, con OpenAI come backup), viene trascritto, poi scartato. Non scriviamo la registrazione su disco.' },
        { q: 'Posso trascrivere una riunione Zoom in tempo reale?', a: 'No. Lavoriamo solo con file registrati. Per real-time durante la riunione, lo strumento integrato di Zoom o un assistente riunione dedicato sarebbe la scelta giusta.' },
        { q: 'E i webinar Zoom e le riunioni grandi?', a: 'Stesso workflow. Scarica la registrazione, carica, trascrivi. Per webinar molto lunghi (oltre 60 minuti) dividi prima.' },
        { q: 'Trascriverà i messaggi chat della riunione?', a: 'No. I messaggi chat sono salvati separatamente da Zoom (come TXT nella tua cartella Zoom). Trascriviamo solo l\'audio. Combina i due tu se ti servono entrambi.' },
        { q: 'Quanto è precisa la trascrizione audio Zoom?', a: 'Per audio riunione pulito con buoni microfoni, aspettati 90-95% di precisione. Per riunioni con cattivo audio (microfono laptop, stanza rumorosa, Wi-Fi debole), la precisione cala un po\'. Nomi e termini tecnici spesso richiedono pulizia.' },
        { q: 'Funziona anche per registrazioni Microsoft Teams o Google Meet?', a: 'Sì, stesso motore. Abbiamo pagine dedicate per Google Meet e Microsoft Teams.' },
      ]}
      relatedLinks={[
        { href: '/it/google-meet-transcription', label: 'Trascrizione Google Meet', desc: 'Stesso workflow per registrazioni Google Meet.' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams', desc: 'Per registrazioni Microsoft Teams.' },
        { href: '/it/meeting-transcription', label: 'Trascrizione riunioni', desc: 'Pagina generica se la registrazione viene da un\'altra piattaforma.' },
        { href: '/it/interview-transcription', label: 'Trascrizione intervista', desc: 'Per call uno a uno e interviste qualitative.' },
      ]}
    />
  )
}
