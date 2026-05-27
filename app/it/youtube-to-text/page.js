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
  title: 'YouTube in testo — trascrivi video YouTube gratis | Mictoo',
  description: 'Trascrizione gratuita YouTube in testo. Scarica il video, rilascia il file, ottieni una trascrizione IA precisa. Meglio dei sottotitoli automatici di YouTube, con timecode ed export SRT.',
  alternates: { canonical: 'https://mictoo.com/it/youtube-to-text', languages: LANGS },
}

export default function ItYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="YouTube · SRT · GRATIS"
      h1={<>YouTube in testo<br /><span className="text-brand-600">Strumento gratuito per trascrizioni YouTube</span></>}
      subtitle="Ottieni una trascrizione pulita e precisa da qualsiasi video YouTube. Scarica il file, rilascialo qui, l'IA fa il resto. Meglio dei sottotitoli automatici di YouTube, con punteggiatura corretta e timecode."
      howItWorks={[
        { icon: '⬇️', title: 'Scarica il video o l\'audio', desc: 'Il modo più facile: un\'app desktop gratuita come 4K Video Downloader o ClipGrab (Mac, Windows, Linux). Apri l\'app, incolla il link YouTube, scegli "solo audio" (M4A o MP3), clicca download. Fatto in pochi secondi. Per il lato legale vedi la FAQ sotto.' },
        { icon: '📂', title: 'Rilascia il file', desc: 'Trascina il file scaricato in Mictoo. Accettiamo MP4, M4A, MP3, WAV, FLAC, OGG, WEBM. L\'audio va a Whisper large-v3.' },
        { icon: '📋', title: 'Ottieni la trascrizione', desc: 'Leggi nel browser, copia negli appunti o scarica come TXT o SRT. L\'SRT funziona come sottotitoli YouTube, molto meglio degli automatici.' },
      ]}
      whyUse={{ title: 'Perché usare Mictoo invece dei sottotitoli auto di YouTube', bullets: [
        { title: 'I sottotitoli automatici perdono punteggiatura e nomi propri', desc: 'I sottotitoli di YouTube sono flusso di coscienza senza virgole, senza punti e con tendenza a storpiare i nomi. Whisper large-v3 ti dà frasi complete con punteggiatura, maiuscole e nomi propri riconoscibili.' },
        { title: 'I sottotitoli automatici non sono sempre disponibili', desc: 'Canali piccoli, video privati, dirette terminate o video in lingue meno comuni spesso non hanno sottotitoli o ne hanno di macchina di bassa qualità. Whisper funziona su tutti.' },
        { title: 'Migliore precisione su musica e accenti', desc: 'I sottotitoli auto di YouTube faticano con interludi musicali e inglese non nativo. Whisper gestisce entrambi meglio, con meno parole allucinate e copertura accenti più forte.' },
        { title: 'Ottieni un SRT pulito, non un XML YouTube', desc: 'La traccia sottotitoli di YouTube si scarica in XML o VTT con timecode strani. Il nostro SRT è standard, drop-in compatibile con qualsiasi editor video.' },
        { title: 'Funziona su video che non sono tuoi', desc: 'Puoi trascrivere lezioni, interviste, podcast su YouTube per studio personale o uso di ricerca, senza accesso da proprietario del canale (soggetto a copyright e termini di YouTube, vedi FAQ).' },
      ]}}
      useCases={{ title: 'A cosa servono le trascrizioni YouTube', items: [
        { title: 'Studiare lezioni e tutorial lunghi', desc: 'Una lezione MIT di 90 minuti è più facile da studiare con una versione testuale. Scorri per la parte che serve, salta al timecode nel video per la spiegazione live.' },
        { title: 'Citare in lavoro accademico o giornalistico', desc: 'Quando fai riferimento a qualcosa detto in un video, avere la trascrizione con timecode ti fa citare il momento esatto. Molto più veloce di rivedere per trovare la citazione.' },
        { title: 'Riusare il tuo contenuto YouTube', desc: 'Trasforma un video YouTube in un post di blog, una newsletter, un thread X, un articolo LinkedIn. La trascrizione è la bozza di partenza.' },
        { title: 'Tradurre video per uso personale', desc: 'Ottieni la trascrizione nella lingua sorgente, rilasciala in DeepL o ChatGPT, ottieni una traduzione. Utile per tutorial o interviste in lingua straniera.' },
        { title: 'Sostituire sottotitoli auto cattivi sul tuo canale', desc: 'Genera un SRT pulito qui, caricalo in YouTube Studio come traccia sottotitoli ufficiale. Migliore esperienza spettatore, migliore SEO.' },
      ]}}
      proTips={{ title: 'Consigli per trascrivere YouTube', tips: [
        { title: 'Scarica solo audio per la trascrizione', desc: 'Non ti serve video per la trascrizione. Un M4A solo audio è un decimo della dimensione e si scarica in pochi secondi. Sia 4K Video Downloader che ClipGrab hanno l\'opzione "solo audio" nel menu format. L\'M4A è di solito sotto i 25 MB anche per video di 30 minuti.' },
        { title: 'Per video oltre i 30 minuti, l\'audio-solo di solito sta senza dividere', desc: 'Audio-solo evita il limite di dimensione sulla maggior parte dei video. Se una conferenza di 90 minuti supera comunque i 60 MB, dividi in tre pezzi da 30 minuti.' },
        { title: 'Salta la musica intro e outro', desc: 'I tutorial YouTube spesso hanno 15 secondi di musica tema all\'inizio e fine. Tagliali in Audacity prima dell\'upload. Whisper a volte inventa parole durante sezioni solo musica.' },
        { title: 'Per canali tutorial con codice sullo schermo, serve comunque la versione audio', desc: 'OCR per testo sullo schermo è una categoria diversa di strumento. Se il tutorial si basa sul mostrare codice, dovrai prendere screenshot separatamente per la parte visiva.' },
        { title: 'I sottotitoli live di YouTube possono fare da sanity check', desc: 'Se il video ha sottotitoli auto di YouTube, puoi confrontarli con la tua trascrizione Whisper per individuare divergenze. Di solito Whisper vince, ma su slang raro o nomi propri YouTube potrebbe aver beccato qualcosa che Whisper ha perso.' },
        { title: 'Nome canale e titolo video vanno nei metadati file', desc: 'Quando scarichi batch di più video, 4K Video Downloader e ClipGrab possono salvare il titolo come nome file di default. Tiene le tue trascrizioni organizzate dopo.' },
      ]}}
      faq={[
        { q: 'Posso incollare un URL YouTube direttamente in Mictoo?', a: 'Non al momento. YouTube blocca attivamente i server di terze parti dal recuperare video. Devi scaricare il video o l\'audio prima con uno strumento come yt-dlp, poi caricare il file su Mictoo.' },
        { q: 'È legale trascrivere video YouTube?', a: 'Per studio personale, ricerca, giornalismo, accessibilità e scopi di fair use, generalmente sì nella maggior parte delle giurisdizioni. Per ripubblicare la trascrizione commercialmente, di solito serve il permesso del creatore del video. I Termini di Servizio di YouTube vietano di scaricare contenuti tranne quando YouTube lo consente esplicitamente.' },
        { q: 'La mia trascrizione corrisponderà ai sottotitoli auto di YouTube?', a: 'No, la nostra sarà migliore. I sottotitoli auto non hanno punteggiatura e hanno precisione più debole. Whisper large-v3 produce frasi complete con punteggiatura, maiuscole e migliore precisione su musica, accenti e nomi propri.' },
        { q: 'Qual è il miglior downloader YouTube?', a: 'Per la maggior parte: 4K Video Downloader o ClipGrab. Entrambi gratis, entrambi con app desktop pulita per Mac, Windows e Linux, entrambi ti fanno prendere solo audio in un click. Evita i siti "downloader YouTube online" che spuntano nei risultati Google, molti sono sepolti sotto pubblicità malware. Se sei a tuo agio con la riga di comando, yt-dlp è l\'opzione più affidabile.' },
        { q: 'Come scarico solo l\'audio?', a: 'In 4K Video Downloader: incolla il link YouTube, quando si apre la finestra format scegli "Extract Audio" e M4A o MP3. In ClipGrab: incolla il link, nel menu "Format" scegli MP3 o "Original audio".' },
        { q: 'Cosa se il mio video YouTube è in una lingua che non parlo?', a: 'Whisper rileva automaticamente la lingua e trascrive nella lingua sorgente. Poi puoi incollare il risultato in DeepL o ChatGPT per traduzione. Due passi, ma il risultato è di solito migliore dei sottotitoli auto-tradotti di YouTube.' },
        { q: 'Quanto ci mette a trascrivere un video YouTube?', a: 'Solo il passo di trascrizione richiede circa l\'1-2% della durata audio. Una conferenza di 30 minuti finisce in circa un minuto. Il tempo di download dipende dalla tua connessione e dalla velocità del downloader.' },
        { q: 'Avrò etichette dei parlanti per video YouTube multi-parlante?', a: 'No, Whisper non fa diarizzazione di default. Per interviste e panel con più parlanti dovrai aggiungere etichette manualmente in base al flusso della conversazione.' },
        { q: 'Posso generare sottotitoli pronti per YouTube?', a: 'Sì. Scarica come SRT dopo la trascrizione, poi carica l\'SRT in YouTube Studio sotto Sottotitoli. Sostituisce gli automatici con una versione pulita.' },
        { q: 'Mictoo conserva il video YouTube che carico?', a: 'No. Il file va al nostro provider di trascrizione, viene processato, poi scartato. Non tratteniamo né il video né l\'audio.' },
        { q: 'Il mio video YouTube ha capitoli. La trascrizione li rifletterà?', a: 'Non estraiamo i metadati capitoli di YouTube. La trascrizione arriva come un documento continuo. Se vuoi trascrizioni allineate ai capitoli, dividi il file audio ai timecode dei capitoli prima dell\'upload.' },
        { q: 'Posso trascrivere una diretta YouTube dopo che è finita?', a: 'Sì, finché la diretta è archiviata come video regolare. Scaricala allo stesso modo, poi carica. La trascrizione durante lo stream stesso non è supportata.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: 'Per file video non-YouTube (Zoom, registrazioni schermo, vlog).' },
        { href: '/it/free-srt-generator', label: 'Generatore SRT', desc: 'Per caricare sottotitoli puliti di nuovo in YouTube Studio.' },
        { href: '/it/podcast-transcription', label: 'Trascrizione podcast', desc: 'Per audio tipo podcast caricato su YouTube.' },
        { href: '/it/how-to-split-audio', label: 'Come dividere l\'audio', desc: 'Per video lunghi che superano il limite di 60 minuti.' },
      ]}
    />
  )
}
