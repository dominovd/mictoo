import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio in testo — trascrizione gratuita online | Mictoo',
  description: 'Convertitore audio in testo gratuito. Carica qualsiasi file audio (MP3, WAV, M4A, FLAC, OGG, AAC) e ottieni una trascrizione pulita in pochi secondi. Senza registrazione, oltre 50 lingue.',
  alternates: { canonical: 'https://mictoo.com/it/transcribe-audio-to-text', languages: LANGS },
}

export default function ItAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="MP3 · WAV · M4A · FLAC · GRATIS"
      h1={<>Audio in testo<br /><span className="text-brand-600">Trascrizione IA gratuita</span></>}
      subtitle="Trascrizione IA gratuita per qualsiasi file audio. MP3, WAV, M4A, FLAC, OGG, AAC. Senza account, senza tariffa al minuto."
      howItWorks={[
        { icon: '📂', title: 'Rilascia l\'audio', desc: 'Qualsiasi formato comune funziona. MP3 dal telefono, WAV da un registratore, M4A dai Memo Vocali iPhone, FLAC dall\'export di un podcast. Trascina il file o clicca per sceglierlo.' },
        { icon: '⚡', title: 'L\'IA trascrive', desc: 'Usiamo OpenAI Whisper large-v3. Un file di 10 minuti richiede circa 20 secondi. Uno di 30 minuti, meno di un minuto.' },
        { icon: '📋', title: 'Copia, scarica o modifica', desc: 'Leggi la trascrizione nel browser. Scarica come TXT per le note, o come SRT se servono i timecode. Correggi le parole sbagliate inline prima di esportare.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per audio in testo', bullets: [
        { title: 'Un solo modello, ed è quello giusto', desc: 'Usiamo Whisper large-v3 per tutti. Niente trucchi del tipo "il piano gratuito gira su un modello più debole". Lo stesso modello che alimenta le trascrizioni enterprise costose, trascrive il tuo file.' },
        { title: 'Supporto formati davvero ampio', desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, più formati video con audio dentro (MP4, MOV). Niente attrito da "accettiamo solo MP3, converti prima".' },
        { title: 'Oltre 50 lingue, anche file bilingui', desc: 'Il rilevamento automatico sceglie la lingua dai primi secondi di audio. Se il file passa da una lingua all\'altra a metà registrazione (comune nelle interviste), Whisper segue il cambio.' },
        { title: 'Nessun file viene conservato', desc: 'Il tuo audio viene trasmesso al provider di trascrizione, processato e scartato. Non scriviamo mai il file nel nostro database o archivio. I provider che usiamo (Groq, OpenAI) non si addestrano sui dati API.' },
        { title: 'Gratis senza asterischi', desc: 'Fino a 30 minuti per file senza account. Con login gratuito arrivi a 60 minuti per file. Niente altro vincolato.' },
      ]}}
      useCases={{ title: 'Quando audio in testo fa davvero risparmiare tempo', items: [
        { title: 'Note di intervista', desc: 'Hai passato un\'ora con una fonte. Invece di scorrere la registrazione cercando quella citazione, fai Ctrl+F sulla trascrizione. Cinque secondi invece di cinque minuti.' },
        { title: 'Pulizia di memo vocali', desc: 'Hai dettato un\'idea abbozzata nel telefono camminando. Ora la vuoi come testo. Rilasci l\'M4A, ottieni frasi, copi in Notion.' },
        { title: 'Ripasso di lezioni e webinar', desc: 'Una lezione di due ore è difficile da rivedere a 2x. La trascrizione in testo ti fa scorrere sezione per sezione e approfondire solo le parti che contano.' },
        { title: 'Preparazione alla traduzione', desc: 'Whisper trascrive nella lingua originale. Da lì incolli in DeepL o ChatGPT e traduci pulito. Meglio delle traduzioni automatiche fatte dall\'audio grezzo.' },
        { title: 'Ricerca nell\'archivio audio', desc: 'Hai anni di chiamate, episodi o riunioni registrati? Lancia trascrizione batch e improvvisamente hai un archivio cercabile come testo. Più economico di qualsiasi "assistente IA per riunioni" in abbonamento.' },
      ]}}
      proTips={{ title: 'Consigli per una trascrizione audio più pulita', tips: [
        { title: 'Il mono basta. Lo stereo è banda sprecata', desc: 'La voce non ha bisogno di due canali. Se il file è enorme, ri-codifica in mono e dimezzi la dimensione senza perdita di qualità per la trascrizione. ffmpeg in una riga: ffmpeg -i input.wav -ac 1 output.wav.' },
        { title: '64 kbps MP3 bastano per la voce', desc: 'Se esporti da una DAW o da un editor, 64 kbps mono MP3 dà a Whisper tutto ciò che serve. Bitrate più alti non migliorano la precisione, ingrossano solo il file.' },
        { title: 'Taglia i lunghi silenzi all\'inizio e alla fine', desc: 'Se la registrazione ha 90 secondi di aria morta prima della prima parola, quei 90 secondi consumano il tuo limite di durata. Tagliali in Audacity (Effect, Truncate Silence) prima del caricamento.' },
        { title: 'Scegli la lingua manualmente per file corti', desc: 'Il rilevamento automatico campiona il primo chunk audio per identificare la lingua. Per file sotto i 5 minuti quel campione è piccolo e il rilevamento è inaffidabile. Seleziona la lingua esplicitamente dal menu.' },
        { title: 'La musica di sottofondo fa allucinare Whisper', desc: 'Se l\'audio ha musica sotto la voce (jingle pubblicitari, intro, b-roll), il modello a volte inserisce parole inventate nelle sezioni solo musica. Se hai una versione senza musica, usa quella.' },
        { title: 'Per file molto rumorosi, denoise prima', desc: 'Opzioni gratuite: Audacity Noise Reduction (integrato), o Adobe Podcast Enhance (web gratis, sorprendentemente buono). Passa il file una volta, poi carica la versione pulita.' },
      ]}}
      faq={[
        { q: 'Qual è il miglior convertitore audio-testo gratuito?', a: 'Siamo di parte, ma la risposta onesta: qualsiasi strumento che gira Whisper large-v3 è in cima al segmento gratuito. Mictoo usa quel modello senza muro di registrazione. Otter e Trint sono buoni ma fanno pagare al minuto oltre la quota gratuita. Per trascrizioni occasionali, il gratuito è la scelta giusta.' },
        { q: 'Quanto è precisa la trascrizione audio?', a: 'Per voce pulita in una lingua principale, aspettati 5-10% di word error rate. Per audio rumoroso, accenti forti o vocabolario specialistico la precisione cala. Per la maggior parte degli usi (note, ricerca, bozze) è più che sufficiente. Per registrazioni legali o mediche, prendi un umano.' },
        { q: 'Quali formati audio supportate?', a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. Anche file video come MP4 e MOV (estraiamo l\'audio automaticamente). AIFF e ALAC non sono supportati direttamente. Convertili prima in WAV o FLAC.' },
        { q: 'Quanto tempo serve per trascrivere?', a: 'Un file di 5 minuti finisce in 10-15 secondi. Uno di 30 minuti in 45-60 secondi. Processiamo l\'intero file come una singola richiesta, senza chunking da parte tua.' },
        { q: 'Posso trascrivere la registrazione di una telefonata?', a: 'Sì. Le telefonate sono di solito 8 kHz mono con un po\' di compressione. Whisper le gestisce, la precisione è leggermente inferiore rispetto all\'audio da studio. Assicurati che registrare la chiamata sia legale nella tua giurisdizione.' },
        { q: 'Devo selezionare la lingua?', a: 'No, il rilevamento automatico è attivo di default. Per audio sotto i 5 minuti o file con un inizio non vocale, scegli la lingua manualmente per risultati più affidabili.' },
        { q: 'C\'è un costo al minuto?', a: 'Nessun costo. La trascrizione è gratis senza contatore di minuti. Ci finanziamo con pubblicità display e un piano Pro previsto per utenti intensivi.' },
        { q: 'Qual è la dimensione massima del file?', a: '25 MB senza account, 60 MB dopo login gratuito. Se il file è più grande, vedi la nostra guida alla compressione.' },
        { q: 'Il mio audio viene salvato sui vostri server?', a: 'No. Trasmettiamo il file direttamente al provider di trascrizione, riceviamo il testo e scartiamo l\'audio. Nulla viene scritto nel database o nell\'archivio.' },
        { q: 'Posso modificare la trascrizione prima del download?', a: 'Sì. Dopo la trascrizione puoi correggere le parole sbagliate inline nella vista risultato, poi scaricare la versione modificata.' },
        { q: 'Quali formati di output sono disponibili?', a: 'Testo semplice (TXT), file di sottotitoli (SRT) con timecode, e copia negli appunti. L\'SRT funziona in YouTube Studio, Premiere Pro, DaVinci Resolve e qualsiasi editor video standard.' },
        { q: 'Mictoo funziona su mobile?', a: 'Sì. Il sito è ottimizzato per mobile. Puoi caricare direttamente dal telefono, anche dall\'app File iOS o dalla cartella Download Android.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo', desc: 'Consigli e particolarità specifici di MP3.' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: 'Stesso motore, ottimizzato per file MP4 e MOV.' },
        { href: '/it/timestamped-transcription', label: 'Trascrizione con timecode', desc: 'Quando servono timecode per parola o per frase.' },
        { href: '/it/how-to-compress-audio', label: 'Come comprimere l\'audio', desc: 'Quando il file è troppo grande per caricarlo.' },
      ]}
    />
  )
}
