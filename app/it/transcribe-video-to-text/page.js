import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Video in testo — trascrizione video online gratis | Mictoo',
  description: 'Trascrizione video in testo gratis. Carica MP4, MOV, WEBM, AVI e ottieni una trascrizione IA o un file SRT. Funziona con registrazioni schermo, tutorial, vlog.',
  alternates: { canonical: 'https://mictoo.com/it/transcribe-video-to-text', languages: LANGS },

  openGraph: {
    title: "Video in testo — trascrizione video online gratis | Mictoo",
    description: "Trascrizione video in testo gratis. Carica MP4, MOV, WEBM, AVI e ottieni una trascrizione IA o un file SRT. Funziona con registrazioni schermo, tutorial, vlog.",
    url: "https://mictoo.com/it/transcribe-video-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video in testo — trascrizione video online gratis | Mictoo",
    description: "Trascrizione video in testo gratis. Carica MP4, MOV, WEBM, AVI e ottieni una trascrizione IA o un file SRT. Funziona con registrazioni schermo, tutorial, vlog.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="MP4 · MOV · WEBM · GRATIS"
      h1={<>Video in testo<br /><span className="text-brand-600">Trascrizione video IA gratuita</span></>}
      subtitle="Trascrizione IA gratuita per qualsiasi file video. Estraiamo l'audio automaticamente. Senza account, senza tariffa al minuto, senza email."
      howItWorks={[
        { icon: '🎬', title: 'Rilascia il video', desc: 'MP4, MOV, WEBM, AVI o qualsiasi container video comune. Registrazioni schermo, vlog, export di webinar, MP4 di Zoom. Trascina o clicca per scegliere.' },
        { icon: '⚡', title: 'Estraiamo l\'audio, l\'IA trascrive', desc: 'Tiriamo fuori la traccia audio dal video e mandiamo solo quella a Whisper large-v3. Niente bisogno di convertire in MP3 prima. Un video di 30 minuti finisce in genere in circa un minuto.' },
        { icon: '📋', title: 'Copia, scarica o prendi i sottotitoli', desc: 'Scarica come TXT per le note, o come SRT per inserire come sottotitoli in un editor video. Modifica le parole sbagliate nel browser prima di esportare.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per il video', bullets: [
        { title: 'Upload diretto, niente giro per YouTube', desc: 'Molti trascrittori gratuiti ti dicono di caricare il video su YouTube come Non in elenco, aspettare i sottotitoli auto e copiare il testo. È lento e dà sottotitoli mediocri. Salta.' },
        { title: 'Estrazione audio automatica', desc: 'Rilasci l\'MP4. Tiriamo fuori l\'audio internamente e lo mandiamo al modello. Non serve eseguire ffmpeg tu.' },
        { title: 'L\'output funziona in editor video veri', desc: 'L\'SRT che generiamo funziona in Premiere Pro, DaVinci Resolve, Final Cut, CapCut e YouTube Studio. I timecode sono precisi al frame.' },
        { title: 'File video più grandi? Comprimi l\'audio, non il video', desc: 'Un video di 200 MB è di solito 195 MB di video e 5 MB di audio. Non serve comprimere tutto, solo la traccia audio.' },
        { title: 'Nessun file viene conservato', desc: 'Il video arriva da noi, estraiamo l\'audio, lo mandiamo al provider di trascrizione e scartiamo entrambi. Non teniamo né il video né l\'audio sui nostri server.' },
      ]}}
      useCases={{ title: 'A cosa serve trascrivere video', items: [
        { title: 'Sottotitoli per video social', desc: 'TikTok, Instagram Reels, YouTube Shorts beneficiano tutti di sottotitoli incorporati. Genera l\'SRT qui, importa in CapCut o Premiere, stilizza i sottotitoli a piacere, incidili nel video.' },
        { title: 'Tutorial e contenuti corso', desc: 'Se registri screencast tutorial, una versione testuale aiuta con SEO, accessibilità e traduzione. Incolla la trascrizione nel tuo blog o piattaforma corsi come compagno al video.' },
        { title: 'Follow-up di webinar', desc: 'Hai fatto un webinar di un\'ora. Trascrivi la registrazione, modifica leggermente, manda come email di follow-up ai partecipanti che non sono potuti restare fino alla fine.' },
        { title: 'Tagli di intervista per il montaggio', desc: 'Montando un\'intervista video lunga, avere la trascrizione su un secondo monitor ti fa fare un "paper edit". Segni le righe che vuoi, le trovi sulla timeline, molto più veloce che scorrere.' },
        { title: 'Preparazione traduzione e doppiaggio', desc: 'Trascrivi nella lingua originale, passa il testo per DeepL o ChatGPT per tradurre, poi usalo come script per doppiaggio o traduzione sottotitoli.' },
      ]}}
      proTips={{ title: 'Consigli per la trascrizione video', tips: [
        { title: 'Estrai l\'audio prima se il video supera i 60 MB', desc: 'Un video 1080p è soprattutto byte di pixel che butteremo via comunque. Tira fuori solo la traccia audio: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Un video di 500 MB scende sotto i 30 MB di audio.' },
        { title: 'Silenzia la musica di sottofondo nell\'editor prima di esportare', desc: 'Se il video ha musica sotto il dialogo (B-roll, intro, transizioni), silenzia o abbassa la traccia musicale nel tuo editor prima di esportare la versione da caricare. Whisper a volte inventa parole quando la voce è sepolta sotto la musica.' },
        { title: 'Le registrazioni schermo senza musica sono le più facili', desc: 'Loom, Zoom, catture OBS di qualcuno che parla su slide danno le trascrizioni più pulite. Niente musica, una sola voce, microfono chiaro. Otterrai precisione quasi umana.' },
        { title: 'Per video multi-parlante, registra tracce audio separate se possibile', desc: 'Se controlli la registrazione, cattura ogni parlante sulla propria traccia. Trascrivi ogni traccia separatamente. Attribuzione più pulita, meno errori sui sovrapposti.' },
        { title: 'Il framerate non conta, conta solo la qualità audio', desc: 'Whisper non guarda il video, solo l\'audio. Un video 4K con audio cattivo si trascrive peggio di uno 480p con un lavalier. Metti lo sforzo nell\'audio.' },
        { title: 'I timecode SRT possono richiedere un piccolo offset in alcuni editor', desc: 'La maggior parte degli editor allinea i timecode SRT perfettamente. Alcuni editor vecchi si aspettano che il primo sottotitolo parta a 00:00:01,000 invece che a 00:00:00,000. Se i sottotitoli risultano spostati di un secondo, di solito è per questo.' },
      ]}}
      faq={[
        { q: 'Quali formati video supportate?', a: 'MP4, MOV, WEBM, AVI, MKV, FLV. Se il video gira in VLC, quasi sicuramente funziona qui. Estraiamo l\'audio internamente, quindi il codec video non conta molto.' },
        { q: 'Il mio file video è troppo grande per caricarlo. Cosa faccio?', a: 'Due opzioni. Estrai solo l\'audio prima (un comando ffmpeg, vedi Consigli sopra) e carica quello. O usa un export più piccolo dal tuo editor (risoluzione o bitrate più bassi). Per file oltre i 60 MB, estrarre l\'audio è più veloce.' },
        { q: 'Posso ottenere sottotitoli SRT, non solo testo semplice?', a: 'Sì. Dopo la trascrizione, clicca "Scarica come SRT". L\'SRT funziona in YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut e qualsiasi editor video standard.' },
        { q: 'I tempi SRT corrispondono esattamente ai frame del video?', a: 'Sì. I timecode SRT sono in millisecondi, più preciso di qualsiasi framerate video. Si allineano correttamente a 24, 25, 29.97, 30, 50 e 60 fps.' },
        { q: 'Posso trascrivere un video senza audio (solo testo sullo schermo)?', a: 'No. Trascriviamo audio parlato. Per riconoscere testo sullo schermo serve OCR, che è uno strumento diverso.' },
        { q: 'Quanto è precisa video in testo?', a: 'Dipende dall\'audio. Voiceover pulito, precisione quasi umana (95% o più). Video di conferenza con cattiva acustica della sala, intorno all\'85-90%. Video musicalmente pesanti con dialogo basso, scende più giù.' },
        { q: 'Il mio video verrà caricato su YouTube o servizi terzi?', a: 'No. Il tuo video viene trasmesso al nostro provider di trascrizione per processarlo e scartato. Niente viene caricato su YouTube, Google o altrove. Non siamo nel business dello storage video in cloud.' },
        { q: 'Posso modificare la trascrizione prima di scaricarla?', a: 'Sì. Correggi le parole sbagliate nel browser prima di esportare. Utile per sistemare nomi propri e termini tecnici.' },
        { q: 'Supportate video 360 o formati VR?', a: 'Il codec video non ci interessa. Finché il file è un container standard (MP4, MOV) con una traccia audio, estraiamo l\'audio e trascriviamo.' },
        { q: 'Cosa se il video ha più tracce audio (commento, originale, musica)?', a: 'Usiamo solo la traccia di default. Se vuoi una traccia specifica, ri-esporta il video con quella traccia come default, o estrai la traccia che vuoi e caricala come audio.' },
        { q: 'C\'è un limite di durata video?', a: '30 minuti per file gratis, 60 minuti con login. Per video più lunghi, dividi in pezzi. Le trascrizioni si possono concatenare dopo.' },
        { q: 'Posso trascrivere uno stream video live?', a: 'No. Lavoriamo solo con file registrati. Per trascrizione live serve un\'altra categoria di strumento.' },
      ]}
      relatedLinks={[
        { href: '/it/free-srt-generator', label: 'Generatore SRT', desc: 'Stesso strumento, brandizzato per workflow di sottotitoli.' },
        { href: '/it/youtube-to-text', label: 'YouTube in testo', desc: 'Se il video è già su YouTube.' },
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom', desc: 'Specificamente per registrazioni MP4 di Zoom.' },
        { href: '/it/how-to-compress-audio', label: 'Come comprimere l\'audio', desc: 'Per video il cui audio supera il limite di dimensione.' },
      ]}
    />
  )
}
