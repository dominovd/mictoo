import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC a Testo: Trascrizione Audio Raw AAC e ADTS | Mictoo',
  description:
    'Carica file .aac raw (stream ADTS o ADIF), ottieni una trascrizione modificabile in pochi secondi. Comune per download di podcast, archivi di trasmissione, audio estratto da iPhone.',
  alternates: {
    canonical: 'https://mictoo.com/it/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC a Testo: Trascrizione Audio Raw AAC e ADTS | Mictoo',
    description: 'Carica file .aac raw (stream ADTS o ADIF). Trascrizione modificabile in pochi secondi.',
    url: 'https://mictoo.com/it/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC a Testo: Trascrizione Stream Raw AAC',
    description: 'Carica file .aac (ADTS o ADIF). Trascrizione modificabile in pochi secondi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItAacToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="AAC · ADTS · Stream codec raw"
      h1First="AAC a Testo"
      h1Second="Stream ADTS raw, archivi di trasmissione, audio estratto"
      subtitle="I file .aac raw provengono spesso da stream di trasmissione, catture radio e tracce multimediali estratte. Trascina il file e Mictoo ne ispeziona la struttura prima di trascrivere l’audio parlato con Whisper large-v3."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9:44"
      previewLines={[
        { t: '0:00',  line: 'Stai ascoltando il programma del mattino. Sono le sette e quindici e siamo tornati con la nostra storia principale.' },
        { t: '0:08',  line: 'Durante la notte il consiglio comunale ha approvato la nuova espansione del trasporto dopo quasi tre anni di dibattito.' },
        { t: '0:17',  line: 'Il piano aggiungerà due nuove linee di metropolitana leggera e estenderà quella esistente di circa otto miglia.' },
        { t: '0:27',  line: 'Per analizzare cosa significhi per i pendolari quotidiani, siamo in studio con il nostro reporter sui trasporti.' },
        { t: '0:37',  line: 'Grazie per avermi invitato. La notizia è che il corridoio in direzione est finalmente ottiene un’opzione ferroviaria dopo vent’anni.' },
        { t: '0:47',  line: 'Per chi attualmente guida in quel tratto durante l’ora di punta, questo è veramente trasformativo.' },
        { t: '0:56',  line: 'I lavori iniziano la prossima primavera e la prima nuova linea dovrebbe aprire nel duemilaventinove.' },
        { t: '1:06',  line: 'Il consiglio stima che circa quaranta mila passeggeri quotidiani utilizzeranno i nuovi segmenti una volta aperti.' },
      ]}
      whyTitle="Perché scegliere Mictoo per la trascrizione AAC"
      whyCards={[
        {
          icon: 'waveform',
          title: 'ADTS gestito nativamente',
          desc: 'La maggior parte dei file .aac raw sono incapsulati in ADTS (Audio Data Transport Stream). Rileviamo la parola di sincronizzazione 0xFFF e passiamo il flusso a Whisper.',
        },
        {
          icon: 'gear',
          title: 'Supporto anche per ADIF e LATM',
          desc: 'Le incapsulazioni ADIF (Audio Data Interchange Format) e LATM, meno comuni, funzionano anch’esse. Nessun ripackaging manuale o passaggio ffmpeg necessario.',
        },
        {
          icon: 'clip',
          title: 'Nessun contenitore richiesto',
          desc: 'AAC di solito si trova all’interno di M4A o MP4, ma a volte il flusso raw finisce sul tuo disco. Mictoo accetta entrambi senza chiedere.',
        },
        {
          icon: 'sparkles',
          title: 'Sintesi AI per segmenti di archivio',
          desc: 'Segmento di trasmissione, clip di archivio radiofonico o dump di streaming. La sintesi AI ti consente di gestire gli archivi più rapidamente.',
        },
      ]}
      scenariosTitle="Quando AAC a testo è la scelta giusta"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Archivio radiofonico',
          desc: 'Segmento registrato da stream HLS o Icecast che viene fornito come AAC raw. La trascrizione rende l’archivio ricercabile.',
        },
        {
          icon: 'video',
          title: 'Cattura livestream HLS',
          desc: 'YouTube Live, Twitch o stream radio HLS catturati come sequenza di chunk .aac. Trascina il file, ottieni il testo.',
        },
        {
          icon: 'mic',
          title: 'Audio estratto da iPhone',
          desc: 'Audio estratto da una registrazione di iPhone o file condivisi che hanno perso il contenitore M4A e sono usciti come AAC raw.',
        },
        {
          icon: 'gear',
          title: 'Esportazione da servizio di streaming',
          desc: 'Piattaforma podcast o app di streaming che fornisce download di AAC raw. Salta la conversione e trascina direttamente il file.',
        },
        {
          icon: 'users',
          title: 'Intervista di trasmissione',
          desc: 'Intervista ospitata in radio archiviata come AAC raw. La trascrizione è la copia pronta per la citazione per articoli o programmi.',
        },
        {
          icon: 'editPen',
          title: 'Output intermedio FFmpeg',
          desc: 'Hai estratto la traccia audio con ffmpeg -c:a copy e hai ottenuto un .aac. Trascinalo qui invece di rifare il muxing in M4A prima.',
        },
      ]}
      technicalTitle="AAC raw confrontato con M4A"
      technicalIntro="AAC è un codec audio. Un file che termina in .aac è spesso un flusso incapsulato raw, mentre M4A di solito incapsula audio AAC in un contenitore MP4 con ricerca e metadati."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS è comune',
          desc: 'L’AAC raw è comunemente memorizzato come frame ADTS, specialmente quando l’audio è stato estratto da un flusso o da un workflow di trasmissione.',
        },
        {
          icon: 'layers',
          title: 'M4A aggiunge un contenitore',
          desc: 'M4A può contenere lo stesso codec AAC con temporizzazione, indicizzazione e metadati forniti da un contenitore basato su MP4.',
        },
        {
          icon: 'search',
          title: 'L’estensione è solo un indizio',
          desc: 'La struttura del file viene ispezionata durante l’elaborazione, quindi un’estensione fuorviante non diventa testo di trascrizione.',
        },
        {
          icon: 'briefcase',
          title: 'Workflow di trasmissione',
          desc: 'L’AAC raw appare spesso dopo la cattura HLS o l’estrazione audio. Mantieni il riferimento alla fonte originale per il contesto archivistico.',
        },
      ]}
      faq={[
        {
          q: 'Quali tipi di file AAC accetta Mictoo?',
          a: 'AAC raw in incapsulazione ADTS (la più comune), ADIF e LATM. Rileviamo la parola di sincronizzazione lato server e passiamo il flusso a Whisper. AAC all’interno di M4A (vedi la pagina M4A) funziona anch’esso ma è un percorso di assunzione diverso.',
        },
        {
          q: 'Qual è la differenza tra .aac e .m4a?',
          a: '.aac è tipicamente un bitstream ADTS raw: frame AAC con intestazioni di 7 byte, senza contenitore. .m4a è audio AAC incapsulato in un contenitore MP4 con metadati e indicizzazione di ricerca. Entrambi utilizzano il codec AAC, ma la struttura del file differisce.',
        },
        {
          q: 'Il mio file AAC è superiore a 60 MB. Cosa faccio?',
          a: 'AAC a bitrate di trasmissione tipici (128 kbps) è circa 1 MB al minuto, quindi 60 MB corrisponde a circa un’ora di registrazione. Se sei registrato, dividiamo automaticamente fino a circa 3 ore. Altrimenti, riduci la qualità: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: 'La trascrizione di AAC raw produce risultati peggiori rispetto a M4A?',
          a: 'No. Il flusso audio è identico; solo il contenitore differisce. Whisper campiona internamente a 16 kHz mono in entrambi i casi. L’accuratezza dipende dalla qualità della registrazione sottostante, non dal fatto che sia incapsulato in ADTS o MP4.',
        },
        {
          q: 'Mictoo trascrive AAC non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con rilevamento automatico. Per accenti insoliti o clip di trasmissione brevi, imposta esplicitamente la lingua per risultati più puliti al primo passaggio.',
        },
        {
          q: 'Posso ottenere sottotitoli SRT per il clip di trasmissione?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. I timestamp si allineano alla timeline originale dello stream AAC per l’uso in editor video, sovrapposizioni di accessibilità o indicizzazione archivistica.',
        },
        {
          q: 'Il mio file AAC viene mantenuto sui vostri server?',
          a: 'No. L’audio viene inviato al fornitore di trascrizione, elaborato una sola volta e rimosso dalla memoria. Non lo scriviamo mai su disco. Le trascrizioni vengono memorizzate solo se ti registri e salvi nella cronologia.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua di destinazione e fai clic su Traduci. La traduzione viene eseguita su GPT-4o-mini e appare accanto all’originale.',
        },
        {
          q: 'E se il file ha un’estensione .aac ma è effettivamente M4A?',
          a: 'Ispezioniamo i byte magici, non l’estensione. Se il file inizia con ftyp (firma M4A/MP4), lo trattiamo come M4A. Se inizia con byte di sincronizzazione ADTS, lo trattiamo come AAC raw. In entrambi i casi, la trascrizione funziona.',
        },
        {
          q: 'Quanto tempo ci vuole per una trascrizione AAC?',
          a: 'Un AAC di 10 minuti di solito termina in 15-30 secondi dall’inizio alla fine. File più grandi vicino al limite di caricamento richiedono 45-80 secondi. La velocità di caricamento è spesso il passaggio più lungo.',
        },
      ]}
      ctaHeadline="Trascina il tuo AAC raw e ottieni la trascrizione"
      ctaSubtitle="Incapsulazioni ADTS, ADIF e LATM. Archivi di trasmissione, catture HLS, audio estratto."
      ctaButton="Carica AAC per trascrivere"
    />
  )
}