import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV a Testo: Trascrizione WAV Online Gratuita | Mictoo',
  description:
    'Carica un file WAV, ottieni una trascrizione modificabile con timestamp in secondi. Creato per rimbalzi in studio, registrazioni sul campo, esportazioni DAW. Supporta PCM e Broadcast Wave (BWF). Gratuito, senza registrazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/wav-to-text',
    languages: LANGS,
  },

  openGraph: {
    title: "WAV a Testo: Trascrizione WAV Online Gratuita | Mictoo",
    description: "Carica un file WAV, ottieni una trascrizione modificabile con timestamp in secondi. Rimbalzi in studio, registrazioni sul campo, esportazioni DAW. PCM e BWF supportati.",
    url: "https://mictoo.com/it/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV a Testo: Trascrizione WAV Online Gratuita",
    description: "Carica un WAV, ottieni una trascrizione modificabile con timestamp in secondi. Rimbalzi in studio, registrazioni sul campo, esportazioni DAW.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItWavToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="WAV · PCM · BWF · Gratuito"
      h1First="WAV a Testo"
      h1Second="Rimbalzi in studio, registrazioni sul campo, esportazioni DAW"
      subtitle="WAV è il formato su cui il tuo DAW rimbalza, il tuo registratore sul campo scrive sulla scheda e gli studi di trasmissione standardizzano. Rilascia un WAV PCM o BWF e ottieni una trascrizione con timestamp in secondi. Gratuito, senza registrazione."
      highlightFormat="wav"
      previewFileName="registrazione-sul-campo.wav"
      previewWordCount={166}
      previewDurationLabel="14:22"
      previewLines={[
        { t: '0:00',  line: 'Scouting della location, giorno tre. Siamo sistemati sul lato est della cresta a circa seimila piedi.' },
        { t: '0:09',  line: 'Il vento arriva a raffiche da ovest, quindi ho il blimp attivato e ho ridotto a ottanta hertz.' },
        { t: '0:18',  line: 'I livelli stanno picchiando intorno a meno dodici sul microfono dell’intervista, il che sembra giusto per questa atmosfera.' },
        { t: '0:28',  line: 'Accanto a me c’è il ranger che lavora in questa sezione del parco da ventidue anni.' },
        { t: '0:37',  line: 'Quando le persone chiedono cosa è cambiato di più qui, inizio sempre con gli incendi nell’estate del 2020.' },
        { t: '0:47',  line: 'La foresta non è mai sembrata la stessa dopo, e i modelli della fauna selvatica hanno impiegato anni per riprendersi.' },
        { t: '0:57',  line: 'Puoi spiegarmi com’erano quelle prime settimane dopo gli incendi sul campo?' },
        { t: '1:05',  line: 'Certo. Il fumo è rimasto per circa sei settimane in totale, e la visibilità non è mai andata oltre mezzo miglio.' },
      ]}
      whyTitle="Perché Mictoo per la trascrizione WAV"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM e BWF, senza conversione',
          desc: 'Standard 16/24/32-bit PCM WAV e Broadcast Wave (BWF) con metadati. Accettiamo il file così com’è senza passaggi di conversione richiesti.',
        },
        {
          icon: 'target',
          title: 'Nessun artefatto di codec lossy',
          desc: 'Il PCM non compresso non aggiunge artefatti di compressione lossy. Una registrazione pulita può essere una fonte forte, ma il rumore ambientale e il posizionamento del microfono contano ancora.',
        },
        {
          icon: 'gear',
          title: 'Qualsiasi frequenza di campionamento, qualsiasi profondità di bit',
          desc: '44.1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper ricampiona internamente a 16 kHz mono, quindi la tua frequenza di origine non influisce sulla qualità.',
        },
        {
          icon: 'clip',
          title: 'I metadati BWF sono preservati da parte tua',
          desc: 'Ignoriamo i blocchi di metadati iXML/bext durante la trascrizione. Il tuo file WAV originale (e i suoi metadati) non viene mai modificato.',
        },
      ]}
      scenariosTitle="Quando la trascrizione da WAV è la scelta giusta"
      scenarios={[
        {
          icon: 'mic',
          title: 'Cattura con registratore sul campo',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. Qualunque cosa scriva il kit sul campo sulla scheda, rilascia il WAV per una trascrizione pulita.',
        },
        {
          icon: 'waveform',
          title: 'Rimbalzo DAW per riferimento',
          desc: 'Mix rough o rimbalzo solo vocale da Logic, Pro Tools o Ableton. Ottieni una versione testuale dei testi o del dialogo per riferimento.',
        },
        {
          icon: 'briefcase',
          title: 'Intervista di trasmissione',
          desc: 'Registrazione BWF da un’intervista radiofonica o studio di podcast. La trascrizione alimenta le note di show, citazioni e documentazione d’archivio.',
        },
        {
          icon: 'book',
          title: 'Archivio di storia orale',
          desc: 'Registrazione di storia orale a lungo termine catturata in WAV per la conservazione. La trascrizione rende l’archivio ricercabile e citabile.',
        },
        {
          icon: 'users',
          title: 'Registrazione di deposizione e legale',
          desc: 'Procedimenti registrati catturati come WAV non compresso per qualità probatoria. Trascrizione per revisione e citazione.',
        },
        {
          icon: 'sparkles',
          title: 'Lavoro di voiceover',
          desc: 'Passaggio ADR, registrazione di narrazione o sessione di voiceover rimbalzata in WAV. La trascrizione conferma che la lettura corrisponde al copione.',
        },
      ]}
      technicalTitle="Cosa c’è dentro un file WAV"
      technicalIntro="WAV è un contenitore comunemente usato per audio PCM non compresso. La sua risoluzione extra è utile per la produzione e l’archiviazione, mentre le condizioni di registrazione determinano ancora quanto sia comprensibile il discorso."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM e Broadcast Wave',
          desc: 'Registrazioni standard PCM WAV e BWF possono contenere lo stesso audio parlato; BWF aggiunge metadati di produzione attorno ad esso.',
        },
        {
          icon: 'gear',
          title: 'Frequenza di campionamento e profondità di bit',
          desc: 'Frequenze di campionamento elevate e profondità di bit preservano il margine di produzione, ma non possono riparare rumori, clipping o un microfono distante.',
        },
        {
          icon: 'cloud',
          title: 'Grande per design',
          desc: 'Il WAV non compresso cresce rapidamente. Per lunghe interviste, dividi la registrazione o crea una copia di discorso mono più piccola se necessario.',
        },
        {
          icon: 'clip',
          title: 'I metadati rimangono esterni',
          desc: 'BWF, iXML e metadati di cue non vengono aggiunti alla trascrizione e il file sorgente originale non viene modificato.',
        },
      ]}
      faq={[
        {
          q: 'Quali tipi di file WAV accetta Mictoo?',
          a: 'Standard PCM WAV a 16-bit, 24-bit o 32-bit float, qualsiasi frequenza di campionamento (44.1 kHz fino a 192 kHz), mono o stereo. Il Broadcast Wave (BWF) è anche completamente supportato con metadati iXML/bext preservati nel tuo file originale.',
        },
        {
          q: 'Una maggiore profondità di bit o frequenza di campionamento migliora la trascrizione?',
          a: 'No. Whisper ricampiona tutto l’audio a 16 kHz mono internamente prima della trascrizione, quindi la profondità di bit e la frequenza di campionamento oltre quel limite non influiscono sull’accuratezza. La qualità della registrazione (scelta del microfono, stanza, livello di rumore) conta molto di più rispetto alle specifiche del contenitore.',
        },
        {
          q: 'Il mio WAV in studio è oltre 60 MB. Cosa faccio?',
          a: 'Un WAV stereo a 24-bit 48 kHz è circa 17 MB al minuto, quindi qualsiasi registrazione oltre circa 3 minuti raggiunge il limite. Converti in WAV mono a 16 kHz (o MP3 a 128 kbps) con ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. La qualità della trascrizione è identica.',
        },
        {
          q: 'Conservate il mio file WAV?',
          a: 'No. Il file viene trasmesso al fornitore di trascrizione, elaborato una sola volta e rimosso dalla memoria. Non lo scriviamo mai su disco. La trascrizione viene memorizzata solo se ti registri e la aggiungi alla tua cronologia.',
        },
        {
          q: 'Posso mantenere i timestamp BWF originali nella trascrizione?',
          a: 'La trascrizione utilizza timestamp relativi dall’inizio del file (0:00 baseline). I metadati di tempo assoluto BWF non vengono trasferiti nell’output testuale. Abbina i due da parte tua se hai bisogno di allineamento con il timecode della scena.',
        },
        {
          q: 'Mictoo trascrive WAV non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con auto-rilevamento. Per registrazioni brevi o accenti insoliti, imposta esplicitamente la lingua nel menu a discesa per una rilevazione più pulita al primo passaggio.',
        },
        {
          q: 'Posso ottenere sottotitoli SRT per una registrazione WAV?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. Entrambi i formati includono timestamp allineati alla timeline originale del WAV per l’uso in editor video o strumenti di accessibilità.',
        },
        {
          q: 'Quanto tempo ci vuole per una trascrizione WAV?',
          a: 'Un WAV di 15 minuti di solito finisce in 20-40 secondi dall’inizio alla fine. I file più grandi vicino al limite di caricamento richiedono 40-80 secondi. La velocità di caricamento è spesso il passaggio più lungo poiché i file WAV sono grandi.',
        },
        {
          q: 'Supportate registrazioni a 32-bit float da Sound Devices?',
          a: 'Sì. I file WAV a 32-bit float da MixPre, F-series o registratori Zoom F-series sono accettati e trascritti allo stesso modo dei PCM standard.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua target e fai clic su Traduci. La traduzione funziona su GPT-4o-mini e appare accanto alla trascrizione originale.',
        },
      ]}
      ctaHeadline="Carica il tuo WAV, ottieni una trascrizione pulita"
      ctaSubtitle="PCM, BWF, qualsiasi frequenza di campionamento. Rimbalzi in studio, registrazioni sul campo, esportazioni DAW."
      ctaButton="Carica WAV per trascrivere"
    />
  )
}