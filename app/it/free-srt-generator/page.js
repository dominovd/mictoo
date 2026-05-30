import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generatore SRT — crea file sottotitoli SRT online | Mictoo',
  description:
    'Generatore gratuito di sottotitoli SRT. Carica il tuo file audio o video e ottieni un .srt pulito con timecode in pochi secondi. Funziona con YouTube, Premiere, DaVinci, CapCut.',
  alternates: { canonical: 'https://mictoo.com/it/free-srt-generator', languages: LANGS },

  openGraph: {
    title: "Generatore SRT — crea file sottotitoli SRT online | Mictoo",
    description: "Generatore gratuito di sottotitoli SRT. Carica il tuo file audio o video e ottieni un .srt pulito con timecode in pochi secondi. Funziona con YouTube, Premiere, DaVinci, CapCut.",
    url: "https://mictoo.com/it/free-srt-generator",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generatore SRT — crea file sottotitoli SRT online | Mictoo",
    description: "Generatore gratuito di sottotitoli SRT. Carica il tuo file audio o video e ottieni un .srt pulito con timecode in pochi secondi. Funziona con YouTube, Premiere, DaVinci, CapCut.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="SRT · Sottotitoli · Gratis"
      h1={
        <>
          Generatore SRT
          <br />
          <span className="text-brand-600">Sottotitoli IA da qualsiasi audio o video</span>
        </>
      }
      subtitle="Genera file sottotitoli da qualsiasi audio o video. Ottieni un .srt pulito con timecode precisi in pochi secondi. Drop-in per YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        {
          icon: '📂',
          title: 'Rilascia l\'audio o il video',
          desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. Estraiamo l\'audio dal video automaticamente.',
        },
        {
          icon: '⚡',
          title: 'L\'IA trascrive e allinea',
          desc: 'Whisper large-v3 trascrive l\'audio e genera timecode per ogni riga. Un video di 10 minuti di solito richiede 15 secondi. Uno da 30 minuti, circa un minuto.',
        },
        {
          icon: '💾',
          title: 'Scarica il .srt',
          desc: 'Clicca "Scarica come SRT". Il file è formato standard, drop-in compatibile con ogni grosso video editor e YouTube Studio.',
        },
      ]}
      whyUse={{
        title: 'Perché questo generatore SRT',
        bullets: [
          {
            title: 'I timecode Whisper large-v3 sono frame-accurate',
            desc: 'I timecode sono al millisecondo, più preciso di qualsiasi framerate video comune. Calzano correttamente a 24, 25, 29.97, 30, 50 e 60 fps senza aggiustamenti di offset.',
          },
          {
            title: 'Gratis, nessun contatore al minuto',
            desc: 'Trascrivi 10 minuti o 60. Stesso prezzo (gratis). Nessun gate "passa a Pro" dopo il primo file.',
          },
          {
            title: 'Oltre 50 lingue',
            desc: 'Genera sottotitoli per contenuto in qualsiasi lingua maggiore. Utile per canali YouTube internazionali e tracce sottotitoli tradotte.',
          },
          {
            title: 'Formato .srt standard',
            desc: 'Nessuna estensione proprietaria, nessuna codifica strana. Funziona in Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.',
          },
          {
            title: 'Nessun file conservato',
            desc: 'L\'audio va al provider di trascrizione ed è scartato dopo l\'elaborazione. Non conserviamo il tuo video.',
          },
        ],
      }}
      useCases={{
        title: 'Per cosa la gente genera file SRT',
        items: [
          {
            title: 'Upload YouTube',
            desc: 'Sostituisci i sottotitoli automatici di YouTube con un .srt pulito. Punteggiatura migliore, meno errori, accessibilità migliore per gli spettatori ipoudenti. Bonus: la ricerca YouTube indicizza i sottotitoli caricati in modo più affidabile di quelli auto-generati.',
          },
          {
            title: 'Sottotitoli per video social (TikTok, Reels, Shorts)',
            desc: 'Genera l\'.srt qui, importa in CapCut o Premiere, stila i sottotitoli a piacere, masterizzali nel video. La maggior parte degli spettatori guarda senza audio, quindi i sottotitoli non sono più opzionali.',
          },
          {
            title: 'Sottotitoli per accessibilità',
            desc: 'Registrazioni di talk a conferenze, video di formazione interna, corsi online. I sottotitoli li rendono utilizzabili per spettatori sordi e ipoudenti, e per chiunque in ambienti rumorosi.',
          },
          {
            title: 'Pipeline di traduzione',
            desc: 'Genera l\'.srt nella lingua di partenza, incollalo in DeepL o ChatGPT per tradurlo, salva come .srt nella lingua di destinazione. Risultato: sottotitoli di qualità doppiaggio in un\'altra lingua senza pagare un traduttore umano.',
          },
          {
            title: 'Video editing sotto deadline',
            desc: 'Quando ti servono i sottotitoli ieri e non puoi aspettare un trascrittore umano, i sottotitoli IA vanno bene per il primo cut. Rifinisci dopo.',
          },
        ],
      }}
      proTips={{
        title: 'Consigli per la generazione SRT',
        tips: [
          {
            title: 'Per video lunghi, genera l\'.srt in pezzi da 10 minuti e ricomponi',
            desc: 'Più facile correggere timecode sbagliati a metà se compare drift. La maggior parte degli editor lascia importare più .srt e ricomporli.',
          },
          {
            title: 'L\'upload solo audio è più veloce dell\'upload video per lo stesso contenuto',
            desc: 'Estrai prima l\'audio: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. L\'.srt che ottieni funziona contro il video originale, perché i timecode sono timecode.',
          },
          {
            title: 'Masterizza i sottotitoli solo dopo aver finito il montaggio',
            desc: 'Se masterizzi i sottotitoli nel video prima di fare tagli, devi rifare i sottotitoli quando tagli. Masterizza alla fine, quando il video è locked.',
          },
          {
            title: 'Tieni la lunghezza riga dell\'.srt gestibile',
            desc: 'Whisper a volte produce sottotitoli singola-riga lunghi per frasi lunghe. La maggior parte degli editor lascia spezzare le righe lunghe automaticamente, o puoi spezzare manualmente per leggibilità migliore.',
          },
          {
            title: 'Per video multilingua, genera l\'.srt una lingua alla volta',
            desc: 'Se il tuo video ha sezioni in inglese e spagnolo, genera l\'.srt per ogni sezione separatamente (imposta la lingua manualmente ogni volta), poi unisci in un .srt.',
          },
          {
            title: 'Modifica l\'.srt in un editor di testo, non in un editor video',
            desc: 'Un .srt è solo testo con timecode. Aprilo in VS Code, Notepad++ o BBEdit per sistemare velocemente i refusi. Re-importa nell\'editor video quando sei pronto.',
          },
          {
            title: 'Per TikTok e Reels, accorcia manualmente i sottotitoli a una riga corta per sottotitolo',
            desc: 'Le frasi naturali di Whisper sono più lunghe dello stile sottotitoli punchy di TikTok. Modifica l\'.srt per matchare lo stile della piattaforma.',
          },
        ],
      }}
      faq={[
        {
          q: 'Cos\'è un file SRT?',
          a: 'SRT (SubRip Subtitle) è il formato sottotitoli più comune. Testo semplice con timecode e il testo del sottotitolo. Ogni grosso video player ed editor legge file .srt.',
        },
        {
          q: 'Come genero un file SRT da un video?',
          a: 'Carica il video qui. Estraiamo l\'audio, trascriviamo e generiamo l\'.srt. Clicca "Scarica come SRT" quando è pronto.',
        },
        {
          q: 'Come aggiungo sottotitoli SRT a un video YouTube?',
          a: 'In YouTube Studio apri il tuo video, vai su Sottotitoli, clicca Aggiungi lingua, carica il file .srt. YouTube lo userà come sottotitoli ufficiali per quella lingua.',
        },
        {
          q: 'Il file SRT funziona in Premiere Pro e DaVinci Resolve?',
          a: 'Sì. In Premiere: File, Importa, seleziona l\'.srt. In DaVinci: trascina l\'.srt nel project bin. Entrambi lo trattano come traccia sottotitoli che puoi modificare ulteriormente in timeline.',
        },
        {
          q: 'Funziona in CapCut e Final Cut?',
          a: 'Sì. CapCut: tap su Captions, Import SRT. Final Cut: File, Import, Captions, scegli l\'.srt. Entrambi posizionano i sottotitoli ai tempi corretti in timeline.',
        },
        {
          q: 'Il generatore SRT è davvero gratis?',
          a: 'Sì. Nessuna tariffa per file, nessun contatore al minuto, nessuna email richiesta per file sotto i 25 MB. File tra 25 MB e 60 MB richiedono un account gratuito.',
        },
        {
          q: 'Qual è la dimensione massima del file?',
          a: '25 MB senza account, 60 MB con account gratuito.',
        },
        {
          q: 'Posso generare SRT da file audio (MP3, WAV)?',
          a: 'Sì. Rilascia direttamente il file audio. Generiamo l\'.srt con timecode come se fosse audio di un video. Utile per aggiungere sottotitoli quando sincronizzerai l\'audio con immagini o slide dopo.',
        },
        {
          q: 'I timecode driftano in un video lungo?',
          a: 'I timecode di Whisper sono allineati all\'audio reale, quindi drift è raro. Per file molto lunghi (60 minuti) può comparire un drift sotto il secondo negli ultimi sottotitoli. Se lo noti, correggi manualmente i sottotitoli colpiti.',
        },
        {
          q: 'Posso modificare i sottotitoli prima di scaricare?',
          a: 'Sì. Dopo la trascrizione, correggi le parole sbagliate nella vista risultato, poi scarica l\'.srt con le tue modifiche.',
        },
        {
          q: 'Quali lingue supporta il generatore SRT?',
          a: 'Oltre 50 lingue con rilevamento automatico. Per video più corti o contenuto non-inglese, scegli la lingua manualmente per risultati più affidabili.',
        },
        {
          q: 'L\'audio viene conservato?',
          a: 'No. Il file va al nostro provider di trascrizione, viene processato e scartato. Non conserviamo né l\'audio né l\'.srt generato.',
        },
        {
          q: 'Posso generare l\'SRT in una lingua diversa da quella dell\'audio?',
          a: 'Non direttamente. Genera l\'SRT nella lingua di partenza, poi traduci il testo dell\'.srt con DeepL o ChatGPT. I timecode restano uguali, cambia solo il testo.',
        },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: 'Stesso motore, mirato a output testo semplice.' },
        { href: '/it/timestamped-transcription', label: 'Trascrizione con timecode', desc: 'Per timecode a frase o parola in altri formati.' },
        { href: '/it/youtube-to-text', label: 'YouTube in testo', desc: 'Per sostituire i sottotitoli automatici di YouTube.' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo', desc: 'Per pura trascrizione audio.' },
      ]}
    />
  )
}
