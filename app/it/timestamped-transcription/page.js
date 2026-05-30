import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Trascrizione con timecode — generatore gratuito | Mictoo',
  description:
    'Trascrizione gratuita con timecode. Ottieni timecode a livello di parola o frase per qualsiasi audio o video. Perfetto per giornalismo, ricerca, podcasting, video editing.',
  alternates: { canonical: 'https://mictoo.com/it/timestamped-transcription', languages: LANGS },

  openGraph: {
    title: "Trascrizione con timecode — generatore gratuito | Mictoo",
    description: "Trascrizione gratuita con timecode. Ottieni timecode a livello di parola o frase per qualsiasi audio o video. Perfetto per giornalismo, ricerca, podcasting, video editing.",
    url: "https://mictoo.com/it/timestamped-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trascrizione con timecode — generatore gratuito | Mictoo",
    description: "Trascrizione gratuita con timecode. Ottieni timecode a livello di parola o frase per qualsiasi audio o video. Perfetto per giornalismo, ricerca, podcasting, video editing.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="Timecode · Citazioni · Gratis"
      h1={
        <>
          Trascrizione con timecode
          <br />
          <span className="text-brand-600">Trascrizioni time-coded gratuite</span>
        </>
      }
      subtitle="Timecode precisi per ogni riga o parola nel tuo audio. Torna a momenti esatti, cita passaggi specifici, costruisci capitoli. Gratis, senza registrazione."
      howItWorks={[
        {
          icon: '📂',
          title: 'Rilascia il file',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. Lavoriamo con formati audio e video.',
        },
        {
          icon: '⚡',
          title: 'L\'IA trascrive e mette i timecode',
          desc: 'Whisper large-v3 genera la trascrizione con timecode al millisecondo per ogni segmento (e opzionalmente ogni parola).',
        },
        {
          icon: '💾',
          title: 'Scegli granularità e scarica',
          desc: 'Scegli timecode a frase (il più comune) o timecode a parola (per lavoro di allineamento preciso). Scarica come TXT con timecode inline, come SRT per workflow sottotitoli, o copia negli appunti.',
        },
      ]}
      whyUse={{
        title: 'Perché Mictoo per la trascrizione con timecode',
        bullets: [
          {
            title: 'Timecode al millisecondo',
            desc: 'Whisper produce timecode con precisione al millisecondo. Più preciso di qualsiasi framerate video comune, più che sufficiente per lavoro di citazione.',
          },
          {
            title: 'A livello di frase di default, a livello di parola quando serve',
            desc: 'Livello frase tiene le trascrizioni leggibili. Livello parola è eccessivo per appunti, ma essenziale per video editing e allineamento musicale.',
          },
          {
            title: 'Gratis',
            desc: 'Nessun contatore al minuto. Nessun tier "i timecode costano extra". Stesso prezzo della trascrizione semplice (gratis).',
          },
          {
            title: 'Export SRT per workflow video',
            desc: 'I timecode in formato SRT funzionano direttamente in Premiere, DaVinci, CapCut e YouTube Studio come tracce sottotitoli.',
          },
          {
            title: 'Timecode inline nel TXT per citazioni',
            desc: 'Testo semplice con marcatori [00:01:23] all\'inizio di ogni segmento. Facile da incollare in appunti di ricerca, post di blog o bozze giornalistiche.',
          },
          {
            title: 'Nessun file conservato',
            desc: 'L\'audio va al provider di trascrizione ed è scartato. Niente resta sui nostri server.',
          },
        ],
      }}
      useCases={{
        title: 'A cosa serve la gente le trascrizioni con timecode',
        items: [
          {
            title: 'Giornalismo e citazioni',
            desc: 'Citi una fonte da un\'intervista? Metti il timecode accanto alla citazione nei tuoi appunti. Quando la redazione o il fact-checker chiede "dove esattamente l\'ha detto", hai la risposta in due secondi.',
          },
          {
            title: 'Capitoli per podcast',
            desc: 'Genera la trascrizione, scansiona per transizioni di sezione naturali, copia quei timecode nella funzione capitoli del tuo hoster podcast. I player moderni mostrano i capitoli nella barra di riproduzione.',
          },
          {
            title: 'Rough cut di video editing',
            desc: 'Prendi la trascrizione, marca le righe che vuoi tenere, trovale in timeline tramite il timecode. Il "paper editing" è molto più veloce dello scrubbing.',
          },
          {
            title: 'Ricerca accademica e coding qualitativo',
            desc: 'I ricercatori in NVivo, Atlas.ti o MAXQDA taggano segmenti di trascrizione con codici. I timecode ti lasciano tornare all\'audio per il momento esatto quando codifichi passaggi ambigui.',
          },
          {
            title: 'Allineamento musicale per video sing-along',
            desc: 'Timecode a parola per progetti tipo karaoke o lyric video. Ogni parola si illumina nel momento esatto in cui viene cantata.',
          },
        ],
      }}
      proTips={{
        title: 'Consigli per la trascrizione con timecode',
        tips: [
          {
            title: 'I timecode a frase funzionano per il 95% dei casi',
            desc: 'A meno che tu non stia facendo allineamento musicale o sottotitolazione video parola-per-parola, il livello frase è quello che vuoi. Più leggibile, più facile da modificare.',
          },
          {
            title: 'I timecode a parola gonfiano dimensione file e complessità',
            desc: 'Un SRT a parola per una conferenza di 30 minuti ha migliaia di entry. Usalo solo quando ti serve davvero precisione a parola.',
          },
          {
            title: 'Per i podcast, genera capitoli dalle pause naturali',
            desc: 'Cerca nella trascrizione transizioni di argomento, cambi agenda o introduzioni ospiti. Copia quei timecode nel tuo hoster podcast come marcatori di capitolo.',
          },
          {
            title: 'Per il giornalismo, salva il timecode con ogni citazione che potresti usare',
            desc: 'Il te del futuro, 3 settimane dopo, non si ricorderà da quale intervista è venuta una citazione, men che meno dove nell\'intervista. Il timecode risolve.',
          },
          {
            title: 'I timecode SRT sono zero-padded, quelli TXT no',
            desc: 'SRT usa 00:01:23,456. TXT di solito usa [1:23]. Se incolli in un CMS che si aspetta un formato, converti prima di incollare.',
          },
          {
            title: 'Per il video editing, il timecode nel nostro SRT si allinea all\'audio nel file originale',
            desc: 'Se ri-esporti il tuo video a una framerate diversa, i timecode calzano comunque, perché sono in tempo assoluto (millisecondi), non in frame.',
          },
          {
            title: 'I timecode driftano con audio scadente',
            desc: 'Se Whisper allucina parole durante musica o silenzio, i timecode di quelle parole fantasma sono stime. I timecode del parlato reale restano precisi. Fidati solo delle sezioni parlato, ignora le sezioni musicali.',
          },
        ],
      }}
      faq={[
        {
          q: 'Qual è la differenza tra timecode a frase e a parola?',
          a: 'Livello frase: un timecode per riga di testo (di solito una frase). Livello parola: un timecode per parola. Livello frase è leggibile e va bene per citazioni, podcasting e la maggior parte del lavoro video. Livello parola è per allineamento musicale, video karaoke e animazioni sottotitoli parola-per-parola.',
        },
        {
          q: 'Quanto sono precisi i timecode?',
          a: 'Whisper produce timecode al millisecondo. Calzano correttamente a qualsiasi framerate video comune (24, 25, 29.97, 30, 50, 60 fps) senza offset.',
        },
        {
          q: 'I timecode driftano in un file lungo?',
          a: 'Raramente. Whisper allinea i timecode all\'audio reale, quindi restano precisi anche su file di 60 minuti. Drift sotto il secondo può comparire negli ultimi segmenti di file molto lunghi. Se lo noti, sistema manualmente.',
        },
        {
          q: 'Posso ottenere un TXT con timecode inline, tipo [00:01:23] prima di ogni riga?',
          a: 'Sì. Scarica come TXT e inseriamo timecode a frase inline. Formato: [00:01:23] testo della frase qui.',
        },
        {
          q: 'L\'SRT contiene timecode?',
          a: 'Sì, è tutto il senso del formato SRT. Ogni entry sottotitolo ha un timecode di inizio e fine.',
        },
        {
          q: 'Come si confronta con i sottotitoli automatici di YouTube con timecode?',
          a: 'I sottotitoli automatici di YouTube hanno timecode, ma niente punteggiatura e precisione più bassa. I nostri hanno punteggiatura completa, precisione migliore e output SRT standard che funziona in qualsiasi video editor.',
        },
        {
          q: 'Posso saltare dalla trascrizione a un timecode specifico nell\'audio?',
          a: 'Nel nostro view risultato clicca un timecode qualsiasi per posizionare il player audio su quel momento. Dopo il download ti serve un player audio separato per farlo.',
        },
        {
          q: 'I timecode funzioneranno in Premiere o DaVinci Resolve?',
          a: 'Sì. Importa l\'SRT nella timeline. I sottotitoli appariranno automaticamente ai momenti giusti.',
        },
        {
          q: 'Quali lingue sono supportate per la trascrizione con timecode?',
          a: 'Le stesse oltre 50 lingue della trascrizione semplice. I timecode arrivano automaticamente con ogni trascrizione, indipendentemente dalla lingua.',
        },
        {
          q: 'L\'audio viene conservato?',
          a: 'No. Il file va al provider di trascrizione ed è scartato dopo l\'elaborazione.',
        },
        {
          q: 'Posso usare i timecode a parola per fare un video karaoke?',
          a: 'Sì, ma ti serve software video che possa renderizzare highlight parola-per-parola da un formato JSON o SRT. Alcuni strumenti (Premiere, After Effects, software karaoke specializzato) lo supportano direttamente.',
        },
        {
          q: 'Quanto ci mette a generare trascrizioni con timecode?',
          a: 'Uguale alla trascrizione semplice, circa l\'1-2% della durata audio. I timecode arrivano automaticamente, nessun tempo di elaborazione extra.',
        },
      ]}
      relatedLinks={[
        { href: '/it/free-srt-generator', label: 'Generatore SRT', desc: 'Stessi timecode, mirato a workflow sottotitoli.' },
        { href: '/it/podcast-transcription', label: 'Trascrizione podcast', desc: 'Timecode per show notes e marcatori capitolo.' },
        { href: '/it/interview-transcription', label: 'Trascrizione intervista', desc: 'Timecode per citazioni e ricerca fonti.' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo', desc: 'Per output solo testo senza timecode.' },
      ]}
    />
  )
}
