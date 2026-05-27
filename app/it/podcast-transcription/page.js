import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Trascrizione podcast — generatore gratuito IA | Mictoo',
  description: 'Trascrizione podcast gratuita con IA. Carica il tuo episodio (MP3, MP4, M4A, WAV) e ottieni una trascrizione pulita con timecode in pochi secondi. Senza registrazione, senza tariffa al minuto.',
  alternates: { canonical: 'https://mictoo.com/it/podcast-transcription', languages: LANGS },
}

export default function ItPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="Podcaster · Conduttori · Gratis"
      h1={<>Trascrizione podcast<br /><span className="text-brand-600">Generatore gratuito di trascrizioni</span></>}
      subtitle="Trasforma qualsiasi episodio in testo pulito. Carica il tuo MP3, MP4 o M4A e ottieni la trascrizione in pochi secondi. Senza account, senza tariffa al minuto."
      howItWorks={[
        { icon: '📂', title: 'Rilascia l\'episodio', desc: 'MP3, MP4, M4A, WAV o FLAC. Cloud Recording da Riverside, export da Descript, audio grezzo da Zoom, file anchor.fm. Tutto va bene.' },
        { icon: '⚡', title: 'L\'IA fa il lavoro', desc: 'Whisper large-v3 gira sul nostro backend e converte l\'audio in testo. La maggior parte degli episodi da 30 minuti finisce in meno di un minuto.' },
        { icon: '📋', title: 'Copia, scarica o modifica', desc: 'Prendi il testo come TXT, SRT per i sottotitoli, o incollalo direttamente nel tuo editor di show notes. Sistema le parole sbagliate nel nostro editor prima dell\'export.' },
      ]}
      whyUse={{ title: 'Perché i podcaster scelgono Mictoo', bullets: [
        { title: 'Gli episodi lunghi vanno bene', desc: 'Fino a 60 minuti per file dopo login gratuito. Per la divisione in due parti, manteniamo i timecode relativi così puoi rincollare i file SRT senza fare calcoli.' },
        { title: 'Accenti e voci sovrapposte tengono', desc: 'Whisper large-v3 è il più forte modello di riconoscimento vocale aperto che conosciamo per l\'inglese non nativo. Se il tuo co-conduttore è di Berlino o São Paulo, la trascrizione non diventerà poltiglia.' },
        { title: 'I tappeti musicali non lo rompono', desc: 'La nostra pipeline esegue voice activity detection prima della trascrizione. Le intro strumentali lunghe vengono marcate come silenzio, non come parole inventate. Le letture sponsor con musica sotto la voce vengono fuori pulite.' },
        { title: 'Niente abbonamento', desc: 'Molti podcaster trascrivono uno o due episodi al mese. Pagare 15 dollari per un seat mensile è uno spreco. Carica il file quando serve. Guadagnamo con la pubblicità e un futuro piano Pro per utenti intensivi.' },
        { title: 'Il tuo audio non viene conservato', desc: 'I file vanno direttamente al provider di voce, vengono trascritti, poi spariscono. Non teniamo i tuoi episodi, e i provider (Groq, OpenAI) non si addestrano sui dati API.' },
      ]}}
      useCases={{ title: 'Cosa fanno davvero i podcaster con la trascrizione', items: [
        { title: 'Show notes e post di blog', desc: 'Incolla la trascrizione nel tuo CMS, segna i capitoli, metti i link, pubblica il post. Un episodio di 45 minuti dà di solito 6000-8000 parole di materiale sorgente. Tre o quattro post di blog leggermente editati da una registrazione.' },
        { title: 'Card di citazione per i social', desc: 'Scansiona la trascrizione per la frase che ha colpito e trasformala in una grafica. Molto più veloce che scorrere l\'audio a 1.5x cercando il timecode.' },
        { title: 'Archivio cercabile del back catalogue', desc: 'Passa i tuoi vecchi episodi per trascrizione batch e improvvisamente hai un Ctrl+F su anni di conversazioni. Utile quando un ospite torna e vuoi ricordare di cosa avevate parlato l\'ultima volta.' },
        { title: 'Sostituzione dei sottotitoli auto YouTube', desc: 'I sottotitoli auto di YouTube sono mediocri per podcast con due voci e musica. Carica un SRT di Mictoo invece. Migliore punteggiatura, meno errori, migliore accessibilità.' },
        { title: 'Link trascrizione per accessibilità', desc: 'Molti podcaster aggiungono un link "leggi la trascrizione" nelle show notes RSS. Aiuta ascoltatori sordi e ipoacusici, e aiuta i motori di ricerca a trovare i tuoi contenuti.' },
      ]}}
      proTips={{ title: 'Consigli per trascrizioni podcast più pulite', tips: [
        { title: 'Taglia prima la musica intro e outro', desc: 'Whisper ignora bene la musica, ma 90 secondi di cold open strumentale a volte attivano parole fantasma. Se la tua intro è la stessa in ogni episodio, taglia i primi 1:30 in Audacity prima dell\'upload. Risparmi minuti di pulizia dopo.' },
        { title: 'Esporta a 64 kbps mono se il file grezzo è enorme', desc: 'La voce non serve in stereo, e 64 kbps bastano per la parola. Un episodio di due ore a 64 kbps mono è circa 55 MB. Sta nel limite di 60 MB con login senza divisione. ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.' },
        { title: 'Per interviste con cattivo audio dell\'ospite, trascrivi ogni traccia separatamente', desc: 'Se registri su Riverside o SquadCast e hai tracce separate per parlante, carica ognuna per conto suo. Whisper fa più facile con una voce alla volta. Attribuzione più pulita, meno parole perse sui sovrapposti.' },
        { title: 'Per episodi corti scegli la lingua esplicitamente', desc: 'Il rilevamento automatico campiona il primo chunk audio. Se apri con un cold open di una parola o una risata, il rilevamento può andare sulla lingua sbagliata. Per qualsiasi cosa sotto i 5 minuti, scegli la lingua manualmente.' },
        { title: 'La punteggiatura sarà imperfetta. Sistema le prime 10 righe, lascia il resto', desc: 'Whisper azzecca la maggior parte della punteggiatura, ma a volte salta punto e virgola e discorso diretto. Per le show notes contano le prime 10 righe (la gente le scorre). Oltre — spedisci com\'è.' },
        { title: 'Usa l\'export SRT anche se non ti servono sottotitoli', desc: 'SRT ti dà timecode ogni pochi secondi. Anche se incolli in un post di blog, quei timecode ti aiutano a tornare all\'audio per verificare una citazione. Abbiamo un generatore SRT gratis qui sullo stesso sito.' },
      ]}}
      faq={[
        { q: 'Posso trascrivere un episodio di 2 ore?', a: 'Sì, ma dividilo prima. Il nostro cap per file è 30 minuti gratis o 60 minuti dopo login. Per un episodio di 2 ore, dividi in due o tre parti e trascrivi ognuna.' },
        { q: 'Ottengo etichette dei parlanti (host vs ospite)?', a: 'Non automaticamente al momento. Whisper di per sé non fa diarizzazione. Se hai tracce separate per parlante (comune in Riverside, SquadCast, Zencastr), carica ognuna separatamente ed etichetta tu nella trascrizione finale.' },
        { q: 'Come gestisce accenti e podcast bilingui?', a: 'Whisper large-v3 è stato addestrato su 680.000 ore di audio multilingue. Inglese non nativo, accenti regionali e code-switching funzionano meglio che nei modelli più piccoli. Per un podcast che cambia tra inglese e spagnolo a metà episodio, scegli "Rilevamento automatico" e Whisper seguirà il cambio.' },
        { q: 'Che formati audio supportate per podcast?', a: 'MP3, M4A, WAV, FLAC, OGG, WEBM e AAC. Più file video come MP4 e MOV (estraiamo l\'audio). Se il tuo hosting podcast ti fa scaricare in uno di questi, sei a posto. AIFF e ALAC non supportati direttamente, converti in WAV prima.' },
        { q: 'C\'è un limite di parole per episodio?', a: 'Nessun limite di parole. Solo il limite di dimensione file (25 MB gratis, 60 MB con login) e durata (30 min gratis, 60 min con login). Un episodio tipico di 60 minuti produce 9000-11.000 parole.' },
        { q: 'Quanto è precisa la trascrizione podcast rispetto agli umani?', a: 'Per audio studio pulito, Whisper large-v3 si attesta tipicamente al 5-10% di word error rate. I trascrittori umani sono al 3-5%. Per la maggior parte delle show notes e riuso in blog, l\'IA è abbastanza. Per testimonianze giudiziarie o citazioni accademiche, prendi un umano.' },
        { q: 'Il mio episodio verrà conservato sui vostri server?', a: 'No. Passiamo l\'audio direttamente al provider di trascrizione (Groq, con OpenAI come backup). Loro lo processano, noi lo scartiamo. Non scriviamo mai il tuo file podcast nel database o nell\'archivio.' },
        { q: 'Posso scaricare come SRT per i sottotitoli?', a: 'Sì. Dopo la trascrizione clicca il pulsante di download SRT. Usalo direttamente in YouTube Studio, Premiere Pro, DaVinci Resolve o qualsiasi editor video.' },
        { q: 'Fate pagare al minuto?', a: 'No. La trascrizione su Mictoo è gratis. Siamo finanziati dalla pubblicità per ora, con un piano Pro a pagamento in arrivo per chi serve file più lunghi o upload batch.' },
        { q: 'Il mio episodio ha linguaggio esplicito. Verrà censurato?', a: 'Nessun filtro. La trascrizione riflette esattamente quello che è stato detto. Se vuoi modificare parolacce per una versione pulita, fallo tu dopo il download.' },
        { q: 'Posso modificare la trascrizione prima del download?', a: 'Sì. C\'è un editor base nella vista risultato. Sistema le parole e scarica la versione modificata come TXT o SRT.' },
        { q: 'La trascrizione podcast su Mictoo è conforme al GDPR?', a: 'Non conserviamo audio o trascrizione sui nostri server dopo che lasci la pagina. Siamo in Europa, e i nostri provider (Groq US, OpenAI US) hanno DPA firmati. Per domande specifiche di conformità, vedi la Privacy Policy o scrivi a info@mictoo.com.' },
      ]}
      relatedLinks={[
        { href: '/it/free-srt-generator', label: 'Generatore SRT', desc: 'File di sottotitoli pronti per podcast, non solo testo.' },
        { href: '/it/timestamped-transcription', label: 'Trascrizione con timecode', desc: 'Per marker capitolo, tagli e ricerca citazioni.' },
        { href: '/it/interview-transcription', label: 'Trascrizione intervista', desc: 'Stesso motore, ottimizzato per il formato uno a uno.' },
        { href: '/it/youtube-to-text', label: 'YouTube in testo', desc: 'L\'episodio è già su YouTube? Prendi l\'audio da lì.' },
      ]}
    />
  )
}
